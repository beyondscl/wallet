//钱包列表数据模型
var walItem = /** @class */ (function () {
    function walItem() {
        this.itemImgSrc = "img/eth.jpg"; //图片地址
        this.itemName = "ETH"; //元素名称
        this.itemTotal = "0.0000"; //币总资产
        this.itemMonType = "0"; //折算人民币
    }
    walItem.prototype.setItem = function (itemImgSrc, itemName, itemTotal, itemMonType) {
        this.itemImgSrc = itemImgSrc;
        this.itemName = itemName;
        this.itemTotal = itemTotal;
        this.itemMonType = itemMonType;
    };
    return walItem;
}());
//# sourceMappingURL=walItem.js.map