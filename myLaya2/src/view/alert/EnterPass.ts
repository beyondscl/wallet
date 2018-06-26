/**Created by the LayaAirIDE*/
module view.alert {
    export class EnterPass extends ui.alert.EnterPassUI {
        private parentUI: any;//很多地方需要验证
        private callBack: any;//点击确定的回调函数
        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private initEvent() {
            this.btn_cancel.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.btn_submit.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.close()
            }
            if (2 == index) {
                let pass = this.text_pass.text;
                this.callBack(pass, this.parentUI);
                this.close()
            }
        }

        public setParentUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        public setCallBack(func: any) {
            this.callBack = func;
        }
    }
}