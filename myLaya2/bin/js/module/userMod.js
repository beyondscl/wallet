//用户数据模型，运行时数据
var mod;
(function (mod) {
    var userMod = /** @class */ (function () {
        function userMod() {
        }
        //登录成功返回数据
        userMod.setUser = function (uName, uPass, token, userId, code, inviter) {
            this.userName = uName;
            this.token = token;
            this.userId = userId;
            this.code = code;
            this.inviter = inviter;
        };
        //登录成功返回数据
        userMod.setUserJson = function (json) {
            if (json.token) { //toekn登录不会返回token
                this.token = json.token;
            }
            this.userName = json.cellphone;
            this.userId = json.id;
            this.code = json.code;
            this.inviter = json.inviter;
            this.invitedNum = json.invitedNum;
            this.addr = json.addr;
        };
        //操作本地数据
        userMod.setUserFromJson = function (userJson) {
            this.userId = userJson.userId,
                this.userName = userJson.userName;
            this.token = userJson.token;
        };
        //操作本地数据
        userMod.userToJson = function () {
            var j = {
                userId: this.userId,
                userName: this.userName,
                token: this.token,
            };
            return j;
        };
        //动态更新的数据
        userMod.ethToUsd = 516;
        userMod.ethBalance = 0.00;
        userMod.ethAddress = "0x911E1C126c3FddC74fd83A90283F1d50732b2a72";
        userMod.defWalletName = "钱包";
        userMod.usdToRmb = 6.5;
        userMod.gasPrice = 0;
        return userMod;
    }());
    mod.userMod = userMod;
})(mod || (mod = {}));
//# sourceMappingURL=userMod.js.map