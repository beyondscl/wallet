//主界面弹出框,快速引导层
class walltNameUI extends Box {
    public WID: number = 150;
    public HEI: number = 50;

    private wImg = new Laya.Image();
    private wName = new Laya.Label();
    private wSpe = new Laya.Image();

    constructor() {
        super();
        this.size(this.WID, this.HEI);
        this.addChild(this.wImg);
        this.addChild(this.wName);
        this.addChild(this.wSpe);
    }

    public init(walletName: string) {
        this.wImg.skin = 'img/wallet_manage.png';
        this.wImg.left = 10;
        this.wImg.width = 30;
        this.wImg.height = 30;
        this.wImg.top = (this.HEI - this.wImg.height)/2;

        this.wName.text = walletName.replace(/([^]{5})([^]+)/, "$1.");
        this.wName.left = 50;
        this.wName.height = 30;
        this.wName.valign = 'middle';
        this.wName.top = (this.HEI - this.wName.height)/2;

        this.wSpe.skin = config.resource.sperated;
        this.wSpe.top = this.HEI;
        this.wSpe.left = 0;
        this.wSpe.right = 0;
    }
}