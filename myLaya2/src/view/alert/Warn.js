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
    var alert;
    (function (alert) {
        var Warn = /** @class */ (function (_super) {
            __extends(Warn, _super);

            function Warn() {
                var _this = _super.call(this) || this;
                _this.initEvent();
                return _this;
            }

            Warn.prototype.init = function () {
            };
            Warn.prototype.initEvent = function () {
                this.btn_know.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            };
            Warn.prototype.setData = function (key) {
            };
            Warn.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.close();
                }
            };
            Warn.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            return Warn;
        }(ui.alert.WarnUI));
        alert.Warn = Warn;
    })(alert = view.alert || (view.alert = {}));
})(view || (view = {}));
//# sourceMappingURL=Warn.js.map