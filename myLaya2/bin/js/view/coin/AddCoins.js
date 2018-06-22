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
                _this.init();
                _this.initEvent();
                _this.setData(null);
                return _this;
            }
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
                        this.stage.removeChild(this.comp);
                        new view.WalletMain().initQueryData(testData.getWalletInfo(this.parentUI.lab_wName.text));
                        break;
                    case 1:
                        break;
                    default:
                        break;
                }
            };
            AddCoins.prototype.setParentUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            AddCoins.prototype.setData = function (data) {
                this.comp.list_coin.array = [];
            };
            return AddCoins;
        }(ui.coin.AddCoinsUI));
        coin.AddCoins = AddCoins;
    })(coin = view.coin || (view.coin = {}));
})(view || (view = {}));
//# sourceMappingURL=AddCoins.js.map