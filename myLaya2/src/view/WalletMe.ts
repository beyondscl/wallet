/**Created by the LayaAirIDE*/
module view {
    export class WalletMe extends ui.WalletMeUI {
        public claName = 'view.WalletMe';
        public comp: ui.WalletMeUI;
        private parenUI: view.WalletMain;
        private wait: view.alert.waiting;

        private pageNo = 1;
        private pageSize = 10;
        // private noticeData = []
        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setParentUI(main: view.WalletMain) {
            this.parenUI = main;
        }

        private init() {
            this.comp = new ui.WalletMeUI();
            Laya.stage.addChild(this.comp);
            this.comp.lab_wel.text = mod.userMod.userName;
            native.native.setCurrView(this,1);
            service.walletServcie.getNotice(this.pageNo, this.pageSize, this.NoticeHisCb, this);
            util.setMeView(this);
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
            this.comp.btn_notice.on(Laya.Event.CLICK, this, this.tabSelect, [8]);
            this.comp.btn_smartcat.on(Laya.Event.CLICK, this, this.tabSelect, [9]);
        }

        private initQueryData() {

        }

        private queryCallBack() {

        }

        private tabSelect(index: number): void {
            if (index == 1) {
                // new view.WalletMe();
            }
            if (index == 0) {
                this.comp.visible = false;
                this.parenUI.comp.visible = true;
            }
            if (index == 2) {
                this.comp.visible = false;
                let datas = service.walletServcie.getDealList();
                new view.TransHisList().setData(datas, this);
            }
            if (index == 3) {
                this.comp.visible = false;
                let wm = new view.WalletManage()
                wm.setParentUI(this);
                wm.setData(service.walletServcie.getWallets());
            }
            if (index == 4) {
                this.comp.visible = false;
                new view.info.about().setParetUI(this);
            }
            if (index == 5) {
                new view.alert.info(config.msg.CANDY_NO).popup();
                return;
                // this.comp.visible = false;
                // let candy = new view.info.Candy();
                // candy.setParetUI(this);
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
            if (index == 8) {
                this.comp.visible = false;
                this.comp.noticeIcon.visible = false;
                new view.WalletNotice().setParentUI(this);
            }
            if (index == 9) {
                this.comp.visible = false
                new view.SmartCat().setParentUI(this.parenUI)
            }
        }

        //必须允许登出成功
        private logoutCb(ret, v: view.WalletMe) {
            v.wait.stop();
            v.comp.removeSelf();
            let userLogin = new view.user.UserLogin();
            userLogin.checkAutoLogin();
            native.native.setCurrView(userLogin,1);

            let main = util.getMainView()
            Laya.timer.clearAll(main);
            main.comp.removeSelf();

            util.setMainView(null);
            util.setMeView(null);
        }

        private NoticeHisCb (ret, v: view.WalletMe) {
            try {
                ret = JSON.parse(ret);
                if (ret && ret.retCode == 0) {
                    let noticeHis = util.getItem(config.prod.notice) || [];
                    if (noticeHis.length ==0 && ret.data.list.length != 0) {
                        v.comp.noticeIcon.visible = true;
                        // v.noticeData = ret.data.list;
                        util.setItemJson(config.prod.notice, ret.data.list);
                        return
                    } else {
                        for (var i = 0;i<ret.data.list.length;i++) {
                            for (var j = 0;j<noticeHis.length;j++) {
                                if (ret.data.list[i].title != noticeHis[j].title) {
                                    v.comp.noticeIcon.visible = true;
                                }
                            }
                        }
                        util.setItemJson(config.prod.notice, ret.data.list);
                        // v.noticeData = ret.data.list;
                    }
                }
            } catch (err) {
                console.log("Notice request: " + err);
            }
        }
    }
}