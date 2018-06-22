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
//交易列表
var dealItemUI = /** @class */ (function (_super) {
    __extends(dealItemUI, _super);
    function dealItemUI() {
        var _this = _super.call(this) || this;
        _this.img = new Laya.Image(); //发送或接受
        _this.lab_deal_name = new Label(); //发送或接受
        _this.lab_addr = new Label(); //地址
        _this.lab_amount = new Label(); //总量
        _this.sperated = new Laya.Image();
        _this.size(dealItemUI.WID, dealItemUI.HEI);
        _this.addChild(_this.img);
        _this.addChild(_this.lab_deal_name);
        _this.addChild(_this.lab_addr);
        _this.addChild(_this.lab_amount);
        _this.addChild(_this.sperated);
        return _this;
    }
    dealItemUI.prototype.init = function (dealItem) {
        this.img.skin = dealItem.getDealImgSrc();
        this.img.width = 30;
        this.img.height = 30;
        this.img.centerY = 0;
        this.img.x = 10;
        this.lab_deal_name.text = dealItem.getDealChName();
        this.lab_deal_name.x = this.img.x + this.img.width + 5;
        this.lab_deal_name.y = 0;
        this.lab_deal_name.height = 25;
        this.lab_deal_name.valign = "middle";
        var trans_type1 = dealItem.dealType.toUpperCase() == config.msg.deal_transfer_in ? 'From' : 'To'; //from | to
        this.lab_addr.text = trans_type1 + ": " + util.getAddr(dealItem.getDealAddr());
        this.lab_addr.x = this.img.x + this.img.width + 5;
        this.lab_addr.y = 25;
        this.lab_addr.height = 25;
        this.lab_addr.valign = "middle";
        var trans_type = dealItem.dealType.toUpperCase() == config.msg.deal_transfer_in ? '+' : '-'; //+ | -
        this.lab_amount.text = trans_type + dealItem.dealAmount + " " + dealItem.dealCoinType.toUpperCase();
        this.lab_amount.color = dealItem.dealType.toUpperCase() == config.msg.deal_transfer_out ? 'red' : 'green';
        this.lab_amount.align = "right";
        this.lab_amount.valign = "middle";
        this.lab_amount.centerY = 0;
        this.lab_amount.right = 20;
        this.sperated.skin = config.resource.sperated;
        this.sperated.y = 49;
    };
    dealItemUI.WID = 300;
    dealItemUI.HEI = 50;
    return dealItemUI;
}(Box));
//# sourceMappingURL=dealItemUI.js.map