module view {
    export class ApplyVip extends ui.ApplyVipUI {
        private comp: ui.ApplyVipUI;
        private ParentUI: view.SmartCat;
        private confirm: view.alert.confirm;
        private waiting: view.alert.waiting;
        private info: view.alert.info;
        constructor(){
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.ApplyVipUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
            try {
                service.assetService.vipStatus(this.statusCb, this);
            } catch (err) {
                console.log("status:" + err);
            }
            try {
                service.assetService.vipHistory(this.historyCb, this);
            } catch (err) {
                console.log("historyCb:" + err);
            }
         }

        public setParentUI (v: view.SmartCat){
            this.ParentUI = v;
        }

        private initEvent () {
            this.comp.back_btn.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.ApplyBtn.on(Laya.Event.CLICK,this, this.btnClick, [1]);
        //     this.comp.ApplyBtn.on(Laya.Event.CLICK,this, this.btnClick, [1]);
        }

        private btnClick (index: number) {
            if (1 == index) {
                this.confirm = new view.alert.confirm('VIP', '申请成为VIP将冻结您10000个WWE');
                this.confirm.setCallback((ret, arg) => {
                    if (ret == 2) {
                        arg[0].waiting = new view.alert.waiting('申请中');
                        arg[0].waiting.popup();
                        service.assetService.applyVip(arg[0].ApplyVipCb, arg[0]);
                    }
                }, [this]);
                this.confirm.popup();
            }
        }

        private setList (data: Array<Object>) {
            this.comp.listHistory.array = data;
            this.comp.listHistory.vScrollBarSkin = '';
            // this.comp.listHistory.renderHandler = new Laya.Handler(this, )
        }

        private historyCb (ret, v) {
            try {
                let data = ret;
                v.setList(data);
            } catch (err) {

            }
        }

        private ApplyVipCb (ret, v) {
            v.waiting.stop();
            try {
                ret = JSON.parse(ret);
                // let word: string = '';
                // if (1 == ret.status) {
                //     word = '操作成功';
                // } else if (2 == ret.status) {
                //     word = '申请中';
                // } else {
                //     word = '申请失败';
                // }
                v.info = new view.alert.info(ret.message);
                v.info.popup();
            } catch (err) {
                console.log("ApplyVipErr: " + err);
            }
        }

        private statusCb (ret, v) {
            try {
                ret = JSON.parse(ret);
                if (ret.type == 1) {
                    v.comp.ApplyBtn.visible = true;
                    v.comp.ExitBtn.visible = false;
                } else {
                    v.comp.ApplyBtn.visible = false;
                    v.comp.ExitBtn.visible = true;
                }
            } catch (err) {

            }
        }


        private goBack () {
            this.comp.removeSelf();
            this.ParentUI.comp.visible = true;
            native.native.setCurrView(this.ParentUI, 1);
        }
    }
}