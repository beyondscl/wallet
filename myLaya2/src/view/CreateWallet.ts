/**Created by the LayaAirIDE*/
module view {
    export class CreateWallet extends ui.WalletCreateUI {
        private comp: ui.WalletCreateUI;
        private parentUI: any;
        private isAgreeImgs: Array<string> = ["img/icon_box-empty.png", "img/icon_box-checked.png"];

        constructor() {
            super();
            this.init();
            Laya.loader.load(this.isAgreeImgs, Laya.Handler.create(this, this.initEvent));
        }

        private init() {
            this.comp = new ui.WalletCreateUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.check_argee.on(Laya.Event.CLICK, this, this.updateArgee);
            this.comp.btn_create.on(Laya.Event.CLICK, this, this.createWallet);
            this.comp.btn_import.on(Laya.Event.CLICK, this, this.importWallet);
            this.comp.text_pass.on(Laya.Event.KEY_UP, this, this.infoPassStrong);
            this.comp.text_pass_conf.on(Laya.Event.KEY_UP, this, this.confPass);
        }

        public setParentUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        private goBack() {
            Laya.stage.removeChild(this.comp);
            this.parentUI == null ? new EnterApp() : this.parentUI.visible = true;
        }

        private updateArgee() {
            this.comp.btn_create.disabled = this.comp.check_argee.selected;
            this.comp.btn_create.mouseEnabled = this.comp.check_argee.selected;
        }

        private createWallet() {
            if (this.checkArgs()) {
                Laya.stage.removeChild(this.comp);
                let wallet = service.walletServcie.creatWallet(this.comp.text_wall_name.text, this.comp.text_pass.text);
                new view.WalletMain().initQueryData(wallet);
            }
        }

        private checkArgs(): boolean {
            let warnColor = '#c82624';
            if (this.comp.text_wall_name.text.length < 3 || this.comp.text_wall_name.text.length > 20) {
                this.comp.lab_warn_wName.text = "钱包名称:长度2-20";
                this.comp.lab_warn_wName.color = warnColor;
                this.comp.lab_warn_wName.visible = true;
                return false;
            }
            if (service.walletServcie.checkDupWal(this.comp.text_wall_name.text)) {
                this.comp.lab_warn_wName.text = "该钱包名称已经存在";
                this.comp.lab_warn_wName.color = warnColor;
                this.comp.lab_warn_wName.visible = true;
                return false;
            }
            this.comp.lab_warn_wName.visible = false;
            if (this.comp.text_pass.text.length < 8 || this.comp.text_pass.text.length > 20) {
                this.comp.lab_pass.text = "密码:长度8-20";
                this.comp.lab_pass.color = warnColor;
                this.comp.lab_pass.visible = true;
                return false;
            }
            this.comp.lab_pass.visible = false;
            if (this.comp.text_pass_conf.text != this.comp.text_pass.text) {
                this.comp.lab_pass_conf.text = "两次密码不一致";
                this.comp.lab_pass_conf.color = warnColor;
                this.comp.lab_pass_conf.visible = true;
                return false;
            }
            this.comp.lab_pass_conf.visible = false;
            return true;
        }

        private confPass() {
            let warnColor = '#c82624';
            if (this.comp.text_pass_conf.text != this.comp.text_pass.text) {
                this.comp.lab_pass_conf.text = "两次密码不一致";
                this.comp.lab_pass_conf.color = warnColor;
                this.comp.lab_pass_conf.visible = true;
                return;
            }
            this.comp.lab_pass_conf.visible = false;
        }

        private infoPassStrong() {
            let pass = this.comp.text_pass.text;
            this.comp.lab_pass_level.visible = true;
            // let week = '^[a-zA-Z]*$';//字母/数字:弱
            // let week2 = '^[0-9]*$';//字母/数字:弱
            let middle = '(?=^.{8,20}$)(?=(?:.*?\d))(?=.*[a-z])(?=.*[A-Z])';//字母数字大小写:中
            let strong = '(?=^.{8,20}$)(?=(?:.*?\d))(?=.*[a-z])(?=.*[A-Z])(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})';
            ;//字母数字大小写特殊符号
            if (new RegExp(strong).test(pass)) {
                this.comp.lab_pass_level.text = '密码强度：强';
                this.comp.lab_pass_level.color = 'green';
                this.comp.lab_pass.visible = false;
                return;
            }
            if (new RegExp(middle).test(pass)) {
                this.comp.lab_pass_level.text = '密码强度：中';
                this.comp.lab_pass_level.color = 'yellow';
                this.comp.lab_pass.visible = true;
                return;
            }
            let warnColor = '#c82624';
            this.comp.lab_pass.text = "建议使用大小写字母，数字，特殊字符混合";
            this.comp.lab_pass.color = warnColor;
            this.comp.lab_pass.visible = true;

            this.comp.lab_pass_level.text = '密码强度：弱';
            this.comp.lab_pass_level.color = 'red';
        }

        private importWallet() {
            this.comp.visible = false;
            new view.set.WalletImport().setParetUI(this.comp);
        }
    }
}