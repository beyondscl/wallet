module view.asset {
   export class Exchange extends ui.asset.ExchangeUI {
        private comp: ui.asset.ExchangeUI;
        private parentUI: view.asset.AssetTypeExtraction;

        constructor () {
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.asset.ExchangeUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
        }

        public setParentUI (v: view.asset.AssetTypeExtraction) {
            this.parentUI = v;
        }

        private initEvent () {
            this.comp.back_btn.on(Laya.Event.CLICK,this,this.goBack);
        }

        private goBack () {
            Laya.stage.removeChild(this.comp);
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI, 2);
        }
    } 
} 