module view {
    export class SmartCat extends ui.SmartCatUI {
        public claName = 'view.SmartCat';
        public comp: ui.SmartCatUI;
        private parentUI: view.SmartCat
        constructor() {
            super();
            this.init()
            this.initEvent()
        }

        private init() {
            this.comp = new ui.SmartCatUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        public setParentUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        private initEvent() {
            console.log(this.comp.my_smartcat)
            this.comp.my_smartcat.on(Laya.Event.CLICK, this, this.goTo, [1]);
            this.comp.withdraw_assets.on(Laya.Event.CLICK, this, this.goTo, [2]);
            this.comp.asset_details.on(Laya.Event.CLICK, this, this.goTo, [3]);
            this.comp.my_inviter.on(Laya.Event.CLICK, this, this.goTo, [5]);
            this.comp.inviter_earning.on(Laya.Event.CLICK, this, this.goTo, [6]);
            this.comp.apply_vip.on(Laya.Event.CLICK, this, this.goTo, [7]);
            this.comp.smartcat_explain.on(Laya.Event.CLICK, this, this.goTo, [8]);
        }
        
        private goTo(index: number): void {
            switch (index) {
                case 1:
                    this.comp.visible = false;
                    let wm = new view.smartcat.MySmartcat()
                    wm.setParentUI(this);
                    break;
                default:
                    break;
            }
        }
    }
}