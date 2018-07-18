var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var user;
    (function (user) {
        var UserRegist = /** @class */ (function (_super) {
            __extends(UserRegist, _super);
            function UserRegist() {
                var _this = _super.call(this) || this;
                /**
                 * 获取验证码
                 */
                _this._getCode = 6;
                _this.init();
                _this.initEvent();
                return _this;
            }
            UserRegist.prototype.setParentUI = function (p) {
                this.parentUI = p;
            };
            UserRegist.prototype.init = function () {
                this.comp = new ui.user.UserRegistUI();
                Laya.stage.addChild(this.comp);
            };
            UserRegist.prototype.initEvent = function () {
                this.comp.btn_regist.on(Laya.Event.CLICK, this, this.btnClick, [1]);
                this.comp.btn_getcode.on(Laya.Event.CLICK, this, this.btnClick, [2]);
                this.comp.btn_login.on(Laya.Event.CLICK, this, this.btnClick, [3]);
            };
            UserRegist.prototype.btnClick = function (index) {
                if (1 == index) {
                    var inp_phNumber = this.comp.inp_phNumber.text.trim();
                    var inp_vcode = this.comp.inp_vcode.text.trim();
                    var inp_pass = this.comp.inp_pass.text.trim();
                    var inp_passconf = this.comp.inp_passconf.text.trim();
                    var inp_invitation = this.comp.inp_invitation.text.trim();
                    if (this.checkRegist(inp_phNumber, inp_vcode, inp_pass, inp_passconf, inp_invitation)) {
                        this.regist();
                    }
                }
                if (2 == index) {
                    var phone = this.comp.inp_phNumber.text.trim();
                    if (util.vilPhoneNumber(phone)) {
                        this.getCode();
                    }
                    else {
                        new view.alert.info(config.msg.PHONE_ERROR).popup();
                    }
                }
                if (3 == index) {
                    this.parentUI.comp.visible = true;
                    this.comp.removeSelf();
                }
            };
            UserRegist.prototype.checkRegist = function (inp_phNumber, inp_vcode, pass, inp_passconf, inp_invitation) {
                if (!util.vilPhoneNumber(inp_phNumber)) {
                    new view.alert.info(config.msg.PHONE_ERROR).popup();
                    return false;
                }
                if (!util.isNumber(inp_vcode) || inp_vcode.length != 6) {
                    new view.alert.info(config.msg.VCODE_ERROR).popup();
                    return false;
                }
                if (!pass || pass.length < 8 || pass.length > 32) {
                    new view.alert.info(config.msg.PASS_ERROR).popup();
                    return false;
                }
                if (pass != inp_passconf) {
                    new view.alert.info(config.msg.PASS_CONF_ERROR).popup();
                    return false;
                }
                if (inp_invitation.length != 5) {
                    new view.alert.info(config.msg.INVITATION_ERROR).popup();
                    return false;
                }
                return true;
            };
            UserRegist.prototype.getCode = function () {
                var phone = this.comp.inp_phNumber.text;
                service.userServcie.getRegistCode(phone, this.getCodeCb, this);
                // Laya.timer.loop(1000,this,this.changTime,[this.comp.btn_getcode]);
            };
            UserRegist.prototype.changTime = function (btn) {
                btn.disabled = true;
                var text = this.comp.btn_getcode.label.trim().split("(")[0];
                text = text + "(" + this._getCode + ")";
                btn.label = text;
                this._getCode--;
                if (this._getCode <= 0) {
                    Laya.timer.clear(this, this.changTime);
                    text = this.comp.btn_getcode.label.trim().split("(")[0];
                    btn.label = text;
                    this.comp.btn_getcode.disabled = false;
                }
            };
            /**
             * 获取验证码回调
             */
            UserRegist.prototype.getCodeCb = function (ret, a) {
                ret = JSON.parse(ret);
                if (ret && ret.retCode == 0) {
                    new view.alert.info(ret.retMsg.msg).popup();
                }
                else {
                    new view.alert.info(ret.reason).popup();
                }
            };
            /**
             * 注册
             */
            UserRegist.prototype.regist = function () {
                var uname = this.comp.inp_phNumber.text;
                var upass = this.comp.inp_pass.text;
                var captcha = this.comp.inp_vcode.text;
                var code = this.comp.inp_invitation.text;
                this.waiting = new view.alert.waiting("注册中...");
                this.waiting.popup();
                service.userServcie.userRegist(uname, upass, captcha, code, "", this.registCd, this);
            };
            /**
             * 注册回调
             */
            UserRegist.prototype.registCd = function (ret, v) {
                v.waiting.stop();
                ret = JSON.parse(ret);
                if (ret && ret.retCode == 0) {
                    new view.alert.info(ret.retMsg.msg).popup();
                    v.comp.removeSelf();
                    v.parentUI.comp.visible = true;
                }
                else {
                    new view.alert.info(ret.reason).popup();
                }
            };
            return UserRegist;
        }(ui.user.UserRegistUI));
        user.UserRegist = UserRegist;
    })(user = view.user || (view.user = {}));
})(view || (view = {}));
//# sourceMappingURL=UserRegist.js.map