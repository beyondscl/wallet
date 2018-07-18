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
// 统一的错误信息提示
var view;
(function (view) {
    var alert;
    (function (alert) {
        var info = /** @class */ (function (_super) {
            __extends(info, _super);

            function info(msg) {
                var _this = _super.call(this) || this;
                Laya.timer.once(2000, _this, _this.stop);
                _this.msg.text = msg;
                return _this;
            }

            info.prototype.stop = function () {
                this.close();
            };
            return info;
        }(ui.alert.infoUI));
        alert.info = info;
    })(alert = view.alert || (view.alert = {}));
})(view || (view = {}));
//# sourceMappingURL=info.js.map