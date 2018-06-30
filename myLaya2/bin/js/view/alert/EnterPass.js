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
        var EnterPass = /** @class */ (function (_super) {
            __extends(EnterPass, _super);
            function EnterPass() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }
            EnterPass.prototype.init = function () {
                Laya.stage.bgColor = 'white';
                Laya.stage.scaleMode = config.prod.appAdapterType;
            };
            EnterPass.prototype.initEvent = function () {
                this.btn_cancel.on(Laya.Event.CLICK, this, this.btnClick, [1]);
                this.btn_submit.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            };
            EnterPass.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.close();
                }
                if (2 == index) {
                    var pass = this.text_pass.text;
                    this.callBack(pass, this.parentUI);
                    this.close();
                }
            };
            EnterPass.prototype.setParentUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            EnterPass.prototype.setCallBack = function (func) {
                this.callBack = func;
            };
            return EnterPass;
        }(ui.alert.EnterPassUI));
        alert.EnterPass = EnterPass;
    })(alert = view.alert || (view.alert = {}));
})(view || (view = {}));
//# sourceMappingURL=EnterPass.js.map