var mod;
(function (mod) {
    var coinItemMod = /** @class */ (function () {
        function coinItemMod(coinImg, coinName, coinVender, coinAddr, coinSelected) {
            this.coinSelected = false;
            this.coinAddr = coinAddr;
            this.coinVender = coinVender;
            this.coinName = coinName;
            this.coinImg = coinImg;
            this.coinSelected = coinSelected;
        }
        return coinItemMod;
    }());
    mod.coinItemMod = coinItemMod;
})(mod || (mod = {}));
//# sourceMappingURL=coinItemMod.js.map