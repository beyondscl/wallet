/**Created by the LayaAirIDE*/
module view {
    import Browser = Laya.Browser;

    export class CreateWallet extends ui.WalletCreateUI {
        private comp: ui.WalletCreateUI;
        private parentUI: any;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setParentUI(parentUI: any) {
            this.parentUI = parentUI;
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

            // this.comp.text_wall_name.on(Laya.Event.KEY_UP, this, this.checkWname);
            this.comp.text_pass.on(Laya.Event.KEY_UP, this, this.checkPass);
            // this.comp.text_pass_conf.on(Laya.Event.KEY_UP, this, this.checkPassConf);

            this.comp.href_ysfw.on(Laya.Event.CLICK, this, this.btn_click, [1]);//服务隐私条款
        }

        private btn_click(index: number) {
            if (1 == index) {
                this.comp.visible = false;
                let s = new view.info.Service();
                s.setParetUI(this.comp);
                s.setData("1");
                return;
            }
        }

        private goBack() {
            Laya.stage.removeChild(this.comp);
            this.parentUI == null ? new EnterApp() : (this.parentUI.comp ? this.parentUI.comp.visible = true : this.parentUI.visible = true);
        }

        private updateArgee() {
            this.comp.btn_create.disabled = !this.comp.check_argee.selected;
        }

        private createWallet() {
            if (this.checkArgs()) {
                let load = new view.alert.waiting(config.msg.WAIT_CREATE_WALLET);
                load.popup();
                service.walletServcie.creatWallet(this.comp.text_wall_name.text, this.comp.text_pass.text, this.creatWalletCb, [this.comp, load]);//异步
            }
        }

        //创建[切换]钱包在内存中设置默认钱包为当前钱包
        //args[0]:comp args[1]:loadingui
        private creatWalletCb(wName, wPass, mnemonicWord, ret, args: Array<any>) {
            if (ret && ret.retCode == 0) {
                let keystore = Laya.Browser.window.serialize();
                let wallet = new mod.walletMod();
                wallet.init(wName, wPass, "", keystore, ret.addresses[0], ['ETH', 'WWEC'], mnemonicWord);
                let walletJson = wallet.toJson();
                util.setItemJson(wallet.wName, walletJson);
                let appStore = util.getItem(config.prod.getAppKey());
                if (appStore) {
                    appStore[appStore.length] = wallet.wName;
                    util.setItemJson(config.prod.getAppKey(), appStore);
                } else {
                    util.setItemJson(config.prod.getAppKey(), [wallet.wName]);
                }
                let com = args[0] as View;
                com.removeSelf();
                let dialog = args[1] as view.alert.waiting;
                dialog.stop();
                new WalletMain().initQueryData(wallet);
                return;
            }
            console.log("create wallet error!");
        }

        private checkArgs(): boolean {
            if (this.checkWname() && this.alertPaa() && this.checkPass() && this.checkPassConf()) {
                return true;
            }
            return false;
        }

        private alertPaa() {
            let pass = this.comp.text_pass.text;
            if (pass.length < 8) {
                new view.alert.Warn("输入有误", "请输入不少于8位字符的密码").popup();
                return false;
            }
            return true;
        }

        private checkWname() {
            if (this.comp.text_wall_name.text.length < 1 || this.comp.text_wall_name.text.length > 12) {
                // this.comp.lab_warn_wName.text = "钱包名称长度1-12";
                // this.comp.lab_warn_wName.visible = true;
                new view.alert.Warn("输入有误", "钱包名称长度1-12").popup();
                return false;
            }
            if (service.walletServcie.checkDupWal(this.comp.text_wall_name.text)) {
                // this.comp.lab_warn_wName.text = "该钱包名称已经存在";
                // this.comp.lab_warn_wName.visible = true;
                new view.alert.Warn("输入有误", "钱包名称已经存在").popup();
                return false;
            }
            this.comp.lab_warn_wName.visible = false;
            return true;
        }

