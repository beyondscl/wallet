var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var user;
    (function (user) {
        var UserLogin = /** @class */ (function (_super) {
            __extends(UserLogin, _super);

            function UserLogin() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }

            UserLogin.prototype.setData = function (key) {
            };
            UserLogin.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            /**
             * 存在即自动登录
             * 1.自动登录失败，重新输入密码
             * 2.成功刷新token,进入主页
             */
            UserLogin.prototype.checkAutoLogin = function () {
                var u = service.userServcie.getUser();
                if (u) {
                    this.tokenLogin();
                }
                else {
                    this.comp.visible = true;
                }
            };
            /**
             * token登录
             */
            UserLogin.prototype.tokenLogin = function () {
                this.waiting = new view.alert.waiting("登录中...");
                this.waiting.popup();
                service.userServcie.tokenLogin(this.loginCb, this);
            };
            /**
             * 登录
             */
            UserLogin.prototype.login = function (uname, upass) {
                this.waiting = new view.alert.waiting("登录中...");
                this.waiting.popup();
                //更新内存数据
                mod.userMod.userName = uname.trim();
                service.userServcie.userLogin(uname, upass, this.loginCb, this);
            };
            UserLogin.prototype.init = function () {
                this.comp = new ui.user.UserLoginUI();
                this.comp.visible = false;
                Laya.stage.addChild(this.comp);
            };
            UserLogin.prototype.initEvent = function () {
                this.comp.btn_login.on(Laya.Event.CLICK, this, this.btnClick, [1]);
                this.comp.btn_regist.on(Laya.Event.CLICK, this, this.btnClick, [2]);
                this.comp.lab_reset.on(Laya.Event.CLICK, this, this.btnClick, [3]);
            };
            UserLogin.prototype.btnClick = function (index) {
                if (1 == index) {
                    var uname = this.comp.inp_uname.text;
                    var upass = this.comp.inp_upass.text;
                    //判断
                    if (this.check(uname, upass)) {
                        this.login(uname, upass);
                    }
                }
                if (2 == index) {
                    this.comp.visible = false;
                    var regist = new view.user.UserRegist();
                    regist.setParentUI(this);
                }
                if (3 == index) {
                    this.comp.visible = false;
                    var reset = new view.user.UserReset();
                    reset.setParentUI(this);
                }
            };
            UserLogin.prototype.check = function (phone, pass) {
                if (!util.vilPhoneNumber(phone)) {
                    new view.alert.info(config.msg.PHONE_ERROR).popup();
                    return false;
                }
                if (!pass || pass.length < 8 || pass.length > 32) {
                    new view.alert.info(config.msg.PASS_ERROR).popup();
                    return false;
                }
                return true;
            };
            /**
             * 登录回调
             */
            UserLogin.prototype.loginCb = function (ret, v) {
                v.waiting.stop();
                try {
                    ret = JSON.parse(ret);
                }
                catch (error) {
                    new view.alert.info(config.msg.SERVER_ERROR).popup();
                    v.comp.visible = true;
                    return;
                }
                if (ret && ret.retCode == 0) {
                    //储存本地账户,注意上面已经赋值
                    mod.userMod.setUserJson(ret.data);
                    util.setItemJson(config.prod.appUserKey, mod.userMod.userToJson());
                    //开始进入
                    v.comp.removeSelf();
                    Laya.Browser.window.enter();
                }
                else {
                    new view.alert.info(ret.reason).popup();
                    v.comp.visible = true;
                }
            };
            return UserLogin;
        }(ui.user.UserLoginUI));
        user.UserLogin = UserLogin;
    })(user = view.user || (view.user = {}));
})(view || (view = {}));
//# sourceMappingURL=UserLogin.js.map