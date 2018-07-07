/**Created by the LayaAirIDE*/
module view.alert {
    export class confirm extends ui.alert.confirmUI {
        private parentUI: View;
        private wName: string;

        private callback;
        private args;

        constructor(title: string, subTitle: string) {
            super();
            this.title.text = title;
            this.sub_title.text = subTitle;
            this.initEvent();
        }

        public setData(wName: string) {
            this.wName = wName;
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        public setCallback(call, args) {
            this.callback = call;
            this.args = args;
        }

        private init() {
        }

        private initEvent() {
            this.btn_cancel.on(Laya.Event.CLICK, this, this.btnClick, [1, null]);
            this.btn_sub.on(Laya.Event.CLICK, this, this.btnClick, [2, null]);
        }

        private btnClick(index: number) {
            this.close();
            if (1 == index) {
                if (this.callback) {
                    this.callback(1, this.args);
                } else {
                }

            }
            if (2 == index) {
                if (this.callback) {
                    this.callback(2, this.args);
                } else {//删除助记词
                    if (mod.userMod.defWallet.wName == this.wName) {
                        mod.userMod.defWallet.wZjc = '';
                    }
                    let wallet: mod.walletMod = service.walletServcie.getWallet(this.wName);
                    wallet.wZjc = '';
                    util.setItemJson(this.wName, wallet.toJson());
                    util.compShow([1]);
                }
            }
        }
    }
}