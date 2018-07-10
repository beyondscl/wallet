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
        var Warn = /** @class */ (function (_super) {
            __extends(Warn, _super);
            function Warn(title, subTitle) {
                var _this = _super.call(this) || this;
                _this.warn_title.text = title;
                _this.warn_msg.text = subTitle;
                _this.initEvent();
                return _this;
            }
            Warn.prototype.setData = function (title, subTitle) {
                if (title) {
                    this.warn_title.text = title;
                }
                if (subTitle) {
                    this.warn_msg.text = subTitle;
                }
            };
            Warn.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            Warn.prototype.init = function () {
            };
            Warn.prototype.initEvent = function () {
                this.btn_know.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            };
            Warn.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.close();
                }
            };
            return Warn;
        }(ui.alert.WarnUI));
        alert.Warn = Warn;
    })(alert = view.alert || (view.alert = {}));
})(view || (view = {}));
//# sourceMappingURL=Warn.js.map