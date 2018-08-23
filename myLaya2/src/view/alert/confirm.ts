/**Created by the LayaAirIDE
 * 导入钱包和备份助记词用到
*/
module view.alert {
    export class confirm extends ui.alert.confirmUI {
        private parentUI: any;
        private wName: string;
        public static claName = 'dialog_confirm';
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
                }
            }
            if (2 == index) {
                if (this.callback) {
                    this.callback(2, this.args);
                }
            }
        }
    }
}