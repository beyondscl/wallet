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
    var WalletManage = /** @class */ (function (_super) {
        __extends(WalletManage, _super);
        function WalletManage() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.initEvent();
            return _this;
        }
        WalletManage.prototype.init = function () {
            this.comp = new ui.WalletManageUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
        };
        WalletManage.prototype.initEvent = function () {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
        };
        WalletManage.prototype.goBack = function () {
            Laya.stage.removeChild(this.comp);
        };
        return WalletManage;
    }(ui.WalletManageUI));
    view.WalletManage = WalletManage;
})(view || (view = {}));
//# sourceMappingURL=WalletManage.js.map