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
        var waiting = /** @class */ (function (_super) {
            __extends(waiting, _super);

            function waiting(title) {
                var _this = _super.call(this) || this;
                _this.wait_msg.text = title;
                _this.init();
                return _this;
            }

            waiting.prototype.stop = function () {
                Laya.timer.clear(this, this.stopCb);
                this.close();
            };
            waiting.prototype.stopCb = function () {
            };
            waiting.prototype.init = function () {
                Laya.timer.loop(100, this, this.start);
            };
            waiting.prototype.start = function () {
                this.img_wait.rotation = this.img_wait.rotation + 30;
            };
            return waiting;
        }(ui.alert.waitingUI));
        alert.waiting = waiting;
    })(alert = view.alert || (view.alert = {}));
})(view || (view = {}));
//# sourceMappingURL=waiting.js.map