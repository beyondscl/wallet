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
    var WalletReceive = /** @class */ (function (_super) {
        __extends(WalletReceive, _super);
        function WalletReceive(wName) {
            var _this = _super.call(this) || this;
            _this.init(wName);
            _this.initEvent();
            return _this;
        }
        WalletReceive.prototype.init = function (wName) {
            this.comp = new ui.WalletReceiveUI();
            Laya.stage.addChild(this.comp);
            var wAddr = service.walletServcie.getWallet(wName).wAddr;
            this.comp.lab_wAddr.text = wAddr;
            util.createEwm(this.comp.img_wAddr.width, this.comp.img_wAddr.height, wAddr, this, this.getImgSrc);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        };
        WalletReceive.prototype.getImgSrc = function (qrcode) {
            if (qrcode && qrcode._oDrawing._elImage.src) {
                Laya.timer.clearAll(this);
                var img = new Laya.Image().loadImage(qrcode._oDrawing._elImage.src);
                img.x = this.comp.img_wAddr.x;
                img.y = this.comp.img_wAddr.y;
                this.comp.addChild(img);
            }
        };
        WalletReceive.prototype.initEvent = function () {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_copy.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        };
        WalletReceive.prototype.setData = function (data) {
        };
        WalletReceive.prototype.goBack = function () {
            Laya.stage.removeChild(this.comp);
            new view.WalletMain().initQueryData(mod.userMod.defWallet);
        };
        WalletReceive.prototype.btnClick = function (type) {
            switch (type) {
                case (1):
                    util.getCopyValue(this.comp.lab_wAddr.text, this.copyBack, this.comp);
                    break;
                default:
                    console.log("error type");
                    break;
            }
        };
        WalletReceive.prototype.copyBack = function (comp) {
            comp.btn_copy.label = '已复制';
        };
        return WalletReceive;
    }(ui.WalletReceiveUI));
    view.WalletReceive = WalletReceive;
})(view || (view = {}));
//# sourceMappingURL=WalletReceive.js.map