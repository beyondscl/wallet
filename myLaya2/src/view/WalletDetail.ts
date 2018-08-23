/**Created by the LayaAirIDE*/
module view {
    export class WalletDetail extends ui.WalletDetailUI {
        public comp: ui.WalletDetailUI;
        public parentUI: view.WalletManage;
        private data: mod.walletMod;
        private EnterPass: view.alert.EnterPass;
        private info: view.alert.info;
        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(data: mod.walletMod) {
            this.data = data;
            this.comp.lab_wName.text = data.wName;
            this.comp.lab_wAddr.text = util.getAddr(data.wAddr);
            this.comp.lab_total.text = data.wAmount + ' ¥';
            this.comp.img_wImg.skin = config.resource.walletImg;
            this.comp.text_wName.text = data.wName;
            if (!data.wZjc) {
                this.comp.btn_backup.visible = false;
            }
        }

        public refresh(){
            this.data = service.walletServcie.getWallet(this.data.wName)
            this.setData(this.data);
        }

        public setParetUI(parentUI: view.WalletManage) {
            this.parentUI = parentUI;
        }

        public deleteCb(pass, v: view.WalletDetail) {
            let wName = v.comp.lab_wName.text;
            service.walletServcie.deleteWallet(wName, v);
        }

        private init() {
            this.comp = new ui.WalletDetailUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this,2);
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_save.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.box_reverpass.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.box_expSeckey.on(Laya.Event.CLICK, this, this.btnClick, [3]);
            this.comp.box_expKeystore.on(Laya.Event.CLICK, this, this.btnClick, [4]);
            this.comp.btn_delete.on(Laya.Event.CLICK, this, this.btnClick, [6]);
            this.comp.btn_backup.on(Laya.Event.CLICK, this, this.btnClick, [5]);
        }

        private goBack() {
            this.comp.removeSelf();
            this.parentUI.comp.visible = true;
            // this.EnterPass.stop();
            native.native.setCurrView(this.parentUI,2);
        }

        private btnClick(index: number) {
            if (1 == index) {
                if (this.comp.text_wName.text.length > 12) {
                    this.info = new view.alert.info('钱包名称不超过12个字符');
                    this.info.popup();
                    return
                }
                service.walletServcie.walletUpdateName(this.data.wName, this.comp.text_wName.text);
                this.parentUI.setData(service.walletServcie.getWallets());
                util.getMainView().initQueryData(mod.userMod.defWallet);
                this.goBack();
                return;
            }
            if (2 == index) {
                let updatePassUI = new view.set.UpdatePass();
                updatePassUI.setParentUI(this);
                this.comp.visible = false;
                return;
            }
            if (3 == index) {
                let enterPass = new view.alert.EnterPass();
                enterPass.setParentUI(this.comp);
                enterPass.setCallBack(this.exportPriKeyCb);
                enterPass.setWalName(this.comp.lab_wName.text);
                enterPass.popup(true, true)
                return;
            }
            if (4 == index) {
                let enterPass = new view.alert.EnterPass();
                enterPass.setParentUI(this.comp);
                enterPass.setCallBack(this.exportKeystoreCb);
                enterPass.setWalName(this.comp.lab_wName.text);
                enterPass.popup(true, true)
                return;
            }
            if (5 == index) {
                this.EnterPass = new view.alert.EnterPass()
                this.EnterPass.setParentUI(this);
                this.EnterPass.setCallBack(this.enterPassCb);
                this.EnterPass.setWalName(this.comp.lab_wName.text);
                this.EnterPass.popup()
                return;
            }
            if (6 == index) {
                this.EnterPass = new view.alert.EnterPass()
                this.EnterPass.setParentUI(this);
                this.EnterPass.setCallBack(this.deleteCb);
                this.EnterPass.setWalName(this.comp.lab_wName.text);
                this.EnterPass.setType(config.msg.OP_WAL_DELETE);
                this.EnterPass.popup()
                return;
            }
        }

        private enterPassCb(pass, v: view.WalletDetail) {
            v.comp.visible = false;
            let backupw = new view.WalletBackUp();
            backupw.setData(v.comp.lab_wName.text);
            backupw.setParetUI(v);
            util.clearView();
            util.putView(v);
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