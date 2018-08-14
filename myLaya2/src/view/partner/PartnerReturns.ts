module view.partner {
    export class PartnerReturns extends ui.partner.PartnerReturnsUI {
        private comp: ui.partner.PartnerReturnsUI;
        private ParentUI: view.SmartCat;

        constructor () {
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.partner.PartnerReturnsUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
        }

        public setParentUI (v: view.SmartCat) {
            this.ParentUI = v;
        }

        private initEvent () {
            this.comp.back_btn.on(Laya.Event.CLICK, this, this.goBack);
        }

        private goBack () {
            Laya.stage.removeChild(this.comp);
            this.ParentUI.comp.visible = false;
            native.native.setCurrView(this.ParentUI, 2);
        }
    }
}