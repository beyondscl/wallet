/**Created by the LayaAirIDE*/
module view.user {
    export class UserRegist extends ui.user.UserRegistUI {
        private comp: ui.user.UserRegistUI;
        private parentUI: view.user.UserLogin;
        private waiting: view.alert.waiting;
        /**
         * 获取验证码按钮变灰
         */
        private _getCode = config.prod.smsTimeInterval;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setParentUI(p: view.user.UserLogin) {
            this.parentUI = p;
        }

        public changTime(btn: Laya.Button) {
            let text = config.msg.SENDED_CODE + "(" + this._getCode + ")";
            btn.label = text;
            this._getCode--;
            if (this._getCode < 0) {
                Laya.timer.clear(this, this.changTime);
                btn.label = config.msg.SEND_CODE;
                this.comp.btn_getcode.disabled = false;
                this._getCode = config.prod.smsTimeInterval;
            }
        }

        private init() {
            this.comp = new ui.user.UserRegistUI();
            Laya.stage.addChild(this.comp);
            this.comp.visible = false;
            new view.info.Service().setParetUI(this.comp);
        }

        private initEvent() {
            this.comp.btn_regist.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_getcode.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.btn_login.on(Laya.Event.CLICK, this, this.btnClick, [3]);
        }

        private btnClick(index: number) {
            if (1 == index) {
                let inp_phNumber = this.comp.inp_phNumber.text.trim();
                let inp_vcode = this.comp.inp_vcode.text.trim();
                let inp_pass = this.comp.inp_pass.text.trim();
                let inp_passconf = this.comp.inp_passconf.text.trim();
                let inp_invitation = this.comp.inp_invitation.text.trim();
                if (this.checkRegist(inp_phNumber, inp_vcode, inp_pass, inp_passconf, inp_invitation)) {
                    this.regist();
                }
            }
            if (2 == index) {
                this.comp.btn_getcode.disabled = true;
                let phone = this.comp.inp_phNumber.text.trim();
                if (util.vilPhoneNumber(phone)) {
                    this.getCode();
                } else {
                    this.comp.btn_getcode.disabled = false;
                    new view.alert.info(config.msg.PHONE_ERROR).popup();
                }
            }
            if (3 == index) {
                this.parentUI.comp.visible = true;
                this.comp.removeSelf();

            }
        }

        private checkRegist(inp_phNumber, inp_vcode: string, pass: string, inp_passconf, inp_invitation: string) {
            if (!util.vilPhoneNumber(inp_phNumber)) {
                new view.alert.info(config.msg.PHONE_ERROR).popup();
                return false;
            }
            if (!util.isNumber(inp_vcode) || inp_vcode.length != 6) {
                new view.alert.info(config.msg.VCODE_ERROR).popup();
                return false;
            }
            if (!pass || pass.length < 8 || pass.length > 32) {
                new view.alert.info(config.msg.NEW_PASS_ERROR).popup();
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
        }

        private getCode() {
            this.comp.btn_getcode.disabled = true;
            let phone = this.comp.inp_phNumber.text;
            service.userServcie.getRegistCode(phone, this.getCodeCb, this);
            Laya.timer.loop(1000, this, this.changTime, [this.comp.btn_getcode]);
        }

        /**
         * 获取验证码回调
         */
        private getCodeCb(ret, v) {
            ret = JSON.parse(ret)
            if (ret && ret.retCode == 0) {
                new view.alert.info(ret.retMsg.msg).popup();
            } else {
                new view.alert.info(ret.reason).popup();
            }
        }

        /**
         * 注册
         */
        private regist() {
            let uname = this.comp.inp_phNumber.text;
            let upass = this.comp.inp_pass.text;
            let captcha = this.comp.inp_vcode.text;
            let code = this.comp.inp_invitation.text;
            this.waiting = new view.alert.waiting("注册中...")
            this.waiting.popup();
            service.userServcie.userRegist(uname, upass, captcha, code, "", this.registCd, this);
        }

        /**
         * 注册回调
         */
        private registCd(ret, v: view.user.UserRegist) {
            v.waiting.stop();
            ret = JSON.parse(ret)
            if (ret && ret.retCode == 0) {
                new view.alert.info(ret.retMsg.msg).popup();
                v.comp.removeSelf();
                v.parentUI.comp.visible = true;
            } else {
                new view.alert.info(ret.reason).popup();
            }
        }

    }

}