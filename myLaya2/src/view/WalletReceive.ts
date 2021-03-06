/**Created by the LayaAirIDE*/
module view {
    export class WalletReceive extends ui.WalletReceiveUI {
        private comp: ui.WalletReceiveUI;
        private paretnUI: any;

        constructor(wName: string) {
            super();
            this.init(wName);
            this.initEvent();
        }

        public setData(data: any) {

        }

        public setParentUI(p: any) {
            this.paretnUI = p;
        }

        private init(wName: string) {//wName可以不要的。
            this.comp = new ui.WalletReceiveUI();
            Laya.stage.addChild(this.comp);
            this.comp.lab_wAddr.text = mod.userMod.defWallet.wAddr;
            // let val = {
            //     "address": mod.userMod.defWallet.wAddr,
            //     "amount": 0,
            //     "token": "ETH",
            //     "vender": "WWEC",
            //     "type": 2
            // };
            util.createEwm(this.comp.img_wAddr.width, this.comp.img_wAddr.height, mod.userMod.defWallet.wAddr, this, this.getImgSrc);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private getImgSrc(qrcode: any) {
            if (qrcode && qrcode._oDrawing._elImage.src) {
                Laya.timer.clearAll(this);
                this.comp.img_wAddr.skin = qrcode._oDrawing._elImage.src;
            }
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_copy.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.text_amount.on(Laya.Event.KEY_UP, this, this.btnClick, [2]);
            this.comp.btn_share.on(Laya.Event.CLICK, this, this.btnClick, [3]);           
        }

        private goBack() {
            Laya.stage.removeChild(this.comp);
            if (this.paretnUI.comp) {
                this.paretnUI.comp.visible = true;
            } else {
                new view.WalletMain().initQueryData(mod.userMod.defWallet);
            }
        }

        private btnClick(type: number) {
            switch (type) {
                case (1):
                    util.getCopyValue(this.comp.lab_wAddr.text, this.copyBack, this.comp);
                    break;
                case (2):
                    if (util.isNumber(this.comp.text_amount.text)) {
                        this.comp.warn_amount.visible = false;
                        // let val = {
                        //     "address": mod.userMod.defWallet.wAddr,
                        //     "amount": Number(this.comp.text_amount.text),
                        //     "token": "ETH",
                        //     "vender": "WWEC",
                        //     "type": 2
                        // };
                        util.createEwm(this.comp.img_wAddr.width, this.comp.img_wAddr.height, mod.userMod.defWallet.wAddr, this, this.getImgSrc);
                    } else {
                        this.comp.warn_amount.visible = true;
                        this.comp.text_amount.text = '';
                    }
                    break;
                case (3):
                    this.comp.visible = false;
                    new view.user.UseInvite().setParetUI(this);
                    break;
                default:
                    console.log("error type");
                    break;
            }
        }

        private copyBack(comp: ui.WalletReceiveUI) {
            //需要调用本地native api
            comp.btn_copy.label = '已复制'
        }
    }
}