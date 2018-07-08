/**Created by the LayaAirIDE*/
module view {
    import Image = Laya.Image;


    export class WalletMain extends ui.WalletMainUI {
        private data: Array<mod.walItemMod> = [];
        private comp: ui.WalletMainUI;

        private noRender: number = 1;//如果为0表示选中节点box跳转到选择coins，竟然会重新渲染list节点，所以不应该查询数据
        private hasRended: Array<string> = [];

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(coins: Array<string>) {
            //获取数据!!,可以优化
            for (let i: number = 0; i < coins.length; i++) {
                let coinName = coins[i];
                let walItemT = new mod.walItemMod();
                walItemT.setItem("", coinName, "0", "0");
                this.data.push(walItemT);
            }
            this.setListUp(this.data);
        }

        //初始化当前钱包数据
        public initQueryData(data: mod.walletMod) {
            // let wait = new view.alert.waiting("正在加载数据，请稍后");
            // wait.popup(true,true);
            //修改当前内存主要钱包
            mod.userMod.defWallet = data;//*
            this.comp.lab_wAddr.text = util.getAddr(data.wAddr);
            this.comp.lab_wName.text = data.wName;
            //初始化全局实例，不然无法操作转账
            service.walletServcie.initLigthWallet(data.wKeyStore);
            //初始化币种
            this.setData(data.wCoins);
            // wait.stop();
        }

        private initBalance(cName: string) {
            let coinMod: mod.coinItemMod = service.walletServcie.getCoinInfo(cName)
            if (coinMod.abi) {//查询token
                service.walletServcie.getTokenBalance(mod.userMod.defWallet.wAddr, coinMod.coinAddr, coinMod.abi, this.getBalanceCb, [this.comp, coinMod])
            } else {//eth
                service.walletServcie.getBalance(mod.userMod.defWallet.wAddr, this.getBalanceCb, [this.comp, coinMod])
            }
        }

        private init() {
            this.comp = new ui.WalletMainUI();
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

        private getBalanceCb(res, args: Array<any>) {
            if (res&&res.retCode==0) {
                console.info("getBalanceCb res:" + res);
                res = res.ret;
                
                let comp = args[0] as view.WalletMain;
                let coinMod = args[1] as mod.coinItemMod;
                let cells = comp.list_wallet.cells;
                for (let i = 0; i < cells.length; i++) {
                    if (!cells[i]._dataSource) {
                        continue;
                    }
                    let cell = cells[i];
                    let cName = cell.getChildByName('cName') as Label;
                    let cTotal = cell.getChildByName('cTotal') as Label;
                    let cValue = cell.getChildByName('cValue') as Label;
                    if (cName.text == coinMod.coinName) {
                        if (util.isContain(config.prod.expCoins, coinMod.coinName)) {
                            cTotal.text = (res.toNumber() / config.prod.WEI_TO_ETH).toFixed(4);
                            cValue.text = "≈¥ -";
                            break;
                        } else {
                            cTotal.text = (res.toNumber() / config.prod.WEI_TO_ETH).toFixed(4);
                            let tempRmb = (res.toNumber() / config.prod.WEI_TO_ETH * mod.userMod.ethToUsd * mod.userMod.usdToRmb).toFixed(0);
                            cValue.text = "≈¥" + tempRmb

                            comp.lab_total.text = (Number(comp.lab_total.text) + Number(tempRmb)).toFixed(0);//总资产
                            break;
                        }

                    }
                }
            } else {
                console.error("getBalanceCb error:" ,res);
            }
        }

        private queryCallBack() {

        }

        //init coin list
        private setListUp(data: Array<mod.walItemMod>): void {
            this.comp.list_wallet.array = data;
            this.comp.list_wallet.repeatY = data.length;
            this.comp.list_wallet.vScrollBarSkin = "";
            this.comp.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
            this.comp.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
        }

        //为什么会执行多次？？
        private onListRender(cell: Box, index: number) {
            var data: mod.walItemMod = this.comp.list_wallet.array[index];
            for (let m = 0; m < this.hasRended.length; m++) {
                if (this.hasRended[m] == data.itemName) {
                    return;
                }
            }
            let cImg = cell.getChildByName('cImg') as Image;
            cImg.skin = data.getItemImgSrc();
            let cName = cell.getChildByName('cName') as Label;
            cName.text = data.itemName;
            let cTotal = cell.getChildByName('cTotal') as Label;
            cTotal.text = data.itemTotal
            let cValue = cell.getChildByName('cValue') as Label;
            cValue.text = "¥ " + data.itemMonType;
            if (this.noRender == 1) {
                this.hasRended.push(data.itemName);
                this.initBalance(cName.text);
            }
        }

        private onSelect(index: number): void {
            this.noRender = 0;
            let item = this.data[index];
            // this.stage.removeChild(this.comp);
            this.comp.visible = false;
            let wTransfer = new view.WalletTransfer();
            wTransfer.setData(item, this.comp.list_wallet.cells[index]);
            wTransfer.setParentUI(this.comp);
        }

        private tabSelect(index: number): void {
            if (index == 1) {
                // this.stage.removeChild(this.comp);
                this.comp.visible = false;
                new view.WalletMe().setParentUI(this.comp);
            }
            if (index == 0) {//只有点击切换钱包才会刷新
                this.stage.removeChild(this.comp);
                new view.WalletMain().initQueryData(mod.userMod.defWallet);
            }
            if (index == 2) {
                this.comp.visible = false;
                new view.WalletReceive(this.comp.lab_wName.text).setParentUI(this.comp);
            }
            if (index == 3) {
                //dialog千万不要设置left r t b..
                let pom = new view.WalletQuick();
                pom.width = Laya.stage.width / 2;
                pom.height = Laya.stage.height;
                pom.top = 0;
                pom.left = Laya.stage.width / 2;//right 不行

                pom.setParentUI(this.comp);
                pom.initData(util.getItem(config.prod.appKey));
                pom.popup();
            }
            if (index == 4) {
                this.comp.visible = false;
                let coinUI = new view.coin.AddCoins();
                coinUI.setParentUI(this.comp);
                coinUI.setData(service.walletServcie.getAllCoinsByWal(this.comp.lab_wName.text));
            }
        }
    }
}