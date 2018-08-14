/**Created by the LayaAirIDE*/
module view {
    import Image = Laya.Image;
    import Handler = Laya.Handler;

    export class WalletMain extends ui.WalletMainUI {
        public static claName = "view.WalletMain";
        public comp: ui.WalletMainUI;
        private ethTotal: string = '0';//扫一扫回调
        private updateTime = 60 * 1000;//刷新数据

        private data: Array<mod.walItemMod> = [];//定时刷新

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(coins: Array<string>) {
            this.data = [];
            for (let i: number = 0; i < coins.length; i++) {
                let coinName = coins[i];
                let walItemT = new mod.walItemMod();
                walItemT.setItem("", coinName, "0", "0");
                this.data.push(walItemT);
            }
            this.setListUp(this.data);
        }

        public getEthTotal() {
            return this.ethTotal;
        }

        //初始化
        public initQueryData(data: mod.walletMod) {
            util.setMainView(this);
            //数据复原
            this.comp.lab_total.text = '0';
            //修改内存
            mod.userMod.defWallet = data;
            this.comp.lab_wAddr.text = util.getAddr(data.wAddr);
            this.comp.lab_wName.text = data.wName;
            //初始化全局实例
            service.walletServcie.initLigthWallet(data.wKeyStore);
            //初始化币种
            this.setData(data.wCoins);
            this.updateBalance();
            //定时获取总额
            Laya.timer.clear(this, this.updateBalance);
            Laya.timer.loop(this.updateTime, this, this.updateBalance);
        }

        private updateBalance() {
            let coins = this.comp.list_wallet.array;
            for (let i = 0; i < coins.length; i++) {
                this.initBalance(coins[i].itemName);
            }
        }

        private initBalance(cName: string) {
            let coinMod: mod.coinItemMod = service.walletServcie.getCoinInfo(cName)
            if (!coinMod) {
                config.init.initData('');
                return;
            }
            if (coinMod.abi && coinMod.coinName != 'ETH') {//token
                service.walletServcie.getTokenBalance(mod.userMod.defWallet.wAddr, coinMod.coinAddr, coinMod.abi, this.getBalanceCb, [this, coinMod])
            } else {//eth
                service.walletServcie.getBalance(mod.userMod.defWallet.wAddr, this.getBalanceCb, [this, coinMod])
            }
        }

        private init() {
            this.comp = new ui.WalletMainUI();
            this.name = config.resource.WALLET_MAIN;
            Laya.stage.addChild(this.comp);
            this.comp.list_wallet.array = [];
            native.native.setCurrView(this,1);
        }

        private initEvent() {
            this.comp.btn_assets.on(Laya.Event.CLICK, this, this.tabSelect, [0]);
            this.comp.btn_me.on(Laya.Event.CLICK, this, this.tabSelect, [1]);
            this.comp.btn_owner_info.on(Laya.Event.CLICK, this, this.tabSelect, [2]);
            this.comp.lab_wAddr.on(Laya.Event.CLICK, this, this.tabSelect, [2]);
            this.comp.btn_more.on(Laya.Event.CLICK, this, this.tabSelect, [3]);
            this.comp.btn_addCoin.on(Laya.Event.CLICK, this, this.tabSelect, [4]);
        }

        private getBalanceCb(res, args: Array<any>) {
            if (res && res.retCode == 0) {
                console.info("getBalanceCb res:" + res.ret);
                res = res.ret;

                let wMain = args[0] as view.WalletMain;
                let coinMod = args[1] as mod.coinItemMod;
                let cells = wMain.comp.list_wallet.cells;
                for (let i = 0; i < cells.length; i++) {
                    if (!cells[i]._dataSource) {
                        continue;
                    }
                    let cell = cells[i];
                    let cName = cell.getChildByName('cName') as Label;
                    let cTotal = cell.getChildByName('cTotal') as Label;
                    let cValue = cell.getChildByName('cValue') as Label;
                    if ('ETH' == coinMod.coinName) {
                        wMain.ethTotal = (res.toNumber() / config.prod.WEI_TO_ETH).toFixed(4) + "";
                    }
                    if (cName.text == coinMod.coinName) {
                        if (util.isContain(config.prod.expCoins, coinMod.coinName)) {
                            cTotal.text = (res.toNumber() / config.prod.WEI_TO_ETH).toFixed(4);
                            cValue.text = "≈ ¥ -";
                            break;
                        } else {
                            cTotal.text = (res.toNumber() / config.prod.WEI_TO_ETH).toFixed(4);
                            let tempRmb = (res.toNumber() / config.prod.WEI_TO_ETH * mod.userMod.ethToUsd * mod.userMod.usdToRmb).toFixed(0);
                            cValue.text = "≈ ¥ " + tempRmb

                            wMain.comp.lab_total.text = (Number(wMain.comp.lab_total.text) + Number(tempRmb)).toFixed(0);//总资产
                            break;
                        }
                    }
                }
            } else {
                util.log(WalletMain.claName, "getBalance", [mod.userMod.defWallet.wAddr], res);
                console.error("getBalanceCb error:", res);
            }
        }

        private setListUp(data: Array<mod.walItemMod>): void {
            this.comp.list_wallet.array = data;
            this.comp.list_wallet.vScrollBarSkin = '';
            this.comp.list_wallet.repeatY = data.length;
            this.comp.list_wallet.renderHandler = new Handler(this, this.onListRender);
        }

        private onListRender(cell: Box, index: number) {
            cell.on(Laya.Event.CLICK, this, this.onSelect, [index]);

            var data: mod.walItemMod = this.comp.list_wallet.array[index];
            let cImg = cell.getChildByName('cImg') as Image;
            cImg.skin = data.getItemImgSrc();
            let cName = cell.getChildByName('cName') as Label;
            cName.text = data.itemName;
            let cTotal = cell.getChildByName('cTotal') as Label;
            cTotal.text = data.itemTotal
            let cValue = cell.getChildByName('cValue') as Label;
            cValue.text = "¥ " + data.itemMonType;
        }

        private onSelect(index: number): void {
            let item = this.data[index];
            this.comp.visible = false;
            let wTransfer = new view.WalletTransfer();
            wTransfer.setData(item, this.comp.list_wallet.cells[index]);
            wTransfer.setParentUI(this);
        }

        private tabSelect(index: number): void {
            if (index == 1) {
                this.comp.visible = false;
                if(util.getMeView()){
                    util.getMeView().comp.visible = true;
                }else{
                    new view.WalletMe().setParentUI(this);
                }
            }
            if (index == 0) {
            }
            if (index == 2) {
                this.comp.visible = false;
                new view.WalletReceive(this.comp.lab_wName.text).setParentUI(this);
            }
            if (index == 3) {
                //dialog千万不要设置left r t b..
                let pom = new view.WalletQuick();
                pom.width = Laya.stage.width / 2;
                pom.height = Laya.stage.height;
                pom.top = 0;
                pom.left = Laya.stage.width / 2;//right 不行
                pom.setParentUI(this);
                pom.initData(util.getItem(config.prod.getAppKey()));
                pom.popup();
            }
            if (index == 4) {
                this.comp.visible = false;
                let coinUI = new view.coin.AddCoins();
                coinUI.setParentUI(this);
                coinUI.setData(service.walletServcie.getAllCoinsByWal(this.comp.lab_wName.text));
            }
        }
    }
}