module view.partner {
    export class SearchPartner extends ui.partner.SearchPartnerUI {
        private comp: ui.partner.SearchPartnerUI;
        private ParentUI: view.partner.PartnerMain;

        constructor(){
            super();
        }

        private init () {
            this.comp = new ui.partner.SearchPartnerUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
        }

        public setParentUI (v: view.partner.PartnerMain){
            this.ParentUI = v;
        }

        private initEvent () {
            
        }
    }
}