/**Created by the LayaAirIDE*/
module view.info {
    export class SelectWallet extends ui.info.SelectWalletUI {
        private comp: ui.info.SelectWalletUI;
        private parentUI: view.user.UserInvite;
        private selectedAddr: string;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(data: Array<mod.walletMod>, selctAddr: string) {
            this.comp.list_wallet.array = data;
            this.comp.list_wallet.vScrollBarSkin = "";
            this.comp.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
            this.comp.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
            this.selectedAddr = selctAddr;
        }

        public setParetUI(parentUI: view.user.UserInvite) {
            this.parentUI = parentUI;
        }

        private init() {
            this.comp = new ui.info.SelectWalletUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this,2);
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
            if (this.selectedAddr && this.selectedAddr == data.wAddr) {
                radio.selected = true;
            }
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

        private onSelect(index: number) {
            let childs = this.comp.list_wallet.cells;
            for (let i = 0; i < childs.length; i++) {
                let radio = childs[i].getChildByName('radio') as Laya.Radio;
                if (i != index) {
                    radio.selected = false;
                } else {
                    radio.selected = true;
                    let wName = childs[i].getChildByName('lab_wName') as Laya.Label;
                    this.parentUI.setSelectedWaddr(wName.text);
                    this.comp.removeSelf();
                    this.parentUI.comp.visible = true;
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
            return null;
        }
    }
}