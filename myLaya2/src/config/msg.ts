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

        public static WAIT_CREATE_WALLET: string = "正在创建钱包,请稍后...";
        public static WAIT_IMPORT_WALLET: string = "正在导入钱包,请稍后...";
        public static WAIT_DELETE_WALLET: string = "正在删除钱包,请稍后...";
    }
}