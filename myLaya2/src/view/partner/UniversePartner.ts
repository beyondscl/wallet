module view.partner {
    export class UniversePartner extends ui.partner.UniversePartnerUI {
        private comp: ui.partner.UniversePartnerUI;
        private ParentUI: view.partner.PartnerMain;
        private waiting: view.alert.waiting
        constructor () {
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.partner.UniversePartnerUI();
            Laya.stage.addChild(this.comp);
            this.waiting = new view.alert.waiting("正在加载...");
            this.waiting.popup();
            try {
                service.partnerService.partnerUniverList(this.univerCb, this);
            } catch(err) {

            }
            native.native.setCurrView(this, 2);
        }

        public setParentUI (v: view.partner.PartnerMain) {
            this.ParentUI = v;
        }

        private initEvent () {
            this.comp.back_btn.on(Laya.Event.CLICK, this, this.goBack);
        }

        private univerCb (ret, v) {
            v.waiting.stop();
            try {
                if (ret.retCode == 0) {
                    v.setList(ret.list);
                }
            } catch (err) {
                console.log("univerRequest:" + err);
            }
        }

        private setList (data) {
            this.comp.listContent.array = data;
            this.comp.listContent.vScrollBarSkin = '';
            this.comp.listContent.renderHandler = new Laya.Handler(this, this.onRender);
        }

        private onRender (cell: Laya.Box, index: number) {
            cell.on(Laya.Event.CLICK, this, this.btnClick,[index]);
            let data = this.comp.listContent.array[index];
            let area = cell.getChildByName('area') as Laya.Label;
            area.text = data.title;
            switch (index) {
                case 0:
                    area.color = '#2176FF';
                    break;
                case 1:
                    area.color = '#F5A623';
                    break;
                case 2:
                    area.color = '#F55449';
                    break;
                case 3:
                    area.color = '#745553';
                    break;
                case 4:
                    area.color = '#472B29';
                    break;
                case 5:
                    area.color = '#5CCBE3';
                    break;
                case 6:
                    area.color = '#598ADA';
                    break;
            }
            let personNum = cell.getChildByName('personNum') as Laya.Label;
            personNum.text = data.personNum;

            let startCatNum = cell.getChildByName('startCatNum') as Laya.Label;
            startCatNum.text = data.startCat;

        }

        private btnClick (index: number) {
            this.comp.visible = false;
            let multitle = new view.partner.MultilevelPartner();
            multitle.setParentUI(this);
            multitle.setData(this.comp.listContent.array[index].title, 4);
        }

        private goBack () {
            Laya.stage.removeChild(this.comp);
            this.ParentUI.comp.visible = true;
            native.native.setCurrView(this.ParentUI, 2);
        }
    }
}