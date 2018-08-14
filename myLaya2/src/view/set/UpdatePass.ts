/**Created by the LayaAirIDE*/
module view.set {
    export class UpdatePass extends ui.set.UpdatePassUI {
        private comp: ui.set.UpdatePassUI;
        private parentUI: view.WalletDetail;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setParentUI(parentUI: view.WalletDetail) {
            this.parentUI = parentUI;
        }

        private init() {
            this.comp = new ui.set.UpdatePassUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this,2);
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.lab_save.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        }
        private goBack(){
            this.stage.removeChild(this.comp);
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI,2);
        }
        
        private btnClick(index: number) {
            if (1 == index) {
                this.goBack();
            }
            if (2 == index) {

                let opass = this.comp.lab_oldPass.text;
                let newPass = this.comp.lab_newPass.text;
                let passConf = this.comp.lab_confPass.text;
                this.updatePass(opass, newPass, passConf);
            }
            if (3 == index) {

            }
        }

        private updatePass(oldPass: string, pass: string, passconfi: string) {
            let wal = service.walletServcie.getWallet(this.parentUI.comp.lab_wName.text);
            if (!wal.wZjc) {
                new view.alert.info(config.msg.REVER_PASS_WARN).popup();
                return;
            }
            if (oldPass.length < 8) {
                new view.alert.info(config.msg.PASS_ERROR).popup();
                return;
            }
            if (util.md5WithSalt(oldPass) != wal.wPassword) {
                new view.alert.info(config.msg.PASS_ERROR).popup();
                return;
            }
            if (pass.length < 8) {
                new view.alert.info(config.msg.NEW_PASS_ERROR).popup();
                return;
            }
            if (passconfi != pass) {
                new view.alert.info(config.msg.PASS_CONF_ERROR).popup();
                return;
            }
            let wait = new view.alert.waiting(config.msg.WAIT_OPERATOR);
            wait.popup();
            service.walletServcie.resetPass(wal, pass, function (ret, args) {
                let wallet: mod.walletMod = args[0];
                let pass: string = args[1];
                let wait: view.alert.waiting = args[2];
                let v: view.set.UpdatePass = args[3];
                wait.stop();
                if (ret && ret.retCode == 0) {
                    let newKeystore = Laya.Browser.window.serialize();
                    wallet.wPassword = util.md5WithSalt(pass);
                    wallet.wKeyStore = newKeystore;
                    util.setItemJson(wallet.wName, wallet.toJson());
                    if (wallet.wName == mod.userMod.defWallet.wName) {
                        mod.userMod.defWallet.wPassword = wallet.wPassword;
                    }
                    new view.alert.info(config.msg.REVER_PASS_SUCCESS).popup();
                    v.comp.removeSelf();
                    v.parentUI.comp.visible = true;
                } else {
                    new view.alert.info(config.msg.REVER_PASS_ERROR).popup();
                }
            }, [wal, pass, wait, this]);
        }
    }
}