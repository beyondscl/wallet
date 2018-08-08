module view {
    export class NoticeDetails extends ui.NoticeDetailsUI{
        public comp: ui.NoticeDetailsUI
        private parentUI: view.WalletNotice

        constructor(){
           super();
           this.init();
           this.initEvent();
        }

        public setParentUI(v: view.WalletNotice){
            this.parentUI = v;
        }

        public init(){
            this.comp = new ui.NoticeDetailsUI;
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
        }

        public initEvent(){
            this.comp.back_btn.on(Laya.Event.CLICK,this,this.goBack)
        }

        public setData (data: any) {
            console.log(data);
            this.comp.title.text = data.noticeTitle;
            this.comp.content.text = data.noticeContent;
            this.comp.time.text = data.noticeTime;
        }

        private goBack(){
            this.comp.removeSelf();
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI, 2);
        }
    }
}