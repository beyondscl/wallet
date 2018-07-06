var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var WalletMe = /** @class */ (function (_super) {
        __extends(WalletMe, _super);

        function WalletMe() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.initEvent();
            return _this;
        }

        WalletMe.prototype.init = function () {
            this.comp = new ui.WalletMeUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        };
        WalletMe.prototype.initEvent = function () {
            this.comp.btn_assets.on(Laya.Event.CLICK, this, this.tabSelect, [0]);
            this.comp.btn_me.on(Laya.Event.CLICK, this, this.tabSelect, [1]);
            this.comp.btn_dealHistory.on(Laya.Event.CLICK, this, this.tabSelect, [2]);
            this.comp.btn_manageWal.on(Laya.Event.CLICK, this, this.tabSelect, [3]);
            this.comp.btn_about.on(Laya.Event.CLICK, this, this.tabSelect, [4]);
            this.comp.btn_lqtg.on(Laya.Event.CLICK, this, this.tabSelect, [5]);
        };
        WalletMe.prototype.initQueryData = function () {
        };
        WalletMe.prototype.queryCallBack = function () {
        };
        WalletMe.prototype.tabSelect = function (index) {
            if (index == 1) {
                // new view.WalletMe();
            }
            if (index == 0) {
                this.stage.removeChild(this.comp);
                new view.WalletMain().initQueryData(mod.userMod.defWallet);
            }
            if (index == 2) {
                this.comp.visible = false;
                var datas = service.walletServcie.getDealList();
                new view.TransHisList().setData(datas, this.comp);
            }
            if (index == 3) {
                this.comp.visible = false;
                var wm = new view.WalletManage();
                wm.setParentUI(this.comp);
                wm.setData(service.walletServcie.getWallets());
            }
            if (index == 4) {
                this.comp.visible = false;
                new view.info.about().setParetUI(this.comp);
            }
            if (index == 5) {
                this.comp.visible = false;
                var candy = new view.info.Candy();
                candy.setParetUI(this.comp);
                candy.setData(service.walletServcie.getWallets());
            }
        };
        return WalletMe;
    }(ui.WalletMeUI));
    view.WalletMe = WalletMe;
})(view || (view = {}));
//# sourceMappingURL=WalletMe.js.map