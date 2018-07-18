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
    var info;
    (function (info) {
        var aboutTeam = /** @class */ (function (_super) {
            __extends(aboutTeam, _super);
            function aboutTeam() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }
            aboutTeam.prototype.setData = function (key) {
            };
            aboutTeam.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            aboutTeam.prototype.init = function () {
                this.comp = new ui.info.aboutTeamUI();
                Laya.stage.addChild(this.comp);
            };
            aboutTeam.prototype.initEvent = function () {
                this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            };
            aboutTeam.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.comp.removeSelf();
                    this.parentUI.visible = true;
                }
            };
            return aboutTeam;
        }(ui.info.aboutTeamUI));
        info.aboutTeam = aboutTeam;
    })(info = view.info || (view.info = {}));
})(view || (view = {}));
//# sourceMappingURL=aboutTeam.js.map