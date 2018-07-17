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
    var WalletManage = /** @class */ (function (_super) {
        __extends(WalletManage, _super);

        function WalletManage() {
            var _this = _super.call(this) || this;
            _this.rended = [];
            _this.init();
            _this.initEvent();
            return _this;
        }

        WalletManage.prototype.setParentUI = function (parentUI) {
            this.parentUI = parentUI;
        };
        WalletManage.prototype.setData = function (data) {
            this.comp.list_wallet.array = data;
            this.comp.list_wallet.vScrollBarSkin = "";
            this.comp.list_wallet.repeatY = data.length;
            this.comp.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
            // this.comp.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
        };
        WalletManage.prototype.init = function () {
            this.comp = new ui.WalletManageUI();
            Laya.stage.addChild(this.comp);
        };
        WalletManage.prototype.initEvent = function () {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_create.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.btn_import.on(Laya.Event.CLICK, this, this.btnClick, [3]);
        };
        WalletManage.prototype.btnClick = function (index) {
            if (1 == index) {
                Laya.stage.removeChild(this.comp);
                if (this.parentUI) {
                    this.parentUI.visible = true;
                }
                else {
                    new view.WalletMe();
                }
            }
            if (2 == index) {
                this.comp.visible = false;
                new view.CreateWallet().setParentUI(this.comp);
            }
            if (3 == index) {
                this.comp.visible = false;
                new view.set.WalletImport().setParetUI(this.comp);
            }
        };
        WalletManage.prototype.onListRender = function (cell, index) {
            cell.on(Laya.Event.CLICK, this, this.onSelect, [index]);
            var data = this.comp.list_wallet.array[index];
            var wImg = cell.getChildByName('img_wallet');
            wImg.skin = data.wSkin;
            var wName = cell.getChildByName('lab_wName');
            wName.text = data.wName;
            var wAddr = cell.getChildByName('lab_wAddr');
            wAddr.text = util.getAddr(data.wAddr);
            var wTotal = cell.getChildByName('lab_wTotal');
            if (!util.isContain(this.rended, wAddr.text)) {
                service.walletServcie.getWalletMoney(data.wName, wTotal);
                this.rended.push(wAddr.text);
            }
        };
        WalletManage.prototype.initWalletTotal = function (wName) {
            var coins = service.walletServcie.getWallet(wName).wCoins;
        };
        WalletManage.prototype.onSelect = function (index) {
            this.comp.visible = false;
            var wd = new view.WalletDetail();
            var walletMod = this.comp.list_wallet.array[index];
            walletMod.wAmount = this.comp.list_wallet.cells[index].getChildByName("lab_wTotal").text;
            wd.setData(walletMod);
            wd.setParetUI(this.comp);
            util.putView(this);
        };
        return WalletManage;
    }(ui.WalletManageUI));
    view.WalletManage = WalletManage;
})(view || (view = {}));
//# sourceMappingURL=WalletManage.js.map