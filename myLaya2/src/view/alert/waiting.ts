/**Created by the LayaAirIDE*/
module view.alert {
    export class waiting extends ui.alert.waitingUI {
        public static claName = 'dialog_waiting';
        constructor(title: string) {
            super();
            this.wait_msg.text = title;
            this.init();

        }

        public stop() {
            Laya.timer.clear(this, this.start);
            this.close();
        }

        private stopCb() {
        }

        private init() {
            Laya.timer.loop(100, this, this.start);
        }

        private start() {
            this.img_wait.rotation = this.img_wait.rotation + 30;
        }
    }
}