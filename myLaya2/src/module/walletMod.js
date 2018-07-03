//钱包数据模型
var mod;
(function (mod) {
    var walletMod = /** @class */ (function () {
        function walletMod(wName, wPassword, wPrivateKey, wKeyStore, wAddr, wCoins, wZjc) {
            this.wSkin = config.resource.walletImg;
            this.wName = wName;
            this.wPassword = wPassword;
            this.wPrivateKey = wPrivateKey;
            this.wKeyStore = wKeyStore;
            this.wAddr = "0x" + wAddr; //注意地址
            this.wCoins = wCoins;
            this.wZjc = wZjc;
        }
        walletMod.prototype.toJson = function () {
            var json = {
                wName: this.wName,
                wPassword: this.wPassword,
                wPrivateKey: this.wPrivateKey,
                wKeyStore: this.wKeyStore,
                wAddr: this.wAddr,
                wCoins: this.wCoins,
                wZjc: this.wZjc,
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