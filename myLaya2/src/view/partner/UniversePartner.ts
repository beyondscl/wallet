module view.partner {
    export class UniversePartner extends ui.partner.UniversePartnerUI {
        private comp: ui.partner.UniversePartnerUI;
        private ParentUI: view.partner.PartnerMain;

        constructor () {
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.partner.UniversePartnerUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
        }

        public setParentUI (v: view.partner.PartnerMain) {
            this.ParentUI = v;
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