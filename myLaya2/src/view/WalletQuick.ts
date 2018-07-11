/**Created by the LayaAirIDE*/
module view {


    export class WalletQuick extends ui.WalletQuickUI {
        //最好不要再界面创建list，可能导致第一个item无法获取点击事件
        private listData;
        private parentUI: view.WalletMain;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setParentUI(parentUI: view.WalletMain) {
            this.parentUI = parentUI;
        }

        public initData(walletNames: Array<string>) {
            let lines = walletNames.length+1;
            let height = lines * 80;
            height = height > 600 ? 600 : height;

            this.list_wallet.height = height;
            this.list_wallet.vScrollBarSkin = '';
            this.list_wallet.repeatY = walletNames.length;
            this.list_wallet.array = walletNames;
            this.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
            this.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);

            this.box_btns.top = this.list_wallet.y+ this.list_wallet.height + 60;
             
        }

        private init() {
        }

        private initEvent() {
            this.lab_sao.on(Laya.Event.CLICK, this, this.btnClick, [1])
            this.lab_create.on(Laya.Event.CLICK, this, this.btnClick, [2])
        }

        private btnClick(index: number) {
            if (index == 1) {
                native.native.startCamara(this.startCamaraCb, [this.parentUI, this]);
            }
            if (index == 2) {
                this.close();
                this.parentUI.comp.visible = false;
                new CreateWallet().setParentUI(this.parentUI);
            }
        }

        private onListRender(cell: Box, index: number) {
            var data: string = this.list_wallet.array[index];
            let cImg = cell.getChildByName('img_wallet') as Laya.Image;
            let wallet: mod.walletMod = service.walletServcie.getWallet(data);
            cImg.skin = wallet.wSkin;
            let cName = cell.getChildByName('lab_wName') as Label;
            cName.text = data.replace(/([^]{8})([^]+)/, "$1...");

            let cImgBg = cell.getChildByName('img_bg') as Laya.Image;
            if(data==mod.userMod.defWallet.wName){
                cImgBg.skin = 'img/main/list_bg.png';
            }
        }

        private onSelect(index: number): void {
            let item = this.list_wallet.array[index];
            this.parentUI.initQueryData(service.walletServcie.getWallet(item))
            this.close();
        }

        //跳转到转账界面,是否针对特殊的二维码识别 比如imtoken,trust
        private startCamaraCb(resp, args) {
            let parentUI: view.WalletMain = args[0];
            let quick: Dialog = args[1];
            console.log("startCamaraCb", resp);
            try {
                resp = JSON.parse(resp);
                if (resp.type == 2 && resp.vender == 'WWEC') {
                    let addr = resp.address;
                    let amount = resp.amount;
                    let send = new WalletSend();
                    send.setParentUI(parentUI);
                    send.setData('ETH', Number(parentUI.getEthTotal()), amount, addr);
                    console.log('if ETH', amount, addr);
                } else {
                    let send = new WalletSend();
                    send.setParentUI(parentUI);
                    send.setData('ETH', Number(parentUI.getEthTotal()), 0, resp);//不识别的数据
                    console.log('else ETH', 0, resp);
                }
            } catch (error) {
                console.log("startCamaraCb error:", error)
                let send = new WalletSend();
                send.setParentUI(parentUI);
                send.setData('ETH', Number(parentUI.getEthTotal()), 0, resp);//不识别的数据
            }
            parentUI.comp.visible = false;
            quick.close();
        }
    }
}