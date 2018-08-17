module view.partner {
    export class SearchPartner extends ui.partner.SearchPartnerUI {
        private comp: ui.partner.SearchPartnerUI;
        private ParentUI: view.partner.PartnerMain;
        private waiting: view.alert.waiting;
        constructor(){
            super();
            this.init();
            this.initEvent();
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
            this.comp.search.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.back_btn.on(Laya.Event.CLICK, this, this.goBack)
        }

        private goBack () {
            this.comp.removeSelf();
            this.ParentUI.comp.visible = true;
            native.native.setCurrView(this.ParentUI, 2);
        }

        private searchData (num: string) {
            try {
                service.partnerService.PartnerSearch(num, this.searchListCb, this);
            } catch (err) {
                console.log("ParnerSearch:" + err);
            }
        }

        private searchListCb (data, v) {
            try {
                if (data.retCode == 0) {
                    if (data.type == 'One') {
                        v.comp.MultClass.visible = false;
                        v.comp.One_class.visible = true;
                        v.comp.noRecord.visible = false;
                        v.comp.oneClass_level.text = data.list.title;
                        v.comp.oneClass_phoNum.text = data.list.phoneNum;
                        v.comp.oneClass_status.text = data.list.status;
                        v.comp.oneClass_tgMoney.text = data.list.tgMoney;
                        v.comp.oneClass_fitnit.text = data.list.fitnit;
                        v.comp.oneClass_iconType.text = data.list.iconType;
                        v.comp.oneClass_Eth.text = data.list.EthMoney;
                        v.comp.oneClass_Btc.text = data.list.BtcMoney;
                        v.comp.oneClass_Efg.text = data.list.EfgMoney;
                        v.comp.oneClass_Dgh.text = data.list.DghMoney;
                    } else {
                        v.comp.One_class.visible = false;
                        v.comp.MultClass.visible = true;
                        v.comp.noRecord.visible = false;
                        v.comp.MultClass_level.text = data.list.title;
                        v.comp.MultClass_PhoNum.text = data.list.phoneNum;
                        v.comp.MultClass_status.text = data.list.status;
                        }
                    } else {
                        v.comp.MultClass.visible = false;
                        v.comp.One_class.visible = false;
                        v.comp.noRecord.visible = true;
                    }
            } catch (err) {
                console.log("searchListCb:" + err);
            }
        }

        private btnClick (index: number) {
            if (1 == index) {
                let num = this.comp.phoNum.text;
                this.searchData(num);
            }
        }
    }
}