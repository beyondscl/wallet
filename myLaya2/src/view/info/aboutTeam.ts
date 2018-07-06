/**Created by the LayaAirIDE*/
module view.info {
    export class aboutTeam extends ui.info.aboutTeamUI {
        private comp: ui.info.aboutTeamUI;
        private parentUI: View;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            this.comp = new ui.info.aboutTeamUI();
            Laya.stage.addChild(this.comp);
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        }

        public setData(key: string) {
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.comp.removeSelf();
                this.parentUI.visible = true;
            }
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }
    }
}