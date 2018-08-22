/**Created by the LayaAirIDE*/
module view.alert {
    export class EnterPass extends ui.alert.EnterPassUI {
        private parentUI: any;//很多地方需要验证
        private callBack: any;//点击确定的回调函数
        private wName: string;
        private type: number;//删除，等

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

        //转账需要显示地址与金额
        public setData(addr, amount) {
            this.addr.text = addr;
            this.addr.visible = true;
            this.amount.text = amount;
            this.amount.visible = true;
        }

        //必须设置
        public setWalName(wName: string) {
            this.wName = wName;
        }

        public setType(type: number) {
            this.type = type;
        }

        private init() {
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        public stop () {
            this.close();
        }

        private initEvent() {
            this.btn_submit.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.btn_cancel.on(Laya.Event.CLICK, this, this.btnClick, [3]);
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
                if (!pass) {
                    this.warn.visible = true;
                    return;
                } else {
                    this.warn.visible = false;
                }
                //用序列化验证钱包密码，本地不错任何存储,暂定
                if (this.type) {
                    if (this.type == config.msg.OP_WAL_DELETE && util.md5WithSalt(pass) != wallet.wPassword) {
                        this.warn.visible = true;
                        return;
                    }
                }
                this.btn_submit.disabled = true;
                this.callBack(pass, this.parentUI);
                this.close()
            }
            if (3 == index) {
                this.close()
            }
        }
    }
}