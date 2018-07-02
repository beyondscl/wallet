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
    var backup;
    (function (backup) {
        var BackUpZjc = /** @class */ (function (_super) {
            __extends(BackUpZjc, _super);

            function BackUpZjc() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }

            BackUpZjc.prototype.init = function () {
                this.comp = new ui.backup.BackUpZjcUI();
                Laya.stage.addChild(this.comp);
                var warn = new view.alert.WarnZjc();
                warn.popup(true, true);
            };
            BackUpZjc.prototype.initEvent = function () {
                this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            };
            BackUpZjc.prototype.setData = function (key) {
            };
            BackUpZjc.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.comp.removeSelf();
                    this.parentUI.visible = true;
                }
            };
            BackUpZjc.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            return BackUpZjc;
        }(ui.backup.BackUpZjcUI));
        backup.BackUpZjc = BackUpZjc;
    })(backup = view.backup || (view.backup = {}));
})(view || (view = {}));
//# sourceMappingURL=BackUpZjc.js.map