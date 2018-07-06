//钱包币种列表数据模型
var mod;
(function (mod) {
    var walItemMod = /** @class */ (function () {
        function walItemMod() {
            this.itemImgSrc = ""; //图片地址
            this.itemName = "ETH"; //元素名称
            this.itemTotal = "0.0000"; //币总资产
            this.itemMonType = "0.0000"; //折算人民币|美元
        }

        walItemMod.prototype.setItem = function (itemImgSrc, itemName, itemTotal, itemMonType) {
            this.itemImgSrc = itemImgSrc;
            this.itemName = itemName;
            this.itemTotal = itemTotal;
            this.itemMonType = itemMonType;
        };
        walItemMod.prototype.getItemImgSrc = function () {
            return "img/coins/" + this.itemName.toUpperCase() + ".png";
        };
        return walItemMod;
    }());
    mod.walItemMod = walItemMod;
})(mod || (mod = {}));
//# sourceMappingURL=walItemMod.js.map