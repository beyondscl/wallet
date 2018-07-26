/**Created by the LayaAirIDE*/
module view {


    export class WalletSend extends ui.WalletSendUI {
        private comp: ui.WalletSendUI;
        private total: number = 0;
        private parentUI: any;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        //data:coin type total:number,amount:转账金额,addr:地址
        public setData(data: string, total: number, amount: number, addr: string) {
            this.comp.lab_coin_name.text = data.toUpperCase();
            this.comp.text_amount.text = amount + '';
            this.comp.text_addr.text = addr;
            this.total = total;
        }

        //parentUI 传入的是this,不再是comp
        public setParentUI(parentUI: View) {
            this.parentUI = parentUI;
        }

        private init() {
            this.comp = new ui.WalletSendUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_next.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_sys.on(Laya.Event.CLICK, this, this.btnClick, [2]);

        }

        //1来自主页
        //2来自转账页面
        // 设置总金额

        private goBack() {
            Laya.stage.removeChild(this.comp);
            if (this.parentUI && this.parentUI.comp) {
                this.parentUI.comp.visible = true;
            } else {
                new view.WalletMain().initQueryData(mod.userMod.defWallet);
            }
        }

        private btnClick(type: number) {
            switch (type) {
                case (1):
                    if (this.checkArg()) {
                        this.comp.visible = false;
                        let sub = new view.WalletSendSubmit();
                        sub.setParenUI(this.comp);
                        util.putView(this);
                    }
                    break;
                case (2):
                    native.native.startCamara(this.startCamaraCb, [this]);
                    break;
                default:
                    console.log("error type");
                    break;
            }
        }

        private checkArg() {
            let addr = this.comp.text_addr.text;
            if (!addr || addr.length != 42) {
                this.comp.warn_Addr.visible = true
                return false;
            } else {
                this.comp.warn_Addr.visible = false;
            }
            let amount = this.comp.text_amount.text;
            if (!util.isNumber(amount)) {
                this.comp.warn_amount.visible = true
                return false;
            }
            if (Number(amount) > this.total) {
                this.comp.warn_amount.text = "超出钱包余额:" + this.total;
                this.comp.warn_amount.visible = true;
                return false;
            }
            if (Number(amount) <= 0) {
                this.comp.warn_amount.text = "转账金额必须大于0";
                this.comp.warn_amount.visible = true;
                return false;
            }
            this.comp.warn_amount.visible = false;
            return true;
        }

        private startCamaraCb(ret, args) {
            let wait = new view.alert.waiting(config.msg.WAIT_OPERATOR);
            wait.popup();
            let comp: view.WalletSend = args[0].comp;
            try {//trust
                let resp1 = ret;
                if (resp1 && resp1.length == 42) {
                    let addr = resp1;
                    let amount = "0";
                    comp.text_addr.text = addr;
                    comp.text_amount.text = amount;
                    wait.stop();
                    return;
                }
            } catch (error) {
                console.error("尝试解析trust二维码失败");
            }
            try {
                let resp = JSON.parse(ret);
                if (resp.type == 2 && resp.vender == 'WWEC') {
                    let addr = resp.address;
                    let amount = resp.amount;
                    comp.text_addr.text = addr;
                    comp.text_amount.text = amount;
                    wait.stop();
                    return;
                } 
            } catch (error) {
                console.error("尝试解析wwec二维码失败");
            }
            try { //imtoken iban:XE04P02MNI75D9LSZ8XJ8Z68Q7KYFEW5UWF?amount=0&token=ETH
                let resp1 = ret;
                if (resp1.indexOf("iban:") == 0 && resp1.indexOf("amount") != -1 && resp1.indexOf("token") != -1) {
                    let resp2 = resp1.split("?");
                    let iban = resp2[0].replace("iban:", "");
                    let amount = resp2[1].split("&")[0].replace("amount=", "");
                    service.userServcie.ibanOrAddr(true, iban, function (ret, args) {
                        wait.stop();
                        ret = JSON.parse(ret);
                        if (ret.retCode == 0) {
                            let addr = ret.data.address;
                            let amount = args[0];
                            comp.text_addr.text = addr;
                            comp.text_amount.text = amount;
                        } else {
                            //请求失败或者转换失败
                            let addr = ret;
                            let amount = '0'
                            comp.text_addr.text = addr;
                            comp.text_amount.text = amount;
                        }
                    }, [amount]);
                }
                return;
            } catch (error) {
                console.error("尝试解析imtoken二维码失败");
            }
            wait.stop();
            let addr = ret;
            let amount = '0'
            comp.text_addr.text = addr;
            comp.text_amount.text = amount;
        }
    }
}