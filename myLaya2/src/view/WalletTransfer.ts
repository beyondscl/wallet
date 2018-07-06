module view {
    import Handler = Laya.Handler;

    export class WalletTransfer extends ui.WalletTransferUI {
        private comp: ui.WalletTransferUI;
        private parentUI: ui.WalletMainUI;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setParentUI(parentUI: ui.WalletMainUI) {
            this.parentUI = parentUI;
        }

        public setData(data: mod.walItemMod) {
            this.comp.lab_coin_name.text = data.itemName;
            this.comp.lab_coin_total.text = data.itemMonType;
            this.setListUp(service.walletServcie.getDealListByWName(data.itemName));
        }

        private init() {
            this.comp = new ui.WalletTransferUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_send.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_receive.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        }

        private goBack() {
            Laya.stage.removeChild(this.comp);
            new view.WalletMain().initQueryData(mod.userMod.defWallet);
        }

        private btnClick(type: number) {
            Laya.stage.removeChild(this.comp);
            if (type == 1) {
                new view.WalletSend().setData(this.comp.lab_coin_name.text);
            } else if (type == 2) {
                new view.WalletReceive(this.parentUI.lab_wName.text);
            }
        }

        //init deal history list
        private setListUp(data: Array<mod.dealtemMod>): void {
            this.comp.list.repeatX = 1;
            this.comp.list.repeatY = data.length;
            // 使用但隐藏滚动条
            this.comp.list.vScrollBarSkin = "";
            this.comp.list.selectHandler = new Handler(this, this.onSelect, null, false);
            this.comp.list.renderHandler = new Handler(this, this.onListRender, null, false);
            this.comp.list.array = data;
        }

        private onListRender(cell: Box, index: number) {
            var data: mod.dealtemMod = this.comp.list.array[index];

            let cImg = cell.getChildByName('img') as Laya.Image;
            cImg.skin = data.getDealImgSrc();

            let cName = cell.getChildByName('lab_deal_name') as Label;
            cName.text = data.getDealChName();

            let addr = cell.getChildByName('lab_addr') as Label;
            let trans_type1 = data.dealType.toUpperCase() == config.msg.deal_transfer_in ? 'From' : 'To';//from | to
            addr.text = trans_type1 + ": " + util.getAddr(data.getDealAddr());

            let amount = cell.getChildByName('lab_amount') as Label;
            let trans_type = data.dealType.toUpperCase() == config.msg.deal_transfer_in ? '+' : '-';//+ | -
            amount.text = trans_type + data.dealAmount + " " + data.dealCoinType.toUpperCase();
            amount.color = data.dealType.toUpperCase() == config.msg.deal_transfer_out ? 'red' : 'green';
        }

        private onSelect(index: number): void {
            this.comp.visible = false;
            new view.TransDetail().initData(this.comp.list.array[index], this.comp);
        }
    }
}