/**Created by the LayaAirIDE*/
module view {
    export class WalletReceive extends ui.WalletReceiveUI {
        private comp: ui.WalletReceiveUI;
        private paretnUI: ui.WalletMainUI;

        constructor(wName: string) {
            super();
            this.init(wName);
            this.initEvent();
        }

        public setData(data: any) {

        }

        public setParentUI(main: ui.WalletMainUI) {
            this.paretnUI = main;
        }

        private init(wName: string) {
            this.comp = new ui.WalletReceiveUI();
            Laya.stage.addChild(this.comp);
            let wAddr = service.walletServcie.getWallet(wName).wAddr;
            this.comp.lab_wAddr.text = wAddr;
            util.createEwm(this.comp.img_wAddr.width, this.comp.img_wAddr.height, wAddr, this, this.getImgSrc);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private getImgSrc(qrcode: any) {
            console.log("getImgSrc：" + qrcode._oDrawing._elImage.src);
            if (qrcode && qrcode._oDrawing._elImage.src) {
                console.log("qrcode._oDrawing._elImage.src：" + qrcode._oDrawing._elImage.src);
                Laya.timer.clearAll(this);
                let img = new Laya.Image().loadImage(qrcode._oDrawing._elImage.src);
                img.x = this.comp.img_wAddr.x;
                img.y = this.comp.img_wAddr.y;
                this.comp.addChild(img)
            }
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_copy.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        }

        private goBack() {
            Laya.stage.removeChild(this.comp);
            if (this.paretnUI) {
                this.paretnUI.visible = true;
            } else {
                new view.WalletMain().initQueryData(mod.userMod.defWallet);
            }
        }

        private btnClick(type: number) {
            switch (type) {
                case (1):
                    util.getCopyValue(this.comp.lab_wAddr.text, this.copyBack, this.comp);
                    break;
                default:
                    console.log("error type");
                    break;
            }
        }

        private copyBack(comp: ui.WalletReceiveUI) {
            //需要调用本地native api
            comp.btn_copy.text = '已复制'
        }
    }
}