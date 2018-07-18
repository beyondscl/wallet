//文字信息
module config {
    export class msg {
        public static submit: string = "提交";
        public static queding: string = "确定";
        public static cancel: string = "取消";
        public static next_step: string = "下一步";

        public static wallet_create = "请仔细阅读隐私及服务条款";
        public static pass_inconsistent = "2次输入的密码不一致";

        public static deal_transfer_out = "SEND";
        public static deal_transfer_in = "RECEIVE";
        public static deal_cn_out = "已发送";
        public static deal_cn_outing = "发送中";
        public static deal_cn_in = "已接收";

        public static SUCCESS = 'SUCCESS';
        public static ERROR = "ERROR";

        public static WAIT_CREATE_WALLET: string = "正在创建钱包...";
        public static WAIT_IMPORT_WALLET: string = "正在导入钱包...";
        public static WAIT_DELETE_WALLET: string = "正在删除钱包...";

        //用户模块
        public static PHONE_ERROR: string = "请输入正确的手机号";
        public static VCODE_ERROR: string = "请输入6位数字验证码";
        public static PASS_ERROR: string = "密码长度8-32";
        public static PASS_CONF_ERROR: string = "2次输入的密码不一致";
        public static INVITATION_ERROR: string = "请输入5位邀请码";

        public static SELECT_ERROR: string = "请选择钱包";
        public static GET_CANDY: string = "领取中";
        

    }
}