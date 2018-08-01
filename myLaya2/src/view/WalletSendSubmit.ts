/**Created by the LayaAirIDE*/
module view {
    import Handler = Laya.Handler;

    export class WalletSendSubmit extends ui.WalletSendSubmitUI {
        private comp: ui.WalletSendSubmitUI;
        private parentUI: ui.WalletSendUI;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(data: ui.WalletSendUI) {
            this.comp.text_from.text = mod.userMod.defWallet.wAddr;
            this.comp.text_to.text = data.text_addr.text;
            this.comp.send_amout.text = data.text_amount.text;
            this.comp.coin_type.text = data.lab_coin_name.text.toUpperCase();
            //初始化gasprice
            let gasPrice = mod.userMod.gasPrice != 0 ? mod.userMod.gasPrice / 1e9 : 20
            this.comp.sli_gas.min = gasPrice;
            this.comp.sli_gas.max = gasPrice + 130;
            this.comp.sli_gas.value = gasPrice// gwei
            //获取gasprice
            let getGasPrice = {
                url: config.prod.getGasPrice,
                method: 'get',
                token: mod.userMod.token,
                data: {},
                callbackArgs:[this.comp],
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

        public setParenUI(parent: ui.WalletSendUI) {
            this.parentUI = parent;
            this.setData(parent);
        }

        private init() {
            this.comp = new ui.WalletSendSubmitUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_submit.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.sli_gas.changeHandler = new Handler(this, this.sliChange);
        }

        private goBack() {
            Laya.stage.removeChild(this.comp);
            if (this.parentUI) {
                this.parentUI.visible = true;
            } else {
                new view.WalletSend();
            }

        }

        private btnClick(type: number) {
            switch (type) {
                case (1):
                    //需要重新输入密码
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

        private enterPassCb(pass: string, comp: ui.WalletSendSubmitUI) {
            let defaultW = mod.userMod.defWallet;
            let fromAdd = comp.text_from.text;
            let toAddr = comp.text_to.text;
            let value = comp.send_amout.text;
            let gasPrice = comp.sli_gas.value;

            let pom = new alert.waiting("正在处理交易");
            pom.popup();
            let coins: Array<mod.coinItemMod> = service.walletServcie.getAllCoins();
            for (let i = 0; i < coins.length; i++) {
                let _coin = coins[i];
                if (comp.coin_type.text == _coin.coinName) {
                    if (_coin.abi) {//存在abi就转token
                        //收款人地址，钱
                        let sendArgs = [toAddr, Number(value) * 1e18];
                        service.walletServcie.sendToken(pass, fromAdd, _coin.coinAddr, _coin.abi, null, sendArgs, 0, gasPrice * 1e9, config.prod.tokenGasLimit, function (ret, args) {
                            let pom = args[1] as view.alert.waiting;
                            pom.stop();
                            if (ret && ret.retCode == 0) {
                                new alert.Warn("交易已发送请等待确认", "").popup();
                                let comp = args[0] as view.WalletSendSubmit;
                                comp.removeSelf();
                                util.showView([2]);
                            } else {
                                console.log("transfer submit error:", ret);
                                new alert.Warn("交易失败", "").popup();
                            }
                        }, [comp, pom, this.parentUI]);
                        return;
                    }
                }
            }
            //默认转账eth
            service.walletServcie.transfer(pass, fromAdd, toAddr, Number(value), gasPrice * 1e9, config.prod.gasLimit, function (ret, args: Array<any>) {
                let pom = args[1] as view.alert.waiting;
                pom.stop();
                if (ret && ret.retCode == 0) {
                    new alert.Warn("交易已发送请等待确认", "").popup();
                    let comp = args[0] as view.WalletSendSubmit;
                    comp.removeSelf();
                    util.showView([2]);
                } else {
                    console.log("transfer submit error:", ret);
                    new alert.Warn("交易失败", "").popup();
                }
            }, [comp, pom, this.parentUI]);//this.parentUI 没有传过去
        }

        private transferCb(ret, args: Array<any>) {
            let pom = args[1] as view.alert.waiting;
            pom.stop();
            if (ret && ret.retCode == 0) {
                let comp = args[0] as View;
                let comParent = args[2] as View;
                comp.removeSelf();
                comParent.visible = true;
                //记录交易!!!
            } else {
                new alert.Warn("交易失败", "").popup();
            }

        }

        //默认滑动选择范围是gwei
        private sliChange(value: number) {
            let lab_max_gas = value * 1e9 / 1e18 * config.prod.gasLimit;//矿工费用eth
            let lab_max_gas_usd = Number(lab_max_gas * mod.userMod.ethToUsd).toFixed(2);//矿工费用 usd

            let lab_max_total = Number(this.comp.send_amout.text) + Number(lab_max_gas);//总量eth
            var lab_max_total_usd = Number(lab_max_total * mod.userMod.ethToUsd).toFixed(2);//总量usd

            this.comp.lab_max_gas.text = lab_max_gas.toFixed(6) + " " + this.comp.coin_type.text;
            this.comp.lab_max_gas_usd.text = lab_max_gas_usd + " ¥";
            this.comp.lab_max_total.text = lab_max_total.toFixed(6) + " " + this.comp.coin_type.text;
            if (!util.isContain(config.prod.expCoins, this.comp.coin_type.text)) {
                this.comp.lab_max_total_usd.text = lab_max_total_usd + " ¥";
            }
        }
    }
}