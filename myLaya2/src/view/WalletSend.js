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

        WalletSend.prototype.setData = function (data) {
            this.comp.lab_coin_name.text = data.toUpperCase();
        };
        WalletSend.prototype.init = function () {
            this.comp = new ui.WalletSendUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        };
        WalletSend.prototype.initEvent = function () {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_next.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        };
        WalletSend.prototype.goBack = function () {
            Laya.stage.removeChild(this.comp);
            new view.WalletMain().initQueryData(mod.userMod.defWallet);
        };
        WalletSend.prototype.btnClick = function (type) {
            switch (type) {
                case (1):
                    if (this.checkArg()) {
                        this.comp.visible = false;
                        var sub = new view.WalletSendSubmit();
                        sub.setParenUI(this.comp);
                    }
                    break;
                default:
                    console.log("error type");
                    break;
            }
        };
        WalletSend.prototype.checkArg = function () {
            var addr = this.comp.text_addr.text;
            if (!addr || addr.length != 42) {
                this.comp.warn_Addr.visible = true;
                return false;
            }
            else {
                this.comp.warn_Addr.visible = false;
            }
            var amount = this.comp.text_amount.text;
            if (!util.isNumber(amount)) {
                this.comp.warn_amount.visible = true;
                return false;
            }
            else {
                this.comp.warn_amount.visible = false;
            }
            return true;
        };
        return WalletSend;
    }(ui.WalletSendUI));
    view.WalletSend = WalletSend;
})(view || (view = {}));
//# sourceMappingURL=WalletSend.js.map