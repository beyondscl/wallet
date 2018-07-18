var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var Handler = Laya.Handler;
    var WalletMain = /** @class */ (function (_super) {
        __extends(WalletMain, _super);
        function WalletMain() {
            var _this = _super.call(this) || this;
            _this.ethTotal = '0'; //主要用于扫一扫回调
            //list 相关
            _this.data = [];
            _this.noRender = 1; //如果为0表示选中节点box跳转到选择coins，竟然会重新渲染list节点，所以不应该查询数据
            _this.hasRended = [];
            console.log("start main :", new Date().getTime());
            _this.init();
            _this.initEvent();
            return _this;
        }
        WalletMain.prototype.setData = function (coins) {
            this.data = [];
            this.hasRended = [];
            this.noRender = 1;
            for (var i = 0; i < coins.length; i++) {
                var coinName = coins[i];
                var walItemT = new mod.walItemMod();
                walItemT.setItem("", coinName, "0", "0");
                this.data.push(walItemT);
            }
            this.setListUp(this.data);
        };
        //初始化当前钱包数据
        WalletMain.prototype.initQueryData = function (data) {
            util.setMainView(this);
            //数据复原
            this.comp.lab_total.text = '0';
            //修改当前内存主要钱包
            mod.userMod.defWallet = data;
            this.comp.lab_wAddr.text = util.getAddr(data.wAddr);
            this.comp.lab_wName.text = data.wName;
            //初始化全局实例，不然无法操作转账
            service.walletServcie.initLigthWallet(data.wKeyStore);
            //初始化币种
            this.setData(data.wCoins);
        };
        //set get
        WalletMain.prototype.getEthTotal = function () {
            return this.ethTotal;
        };
        WalletMain.prototype.initBalance = function (cName) {
            var coinMod = service.walletServcie.getCoinInfo(cName);
            if (coinMod.abi) { //查询token
                service.walletServcie.getTokenBalance(mod.userMod.defWallet.wAddr, coinMod.coinAddr, coinMod.abi, this.getBalanceCb, [this.comp, coinMod]);
            }
            else { //eth
                service.walletServcie.getBalance(mod.userMod.defWallet.wAddr, this.getBalanceCb, [this.comp, coinMod]);
            }
        };
        WalletMain.prototype.init = function () {
            this.comp = new ui.WalletMainUI();
            this.name = config.resource.WALLET_MAIN;
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
        };
        WalletMain.prototype.initEvent = function () {
            this.comp.btn_assets.on(Laya.Event.CLICK, this, this.tabSelect, [0]);
            this.comp.btn_me.on(Laya.Event.CLICK, this, this.tabSelect, [1]);
            this.comp.btn_owner_info.on(Laya.Event.CLICK, this, this.tabSelect, [2]);
            this.comp.lab_wAddr.on(Laya.Event.CLICK, this, this.tabSelect, [2]);
            this.comp.btn_more.on(Laya.Event.CLICK, this, this.tabSelect, [3]);
            this.comp.btn_addCoin.on(Laya.Event.CLICK, this, this.tabSelect, [4]);
        };
        WalletMain.prototype.getBalanceCb = function (res, args) {
            if (res && res.retCode == 0) {
                console.info("getBalanceCb res:" + res.ret);
                res = res.ret;
                var comp = args[0];
                var coinMod = args[1];
                var cells = comp.list_wallet.cells;
                for (var i = 0; i < cells.length; i++) {
                    if (!cells[i]._dataSource) {
                        continue;
                    }
                    var cell = cells[i];
                    var cName = cell.getChildByName('cName');
                    var cTotal = cell.getChildByName('cTotal');
                    var cValue = cell.getChildByName('cValue');
                    if ('ETH' == coinMod.coinName) {
                        this.ethTotal = (res.toNumber() / config.prod.WEI_TO_ETH).toFixed(4);
                    }
                    if (cName.text == coinMod.coinName) {
                        if (util.isContain(config.prod.expCoins, coinMod.coinName)) {
                            cTotal.text = (res.toNumber() / config.prod.WEI_TO_ETH).toFixed(4);
                            cValue.text = "≈ ¥ -";
                            break;
                        }
                        else {
                            cTotal.text = (res.toNumber() / config.prod.WEI_TO_ETH).toFixed(4);
                            var tempRmb = (res.toNumber() / config.prod.WEI_TO_ETH * mod.userMod.ethToUsd * mod.userMod.usdToRmb).toFixed(0);
                            cValue.text = "≈ ¥ " + tempRmb;
                            comp.lab_total.text = (Number(comp.lab_total.text) + Number(tempRmb)).toFixed(0); //总资产
                            break;
                        }
                    }
                }
            }
            else {
                console.error("getBalanceCb error:", res);
            }
        };
        WalletMain.prototype.queryCallBack = function () {
        };
        //init coin list
        WalletMain.prototype.setListUp = function (data) {
            this.comp.list_wallet.array = data;
            this.comp.list_wallet.vScrollBarSkin = '';
            this.comp.list_wallet.repeatY = data.length;
            this.comp.list_wallet.renderHandler = new Handler(this, this.onListRender);
            // this.comp.list_wallet.selectHandler = new Handler(this, this.onSelect);
        };
        //为什么会执行多次？？,回来就不行。
        WalletMain.prototype.onListRender = function (cell, index) {
            cell.on(Laya.Event.CLICK, this, this.onSelect, [index]);
            var data = this.comp.list_wallet.array[index];
            for (var m = 0; m < this.hasRended.length; m++) {
                if (this.hasRended[m] == data.itemName) {
                    console.log("excape render index:", index);
                    return;
                }
            }
            var cImg = cell.getChildByName('cImg');
            cImg.skin = data.getItemImgSrc();
            var cName = cell.getChildByName('cName');
            cName.text = data.itemName;
            var cTotal = cell.getChildByName('cTotal');
            cTotal.text = data.itemTotal;
            var cValue = cell.getChildByName('cValue');
            cValue.text = "¥ " + data.itemMonType;
            if (this.noRender == 1) {
                this.hasRended.push(data.itemName);
                this.initBalance(cName.text);
            }
        };
        WalletMain.prototype.onSelect = function (index) {
            this.noRender = 0;
            var item = this.data[index];
            this.comp.visible = false;
            var wTransfer = new view.WalletTransfer();
            wTransfer.setData(item, this.comp.list_wallet.cells[index]);
            wTransfer.setParentUI(this);
        };
        WalletMain.prototype.tabSelect = function (index) {
            if (index == 1) {
                this.comp.visible = false;
                new view.WalletMe().setParentUI(this.comp);
            }
            if (index == 0) { //点击自己或者 | 点击切换钱包才会刷新
                // this.stage.removeChild(this.comp);
                // new view.WalletMain().initQueryData(mod.userMod.defWallet);
            }
            if (index == 2) {
                this.comp.visible = false;
                new view.WalletReceive(this.comp.lab_wName.text).setParentUI(this);
            }
            if (index == 3) {
                //dialog千万不要设置left r t b..
                var pom = new view.WalletQuick();
                pom.width = Laya.stage.width / 2;
                pom.height = Laya.stage.height;
                pom.top = 0;
                pom.left = Laya.stage.width / 2; //right 不行
                pom.setParentUI(this);
                pom.initData(util.getItem(config.prod.getAppKey()));
                pom.popup();
            }
            if (index == 4) {
                this.comp.visible = false;
                var coinUI = new view.coin.AddCoins();
                coinUI.setParentUI(this);
                coinUI.setData(service.walletServcie.getAllCoinsByWal(this.comp.lab_wName.text));
            }
        };
        WalletMain.prototype.coinGobackCB = function (coins, wMain) {
            wMain.setData(coins);
        };
        return WalletMain;
    }(ui.WalletMainUI));
    view.WalletMain = WalletMain;
})(view || (view = {}));
//# sourceMappingURL=WalletMain.js.map