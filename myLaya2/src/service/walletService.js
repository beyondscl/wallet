//所有数据操作逻辑都放在这里统一管理
var service;
(function (service) {
    var walletServcie = /** @class */ (function () {
        function walletServcie() {
        }

        //修改钱包名称
        //oName 旧钱包名称，nName新名词
        walletServcie.walletUpdateName = function (oName, nName) {
            var walletJson = util.getItem(nName);
            if (walletJson) { //已经存在该钱包
                return false;
            }
            var ow = util.getItem(oName);
            if (ow) {
                ow.wName = nName;
                util.setItemJson(nName, ow);
                mod.userMod.defWallet.wName = nName; //更新默认钱包
                var walletNames = util.getItem(config.prod.appKey); //更新钱包列表
                if (walletNames) {
                    for (var i = 0; i < walletNames.length; i++) {
                        if (walletNames[i].trim() == oName.trim()) {
                            walletNames[i] = nName;
                            util.setItemJson(config.prod.appKey, walletNames);
                            break;
                        }
                    }
                }
                //更新钱包具体数据
                var wallet = this.getWallet(oName);
                wallet.wName = nName;
                util.setItemJson(nName, wallet);
                util.delItem(oName);
                return true;
            }
            console.log("walletUpdateName no walletName:" + oName);
            return false;
        };
        //检查是否存在该钱包
        walletServcie.checkDupWal = function (wName) {
            var walletJson = util.getItem(wName);
            return null == walletJson ? false : true;
        };
        //创建钱包
        walletServcie.creatWallet = function (wName, wPass, cb, args) {
            try {
                var walletJson = util.getItem(wName);
                if (walletJson) { //已经验证过一次了
                    return;
                }
                var mnemonicWord_1 = Laya.Browser.window.genSeed();
                return Laya.Browser.window.generateAddresses(mnemonicWord_1, 1, wPass).then(function (ret) {
                    return cb(wName, wPass, mnemonicWord_1, ret, args);
                });
            }
            catch (error) {
                console.log(error);
            }
        };
        //import钱包
        walletServcie.importWallet = function (mnemonicWord, wName, wPass, cb, args) {
            try {
                var walletJson = util.getItem(wName);
                if (walletJson) { //已经验证过一次了
                    return;
                }
                return Laya.Browser.window.generateAddresses(mnemonicWord, 1, wPass).then(function (ret) {
                    return cb(wName, wPass, mnemonicWord, ret, args);
                });
            }
            catch (error) {
                console.log(error);
            }
        };
        //获取所有币种：用于钱包添加币种
        walletServcie.getAllCoins = function () {
            //初始化数据，可以改为json配置文件
            var coins = [
                {
                    "name": "ETH",
                    "vender": "cdcqwl",
                    "addr": "0x000000000000000000000000000000000000000000",
                },
                {
                    "name": "WWEC",
                    "vender": "cdcqwl",
                    "addr": "0x000000000000000000000000000000000000000000",
                },
            ];
            var ret = [];
            for (var i = 0; i < coins.length; i++) {
                ret[ret.length] = new mod.coinItemMod("img/coins/" + coins[i].name.toUpperCase() + ".png", coins[i].name, coins[i].vender, coins[i].addr, false);
            }
            return ret;
        };
        //获取所有币种：用于钱包添加币种,传入钱包名称，用于初始化
        walletServcie.getAllCoinsByWal = function (wName) {
            var wallet = this.getWallet(wName);
            var selectedCoins = wallet.wCoins;
            var allCoins = this.getAllCoins();
            for (var i = 0; i < allCoins.length; i++) {
                var c = allCoins[i];
                for (var j = 0; j < selectedCoins.length; j++) {
                    if (c.coinName == selectedCoins[j]) {
                        c.coinSelected = true;
                    }
                }
            }
            return allCoins;
            // return [new mod.coinItemMod("template/List/message icon_57x57.png", "ETH", "vender", "95x...5s1s4", this.getSelected(wName, 'ETH')),
            // new mod.coinItemMod("template/List/message icon_57x57.png", "BTC", "vender", "95x...5s1s4", this.getSelected(wName, 'BTC'))]
        };
        //获取币种交易列表
        walletServcie.getDealListByWName = function (coinName) {
            var datas = [];
            var deals = util.getItem(config.prod.appDealKey);
            if (deals) {
                for (var j = 0; j < deals.length; j++) {
                    var d = deals[j];
                    if (d.dealCoinType == coinName) {
                        var t = new mod.dealtemMod("", "", "", "", "", "", "", "", "", "");
                        t.setJson(d);
                        datas[datas.length] = t;
                    }
                }
            }
            return datas;
        };
        //获取所有交易列表
        walletServcie.getDealList = function () {
            var datas = [];
            var deals = util.getItem(config.prod.appDealKey);
            if (deals) {
                for (var j = 0; j < deals.length; j++) {
                    var d = deals[j];
                    var t = new mod.dealtemMod("", "", "", "", "", "", "", "", "", "");
                    t.setJson(d);
                    datas[datas.length] = t;
                }
            }
            return datas;
        };
        //管理钱包：获取所有钱包
        walletServcie.getWallets = function () {
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
            return null;
        };
        //管理钱包：根据钱包名称获取所有信息，备份之后，备份数据后部分数据会被置空
        walletServcie.getWallet = function (wName) {
            var walletJson = util.getItem(wName);
            if (walletJson == null) {
                console.log("不存在钱包：" + wName);
                return null;
            }
            var t = new mod.walletMod();
            t.setWallet(walletJson);
            return t;
        };
        //检查密码是否正确
        walletServcie.checkPassword = function (pass) {
            return true;
        };
        //创建，切换钱包需要实例化全局对象用于交易
        walletServcie.initLigthWallet = function (wKeyStore) {
            Laya.Browser.window.deserialize(wKeyStore);
        };
        //交易
        walletServcie.transfer = function (password, fromAddr, toAddr, value, gasPrice, gas, callback, args) {
            Laya.Browser.window.sendEther(password, fromAddr, toAddr, value, gasPrice, gas).then(function (ret) {
                callback(ret, args);
            }).catch(function (e) {
                callback(e, args);
            });
        };
        //获取余额
        walletServcie.getBalance = function (addr, callback, arg) {
            Laya.Browser.window.getBalance(addr, callback, arg);
        };
        //key{
        walletServcie.addDealItem = function (data) {
            var deals = util.getItem(config.prod.appDealKey);
            if (deals) {
                deals[deals.length] = data.toJson();
                util.setItemJson(config.prod.appDealKey, deals);
            }
            else { //新建
                util.setItemJson(config.prod.appDealKey, [data.toJson()]);
            }
        };
        //记录交易
        //导入钱包校验助记词
        walletServcie.vilMemoryWork = function (words) {
            if (words && Laya.Browser.window.lightwallet.keystore.isSeedValid(words)) {
                return true;
            }
            return false;
        };
        walletServcie.getSelected = function (wName, cName) {
            var wallet = util.getItem(wName);
            if (wallet) {
                for (var i = 0; i < wallet.wCoins.length; i++) {
                    if (wallet.wCoins[i] == cName) {
                        return true;
                    }
                }
            }
            return false;
        };
        return walletServcie;
    }());
    service.walletServcie = walletServcie;
})(service || (service = {}));
//# sourceMappingURL=walletService.js.map