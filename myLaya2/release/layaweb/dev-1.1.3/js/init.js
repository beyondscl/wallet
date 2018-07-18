//使用默认的net模块或者 bin/3rd/Net2模块都可以
var config;
(function (config) {
    var init = /** @class */ (function () {
        function init() {
        }
        init.prototype.errFun = function (a, b) {
            console.log("require error:", a, b);
        };
        //load data from owner db
        //load data from public network
        init.initData = function (addr) {
            // 初始化用户账户 eth 数量,自己节点
            var ethBalanceUrl = config.prod.getEthBalanceUrl(addr);
            var getEthBalance = {
                url: ethBalanceUrl,
                method: 'get',
                data: {},
                async: true,
                success: function (ret, args) {
                    ret = JSON.parse(ret);
                    if (ret.status == 1) {
                        mod.userMod.ethBalance = ret.result;
                        console.log("getEthBalance ok:", ret);
                    }
                    else {
                        console.log("getEthBalance error:", ret);
                    }
                },
                complete: function () { },
                error: function () { }
            };
            // Laya.Browser.window.Ajax.get(getEthBalance);
            //获取eth-usd
            var getEthTOUsd = {
                url: config.prod.ethToUsd,
                method: 'get',
                data: {},
                async: true,
                success: function (ret, args) {
                    ret = JSON.parse(ret);
                    mod.userMod.ethToUsd = ret.bid;
                    console.log("getEthTOUsd ok:", ret);
                },
                complete: function () { },
                error: function () { }
            };
            Laya.Browser.window.Ajax.get(getEthTOUsd);
            //获取eth-usd,自己节点
            var getGasPrice = {
                url: config.prod.getGasPrice,
                method: 'get',
                data: {},
                async: true,
                success: function (ret, args) {
                    ret = JSON.parse(ret);
                    if (ret && ret.retCode == 0) {
                        mod.userMod.gasPrice = ret.gasPrice;
                        console.log("get eth GasPrice ok:", ret);
                    }
                    else {
                        console.log("getGasPrice error:", ret);
                    }
                },
                complete: function () { },
                error: function (a, b) {
                    console.log("require error:", a, b);
                }
            };
            Laya.Browser.window.Ajax.get(getGasPrice);
        };
        return init;
    }());
    config.init = init;
})(config || (config = {}));
//# sourceMappingURL=init.js.map