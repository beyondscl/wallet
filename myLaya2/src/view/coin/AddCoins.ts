/**Created by the LayaAirIDE*/
module view.coin {
    export class AddCoins extends ui.coin.AddCoinsUI {
        private comp: ui.coin.AddCoinsUI;
        private parentUI: ui.WalletMainUI;
        private listCoin = new Laya.List();

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            this.comp = new ui.coin.AddCoinsUI();
            this.comp.addChild(this.listCoin);
            this.stage.addChild(this.comp)
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.btnClick, [0]);
            this.comp.btn_query.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        }

        private btnClick(index: number) {
            switch (index) {
                case 0:
                    this.updateSelectItem();
                    this.stage.removeChild(this.comp);
                    new view.WalletMain().initQueryData(testData.getWalletInfo(this.parentUI.lab_wName.text));
                    break;
                case 1:

                    break;
                case 2:

                    break;
                default:
                    break;
            }
        }

        public setParentUI(parentUI: ui.WalletMainUI) {
            this.parentUI = parentUI;
        }

        public setData(data: Array<mod.coinItemMod>) {
            this.listCoin.x = 0;
            this.listCoin.width = 300;
            this.listCoin.top = 60;
            this.listCoin.bottom = 0;
            this.listCoin.itemRender = coinItemUI;
            this.listCoin.repeatX = 1;
            this.listCoin.repeatY = data.length;
            this.listCoin.vScrollBarSkin = "";
            this.listCoin.selectEnable = false;
            // this.listCoin.selectHandler = new Laya.Handler(this, this.onSelect);
            this.listCoin.renderHandler = new Laya.Handler(this, this.updateItem);
            this.listCoin.array = data;
        }

        private updateItem(cell: coinItemUI, index: number): void {
            cell.init(cell.dataSource);
        }

        private onSelect(index: number): void {
        }

        //operator data
        private updateSelectItem() {
            let coins = [];
            for (let i = 0; i < this.listCoin.array.length; i++) {
                if (this.listCoin.cells[i].coinCheckBox.selected) {
                    coins[coins.length] = this.listCoin.cells[i].labCoinName.text;
                }
            }
            let walletName = this.parentUI.lab_wName.text;
            let wallet = util.getItem(walletName);
            if (wallet) {
                wallet.wCoins = coins;
                util.setItemNoJson(walletName, JSON.stringify(wallet));
            }
        }

    }
}