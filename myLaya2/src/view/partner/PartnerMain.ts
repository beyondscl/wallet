/*
* name;
*/
module view.partner {
    export class PartnerMain extends ui.partner.partnerMainUI {
        public comp: ui.partner.partnerMainUI;
        private ParentUI: view.SmartCat;
        private waiting: view.alert.waiting
        constructor () {
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.partner.partnerMainUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
            try {
                this.waiting = new view.alert.waiting("正在加载...");
                this.waiting.popup();
                service.partnerService.partnerMain(this.partnerMainCb, this);
            } catch(err){
                console.log("partnerMainErr" + err);
            }
        }

        public setParentUI (v: view.SmartCat) {
            this.ParentUI = v;
        }

        private initEvent () {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.goBack);
            // this.comp.one_class.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            // this.comp.two_class.on(Laya.Event.CLICK, this, this.btnClick, [2, 'two']);
            // this.comp.three_class.on(Laya.Event.CLICK, this, this.btnClick, [2, 'three']);
            this.comp.universe_class.on(Laya.Event.CLICK, this, this.btnClick, [4]);
            this.comp.search.on(Laya.Event.CLICK, this, this.btnClick, [5]);
        }

        private goBack () {
            this.comp.removeSelf();
            this.ParentUI.comp.visible = true;
            native.native.setCurrView(this.ParentUI, 2);
        }

        private partnerMainCb (ret, v: any) {
            v.waiting.stop();
            // let ret = ret
            if (ret.retCode == 0) {
                v.setList(ret.list);
            }
        }

        private setList (data) {
            this.comp.listContent.array = data;
            this.comp.listContent.vScrollBarSkin = '';
            this.comp.listContent.repeatY = data.length;
            this.comp.listContent.renderHandler = new Laya.Handler(this, this.onlistRender);
        }

        private onlistRender (cell: Laya.Box, index: number) {
            cell.on(Laya.Event.CLICK, this, this.btnClick, [index]);
            let data = this.comp.listContent.array[index];
            let benefit_sta = cell.getChildByName('benefit_sta') as Laya.Label;
            if (data.moneySta != '正常') {
                benefit_sta.color = 'red';
            }
            benefit_sta.text = data.moneySta;

            let title = cell.getChildByName('title') as Laya.Label;
            title.text = data.title;

            let benefit_share = cell.getChildByName('benefit_share') as Laya.Label;
            benefit_share.text = data.share;

            let startCat_num = cell.getChildByName('startCat_num') as Laya.Label;
            startCat_num.text = data.startCatNum;

            let person_num = cell.getChildByName('person_num') as Laya.Label;
            person_num.text = data.personNUm;
        }

        private btnClick (index: number, str: string) {
            switch (index) {
                 case 0: 
                    this.comp.visible = false;
                    let one_class = new view.partner.OneLevelPartner();
                    one_class.setParentUI(this);
                    break;
                case 1: 
                    this.comp.visible = false;
                    var  Multi = new view.partner.MultilevelPartner();
                    Multi.setParentUI(this);
                    Multi.setData(this.comp.listContent.array[index].title, 2);
                    break;
                case 2: 
                    this.comp.visible = false;
                    var three = new view.partner.MultilevelPartner();
                    three.setParentUI(this);
                    three.setData(this.comp.listContent.array[index].title, 3);
                    break;
                case 4: 
                    this.comp.visible = false;
                    let universe = new view.partner.UniversePartner();
                    universe.setParentUI(this);
                    break;
                case 5:
                    this.comp.visible = false;
                    let search = new view.partner.SearchPartner();
                    search.setParentUI(this);
                    break;
                default :
                    break;
            } 
        }
    }
}