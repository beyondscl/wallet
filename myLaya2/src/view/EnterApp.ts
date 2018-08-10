/**Created by the LayaAirIDE*/
module view {
    import CreateWallet = view.CreateWallet;

    export class EnterApp extends ui.EnterAppUI {
        private comp: ui.EnterAppUI;
        private claName = "view.EnterApp";

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            this.comp = new ui.EnterAppUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this,1)
        }

        private initEvent() {
            this.comp.btn_create.on(Laya.Event.CLICK, this, this.createWallet);
            this.comp.btn_import.on(Laya.Event.CLICK, this, this.importWallet);
        }

        private createWallet() {
            this.comp.visible = false;
            new CreateWallet().setParentUI(this);
        }

        private importWallet() {
            this.comp.visible = false;
            new view.set.WalletImport().setParetUI(this);
        }
    }
}