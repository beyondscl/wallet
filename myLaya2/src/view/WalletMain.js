var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

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
            _this.data = [];
            _this.list = new Laya.List();
            _this.init();
            _this.initEvent();
            return _this;
        }

        WalletMain.prototype.init = function () {
            this.comp = new ui.WalletMainUI();
            this.comp.addChild(this.list);
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        };
        WalletMain.prototype.initEvent = function () {
            this.comp.btn_assets.on(Laya.Event.CLICK, this, this.tabSelect, [0]);
            this.comp.btn_me.on(Laya.Event.CLICK, this, this.tabSelect, [1]);
            this.comp.btn_owner_info.on(Laya.Event.CLICK, this, this.tabSelect, [2]);
            this.comp.btn_more.on(Laya.Event.CLICK, this, this.tabSelect, [3]);
            this.comp.btn_addCoin.on(Laya.Event.CLICK, this, this.tabSelect, [4]);
        };
        WalletMain.prototype.setData = function () {
        };
        WalletMain.prototype.initQueryData = function (data) {
            this.comp.lab_wAddr.text = util.getAddr(data.wAddr);
            this.comp.lab_wName.text = data.wName;
            for (var i = 0; i < data.wCoins.length; i++) {
                var walItemT = new mod.walItemMod();
                var coinName = data.wCoins[i];
                walItemT.setItem("img/" + coinName.toLocaleLowerCase() + ".jpg", coinName.toUpperCase(), "0", "0");
                this.data.push(walItemT);
            }
            this.setListUp(this.data);
        };
        WalletMain.prototype.queryCallBack = function () {
        };
        //init coin list
        WalletMain.prototype.setListUp = function (data) {
            this.list.name = 'item0';
            this.list.itemRender = walItemUI;
            this.list.repeatX = 1;
            this.list.repeatY = data.length;
            this.list.x = 0;
            this.list.bottom = 40;
            this.list.top = 150;
            this.list.vScrollBarSkin = "";
            this.list.selectEnable = true;
            this.list.selectHandler = new Handler(this, this.onSelect);
            this.list.renderHandler = new Handler(this, this.updateItem);
            this.list.array = data;
        };
        WalletMain.prototype.updateItem = function (cell, index) {
            cell.init(cell.dataSource);
        };
        WalletMain.prototype.onSelect = function (index) {
            var item = this.data[index];
            this.stage.removeChild(this.comp);
            var wTransfer = new view.WalletTransfer();
            wTransfer.setData(item);
            wTransfer.setParentUI(this.comp);
        };
        WalletMain.prototype.tabSelect = function (index) {
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
                var pom = new view.WalletQuick();
                pom.width = 150;
                pom.height = 429;
                pom.top = 0;
                pom.left = 200;
                pom.setParentUI(this.comp);
                pom.initData(util.getItem(config.prod.appKey));
                pom.popup();
            }
            if (index == 4) {
                this.stage.removeChild(this.comp);
                var coinUI = new view.coin.AddCoins();
                coinUI.setParentUI(this.comp);
                coinUI.setData(service.walletServcie.getAllCoinsByWal(this.comp.lab_wName.text));
            }
        };
        return WalletMain;
    }(ui.WalletMainUI));
    view.WalletMain = WalletMain;
})(view || (view = {}));
//# sourceMappingURL=WalletMain.js.map