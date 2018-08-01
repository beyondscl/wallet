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
        public static FAIL = 'FAIL';
        public static PENDING = 'PENDING';
        public static ERROR = "ERROR";

        public static WAIT_CREATE_WALLET: string = "正在创建钱包...";
        public static WAIT_IMPORT_WALLET: string = "正在导入钱包...";
        public static WAIT_DELETE_WALLET: string = "正在删除钱包...";
        public static WAIT_LOGOUT: string = "正在退出...";
        public static WAIT_OPERATOR: string = "正在处理...";


        //用户模块
        public static PHONE_ERROR: string = "请输入正确的手机号";
        public static VCODE_ERROR: string = "请输入正确的验证码";
        public static PASS_ERROR: string = "请输入正确的密码";
        public static PASS_CONF_ERROR: string = "密码不一致，请重新输入";
        public static INVITATION_ERROR: string = "请输入正确的邀请码";
        public static NEW_PASS_ERROR: string = "请输入不少于8位字符的密码";//注册于重置

        public static SERVER_ERROR: string = "服务器开小差了，请重新登录";//注册于重置


        public static SELECT_ERROR: string = "请选择钱包";
        public static GET_CANDY: string = "领取中";

        public static SEND_CODE: string = "发送验证码";
        public static SENDED_CODE: string = "已发送";

        public static REVER_PASS_SUCCESS: string = "修改密码成功";
        public static REVER_PASS_ERROR: string = "修改密码失败";
        public static REVER_PASS_WARN: string = "助记词已被删除，请导入助记词修改密码";

        public static CANDY_NO: string = "暂时不能领取糖果";

        public static OPERATOR_ERROR: string = "请求失败";
        public static INIT_ERROR: string = "初始化数据失败";

        //tx
        public static TX_OK ="交易已发送请等待确认";
        public static TX_ERROR ="交易失败";
    }
}