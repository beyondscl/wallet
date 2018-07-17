//钱包数据模型
var mod;
(function (mod) {
    var walletMod = /** @class */ (function () {
        function walletMod() {
            this.wSkin = config.resource.walletImg;
            //该钱包的总金额rmb，用于管理钱包显示,在你确认有值的情况下获取
            this.wAmount = 0;
            this.wCoinAmount = [];
        }

        //初始化
        walletMod.prototype.init = function (wName, wPassword, wPrivateKey, wKeyStore, wAddr, wCoins, wZjc) {
            this.wName = wName;
            this.wPassword = wPassword;
            this.wPrivateKey = wPrivateKey;
            this.wKeyStore = wKeyStore;
            this.wAddr = "0x" + wAddr; //注意地址
            this.wCoins = wCoins;
            this.wZjc = wZjc;
        };
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
        walletMod.prototype.setWallet = function (json) {
            this.wName = json.wName;
            this.wPassword = json.wPassword;
            this.wPrivateKey = json.wPrivateKey;
            this.wKeyStore = json.wKeyStore;
            this.wAddr = json.wAddr; //注意地址
            this.wCoins = json.wCoins;
            this.wZjc = json.wZjc;
        };
        walletMod.prototype.getCoinSelected = function (coin) {
        };
        return walletMod;
    }());
    mod.walletMod = walletMod;
})(mod || (mod = {}));
//# sourceMappingURL=walletMod.js.map