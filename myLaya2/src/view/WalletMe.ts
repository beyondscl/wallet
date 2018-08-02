/**Created by the LayaAirIDE*/
module view {
    export class WalletMe extends ui.WalletMeUI {
        public comp: ui.WalletMeUI;
        private parenUI: ui.WalletMainUI
        private wait: view.alert.waiting;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setParentUI(main: ui.WalletMainUI) {
            this.parenUI = main;
        }

        private init() {
            this.comp = new ui.WalletMeUI();
            Laya.stage.addChild(this.comp);
            this.comp.lab_wel.text = mod.userMod.userName;
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private initEvent() {
            this.comp.btn_assets.on(Laya.Event.CLICK, this, this.tabSelect, [0]);
            this.comp.btn_me.on(Laya.Event.CLICK, this, this.tabSelect, [1]);
            this.comp.btn_dealHistory.on(Laya.Event.CLICK, this, this.tabSelect, [2]);
            this.comp.btn_manageWal.on(Laya.Event.CLICK, this, this.tabSelect, [3]);
            this.comp.btn_about.on(Laya.Event.CLICK, this, this.tabSelect, [4]);
            this.comp.btn_lqtg.on(Laya.Event.CLICK, this, this.tabSelect, [5]);
            this.comp.btn_logout.on(Laya.Event.CLICK, this, this.tabSelect, [6]);
            this.comp.btn_invid.on(Laya.Event.CLICK, this, this.tabSelect, [7]);
        }

        private initQueryData() {

        }

        private queryCallBack() {

        }

        private tabSelect(index: number): void {
            if (index == 1) {
                // new view.WalletMe();
            }
            if (index == 0) {//稍微优化了一下。
                this.stage.removeChild(this.comp);
                if (this.parenUI) {
                    this.parenUI.visible = true;
                } else {
                    new view.WalletMain().initQueryData(mod.userMod.defWallet);
                }
            }
            if (index == 2) {
                this.comp.visible = false;
                let datas = service.walletServcie.getDealList();
                new view.TransHisList().setData(datas, this.comp);
            }
            if (index == 3) {
                this.comp.visible = false;
                let wm = new view.WalletManage()
                wm.setParentUI(this.comp);
                wm.setData(service.walletServcie.getWallets());
            }
            if (index == 4) {
                this.comp.visible = false;
                new view.info.about().setParetUI(this.comp);
            }
            if (index == 5) {
                new view.alert.info(config.msg.CANDY_NO).popup();
                return;
                // this.comp.visible = false;
                // let candy = new view.info.Candy();
                // candy.setParetUI(this.comp);
                // candy.setData(service.walletServcie.getWallets());
            }
            if (index == 6) {
                util.delItem(config.prod.appUserKey);

                this.wait = new view.alert.waiting(config.msg.WAIT_LOGOUT);
                this.wait.popup();
                service.userServcie.userLogout(this.logoutCb, this);
            }
            if (index == 7) {
                this.comp.visible = false;
                new view.user.UserInvite().setParetUI(this);
            }
        }

        //必须允许登出成功
        private logoutCb(ret, v: view.WalletMe) {
            v.wait.stop();
            v.comp.removeSelf();
            new view.user.UserLogin().checkAutoLogin();

            let main = util.getMainView()
            Laya.timer.clearAll(main);
            main.comp.removeSelf();
        }
    }
}