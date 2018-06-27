/**Created by the LayaAirIDE*/
module view {
    import Handler = Laya.Handler;

    export class WalletQuick extends ui.WalletQuickUI {
        //最好不要再界面创建list，可能导致第一个item无法获取点击事件
        private list_wallet = new Laya.List();
        private listData;
        private parentUI: ui.WalletMainUI;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            this.addChild(this.list_wallet);
        }

        private initEvent() {
            this.lab_sao.on(Laya.Event.CLICK, this, this.btnClick, [1])
            this.lab_create.on(Laya.Event.CLICK, this, this.btnClick, [2])
        }

        private btnClick(index: number) {
            if (index == 1) {
            }
            if (index == 2) {
                this.close();
                this.parentUI.visible = false;
                new CreateWallet().setParentUI(this.parentUI);
            }
        }

        public setParentUI(parentUI: ui.WalletMainUI) {
            this.parentUI = parentUI;
        }

        public initData(walletNames: Array<string>) {
            this.listData = walletNames;

            this.list_wallet.x = 0;
            this.list_wallet.top = 180;
            this.list_wallet.bottom = 0;
            this.list_wallet.repeatX = 1;
            this.list_wallet.repeatY = walletNames.length;
            this.list_wallet.vScrollBarSkin = '';
            this.list_wallet.selectEnable = true;
            this.list_wallet.selectHandler = new Handler(this, this.onSelectItem);
            this.list_wallet.renderHandler = new Handler(this, this.updateItem);
            this.list_wallet.itemRender = walltNameUI;
            this.list_wallet.array = walletNames;
        }

        private updateItem(cell: walltNameUI, index: number): void {
            cell.init(cell.dataSource);
        }

        private onSelectItem(index: number): void {
            let item = this.listData[index];
            this.stage.removeChild(this.parentUI);
            new view.WalletMain().initQueryData(testData.getWalletInfo(item));
            this.close(null, true);
        }
    }
}