/**Created by the LayaAirIDE*/
module view.user {
    export class UseInvite extends ui.user.UseInviteUI {
        public comp: ui.user.UseInviteUI;
        private parentUI: view.WalletMe;

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

        public setSelectedWaddr(wName: string) {
            this.comp.lab_selectw.visible = false;
            this.comp.box_wal.visible = true;

            let wal = service.walletServcie.getWallet(wName);
            mod.userMod.addr = wal.wAddr;

            this.comp.lab_addr.text = util.getAddr(wal.wAddr);
            this.comp.lab_wname.text = wal.wName;

            service.userServcie.setMainAddr(wal.wAddr, function (ret, a) {
                ret = JSON.parse(ret)
                if (ret && ret.retCode == 0) {
                    new view.alert.info(ret.retMsg.msg).popup();
                } else {
                    console.error("setSelectedWaddr error:", ret.reason)
                    new view.alert.info(ret.reason).popup();
                }
            }, []);
        }

        private init() {
            this.comp = new ui.user.UseInviteUI();
            Laya.stage.addChild(this.comp);

            this.comp.lab_invid_count.text = mod.userMod.invitedNum;
            this.comp.lab_invid_code.text = mod.userMod.code;

            this.comp.box_wal.visible = false;
            this.comp.lab_selectw.visible = false;

            let wallets: Array<string> = util.getItem(config.prod.getAppKey());
            //如果已经设置了，反显
            if (mod.userMod.addr) {
                let wName = '钱包被删除，请重新导入或重新选择钱包';
                let wals = service.walletServcie.getWallets();
                for (let i = 0; i < wals.length; i++) {
                    if (wals[i].wAddr == mod.userMod.addr) {
                        wName = wals[i].wName;
                    }
                }
                this.comp.lab_addr.text = util.getAddr(mod.userMod.addr);
                this.comp.lab_wname.text = wName;
                let url = config.prod.downLoadUrl + "?code=" + mod.userMod.code;
                util.createEwm(this.comp.img_ewm.width, this.comp.img_ewm.height, url, this, this.getImgSrc);
                this.comp.box_wal.visible = true;
                // }else if(wallets&&wallets.length==1){//只有一个默认选择
                //     let wal = mod.userMod.defWallet;//必定是当前钱包
                //     let name = wal.wName;
                //     let addr = wal.wAddr;
                //     this.comp.lab_addr.text = util.getAddr(addr);
                //     this.comp.lab_wname.text = name;
                //     let url = config.prod.downLoadUrl + "?code="+mod.userMod.code;
                //     util.createEwm(this.comp.img_ewm.width, this.comp.img_ewm.height, url, this, this.getImgSrc);
                //     this.comp.box_wal.visible = true;
            } else {//未设置
                this.comp.lab_selectw.visible = true;
                util.createEwm(this.comp.img_ewm.width, this.comp.img_ewm.height, config.prod.downLoadUrl, this, this.getImgSrc);
            }
        }

        private getImgSrc(qrcode: any) {
            if (qrcode && qrcode._oDrawing._elImage.src) {
                Laya.timer.clearAll(this);
                this.comp.img_ewm.skin = qrcode._oDrawing._elImage.src;
            }
        }

        private initEvent() {
            this.comp.lab_selectw.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.box_wal.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_copy.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [3]);

        }

        private btnClick(index: number) {
            if (3 == index) {
                this.comp.removeSelf();
                this.parentUI.comp.visible = true;
            }
            if (2 == index) {
                util.getCopyValue(mod.userMod.code, function (a) {
                }, []);
                this.comp.btn_copy.label = '已复制';
            }
            if (1 == index) {
                this.comp.visible = false;
                let select = new view.info.SelectWallet();
                select.setParetUI(this);
                select.setData(service.walletServcie.getWallets(), mod.userMod.addr);
            }
        }
    }
}