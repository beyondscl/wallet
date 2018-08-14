module view {
    export class SmartCat extends ui.SmartCatUI {
        public claName = 'view.SmartCat';
        public comp: ui.SmartCatUI;
        private parentUI: view.WalletMain;
        public timer = null; //定时刷新数据

        constructor() {
            super();
            this.init();
        }

        private init() {
            this.comp = new ui.SmartCatUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 1);
            util.setCatView(this);
            this.getAllMarketValue();
            this.initEvent()
        }

        public setParentUI(parentUI: any) {
            this.parentUI = parentUI;
        }
        public setData(res, args) {
            for (var i in res) {
                mod.smartCatMod[i] = res[i];
            };
            let comp = args[0]
            comp.label_hostAssetsValue.text = '' + mod.smartCatMod.hostAssetsValue;
            comp.label_todayDividend.text = '' + mod.smartCatMod.todayDividend;
            comp.label_hostDays.text = '' + mod.smartCatMod.hostDays;
        }

        public getAllMarketValue() {
            var this1 = this;
            service.smartcatService.getAllMarketValue(this.setData, [this.comp])
            if (typeof this.timer == 'object')
                clearInterval(this.timer);
            this1.timer = setInterval(function(){
                this1.getAllMarketValue.apply(this1);
            }, 10000)
        }

        private initEvent() {
            this.comp.my_smartcat.on(Laya.Event.CLICK, this, this.goTo, [1]);
            this.comp.withdraw_assets.on(Laya.Event.CLICK, this, this.goTo, [2]);
            this.comp.asset_details.on(Laya.Event.CLICK, this, this.goTo, [3]);
            this.comp.my_inviter.on(Laya.Event.CLICK, this, this.goTo, [5]);
            this.comp.inviter_earning.on(Laya.Event.CLICK, this, this.goTo, [6]);
            this.comp.apply_vip.on(Laya.Event.CLICK, this, this.goTo, [7]);
            this.comp.smartcat_explain.on(Laya.Event.CLICK, this, this.goTo, [8]);

            this.comp.box_summary.on(Laya.Event.CLICK, this, this.getAllMarketValue);

            this.comp.btn_assets.on(Laya.Event.CLICK, this, this.goTo, [10]);
            this.comp.btn_smartcat.on(Laya.Event.CLICK, this, this.goTo, [11]);
            this.comp.btn_me.on(Laya.Event.CLICK, this, this.goTo, [12])
        }
        
        private goTo(index: number): void {
            switch (index) {
                case 1:
                    this.comp.visible = false;
                    let sms = new view.smartcat.MySmartcat()
                    sms.setParentUI(this);
                    break;
                case 10: // 前往资产页面
                    this.comp.visible = false;
                    util.getMainView().comp.visible = true;
                    break;
                case 11: //前往智能猫页面，当前页面
                    break;
                case 12:
                    this.comp.visible = false;
                    if (util.getMeView()) {
                        util.getMeView().comp.visible = true;
                    } else {
                        new view.WalletMe();
                    }
                    break; //前往个人页面
                default:
                    break;
            }
        }
    }
}