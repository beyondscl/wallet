//添加币种：币种模型
module mod {
    export class coinItemMod {
        public coinName: string;
        public coinVender: string;
        public coinAddr: string;
        public coinImg: string;
        public coinSelected: boolean = false;

        constructor(coinImg, coinName, coinVender, coinAddr, coinSelected) {
            this.coinAddr = coinAddr;
            this.coinVender = coinVender;
            this.coinName = coinName;
            this.coinImg = coinImg;
            this.coinSelected = coinSelected;
        }
    }
}
