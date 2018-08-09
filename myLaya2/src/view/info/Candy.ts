/**Created by the LayaAirIDE*/
module view.info {
    export class Candy extends ui.info.CandyUI {
        private comp: ui.info.CandyUI;
        private parentUI: view.WalletMe;
        private _timeInter = config.prod.smsTimeInterval
        private waiting: view.alert.waiting;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(data: Array<mod.walletMod>) {
            this.comp.list_wallet.array = data;
            this.comp.list_wallet.x = 1;
            this.comp.list_wallet.y = data.length;
            this.comp.list_wallet.vScrollBarSkin = "";
            this.comp.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
            this.comp.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
        }

        public setParetUI(parentUI: view.WalletMe) {
            this.parentUI = parentUI;
        }

        public changTime(btn: Laya.Button) {
            btn.disabled = true;
            let text = config.msg.SENDED_CODE + "(" + this._timeInter + ")";
            btn.label = text;
            this._timeInter--;
            if (this._timeInter < 0) {
                Laya.timer.clear(this, this.changTime);
                btn.label = config.msg.SEND_CODE;
                btn.disabled = false;
                this._timeInter = this._timeInter;
            }
        }

        private init() {
            this.comp = new ui.info.CandyUI();
            Laya.stage.addChild(this.comp);
            this.comp.text_phone.text = mod.userMod.userName;
            native.native.setCurrView(this,2)
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_apply.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.btn_getcode.on(Laya.Event.CLICK, this, this.btnClick, [3]);
        }

        private onListRender(cell: Box, index: number) {
            var data: mod.walletMod = this.comp.list_wallet.array[index];
            let wImg = cell.getChildByName('img_wallet') as Laya.Image;
            wImg.skin = data.wSkin;
            let wName = cell.getChildByName('lab_wName') as Label;
            wName.text = data.wName;
            let wAddr = cell.getChildByName('lab_wAddr') as Label;
            wAddr.text = util.getAddr(data.wAddr);
            let radio = cell.getChildByName('radio') as Laya.Radio;
        }
        private goBack(){
            this.comp.removeSelf();
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI,1)
        }

        private btnClick(index: number) {
            if (1 == index) {
                this.goBack();
                return;
            }
            if (2 == index) {//发送获取糖果请求
                if (this.checkArgs()) {
                    this.waiting = new view.alert.waiting(config.msg.GET_CANDY);
                    this.waiting.popup();
                    let phone = this.comp.text_phone.text;
                    let code = this.comp.text_code.text;
                    let wName = this.getSelectedItem();
                    let wallet: mod.walletMod = service.walletServcie.getWallet(wName);
                    let wAddr = wallet.wAddr;
                    service.userServcie.getCandy(phone, wAddr, code, this.callBack, this);
                }
                return;
            }
            if (3 == index) {
                if (util.vilPhoneNumber(this.comp.text_phone.text)) {
                    this.comp.warn_phone.visible = false;
                    let phone = this.comp.text_phone.text;
                    service.userServcie.sendCandySms(phone, this.callBack, this);
                    Laya.timer.loop(1000, this, this.changTime, [this.comp.btn_getcode]);

                } else {
                    new view.alert.info(config.msg.PHONE_ERROR).popup();
                }
                return;
            }
        }

        private callBack(ret, v) {
            if (v && v.waiting) {
                v.waiting.stop();
            }
            ret = JSON.parse(ret)
            if (ret && ret.retCode == 0) {
                new view.alert.info(ret.retMsg.msg).popup();
            } else {
                new view.alert.info(ret.reason).popup();
            }
        }

        private onSelect(index: number) {
            let childs = this.comp.list_wallet.cells;
            for (let i = 0; i < childs.length; i++) {
                let radio = childs[i].getChildByName('radio') as Laya.Radio;
                if (i != index) {
                    radio.selected = false;
                } else {
                    radio.selected = true;
                }
            }
        }

        private getSelectedItem() {
            let childs = this.comp.list_wallet.cells;
            for (let i = 0; i < childs.length; i++) {
                let radio = childs[i].getChildByName('radio') as Laya.Radio;
                if (radio.selected) {
                    return childs[i].getChildByName('lab_wName').text;
                }
            }
            return null;
        }

        private checkArgs() {
            let phone = this.comp.text_phone.text;
            let warn_phone = this.comp.warn_phone;
            let code = this.comp.text_code.text;
            let warn_code = this.comp.warn_code;
            let warn_list = this.comp.warn_list;
            if (!phone || !util.vilPhoneNumber(phone)) {
                // new view.alert.info(config.msg.PHONE_ERROR).popup();
                // return false;
            }
            warn_phone.visible = false;
            if (!code || code.length != 6) {
                // new view.alert.info(config.msg.VCODE_ERROR).popup();
                // return false;
            }
            warn_code.visible = false;
            if (!this.getSelectedItem()) {
                new view.alert.info(config.msg.SELECT_ERROR).popup();
                return false;
            }
            warn_list.visible = false;
            return true;
        }
    }
}