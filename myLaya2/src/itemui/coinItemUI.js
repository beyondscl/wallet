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
//币种列表
var Box = Laya.Box;
var Label = Laya.Label;
var coinItemUI = /** @class */ (function (_super) {
    __extends(coinItemUI, _super);

    function coinItemUI() {
        var _this = _super.call(this) || this;
        //额外注意这里的属性名称 不能与传进来的参数中的属性一致，否则！
        _this.imgBg = new Laya.Image();
        _this.imgCoinImg = new Laya.Image();
        _this.labCoinName = new Label();
        _this.labVenderName = new Label();
        _this.labCoinAddr = new Label();
        _this.coinCheckBox = new Laya.CheckBox();
        _this.layoutEnabled = true;
        _this.size(coinItemUI.WID, coinItemUI.HEI);
        _this.addChild(_this.imgBg);
        _this.addChild(_this.imgCoinImg);
        _this.addChild(_this.labCoinName);
        _this.addChild(_this.labVenderName);
        _this.addChild(_this.labCoinAddr);
        _this.addChild(_this.coinCheckBox);
        return _this;
    }

    coinItemUI.prototype.init = function (coinItem) {
        this.imgBg.skin = 'template/List/SimpleListBoxItemBackground.png';
        //img/wallet_manage.png';
        this.imgBg.width = 300;
        this.imgBg.height = 60;
        this.imgBg.x = 0;
        this.imgBg.y = 0;
        this.imgCoinImg.skin = coinItem.coinImg;
        this.imgCoinImg.x = 20;
        this.imgCoinImg.width = 30;
        this.imgCoinImg.height = 30;
        this.imgCoinImg.centerY = 0;
        this.imgCoinImg.visible = true;
        this.labCoinName.text = coinItem.coinName.toUpperCase();
        this.labCoinName.x = 60;
        this.labCoinName.y = 5;
        this.labCoinName.width = 100;
        this.labCoinName.height = 20;
        this.labCoinName.color = 'black';
        this.labVenderName.text = coinItem.coinVender;
        this.labVenderName.x = 60;
        this.labVenderName.y = 25;
        this.labVenderName.width = 100;
        this.labVenderName.height = 20;
        this.labVenderName.color = 'black';
        this.labCoinAddr.text = util.getAddr(coinItem.coinAddr);
        this.labCoinAddr.x = 60;
        this.labCoinAddr.y = 45;
        this.labCoinAddr.width = 100;
        this.labCoinAddr.height = 20;
        this.labCoinAddr.color = 'black';
        //只能缩放，并且无法相对布局
        this.coinCheckBox.skin = 'template/Switcher/checkbox_switch.png';
        this.coinCheckBox.stateNum = 2;
        this.coinCheckBox.scale(0.4, 0.4);
        this.coinCheckBox.x = 240;
        this.coinCheckBox.y = 20;
        this.coinCheckBox.selected = coinItem.coinSelected;
    };
    coinItemUI.WID = 60;
    coinItemUI.HEI = 60;
    return coinItemUI;
}(Box));
//# sourceMappingURL=coinItemUI.js.map