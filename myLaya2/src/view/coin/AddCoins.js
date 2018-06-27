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
    var coin;
    (function (coin) {
        var AddCoins = /** @class */ (function (_super) {
            __extends(AddCoins, _super);
            function AddCoins() {
                var _this = _super.call(this) || this;
                _this.listCoin = new Laya.List();
                _this.init();
                _this.initEvent();
                return _this;
            }
            AddCoins.prototype.init = function () {
                this.comp = new ui.coin.AddCoinsUI();
                this.comp.addChild(this.listCoin);
                this.stage.addChild(this.comp);
            };
            AddCoins.prototype.initEvent = function () {
                this.comp.btn_goback.on(Laya.Event.CLICK, this, this.btnClick, [0]);
                this.comp.btn_query.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            };
            AddCoins.prototype.btnClick = function (index) {
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
            };
            AddCoins.prototype.setParentUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            AddCoins.prototype.setData = function (data) {
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
            };
            AddCoins.prototype.updateItem = function (cell, index) {
                cell.init(cell.dataSource);
            };
            AddCoins.prototype.onSelect = function (index) {
            };
            //operator data
            AddCoins.prototype.updateSelectItem = function () {
                var coins = [];
                for (var i = 0; i < this.listCoin.array.length; i++) {
                    if (this.listCoin.cells[i].coinCheckBox.selected) {
                        coins[coins.length] = this.listCoin.cells[i].labCoinName.text;
                    }
                }
                var walletName = this.parentUI.lab_wName.text;
                var wallet = util.getItem(walletName);
                if (wallet) {
                    wallet.wCoins = coins;
                    util.setItemNoJson(walletName, JSON.stringify(wallet));
                }
            };
            return AddCoins;
        }(ui.coin.AddCoinsUI));
        coin.AddCoins = AddCoins;
    })(coin = view.coin || (view.coin = {}));
})(view || (view = {}));
//# sourceMappingURL=AddCoins.js.map