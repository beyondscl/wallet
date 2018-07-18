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
                console.log("creatWallet error:", error);
            }
        };
        //删除钱包
        walletServcie.deleteWallet = function (wName, v) {
            //删除list name
            //删除wallet
            //删除后可能没有钱包了,跳转到创建界面
            try {
                console.log("deleteWallet :", wName);
                var wals = util.getItem(config.prod.appKey);
                var walsNew = [];
                for (var i = 0; i < wals.length; i++) {
                    if (wals[i] != wName) {
                        walsNew.push(wals[i]);
                    }
                }
                util.setItemJson(config.prod.appKey, walsNew);
                util.delItem(wName);
                //删除当前页面
                v.comp.removeSelf();
                if (walsNew.length == 0) {
                    util.deleteView();
                    new EnterApp();
                }
                else {
                    //后台更新主页数据
                    var walletMod = this.getWallet(walsNew[0]);
                    util.getMainView().initQueryData(walletMod);
                    //显示钱包管理页面
                    util.showView([3]);
                    new view.alert.Warn("删除钱包成功", "").popup();
                }
            }
            catch (error) {
                new view.alert.Warn("删除钱包失败", "").popup();
                console.log("deleteWallet", error);
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
                console.log("importWallet error:", error);
            }
        };
        //获取所有币种：用于钱包添加币种
        walletServcie.getAllCoins = function () {
            //初始化数据，可以改为json配置文件
            var coins = [
                {
                    "name": "ETH",
                    "vender": "Ethereum Foundation",
                    "addr": "0x000000000000000000000000000000000000000000",
                    "abi": "",
                },
                {
                    "name": "WWEC",
                    "vender": "WWEC Foundation",
                    "addr": Laya.Browser.window.main_config[Laya.Browser.window.env].WWEC_ADDR,
                    "abi": [{
                            constant: true,
                            inputs: [],
                            name: "name",
                            outputs: [{ name: "", type: "string" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function"
                        }, {
                            constant: false,
                            inputs: [{ name: "_spender", type: "address" }, { name: "_value", type: "uint256" }],
                            name: "approve",
                            outputs: [{ name: "success", type: "bool" }],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function"
                        }, {
                            constant: false,
                            inputs: [{ name: "_disable", type: "bool" }],
                            name: "disableTransfers",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function"
                        }, {
                            constant: true,
                            inputs: [],
                            name: "totalSupply",
                            outputs: [{ name: "", type: "uint256" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function"
                        }, {
                            constant: false,
                            inputs: [{ name: "_from", type: "address" }, { name: "_to", type: "address" }, {
                                    name: "_value",
                                    type: "uint256"
                                }],
                            name: "transferFrom",
                            outputs: [{ name: "success", type: "bool" }],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function"
                        }, {
                            constant: true,
                            inputs: [],
                            name: "decimals",
                            outputs: [{ name: "", type: "uint8" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function"
                        }, {
                            constant: true,
                            inputs: [],
                            name: "MAX_SUPPLY",
                            outputs: [{ name: "", type: "uint256" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function"
                        }, {
                            constant: true,
                            inputs: [],
                            name: "version",
                            outputs: [{ name: "", type: "string" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function"
                        }, {
                            constant: true,
                            inputs: [],
                            name: "standard",
                            outputs: [{ name: "", type: "string" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function"
                        }, {
                            constant: false,
                            inputs: [{ name: "_token", type: "address" }, { name: "_to", type: "address" }, {
                                    name: "_amount",
                                    type: "uint256"
                                }],
                            name: "withdrawTokens",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function"
                        }, {
                            constant: true,
                            inputs: [{ name: "", type: "address" }],
                            name: "balanceOf",
                            outputs: [{ name: "", type: "uint256" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function"
                        }, {
                            constant: false,
                            inputs: [],
                            name: "acceptOwnership",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function"
                        }, {
                            constant: false,
                            inputs: [{ name: "_to", type: "address" }, { name: "_amount", type: "uint256" }],
                            name: "issue",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function"
                        }, {
                            constant: true,
                            inputs: [],
                            name: "owner",
                            outputs: [{ name: "", type: "address" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function"
                        }, {
                            constant: true,
                            inputs: [],
                            name: "symbol",
                            outputs: [{ name: "", type: "string" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function"
                        }, {
                            constant: false,
                            inputs: [{ name: "_from", type: "address" }, { name: "_amount", type: "uint256" }],
                            name: "destroy",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function"
                        }, {
                            constant: false,
                            inputs: [{ name: "_to", type: "address" }, { name: "_value", type: "uint256" }],
                            name: "transfer",
                            outputs: [{ name: "success", type: "bool" }],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function"
                        }, {
                            constant: true,
                            inputs: [],
                            name: "transfersEnabled",
                            outputs: [{ name: "", type: "bool" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function"
                        }, {
                            constant: false,
                            inputs: [{ name: "_address", type: "address" }, { name: "_freezeOrNot", type: "bool" }],
                            name: "freeze",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function"
                        }, {
                            constant: true,
                            inputs: [],
                            name: "newOwner",
                            outputs: [{ name: "", type: "address" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function"
                        }, {
                            constant: true,
                            inputs: [{ name: "", type: "address" }, { name: "", type: "address" }],
                            name: "allowance",
                            outputs: [{ name: "", type: "uint256" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function"
                        }, {
                            constant: false,
                            inputs: [{ name: "_newOwner", type: "address" }],
                            name: "transferOwnership",
                            outputs: [],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "function"
                        }, {
                            inputs: [{ name: "_name", type: "string" }, { name: "_symbol", type: "string" }],
                            payable: false,
                            stateMutability: "nonpayable",
                            type: "constructor"
                        }, {
                            anonymous: false,
                            inputs: [{ indexed: false, name: "_token", type: "address" }],
                            name: "NewSmartToken",
                            type: "event"
                        }, {
                            anonymous: false,
                            inputs: [{ indexed: false, name: "_amount", type: "uint256" }],
                            name: "Issuance",
                            type: "event"
                        }, {
                            anonymous: false,
                            inputs: [{ indexed: false, name: "_amount", type: "uint256" }],
                            name: "Destruction",
                            type: "event"
                        }, {
                            anonymous: false,
                            inputs: [{ indexed: true, name: "_from", type: "address" }, {
                                    indexed: true,
                                    name: "_to",
                                    type: "address"
                                }, { indexed: false, name: "_value", type: "uint256" }],
                            name: "Transfer",
                            type: "event"
                        }, {
                            anonymous: false,
                            inputs: [{ indexed: true, name: "_owner", type: "address" }, {
                                    indexed: true,
                                    name: "_spender",
                                    type: "address"
                                }, { indexed: false, name: "_value", type: "uint256" }],
                            name: "Approval",
                            type: "event"
                        }, {
                            anonymous: false,
                            inputs: [{ indexed: true, name: "_prevOwner", type: "address" }, {
                                    indexed: true,
                                    name: "_newOwner",
                                    type: "address"
                                }],
                            name: "OwnerUpdate",
                            type: "event"
                        }],
                },
            ];
            var ret = [];
            for (var i = 0; i < coins.length; i++) {
                ret[ret.length] = new mod.coinItemMod("img/coins/" + coins[i].name.toUpperCase() + ".png", coins[i].name, coins[i].vender, coins[i].addr, false, coins[i].abi);
            }
            return ret;
        };
        walletServcie.getCoinInfo = function (coinName) {
            var allCoins = service.walletServcie.getAllCoins();
            for (var j = 0; j < allCoins.length; j++) {
                if (allCoins[j].coinName == coinName) {
                    return allCoins[j];
                }
            }
            return null;
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
        //交易eth
        walletServcie.transfer = function (password, fromAddr, toAddr, value, gasPrice, gas, callback, args) {
            Laya.Browser.window.sendEther(password, fromAddr, toAddr, value, gasPrice, gas).then(function (ret) {
                callback(ret, args);
            }, function (error) {
                console.log("交易失败:", error);
                callback(null, args);
            }).catch(function (e) {
                callback(e, args);
            });
        };
        //发送token
        walletServcie.sendToken = function (pass, fromAddr, contractAddr, abi, functionName, args, valueEth, gasPrice, gas, callback, cbArgs) {
            //测试成功返回
            // let ret = {
            //     retCode : 0,
            //     txhash : 'ox54a5sd1f5as1dfa5sd'
            // }
            // callback(ret,cbArgs);
            if (!functionName)
                functionName = 'transfer';
            Laya.Browser.window.functionCall(pass, fromAddr, contractAddr, abi, functionName, args, valueEth, gasPrice, gas)
                .then(function (ret) {
                callback(ret, cbArgs);
            }).catch(function (e) {
                callback(e, cbArgs);
            });
        };
        //获取余额
        walletServcie.getBalance = function (addr, callback, arg) {
            Laya.Browser.window.getBalance(addr).then(function (ret) {
                callback(ret, arg);
            });
        };
        //获取token余额
        walletServcie.getTokenBalance = function (fromAddr, contractAddr, abi, callback, args) {
            var ret = Laya.Browser.window.balanceOf(fromAddr, abi, contractAddr).then(function (ret) {
                callback(ret, args);
            });
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
        //iban 地址转国际地址
        walletServcie.getIban = function (addr) {
            return Laya.Browser.window.web3.eth.iban.toAddress(addr);
        };
        //web3 等外部操作--------------------------------
        walletServcie.ibanToAddr = function (data) {
            var addr = '';
            var amount = '';
            var token = 'ETH';
        };
        //过滤的连总数都不需要查
        walletServcie.getWalletMoney = function (wName, lab) {
            var wallet = this.getWallet(wName);
            var coins = wallet.wCoins;
            if (!coins || coins.length == 0) {
                return 0;
            }
            var t = 0;
            for (var i = 0; i < coins.length; i++) {
                if (util.isContain(config.prod.expCoins, coins[i])) {
                    continue;
                }
                this.getBalance(wallet.wAddr, function (ret, args) {
                    var lab = args[0];
                    var c = args[1];
                    if (ret.retCode == 0) {
                        lab.text = util.coinToRmb(ret.ret.toNumber(), c) + '';
                        console.log(c, lab.text);
                    }
                }, [lab, coins[i]]);
            }
            return t;
        };
        //-----------------------------------------------
        //查询钱包总金额，是否缓存处理?
        //判断钱包是否选择了该coin
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