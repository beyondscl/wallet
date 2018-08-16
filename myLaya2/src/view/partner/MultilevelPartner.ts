module view.partner {
    export class MultilevelPartner extends ui.partner.MultilevelPartnerUI {
        private comp: ui.partner.MultilevelPartnerUI;
        private ParentUI: any;
        private type: number;
        private waiting: view.alert.waiting;
        private flag = false;
        private page:number =  1;
        private pageSize: number = 15;
        private info: view.alert.info
        private data= [];
        constructor () {
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.partner.MultilevelPartnerUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
        }

        public setParentUI (v: any) {
            this.ParentUI = v;
        }

        public setData (str: string, index: number) {
            this.comp.title.text = str;
            this.type = index;
            try {
                this.waiting = new view.alert.waiting("正在加载...");
                this.waiting.popup();
                service.partnerService.parterMulList(this.page, this.pageSize, this.type, this.listCb, this);
            } catch (err) {
                console.log("parterMulListErr" + err);
            }
         }

        private initEvent () {
            this.comp.back_btn.on(Laya.Event.CLICK, this, this.goBack);
        }

        private listCb (ret: any, v: any) {
            v.waiting.stop();
            try {
                if (ret.retCode == 0) {
                    if (ret.list.length == 0) {
                        v.info = new view.alert.info("没有更多的数据");
                    } else {
                        v.data = v.data.concat(ret.list);
                        v.setList(v.data);
                    }
                }
            } catch (err) {
                console.log("MultiRequest:" + err);
            }
            
        }

        private setList (data: Array<Object>) {
            if (data.length == 0 && this.data.length == 0) {
                this.noList.visible = true;
                this.comp.listContent.array = [];
            }
            this.comp.listContent.array = data;
            this.comp.listContent.vScrollBarSkin = '';
            this.comp.listContent.repeatY = data.length;
            this.comp.listContent.renderHandler = new Laya.Handler(this, this.onRenderList)
        }

        private onRenderList (cell: Laya.Box, index: number) {
            let data = this.comp.listContent.array[index];
            let phoneNum = cell.getChildByName('phoneNum') as Laya.Label;
            phoneNum.text = data.phoneNum;
            let status = cell.getChildByName('status') as Laya.Label;
            if (data.status == '未开启') {
                status.color = 'red';
            }
            status.text = data.status;

            this.flag = true;
            this.comp.listContent.scrollBar.on(Laya.Event.CHANGE, this, this.loadMore);
            this.comp.listContent.scrollTo((this.page - 1) * this.pageSize);
        }

        private loadMore () {
            if (this.flag && this.comp.listContent.scrollBar.max == this.comp.listContent.scrollBar.value) {
                this.page++;
                this.flag = false;
                service.partnerService.parterMulList(this.page, this.pageSize, this.type, this.listCb, this);
            }
        }

        private goBack () {
            Laya.stage.removeChild(this.comp);
            this.ParentUI.comp.visible = true;
            native.native.setCurrView(this.ParentUI, 2);
        }
    }
}