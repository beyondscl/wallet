/**Created by the LayaAirIDE*/
module view.alert {
    export class EnterPass extends ui.alert.EnterPassUI {
        private parentUI: any;//很多地方需要验证
        private callBack: any;//点击确定的回调函数
        private wName: string;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setParentUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        public setCallBack(func: any) {
            this.callBack = func;
        }

        //必须设置
        public setWalName(wName: string) {
            this.wName = wName;
        }

        private init() {
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private initEvent() {
            this.btn_submit.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.close()
            }
            if (2 == index) {
                //统一验证密码,至于是否加密暂定,是否添加验证次数
                let wallet;
                if (this.wName) {
                    wallet = service.walletServcie.getWallet(this.wName);
                } else {
                    wallet = mod.userMod.defWallet;
                }
                if (!wallet.wPassword) {
                    console.error("wallet.wPassword is null");
                }
                let pass = this.text_pass.text;
                if (pass != wallet.wPassword) {
                    this.warn.visible = true;
                    return;
                }else{
                    this.warn.visible = false;
                }
                this.callBack(pass, this.parentUI);
                this.close()
            }
        }
    }
}