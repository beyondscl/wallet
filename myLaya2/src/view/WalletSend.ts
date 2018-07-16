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
            let comp: view.WalletSend = args[0].comp;
            try {
                let resp = JSON.parse(ret);
                if (resp.type == 2 && resp.vender == 'WWEC') {
                    let addr = resp.address;
                    let amount = resp.amount;
                    comp.text_addr.text = addr;
                    comp.text_amount.text = amount;
                } else {
                    comp.text_addr.text = ret;
                    comp.text_amount.text = '0';
                }
            } catch (error) {
                comp.text_addr.text = ret;
                comp.text_amount.text = '0';
            }
        }
    }
}