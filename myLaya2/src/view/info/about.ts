/**Created by the LayaAirIDE*/
module view.info {
    export class about extends ui.info.aboutUI {
        public comp: ui.info.aboutUI;
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
            this.comp.lab_version.text = "当前版本："+Laya.Browser.window.main_config[Laya.Browser.window.env].VERSION;
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_team.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.btn_service.on(Laya.Event.CLICK, this, this.btnClick, [3]);
            this.comp.btn_log.on(Laya.Event.CLICK, this, this.btnClick, [4]);
            this.comp.btn_guide.on(Laya.Event.CLICK, this, this.btnClick, [5]);
            this.comp.btn_update.on(Laya.Event.CLICK, this, this.btnClick, [6]);
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
            if (4 == index) {
                Laya.loader.load(config.resource.devLogPath, Laya.Handler.create(this, this.devLog), null, Laya.Loader.TEXT);
            }
            if (5 == index) {
                let wait = new view.alert.waiting("正在加载资源...")
                wait.popup();
                let res = ["res/atlas/img/guide.atlas"];
                Laya.loader.load(res, Laya.Handler.create(this, this.guide,[wait],true));
            }
            if (6 == index) {
                new view.alert.Warn("已是最新版本","").popup();
            }
        }
        private guide(args){
            let wait:view.alert.waiting = args;
            wait.stop();
            new guide().setParentUI(this);
        }
        private devLog(){
             var json: string = Laya.loader.getRes(config.resource.devLogPath);
             let s = new info.Service();
             s.setParetUI(this.comp);
             s.setData("1");
             s.setTextData(json);
        }
    }
}