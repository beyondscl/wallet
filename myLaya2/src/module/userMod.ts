//用户数据模型，运行时数据
module mod {
    export class userMod {
        //初始化动态更新的数据
        public static ethToUsd: number = 516;
        public static ethBalance: number = 0.00;
        public static ethAddress: string = "0x911E1C126c3FddC74fd83A90283F1d50732b2a72";
        public static defWalletName: string = "钱包";
        public static defWallet: mod.walletMod;
        public static usdToRmb = 6.5;
        public static gasPrice = 0;
        public static allCoins:Array<mod.coinItemMod> = [] ;

        //需要存储的字段
        public static userName;//一般为手机号
        public static userPass;//密码
        public static token;//请求的token
        public static userId;//编码
        public static code;//邀请码
        public static inviter;//谁邀请他的人的id
        public static addr;//领取奖励的地址
        public static invitedNum;//我已邀请人的数量

        constructor() {

        }

        //登录成功返回数据
        public static setUser(uName, uPass, token, userId, code, inviter) {
            this.userName = uName;
            this.token = token;
            this.userId = userId;
            this.code = code;
            this.inviter = inviter;
        }

        //登录成功返回数据
        public static setUserJson(json: any) {
            if (json.token) {//toekn登录不会返回token
                this.token = json.token;
            }
            this.userName = json.cellphone;
            this.userId = json.id;
            this.code = json.code;
            this.inviter = json.inviter;
            this.invitedNum = json.invitedNum;
            this.addr = json.addr;
        }

        //操作本地数据
        public static setUserFromJson(userJson: any) {
            this.userId = userJson.userId,
                this.userName = userJson.userName;
            this.token = userJson.token;
        }

        //操作本地数据
        public static userToJson(): any {
            let j = {
                userId: this.userId,
                userName: this.userName,
                token: this.token,
            }
            return j;
        }
    }
}