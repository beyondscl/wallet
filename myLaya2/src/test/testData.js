var testData = /** @class */ (function () {
    function testData() {
    }

    //根据钱包名称获取钱包相关数据
    testData.getWalletInfo = function (walletName) {
        var wallet = JSON.parse(laya.net.LocalStorage.getItem(walletName));
        var walletMod = new mod.walletMod();
        walletMod.setWallet(wallet);
        return walletMod;
    };
    //钱包添加币种
    testData.getCoins = function () {
        return [new mod.coinItemMod("template/List/message icon_57x57.png", "ETH", "vender", "95x...5s1s4", false, '')];
    };
    //管理钱包：获取所有钱包
    testData.getWallets = function () {
        var walletNames = util.getItem(config.prod.appKey);
        if (walletNames) {
            var data = [];
            for (var i = 0; i < walletNames.length; i++) {
                var walletJson = util.getItem(walletNames[i]);
                var wal = new mod.walletMod();
                wal.setWallet(walletJson);
                data[data.length] = wal;
            }
            return data;
        }
    };
    return testData;
}());
//# sourceMappingURL=testData.js.map