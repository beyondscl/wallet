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

        public setData(key: string) {
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        private init() {
        }

        private initEvent() {
            this.btn_know.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.close();
            }
        }
    }
}