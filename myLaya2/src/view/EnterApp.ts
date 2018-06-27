/**Created by the LayaAirIDE*/
module view {
    import CreateWallet = view.CreateWallet;

    export class EnterApp extends ui.EnterAppUI {
        //properties
        private comp: ui.EnterAppUI;

        constructor() {
            super();
            this.init();
            this.initEvent();
            new config.init().initData(mod.userMod.ethAddress);
        }

        private init() {
            this.comp = new ui.EnterAppUI();
            Laya.stage.addChild(this.comp);
            this.comp.addChild(this.lab_title);
            this.comp.addChild(this.lab_subTitle);
            this.comp.addChild(this.btn_create);
            this.comp.addChild(this.btn_import);
            Laya.stage.bgColor = 'white';
        }

        private initEvent() {
            this.btn_create.on(Laya.Event.CLICK, this, this.createWallet);
            this.btn_import.on(Laya.Event.CLICK, this, this.importWallet);
        }

        private createWallet() {
            Laya.stage.removeChild(this.comp);
            Laya.stage.removeSelf();
            Laya.stage.removeChildren(0, 99);
            new CreateWallet();
        }

        private importWallet() {
            this.comp.visible = false;
            new view.set.WalletImport().setParetUI(this.comp);
        }
    }
}