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

            about.prototype.setData = function (key) {
            };
            about.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            about.prototype.init = function () {
                this.comp = new ui.info.aboutUI();
                Laya.stage.addChild(this.comp);
                this.comp.lab_version.text = "当前版本：" + Laya.Browser.window.main_config[Laya.Browser.window.env].VERSION;
            };
            about.prototype.initEvent = function () {
                this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
                this.comp.btn_team.on(Laya.Event.CLICK, this, this.btnClick, [2]);
                this.comp.btn_service.on(Laya.Event.CLICK, this, this.btnClick, [3]);
                this.comp.btn_log.on(Laya.Event.CLICK, this, this.btnClick, [4]);
                this.comp.btn_guide.on(Laya.Event.CLICK, this, this.btnClick, [5]);
                this.comp.btn_update.on(Laya.Event.CLICK, this, this.btnClick, [6]);
            };
            about.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.comp.removeSelf();
                    this.parentUI.visible = true;
                    return;
                }
                if (2 == index) {
                    this.comp.visible = false;
                    var s = new view.info.aboutTeam().setParetUI(this.comp);
                    return;
                }
                if (3 == index) {
                    this.comp.visible = false;
                    var s = new view.info.Service();
                    s.setParetUI(this.comp);
                    s.setData("1");
                    return;
                }
                if (4 == index) {
                    Laya.loader.load(config.resource.devLogPath, Laya.Handler.create(this, this.devLog), null, Laya.Loader.TEXT);
                }
                if (5 == index) {
                    var wait = new view.alert.waiting("正在加载资源...");
                    wait.popup();
                    var res = ["res/atlas/img/guide.atlas"];
                    Laya.loader.load(res, Laya.Handler.create(this, this.guide, [wait], true));
                }
                if (6 == index) {
                    new view.alert.Warn("已是最新版本", "").popup();
                }
            };
            about.prototype.guide = function (args) {
                var wait = args;
                wait.stop();
                new guide().setParentUI(this);
            };
            about.prototype.devLog = function () {
                var json = Laya.loader.getRes(config.resource.devLogPath);
                var s = new info.Service();
                s.setParetUI(this.comp);
                s.setData("1");
                s.setTextData(json);
            };
            return about;
        }(ui.info.aboutUI));
        info.about = about;
    })(info = view.info || (view.info = {}));
})(view || (view = {}));
//# sourceMappingURL=about.js.map