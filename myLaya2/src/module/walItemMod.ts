//钱包币种列表数据模型
module mod {
    export class walItemMod {
        public itemImgSrc: string = "";//图片地址
        public itemName: string = "ETH";//元素名称
        public itemTotal: string = "0.0000";//币总资产
        public itemMonType: string = "0.0000";//折算人民币|美元
        constructor() {
        }

        public setItem(itemImgSrc: string, itemName: string, itemTotal: string, itemMonType: string) {
            this.itemImgSrc = itemImgSrc;
            this.itemName = itemName;
            this.itemTotal = itemTotal;
            this.itemMonType = itemMonType;
        }

        public getItemImgSrc(): string {
            return "img/coins/" + this.itemName.toUpperCase() + ".png";
        }
    }
}
