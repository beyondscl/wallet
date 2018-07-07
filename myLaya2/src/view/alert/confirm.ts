/**Created by the LayaAirIDE*/
module view.alert {
    export class confirm extends ui.alert.confirmUI {
        private parentUI: View;
        private wName: string;

        constructor(title: string, subTitle: string) {
            super();
            if (title)
                this.title.text = title;
            if (subTitle)
                this.sub_title.text = subTitle;
            this.initEvent();
        }

        public setData(wName: string) {
            this.wName = wName;
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        private init() {
        }

        private initEvent() {
            this.btn_cancel.on(Laya.Event.CLICK, this, this.btnClick, [1, null]);
            this.btn_sub.on(Laya.Event.CLICK, this, this.btnClick, [2, null]);
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.close();
            }
            if (2 == index) {//删除助记词
                if (mod.userMod.defWallet.wName == this.wName) {
                    mod.userMod.defWallet.wZjc = '';
                }
                let wallet: mod.walletMod = service.walletServcie.getWallet(this.wName);
                wallet.wZjc = '';
                util.setItemJson(this.wName, wallet.toJson());
                this.close();
            }
        }
    }
}