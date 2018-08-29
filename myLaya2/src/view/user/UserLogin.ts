/**Created by the LayaAirIDE*/
module view.user {
    export class UserLogin extends ui.user.UserLoginUI {
        public comp: ui.user.UserLoginUI;
        private parentUI: View;
        private waiting: view.alert.waiting;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(key: string) {
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        /**
         * 存在即自动登录
         * 1.自动登录失败，重新输入密码
         * 2.成功刷新token,进入主页
         */
        public checkAutoLogin() {
            let u = service.userServcie.getUser()
            if (u) {
                this.tokenLogin();
            } else {
                this.comp.visible = true;
            }
        }

        /**
         * token登录
         */
        public tokenLogin() {
            this.waiting = new view.alert.waiting("登录中...")
            this.waiting.popup();
            service.userServcie.tokenLogin(this.loginCb, this);
        }

        /**
         * 登录
         */
        public login(uname, upass) {
            this.waiting = new view.alert.waiting("登录中...")
            this.waiting.popup();
            mod.userMod.userName = uname.trim();
            service.userServcie.userLogin(uname, upass, this.loginCb, this);
        }

        private init() {
            this.comp = new ui.user.UserLoginUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this,1);
            if(util.isDeubgInfo){
                // this.comp.inp_uname.text = '1868356';
                // this.comp.inp_upass.text = '11111111';
            }
        }

        private initEvent() {
            this.comp.btn_login.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_regist.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.lab_reset.on(Laya.Event.CLICK, this, this.btnClick, [3]);
        }

        private btnClick(index: number) {
            if (1 == index) {
                let uname = this.comp.inp_uname.text;
                let upass = this.comp.inp_upass.text;
                if (this.check(uname, upass)) {
                    this.login(uname, upass);
                }
            }
            if (2 == index) {
                this.comp.visible = false;
                let regist = new view.user.UserRegist();
                regist.setParentUI(this);
            }
            if (3 == index) {
                this.comp.visible = false;
                let reset = new view.user.UserReset();
                reset.setParentUI(this);
            }
        }

        private check(phone: string, pass: string): boolean {
            if (!util.vilPhoneNumber(phone)) {
                new view.alert.info(config.msg.PHONE_ERROR).popup();
                return false;
            }
            if (!pass || pass.length < 8 || pass.length > 32) {
                new view.alert.info(config.msg.PASS_ERROR).popup();
                return false;
            }
            return true;
        }

        /**
         * 登录回调
         */
        private loginCb(ret, v: view.user.UserLogin) {
            v.waiting.stop();
            try {
                ret = JSON.parse(ret)
                if (ret && ret.retCode == 0) {
                    mod.userMod.setUserJson(ret.data);
                    util.setItemJson(config.prod.appUserKey, mod.userMod.userToJson());
                    v.comp.removeSelf();
                    Laya.Browser.window.enter();
                } else {
                    new view.alert.info(ret.reason).popup();
                    v.comp.visible = true;
                }
            } catch (error) {
                new view.alert.info(config.msg.SERVER_ERROR).popup();
                v.comp.visible = true;
                return;
            }
        }
    }
}