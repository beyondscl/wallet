/**Created by the LayaAirIDE*/
// 统一的错误信息提示
module view.alert {
    export class info extends ui.alert.infoUI {
        constructor(msg: string) {
            super();
            Laya.timer.once(2000, this, this.stop);
            this.msg.text = msg;
        }
        public static claName = 'dialog_info';
        private stop() {
            this.close();
        }

    }
}