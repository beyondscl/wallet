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

        public setData(key: string) {
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        private init() {
            this.comp = new ui.info.aboutUI();
            Laya.stage.addChild(this.comp);
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_team.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.btn_service.on(Laya.Event.CLICK, this, this.btnClick, [3]);

        }

        private btnClick(index: number) {
            if (1 == index) {
                this.comp.removeSelf();
                this.parentUI.visible = true;
                return;
            }
            if (2 == index) {
                this.comp.visible = false;
                let s = new view.info.aboutTeam().setParetUI(this.comp);
                return;
            }
            if (3 == index) {
                this.comp.visible = false;
                let s = new view.info.Service();
                s.setParetUI(this.comp);
                s.setData("1");
                return;
            }
        }
    }
}