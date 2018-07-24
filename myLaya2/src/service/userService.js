//用户操作相关
var service;
(function (service) {
    var userServcie = /** @class */ (function () {
        function userServcie() {
        }

        /**
         * 当前设计仅保留一个用户数据，退出即删除
         */
        userServcie.getUser = function () {
            var u = util.getItem(config.prod.appUserKey);
            if (u) {
                mod.userMod.setUserFromJson(u);
                return mod.userMod;
            }
            return null;
        };
        /**
         * 登录
         */
        userServcie.userLogin = function (uname, upass, fun, args) {
            var login = {
                url: config.prod.apiUserLogin,
                token: "",
                method: 'POST',
                data: {
                    phone: uname,
                    password: upass
                },
                async: true,
                callbackArgs: args,
                success: function (ret, args) {
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (a, args) {
                    fun(JSON.stringify(service.userServcie.error), args);
                    console.log("request error:", a, args);
                }
            };
            Laya.Browser.window.Ajax.post(login);
        };
        /**
         * 登出
         */
        userServcie.userLogout = function (fun, args) {
            var logout = {
                url: config.prod.apiLogout,
                token: mod.userMod.token,
                method: 'POST',
                data: {},
                async: true,
                callbackArgs: args,
                success: function (ret, args) {
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (a, args) {
                    fun(JSON.stringify(service.userServcie.error), args);
                    console.log("request error:", a, args);
                }
            };
            Laya.Browser.window.Ajax.post(logout);
        };
        /**
         * 注册
         */
        userServcie.userRegist = function (uname, upass, captcha, code, inviter, fun, args) {
            var regist = {
                url: config.prod.apiUserRegist,
                method: 'POST',
                data: {
                    "phone": uname,
                    "password": upass,
                    "captcha": captcha,
                    "code": code,
                },
                callbackArgs: args,
                async: true,
                success: function (ret, args) {
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (a, args) {
                    fun(JSON.stringify(service.userServcie.error), args);
                    console.log("request error:", a, args);
                }
            };
            Laya.Browser.window.Ajax.post(regist);
        };
        /**
         * 获取注册验证码
         */
        userServcie.getRegistCode = function (phone, fun, args) {
            var regist = {
                url: config.prod.apiSendCaptcha,
                method: 'POST',
                data: {
                    "phone": phone
                },
                async: true,
                success: function (ret, args) {
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (a, args) {
                    fun(JSON.stringify(service.userServcie.error), args);
                    console.log("request error:", a, args);
                }
            };
            Laya.Browser.window.Ajax.post(regist);
        };
        /**
         * 找回密码验证码
         */
        userServcie.getResetPassCode = function (phone, fun, args) {
            var reset = {
                url: config.prod.apiSendUpdatePwdCaptcha,
                method: 'POST',
                data: {
                    "phone": phone
                },
                async: true,
                success: function (ret, args) {
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (a, args) {
                    fun(JSON.stringify(service.userServcie.error), args);
                    console.log("request error:", a, args);
                }
            };
            Laya.Browser.window.Ajax.post(reset);
        };
        /**
         * 找回密码
         */
        userServcie.resetPass = function (phone, password, captcha, fun, args) {
            var reset = {
                url: config.prod.apiUserResetPwd,
                method: 'POST',
                data: {
                    "phone": phone,
                    "password": password,
                    "captcha": captcha,
                },
                callbackArgs: args,
                async: true,
                success: function (ret, args) {
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (a, args) {
                    fun(JSON.stringify(service.userServcie.error), args);
                    console.log("request error:", a, args);
                }
            };
            Laya.Browser.window.Ajax.post(reset);
        };
        /**
         * 设置领取奖励地址
         */
        userServcie.setMainAddr = function (addr, fun, args) {
            var setAddr = {
                url: config.prod.apiSetMainAddr,
                method: 'POST',
                token: mod.userMod.token,
                data: {
                    "addr": addr,
                },
                callbackArgs: args,
                async: true,
                success: function (ret, args) {
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (a, args) {
                    fun(JSON.stringify(service.userServcie.error), args);
                    console.log("request error:", a, args);
                }
            };
            Laya.Browser.window.Ajax.post(setAddr);
        };
        /**
         * 发送糖果短信
         */
        userServcie.sendCandySms = function (phoneNumber, fun, args) {
            var sendCandySms = {
                url: config.prod.apiCandyCode,
                method: 'POST',
                token: mod.userMod.token,
                data: {
                    "phoneNumber": phoneNumber,
                },
                callbackArgs: args,
                async: true,
                success: function (ret, args) {
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (a, args) {
                    fun(JSON.stringify(service.userServcie.error), args);
                    console.log("request error:", a, args);
                }
            };
            Laya.Browser.window.Ajax.post(sendCandySms);
        };
        /**
         * 获取糖果
         */
        userServcie.getCandy = function (phoneNumber, address, vcode, fun, args) {
            var getCandy = {
                url: config.prod.apiGetCandy,
                method: 'POST',
                token: mod.userMod.token,
                data: {
                    "phoneNumber": phoneNumber,
                    "address": address,
                },
                callbackArgs: args,
                async: true,
                success: function (ret, args) {
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (a, args) {
                    fun(JSON.stringify(service.userServcie.error), args);
                    console.log("request error:", a, args);
                }
            };
            Laya.Browser.window.Ajax.post(getCandy);
        };
        /**
         * token登录
         */
        userServcie.tokenLogin = function (fun, args) {
            var tokenLogin = {
                url: config.prod.apiGetUserInfo,
                method: 'POST',
                token: mod.userMod.token,
                data: {},
                callbackArgs: args,
                async: true,
                success: function (ret, args) {
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (ret, args) {
                    fun(ret, args);
                    console.log("request error:", ret, args);
                }
            };
            Laya.Browser.window.Ajax.post(tokenLogin);
        };
        userServcie.error = {
            "retCode": 2,
            "reason": "网错出现故障"
        };
        return userServcie;
    }());
    service.userServcie = userServcie;
})(service || (service = {}));
//# sourceMappingURL=userService.js.map