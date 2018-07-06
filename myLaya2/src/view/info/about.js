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
    var info;
    (function (info) {
        var about = /** @class */ (function (_super) {
            __extends(about, _super);

            function about() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }

            about.prototype.init = function () {
                this.comp = new ui.info.aboutUI();
                Laya.stage.addChild(this.comp);
            };
            about.prototype.initEvent = function () {
                this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
                this.comp.btn_team.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            };
            about.prototype.setData = function (key) {
            };
            about.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.comp.removeSelf();
                    this.parentUI.visible = true;
                }
                if (2 == index) {
                    this.comp.visible = false;
                    new view.info.aboutTeam().setParetUI(this.comp);
                }
            };
            about.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            return about;
        }(ui.info.aboutUI));
        info.about = about;
    })(info = view.info || (view.info = {}));
})(view || (view = {}));
//# sourceMappingURL=about.js.map