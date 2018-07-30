//使用默认的net模块或者 bin/3rd/Net2模块都可以
module config {
    export class init {
        constructor() {
        }

        //load data from public network
        public static initData(addr: string) {
            //初始化币种合约等
            service.transService.getAllCoins(function (ret, args) {
                ret = JSON.parse(ret)
                if (ret && ret.retCode == 0) {
                    let coins = ret.data;
                    let all = [];
                    for (let i = 0; i < coins.length; i++) {
                        all[all.length] = new mod.coinItemMod("img/coins/" + coins[i].name.toUpperCase() + ".png", coins[i].name, coins[i].vender, coins[i].addr, false, coins[i].abi ? JSON.parse(coins[i].abi) : "");
                    }
                    mod.userMod.allCoins = all;
                    console.log("getAllCoins success");
                } else {
                    // new view.alert.info(config.msg.INIT_ERROR).popup();
                    console.error("getAllCoins:", ret);
                    let coins = Laya.Browser.window.main_config[Laya.Browser.window.env].coins;
                    let all = [];
                    for (let i = 0; i < coins.length; i++) {
                        all[all.length] = new mod.coinItemMod("img/coins/" + coins[i].name.toUpperCase() + ".png", coins[i].name, coins[i].vender, coins[i].addr, false, coins[i].abi ? JSON.parse(coins[i].abi) : "");
                    }
                    mod.userMod.allCoins = all;
                    console.warn("getAllCoins from disk");
                }
            }, []);

            // 初始化用户账户 eth 数量
            let ethBalanceUrl = config.prod.getEthBalanceUrl(addr);
            let getEthBalance = {
                url: ethBalanceUrl,
                method: 'get',
                token: mod.userMod.token,
                data: {},
                async: true,
                success: function (ret, args) {
                    ret = JSON.parse(ret)
                    if (ret.status == 1) {
                        mod.userMod.ethBalance = ret.result;
                        console.log("getEthBalance ok:", ret);
                    } else {
                        console.log("getEthBalance error:", ret);
                    }
                },
                complete: function () {
                },
                error: function () {
                }
            }
            // Laya.Browser.window.Ajax.get(getEthBalance);

            //获取eth->usd
            let getEthTOUsd = {
                url: config.prod.ethToUsd,
                method: 'get',
                data: {},
                async: true,
                success: function (ret, args) {
                    ret = JSON.parse(ret)
                    mod.userMod.ethToUsd = ret.bid;
                    console.log("getEthTOUsd ok:", ret);
                },
                complete: function () {
                },
                error: function (ret) {
                    console.log("getEthTOUsd error:", ret);
                }
            }
            Laya.Browser.window.Ajax.get(getEthTOUsd);

            //获取gasprice
            let getGasPrice = {
                url: config.prod.getGasPrice,
                method: 'get',
                token: mod.userMod.token,
                data: {},
                async: true,
                success: function (ret, args) {
                    ret = JSON.parse(ret)
                    if (ret && ret.retCode == 0) {
                        mod.userMod.gasPrice = ret.gasPrice
                        console.log("get eth GasPrice ok:", ret);
                    } else {
                        console.log("getGasPrice error:", ret);
                    }
                },
                complete: function () {
                },
                error: function (a, b) {
                    console.log("gasprice error:", a, b);
                }
            }
            Laya.Browser.window.Ajax.get(getGasPrice);
        }

        private errFun(a, b) {
            console.log("require error:", a, b);
        }
    }
}