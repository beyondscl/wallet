module config {
    export class prod {
        public static appKey: string = "wwwallet";//用于存储标识用户是否已经有钱包
        public static appAccept: string = "appAccept";//用于存储标识用户是否已经有钱包
        public static appDealKey: string = "wwwalletDeal";//
        public static ethToUsd: string = "https://api.infura.io/v1/ticker/ethusd"; //获取eth与美元的汇率
        public static ethBalance: string = "https://api.etherscan.io/api?"; //获取账户eth
        public static apiKey: string = "42E8J65KFJMTEUA56SKX78MQDW4R7PPIUT";
        public static appAdapterType = 'SCALE_EXACTFIT';

        // public static apiLocalHost = "http://192.168.2.106:3005";//dev
        public static apiLocalHost = "http://wallet.wwec.top";//prod


        public static getGasPrice: string = prod.apiLocalHost + "/api/gasPrice";//
        public static gasLimit: number = 21000;
        public static tokenGasLimit: number = 80000;
        public static getCode: string = prod.apiLocalHost + "/candy/sendSms";//获取短信验证码
        public static getCandy: string = prod.apiLocalHost + "/candy/sendCandy";//获取糖果


        public static appWidth = 750;
        public static appHeight = 1334;
        public static scale = prod.appHeight / prod.appWidth;//当初设计的高与宽比

        public static WEI_TO_ETH: number = 1e18;

        public static expCoins: Array<string> = ["WWEC"];//价格显示-,不计算总价

        constructor() {
        }

        public static getEthBalanceUrl(addr: string): string {
            return this.ethBalance + "module=account&action=balance&address=" + addr + "&apikey=" + this.apiKey;
        }
    }
}