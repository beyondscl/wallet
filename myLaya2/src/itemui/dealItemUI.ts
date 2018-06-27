//交易列表
class dealItemUI extends Box {
    public static WID: number = util.getScreenWidth();
    public static HEI: number = 50;

    private img = new Laya.Image();//发送或接受
    private lab_deal_name: Label = new Label();//发送或接受
    private lab_addr: Label = new Label();//地址
    private lab_amount: Label = new Label();//总量
    private sperated = new Laya.Image();

    constructor() {
        super();
        this.size(dealItemUI.WID, dealItemUI.HEI);
        this.addChild(this.img);
        this.addChild(this.lab_deal_name);
        this.addChild(this.lab_addr);
        this.addChild(this.lab_amount);
        this.addChild(this.sperated);

    }

    public init(dealItem: mod.dealtemMod): void {
        this.img.skin = dealItem.getDealImgSrc();
        this.img.width = 30;
        this.img.height = 30;
        this.img.centerY = 0;
        this.img.x = 10;

        this.lab_deal_name.text = dealItem.getDealChName();
        this.lab_deal_name.x = this.img.x + this.img.width + 5;
        this.lab_deal_name.y = 0;
        this.lab_deal_name.height = 25;
        this.lab_deal_name.valign = "middle";
        let trans_type1 = dealItem.dealType.toUpperCase() == config.msg.deal_transfer_in ? 'From' : 'To';//from | to
        this.lab_addr.text = trans_type1 + ": " + util.getAddr(dealItem.getDealAddr());
        this.lab_addr.x = this.img.x + this.img.width + 5;
        this.lab_addr.y = 25;
        this.lab_addr.height = 25;
        this.lab_addr.valign = "middle";

        let trans_type = dealItem.dealType.toUpperCase() == config.msg.deal_transfer_in ? '+' : '-';//+ | -
        this.lab_amount.text = trans_type + dealItem.dealAmount + " " + dealItem.dealCoinType.toUpperCase();
        this.lab_amount.color = dealItem.dealType.toUpperCase() == config.msg.deal_transfer_out ? 'red' : 'green';
        this.lab_amount.align = "right";
        this.lab_amount.valign = "middle";
        this.lab_amount.centerY = 0;
        this.lab_amount.right = 20;

        this.sperated.skin = config.resource.sperated;
        this.sperated.left = 0;
        this.sperated.right = 0;
        this.sperated.y = 49;
    }
}