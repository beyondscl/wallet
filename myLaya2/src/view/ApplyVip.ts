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
            this.comp.ExitBtn.on(Laya.Event.CLICK,this, this.btnClick, [2]);
        }

        private btnClick (index: number) {
            if (1 == index) {
                if (this.comp.ApplyBtn.bgColor == '#49a2dd') {
                    this.confirm = new view.alert.confirm('VIP', '申请成为VIP将冻结您10000个WWE,申请过程中不能取消');
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
            if (2 == index) {
                this.confirm = new view.alert.confirm('VIP', '是否确定退出VIP,退出后您在交易所交易和兑换的手续费将大幅上涨!');
                    this.confirm.setCallback((ret, arg) => {
                        if (ret == 2) {
                            arg[0].waiting = new view.alert.waiting('申请中');
                            arg[0].waiting.popup();
                            service.assetService.QuitVip(arg[0].QuitVipCb, arg[0]);
                        }
                    }, [this]);
                    this.confirm.popup();
            }
        }

        private setList (data: Array<Object>) {
            this.comp.listHistory.array = data;
            if (data.length == 0) {
                this.comp.noRecord.visible = true;
            }
            this.comp.listHistory.vScrollBarSkin = '';
            this.comp.listHistory.renderHandler = new Laya.Handler(this, this.onRenderUp, null, false);
        }

        private onRenderUp (cell:Laya.Box, index: number){
            let data = this.comp.listHistory.array[index];
            let time = cell.getChildByName('time') as Laya.Label;
            // time.text = util.getFormatTime2(new Date(data.created_at).valueOf());
            var d = new Date(data.created_at);
            var times=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
            time.text = times;
            let status = cell.getChildByName('status') as Laya.Label;
            let statusWord: string = '';
            if (1 == data.status && data.type == 1) {
                statusWord = '申请成功';
                status.color = '#5CCBE3'
            } else if (2 == data.status) {
                statusWord = '申请中';
                status.color = '#2176FF';
            } else if (3 == data.status){
                statusWord = '申请失败';
                status.color = '#F55449';
            } else if (2 == data.type && 1 == data.status){
                statusWord = '退出成功';
                status.color = '#F55449';
            }
            status.text = statusWord;
            let content = cell.getChildByName('content') as Laya.Label;
            let contWord: string = '';
            if (data.type == 1) {
                contWord = '申请vip';
            } else {
                contWord = '退出vip';
            }
            content.text = contWord;
        }

        private historyCb (ret, v) {
            try {
                ret = JSON.parse(ret);
                let data = ret;
                v.setList(data);
            } catch (err) {
                console.log('historyCbErr:' + err);
            }
        }

        private ApplyVipCb (ret, v) {
            v.waiting.stop();
            try {
                ret = JSON.parse(ret);
                v.info = new view.alert.info(ret.message);
                v.info.popup();
                v.comp.ApplyBtn.text = '申请中..';
                v.comp.ApplyBtn.bgColor = 'gray';
            } catch (err) {
                console.log("ApplyVipErr: " + err);
            }
        }

        private QuitVipCb (ret, v) {
            v.waiting.stop();
            try {
                ret = JSON.parse(ret);
                v.info = new view.alert.info(ret.message);
                v.info.popup();
                // v.comp.ApplyBtn.text = '申请';
                // v.comp.ApplyBtn.bgColor = 'gray';
                v.comp.ApplyBtn.visible = true;
                v.comp.ExitBtn.visible = false;
            } catch (err) {
                console.log("ApplyVipErr: " + err);
            }
        }
        
        private statusCb (ret, v) {
            try {
                ret = JSON.parse(ret);
                if (ret.status == 1) {
                    v.comp.ApplyBtn.visible = true;
                    v.comp.ExitBtn.visible = false;
                } else if(ret.status == 3) {
                    v.comp.ApplyBtn.visible = false;
                    v.comp.ExitBtn.visible = true;
                } else if (ret.status == 2) {
                    v.comp.ApplyBtn.visible = true;
                    v.comp.ExitBtn.visible = false;
                    v.comp.ApplyBtn.text = '申请中..';
                    v.comp.ApplyBtn.bgColor = 'gray';
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