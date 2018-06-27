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
        var ExpKeystore = /** @class */ (function (_super) {
            __extends(ExpKeystore, _super);
            function ExpKeystore() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }
            ExpKeystore.prototype.init = function () {
                this.comp = new ui.set.ExpKeystoreUI();
                Laya.stage.addChild(this.comp);
                Laya.stage.bgColor = 'white';
                Laya.stage.scaleMode = config.prod.appAdapterType;
            };
            ExpKeystore.prototype.initEvent = function () {
                this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
                this.comp.btn_copy.on(Laya.Event.CLICK, this, this.btnClick, [3]);
                this.comp.btn_tab.selectHandler = new Laya.Handler(this, this.onSelect);
            };
            ExpKeystore.prototype.onSelect = function (index) {
                this.comp.viewStack.selectedIndex = index;
                if (index == 1) {
                    var wallet = service.walletServcie.getWallet(this.parentUI.lab_wName.text);
                    util.createEwm(this.comp.img_keystore.width, this.comp.img_keystore.height, wallet.wKeyStore, this, this.getImgSrc);
                }
            };
            ExpKeystore.prototype.getImgSrc = function (qrcode) {
                if (qrcode._oDrawing._elImage.src) {
                    Laya.timer.clearAll(this);
                    var img = new Laya.Image().loadImage(qrcode._oDrawing._elImage.src);
                    img.x = this.comp.img_keystore.x;
                    img.y = this.comp.img_keystore.y + this.comp.viewStack.y; //因为在box中
                    this.comp.addChild(img);
                }
            };
            ExpKeystore.prototype.setData = function (key) {
                this.comp.text_keystore.text = key;
            };
            ExpKeystore.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.stage.removeChild(this.comp);
                    this.parentUI.visible = true;
                    return;
                }
                if (2 == index) {
                }
                if (3 == index) {
                    //复制
                    return;
                }
            };
            ExpKeystore.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            return ExpKeystore;
        }(ui.set.ExpKeystoreUI));
        set.ExpKeystore = ExpKeystore;
    })(set = view.set || (view.set = {}));
})(view || (view = {}));
//# sourceMappingURL=ExpKeystore.js.map