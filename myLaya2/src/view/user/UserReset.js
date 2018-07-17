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
        var UserReset = /** @class */ (function (_super) {
            __extends(UserReset, _super);
            function UserReset() {
                var _this = _super.call(this) || this;
                /**
                 * 获取验证码按钮
                 */
                _this._getCode = config.prod.smsTimeInterval;
                _this.init();
                _this.initEvent();
                return _this;
            }
            UserReset.prototype.init = function () {
                this.comp = new ui.user.UserResetUI();
                Laya.stage.addChild(this.comp);
            };
            UserReset.prototype.initEvent = function () {
                this.comp.btn_getcode.on(Laya.Event.CLICK, this, this.btnClick, [1]);
                this.comp.btn_update.on(Laya.Event.CLICK, this, this.btnClick, [2]);
                this.comp.btn_login.on(Laya.Event.CLICK, this, this.btnClick, [3]);
            };
            UserReset.prototype.setParentUI = function (p) {
                this.parentUI = p;
            };
            UserReset.prototype.btnClick = function (index) {
                if (1 == index) {
                    var phone = this.comp.inp_phone.text;
                    if (util.vilPhoneNumber(phone)) {
                        this.getCode();
                        service.userServcie.getResetPassCode(phone, this.getCodeCb, "");
                    }
                    else {
                        new view.alert.info(config.msg.PHONE_ERROR).popup();
                    }
                }
                if (2 == index) {
                    var inp_phone = this.comp.inp_phone.text.trim();
                    var inp_code = this.comp.inp_code.text.trim();
                    var inp_pass = this.comp.inp_pass.text.trim();
                    var inp_passconf = this.comp.inp_passconf.text.trim();
                    if (this.check(inp_phone, inp_code, inp_pass, inp_passconf)) {
                        this.waiting = new view.alert.waiting("重置密码中...");
                        this.waiting.popup();
                        service.userServcie.resetPass(inp_phone, inp_pass, inp_code, this.resetCb, this);
                    }
                }
                if (3 == index) {
                    this.comp.removeSelf();
                    this.parentUI.comp.visible = true;
                }
            };
            UserReset.prototype.getCode = function () {
                this.comp.btn_getcode.disabled = true;
                var phone = this.comp.btn_getcode.text;
                Laya.timer.loop(1000, this, this.changTime, [this.comp.btn_getcode]);
            };
            UserReset.prototype.changTime = function (btn) {
                var text = this.comp.btn_getcode.label.trim().split("(")[0];
                text = text + "(" + this._getCode + ")";
                btn.label = text;
                this._getCode--;
                if (this._getCode < 0) {
                    Laya.timer.clear(this, this.changTime);
                    text = this.comp.btn_getcode.label.trim().split("(")[0];
                    btn.label = text;
                    this.comp.btn_getcode.disabled = false;
                    this._getCode = config.prod.smsTimeInterval;
                    ;
                }
            };
            UserReset.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            UserReset.prototype.check = function (inp_phone, inp_code, inp_pass, inp_passconf) {
                if (!util.vilPhoneNumber(inp_phone)) {
                    new view.alert.info(config.msg.PHONE_ERROR).popup();
                    return false;
                }
                if (!util.isNumber(inp_code) || inp_code.length != 6) {
                    new view.alert.info(config.msg.VCODE_ERROR).popup();
                    return false;
                }
                if (!inp_pass || inp_pass.length < 8 || inp_pass.length > 32) {
                    new view.alert.info(config.msg.PASS_ERROR).popup();
                    return false;
                }
                if (inp_passconf != inp_pass) {
                    new view.alert.info(config.msg.PASS_CONF_ERROR).popup();
                    return false;
                }
                return true;
            };
            /**
             * 获取验证码回调
             */
            UserReset.prototype.getCodeCb = function (ret, a) {
                ret = JSON.parse(ret);
                if (ret && ret.retCode == 0) {
                    new view.alert.info(ret.retMsg.msg).popup();
                }
                else {
                    new view.alert.info(ret.reason).popup();
                }
            };
            /**
             * @param ret 找回密码回调
             * @param userLogin
             */
            UserReset.prototype.resetCb = function (ret, v) {
                v.waiting.stop();
                ret = JSON.parse(ret);
                if (ret && ret.retCode == 0) {
                    new view.alert.info(ret.retMsg.msg).popup();
                    util.delItem(config.prod.appUserKey);
                    v.comp.removeSelf();
                    v.parentUI.comp.visible = true;
                }
                else {
                    new view.alert.info(ret.reason).popup();
                }
            };
            return UserReset;
        }(ui.user.UserResetUI));
        user.UserReset = UserReset;
    })(user = view.user || (view.user = {}));
})(view || (view = {}));
//# sourceMappingURL=UserReset.js.map