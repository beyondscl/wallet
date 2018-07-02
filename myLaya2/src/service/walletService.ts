//所有数据操作逻辑都放在这里统一管理
module service {
    export class walletServcie {
        constructor() {
        }

        //修改钱包名称
        public static walletUpdateName(oName: string, nName: string): boolean {
            let walletJson = util.getItem(nName);
            if (walletJson) {//已经存在该钱包
                return false;
            }

            let ow = util.getItem(oName);
            if (ow) {
                ow.wName = nName;
                util.setItemJson(nName, ow);
                mod.userMod.defWallet.wName = nName;//更新默认钱包
                let walletNames = util.getItem(config.prod.appKey);//更新钱包列表
                if (walletNames) {
                    for (let i = 0; i < walletNames.length; i++) {
                        if (walletNames[i] == oName) {
                            walletNames[i] = nName;
                            util.setItemJson(config.prod.appKey, walletNames);
                            break;
                        }
                    }
                }
                return true;
            }
            console.log("walletUpdateName no walletName:" + oName);
            return false;

        }

        //检查是否存在该钱包
        public static checkDupWal(wName: string): boolean {
            let walletJson = util.getItem(wName);
            return null == walletJson ? false : true;
        }

        //创建钱包
        public static creatWallet(wName: string, wPass: string): mod.walletMod {
            let wallet = new mod.walletMod(wName, wPass, "privatekey", "keystore", "851a3sdf18851a3sdf18851a3sdf18851a3sdf1852", ['ETH'], null);
            let walletJson = wallet.toJson();
            util.setItemJson(wallet.wName, walletJson);
            let appStore = util.getItem(config.prod.appKey);
            if (appStore) {
                appStore[appStore.length] = wallet.wName;
                util.setItemJson(config.prod.appKey, appStore);
            } else {
                util.setItemJson(config.prod.appKey, [wallet.wName]);
            }
            mod.userMod.defWallet = wallet;
            ;
            return wallet;
        }

        //获取所有币种：用于钱包添加币种
        public static getAllCoins(): Array<mod.coinItemMod> {
            return [new mod.coinItemMod("template/List/message icon_57x57.png", "ETH", "vender", "95x...5s1s4", false),
                new mod.coinItemMod("template/List/message icon_57x57.png", "BTC", "vender", "95x...5s1s4", false)];
        }

        //获取所有币种：用于钱包添加币种,传入钱包名称，用于初始化
        public static getAllCoinsByWal(wName: string): Array<mod.coinItemMod> {

            return [new mod.coinItemMod("template/List/message icon_57x57.png", "ETH", "vender", "95x...5s1s4", this.getSelected(wName, 'ETH')),
                new mod.coinItemMod("template/List/message icon_57x57.png", "BTC", "vender", "95x...5s1s4", this.getSelected(wName, 'BTC'))]
        }

        private static getSelected(wName, cName) {
            let wallet = util.getItem(wName);
            if (wallet) {
                for (let i = 0; i < wallet.wCoins.length; i++) {
                    if (wallet.wCoins[i] == cName) {
                        return true;
                    }
                }
            }
            return false;
        }

        //获取币种交易列表
        public static getDealListByWName(wName: string): Array<mod.dealtemMod> {
            //测试数据
            let datas: Array<mod.dealtemMod> = [];
            for (let i = 0; i < 3; i++) {
                let t = new mod.dealtemMod('send', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', i + 1, 'ETH', null, null, null, null, null);
                datas[datas.length] = t;
            }
            let t = new mod.dealtemMod('RECEIVE', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', 9, 'ETH', null, null, null, null, null);
            datas[datas.length] = t;
            return datas;
        }

        //获取所有交易列表
        public static getDealList(): Array<mod.dealtemMod> {
            //测试数据
            let datas: Array<mod.dealtemMod> = [];
            for (let i = 0; i < 3; i++) {
                let t = new mod.dealtemMod('send', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', i + 1, 'ETH', null, null, null, null, null);
                datas[datas.length] = t;
            }
            let t = new mod.dealtemMod('RECEIVE', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', 9, 'ETH', null, null, null, null, null);
            datas[datas.length] = t;
            return datas;
        }

        //管理钱包：获取所有钱包
        public static getWallets(): Array<mod.walletMod> {
            let walletNames = util.getItem(config.prod.appKey);
            if (walletNames) {
                let data = [];
                for (let i = 0; i < walletNames.length; i++) {
                    let walletJson = util.getItem(walletNames[i]);
                    data[data.length] = new mod.walletMod(walletJson.wName, null, null, null, walletJson.wAddr, walletJson.wCoins, null);
                }
                return data;
            }
            return null;
        }

        //管理钱包：根据钱包名称获取所有信息，备份之后，备份数据后部分数据会被置空
        public static getWallet(wName: string): mod.walletMod {
            let walletJson = util.getItem(wName);
            if (walletJson == null) {
                console.log("不存在钱包：" + wName);
                return null;
            }
            return new mod.walletMod(walletJson.wName, walletJson.wPassword, walletJson.wPrivateKey, walletJson.wKeyStore, walletJson.wAddr, walletJson.wCoins, null);
        }

        //检查密码是否正确
        public static checkPassword(pass: string): boolean {
            return true;
        }
    }
}