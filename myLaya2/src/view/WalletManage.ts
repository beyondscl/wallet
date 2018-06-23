/**Created by the LayaAirIDE*/
module view {
    import Image = Laya.Image;
    import Label = Laya.Label;

    export class WalletManage extends ui.WalletManageUI {
        private comp: ui.WalletManageUI;
        private parentUI: ui.WalletMeUI;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            this.comp = new ui.WalletManageUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
        }

        private goBack() {
            Laya.stage.removeChild(this.comp);
            Laya.stage.removeChild(this.parentUI);
            new view.WalletMe();
        }

        public setParentUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        public setData(data: Array<mod.walletMod>) {
            this.comp.list_wallet.array = data;
            this.comp.list_wallet.x = 1;
            this.comp.list_wallet.y = data.length;
            this.comp.list_wallet.vScrollBarSkin = "";
            this.comp.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
            this.comp.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
        }

        private onListRender(cell: Box, index: number) {
            var data: mod.walletMod = this.comp.list_wallet.array[index];
            let wImg = cell.getChildByName('img_wallet') as Image;
            wImg.skin = data.wSkin;
            let wName = cell.getChildByName('lab_wName') as Label;
            wName.text = data.wName;
            let wAddr = cell.getChildByName('lab_wAddr') as Label;
            wAddr.text = util.getAddr(data.wAddr);
            let wTotal = cell.getChildByName('lab_wTotal') as Label;
            wTotal.text = '0 ether';//test
        }

        private onSelect(index: number) {
            this.comp.visible = false;
            let wd = new view.WalletDetail();
            wd.setData(this.comp.list_wallet.array[index]);
            wd.setParetUI(this.comp);
        }
    }
}
