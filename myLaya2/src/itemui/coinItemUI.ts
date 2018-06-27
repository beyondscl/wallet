//币种列表
import Box = Laya.Box;
import Label = Laya.Label;

class coinItemUI extends Box {
    public static WID: number = 60;
    public static HEI: number = 60;

    //额外注意这里的属性名称 不能与传进来的参数中的属性一致，否则！
    private imgBg = new Laya.Image();
    private imgCoinImg = new Laya.Image();
    private labCoinName = new Label();
    private labVenderName = new Label();
    private labCoinAddr = new Label();
    private coinCheckBox = new Laya.CheckBox();

    constructor() {
        super();
        this.layoutEnabled = true;
        this.size(coinItemUI.WID, coinItemUI.HEI);
        this.addChild(this.imgBg);
        this.addChild(this.imgCoinImg);
        this.addChild(this.labCoinName);
        this.addChild(this.labVenderName);
        this.addChild(this.labCoinAddr);
        this.addChild(this.coinCheckBox);
    }

    public init(coinItem: mod.coinItemMod): void {
        this.imgBg.skin = 'template/List/SimpleListBoxItemBackground.png';
        //img/wallet_manage.png';
        this.imgBg.width = util.getScreenWidth();
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
        this.coinCheckBox.x = 290;
        this.coinCheckBox.y = 20;
        this.coinCheckBox.selected = coinItem.coinSelected;
    }
}