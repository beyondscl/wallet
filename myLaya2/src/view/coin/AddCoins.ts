/**Created by the LayaAirIDE*/
module view.coin {
    import Image = Laya.Image;

    export class AddCoins extends ui.coin.AddCoinsUI {
        private comp: ui.coin.AddCoinsUI;
        private parentView: view.WalletMain;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setParentUI(parentView: view.WalletMain) {
            this.parentView = parentView;
        }

        public setData(data: Array<mod.coinItemMod>) {
            this.comp.listCoin.array = data;
            this.comp.listCoin.renderHandler = new Laya.Handler(this, this.onListRender);
            this.comp.listCoin.selectHandler = new Laya.Handler(this, this.onSelect);
        }

        private init() {
            this.comp = new ui.coin.AddCoinsUI();
            this.stage.addChild(this.comp)
            native.native.setCurrView(this, 2);
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.btnClick, [0]);
            this.comp.btn_query.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        }

        private goBack() {
            this.comp.removeSelf();
            this.updateSelectItem();
            this.parentView.comp.visible = true;
            native.native.setCurrView(this.parentView, 1);
        }

        private btnClick(index: number) {
            switch (index) {
                case 0:
                this.goBack();
                case 1:
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
        private updateSelectItem(): Array<string> {
            let coins = [];
            for (let i = 0; i < this.comp.listCoin.array.length; i++) {
                if (this.comp.listCoin.cells[i].getChildByName("cCheckbox").selected) {
                    coins[coins.length] = this.comp.listCoin.cells[i].getChildByName('cName').text;
                }
            }
            let walletName = this.parentView.comp.lab_wName.text;
            let wallet = util.getItem(walletName);
            //是否需要更新
            let diff1: Array<any> = coins.filter(ea => wallet.wCoins.every(eb => eb !== ea));
            let diff2: Array<any> = wallet.wCoins.filter(ea => coins.every(eb => eb !== ea));
            if (diff1.length > 0 || diff2.length > 0) {
                wallet.wCoins = coins;
                mod.userMod.defWallet.wCoins = coins;//必定是当前钱包
                util.setItemNoJson(walletName, JSON.stringify(wallet));
                this.parentView.setData(coins);
            }
            return coins;
        }
    }
}