/**Created by the LayaAirIDE*/
module view.alert {
    export class Warn extends ui.alert.WarnUI {
        private parentUI: View;

        constructor() {
            super();
            this.initEvent();
        }

        private init() {
        }

        private initEvent() {
            this.btn_know.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        }

        public setData(key: string) {
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.close();
            }
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }
    }
}