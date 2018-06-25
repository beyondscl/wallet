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

        private init() {
            this.comp = new ui.set.ExpKeystoreUI();
            Laya.stage.addChild(this.comp);
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
                Laya.timer.clearAll(this);
                let img = new Laya.Image().loadImage(qrcode._oDrawing._elImage.src);
                img.x = this.comp.img_keystore.x;
                img.y = this.comp.img_keystore.y + this.comp.viewStack.y;//因为在box中
                this.comp.addChild(img)
            }
        }

        public setData(key: string) {
            this.comp.text_keystore.text = key;
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
                //复制
                return;
            }
        }

        public setParetUI(parentUI: ui.WalletDetailUI) {
            this.parentUI = parentUI;
        }
    }
}