/**Created by the LayaAirIDE*/
module view {
    import List = Laya.List;
    import Handler = Laya.Handler;

    export class WalletMain extends ui.WalletMainUI {
        private data: Array<mod.walItemMod> = [];
        private comp: ui.WalletMainUI;
        private list: List = new Laya.List();

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            this.comp = new ui.WalletMainUI();
            this.comp.addChild(this.list);
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
        }

        private initEvent() {
            this.comp.btn_assets.on(Laya.Event.CLICK, this, this.tabSelect, [0]);
            this.comp.btn_me.on(Laya.Event.CLICK, this, this.tabSelect, [1]);
            this.comp.btn_owner_info.on(Laya.Event.CLICK, this, this.tabSelect, [2]);
            this.comp.btn_more.on(Laya.Event.CLICK, this, this.tabSelect, [3]);
            this.comp.btn_addCoin.on(Laya.Event.CLICK, this, this.tabSelect, [4]);
        }

        public setData() {

        }

        public initQueryData(data: mod.walletMod) {
            this.comp.lab_wAddr.text = util.getAddr(data.wAddr);
            this.comp.lab_wName.text = data.wName;
            for (let i: number = 0; i < data.wCoins.length; i++) {
                let walItemT = new mod.walItemMod();
                let coinName = data.wCoins[i]
                walItemT.setItem("img/" + coinName.toLocaleLowerCase() + ".jpg", coinName.toUpperCase(), "0", "0");
                this.data.push(walItemT);
            }
            this.setListUp(this.data);
        }

        private queryCallBack() {

        }

        //init coin list
        private setListUp(data: Array<mod.walItemMod>): void {
            this.list.name = 'item0';
            this.list.itemRender = walItemUI;
            this.list.repeatX = 1;
            this.list.repeatY = data.length;
            this.list.x = 0;
            this.list.bottom = 60;
            this.list.top = 240;
            this.list.vScrollBarSkin = "";
            this.list.selectEnable = true;
            this.list.selectHandler = new Handler(this, this.onSelect);
            this.list.renderHandler = new Handler(this, this.updateItem);
            this.list.array = data;
        }

        private updateItem(cell: walItemUI, index: number): void {
            cell.init(cell.dataSource);
        }

        private onSelect(index: number): void {
            let item = this.data[index];
            this.stage.removeChild(this.comp);
            let wTransfer = new view.WalletTransfer();
            wTransfer.setData(item);
            wTransfer.setParentUI(this.comp);
        }

        private tabSelect(index: number): void {
            if (index == 1) {
                this.stage.removeChild(this.comp);
                new view.WalletMe();
            }
            if (index == 0) {
                this.stage.removeChild(this.comp);
                new view.WalletMain().initQueryData(mod.userMod.defWallet);
            }
            if (index == 2) {
                this.stage.removeChild(this.comp);
                new view.WalletReceive(this.comp.lab_wName.text);
            }
            if (index == 3) {
                //dialog千万不要设置left r t b..
                let pom = new view.WalletQuick();
                pom.width = Laya.stage.width / 3;
                pom.height = 667;
                pom.top = 0;
                pom.left = Laya.stage.width * 2 / 3;//right 不行

                pom.setParentUI(this.comp);
                pom.initData(util.getItem(config.prod.appKey));
                pom.popup();
            }
            if (index == 4) {
                this.stage.removeChild(this.comp);
                let coinUI = new view.coin.AddCoins();
                coinUI.setParentUI(this.comp);
                coinUI.setData(service.walletServcie.getAllCoinsByWal(this.comp.lab_wName.text));
            }
        }
    }
}