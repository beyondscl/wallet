//资源加载
var config;
(function (config) {
    var resource = /** @class */ (function () {
        function resource() {
        }

        resource.abc = "BackProgressBar";
        resource.dealFromSrc = "img/transfer_in.png"; //交易接收图片
        resource.dealToSrc = "img/transfer_out.png"; //交易发送图片
        resource.sperated = "img/itemSepar.png"; //列表分割线
        resource.walletImg = "template/List/message icon_57x57.png"; //钱包默认
        return resource;
    }());
    config.resource = resource;
})(config || (config = {}));
//# sourceMappingURL=resource.js.map