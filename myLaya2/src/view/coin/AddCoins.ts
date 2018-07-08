/**Created by the LayaAirIDE*/
module view.coin {
    import Image = Laya.Image;

    export class AddCoins extends ui.coin.AddCoinsUI {
        private comp: ui.coin.AddCoinsUI;
        private parentUI: ui.WalletMainUI;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setParentUI(parentUI: ui.WalletMainUI) {
            this.parentUI = parentUI;
        }

        public setData(data: Array<mod.coinItemMod>) {
            this.comp.listCoin.array = data;
            this.comp.listCoin.y = data.length;
            this.comp.listCoin.repeatY = data.length;
            this.comp.listCoin.vScrollBarSkin = "";
            this.comp.listCoin.renderHandler = new Laya.Handler(this, this.onListRender);
            this.comp.listCoin.selectHandler = new Laya.Handler(this, this.onSelect);
        }

        private init() {
            this.comp = new ui.coin.AddCoinsUI();
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
                    this.parentUI.visible = true;
                    break;
                case 1:
                    // this.comp.visible = false;
                    // new view.coin.queryCoins();
                    break;
                case 2:

                    break;
                default:
                    break;
            }
        }

        private onListRender(cell: Box, index: number) {
            var data: mod.coinItemMod = this.comp.listCoin.array[index];
            let cImg = cell.getChildByName('cImg') as Image;
            cImg.skin = data.coinImg;
            let cName = cell.getChildByName('cName') as Label;
            cName.text = data.coinName.toUpperCase();
            let cVender = cell.getChildByName('cVender') as Label;
            cVender.text = data.coinVender;
            let cAddr = cell.getChildByName('cAddr') as Label;
            cAddr.text = util.getAddr(data.coinAddr);
            let cCheckbox = cell.getChildByName('cCheckbox') as Laya.CheckBox;
            cCheckbox.selected = data.coinSelected;
        }

        private onSelect(index: number): void {
        }

        //operator data
        private updateSelectItem() {
            let coins = [];
            for (let i = 0; i < this.comp.listCoin.array.length; i++) {
                if (this.comp.listCoin.cells[i].getChildByName("cCheckbox").selected) {
                    coins[coins.length] = this.comp.listCoin.cells[i].getChildByName('cName').text;
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