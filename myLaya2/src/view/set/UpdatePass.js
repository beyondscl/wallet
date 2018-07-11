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
    var set;
    (function (set) {
        var UpdatePass = /** @class */ (function (_super) {
            __extends(UpdatePass, _super);
            function UpdatePass() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }
            UpdatePass.prototype.setParentUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            UpdatePass.prototype.init = function () {
                this.comp = new ui.set.UpdatePassUI();
                Laya.stage.bgColor = 'white';
                Laya.stage.addChild(this.comp);
                Laya.stage.bgColor = 'white';
                Laya.stage.scaleMode = config.prod.appAdapterType;
            };
            UpdatePass.prototype.initEvent = function () {
                this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            };
            UpdatePass.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.stage.removeChild(this.comp);
                    this.parentUI.visible = true;
                }
                if (2 == index) {
                }
                if (3 == index) {
                }
            };
            return UpdatePass;
        }(ui.set.UpdatePassUI));
        set.UpdatePass = UpdatePass;
    })(set = view.set || (view.set = {}));
})(view || (view = {}));
//# sourceMappingURL=UpdatePass.js.map