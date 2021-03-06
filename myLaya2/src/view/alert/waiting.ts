/**Created by the LayaAirIDE*/
module view.alert {
    export class waiting extends ui.alert.waitingUI {
        constructor(title: string) {
            super();
            this.wait_msg.text = title;
            this.init();

        }

        public stop() {
            Laya.timer.clear(this, this.stopCb);
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