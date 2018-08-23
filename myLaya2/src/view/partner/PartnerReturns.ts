module view.partner {
    export class PartnerReturns extends ui.partner.PartnerReturnsUI {
        private comp: ui.partner.PartnerReturnsUI;
        private ParentUI: view.SmartCat;

        constructor () {
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.partner.PartnerReturnsUI();
            Laya.stage.addChild(this.comp);
            try {
                service.partnerService.PartnerRenturn(this.returnCb, this);
            } catch (err) {

            }
            native.native.setCurrView(this, 2);
        }

        public setParentUI (v: view.SmartCat) {
            this.ParentUI = v;
        }

        private initEvent () {
            this.comp.back_btn.on(Laya.Event.CLICK, this, this.goBack);
        }

        private returnCb (ret, v) {
            try {
                 if (ret.retCode == 0) {
                    v.comp.allReturn.text = ret.allReturn;
                    v.comp.oneReturn.text = ret.oneReturn;
                    v.comp.sunReturn.text = ret.sunReturn;
                    v.comp.univerReturn.text = ret.univerReturn;
                 }
            } catch (err) {
                console.log("returnCb" + err);
            }
        }

        private goBack () {
            Laya.stage.removeChild(this.comp);
            this.ParentUI.comp.visible = true;
<<<<<<< HEAD
            native.native.setCurrView(this.ParentUI, 1);
=======
            native.native.setCurrView(this.ParentUI, 2);
>>>>>>> origin/dev_sxl
        }
    }
}