        private checkPass() {
            this.infoPassStrong();
            let pass = this.comp.text_pass.text;
            if (pass.length == 0) {
                this.comp.lab_pass.text = "不少于8个字符,建议混合大小写字母，数字，特殊字符";
                this.comp.lab_pass.visible = true;
                return false;
            }
            if (util.getPassScore(pass) <= 1) {
                this.comp.lab_pass.text = "密码强度太弱，极易被黑客破解";
                this.comp.lab_pass.visible = true;
            }
            if (this.comp.text_pass.text.length >= 8) {
                if (util.getPassScore(pass) <= 1) {
                    this.comp.lab_pass.text = "密码强度太弱，极易被黑客破解";
                    this.comp.lab_pass.visible = true;
                } else {
                    this.comp.lab_pass.visible = false;
                }
                return true;
            } else {
                return false;
            }
        }

        private checkPassConf() {
            if (this.comp.text_pass_conf.text != this.comp.text_pass.text) {
                new view.alert.Warn("输入有误", "输入密码不一致，请重新输入").popup();
                // this.comp.lab_pass_conf.text = "两次密码不一致";
                // this.comp.lab_pass_conf.visible = true;
                return false;
            }
            this.comp.lab_pass_conf.visible = false;
            return true;
        }

        private infoPassStrong() {
            let pass = this.comp.text_pass.text.trim();

            this.comp.lab_pass_level.visible = true;
            this.comp.lab_words.text = this.comp.text_pass.text.trim().length + '个字符';

            if (util.getPassScore(pass) == 4) {
                this.comp.lab_pass_level.text = '非常安全';
                util.getPassLevel(this.comp.box_pass_level, 3);
                this.comp.lab_pass_level.color = '#5eb0c2';
                this.comp.lab_pass.visible = false;
                this.comp.lab_words.visible = true;
                return;
            }
            if (util.getPassScore(pass) == 3) {
                this.comp.lab_pass_level.text = '强';
                util.getPassLevel(this.comp.box_pass_level, 2);
                this.comp.lab_pass_level.color = '#5eb0c2';
                this.comp.lab_pass.visible = false;
                this.comp.lab_words.visible = true;
                return;
            }
            if (util.getPassScore(pass) == 2) {
                util.getPassLevel(this.comp.box_pass_level, 1);
                this.comp.lab_pass_level.text = '一般';
                this.comp.lab_pass_level.color = '#5eb0c2';
                this.comp.lab_pass.visible = false;
                this.comp.lab_words.visible = true;
                return;
            }
            if (util.getPassScore(pass) == 1) {
                util.getPassLevel(this.comp.box_pass_level, 0);
                this.comp.lab_pass_level.text = '弱';
                this.comp.lab_pass_level.color = 'red';
                this.comp.lab_pass.visible = true;
                this.comp.lab_words.visible = false;
                return;
            }
            util.getPassLevel(this.comp.box_pass_level, -1);
            this.comp.lab_pass_level.text = '很弱';
            this.comp.lab_pass_level.color = 'red';
            this.comp.lab_pass.visible = true;
            this.comp.lab_words.visible = false;
        }

        private importWallet() {
            this.comp.visible = false;
            new view.set.WalletImport().setParetUI(this.comp);
        }

        private webViewHref(): void {
            Browser.window['conch'] && Browser.window['conch'].showAssistantTouch(false);
            var ctx: any = Browser.window.document.createElement('canvas').getContext('2d');

            function render(): void {
                ctx.fillStyle = 'black';
                ctx.fillRect(0, 0, Browser.window.innerWidth, Browser.window.innerHeight);
                Laya.Browser.window.requestAnimationFrame(render);
            };
            Browser.window.requestAnimationFrame(render);
            Browser.window.document.addEventListener('touchstart', function (): void {
                if (Laya.Browser.window['conch']) {
                    var l: number = 500;
                    var t: number = 500;
                    var w: Number = Browser.window.innerWidth - l * 2;
                    var h: Number = Browser.window.innerHeight - t * 2;
                    Laya.Browser.window['conch'].setExternalLinkEx('http://www.layabox.com', l, t, w, h, true);
                }
            });
        }


    }
}