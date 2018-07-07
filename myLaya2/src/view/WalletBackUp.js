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
    var WalletBackUp = /** @class */ (function (_super) {
        __extends(WalletBackUp, _super);

        function WalletBackUp() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.initEvent();
            return _this;
        }

        WalletBackUp.prototype.setData = function (key) {
            this.walletName = key;
        };
        WalletBackUp.prototype.setParetUI = function (parentUI) {
            this.parentUI = parentUI;
        };
        WalletBackUp.prototype.init = function () {
            this.comp = new ui.WalletBackUpUI();
            Laya.stage.addChild(this.comp);
        };
        WalletBackUp.prototype.initEvent = function () {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_backup.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.info_backup.on(Laya.Event.CLICK, this, this.btnClick[3]);
        };
        WalletBackUp.prototype.btnClick = function (index) {
            if (1 == index) {
                this.comp.removeSelf();
                util.compShow([]);
            }
            if (2 == index) {
                this.comp.visible = false;
                var backUp = new view.backup.BackUpZjc();
                backUp.setData(this.walletName);
                backUp.setParetUI(this.comp);
                util.putCompStack(this.comp);
            }
        };
        return WalletBackUp;
    }(ui.WalletBackUpUI));
    view.WalletBackUp = WalletBackUp;
})(view || (view = {}));
//# sourceMappingURL=WalletBackUp.js.map