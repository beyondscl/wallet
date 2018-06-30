/**Created by the LayaAirIDE*/
module view {
    export class WalletBackUp extends ui.WalletBackUpUI {
        private comp: ui.WalletBackUpUI;
        private parentUI: View;

        constructor() {
            super();
            this.init();
            this.initEvent();
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

        public setData(key: string) {
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.comp.removeSelf();
                this.parentUI.visible = true;
            }
            if (2 == index) {
                this.comp.visible = false;
                new view.backup.BackUpZjc().setParetUI(this.comp);
            }
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }
    }
}