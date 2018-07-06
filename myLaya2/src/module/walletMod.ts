//钱包数据模型
module mod {
    export class walletMod {
        public wName;
        public wPassword;
        public wPrivateKey;
        public wKeyStore;
        public wAddr: string;
        public wCoins: Array<string>;//['ETH','ABC'...]
        public wSkin: string = config.resource.walletImg;
        public wZjc: string;

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
        }

        public getCoinSelected(coin: string) {
        }
    }
}