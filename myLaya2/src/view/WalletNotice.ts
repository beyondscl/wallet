module view {
    export class WalletNotice extends ui.WalletNoticeUI {
        public comp: ui.WalletNoticeUI;
        private parentUI: view.WalletMe
        private waiting: view.alert.waiting
        private data= []
        private info: view.alert.info
        private pageNo = 1;
        private pageSize = 10;

        private scrollSta: boolean = false; // 判断是否刷新完成
        constructor () {
            super()
            this.init();
            this.initEvent();
        }

        public setParentUI(v: view.WalletMe){
            this.parentUI = v
        }

        public init () {
            native.native.setCurrView(this,2);
            this.comp = new ui.WalletNoticeUI();
            this.stage.addChild(this.comp);
             this.waiting = new view.alert.waiting("查询中...");
             this.waiting.popup();
            service.walletServcie.getNotice(this.pageNo, this.pageSize, this.NoticeHisCb, this);
        }

        private initEvent () {
            this.comp.back_btn.on(Laya.Event.CLICK, this, this.goBack)
        }

        private goBack() {
            this.comp.visible = false;
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI,1);
        }

        public setList(data: any): void{
            if (data.length == 0) {
                this.comp.listNotice.array = [];
                this.comp.lab_nodata.visible = true;
            } else {
                this.comp.listNotice.array = data;
                this.comp.listNotice.repeatY = data.length;
                this.comp.listNotice.vScrollBarSkin = '';
                this.comp.listNotice.renderHandler = new Laya.Handler(this, this.onListRender);
            }
            this.waiting.stop();
        }

        private onListRender(cell: Laya.Box,index: number){
            cell.on(Laya.Event.CLICK,this,this.btnClick,[index]);
            var data = this.comp.listNotice.array[index];
            let singleTitle = cell.getChildByName('singleTitle') as Laya.Label;
            singleTitle.text = data.title;
            let singleTime = cell.getChildByName('singleTime') as Laya.Label;
            singleTime.text = data.update_time;

            this.scrollSta = true;
            this.comp.listNotice.scrollBar.on(Laya.Event.CHANGE, this, this.loadMore)
            this.comp.listNotice.scrollTo((this.pageNo - 1) * this.pageSize);
        }

        private loadMore () {
            if (this.scrollSta && this.comp.listNotice.scrollBar.max == this.comp.listNotice.scrollBar.value) {
                this.scrollSta = false;
                this.pageNo += 1;
                try {
                    this.waiting = new view.alert.waiting("查询中...");
                    this.waiting.popup();
                    service.walletServcie.getNotice(this.pageNo, this.pageSize, this.NoticeHisCb, this);
                } catch (error) {
                    console.log("err:" +  error);
                }
            }
        }

        private btnClick(index: number){
            this.comp.visible = false;
            let data = this.comp.listNotice.array[index]
            let noticeDetails = new view.NoticeDetails();
            noticeDetails.setData(data);
            noticeDetails.setParentUI(this);
        }

        /**
         * 消息列表回调
         */
        private NoticeHisCb (ret, v: view.WalletNotice) {
            try {
                v.waiting.stop();
                ret = JSON.parse(ret);
                if (ret && ret.retCode == 0) {
                    if (ret.data.list.length != 0) {
                        for(var i = 0;i<ret.data.list.length;i++){
                            ret.data.list[i].update_time = util.getFormatTime2(new Date(ret.data.list[i].update_time).valueOf() / 1000);
                        }
                        v.data = v.data.concat(ret.data.list);
                        v.setList(v.data);            
                    } else {
                        v.waiting.stop();
                        v.scrollSta = false;
                        v.info = new view.alert.info("没有更多的数据...");
                        v.info.popup();
                        v.setList([]);
                    }
                } else {
                    v.setList([]);
                }
            } catch (err) {
                console.log("Notice request: " + err);
            }
        }
    }
}