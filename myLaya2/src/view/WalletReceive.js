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
    var WalletReceive = /** @class */ (function (_super) {
        __extends(WalletReceive, _super);

        function WalletReceive() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.initEvent();
            return _this;
        }

        WalletReceive.prototype.init = function () {
            this.comp = new ui.WalletReceiveUI();
            Laya.stage.addChild(this.comp);
        };
        WalletReceive.prototype.initEvent = function () {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_copy.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        };
        WalletReceive.prototype.setData = function (data) {
        };
        WalletReceive.prototype.goBack = function () {
            Laya.stage.removeChild(this.comp);
            new view.WalletMain().initQueryData(mod.userMod.defWallet);
        };
        WalletReceive.prototype.btnClick = function (type) {
            switch (type) {
                case (1):
                    break;
                default:
                    console.log("error type");
                    break;
            }
        };
        return WalletReceive;
    }(ui.WalletReceiveUI));
    view.WalletReceive = WalletReceive;
})(view || (view = {}));
//# sourceMappingURL=WalletReceive.js.map