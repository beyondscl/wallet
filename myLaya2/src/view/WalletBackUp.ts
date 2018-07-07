/**Created by the LayaAirIDE*/
module view {
    export class WalletBackUp extends ui.WalletBackUpUI {
        private comp: ui.WalletBackUpUI;
        private parentUI: View;
        private walletName: string;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(key: string) {
            this.walletName = key;
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        private init() {
            this.comp = new ui.WalletBackUpUI();
            Laya.stage.addChild(this.comp);
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_backup.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.info_backup.on(Laya.Event.CLICK, this, this.btnClick[3]);
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.comp.removeSelf();
                util.compShow([]);
            }
            if (2 == index) {
                this.comp.visible = false;
                let backUp = new view.backup.BackUpZjc();
                backUp.setData(this.walletName);
                backUp.setParetUI(this.comp);
                util.putCompStack(this.comp);
            }
        }
    }
}