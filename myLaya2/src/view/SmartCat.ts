module view {
    export class SmartCat extends ui.SmartCatUI {
        public claName = 'view.SmartCat';
        public comp: ui.SmartCatUI;
        private parentUI: view.WalletMain;
        constructor() {
            super();
            this.init()
            this.initEvent()
        }

        private init() {
            this.comp = new ui.SmartCatUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 1);
            util.setCatView(this);
        }

        public setParentUI(parentUI: any) {
            this.parentUI = parentUI;
        }


        private initEvent() {
            this.comp.my_smartcat.on(Laya.Event.CLICK, this, this.goTo, [1]);
            this.comp.withdraw_assets.on(Laya.Event.CLICK, this, this.goTo, [2]);
            this.comp.asset_details.on(Laya.Event.CLICK, this, this.goTo, [3]);
            this.comp.inviter.on(Laya.Event.CLICK, this, this.goTo, [4]);
            // this.comp.my_inviter.on(Laya.Event.CLICK, this, this.goTo, [5]);
            this.comp.inviter_earning.on(Laya.Event.CLICK, this, this.goTo, [6]);
            this.comp.apply_vip.on(Laya.Event.CLICK, this, this.goTo, [7]);
            this.comp.smartcat_explain.on(Laya.Event.CLICK, this, this.goTo, [8]);

            this.comp.btn_assets.on(Laya.Event.CLICK, this, this.goTo, [10]);
            this.comp.btn_smartcat.on(Laya.Event.CLICK, this, this.goTo, [11]);
            this.comp.btn_me.on(Laya.Event.CLICK, this, this.goTo, [12]);

            this.comp.my_inviter.on(Laya.Event.CLICK, this, this.goTo, [13]);
            this.comp.inviter_earning.on(Laya.Event.CLICK, this, this.goTo, [14]);
        }
        
        private goTo(index: number): void {
            switch (index) {
                case 1:
                    this.comp.visible = false;
                    let sms = new view.smartcat.MySmartcat()
                    sms.setParentUI(this);
                    break; // 我的智能猫
                case 2:
                    this.comp.visible = false;
                    let withdraw_assets = new view.asset.AssetTypeExtraction();
                    withdraw_assets.setParentUI(this);
                    break; // 提取资产
                case 3: 
                    this.comp.visible = false;
                    let asset_details = new view.asset.AssetDetails();
                    asset_details.setParentUI(this);
                    break; // 资产明细
                case 4: 
                    this.comp.visible = false;
                    let my_inviter = new view.user.UserInvite();
                    my_inviter.setParetUI(this);
                    break; // 邀请伙伴
                 case 7: 
                    this.comp.visible = false;
                    let apply_vip = new view.ApplyVip();
                    apply_vip.setParentUI(this);
                    break; // 申请VIP
                case 8: 
                    this.comp.visible = false;
                    let smartcat_explain = new view.SmartCatIntro();
                    smartcat_explain.setParentUI(this);
                    break; // 智能猫说明
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
                case 13:
                    this.comp.visible = false;
                    let partnerMain = new view.partner.PartnerMain();
                    partnerMain.setParentUI(this);
                    break; // 伙伴主页
                case 14:
                    this.comp.visible = false;
                    let PartnerReturn = new view.partner.PartnerReturns();
                    PartnerReturn.setParentUI(this);
                    break; // 伙伴收益
                default:
                    break;
            }
        }
    }
}