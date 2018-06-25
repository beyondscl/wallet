//文字信息
var config;
(function (config) {
    var msg = /** @class */ (function () {
        function msg() {
        }

        msg.submit = "提交";
        msg.queding = "确定";
        msg.cancel = "取消";
        msg.next_step = "下一步";
        msg.wallet_create = "请仔细阅读隐私及服务条款";
        msg.pass_inconsistent = "2次输入的密码不一致";
        msg.deal_transfer_out = "SEND";
        msg.deal_transfer_in = "RECEIVE";
        msg.deal_cn_out = "已发送";
        msg.deal_cn_outing = "发送中";
        msg.deal_cn_in = "已接收";
        return msg;
    }());
    config.msg = msg;
})(config || (config = {}));
//# sourceMappingURL=msg.js.map