//用户操作相关
module service {
    export class userServcie {
        private static error = {
            "retCode": 2,
            "reason": "网错出现故障"
        }

        constructor() {

        }

        /**
         * 当前设计仅保留一个用户数据，退出即删除
         */
        public static getUser(): mod.userMod {
            let u = util.getItem(config.prod.appUserKey)
            if (u) {
                mod.userMod.setUserFromJson(u);
                return mod.userMod;
            }
            return null;
        }

        /**
         * 登录
         */
        public static userLogin(uname, upass, fun, args): any {
            let login = {
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
            }
            Laya.Browser.window.Ajax.post(login);
        }

        /**
         * 登出
         */
        public static userLogout(fun, args): any {
            let logout = {
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
            }
            Laya.Browser.window.Ajax.post(logout);
        }

        /**
         * 注册
         */
        public static userRegist(uname, upass, captcha, code, inviter, fun, args): any {
            let regist = {
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
            }
            Laya.Browser.window.Ajax.post(regist);
        }

        /**
         * 获取注册验证码
         */
        public static getRegistCode(phone, fun, args): any {
            let regist = {
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
            }
            Laya.Browser.window.Ajax.post(regist);
        }

        /**
         * 找回密码验证码
         */
        public static getResetPassCode(phone, fun, args): any {
            let reset = {
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
            }
            Laya.Browser.window.Ajax.post(reset);
        }

        /**
         * 找回密码
         */
        public static resetPass(phone, password, captcha, fun, args): any {
            let reset = {
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
            }
            Laya.Browser.window.Ajax.post(reset);
        }

        /**
         * 设置领取奖励地址
         */
        public static setMainAddr(addr, fun, args): any {
            let setAddr = {
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
            }
            Laya.Browser.window.Ajax.post(setAddr);
        }
    }
}