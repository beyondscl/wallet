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
    var WalletSend = /** @class */ (function (_super) {
        __extends(WalletSend, _super);

        function WalletSend() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.initEvent();
            return _this;
        }

        WalletSend.prototype.init = function () {
            this.comp = new ui.WalletSendUI();
            Laya.stage.addChild(this.comp);
        };
        WalletSend.prototype.initEvent = function () {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_next.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        };
        WalletSend.prototype.setData = function (data) {
            this.comp.lab_coin_name.text = data.toUpperCase();
        };
        WalletSend.prototype.goBack = function () {
            Laya.stage.removeChild(this.comp);
            new view.WalletMain().initQueryData(mod.userMod.defWallet);
        };
        WalletSend.prototype.btnClick = function (type) {
            switch (type) {
                case (1):
                    Laya.stage.removeChild(this.comp);
                    Laya.stage.removeSelf();
                    new view.WalletSendSubmit();
                    break;
                default:
                    console.log("error type");
                    break;
            }
        };
        return WalletSend;
    }(ui.WalletSendUI));
    view.WalletSend = WalletSend;
})(view || (view = {}));
//# sourceMappingURL=WalletSend.js.map