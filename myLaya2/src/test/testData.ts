class testData {
    constructor() {

    }

    //根据钱包名称获取钱包相关数据
    public static getWalletInfo(walletName: string): mod.walletMod {
        let wallet = JSON.parse(laya.net.LocalStorage.getItem(walletName));
        let walletMod = new mod.walletMod();
        walletMod.setWallet(wallet);
        return walletMod;
    }

    //钱包添加币种
    public static getCoins(): any {
        return [new mod.coinItemMod("template/List/message icon_57x57.png", "ETH", "vender", "95x...5s1s4", false, '')];
    }

    //管理钱包：获取所有钱包
    public static getWallets(): Array<mod.walletMod> {
        let walletNames = util.getItem(config.prod.getAppKey());
        if (walletNames) {
            let data = [];
            for (let i = 0; i < walletNames.length; i++) {
                let walletJson = util.getItem(walletNames[i]);
                let wal = new mod.walletMod();
                wal.setWallet(walletJson);
                data[data.length] = wal;
            }
            return data;
        }
    }
}