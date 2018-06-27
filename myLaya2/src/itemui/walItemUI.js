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
//钱包中币种列表
var walItemUI = /** @class */ (function (_super) {
    __extends(walItemUI, _super);
    function walItemUI() {
        var _this = _super.call(this) || this;
        _this.img = new Laya.Image();
        _this.lab_name = new Label();
        _this.lab_total = new Label();
        _this.lab_type = new Label();
        _this.sperated = new Laya.Image();
        _this.size(walItemUI.WID, walItemUI.HEI);
        _this.addChild(_this.img);
        _this.addChild(_this.lab_name);
        _this.addChild(_this.lab_total);
        _this.addChild(_this.lab_type);
        _this.addChild(_this.sperated);
        return _this;
    }
    walItemUI.prototype.init = function (walItem) {
        this.img.skin = walItem.getItemImgSrc();
        this.img.width = 60;
        this.img.height = 60;
        this.img.centerY = 0;
        this.img.x = 20;
        this.lab_name.text = walItem.itemName;
        this.lab_name.x = this.img.x + this.img.width + 20;
        this.lab_name.centerY = 0;
        this.lab_total.text = walItem.itemTotal;
        this.lab_total.height = 25;
        this.lab_total.align = "right";
        this.lab_total.valign = "middle";
        this.lab_total.right = 20;
        this.lab_type.text = "≈$" + walItem.itemMonType;
        this.lab_type.y = 25;
        this.lab_type.height = 25;
        this.lab_type.align = "right";
        this.lab_type.valign = "middle";
        this.lab_type.right = 20;
        this.sperated.skin = config.resource.sperated;
        this.sperated.left = 0;
        this.sperated.right = 0;
        this.sperated.y = walItemUI.HEI - 1;
    };
    walItemUI.WID = util.getScreenWidth();
    walItemUI.HEI = 80;
    return walItemUI;
}(Box));
//# sourceMappingURL=walItemUI.js.map