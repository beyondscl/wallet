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
    var Handler = Laya.Handler;
    var WalletQuick = /** @class */ (function (_super) {
        __extends(WalletQuick, _super);

        function WalletQuick() {
            var _this = _super.call(this) || this;
            //最好不要再界面创建list，可能导致第一个item无法获取点击事件
            _this.list_wallet = new Laya.List();
            _this.init();
            _this.initEvent();
            return _this;
        }

        WalletQuick.prototype.init = function () {
            this.addChild(this.list_wallet);
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
        WalletQuick.prototype.setParentUI = function (parentUI) {
            this.parentUI = parentUI;
        };
        WalletQuick.prototype.initData = function (walletNames) {
            this.listData = walletNames;
            this.list_wallet.x = 0;
            this.list_wallet.top = 20;
            this.list_wallet.height = 400;
            this.list_wallet.repeatX = 1;
            this.list_wallet.repeatY = walletNames.length;
            this.list_wallet.vScrollBarSkin = '';
            this.list_wallet.selectEnable = true;
            this.list_wallet.selectHandler = new Handler(this, this.onSelectItem);
            this.list_wallet.renderHandler = new Handler(this, this.updateItem);
            this.list_wallet.itemRender = walltNameUI;
            this.list_wallet.array = walletNames;
        };
        WalletQuick.prototype.updateItem = function (cell, index) {
            cell.init(cell.dataSource);
        };
        WalletQuick.prototype.onSelectItem = function (index) {
            var item = this.listData[index];
            this.stage.removeChild(this.parentUI);
            new view.WalletMain().initQueryData(service.walletServcie.getWallet(item));
            this.close(null, true);
        };
        return WalletQuick;
    }(ui.WalletQuickUI));
    view.WalletQuick = WalletQuick;
})(view || (view = {}));
//# sourceMappingURL=WalletQuick.js.map