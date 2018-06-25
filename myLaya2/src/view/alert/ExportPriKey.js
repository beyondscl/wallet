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
        var ExportPriKey = /** @class */ (function (_super) {
            __extends(ExportPriKey, _super);

            function ExportPriKey() {
                var _this = _super.call(this) || this;
                _this.initEvent();
                return _this;
            }

            ExportPriKey.prototype.initEvent = function () {
                this.btn_copy.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            };
            ExportPriKey.prototype.btnClick = function (index) {
                if (1 == index) {
                    //复制？？？
                    this.btn_copy.label = '已复制';
                }
            };
            ExportPriKey.prototype.setData = function (key) {
                this.text_pKey.text = key;
                this.text_pKey.text = "f31430d04eabdb2480ad86c0ca81f1350e05057d4951af7399d2683616f8661b"; //test
            };
            return ExportPriKey;
        }(ui.alert.ExportPriKeyUI));
        alert.ExportPriKey = ExportPriKey;
    })(alert = view.alert || (view.alert = {}));
})(view || (view = {}));
//# sourceMappingURL=ExportPriKey.js.map