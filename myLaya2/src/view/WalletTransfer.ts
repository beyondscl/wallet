module view {
    import List = Laya.List;
    import Handler = Laya.Handler;

    export class WalletTransfer extends ui.WalletTransferUI {
        private comp: ui.WalletTransferUI;
        private parentUI: ui.WalletMainUI;
        private list: List = new List();

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            this.comp = new ui.WalletTransferUI();
            this.comp.addChild(this.list);
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_send.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_receive.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        }

        public setParentUI(parentUI: ui.WalletMainUI) {
            this.parentUI = parentUI;
        }

        private goBack() {
            Laya.stage.removeChild(this.comp);
            new view.WalletMain().initQueryData(mod.userMod.defWallet);
        }

        public setData(data: mod.walItemMod) {
            this.comp.lab_coin_name.text = data.itemName;
            this.comp.lab_coin_total.text = data.itemMonType;
            this.setListUp(service.walletServcie.getDealListByWName(data.itemName));
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
            this.list.name = 'item0';
            this.list.itemRender = dealItemUI;
            this.list.repeatX = 1;
            this.list.repeatY = data.length;
            this.list.x = 0;
            this.list.bottom = 40;
            this.list.top = 110;
            // 使用但隐藏滚动条
            this.list.vScrollBarSkin = "";
            this.list.selectEnable = true;
            this.list.selectHandler = new Handler(this, this.onSelect, null, false);
            this.list.renderHandler = new Handler(this, this.updateItem, null, false);
            this.list.array = data;
        }

        private updateItem(cell: dealItemUI, index: number): void {
            cell.init(cell.dataSource);
        }

        private onSelect(index: number): void {
            this.comp.visible = false;
            new view.TransDetail().initData(this.list.array[index], this.comp);
        }
    }
}