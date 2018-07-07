/**Created by the LayaAirIDE*/
module view.info {
    export class Candy extends ui.info.CandyUI {
        private comp: ui.info.CandyUI;
        private parentUI: View;

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

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        private init() {
            this.comp = new ui.info.CandyUI();
            Laya.stage.addChild(this.comp);
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

        private btnClick(index: number) {
            if (1 == index) {
                this.comp.removeSelf();
                this.parentUI.visible = true;
                return;
            }
            if (2 == index) {//发送获取糖果请求
                if (this.checkArgs()) {
                    let phone = this.comp.text_phone.text;
                    let code = this.comp.text_code.text;
                    let wName = this.getSelectedItem();
                    let wallet: mod.walletMod = service.walletServcie.getWallet(wName);
                    let wAddr = wallet.wAddr;
                    new net.HttpRequest().sendPost(config.prod.getCandy, "phoneNumber=" + phone + "&address=" + wAddr + "&vcode=" + code, this.callBack, [2]);
                }
                return;
            }
            if (3 == index) { //get code
                if (util.vilPhoneNumber(this.comp.text_phone.text)) {
                    this.comp.warn_phone.visible = false;
                    let phone = this.comp.text_phone.text;
                    new net.HttpRequest().sendPost(config.prod.getCode, 'phoneNumber=' + phone, this.callBack, [1]);
                } else {
                    this.comp.warn_phone.visible = true;
                }
                return;
                // "a=b,b=c"
            }
        }

        private callBack(ret, args) {
            let type: number = args[0];
            if (ret && ret.retCode == 0) {
                let msg = ret.retMsg.msg;
                new view.alert.Warn(msg, "").popup();
            } else {
                new view.alert.Warn(ret.reason, "").popup();
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
            ;
            let warn_list = this.comp.warn_list;
            ;
            if (!phone || !util.vilPhoneNumber(phone)) {
                warn_phone.visible = true;
                return false;
            }
            warn_phone.visible = false;
            if (!code || code.length != 6) {
                warn_code.visible = true;
                return false;
            }
            warn_code.visible = false;
            if (!this.getSelectedItem()) {
                warn_list.visible = true;
                return false;
            }
            warn_list.visible = false;
            return true;
        }
    }
}