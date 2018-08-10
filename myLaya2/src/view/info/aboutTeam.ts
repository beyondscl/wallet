/**Created by the LayaAirIDE*/
module view.info {
    export class aboutTeam extends ui.info.aboutTeamUI {
        private comp: ui.info.aboutTeamUI;
        private parentUI: view.info.about;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(key: string) {
        }

        public setParetUI(parentUI: view.info.about) {
            this.parentUI = parentUI;
        }

        private init() {
            this.comp = new ui.info.aboutTeamUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this,2);
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);

        }
        private goBack(){
            this.comp.removeSelf();
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI,2);
        }
        private btnClick(index: number) {
            if (1 == index) {
                this.goBack();
            }
        }
    }
}