/**Created by the LayaAirIDE*/
module view.info {
    export class Candy extends ui.info.CandyUI {
        private comp: ui.info.CandyUI;
        private parentUI: View;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(data: Array<mod.walletMod>) {
            this.comp.list_wallet.array = data;
            this.comp.list_wallet.x = 1;
            this.comp.list_wallet.y = data.length;
            this.comp.list_wallet.vScrollBarSkin = "";
            this.comp.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
            this.comp.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        private init() {
            this.comp = new ui.info.CandyUI();
            Laya.stage.addChild(this.comp);
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        }

        private onListRender(cell: Box, index: number) {
            var data: mod.walletMod = this.comp.list_wallet.array[index];
            let wImg = cell.getChildByName('img_wallet') as Laya.Image;
            wImg.skin = data.wSkin;
            let wName = cell.getChildByName('lab_wName') as Label;
            wName.text = data.wName;
            let wAddr = cell.getChildByName('lab_wAddr') as Label;
            wAddr.text = util.getAddr(data.wAddr);
            let radio = cell.getChildByName('radio') as Laya.Radio;
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.comp.removeSelf();
                this.parentUI.visible = true;
            }
        }

        private onSelect(index: number) {
            let childs = this.comp.list_wallet.cells;
            for (let i = 0; i < childs.length; i++) {
                let radio = childs[i].getChildByName('radio') as Laya.Radio;
                if (i != index) {
                    radio.selected = false;
                } else {
                    radio.selected = true;
                }
            }
        }

        private getSelectedItem() {
            let childs = this.comp.list_wallet.cells;
            for (let i = 0; i < childs.length; i++) {
                let radio = childs[i].getChildByName('radio') as Laya.Radio;
                if (radio.selected) {
                    return childs[i].getChildByName('lab_wName').text;
                }
            }
        }
    }
}