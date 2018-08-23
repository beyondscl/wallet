/**Created by the LayaAirIDE*/
module view.alert {
    export class Warn extends ui.alert.WarnUI {
        private parentUI: View;
        public static claName = 'dialog_Warn';
        constructor(title: string, subTitle: string) {
            super();
            this.warn_title.text = title;
            this.warn_msg.text = subTitle;
            this.initEvent();
        }

        public setData(title: string, subTitle: string) {
            if (title) {
                this.warn_title.text = title;
            }
            if (subTitle) {
                this.warn_msg.text = subTitle;
            }
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