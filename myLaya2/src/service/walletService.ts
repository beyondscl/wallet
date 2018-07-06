//所有数据操作逻辑都放在这里统一管理
module service {
    export class walletServcie {
        constructor() {
        }

        //修改钱包名称
        //oName 旧钱包名称，nName新名词
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
                        if (walletNames[i].trim() == oName.trim()) {
                            walletNames[i] = nName;
                            util.setItemJson(config.prod.appKey, walletNames);
                            break;
                        }
                    }
                }
                //更新钱包具体数据
                let wallet = this.getWallet(oName);
                wallet.wName = nName;
                util.setItemJson(nName, wallet);
                util.delItem(oName);
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
        public static creatWallet(wName: string, wPass: string, cb: any, args: Array<any>): mod.walletMod {
            try {
                let walletJson = util.getItem(wName);
                if (walletJson) {//已经验证过一次了
                    return;
                }
                let mnemonicWord = Laya.Browser.window.genSeed();
                return Laya.Browser.window.generateAddresses(mnemonicWord, 1, wPass).then(
                    ret => {
                        return cb(wName, wPass, mnemonicWord, ret, args)
                    }
                );
            } catch (error) {
                console.log(error)
            }
        }

        //import钱包
        public static importWallet(mnemonicWord: string, wName: string, wPass: string, cb: any, args: Array<any>): mod.walletMod {
            try {
                let walletJson = util.getItem(wName);
                if (walletJson) {//已经验证过一次了
                    return;
                }
                return Laya.Browser.window.generateAddresses(mnemonicWord, 1, wPass).then(
                    ret => {
                        return cb(wName, wPass, mnemonicWord, ret, args)
                    }
                );
            } catch (error) {
                console.log(error)
            }
        }

        //获取所有币种：用于钱包添加币种
        public static getAllCoins(): Array<mod.coinItemMod> {
            //初始化数据，可以改为json配置文件
            let coins = [
                {
                    "name": "ETH",
                    "vender": "cdcqwl",
                    "addr": "0x000000000000000000000000000000000000000000",
                },
                {
                    "name": "WWEC",
                    "vender": "cdcqwl",
                    "addr": "0x000000000000000000000000000000000000000000",
                    //abi
                    //data
                },
                // {
                //     "name": "BCH",
                //     "vender": "cdcqwl",
                //     "addr": "0x000000000000000000000000000000000000000000",
                // },
                // {
                //     "name": "BTH",
                //     "vender": "cdcqwl",
                //     "addr": "0x000000000000000000000000000000000000000000",
                // },
                // {
                //     "name": "LTC",
                //     "vender": "cdcqwl",
                //     "addr": "0x000000000000000000000000000000000000000000",
                // },
                // {
                //     "name": "MKR",
                //     "vender": "cdcqwl",
                //     "addr": "0x000000000000000000000000000000000000000000",
                // },
                // {
                //     "name": "REP",
                //     "vender": "cdcqwl",
                //     "addr": "0x000000000000000000000000000000000000000000",
                // },
            ];
            let ret = [];
            for (let i = 0; i < coins.length; i++) {
                ret[ret.length] = new mod.coinItemMod("img/coins/" + coins[i].name.toUpperCase() + ".png", coins[i].name, coins[i].vender, coins[i].addr, false);
            }
            return ret;
        }

        //获取所有币种：用于钱包添加币种,传入钱包名称，用于初始化
        public static getAllCoinsByWal(wName: string): Array<mod.coinItemMod> {
            let wallet: mod.walletMod = this.getWallet(wName);
            let selectedCoins = wallet.wCoins;
            let allCoins = this.getAllCoins();
            for (let i = 0; i < allCoins.length; i++) {
                let c: mod.coinItemMod = allCoins[i];
                for (let j = 0; j < selectedCoins.length; j++) {
                    if (c.coinName == selectedCoins[j]) {
                        c.coinSelected = true;
                    }
                }
            }
            return allCoins;
            // return [new mod.coinItemMod("template/List/message icon_57x57.png", "ETH", "vender", "95x...5s1s4", this.getSelected(wName, 'ETH')),
            // new mod.coinItemMod("template/List/message icon_57x57.png", "BTC", "vender", "95x...5s1s4", this.getSelected(wName, 'BTC'))]
        }

        //获取币种交易列表
        public static getDealListByWName(coinName: string): Array<mod.dealtemMod> {
            let datas: Array<mod.dealtemMod> = [];
            let deals = util.getItem(config.prod.appDealKey);
            if (deals) {
                for (let j = 0; j < deals.length; j++) {
                    let d = deals[j];
                    if (d.dealCoinType == coinName) {
                        let t = new mod.dealtemMod("", "", "", "", "", "", "", "", "", "");
                        t.setJson(d);
                        datas[datas.length] = t;
                    }
                }
            }
            return datas;
        }

        //获取所有交易列表
        public static getDealList(): Array<mod.dealtemMod> {
            let datas: Array<mod.dealtemMod> = [];
            let deals = util.getItem(config.prod.appDealKey);
            if (deals) {
                for (let j = 0; j < deals.length; j++) {
                    let d = deals[j];
                    let t = new mod.dealtemMod("", "", "", "", "", "", "", "", "", "");
                    t.setJson(d);
                    datas[datas.length] = t;
                }
            }
            return datas;
        }

        //管理钱包：获取所有钱包
        public static getWallets(): Array<mod.walletMod> {
            let walletNames = util.getItem(config.prod.appKey);
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
            return null;
        }

        //管理钱包：根据钱包名称获取所有信息，备份之后，备份数据后部分数据会被置空
        public static getWallet(wName: string): mod.walletMod {
            let walletJson = util.getItem(wName);
            if (walletJson == null) {
                console.log("不存在钱包：" + wName);
                return null;
            }
            let t = new mod.walletMod()
            t.setWallet(walletJson);
            return t;
        }

        //检查密码是否正确
        public static checkPassword(pass: string): boolean {
            return true;
        }

        //创建，切换钱包需要实例化全局对象用于交易
        public static initLigthWallet(wKeyStore: string) {
            Laya.Browser.window.deserialize(wKeyStore);
        }

        //交易
        public static transfer(password, fromAddr, toAddr, value, gasPrice, gas, callback, args) {
            Laya.Browser.window.sendEther(password, fromAddr, toAddr, value, gasPrice, gas).then(
                ret => {
                    callback(ret, args)
                }
            ).catch(function (e) {
                callback(e, args)
            })
        }

        //获取余额
        public static getBalance(addr, callback, arg) {
            Laya.Browser.window.getBalance(addr, callback, arg);
        }

        //key{
        public static addDealItem(data: mod.dealtemMod): void {
            let deals = util.getItem(config.prod.appDealKey);
            if (deals) {
                deals[deals.length] = data.toJson();
                util.setItemJson(config.prod.appDealKey, deals);
            } else {//新建
                util.setItemJson(config.prod.appDealKey, [data.toJson()]);
            }
        }

        //记录交易

        //导入钱包校验助记词
        public static vilMemoryWork(words: string) {
            if (words && Laya.Browser.window.lightwallet.keystore.isSeedValid(words)) {
                return true;
            }
            return false;
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
    }
}