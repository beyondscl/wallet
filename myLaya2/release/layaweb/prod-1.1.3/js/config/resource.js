//资源加载
var config;
(function (config) {
    var resource = /** @class */ (function () {
        function resource() {
        }
        resource.abc = "BackProgressBar";
        resource.dealFromSrc = "img/main/transfer_in.png"; //交易接收图片
        resource.dealToSrc = "img/main/transfer_out.png"; //交易发送图片
        resource.sperated = "img/main/itemSepar.png"; //列表分割线
        resource.walletImg = "img/main/wd@2x.png"; //钱包默认
        resource.passLevelS = "img/main/fangkuai-@2x.png"; //密码等级默认图片地址,强，蓝色
        resource.passLevelW = "img/main/fangkuai@2x.png"; //弱,灰色
        resource.passLeveSW = "img/main/red.png"; //很弱，红色
        resource.btn_colse = "img/main/transfer_in.png"; //网页关闭
        //view name
        resource.WALLET_TRANSFER = 'WALLET_TRANSFER';
        resource.WALLET_MAIN = 'WALLET_MAIN';
        resource.devLogPath = "res/json/dev_log.text";
        return resource;
    }());
    config.resource = resource;
})(config || (config = {}));
//# sourceMappingURL=resource.js.map