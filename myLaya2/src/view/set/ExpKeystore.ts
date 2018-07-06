/**Created by the LayaAirIDE*/
module view.set {
    export class ExpKeystore extends ui.set.ExpKeystoreUI {
        private comp: ui.set.ExpKeystoreUI;
        private parentUI: ui.WalletDetailUI;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(key: string) {
            this.comp.text_keystore.text = key;
        }

        public setParetUI(parentUI: ui.WalletDetailUI) {
            this.parentUI = parentUI;
        }

        private init() {
            this.comp = new ui.set.ExpKeystoreUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_copy.on(Laya.Event.CLICK, this, this.btnClick, [3]);
            this.comp.btn_tab.selectHandler = new Laya.Handler(this, this.onSelect);

        }

        private onSelect(index: number): void {
            this.comp.viewStack.selectedIndex = index;
            if (index == 1) {
                let wallet = service.walletServcie.getWallet(this.parentUI.lab_wName.text);
                util.createEwm(this.comp.img_keystore.width, this.comp.img_keystore.height, wallet.wKeyStore, this, this.getImgSrc);
            }
        }

        private getImgSrc(qrcode: any) {
            if (qrcode._oDrawing._elImage.src) {
                console.log("qrcode._oDrawing._elImage.src：" + qrcode._oDrawing._elImage.src);
                Laya.timer.clearAll(this);
                let img = new Laya.Image().loadImage(qrcode._oDrawing._elImage.src);
                img.x = this.comp.img_keystore.x;
                img.y = this.comp.img_keystore.y;
                this.comp.item1.addChild(img);
            }
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.stage.removeChild(this.comp);
                this.parentUI.visible = true;
                return;
            }
            if (2 == index) {
            }
            if (3 == index) {
                util.getCopyValue(this.comp.text_keystore.text, this.copyBack, this.comp);
                return;
            }
        }

        private copyBack(comp: ui.set.ExpKeystoreUI) {
            comp.btn_copy.label = '已复制'
        }
    }
}