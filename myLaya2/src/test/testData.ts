class testData{
    constructor(){

    }
    //根据钱包名称获取钱包相关数据
    public static getWalletInfo(walletName:string):mod.walletMod{
        let wallet = JSON.parse(laya.net.LocalStorage.getItem(walletName));
        let walletMod = new mod.walletMod(wallet.wName,null,null,null,wallet.wAddr,wallet.wCoins);
        return walletMod;
    }
}