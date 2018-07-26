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
        WalletReceive.prototype.setData = function (data) {
        };
        WalletReceive.prototype.setParentUI = function (p) {
            this.paretnUI = p;
        };
        WalletReceive.prototype.init = function (wName) {
            this.comp = new ui.WalletReceiveUI();
            Laya.stage.addChild(this.comp);
            this.comp.lab_wAddr.text = mod.userMod.defWallet.wAddr;
            var val = {
                "address": mod.userMod.defWallet.wAddr,
                "amount": 0,
                "token": "ETH",
                "vender": "WWEC",
                "type": 2
            };
            util.createEwm(this.comp.img_wAddr.width, this.comp.img_wAddr.height, JSON.stringify(val), this, this.getImgSrc);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        };
        WalletReceive.prototype.getImgSrc = function (qrcode) {
            if (qrcode && qrcode._oDrawing._elImage.src) {
                Laya.timer.clearAll(this);
                this.comp.img_wAddr.skin = qrcode._oDrawing._elImage.src;
            }
        };
        WalletReceive.prototype.initEvent = function () {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_copy.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.text_amount.on(Laya.Event.KEY_UP, this, this.btnClick, [2]);
        };
        WalletReceive.prototype.goBack = function () {
            Laya.stage.removeChild(this.comp);
            if (this.paretnUI.comp) {
                this.paretnUI.comp.visible = true;
            }
            else {
                new view.WalletMain().initQueryData(mod.userMod.defWallet);
            }
        };
        WalletReceive.prototype.btnClick = function (type) {
            switch (type) {
                case (1):
                    util.getCopyValue(this.comp.lab_wAddr.text, this.copyBack, this.comp);
                    break;
                case (2):
                    if (util.isNumber(this.comp.text_amount.text)) {
                        this.comp.warn_amount.visible = false;
                        var val = {
                            "address": mod.userMod.defWallet.wAddr,
                            "amount": Number(this.comp.text_amount.text),
                            "token": "ETH",
                            "vender": "WWEC",
                            "type": 2
                        };
                        util.createEwm(this.comp.img_wAddr.width, this.comp.img_wAddr.height, JSON.stringify(val), this, this.getImgSrc);
                    }
                    else {
                        this.comp.warn_amount.visible = true;
                        this.comp.text_amount.text = '';
                    }
                    break;
                default:
                    console.log("error type");
                    break;
            }
        };
        WalletReceive.prototype.copyBack = function (comp) {
            //需要调用本地native api
            comp.btn_copy.label = '已复制';
        };
        return WalletReceive;
    }(ui.WalletReceiveUI));
    view.WalletReceive = WalletReceive;
})(view || (view = {}));
//# sourceMappingURL=WalletReceive.js.map