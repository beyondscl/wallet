//钱包中币种列表
class walItemUI extends Box {
    public static WID: number = 375;
    public static HEI: number = 100;

    private img = new Laya.Image();
    private lab_name: Label = new Label();
    private lab_total: Label = new Label();
    private lab_type: Label = new Label();
    private sperated = new Laya.Image();

    constructor() {
        super();
        this.size(walItemUI.WID, walItemUI.HEI);
        this.addChild(this.img);
        this.addChild(this.lab_name);
        this.addChild(this.lab_total);
        this.addChild(this.lab_type);
        this.addChild(this.sperated);

    }

    public init(walItem: mod.walItemMod): void {
        this.img.skin = walItem.getItemImgSrc();
        this.img.width = 60;
        this.img.height = 60;
        this.img.centerY = 0;
        this.img.x = 20;

        this.lab_name.text = walItem.itemName;
        this.lab_name.x = this.img.x + this.img.width + 20;
        this.lab_name.centerY = 0;

        this.lab_total.text = walItem.itemTotal;
        this.lab_total.height = 25;
        this.lab_total.align = "right";
        this.lab_total.valign = "middle";
        this.lab_total.right = 20;

        this.lab_type.text = "≈$" + walItem.itemMonType;
        this.lab_type.y = 25;
        this.lab_type.height = 25;
        this.lab_type.align = "right";
        this.lab_type.valign = "middle";
        this.lab_type.right = 20;

        this.sperated.skin = config.resource.sperated;
        this.sperated.left = 0;
        this.sperated.right = 0;
        this.sperated.y = walItemUI.HEI-1;
    }
}