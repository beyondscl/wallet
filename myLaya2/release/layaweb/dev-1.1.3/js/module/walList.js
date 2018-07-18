var walList = /** @class */ (function () {
    function walList() {
        this.itemImgSrc = "img/eth.jpg"; //图片地址
        this.itemName = "ETH"; //元素名称
        this.itemTotal = "0.0000"; //币总资产
        this.itemMonType = "≈¥ 0"; //折算人民币
        this.data = null;
    }
    walList.prototype.setItem = function (itemImgSrc, itemName, itemTotal, itemMonType) {
        this.itemImgSrc = itemImgSrc;
        this.itemName = itemName;
        this.itemTotal = itemTotal;
        this.itemMonType = itemMonType;
    };
    walList.prototype.getList = function () {
        for (var i = 0; i < 5; i++) {
            var item = new walList();
            this.data[i] = item;
        }
        return this.data;
    };
    return walList;
}());
//# sourceMappingURL=walList.js.map