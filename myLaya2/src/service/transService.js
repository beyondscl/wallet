/**Created by the LayaAirIDE*/
var service;
(function (service) {
    var transService = /** @class */ (function () {
        function transService() {
        }
        //查询交易明细
        transService.getTxdetail = function (txhash, fun, args) {
            var txhashDeatil = {
                url: config.prod.apiGetReceipt,
                token: mod.userMod.token,
                data: {
                    txhash: txhash
                },
                async: true,
                callbackArgs: args,
                success: function (ret, args) {
                    if ("object" == typeof ret)
                        ret = JSON.stringify(ret);
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (ret, args) {
                    if ("object" == typeof ret)
                        ret = JSON.stringify(ret);
                    fun(ret, args);
                    console.log("request error:", ret, args);
                }
            };
            Laya.Browser.window.Ajax.get(txhashDeatil);
        };
        //查询交易记录
        transService.GetTransactionsList = function (address, pageNO, pageSize, fun, args) {
            var list = {
                url: config.prod.apiGetTransactionsList,
                token: mod.userMod.token,
                data: {
                    address: address,
                    pageNo: pageNO,
                    pageSize: pageSize,
                },
                async: true,
                callbackArgs: args,
                success: function (ret, args) {
                    if ("object" == typeof ret)
                        ret = JSON.stringify(ret);
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (ret, args) {
                    if ("object" == typeof ret)
                        ret = JSON.stringify(ret);
                    fun(ret, args);
                    console.log("request error:", ret, args);
                }
            };
            Laya.Browser.window.Ajax.get(list);
        };
        //交易记录转数据结构
        transService.getTransListItem = function (data) {
            var items = [];
            for (var i = 0; i < data.list.length; i++) {
                var temp = data.list[i];
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
                var dealType = temp.from == mod.userMod.defWallet.wAddr ? config.msg.deal_transfer_out : config.msg.deal_transfer_in;
                var dealFromAddr = temp.from;
                var dealToAddr = temp.to;
                var dealAmount = (Number(temp.value) / 1e18).toFixed(4);
                var dealCoinType = service.walletServcie.getCoinInfo2(temp.contractAddress);
                var dealTransId = temp.hash;
                var dealGas = temp.gas;
                var dealTime = util.getFormatTime2(temp.timeStamp);
                var dealConfirm = "";
                var dealNonce = "";
                var item = new mod.dealtemMod(dealType, dealFromAddr, dealToAddr, dealAmount, dealCoinType, dealTransId, dealGas, dealTime, dealConfirm, dealNonce);
                items.push(item);
            }
            return items;
        };
        //获取所有币种
        transService.getAllCoins = function (fun, args) {
            var list = {
                url: config.prod.apiGetContractList,
                token: mod.userMod.token,
                data: {},
                async: true,
                callbackArgs: args,
                success: function (ret, args) {
                    if ("object" == typeof ret)
                        ret = JSON.stringify(ret);
                    fun(ret, args);
                },
                complete: function () {
                },
                error: function (ret, args) {
                    if ("object" == typeof ret)
                        ret = JSON.stringify(ret);
                    fun(ret, args);
                    console.log("request error:", ret, args);
                }
            };
            Laya.Browser.window.Ajax.get(list);
        };
        return transService;
    }());
    service.transService = transService;
})(service || (service = {}));
//# sourceMappingURL=transService.js.map