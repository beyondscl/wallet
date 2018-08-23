module view.asset {
   export class AssetExtract extends ui.asset.AssetExtractUI {
        private comp: ui.asset.AssetExtractUI;
        private parentUI: view.asset.AssetTypeExtraction;
        private conf: view.alert.confirm;
        private waiting: view.alert.waiting;
        private warn: view.alert.Warn;
        constructor () {
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.asset.AssetExtractUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
        }

        public setParentUI (v: view.asset.AssetTypeExtraction) {
            this.parentUI = v;
        }

        private initEvent () {
            this.comp.back_btn.on(Laya.Event.CLICK,this,this.goBack);
            this.comp.sub.on(Laya.Event.CLICK, this, this.btnClick);
        }

        private btnClick () {
            // switch (index) {
            //     case 1:
            let add = this.comp.walletAddresss.text;
            let count = this.comp.count.text;
            if (add != '111') {
                this.warn = new view.alert.Warn('提取', '请输入正确的钱包地址');
                this.warn.popup();
                return;
            }
             if (!util.isNumber(count)) {
                this.warn = new view.alert.Warn('提取', '请输入正确的提取金额');
                this.warn.popup();
                 return;
            }
            this.conf = new view.alert.confirm('提取', '您确定要提取4%吗?(托管资产市值小于500$将自动停止智能猫)');
            this.conf.setCallback((ret, arg) => {
                 if (ret == 2) {
                      arg[0].waiting = new view.alert.waiting('请稍后...');
                      arg[0].waiting.popup();
                    }
           }, [this]);
           this.conf.popup();
            // }
        }

        private goBack () {
            Laya.stage.removeChild(this.comp);
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI, 2);
        }
    } 
} 