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
        var CoinItem = /** @class */ (function (_super) {
            __extends(CoinItem, _super);
            function CoinItem() {
                return _super.call(this) || this;
            }
            return CoinItem;
        }(ui.coin.CoinItemUI));
        coin.CoinItem = CoinItem;
    })(coin = view.coin || (view.coin = {}));
})(view || (view = {}));
//# sourceMappingURL=CoinItem.js.map