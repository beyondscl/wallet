module config{
    export class prod{
        public static appKey:string = "wwwallet";//用于存储标识用户是否已经有钱包
        public static ethToUsd:string = "https://api.infura.io/v1/ticker/ethusd"; //获取eth与美元的汇率
        public static ethBalance:string = "https://api.etherscan.io/api?"; //获取账户eth
        public static apiKey:string = "42E8J65KFJMTEUA56SKX78MQDW4R7PPIUT";
        constructor(){
        }
        public static getEthBalanceUrl(addr:string):string{
            return this.ethBalance+"module=account&action=balance&address="+addr+"&apikey="+this.apiKey;
        }
    }
}