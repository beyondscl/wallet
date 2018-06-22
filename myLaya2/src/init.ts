module config{
    export class init{
        constructor(){
        }
        //load data from owner db
        //load data from public network
        public initData(addr:string){
            new net.HttpRequest().sendReq("https://www.baidu.com",null,"get","text",null,function(data){
                console.log("ping baidu success");
            });
            let ethBalanceUrl = config.prod.getEthBalanceUrl(addr);
            new net.HttpRequest().sendReq(ethBalanceUrl,null,"get","json",null,function(data){
                if(data.status==1){
                    mod.userMod.ethBalance = data.result;
                }
            });
            new net.HttpRequest().sendReq(config.prod.ethToUsd,null,"get","json",null,function(data){
                    mod.userMod.ethToUsd = data.bid;
            });

        }
    }
}