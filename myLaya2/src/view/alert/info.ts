/**Created by the LayaAirIDE*/
// 统一的错误信息提示
module view.alert {
    export class info extends ui.alert.infoUI {
        constructor() {
            super();
            Laya.timer.once(3000, this, this.stop);
        }

        public setMsg(msg: string) {
            this.msg.text = msg;
        }

        private stop() {
            this.close();
        }

    }
}