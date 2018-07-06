/**Created by the LayaAirIDE*/
module view.backup {
    export class BackUpZjc extends ui.backup.BackUpZjcUI {
        private comp: ui.backup.BackUpZjcUI;
        private parentUI: View;
        private wZjc: string;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(key: string) {
            this.wZjc = key;
            this.comp.text_zjc.text = key;
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        private init() {
            this.comp = new ui.backup.BackUpZjcUI();
            Laya.stage.addChild(this.comp);
            let warn = new view.alert.WarnZjc();
            warn.popup(true, true);
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_backup.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.comp.removeSelf();
                this.parentUI.visible = true;
            }
            if (2 == index) {
                this.comp.visible = false;
                let conf = new view.backup.BackUpConf();
                conf.setData(this.wZjc);
                conf.setParetUI(this.comp);
            }
        }
    }
}