var testData = /** @class */ (function () {
    function testData() {
    }
    //根据钱包名称获取钱包相关数据
    testData.getWalletInfo = function (walletName) {
        var wallet = JSON.parse(laya.net.LocalStorage.getItem(walletName));
        var walletMod = new mod.walletMod(wallet.wName, null, null, null, wallet.wAddr, wallet.wCoins);
        return walletMod;
    };
    //钱包添加币种
    testData.getCoins = function () {
        return [new mod.coinItemMod("template/List/message icon_57x57.png", "ETH", "vender", "95x...5s1s4", false)];
    };
    return testData;
}());
//# sourceMappingURL=testData.js.map