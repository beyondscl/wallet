//首页快捷操作:代码创建dailog;不使用view ui
var WalletQuickUI = /** @class */ (function () {
    function WalletQuickUI() {
        this.tsetImg = 'img/wallet_manage.png';
        this.imgBg = new Laya.Image();
        this.labSaoImg = new Laya.Image();
        this.labSao = new Laya.Label();
        this.labCreateImg = new Laya.Image();
        this.labCreate = new Laya.Label();
        this.list_wallet = new Laya.List();
        this.dialog = new Dialog();
        this.dialog.addChild(this.imgBg);
        this.dialog.addChild(this.labSaoImg);
        this.dialog.addChild(this.labSao);
        this.dialog.addChild(this.labCreateImg);
        this.dialog.addChild(this.labCreate);
        this.dialog.addChild(this.list_wallet);
        this.init();
        this.initEvent();
    }
    WalletQuickUI.prototype.init = function () {
        this.dialog.width = 150;
        this.dialog.top = 0;
        this.dialog.left = 200;
        this.dialog.height = Laya.stage.height;
        this.imgBg.skin = 'img/white.jpg';
        this.imgBg.top = 0;
        this.imgBg.left = 0;
        this.imgBg.right = 0;
        this.imgBg.bottom = 0;
        this.labSaoImg.skin = this.tsetImg;
        this.labSaoImg.x = 10;
        this.labSaoImg.x = 40;
        this.labSaoImg.width = 15;
        this.labSaoImg.height = 15;
        this.labCreateImg.skin = this.tsetImg;
        this.labCreateImg.x = 10;
        this.labCreateImg.x = 65;
        this.labCreateImg.width = 15;
        this.labCreateImg.height = 15;
        this.dialog.popup();
    };
    WalletQuickUI.prototype.initEvent = function () {
        this.labSaoImg.on(Laya.Event.CLICK, this, this.btnClick, [1]);
        this.labCreateImg.on(Laya.Event.CLICK, this, this.btnClick, [2]);
    };
    WalletQuickUI.prototype.btnClick = function (index) {
        if (index == 1) {
        }
        if (index == 2) {
            this.dialog.close();
            new view.CreateWallet().setParentUI(this);
        }
    };
    WalletQuickUI.prototype.initData = function (walletNames) {
        this.listData = walletNames;
        this.list_wallet.top = 120;
        this.list_wallet.left = 0;
        this.list_wallet.right = 0;
        this.list_wallet.bottom = 0;
        this.list_wallet.repeatX = 1;
        this.list_wallet.repeatY = walletNames.length;
        this.list_wallet.vScrollBarSkin = '';
        this.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
        this.list_wallet.renderHandler = new Laya.Handler(this, this.updateItem);
        this.list_wallet.itemRender = walltNameUI;
        this.list_wallet.array = walletNames;
    };
    WalletQuickUI.prototype.updateItem = function (cell, index) {
        cell.init(cell.dataSource);
    };
    WalletQuickUI.prototype.onSelect = function (index) {
        this.dialog.close();
        var item = this.listData[index];
    };
    return WalletQuickUI;
}());
//# sourceMappingURL=WalletQuickUI.js.map