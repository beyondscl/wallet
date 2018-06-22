var config;
(function (config) {
    var prod = /** @class */ (function () {
        function prod() {
        }
        prod.getEthBalanceUrl = function (addr) {
            return this.ethBalance + "module=account&action=balance&address=" + addr + "&apikey=" + this.apiKey;
        };
        prod.appKey = "wwwallet"; //用于存储标识用户是否已经有钱包
        prod.ethToUsd = "https://api.infura.io/v1/ticker/ethusd"; //获取eth与美元的汇率
        prod.ethBalance = "https://api.etherscan.io/api?"; //获取账户eth
        prod.apiKey = "42E8J65KFJMTEUA56SKX78MQDW4R7PPIUT";
        return prod;
    }());
    config.prod = prod;
})(config || (config = {}));
//# sourceMappingURL=prod.js.map