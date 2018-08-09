/**Created by the LayaAirIDE*/
module view {
    import Handler = Laya.Handler;

    export class WalletSendSubmit extends ui.WalletSendSubmitUI {
        public claName = "view.WalletSendSubmit";
        public comp: ui.WalletSendSubmitUI;
        private parentUI: view.WalletSend

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(p: view.WalletSend) {
            let data = p.comp;
            this.comp.text_from.text = mod.userMod.defWallet.wAddr;
            this.comp.text_to.text = data.text_addr.text;
            this.comp.send_amout.text = data.text_amount.text;
            this.comp.coin_type.text = data.lab_coin_name.text.toUpperCase();
            //init gasprice
            let gasPrice = mod.userMod.gasPrice != 0 ? mod.userMod.gasPrice / 1e9 : 20
            this.comp.sli_gas.min = gasPrice;
            this.comp.sli_gas.max = gasPrice + 130;
            this.comp.sli_gas.value = gasPrice// gwei
            //get new  gasprice
            let getGasPrice = {
                url: config.prod.getGasPrice,
                method: 'get',
                token: mod.userMod.token,
                data: {},
                callbackArgs: [this.comp],
                async: true,
                success: function (ret, args) {
                    ret = JSON.parse(ret)
                    if (ret && ret.retCode == 0) {
                        mod.userMod.gasPrice = ret.gasPrice / 1e9;
                        let comp = args[0] as view.WalletSendSubmit;
                        comp.sli_gas.min = mod.userMod.gasPrice;
                        comp.sli_gas.max = mod.userMod.gasPrice + 50;
                        comp.sli_gas.value = mod.userMod.gasPrice;// gwei
                        console.log("get eth GasPrice ok:", ret);
                    } else {
                        console.log("getGasPrice error:", ret);
                    }
                },
                complete: function () {
                },
                error: function (a, b) {
                    console.log("gasprice error:", a, b);
                }
            }
            Laya.Browser.window.Ajax.get(getGasPrice);
        }

        public setParenUI(parent: view.WalletSend) {
            this.parentUI = parent;
            this.setData(parent);
        }

        private init() {
            this.comp = new ui.WalletSendSubmitUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this , 2);
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_submit.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.sli_gas.changeHandler = new Handler(this, this.sliChange);
        }

        private goBack() {
            Laya.stage.removeChild(this.comp);
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI , 2);
        }

        private btnClick(type: number) {
            switch (type) {
                case (1):
                    let enterpass = new view.alert.EnterPass();
                    enterpass.setParentUI(this.comp);
                    enterpass.setCallBack(this.enterPassCb);
                    enterpass.setData("To: " + util.getAddr(this.comp.text_to.text), this.comp.send_amout.text + " " + this.comp.coin_type.text);
                    enterpass.popup();
                    break;
                default:
                    console.log("error type");
                    break;
            }
        }

        //多层回调嵌套
        private enterPassCb(pass: string, comp: ui.WalletSendSubmitUI) {
            let defaultW = mod.userMod.defWallet;
            let fromAdd = comp.text_from.text;
            let toAddr = comp.text_to.text;
            let value = comp.send_amout.text;
            let gasPrice = comp.sli_gas.value;

            let pom = new alert.waiting(config.msg.WAIT_OPERATOR);
            pom.popup();
            let _coin = service.walletServcie.getCoinInfo(comp.coin_type.text);
            if (_coin.abi) {
                let sendArgs = [toAddr, Number(value) * 1e18];
                service.walletServcie.sendToken(pass, fromAdd, _coin.coinAddr, _coin.abi, null, sendArgs, 0, gasPrice * 1e9, config.prod.tokenGasLimit, function (ret, args) {
                    let pom = args[1] as view.alert.waiting;
                    pom.visible = false;
                    pom.stop();
                    if (ret && ret.retCode == 0) {
                        new alert.Warn(config.msg.TX_OK, "").popup();
                        let comp = args[0] as view.WalletSendSubmit;
                        comp.removeSelf();
                        util.showView([2]);
                    } else if (ret && ret.retCode == 2) {
                        new alert.Warn(config.msg.PASS_ERROR, "").popup();
                    } else {
                        console.log("transfer submit error:", ret);
                        new alert.Warn(config.msg.TX_ERROR, config.msg.TX_ERROR_GAS).popup();
                    }
                }, [comp, pom, this.parentUI]);
                return;
            }

            //默认转账eth
            service.walletServcie.transfer(pass, fromAdd, toAddr, Number(value), gasPrice * 1e9, config.prod.gasLimit, function (ret, args: Array<any>) {
                let pom = args[1] as view.alert.waiting;
                pom.visible = false;
                pom.stop();
                if (ret && ret.retCode == 0) {
                    new alert.Warn(config.msg.TX_OK, "").popup();
                    let comp = args[0] as view.WalletSendSubmit;
                    comp.removeSelf();
                    util.showView([2]);
                } else if (ret && ret.retCode == 2) {
                    new alert.Warn(config.msg.PASS_ERROR, "").popup();
                } else {
                    console.log("transfer submit error:", ret);
                    new alert.Warn(config.msg.TX_ERROR, config.msg.TX_ERROR_GAS).popup();
                }
            }, [comp, pom, this.parentUI]);
        }

        //默认滑动选择范围是gwei
        // 非eth的计算可以自己修改
        private sliChange(value: number) {
            let lab_max_gas = value * 1e9 / 1e18 * config.prod.gasLimit;//矿工费用eth
            let lab_max_gas_usd = Number(lab_max_gas * mod.userMod.ethToUsd*mod.userMod.usdToRmb).toFixed(2);//矿工费用 rmb
            this.comp.lab_max_gas.text = lab_max_gas.toFixed(4) + " ETH";
            this.comp.lab_max_gas_usd.text = lab_max_gas_usd + " ¥";

            if ("ETH"==this.comp.coin_type.text) {
                let lab_max_total = 0;
                lab_max_total = Number(this.comp.send_amout.text) + Number(lab_max_gas);//总量eth
                this.comp.lab_max_total.text = lab_max_total.toFixed(4) + " ETH";
                let lab_max_total_usd = Number(lab_max_total * mod.userMod.ethToUsd*mod.userMod.usdToRmb).toFixed(2);//总量rmb
                this.comp.lab_max_total_usd.text = lab_max_total_usd + " ¥";
            }else{
                let lab_max_total = 0;
                lab_max_total = Number(this.comp.send_amout.text);//总量eth
                this.comp.lab_max_total.text = lab_max_total.toFixed(4) + " "+this.comp.coin_type.text + " "+Number(lab_max_gas).toFixed(4)+" ETH";//总量币+eth
                this.comp.lab_max_total_usd.text = "- ¥";
            }
        }
    }
}