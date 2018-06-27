//钱包数据模型
var mod;
(function (mod) {
    var walletMod = /** @class */ (function () {
        function walletMod(wName, wPassword, wPrivateKey, wKeyStore, wAddr, wCoins) {
            this.wSkin = config.resource.walletImg;
            this.wName = wName;
            this.wPassword = wPassword;
            this.wPrivateKey = wPrivateKey;
            this.wKeyStore = wKeyStore;
            this.wAddr = wAddr;
            this.wCoins = wCoins;
        }

        walletMod.prototype.toJson = function () {
            var json = {
                wName: this.wName,
                wPassword: this.wPassword,
                wPrivateKey: this.wPrivateKey,
                wKeyStore: this.wKeyStore,
                wAddr: this.wAddr,
                wCoins: this.wCoins
            };
            return json;
        };
        walletMod.prototype.getCoinSelected = function (coin) {
        };
        return walletMod;
    }());
    mod.walletMod = walletMod;
})(mod || (mod = {}));
//# sourceMappingURL=walletMod.js.map