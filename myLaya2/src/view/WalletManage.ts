/**Created by the LayaAirIDE*/
module view {
    import Image = Laya.Image;
    import Label = Laya.Label;

    export class WalletManage extends ui.WalletManageUI {
        public claName = "view.WalletManage";
        public comp: ui.WalletManageUI;
        private parentUI: view.WalletMe;

        private rended: Array<string> = [];

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setParentUI(parentUI: view.WalletMe) {
            this.parentUI = parentUI;
        }

        public setData(data: Array<mod.walletMod>) {
            this.comp.list_wallet.array = data;
            this.comp.list_wallet.vScrollBarSkin = "";
            this.comp.list_wallet.repeatY = data.length;
            this.comp.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
            // this.comp.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
        }

        private init() {
            this.comp = new ui.WalletManageUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this,2);
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_create.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.btn_import.on(Laya.Event.CLICK, this, this.btnClick, [3]);
        }
        private goBack(){
            Laya.stage.removeChild(this.comp);
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI,1);
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.goBack();
            }
            if (2 == index) {
                this.comp.visible = false;
                new view.CreateWallet().setParentUI(this);
            }
            if (3 == index) {
                this.comp.visible = false;
                new view.set.WalletImport().setParetUI(this);
            }
        }

        private onListRender(cell: Box, index: number) {
            cell.on(Laya.Event.CLICK, this, this.onSelect, [index]);

            var data: mod.walletMod = this.comp.list_wallet.array[index];
            let wImg = cell.getChildByName('img_wallet') as Image;
            wImg.skin = data.wSkin;
            let wName = cell.getChildByName('lab_wName') as Label;
            wName.text = data.wName;
            let wAddr = cell.getChildByName('lab_wAddr') as Label;
            wAddr.text = util.getAddr(data.wAddr);
            let wTotal = cell.getChildByName('lab_wTotal') as Label;
            if (!util.isContain(this.rended, wAddr.text)) {
                service.walletServcie.getWalletMoney(data.wName, wTotal);
                this.rended.push(wAddr.text);
            }
        }

        private initWalletTotal(wName: string) {
            let coins = service.walletServcie.getWallet(wName).wCoins;
        }

        private onSelect(index: number) {
            this.comp.visible = false;
            let wd = new view.WalletDetail();
            let walletMod: mod.walletMod = this.comp.list_wallet.array[index];
            walletMod.wAmount = this.comp.list_wallet.cells[index].getChildByName("lab_wTotal").text;
            wd.setData(walletMod);
            wd.setParetUI(this);
            util.putView(this);
        }
    }
}
