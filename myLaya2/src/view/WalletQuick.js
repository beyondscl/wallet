var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var WalletQuick = /** @class */ (function (_super) {
        __extends(WalletQuick, _super);
        function WalletQuick() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.initEvent();
            return _this;
        }
        WalletQuick.prototype.setParentUI = function (parentUI) {
            this.parentUI = parentUI;
        };
        WalletQuick.prototype.initData = function (walletNames) {
            var lines = walletNames.length;
            var height = lines * 80;
            height = height > 600 ? 600 : height;
            // this.list_wallet.height = height;
            this.list_wallet.array = walletNames;
            this.list_wallet.repeatY = walletNames.length;
            this.list_wallet.repeatX = 1;
            this.list_wallet.vScrollBarSkin = "";
            this.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
            this.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
            // this.box_btns.top = this.list_wallet.y + this.list_wallet.height+100;
        };
        WalletQuick.prototype.init = function () {
        };
        WalletQuick.prototype.initEvent = function () {
            this.lab_sao.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.lab_create.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        };
        WalletQuick.prototype.btnClick = function (index) {
            if (index == 1) {
            }
            if (index == 2) {
                this.close();
                this.parentUI.visible = false;
                new view.CreateWallet().setParentUI(this.parentUI);
            }
        };
        WalletQuick.prototype.onListRender = function (cell, index) {
            var data = this.list_wallet.array[index];
            var cImg = cell.getChildByName('img_wallet');
            var wallet = service.walletServcie.getWallet(data);
            cImg.skin = wallet.wSkin;
            var cName = cell.getChildByName('lab_wName');
            cName.text = data.replace(/([^]{8})([^]+)/, "$1...");
        };
        WalletQuick.prototype.onSelect = function (index) {
            var item = this.list_wallet.array[index];
            this.stage.removeChild(this.parentUI);
            new view.WalletMain().initQueryData(service.walletServcie.getWallet(item));
            this.close();
        };
        return WalletQuick;
    }(ui.WalletQuickUI));
    view.WalletQuick = WalletQuick;
})(view || (view = {}));
//# sourceMappingURL=WalletQuick.js.map