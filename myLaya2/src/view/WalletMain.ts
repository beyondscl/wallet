/**Created by the LayaAirIDE*/
module view {
    import List = Laya.List;
    import Handler = Laya.Handler;
    import Image = Laya.Image;


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

        public setData(coins: Array<string>) {
            for (let i: number = 0; i < coins.length; i++) {
                let walItemT = new mod.walItemMod();
                let coinName = coins[i];
                walItemT.setItem("img/main/wallet_manage.png", coinName.toUpperCase(), "0", "0");
                this.data.push(walItemT);
            }
            this.setListUp(this.data);
        }

        //当前钱包的基本数据
        public initQueryData(data: mod.walletMod) {
            mod.userMod.defWallet = data;//*
            this.comp.lab_wAddr.text = util.getAddr(data.wAddr);
            this.comp.lab_wName.text = data.wName;
            //初始化全局实例，不然无法操作转账
            service.walletServcie.initLigthWallet(data.wName);
            this.setData(data.wCoins);
        }

        private queryCallBack() {

        }

        //init coin list
        private setListUp(data: Array<mod.walItemMod>): void {
            this.comp.list_wallet.array = data;
            this.comp.list_wallet.repeatY = data.length;
            this.comp.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
            this.comp.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
        }

        private onListRender(cell: Box, index: number) {
            var data: mod.walItemMod = this.comp.list_wallet.array[index];
            let cImg = cell.getChildByName('cImg') as Image;
            cImg.skin = data.itemImgSrc;
            let cName = cell.getChildByName('cName') as Label;
            cName.text = data.itemName;
            let cTotal = cell.getChildByName('cTotal') as Label;
            cTotal.text = data.itemTotal
            let cValue = cell.getChildByName('cValue') as Label;
            cValue.text = "¥ " + data.itemMonType;
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
                pom.height = Laya.stage.height;
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