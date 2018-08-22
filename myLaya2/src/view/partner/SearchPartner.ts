module view.partner {
    export class SearchPartner extends ui.partner.SearchPartnerUI {
        private comp: ui.partner.SearchPartnerUI;
        private ParentUI: view.partner.PartnerMain;
        private waiting: view.alert.waiting;
        private phoHistory = [];
        constructor(){
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.partner.SearchPartnerUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
            this.setData();
        }

        public setParentUI (v: view.partner.PartnerMain){
            this.ParentUI = v;
        }

        private initEvent () {
            // this.comp.search.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.back_btn.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.phoNum.on(Laya.Event.KEY_UP, this, this.btnClick, [1]);
            this.comp.cancel.on(Laya.Event.CLICK, this, this.btnClick, [2]);
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

        private setData() {
            let phoArray = util.getNoJsonItem('history') + '' || '';
            let rray = phoArray.split('-');
            this.setList(rray);
        }

        private setList (data: Array<string>) {
            this.comp.listPho.array = data;
            this.comp.listPho.renderHandler = new Laya.Handler(this, this.onrenderList);
        }

        private onrenderList (cell : Laya.Box, index: number) {
            cell.on(Laya.Event.CLICK, this, this.btnClick, [3, cell]);
            let num = cell.getChildByName('num') as Laya.Label;
            num.text = this.comp.listPho.array[index];
        }

        private searchListCb (data, v) {
            try {
                if (data.retCode == 0) {
                    if (data.type == 'One') {
                        v.comp.MultClass.visible = false;
                        v.comp.One_class.visible = true;
                        v.comp.noRecord.visible = false;
                        v.comp.history.visible = false;
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
                    } else if (data.type == 'Mulit' || data.type == 'More') {
                        v.comp.One_class.visible = false;
                        v.comp.MultClass.visible = true;
                        v.comp.noRecord.visible = false;
                        v.comp.history.visible = false;
                        v.comp.MultClass_level.text = data.list.title;
                        v.comp.MultClass_PhoNum.text = data.list.phoneNum;
                        v.comp.MultClass_status.text = data.list.status;
                        }
                    } else  {
                        v.comp.MultClass.visible = false;
                        v.comp.One_class.visible = false;
                        v.comp.history.visible = false;
                        v.comp.noRecord.visible = true;
                    }
                    v.comp.listPho.visible = false;
                    v.comp.picInput.right = 100;
                    v.comp.cancel.visible = true;
            } catch (err) {
                console.log("searchListCb:" + err);
            }
        }

        private btnClick (index: number, cell: Laya.Box) {
            let num = this.comp.phoNum.text;
            if (1 == index && num.length == 11) {
                this.comp.picInput.right = 100;
                this.comp.cancel.visible = true;
                // this.phoHistory.push(num);
                if (util.isNumber(num)) {
                     this.searchData(num);
                     let phoArray = util.getNoJsonItem('history').split('-') || [];
                     if (!util.isContain(phoArray, num)) {
                        // phoArray.push(num);
                        // phoArray.splice(0 , 1)
                       let newArray  =  [num].concat(phoArray); // 速度最快
                       if (newArray.length > 10) {
                            newArray.length = 10;
                       }
                       let newArrayStr = newArray.join('-');
                       util.setItemNoJson('history', newArrayStr);
                     }
                }
            }
            if (2 == index) {
                this.comp.picInput.right = 30;
                this.comp.cancel.visible = false;
                this.comp.history.visible = true;
                this.comp.listPho.visible = true;
                this.comp.noRecord.visible = false;
                this.comp.MultClass.visible = false;
                this.comp.One_class.visible = false;
                this.setData();
                this.comp.phoNum.text = '';
            }
            
            if (3 == index) {
                let num = cell.getChildByName('num') as Laya.Label;
                let numText = num.text
                this.searchData(numText);
                this.comp.phoNum.text = numText;
                let phoArray = util.getNoJsonItem('history').split('-') || [];
                if (!util.isContain(phoArray, numText)) {
                    // phoArray.push(num);
                    // phoArray.splice(0 , 1)
                    let newArray  =  [numText].concat(phoArray); // 速度最快
                    if (newArray.length > 10) {
                         newArray.length = 10;
                    }
                    let newArrayStr = newArray.join('-');
                    util.setItemNoJson('history', newArrayStr);
                }
            }
        }
    }
}