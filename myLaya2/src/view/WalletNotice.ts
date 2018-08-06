module view {
    export class WalletNotice extends ui.WalletNoticeUI {
        public comp: ui.WalletNoticeUI;
        private parentUI: ui.WalletMeUI
        private waiting: view.alert.waiting
        private data: any = []


        constructor () {
            super()
            this.init();
            this.initEvent();
        }

        public setParentUI(v: ui.WalletMeUI){
            this.parentUI = v
        }

        public init () {
            this.comp = new ui.WalletNoticeUI();
            this.stage.addChild(this.comp);
            this.waiting = new view.alert.waiting("查询中...");
            this.waiting.popup();
            service.walletServcie.getNotice(this.NoticeCb, this);
        }

        private initEvent () {
            this.comp.back_btn.on(Laya.Event.CLICK, this, this.goBack)
        }

        private goBack() {
            this.comp.visible = false;
            this.parentUI.visible = true;
        }

        public setList(data: any): void{
            console.log(data.length);
            if (data.length == 0) {
                this.comp.listNotice.array = [];
                this.comp.lab_nodata.visible = true;
            } else {
                this.comp.listNotice.array = data;
                this.comp.listNotice.repeatY = data.length;
                this.comp.listNotice.vScrollBarSkin = '';
                this.comp.listNotice.renderHandler = new Laya.Handler(this, this.onListRender);
            }
        }

        private onListRender(cell: Laya.Box,index: number){
            cell.on(Laya.Event.CLICK,this,this.btnClick,[index]);
            var data = this.comp.listNotice.array[index];
            let singleTitle = cell.getChildByName('singleTitle') as Laya.Label;
            singleTitle.text = data.noticeTitle;
            let singleTime = cell.getChildByName('singleTime') as Laya.Label;
            singleTime.text = data.noticeTime;
        }

        private btnClick(index: number){
            this.comp.visible = false;
            let data = this.comp.listNotice.array[index]
            let noticeDetails = new view.NoticeDetails();
            noticeDetails.setData(data);
            noticeDetails.setParentUI(this);
        }

        /**
         * 公告回调函数
        */
        private NoticeCb (ret, v: view.WalletNotice) {
            v.waiting.stop();
            console.log(ret);
            try {
                // ret = JSON.parse(ret);
                if (ret && ret.code == 0) {
                    v.setList(ret.data);
                }
            } catch (err) {
                console.log("Notice request: " + err);
            }
        }
    }
}