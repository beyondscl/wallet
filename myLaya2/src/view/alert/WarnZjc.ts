/**Created by the LayaAirIDE*/
module view.alert {
    export class WarnZjc extends ui.alert.WarnZjcUI {
        private comp: ui.alert.WarnZjcUI;
        private parentUI: View;

        constructor() {
            super();
            this.init();
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