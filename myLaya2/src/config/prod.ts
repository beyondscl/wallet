module config {
    export class prod {
        public static appAdapterType = 'SCALE_EXACTFIT';
        public static appWidth = 750;
        public static appHeight = 1334;
        public static scale = prod.appHeight / prod.appWidth;//当初设计的高与宽比
        public static appAccept: string = "appAccept";//用于存储标识用户是否已经同意协议
        public static appGuide: string = "appGuide";//用于存储标识用户是否已经经过引导页面
        public static appUserKey: string = "appUser";//存储用户
        public static ethToUsd: string = "https://api.infura.io/v1/ticker/ethusd"; //获取eth与美元的汇率
        public static ethBalance: string = "https://api.etherscan.io/api?"; //获取账户eth
        public static apiKey: string = "42E8J65KFJMTEUA56SKX78MQDW4R7PPIUT";
        public static apiLocalHost = Laya.Browser.window.main_config[Laya.Browser.window.env].apiLocalHost;
        public static getGasPrice: string = prod.apiLocalHost + "/api/gasPrice";//获取gas

        public static apiToAddress: string = prod.apiLocalHost + "/api/toAddress";//toAddress
        public static apiToIban: string = prod.apiLocalHost + "/api/toIban";//toIban
        public static apiGetReceipt: string = prod.apiLocalHost + "/api/getReceipt";//交易明细
        public static apiGetTransactionsList: string = prod.apiLocalHost + "/api/getTransactionsList";//分页历史记录
        public static apiGetContractList: string = prod.apiLocalHost + "/api/getContractList";//获取所有币种
        

        //用户模块相关
        public static apiUserLogin: string = prod.apiLocalHost + "/user/login";//登录
        public static apiUserRegist: string = prod.apiLocalHost + "/user/register";//注册
        public static apiSendCaptcha: string = prod.apiLocalHost + "/user/sendCaptcha";//用户注册获取验证码
        public static apiUserUpdatePwd: string = prod.apiLocalHost + "/user/updatePwd";//用户修改密码
        public static apiSendUpdatePwdCaptcha: string = prod.apiLocalHost + "/user/sendUpdatePwdCaptcha";//用户重置密码获取验证码
        public static apiUserResetPwd: string = prod.apiLocalHost + "/user/resetPwd";//用户找回密码
        public static apiGetUserInfo: string = prod.apiLocalHost + "/user/getUserInfo";//用户获取个人信息
        public static apiLogout: string = prod.apiLocalHost + "/user/logout";//退出登录
        public static apiAddAddr: string = prod.apiLocalHost + "/user/addAddr";//更新钱包与邀请码关系,不用
        public static apiSetMainAddr: string = prod.apiLocalHost + "/user/setMainAddr";//更新钱包与邀请码关系
        public static apiCandyCode: string = prod.apiLocalHost + "/candy/sendSms";//获取短信验证码
        public static apiGetCandy: string = prod.apiLocalHost + "/candy/sendCandy";//获取糖果

        public static gasLimit: number = 21000;
        public static tokenGasLimit: number = 80000;
        public static WEI_TO_ETH: number = 1e18;//wei转换eth
        public static expCoins: Array<string> = ["WWEC"];//价格显示-,不计算总价
        public static smsTimeInterval = 60;//短信时间间隔
        public static downLoadUrl = Laya.Browser.window.main_config[Laya.Browser.window.env].downLoadUrl;
        public static salt = "543d1509a659b17f3352041760d59052";//MD5盐
        private static appDealKey: string = "wwwalletDeal";//存储用户交易记录,[定时拉取接收的数据]
        //与用户绑定
        private static originAppKey: string = "wwwallet";//用于存储标识用户是否已经有钱包

        // 公告相关接口
        public static apiNoticeList: string = prod.apiLocalHost + "/notice" // 获取公告列表
        public static apiNoticeDetails: string = prod.apiLocalHost + "/notice" // 获取公告详情内容 接口地址没有 随写的

        constructor() {
        }

        public static getAppKey() {
            service.userServcie.getUser();//init
            return prod.originAppKey + mod.userMod.userId;
        }

        public static getAppDealKey(): string {
            service.userServcie.getUser();//init
            return prod.appDealKey + mod.userMod.userId;
        }

        public static getEthBalanceUrl(addr: string): string {
            return this.ethBalance + "module=account&action=balance&address=" + addr + "&apikey=" + this.apiKey;
        }

    }
}