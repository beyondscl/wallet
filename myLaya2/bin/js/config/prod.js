var config;
(function (config) {
    var prod = /** @class */ (function () {
        function prod() {
        }
        prod.getEthBalanceUrl = function (addr) {
            return this.ethBalance + "module=account&action=balance&address=" + addr + "&apikey=" + this.apiKey;
        };
        prod.appKey = "wwwallet"; //用于存储标识用户是否已经有钱包
        prod.appAccept = "appAccept"; //用于存储标识用户是否已经有钱包
        prod.appDealKey = "wwwalletDeal"; //
        prod.ethToUsd = "https://api.infura.io/v1/ticker/ethusd"; //获取eth与美元的汇率
        prod.ethBalance = "https://api.etherscan.io/api?"; //获取账户eth
        prod.apiKey = "42E8J65KFJMTEUA56SKX78MQDW4R7PPIUT";
        prod.appAdapterType = 'SCALE_EXACTFIT';
        // public static apiLocalHost = "http://192.168.2.106:3005";//dev
        prod.apiLocalHost = "https://wallet.wwec.top"; //prod
        prod.getGasPrice = prod.apiLocalHost + "/api/gasPrice"; //
        prod.gasLimit = 21000;
        prod.tokenGasLimit = 80000;
        prod.getCode = prod.apiLocalHost + "/candy/sendSms"; //获取短信验证码
        prod.getCandy = prod.apiLocalHost + "/candy/sendCandy"; //获取糖果
        prod.appWidth = 750;
        prod.appHeight = 1334;
        prod.scale = prod.appHeight / prod.appWidth; //当初设计的高与宽比
        prod.WEI_TO_ETH = 1e18;
        prod.expCoins = ["WWEC"]; //价格显示-,不计算总价
        return prod;
    }());
    config.prod = prod;
})(config || (config = {}));
//# sourceMappingURL=prod.js.map