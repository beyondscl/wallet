/**Created by the LayaAirIDE*/
module view.alert {
    export class ExportPriKey extends ui.alert.ExportPriKeyUI {
        constructor() {
            super();
            this.initEvent();
        }

        private initEvent() {
            this.btn_copy.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        }

        private btnClick(index: number) {
            if (1 == index) {
                //复制？？？
                this.btn_copy.label = '已复制'
            }
        }

        public setData(key: string) {
            this.text_pKey.text = key;
            this.text_pKey.text = "f31430d04eabdb2480ad86c0ca81f1350e05057d4951af7399d2683616f8661b";//test
        }
    }
}