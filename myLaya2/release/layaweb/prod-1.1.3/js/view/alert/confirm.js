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
    var alert;
    (function (alert) {
        var confirm = /** @class */ (function (_super) {
            __extends(confirm, _super);
            function confirm(title, subTitle) {
                var _this = _super.call(this) || this;
                _this.title.text = title;
                _this.sub_title.text = subTitle;
                _this.initEvent();
                return _this;
            }
            confirm.prototype.setData = function (wName) {
                this.wName = wName;
            };
            confirm.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            confirm.prototype.setCallback = function (call, args) {
                this.callback = call;
                this.args = args;
            };
            confirm.prototype.init = function () {
            };
            confirm.prototype.initEvent = function () {
                this.btn_cancel.on(Laya.Event.CLICK, this, this.btnClick, [1, null]);
                this.btn_sub.on(Laya.Event.CLICK, this, this.btnClick, [2, null]);
            };
            confirm.prototype.btnClick = function (index) {
                this.close();
                if (1 == index) {
                    if (this.callback) {
                        this.callback(1, this.args);
                    }
                    else {
                    }
                }
                if (2 == index) {
                    if (this.callback) {
                        this.callback(2, this.args);
                    }
                    else { //删除助记词
                        if (mod.userMod.defWallet.wName == this.wName) {
                            mod.userMod.defWallet.wZjc = '';
                        }
                        var wallet = service.walletServcie.getWallet(this.wName);
                        wallet.wZjc = '';
                        util.setItemJson(this.wName, wallet.toJson());
                        util.compShow([1]);
                    }
                }
            };
            return confirm;
        }(ui.alert.confirmUI));
        alert.confirm = confirm;
    })(alert = view.alert || (view.alert = {}));
})(view || (view = {}));
//# sourceMappingURL=confirm.js.map