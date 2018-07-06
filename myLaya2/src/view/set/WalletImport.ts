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

        public setData(key: string) {
        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
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
            this.comp.o_check_agree.on(Laya.Event.CLICK, this, this.btnClick, [4]);
            this.comp.getChildByName("lab_service").on(Laya.Event.CLICK, this, this.btnClick, [5]);
        }

        private onSelect(index: number): void {
            this.comp.stack.selectedIndex = index;
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
            if (4 == index) {
                this.comp.o_btn_import.disabled = !this.comp.o_check_agree.selected;
            }
            if (5 == index) {
                this.comp.visible = false;
                let s = new view.info.Service();
                s.setParetUI(this.comp);
                s.setData("1");
                return;
            }
        }

        private importWallet() {
            let load = new view.alert.waiting(config.msg.WAIT_IMPORT_WALLET);
            load.popup();
            let walletName = 'import_' + util.randomString(6);
            let zjc = this.comp.o_text_zjc.text;
            let pass = this.comp.o_text_pass.text;
            service.walletServcie.importWallet(zjc, walletName, pass, this.creatWalletCb, [this.comp, load]);//异步
        }

        private checkArgs(zjc: string, pass: string, passConf: string) {
            if (!zjc || zjc.split(" ").length != 12 || !service.walletServcie.vilMemoryWork(zjc)) {
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

        //args[0]:comp args[1]:loadingui
        private creatWalletCb(wName, wPass, mnemonicWord, ret, args: Array<any>) {
            let dialog = args[1] as view.alert.waiting;
            dialog.stop();
            if (ret && ret.retCode == 0) {
                let keystore = Laya.Browser.window.serialize();
                let wallet = new mod.walletMod();
                wallet.init(wName, wPass, "", keystore, ret.addresses[0], ['ETH', 'WWEC'], mnemonicWord);
                let allWallets = service.walletServcie.getWallets();
                if (allWallets) {//判断是否存在
                    for (let i = 0; i < allWallets.length; i++) {
                        let w = allWallets[i] as mod.walletMod;
                        if (w.wAddr && w.wAddr == wallet.wAddr) {//一定要在初始化数据mod后再判断 0x
                            new view.alert.Warn("导入钱包失败", "钱包 " + w.wName + " 已经存在").popup();
                            return;
                        }
                    }
                }
                //记录数据
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
                new WalletMain().initQueryData(wallet);
                return;
            } else {
                new view.alert.Warn("导入钱包失败", "").popup();
                console.log("create wallet error!");
            }
        }
    }
}