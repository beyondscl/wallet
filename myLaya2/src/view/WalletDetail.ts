/**Created by the LayaAirIDE*/
module view {
    export class WalletDetail extends ui.WalletDetailUI {
        private comp: ui.WalletDetailUI;
        private parentUI: ui.WalletManageUI;
        private data: mod.walletMod;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            this.comp = new ui.WalletDetailUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_save.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.box_reverpass.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.box_expSeckey.on(Laya.Event.CLICK, this, this.btnClick, [3]);
            this.comp.box_expKeystore.on(Laya.Event.CLICK, this, this.btnClick, [4]);
            this.comp.btn_backup.on(Laya.Event.CLICK, this, this.btnClick, [5]);
        }

        private goBack() {
            this.stage.removeChild(this.comp);
            this.stage.removeChild(this.parentUI);
            let wm = new view.WalletManage()
            wm.setData(service.walletServcie.getWallets());

        }

        private btnClick(index: number) {
            if (1 == index) {
                service.walletServcie.walletUpdateName(this.data.wName, this.comp.text_wName.text);
                this.stage.removeChild(this.comp);
                this.stage.removeChild(this.parentUI);
                let wm = new view.WalletManage()
                wm.setData(service.walletServcie.getWallets());
                return;
            }
            if (2 == index) {
                let updatePassUI = new view.set.UpdatePass();
                updatePassUI.setParentUI(this.comp);
                this.comp.visible = false;
                return;
            }
            if (3 == index) {
                let enterPass = new view.alert.EnterPass();
                enterPass.setParentUI(this.comp);
                enterPass.setCallBack(this.exportPriKeyCb);
                enterPass.popup(true, true)
                return;
            }
            if (4 == index) {
                let enterPass = new view.alert.EnterPass();
                enterPass.setParentUI(this.comp);
                enterPass.setCallBack(this.exportKeystoreCb);
                enterPass.popup(true, true)
                return;
            }
            if (5 == index) {
                let p = new alert.EnterPass()
                p.setParentUI(this.comp);
                p.setCallBack(this.enterPassCb);
                p.popup()
                return;
            }
        }

        private enterPassCb(pass, comp: ui.WalletDetailUI) {
            comp.visible = false;
            let backupw = new view.WalletBackUp();
            backupw.setData(comp.lab_wName.text);
            backupw.setParetUI(comp);
        }

        public setData(data: mod.walletMod) {
            this.data = data;
            this.comp.lab_wName.text = data.wName;
            this.comp.lab_wAddr.text = util.getAddr(data.wAddr);
            this.comp.lab_total.text = '0.00 $USDT';
            this.comp.img_wImg.skin = config.resource.walletImg;
            this.comp.text_wName.text = data.wName;
        }

        public setParetUI(parentUI: ui.WalletManageUI) {
            this.parentUI = parentUI;
        }

        //这里的comp需要重新传值回来
        private exportPriKeyCb(pass: string, comp: any) {
            if (service.walletServcie.checkPassword(pass)) {
                let wallet = service.walletServcie.getWallet(comp.lab_wName.text);
                let epk = new view.alert.ExportPriKey();
                epk.setData(wallet.wPrivateKey);
                epk.popup(true, true);
            }
        }

        private exportKeystoreCb(pass: string, comp: any) {
            if (service.walletServcie.checkPassword(pass)) {
                //生成二维码
                let wallet = service.walletServcie.getWallet(comp.lab_wName.text);
                let epk = new view.set.ExpKeystore();
                epk.setData(wallet.wKeyStore);
                epk.setParetUI(comp);
                comp.visible = false;
            }
        }
    }
}