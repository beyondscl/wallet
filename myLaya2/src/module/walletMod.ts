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
        public wZjc: string = "winga wingb wingcc wingd winge wingf wingg wingh wingi wingj wingk wingl";

        constructor(wName, wPassword, wPrivateKey, wKeyStore, wAddr, wCoins: Array<string>, wZjc: string) {
            this.wName = wName;
            this.wPassword = wPassword;
            this.wPrivateKey = wPrivateKey;
            this.wKeyStore = wKeyStore;
            this.wAddr = wAddr;
            this.wCoins = wCoins;
            if (wZjc) {
                this.wZjc = wZjc;
            }
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

        public getCoinSelected(coin: string) {
        }
    }
}