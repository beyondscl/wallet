//用户数据模型，运行时数据
var mod;
(function (mod) {
    var userMod = /** @class */ (function () {
        function userMod() {
        }
        //登录成功返回数据
        userMod.setUser = function (uName, uPass, token, userId, code, inviter) {
            this.userName = uName;
            this.userPass = uPass;
            this.token = token;
            this.userId = userId;
            this.code = code;
            this.inviter = inviter;
        };
        //登录成功返回数据
        userMod.setUserJson = function (json) {
            this.token = json.token;
            this.userId = json.id;
            this.code = json.code;
            this.inviter = json.inviter;
        };
        //操作本地数据
        userMod.setUserFromJson = function (userJson) {
            this.userName = userJson.userName;
            this.userPass = userJson.userPass;
        };
        //操作本地数据
        userMod.userToJson = function () {
            var j = {
                userName: this.userName,
                userPass: this.userPass,
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