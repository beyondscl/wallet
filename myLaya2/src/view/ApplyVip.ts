module view {
    export class ApplyVip extends ui.ApplyVipUI {
        private comp: ui.ApplyVipUI;
        private ParentUI: view.SmartCat;
        private waiting: view.alert.waiting;
        constructor(){
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.ApplyVipUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
        }

        public setParentUI (v: view.SmartCat){
            this.ParentUI = v;
        }

        private initEvent () {
            this.comp.back_btn.on(Laya.Event.CLICK, this, this.goBack)
        }

        private goBack () {
            this.comp.removeSelf();
            this.ParentUI.comp.visible = true;
<<<<<<< HEAD
            native.native.setCurrView(this.ParentUI, 1);
=======
            native.native.setCurrView(this.ParentUI, 2);
>>>>>>> origin/dev_sxl
        }
    }
}