/**Created by the LayaAirIDE*/
module view.user {
    export class UserReset extends ui.user.UserResetUI {
        private comp: ui.user.UserResetUI;
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

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        private init() {
            this.comp = new ui.user.UserResetUI();
            Laya.stage.addChild(this.comp);
            this.comp.inp_phone.focus = true;
            native.native.setCurrView(this,2);
        }
        private goBack(){
            this.comp.removeSelf();
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI,1);
        }

        private initEvent() {
            this.comp.btn_getcode.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_update.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.btn_login.on(Laya.Event.CLICK, this, this.btnClick, [3]);

        }

        private btnClick(index: number) {
            if (1 == index) {
                let phone = this.comp.inp_phone.text;
                if (util.vilPhoneNumber(phone)) {
                    this.comp.btn_getcode.disabled = true;
                    service.userServcie.getResetPassCode(phone, this.getCodeCb, "");
                    this.getCode();
                } else {
                    new view.alert.info(config.msg.PHONE_ERROR).popup();
                }
            }
            if (2 == index) {
                let inp_phone = this.comp.inp_phone.text.trim();
                let inp_code = this.comp.inp_code.text.trim();
                let inp_pass = this.comp.inp_pass.text.trim();
                let inp_passconf = this.comp.inp_passconf.text.trim();
                if (this.check(inp_phone, inp_code, inp_pass, inp_passconf)) {
                    this.waiting = new view.alert.waiting("重置密码中...")
                    this.waiting.popup();
                    service.userServcie.resetPass(inp_phone, inp_pass, inp_code, this.resetCb, this);
                }
            }
            if (3 == index) {
                this.comp.removeSelf();
                this.parentUI.comp.visible = true;
            }
        }

        private getCode() {
            let phone = this.comp.btn_getcode.text;
            Laya.timer.loop(1000, this, this.changTime, [this.comp.btn_getcode]);
        }

        private check(inp_phone, inp_code: string, inp_pass, inp_passconf): boolean {
            if (!util.vilPhoneNumber(inp_phone)) {
                new view.alert.info(config.msg.PHONE_ERROR).popup();
                return false;
            }
            if (!util.isNumber(inp_code) || inp_code.length != 6) {
                new view.alert.info(config.msg.VCODE_ERROR).popup();
                return false;
            }
            if (!inp_pass || inp_pass.length < 8 || inp_pass.length > 32) {
                new view.alert.info(config.msg.NEW_PASS_ERROR).popup();
                return false;
            }
            if (inp_passconf != inp_pass) {
                new view.alert.info(config.msg.PASS_CONF_ERROR).popup();
                return false;
            }
            return true;
        }

        /**
         * 获取验证码回调
         */
        private getCodeCb(ret, a) {
            ret = JSON.parse(ret)
            if (ret && ret.retCode == 0) {
                new view.alert.info(ret.retMsg.msg).popup();
            } else {
                new view.alert.info(ret.reason).popup();
            }
        }

        /**
         * @param ret 找回密码回调
         * @param userLogin
         */
        private resetCb(ret, v: view.user.UserReset) {
            v.waiting.stop();
            ret = JSON.parse(ret)
            if (ret && ret.retCode == 0) {
                new view.alert.info(ret.retMsg.msg).popup();
                util.delItem(config.prod.appUserKey);
                v.comp.removeSelf();
                v.parentUI.comp.visible = true;
            } else {
                new view.alert.info(ret.reason).popup();
            }
        }
    }
}