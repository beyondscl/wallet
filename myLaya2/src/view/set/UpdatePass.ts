/**Created by the LayaAirIDE*/
module view.set {
    export class UpdatePass extends ui.set.UpdatePassUI {
        private comp: ui.set.UpdatePassUI;
        private parentUI: ui.WalletDetailUI;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            this.comp = new ui.set.UpdatePassUI();
            Laya.stage.bgColor = 'white';
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        }

        public setParentUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.stage.removeChild(this.comp);
                this.parentUI.visible = true;
            }
            if (2 == index) {

            }
            if (3 == index) {

            }
        }
    }
}