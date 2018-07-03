//所有数据操作逻辑都放在这里统一管理
var service;
(function (service) {
    var walletServcie = /** @class */ (function () {
        function walletServcie() {
        }
        //修改钱包名称
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
        };
        //检查是否存在该钱包
        walletServcie.checkDupWal = function (wName) {
            var walletJson = util.getItem(wName);
            return null == walletJson ? false : true;
        };
        //创建钱包
        walletServcie.creatWallet = function (wName, wPass, cb, comp) {
            var walletJson = util.getItem(wName);
            if (walletJson) { //已经验证过一次了
                return;
            }
            var mnemonicWord = Laya.Browser.window.genSeed();
            return Laya.Browser.window.generateAddresses(mnemonicWord, 1, wPass).then(function (ret) {
                return cb(wName, wPass, mnemonicWord, ret, comp);
            });
        };
        //获取所有币种：用于钱包添加币种
        walletServcie.getAllCoins = function () {
            return [new mod.coinItemMod("template/List/message icon_57x57.png", "ETH", "vender", "95x...5s1s4", false),
                new mod.coinItemMod("template/List/message icon_57x57.png", "BTC", "vender", "95x...5s1s4", false)];
        };
        //获取所有币种：用于钱包添加币种,传入钱包名称，用于初始化
        walletServcie.getAllCoinsByWal = function (wName) {
            return [new mod.coinItemMod("template/List/message icon_57x57.png", "ETH", "vender", "95x...5s1s4", this.getSelected(wName, 'ETH')),
                new mod.coinItemMod("template/List/message icon_57x57.png", "BTC", "vender", "95x...5s1s4", this.getSelected(wName, 'BTC'))];
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
        //获取币种交易列表
        walletServcie.getDealListByWName = function (wName) {
            //测试数据
            var datas = [];
            for (var i = 0; i < 3; i++) {
                var t_1 = new mod.dealtemMod('send', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', i + 1, 'ETH', null, null, null, null, null);
                datas[datas.length] = t_1;
            }
            var t = new mod.dealtemMod('RECEIVE', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', 9, 'ETH', null, null, null, null, null);
            datas[datas.length] = t;
            return datas;
        };
        //获取所有交易列表
        walletServcie.getDealList = function () {
            //测试数据
            var datas = [];
            for (var i = 0; i < 3; i++) {
                var t_2 = new mod.dealtemMod('send', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', i + 1, 'ETH', null, null, null, null, null);
                datas[datas.length] = t_2;
            }
            var t = new mod.dealtemMod('RECEIVE', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', '0x911E1C126c3FddC74fd83A90283F1d50732b2a72', 9, 'ETH', null, null, null, null, null);
            datas[datas.length] = t;
            return datas;
        };
        //管理钱包：获取所有钱包
        walletServcie.getWallets = function () {
            var walletNames = util.getItem(config.prod.appKey);
            if (walletNames) {
                var data = [];
                for (var i = 0; i < walletNames.length; i++) {
                    var walletJson = util.getItem(walletNames[i]);
                    data[data.length] = new mod.walletMod(walletJson.wName, null, null, null, walletJson.wAddr, walletJson.wCoins, null);
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
            return new mod.walletMod(walletJson.wName, walletJson.wPassword, walletJson.wPrivateKey, walletJson.wKeyStore, walletJson.wAddr, walletJson.wCoins, null);
        };
        //检查密码是否正确
        walletServcie.checkPassword = function (pass) {
            return true;
        };
        //创建，切换钱包需要实例化全局对象用于交易
        walletServcie.initLigthWallet = function (wName) {
            var wallet = this.getWallet(wName);
            Laya.Browser.window.deserialize(wallet.wKeyStore);
        };
        //交易
        walletServcie.transfer = function (password, fromAddr, toAddr, value, gasPrice, gas) {
            Laya.Browser.window.sendEther(password, fromAddr, toAddr, value, gasPrice, gas);
        };
        return walletServcie;
    }());
    service.walletServcie = walletServcie;
})(service || (service = {}));
//# sourceMappingURL=walletService.js.map