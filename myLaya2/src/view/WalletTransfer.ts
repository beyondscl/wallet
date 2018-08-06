module view {
    import Handler = Laya.Handler;

    export class WalletTransfer extends ui.WalletTransferUI {
        public comp: ui.WalletTransferUI;
        private parentUI: view.WalletMain;
        private total: number = 0;

        private originData: Array<mod.dealtemMod> = [];
        private scrollGate = false;

        private refData: mod.walItemMod;
        private refCell: Box;

        private page = 1;
        private pageSize = 10;


        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setParentUI(parentUI: view.WalletMain) {
            this.parentUI = parentUI;
        }

        //传入的coin
        public setData(data: mod.walItemMod, cell: Box) {
            this.refData = data;
            this.refCell = cell;

            this.comp.lab_coin_name.text = data.itemName;
            let cValue = cell.getChildByName('cValue') as Label;
            let cTotal = cell.getChildByName('cTotal') as Label;
            this.total = Number(cTotal.text);
            this.comp.lab_coin_total.text = cValue.text.split("¥")[1];
            // this.setListUp(service.walletServcie.getDealListByWName(data.itemName));
            this.loadData(this.page, this.pageSize);

        }

        private loadData(page, pageSize) {
            let wait = new view.alert.info(config.msg.WAIT_OPERATOR);
            wait.popup();
            service.transService.GetTransactionsList(mod.userMod.defWallet.wAddr, page, pageSize, this.refData.itemName == 'ETH' ? 4 : 3, service.walletServcie.getCoinInfo(this.refData.itemName).coinAddr, function (ret, args) {
                let v: view.WalletTransfer = args[0];
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

        public getTransList() {

        }

        public refresh() {
            this.setData(this.refData, this.refCell);
        }

        private init() {
            this.comp = new ui.WalletTransferUI();
            this.name = config.resource.WALLET_TRANSFER;
            Laya.stage.addChild(this.comp);
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_send.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_receive.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        }

        private goBack() {
            util.clearView();
            Laya.stage.removeChild(this.comp);
            this.parentUI.comp.visible = true;
        }

        private btnClick(type: number) {
            if (type == 1) {
                this.comp.visible = false;
                let send = new view.WalletSend();
                send.setData(this.comp.lab_coin_name.text, this.total, 0, '');
                send.setParentUI(this);
                util.clearView();
                util.putView(this);
            } else if (type == 2) {
                this.comp.visible = false;
                new view.WalletReceive(this.parentUI.comp.lab_wName.text).setParentUI(this);
            }
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
            amount.text = data.getDealSymbol() + data.dealAmount + " " + this.comp.lab_coin_name.text;
            amount.color = data.getDealColor()
        }

        private onSelect(index: number): void {
            this.comp.visible = false;
            new view.TransDetail().initData(this.comp.list.array[index], this.comp);
        }
    }
}