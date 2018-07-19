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
        msg.VCODE_ERROR = "请输入正确的验证码";
        msg.PASS_ERROR = "请输入正确的密码";
        msg.PASS_CONF_ERROR = "密码不一致，请重新输入";
        msg.INVITATION_ERROR = "请输入正确的邀请码";
        msg.NEW_PASS_ERROR = "请输入不少于8位字符的密码"; //注册于重置
        msg.SERVER_ERROR = "服务器开小差了，请重新登录"; //注册于重置
        msg.SELECT_ERROR = "请选择钱包";
        msg.GET_CANDY = "领取中";
        msg.SEND_CODE = "发送验证码";
        msg.SENDED_CODE = "已发送";
        return msg;
    }());
    config.msg = msg;
})(config || (config = {}));
//# sourceMappingURL=msg.js.map