/**Created by the LayaAirIDE*/
module view.backup {
    export class BackUpZjc extends ui.backup.BackUpZjcUI {
        private comp: ui.backup.BackUpZjcUI;
        private parentUI: View;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            this.comp = new ui.backup.BackUpZjcUI();
            Laya.stage.addChild(this.comp);
            let warn = new view.alert.WarnZjc();
            warn.popup(true, true);
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        }

        public setData(key: string) {
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.comp.removeSelf();
                this.parentUI.visible = true;
            }
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }
    }
}