//用户数据模型，运行时数据
module mod {
    export class userMod {
        //动态更新的数据
        public static ethToUsd: number = 516;
        public static ethBalance: number = 0.00;
        public static ethAddress: string = "0x911E1C126c3FddC74fd83A90283F1d50732b2a72";
        public static defWalletName: string = "钱包";
        public static defWallet: mod.walletMod;
        public static usdToRmb = 6.5;
        public static gasPrice = 0;

        //需要存储的字段
        public static userName;
        public static userPass;
        public static token;
        public static userId;
        public static code;//邀请码
        public static inviter;//邀请人数

        constructor() {

        }

        //登录成功返回数据
        public static setUser(uName, uPass, token, userId, code, inviter) {
            this.userName = uName;
            this.userPass = uPass;
            this.token = token;
            this.userId = userId;
            this.code = code;
            this.inviter = inviter;
        }

        //登录成功返回数据
        public static setUserJson(json: any) {
            this.token = json.token;
            this.userId = json.id;
            this.code = json.code;
            this.inviter = json.inviter;
        }

        //操作本地数据
        public static setUserFromJson(userJson: any) {
            this.userName = userJson.userName;
            this.userPass = userJson.userPass;
        }

        //操作本地数据
        public static userToJson(): any {
            let j = {
                userName: this.userName,
                userPass: this.userPass,
            }
            return j;
        }
    }
}