//添加币种：币种模型
var mod;
(function (mod) {
    var coinItemMod = /** @class */ (function () {
        function coinItemMod(coinImg, coinName, coinVender, coinAddr, coinSelected, abi) {
            this.coinSelected = false;
            this.coinAddr = coinAddr;
            this.coinVender = coinVender;
            this.coinName = coinName;
            this.coinImg = coinImg;
            this.coinSelected = coinSelected;
            this.abi = abi;
        }

        return coinItemMod;
    }());
    mod.coinItemMod = coinItemMod;
})(mod || (mod = {}));
//# sourceMappingURL=coinItemMod.js.map