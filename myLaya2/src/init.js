var config;
(function (config) {
    var init = /** @class */ (function () {
        function init() {
        }

        //load data from owner db
        //load data from public network
        init.prototype.initData = function (addr) {
            new net.HttpRequest().sendReq("https://www.baidu.com", null, "get", "text", null, function (data) {
                console.log("ping baidu success");
            });
            var ethBalanceUrl = config.prod.getEthBalanceUrl(addr);
            new net.HttpRequest().sendReq(ethBalanceUrl, null, "get", "json", null, function (data) {
                if (data.status == 1) {
                    mod.userMod.ethBalance = data.result;
                }
            });
            new net.HttpRequest().sendReq(config.prod.ethToUsd, null, "get", "json", null, function (data) {
                mod.userMod.ethToUsd = data.bid;
            });
            new net.HttpRequest().sendSimpleReq(config.prod.getGasPrice, function (ret) {
                if (ret && ret.retCode == 0) {
                    mod.userMod.ethToUsd = ret.gasPrice;
                    console.log("gasPrice baidu success");
                }
            }, null);
        };
        return init;
    }());
    config.init = init;
})(config || (config = {}));
//# sourceMappingURL=init.js.map