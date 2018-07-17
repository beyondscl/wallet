/**Created by the LayaAirIDE*/
module view.user {
    export class UserReset extends ui.user.UserResetUI {
		private comp:ui.user.UserResetUI;
		private parentUI:view.user.UserLogin;
        private waiting:view.alert.waiting;

		constructor(){
			super();
			this.init();
			this.initEvent();
		}
		private init() {
            this.comp = new ui.user.UserResetUI();
            Laya.stage.addChild(this.comp);
        }
        private initEvent() {
            this.comp.btn_getcode.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_update.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.btn_login.on(Laya.Event.CLICK, this, this.btnClick, [3]);

        }
        public setParentUI(p: view.user.UserLogin) {
            this.parentUI = p;
        }
		private btnClick(index: number) {
            if (1 == index) {
                let phone = this.comp.inp_phone.text;
                if(util.vilPhoneNumber(phone)){
                    this.getCode();
                    service.userServcie.getResetPassCode(phone,this.getCodeCb,"");
                }else{
                    new view.alert.info(config.msg.PHONE_ERROR).popup();
                }
			}
            if (2 == index) {
                let inp_phone = this.comp.inp_phone.text.trim();
                let inp_code = this.comp.inp_code.text.trim();
                let inp_pass = this.comp.inp_pass.text.trim();
                let inp_passconf = this.comp.inp_passconf.text.trim();
                if(this.check(inp_phone,inp_code,inp_pass,inp_passconf)){
                    this.waiting = new view.alert.waiting("重置密码中...")
                    this.waiting.popup();
                    service.userServcie.resetPass(inp_phone,inp_pass,inp_code,this.resetCb,this);
                }
			}
            if (3 == index) {
                this.comp.removeSelf();
                this.parentUI.comp.visible = true;
			}
        }
        /**
         * 获取验证码按钮
         */
        private _getCode = config.prod.smsTimeInterval;
        private getCode() {
            this.comp.btn_getcode.disabled = true;
            let phone = this.comp.btn_getcode.text;
            Laya.timer.loop(1000,this,this.changTime,[this.comp.btn_getcode]);
        }
        public changTime(btn:Laya.Button){
            let text = this.comp.btn_getcode.label.trim().split("(")[0];
            text = text +"("+this._getCode+")";
            btn.label = text;
            this._getCode--;
            if(this._getCode<0){
                Laya.timer.clear(this, this.changTime);
                text = this.comp.btn_getcode.label.trim().split("(")[0];
                btn.label = text;
                this.comp.btn_getcode.disabled = false;
                this._getCode = config.prod.smsTimeInterval;;
            }
        }
		public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }
        private check(inp_phone,inp_code:string,inp_pass,inp_passconf):boolean{
            if(!util.vilPhoneNumber(inp_phone)){
                new view.alert.info(config.msg.PHONE_ERROR).popup();
                return false;
            }
            if(!util.isNumber(inp_code)||inp_code.length!=6){
                new view.alert.info(config.msg.VCODE_ERROR).popup();
                return false;
            }
            if(!inp_pass||inp_pass.length<8||inp_pass.length>32){
                new view.alert.info(config.msg.PASS_ERROR).popup();
                return false;
            }
            if(inp_passconf!=inp_pass){
                new view.alert.info(config.msg.PASS_CONF_ERROR).popup();
                return false;
            }
            return true;
        }

        /**
         * 获取验证码回调
         */
        private getCodeCb(ret,a) {
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