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
        msg.SUCCESS = 'SUCCESS';
        msg.ERROR = "ERROR";
        msg.WAIT_CREATE_WALLET = "正在创建钱包...";
        msg.WAIT_IMPORT_WALLET = "正在导入钱包...";
        msg.WAIT_DELETE_WALLET = "正在删除钱包...";
        //用户模块
        msg.PHONE_ERROR = "请输入正确的手机号";
        msg.VCODE_ERROR = "请输入6位数字验证码";
        msg.PASS_ERROR = "密码长度8-32";
        msg.PASS_CONF_ERROR = "2次输入的密码不一致";
        msg.INVITATION_ERROR = "请输入5位邀请码";
        return msg;
    }());
    config.msg = msg;
})(config || (config = {}));
//# sourceMappingURL=msg.js.map