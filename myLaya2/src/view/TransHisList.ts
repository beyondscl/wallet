/**Created by the LayaAirIDE*/
module view {
    import Handler = Laya.Handler;

    export class TransHisList extends ui.TransHisListUI {
        private comp: ui.TransHisListUI;
        private parentUI;

        private page = 1;
        private pageSize = 10;

        private originData: Array<mod.dealtemMod> = [];
        private scrollGate = false;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(data: Array<mod.dealtemMod>, parent: any) {
            this.parentUI = parent;
            this.loadData(this.page, this.pageSize);

        }

        private loadData(page, pageSize) {
            let wait = new view.alert.info(config.msg.WAIT_OPERATOR);
            wait.popup();
            service.transService.GetTransactionsList(mod.userMod.defWallet.wAddr, this.page, this.pageSize, 1, "", function (ret, args) {
                let v: view.TransHisList = args[0];
                ret = JSON.parse(ret);
                if (ret.retCode == 0 && ret.data) {
                    v.setListUp(service.transService.getTransListItem(ret.data));
                } else {
                    new view.alert.info(ret.reason ? ret.reason : config.msg.OPERATOR_ERROR).popup();
                    v.setListUp([]);
                }
                args[1].stop();
            }, [this, wait]);
        }

        private init() {
            this.comp = new ui.TransHisListUI();
            Laya.stage.addChild(this.comp);
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
        }

        private goBack() {
            Laya.stage.removeChild(this.comp);
            this.parentUI.visible = true;
        }

        //init deal history list
        private setListUp(data: Array<mod.dealtemMod>): void {
            for (let i = 0; i < data.length; i++) {
                this.originData.push(data[i]);
            }
            if (this.originData.length == 0) {
                this.comp.lab_nodata.visible = true;
                this.comp.list.array = [];
            } else {
                this.comp.lab_nodata.visible = false;
            }
            this.comp.list.vScrollBarSkin = "";
            this.comp.list.renderHandler = new Handler(this, this.onListRender, null, false);
            this.comp.list.array = this.originData;
            if (data.length != 0) {
                this.comp.list.vScrollBarSkin = "";
                this.comp.list.renderHandler = new Handler(this, this.onListRender, null, false);
                this.comp.list.array = this.originData;
                this.scrollGate = true;
                this.comp.list.scrollBar.on(Laya.Event.CHANGE, this, this.loadMore)
                this.comp.list.scrollTo((this.page - 1) * this.pageSize);
            }
        }

        private loadMore() {
            if (this.scrollGate && this.comp.list.scrollBar.max == this.comp.list.scrollBar.value) {
                this.scrollGate = false;
                this.page += 1;
                this.loadData(this.page, this.pageSize);
            }
        }

        private onListRender(cell: Box, index: number) {
            cell.on(Laya.Event.CLICK, this, this.onSelect, [index]);
            var data: mod.dealtemMod = this.comp.list.array[index];

            let cImg = cell.getChildByName('img') as Laya.Image;
            cImg.skin = data.getDealImgSrc();

            let cName = cell.getChildByName('lab_deal_name') as Label;
            cName.text = data.getDealChName();

            let addr = cell.getChildByName('lab_addr') as Label;
            addr.text = data.getDealType() + ": " + util.getAddr(data.getDealAddr());

            let amount = cell.getChildByName('lab_amount') as Label;
            amount.text = data.getDealSymbol() + data.dealAmount + " " + data.dealCoinType;
            amount.color = data.getDealColor()
        }

        private onSelect(index: number): void {
            this.comp.visible = false;
            new view.TransDetail().initData(this.comp.list.array[index], this.comp);
        }
    }
}