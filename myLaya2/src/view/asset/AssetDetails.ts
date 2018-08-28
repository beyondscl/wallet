module view.asset {
    export class AssetDetails extends ui.asset.AssetDetailUI {
        private comp: ui.asset.AssetDetailUI;
        private ParentUI: view.SmartCat;
        private type: string = 'BONUS'; // TRANSACTION 交易
        private waiting: view.alert.waiting;
        private info: view.alert.info;
        private page:number = 1;
        private pageSize: number = 15;
        private data:Array<Object> = [];
        private flag = false;

        constructor () {
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.asset.AssetDetailUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
            try {
                this.waiting = new view.alert.waiting('正在加载...');
                this.waiting.popup();
                service.assetService.AssetList(this.page, this.pageSize, this.type, this.listCb, this);
            } catch (err) {

            }
        }

        public setParentUI (v: view.SmartCat) {
            this.ParentUI = v;
        }

        // public setData (str: string) {
        //     this.type = str;
        // }

        private listCb (ret, v) {
            v.waiting.stop();
            // if (ret.retCode == 0) {
                ret = JSON.parse(ret);
                if (ret.data.length != 0) {
                    v.data = v.data.concat(ret.data);
                    v.setList(v.data);
                } else {
                    v.info = new view.alert.info('没有更多的数据');
                    v.info.popup();
                    v.setList([]);
                }
            // }
        }
        // force_content 分红 trade_content 交易
        private setList (data: Array<Object>) {
            if (data.length == 0 && this.data.length == 0) {
                this.comp.noRecord.visible = true;
                this.comp.force_content.array = [];
            } else {
                this.comp.noRecord.visible = false;
                this.comp.force_content.array = data;
                this.comp.force_content.vScrollBarSkin = '';
                this.comp.force_content.renderHandler = new Laya.Handler(this, this.onRenderUp);
            }
        }

        private onRenderUp (cell: Laya.Box, index: number) {
            let data = this.comp.force_content.array[index];
            let force_iconType = cell.getChildByName('force_iconType') as Laya.Label;
            force_iconType.text = data.iconType;

            let force_time = cell.getChildByName('force_time') as Laya.Label;
            force_time.text = data.time;

            let force_type = cell.getChildByName('force_type') as Laya.Label;
            force_type.text = data.type;

            let force_count = cell.getChildByName('force_count') as Laya.Label;
            force_count.text = data.count;

            this.flag = true;
            this.comp.force_content.scrollBar.on(Laya.Event.CHANGE, this, this.loadMore);
            this.comp.force_content.scrollTo((this.page - 1) * this.pageSize);
        }

        private loadMore () {
            if (this.flag && this.comp.force_content.scrollBar.max == this.comp.force_content.scrollBar.value) {
                this.flag = false;
                this.page ++ ;
                service.assetService.AssetList(this.page, this.pageSize , this.type, this.listCb, this);
            }
        }

        private initEvent () {
            this.comp.back_btn.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_force.on(Laya.Event.CLICK, this, this.btnClick, ['BONUS']);
            this.comp.btn_trade.on(Laya.Event.CLICK, this, this.btnClick, ['TRANSACTION']);
        }

        private btnClick (str: string) {
            this.type = str;
            this.page = 1;
            this.data = [];
            if (str == 'BONUS') {
                this.comp.btn_force.bgColor = '#4F8CEE';
                this.comp.btn_trade.bgColor = '#B0BBC4';
            } else {
                this.comp.btn_trade.bgColor = '#4F8CEE';
                this.comp.btn_force.bgColor = '#B0BBC4';
            }
             try {
                this.waiting = new view.alert.waiting('正在加载...');
                this.waiting.popup();
                service.assetService.AssetList(this.page, this.pageSize, this.type, this.listCb, this);
            } catch (err) {

            }
        } 

        private goBack () {
            Laya.stage.removeChild(this.comp);
            this.ParentUI.comp.visible = true;
            native.native.setCurrView(this.ParentUI, 1);
        }
    }
}