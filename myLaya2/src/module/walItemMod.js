//钱包币种列表数据模型
var mod;
(function (mod) {
    var walItemMod = /** @class */ (function () {
        function walItemMod() {
            this.itemImgSrc = "img/main/wallet_manage.png"; //图片地址
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
            return "img/main/" + this.itemName.toLocaleLowerCase() + ".png"; //wallet_manage.png
            // return "img/main/wallet_manage.png";
            // return this.itemImgSrc;
        };
        return walItemMod;
    }());
    mod.walItemMod = walItemMod;
})(mod || (mod = {}));
//# sourceMappingURL=walItemMod.js.map