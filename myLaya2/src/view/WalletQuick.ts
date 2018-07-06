/**Created by the LayaAirIDE*/
module view {
    import Handler = Laya.Handler;

    export class WalletQuick extends ui.WalletQuickUI {
        //最好不要再界面创建list，可能导致第一个item无法获取点击事件
        private listData;
        private parentUI: ui.WalletMainUI;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
        }

        private initEvent() {
            this.lab_sao.on(Laya.Event.CLICK, this, this.btnClick, [1])
            this.lab_create.on(Laya.Event.CLICK, this, this.btnClick, [2])
        }

        private btnClick(index: number) {
            if (index == 1) {
            }
            if (index == 2) {
                this.close();
                this.parentUI.visible = false;
                new CreateWallet().setParentUI(this.parentUI);
            }
        }

        public setParentUI(parentUI: ui.WalletMainUI) {
            this.parentUI = parentUI;
        }

        public initData(walletNames: Array<string>) {
            let lines = walletNames.length;
            let height = lines * 80;
            height = height > 600 ? 600 : height;

            // this.list_wallet.height = height;
            this.list_wallet.array = walletNames;
            this.list_wallet.repeatY = walletNames.length;
            this.list_wallet.repeatX = 1;
            this.list_wallet.vScrollBarSkin = "";
            this.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
            this.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
            // this.box_btns.top = this.list_wallet.y + this.list_wallet.height+100;

        }

        private onListRender(cell: Box, index: number) {
            var data: string = this.list_wallet.array[index];
            let cImg = cell.getChildByName('img_wallet') as Laya.Image;
            let wallet: mod.walletMod = service.walletServcie.getWallet(data);
            cImg.skin = wallet.wSkin;
            let cName = cell.getChildByName('lab_wName') as Label;
            cName.text = data.replace(/([^]{8})([^]+)/, "$1...");
            ;
        }

        private onSelect(index: number): void {
            let item = this.list_wallet.array[index];
            this.stage.removeChild(this.parentUI);
            new view.WalletMain().initQueryData(service.walletServcie.getWallet(item));
            this.close(null, true);
        }
    }
}