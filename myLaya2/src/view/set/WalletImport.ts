/**Created by the LayaAirIDE*/
module view.set {
    export class WalletImport extends ui.set.WalletImportUI {
        private comp: ui.set.WalletImportUI;
        private parentUI: any;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            this.comp = new ui.set.WalletImportUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private initEvent() {
            this.comp.tab.selectHandler = new Laya.Handler(this, this.onSelect);
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_sao.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        }

        private onSelect(index: number): void {
            this.comp.stack.selectedIndex = index;
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