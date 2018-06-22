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
    var CreateWallet = view.CreateWallet;
    var EnterApp = /** @class */ (function (_super) {
        __extends(EnterApp, _super);
        function EnterApp() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.initEvent();
            new config.init().initData(mod.userMod.ethAddress);
            return _this;
        }
        EnterApp.prototype.init = function () {
            this.comp = new ui.EnterAppUI();
            Laya.stage.addChild(this.comp);
            this.spr_bg.loadImage("guide/timg.jpg", 0, 0, Laya.Browser.width, Laya.Browser.height);
            Laya.stage.addChild(this.spr_bg);
            Laya.stage.addChild(this.lab_title);
            Laya.stage.addChild(this.lab_subTitle);
            Laya.stage.addChild(this.btn_create);
            Laya.stage.addChild(this.btn_import);
        };
        EnterApp.prototype.initEvent = function () {
            this.btn_create.on(Laya.Event.CLICK, this, this.createWallet);
            this.btn_create.on(Laya.Event.CLICK, this, this.importWallet);
        };
        EnterApp.prototype.createWallet = function () {
            Laya.stage.removeChild(this.comp);
            Laya.stage.removeSelf();
            Laya.stage.removeChildren(0, 99);
            new CreateWallet();
        };
        EnterApp.prototype.importWallet = function () {
        };
        return EnterApp;
    }(ui.EnterAppUI));
    view.EnterApp = EnterApp;
})(view || (view = {}));
//# sourceMappingURL=EnterApp.js.map