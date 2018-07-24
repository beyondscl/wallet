var config;
(function (config) {
    var prod = /** @class */ (function () {
        function prod() {
        }

        prod.getAppKey = function () {
            service.userServcie.getUser(); //init
            return prod.originAppKey + mod.userMod.userId;
        };
        prod.getAppDealKey = function () {
            service.userServcie.getUser(); //init
            return prod.appDealKey + mod.userMod.userId;
        };
        prod.getEthBalanceUrl = function (addr) {
            return this.ethBalance + "module=account&action=balance&address=" + addr + "&apikey=" + this.apiKey;
        };
        prod.appAdapterType = 'SCALE_EXACTFIT';
        prod.appWidth = 750;
        prod.appHeight = 1334;
        prod.scale = prod.appHeight / prod.appWidth; //当初设计的高与宽比
        prod.appAccept = "appAccept"; //用于存储标识用户是否已经同意协议
        prod.appGuide = "appGuide"; //用于存储标识用户是否已经经过引导页面
        prod.appUserKey = "appUser"; //存储用户
        prod.ethToUsd = "https://api.infura.io/v1/ticker/ethusd"; //获取eth与美元的汇率
        prod.ethBalance = "https://api.etherscan.io/api?"; //获取账户eth
        prod.apiKey = "42E8J65KFJMTEUA56SKX78MQDW4R7PPIUT";
        prod.apiLocalHost = Laya.Browser.window.main_config[Laya.Browser.window.env].apiLocalHost;
        prod.getGasPrice = prod.apiLocalHost + "/api/gasPrice"; //获取gas
        //用户模块相关
        prod.apiUserLogin = prod.apiLocalHost + "/user/login"; //登录
        prod.apiUserRegist = prod.apiLocalHost + "/user/register"; //注册
        prod.apiSendCaptcha = prod.apiLocalHost + "/user/sendCaptcha"; //用户注册获取验证码
        prod.apiUserUpdatePwd = prod.apiLocalHost + "/user/updatePwd"; //用户修改密码
        prod.apiSendUpdatePwdCaptcha = prod.apiLocalHost + "/user/sendUpdatePwdCaptcha"; //用户重置密码获取验证码
        prod.apiUserResetPwd = prod.apiLocalHost + "/user/resetPwd"; //用户找回密码
        prod.apiGetUserInfo = prod.apiLocalHost + "/user/getUserInfo"; //用户获取个人信息
        prod.apiLogout = prod.apiLocalHost + "/user/logout"; //退出登录
        prod.apiAddAddr = prod.apiLocalHost + "/user/addAddr"; //更新钱包与邀请码关系,不用
        prod.apiSetMainAddr = prod.apiLocalHost + "/user/setMainAddr"; //更新钱包与邀请码关系
        prod.apiCandyCode = prod.apiLocalHost + "/candy/sendSms"; //获取短信验证码
        prod.apiGetCandy = prod.apiLocalHost + "/candy/sendCandy"; //获取糖果
        prod.gasLimit = 21000;
        prod.tokenGasLimit = 80000;
        prod.WEI_TO_ETH = 1e18; //wei转换eth
        prod.expCoins = ["WWEC"]; //价格显示-,不计算总价
        prod.smsTimeInterval = 60; //短信时间间隔
        prod.downLoadUrl = Laya.Browser.window.main_config[Laya.Browser.window.env].downLoadUrl;
        prod.appDealKey = "wwwalletDeal"; //存储用户交易记录,[定时拉取接收的数据]
        //与用户绑定
        prod.originAppKey = "wwwallet"; //用于存储标识用户是否已经有钱包
        return prod;
    }());
    config.prod = prod;
})(config || (config = {}));
//# sourceMappingURL=prod.js.map