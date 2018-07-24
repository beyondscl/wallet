/**Created by the LayaAirIDE*/
module view.set {
    export class UpdatePass extends ui.set.UpdatePassUI {
        private comp: ui.set.UpdatePassUI;
        private parentUI: ui.WalletDetailUI;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setParentUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        private init() {
            this.comp = new ui.set.UpdatePassUI();
            Laya.stage.addChild(this.comp);
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.lab_save.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.stage.removeChild(this.comp);
                this.parentUI.visible = true;
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
            if (oldPass.length < 8) {
                new view.alert.info(config.msg.PASS_ERROR).popup();
                return;
            }
            let wal = service.walletServcie.getWallet(this.parentUI.lab_wName.text);
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
            wal.wPassword = util.md5WithSalt(pass);
            util.setItemJson(this.parentUI.lab_wName.text, wal.toJson());
            if (wal.wName == this.parentUI.lab_wName.text) {
                mod.userMod.defWallet.wPassword = wal.wPassword;
            }
            new view.alert.info(config.msg.REVER_PASS_SUCCESS).popup();
            this.comp.removeSelf();
            this.parentUI.visible = true;
        }
    }
}