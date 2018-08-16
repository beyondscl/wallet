module view.partner {
    export class OneLevelPartner extends ui.partner.OneLevelPartnerUI {
        private comp: ui.partner.OneLevelPartnerUI;
        private ParentUI: view.partner.PartnerMain;
        private waiting: view.alert.waiting;
        private data = [];
        private info: view.alert.info;
        private pageSize: number = 15;
        private page:number = 1;
        private flag = false;
        constructor () {
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.partner.OneLevelPartnerUI();
            Laya.stage.addChild(this.comp);
            try {
                this.waiting = new view.alert.waiting("正在加载...");
                this.waiting.popup();
                service.partnerService.partnerOneClass(this.page, this.pageSize, this.OneClassCb, this);
            } catch(err) {
                console.log("partnerOneClass" + err);
            }
            native.native.setCurrView(this, 2);
        }

        private OneClassCb (ret, v) {
            v.waiting.stop();
            try {
                if(ret.retCode == 0){
                    if (ret.list.length != 0) {
                        v.data = v.data.concat(ret.list);
                        v.setList(ret.list);
                    } else {
                        v.info = new view.alert.info('没有更多的数据');
                    }
                }
            } catch (err) {

            }
        }

        private setList (data) {
            if (data.lengt == 0 && this.data.length == 0) {
                this.comp.no_record.visible = false;
                this.comp.listContent.array = [];
            } else {
                this.comp.listContent.array = data;
                this.comp.listContent.vScrollBarSkin = '';
                this.comp.listContent.renderHandler = new Laya.Handler(this, this.onRenderUp);

                this.flag = true;
                this.comp.listContent.scrollBar.on(Laya.Event.CHANGE, this, this.loadMore);
                this.comp.listContent.scrollTo((this.page - 1) * this.pageSize);
            }
        }

        private loadMore () {
            if (this.flag && this.comp.listContent.scrollBar.max == this.comp.listContent.scrollBar.value) {
                this.flag = false;
                this.page ++ ;
                service.partnerService.partnerOneClass(this.page, this.pageSize, this.OneClassCb, this);
            }
        }

        private onRenderUp (cell:Laya.Box, index: number) {
            let data = this.comp.listContent.array[index];

            cell.on(Laya.Event.CLICK, this, this.toDetails, [this.comp.listContent.cells[index]]);

            let phoneNum = cell.getChildByName('phoneNum') as Laya.Label;
            phoneNum.text = data.phoneNum;

            let todayfitnit = cell.getChildByName('todayfitnit') as Laya.Label;
            todayfitnit.text = data.todayfitnit;

            let startCatStatus = cell.getChildByName('details').getChildByName('startCatStatus') as Laya.Label;
            startCatStatus.text = data.startCatStatus;

            let tgMoney = cell.getChildByName('details').getChildByName('tgMoney') as Laya.Label;
            tgMoney.text = data.tgMoney;

            let EthMoney = cell.getChildByName('details').getChildByName('EthMoney') as Laya.Label;
            EthMoney.text = data.EthMoney;

            let BtcMoney = cell.getChildByName('details').getChildByName('BtcMoney') as Laya.Label;
            BtcMoney.text = data.BtcMoney;

            let EfgMoney = cell.getChildByName('details').getChildByName('EfgMoney') as Laya.Label;
            EfgMoney.text = data.EfgMoney;

            let DghMoney = cell.getChildByName('details').getChildByName('DghMoney') as Laya.Label;
            DghMoney.text = data.DghMoney;

            let details = cell.getChildByName('details') as Laya.Image;
            details.height = 0;
            details.visible = false;

            let arrow = cell.getChildByName('arrow') as Laya.Image;
            arrow.skewY = 90;
            arrow.top = 0;
            
            cell.height = 50;
        }

        private toDetails (cell: Box) {
            let arrow = cell.getChildByName('arrow') as Laya.Image;
            let details = cell.getChildByName('details') as Laya.Image;

            if (cell.height == 300) {
                arrow.skewY = 90;
                arrow.top = 0;
                cell.height = 50;
                details.height = 0;
                details.visible = false;
            } else {
                arrow.skewY = -90;
                arrow.top = 40;
                cell.height = 300;
                details.height = 250;
                details.visible = true;
            }
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