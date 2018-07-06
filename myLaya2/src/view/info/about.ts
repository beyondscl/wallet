/**Created by the LayaAirIDE*/
module view.info {
    export class about extends ui.info.aboutUI {
        private comp: ui.info.aboutUI;
        private parentUI: View;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            this.comp = new ui.info.aboutUI();
            Laya.stage.addChild(this.comp);
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_team.on(Laya.Event.CLICK, this, this.btnClick, [2]);

        }

        public setData(key: string) {
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.comp.removeSelf();
                this.parentUI.visible = true;
            }
            if (2 == index) {
                this.comp.visible = false;
                new view.info.aboutTeam().setParetUI(this.comp);
            }
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }
    }
}