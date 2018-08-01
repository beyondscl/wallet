//钱包数据模型
module mod {
    export class walletMod {
        //基本属性
        public wName;
        public wPassword;
        public wPrivateKey;
        public wKeyStore;
        public wAddr: string;
        public wCoins: Array<string>;//['ETH','ABC'...]
        public wSkin: string = config.resource.walletImg;
        public wZjc: string;
        public wMemoryWords:string;

        //该钱包的总金额rmb，用于管理钱包显示,在你确认有值的情况下获取
        public wAmount: number = 0;
        private wCoinAmount: Array<number> = [];

        constructor() {

        }

        //初始化
        public init(wName, wPassword, wPrivateKey, wKeyStore, wAddr, wCoins: Array<string>, wZjc: string) {
            this.wName = wName;
            this.wPassword = wPassword;
            this.wPrivateKey = wPrivateKey;
            this.wKeyStore = wKeyStore;
            this.wAddr = "0x" + wAddr;//注意地址
            this.wCoins = wCoins;
            this.wZjc = wZjc;
            this.wMemoryWords = wZjc;
        }

        public toJson() {
            let json = {
                wName: this.wName,
                wPassword: this.wPassword,
                wPrivateKey: this.wPrivateKey,
                wKeyStore: this.wKeyStore,
                wAddr: this.wAddr,
                wCoins: this.wCoins,
                wZjc: this.wZjc,
                wMemoryWords:this.wMemoryWords
            };
            return json;
        }

        public setWallet(json: any) {
            this.wName = json.wName;
            this.wPassword = json.wPassword;
            this.wPrivateKey = json.wPrivateKey;
            this.wKeyStore = json.wKeyStore;
            this.wAddr = json.wAddr;//注意地址
            this.wCoins = json.wCoins;
            this.wZjc = json.wZjc;
            this.wMemoryWords = json.wMemoryWords;
        }

        public getCoinSelected(coin: string) {
        }
    }
}