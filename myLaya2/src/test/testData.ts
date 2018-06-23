class testData {
    constructor() {

    }

    //根据钱包名称获取钱包相关数据
    public static getWalletInfo(walletName: string): mod.walletMod {
        let wallet = JSON.parse(laya.net.LocalStorage.getItem(walletName));
        let walletMod = new mod.walletMod(wallet.wName, null, null, null, wallet.wAddr, wallet.wCoins);
        return walletMod;
    }

    //钱包添加币种
    public static getCoins(): any {
        return [new mod.coinItemMod("template/List/message icon_57x57.png", "ETH", "vender", "95x...5s1s4", false)];
    }

    //管理钱包：获取所有钱包
    public static getWallets(): Array<mod.walletMod> {
        let walletNames = util.getItem(config.prod.appKey);
        if (walletNames) {
            let data = [];
            for (let i = 0; i < walletNames.length; i++) {
                let walletJson = util.getItem(walletNames[i]);
                data[data.length] = new mod.walletMod(walletJson.wName, null, null, null, walletJson.wAddr, null);
                data[data.length] = new mod.walletMod(walletJson.wName, null, null, null, walletJson.wAddr, null);
            }
            return data;
        }
    }
}