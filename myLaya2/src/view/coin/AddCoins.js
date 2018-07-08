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
    var coin;
    (function (coin) {
        var AddCoins = /** @class */ (function (_super) {
            __extends(AddCoins, _super);

            function AddCoins() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }

            AddCoins.prototype.setParentUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            AddCoins.prototype.setData = function (data) {
                this.comp.listCoin.array = data;
                this.comp.listCoin.y = data.length;
                this.comp.listCoin.repeatY = data.length;
                this.comp.listCoin.vScrollBarSkin = "";
                this.comp.listCoin.renderHandler = new Laya.Handler(this, this.onListRender);
                this.comp.listCoin.selectHandler = new Laya.Handler(this, this.onSelect);
            };
            AddCoins.prototype.init = function () {
                this.comp = new ui.coin.AddCoinsUI();
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
            };
            AddCoins.prototype.onListRender = function (cell, index) {
                var data = this.comp.listCoin.array[index];
                var cImg = cell.getChildByName('cImg');
                cImg.skin = data.coinImg;
                var cName = cell.getChildByName('cName');
                cName.text = data.coinName.toUpperCase();
                var cVender = cell.getChildByName('cVender');
                cVender.text = data.coinVender;
                var cAddr = cell.getChildByName('cAddr');
                cAddr.text = util.getAddr(data.coinAddr);
                var cCheckbox = cell.getChildByName('cCheckbox');
                cCheckbox.selected = data.coinSelected;
            };
            AddCoins.prototype.onSelect = function (index) {
            };
            //operator data
            AddCoins.prototype.updateSelectItem = function () {
                var coins = [];
                for (var i = 0; i < this.comp.listCoin.array.length; i++) {
                    if (this.comp.listCoin.cells[i].getChildByName("cCheckbox").selected) {
                        coins[coins.length] = this.comp.listCoin.cells[i].getChildByName('cName').text;
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