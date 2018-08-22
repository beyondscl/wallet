module view.asset {
   export class AssetTypeExtraction extends ui.asset.AssetTypeExtractionUI {
        public comp: ui.asset.AssetTypeExtractionUI;
        private parentUI: view.SmartCat;

        constructor () {
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.asset.AssetTypeExtractionUI();
            Laya.stage.addChild(this.comp);
            try {
                service.assetService.tgAssetList(this.listCb, this);
            } catch (err) {
                
            }
            native.native.setCurrView(this, 2);
        }

        public setParentUI (v: view.SmartCat) {
            this.parentUI = v;
        }

        private initEvent () {
            this.comp.back_btn.on(Laya.Event.CLICK,this,this.goBack);
            this.comp.btn_WWEC.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_ETH.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        }

        private listCb (ret, v) {
            try {
                if (ret.retCode == 0) {
                    v.setList(ret.data);
                }
            } catch (err) {
                console.log("tgAssetList: " + err);
            }
        }

        private setList (data) {
            this.comp.listContent.array = data;
            this.comp.listContent.vScrollBarSkin = '';
            this.comp.listContent.renderHandler = new Laya.Handler(this, this.onRenderUp);
        }

        private onRenderUp (cell: Laya.Box, index: number) {
            let btn =  cell.getChildByName('btn') as Laya.Button;
            btn.on(Laya.Event.CLICK, this, this.btnClick, [3]);
            let data = this.comp.listContent.array[index];
            let imgSrc = cell.getChildByName('imgSrc') as Laya.Label;
            imgSrc.text = data.imgSrc;
            let name = cell.getChildByName('name') as Laya.Label;
            name.text = data.name;
            let count = cell.getChildByName('count') as Laya.Label;
            count.text = data.count;
            let status = cell.getChildByName('status') as Laya.Label;
            status.text = data.status;
            if (data.status == '冻结中..') {
                btn.visible = false;
                status.color = '#F55449';
            }
        }

        private btnClick (num: number) {
            switch (num) {
                case 1: 
                    this.comp.visible = false;
                    let exchange = new view.asset.Exchange();
                    exchange.setParentUI(this);
                    break;
                case 2:
                    this.comp.visible = false;
                    let AssetExtract = new view.asset.AssetExtract();
                    AssetExtract.setParentUI(this);
                    break;
               case 3:
                    this.comp.visible = false;
                    let AssetExtractOther = new view.asset.AssetExtract();
                    AssetExtractOther.setParentUI(this);
                    break;
            }
        }

        private goBack () {
            Laya.stage.removeChild(this.comp);
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI, 2);
        }
    } 
} 