/**
 * 交易记录与详情
 */
module service{
    export class transService {
        constructor(){

        }

        //查询交易明细
        public static getTxdetail(txhash,fun, args): any {
            let txhashDeatil = {
                url: config.prod.apiGetReceipt,
                token: mod.userMod.token,
                data: {
                    txhash:txhash
                },
                async: true,
                callbackArgs: args,
                success: function (ret, args) {
                    if ("object" == typeof ret)
                        ret = JSON.stringify(ret)
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (ret, args) {
                    if ("object" == typeof ret)
                        ret = JSON.stringify(ret)
                    fun(ret, args)
                    console.log("request error:", ret, args);
                }
            }
            Laya.Browser.window.Ajax.get(txhashDeatil);
        }
        //查询交易记录
        public static GetTransactionsList(address,pageNO,pageSize,type,contractaddress,fun, args): any {
            let list = {
                url: config.prod.apiGetTransactionsList,
                token: mod.userMod.token,
                data: {
                    address: address,
                    pageNo: pageNO,
                    pageSize: pageSize,
                    type:type,
                    contractaddress:contractaddress
                },
                async: true,
                callbackArgs: args,
                success: function (ret, args) {
                    if ("object" == typeof ret)
                        ret = JSON.stringify(ret)
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (ret, args) {
                    if ("object" == typeof ret)
                        ret = JSON.stringify(ret)
                    fun(ret, args)
                    console.log("request error:", ret, args);
                }
            }
            Laya.Browser.window.Ajax.get(list);
        }
        //交易记录转数据结构
        public static getTransListItem(data):Array<mod.dealtemMod>{
            let items:Array<mod.dealtemMod> = [];
            for(let i=0;i<data.list.length;i++){
                let temp = data.list[i];
                // "blockNumber": "2535368",
                // "timeStamp": "1477837690",
                // "hash": "0x8a1a9989bda84f80143181a68bc137ecefa64d0d4ebde45dd94fc0cf49e70cb6",
                // "from": "0x20d42f2e99a421147acf198d775395cac2e8b03d",
                // "to": "",
                // "value": "0",
                // "contractAddress": "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
                // "input": "",
                // "type": "create",
                // "gas": "254791",
                // "gasUsed": "46750",
                // "traceId": "0",
                // "isError": "0", // 0 代表正确，1代表有错误
                // "errCode": ""
                let dealType = temp.from==mod.userMod.defWallet.wAddr?config.msg.deal_transfer_out:config.msg.deal_transfer_in;
                let dealFromAddr = temp.from;
                let dealToAddr = temp.to;
                let dealAmount = (Number(temp.value)/1e18).toFixed(4);
                let dealCoinType = (temp.tokenSymbol+"").trim().toUpperCase();//service.walletServcie.getCoinInfo2(temp.contractAddress);
                let dealTransId = temp.hash;
                let dealGas = temp.gasUsed*temp.gasPrice/1e9;
                let dealTime = util.getFormatTime2(temp.timeStamp);
                let dealConfirm = "";
                let dealNonce = "";

                let item = new mod.dealtemMod(dealType, dealFromAddr, dealToAddr, dealAmount, dealCoinType, dealTransId, dealGas, dealTime, dealConfirm, dealNonce);
                items.push(item);
            }
            return items;
        }
        //获取所有币种
        public static getAllCoins(fun,args): any {
            let list = {
                url: config.prod.apiGetContractList,
                token: mod.userMod.token,
                data: {
                },
                async: true,
                callbackArgs: args,
                success: function (ret, args) {
                    if ("object" == typeof ret)
                        ret = JSON.stringify(ret)
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (ret, args) {
                    if ("object" == typeof ret)
                        ret = JSON.stringify(ret)
                    fun(ret, args)
                    console.log("request error:", ret, args);
                }
            }
            Laya.Browser.window.Ajax.get(list);
        }
    }
}
