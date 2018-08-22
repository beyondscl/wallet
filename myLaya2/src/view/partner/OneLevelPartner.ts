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

            cell.on(Laya.Event.CLICK, this, this.toDetails, [cell, index]);

            let phoneNum = cell.getChildByName('phoneNum') as Laya.Label;
            phoneNum.text = data.phoneNum;

            let todayfitnit = cell.getChildByName('todayfitnit') as Laya.Label;
            todayfitnit.text = data.todayfitnit;

            let startCatStatus = cell.getChildByName('details').getChildByName('startCatStatus') as Laya.Label;
            if (data.startCatStatus != '启动中...') {
                startCatStatus.color = '#F55449';
                let imgStatus = cell.getChildByName('imgStatus') as Laya.Image;
                imgStatus.skin = 'img/main/OvalRed.png';
            }
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
            arrow.skewX = 0;
            arrow.top = 19;
            
            cell.height = 50;
            cell.top = 95 * index;
        }

        private toDetails (cell: Laya.Box, index) {
            let arrow = cell.getChildByName('arrow') as Laya.Image;
            let details = cell.getChildByName('details') as Laya.Image;

            if (cell.height == 300) {
                arrow.skewX = 0;
                arrow.top = 19;
                cell.height = 50;
                for ( var i = index;i < this.comp.listContent.cells.length - 1; i++ ) {
                    this.comp.listContent.cells[i+1].top -= 280;
                }
                details.height = 0;
                details.visible = false;
            } else {
                arrow.skewX = 180;
                arrow.top = 53;
                cell.height = 300;
                for ( var i = index;i < this.comp.listContent.cells.length - 1; i++ ) {
                    this.comp.listContent.cells[i+1].top += 280;
                }
                details.height = 280;
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