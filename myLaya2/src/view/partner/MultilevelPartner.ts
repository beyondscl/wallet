module view.partner {
    export class MultilevelPartner extends ui.partner.MultilevelPartnerUI {
        private comp: ui.partner.MultilevelPartnerUI;
        private ParentUI: view.partner.PartnerMain;

        constructor () {
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.partner.MultilevelPartnerUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
        }

        public setParentUI (v: view.partner.PartnerMain) {
            this.ParentUI = v;
        }

        public setData () {

        }

        private initEvent () {
            this.comp.back_btn.on(Laya.Event.CLICK, this, this.goBack);
        }

        private goBack () {
            Laya.stage.removeChild(this.comp);
            this.ParentUI.comp.visible = true;
            native.native.setCurrView(this.ParentUI, 2);
        }
    }
}