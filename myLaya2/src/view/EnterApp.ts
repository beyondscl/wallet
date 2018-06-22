/**Created by the LayaAirIDE*/
module view {
    import CreateWallet = view.CreateWallet;
    import Label = Laya.Label;
    import Handler = Laya.Handler;
    import Loader = Laya.Loader;
    import Sprite = Laya.Sprite;
    import Button = Laya.Button;

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
            this.spr_bg.loadImage("guide/timg.jpg", 0, 0, Laya.Browser.width, Laya.Browser.height);
            Laya.stage.addChild(this.spr_bg);
            Laya.stage.addChild(this.lab_title);
            Laya.stage.addChild(this.lab_subTitle);
            Laya.stage.addChild(this.btn_create);
            Laya.stage.addChild(this.btn_import);
        }

        private initEvent() {
            this.btn_create.on(Laya.Event.CLICK, this, this.createWallet);
            this.btn_create.on(Laya.Event.CLICK, this, this.importWallet);
        }

        private createWallet() {
            Laya.stage.removeChild(this.comp);
            Laya.stage.removeSelf();
            Laya.stage.removeChildren(0, 99);
            new CreateWallet();
        }

        private importWallet() {

        }
    }
}