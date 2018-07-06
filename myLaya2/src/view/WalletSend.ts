/**Created by the LayaAirIDE*/
module view {


    export class WalletSend extends ui.WalletSendUI {
        private comp: ui.WalletSendUI;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(data: string) {
            this.comp.lab_coin_name.text = data.toUpperCase();
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
        }

        private goBack() {
            Laya.stage.removeChild(this.comp);
            new view.WalletMain().initQueryData(mod.userMod.defWallet);
        }

        private btnClick(type: number) {
            switch (type) {
                case (1):
                    if (this.checkArg()) {
                        this.comp.visible = false;
                        let sub = new view.WalletSendSubmit();
                        sub.setParenUI(this.comp);
                    }

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
            } else {
                this.comp.warn_amount.visible = false;
            }
            return true;
        }
    }
}