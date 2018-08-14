/*
* name;
*/
module view.partner {
    export class PartnerMain extends ui.partner.partnerMainUI {
        public comp: ui.partner.partnerMainUI;
        private ParentUI: view.SmartCat;

        constructor () {
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.partner.partnerMainUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
        }

        public setParentUI (v: view.SmartCat) {
            this.ParentUI = v;
        }

        private initEvent () {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.one_class.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.two_class.on(Laya.Event.CLICK, this, this.btnClick, [2, 'two']);
            this.comp.three_class.on(Laya.Event.CLICK, this, this.btnClick, [2, 'three']);
            this.comp.universe_class.on(Laya.Event.CLICK, this, this.btnClick, [4]);
            this.comp.search.on(Laya.Event.CLICK, this, this.btnClick, [5])
        }

        private goBack () {
            this.comp.removeSelf();
            this.ParentUI.comp.visible = true;
            native.native.setCurrView(this.ParentUI, 2);
        }

        private btnClick (index: number, str: string) {
            switch (index) {
                 case 1: 
                    this.comp.visible = false;
                    let one_class = new view.partner.OneLevelPartner();
                    one_class.setParentUI(this);
                     break;
                case 2: 
                    this.comp.visible = false;
                    let Multi = new view.partner.MultilevelPartner();
                    Multi.setParentUI(this);
                    if (str == 'two') {

                    }
                    break;
                case 4: 
                    this.comp.visible = false;
                    let universe = new view.partner.UniversePartner();
                    universe.setParentUI(this);
                case 5:
                    this.comp.visible = false;
                    let search = new view.partner.SearchPartner();
                    search.setParentUI(this);
                default :
                    break;
            } 
        }
    }
}