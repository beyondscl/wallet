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
//主界面弹出框,快速引导层
var walltNameUI = /** @class */ (function (_super) {
    __extends(walltNameUI, _super);

    function walltNameUI() {
        var _this = _super.call(this) || this;
        _this.WID = 150;
        _this.HEI = 50;
        _this.wImg = new Laya.Image();
        _this.wName = new Laya.Label();
        _this.wSpe = new Laya.Image();
        _this.size(_this.WID, _this.HEI);
        _this.addChild(_this.wImg);
        _this.addChild(_this.wName);
        _this.addChild(_this.wSpe);
        return _this;
    }

    walltNameUI.prototype.init = function (walletName) {
        this.wImg.skin = 'img/wallet_manage.png';
        this.wImg.left = 10;
        this.wImg.width = 30;
        this.wImg.height = 30;
        this.wImg.top = (this.HEI - this.wImg.height) / 2;
        this.wName.text = walletName.replace(/([^]{5})([^]+)/, "$1.");
        this.wName.left = 50;
        this.wName.height = 30;
        this.wName.valign = 'middle';
        this.wName.top = (this.HEI - this.wName.height) / 2;
        this.wSpe.skin = config.resource.sperated;
        this.wSpe.top = this.HEI;
        this.wSpe.left = 0;
        this.wSpe.right = 0;
    };
    return walltNameUI;
}(Box));
//# sourceMappingURL=walltNameUI.js.map