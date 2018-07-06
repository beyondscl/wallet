/**Created by the LayaAirIDE*/
module view.set {
    export class WalletImport extends ui.set.WalletImportUI {
        private comp: ui.set.WalletImportUI;
        private parentUI: any;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            this.comp = new ui.set.WalletImportUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
        }

        private initEvent() {
            this.comp.tab.selectHandler = new Laya.Handler(this, this.onSelect);
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_sao.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.o_btn_import.on(Laya.Event.CLICK, this, this.btnClick, [3]);

        }

        private onSelect(index: number): void {
            this.comp.stack.selectedIndex = index;
        }

        public setData(key: string) {
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.comp.removeSelf();
                this.parentUI.visible = true;
            }
            if (3 == index) {//助记词导入
                let zjc = this.comp.o_text_zjc.text;
                let pass = this.comp.o_text_pass.text;
                let passConf = this.comp.o_text_confpass.text;
                if (this.checkArgs(zjc, pass, passConf)) {
                    this.importWallet();
                }
            }
        }

        private importWallet() {
            let load = new view.alert.waiting(config.msg.WAIT_CREATE_WALLET);
            load.popup();
            let walletName = 'import_' + util.randomString(6);
            let zjc = this.comp.o_text_zjc.text;
            let pass = this.comp.o_text_pass.text;
            service.walletServcie.importWallet(zjc, walletName, pass, this.creatWalletCb, [this.comp, load]);//异步
        }

        private checkArgs(zjc: string, pass: string, passConf: string) {
            if (!zjc || zjc.split(" ").length != 12) {
                this.comp.warn_zjc.visible = true;
                return false;
            }
            this.comp.warn_zjc.visible = false;
            if (!pass || pass.length < 8) {
                this.comp.warn_pass.visible = true;
                return false;
            }
            this.comp.warn_pass.visible = false;
            if (pass != passConf) {
                this.comp.warn_passconf.visible = true
                return false;
            }
            this.comp.warn_passconf.visible = false;
            return true;
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
                let appStore = util.getItem(config.prod.appKey);
                if (appStore) {
                    appStore[appStore.length] = wallet.wName;
                    util.setItemJson(config.prod.appKey, appStore);
                } else {
                    util.setItemJson(config.prod.appKey, [wallet.wName]);
                }
                let com = args[0] as View;
                com.removeSelf();//删除之前父类的comp
                let dialog = args[1] as view.alert.waiting;
                dialog.stop();
                new WalletMain().initQueryData(wallet);
                return;
            } else {
                let dialog = args[1] as view.alert.waiting;
                dialog.stop();
                new view.alert.Warn("导入钱包失败", "").popup();
                console.log("create wallet error!");
            }
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }
    }
}