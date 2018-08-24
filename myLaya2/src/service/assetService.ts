module service {
    export class assetService {
        constructor(){

        }
            /**
             * 资产明细
             */
            public static AssetList (page:number, pageSize: number, str: string, fun, arg) {
                // let partnerMain = {
                //     url: config.prod.apiPartner,
                //     token: "",
                //     method: "GET",
                //     data: {},
                //     async: true,
                //     callbackArgs: args,
                //     success: function (ret, args) {
                //         fun(ret, args);
                //     },
                //     complete: function () {
                //     },
                //     error: function (ret, args) {
                //         if ("object" == typeof ret)
                //             ret = JSON.stringify(ret)
                //         fun(ret, args)
                //         console.log("request error:", ret, args);
                //     }
                // }
                // Laya.Browser.window.Ajax.get(partnerMain);
                let data = {};
                if (str == 'BONUS') {
                    data = {
                        retCode: 0,
                        list: [
                            {
                                time: "2018 8-18 12:12:12",
                                type: '托管分红',
                                iconType: "WWEC",
                                count: '99'
                            },
                            {
                                time: "2018 8-18 12:12:12",
                                type: '伙伴分红',
                                iconType: "WWEC",
                                count: '99'
                            },
                            {
                                time: "2018 8-18 12:12:12",
                                type: '托管分红',
                                iconType: "WWEC",
                                count: '99'
                            },
                            {
                                time: "2018 8-18 12:12:12",
                                type: '托管分红',
                                iconType: "WWEC",
                                count: '99'
                            },
                            {
                                time: "2018 8-18 12:12:12",
                                type: '托管分红',
                                iconType: "WWEC",
                                count: '99'
                            },
                        ]
                    }
                    return fun(data, arg);
                } else {
                    data = {
                        retCode: 0,
                        list: [
                            {
                                time: "2018 8-18 12:12:12",
                                type: '转入',
                                iconType: "WWEC",
                                count: '99'
                            },
                            {
                                time: "2018 8-18 12:12:12",
                                type: '停止智能猫',
                                iconType: "WWEC",
                                count: '99'
                            },
                            {
                                time: "2018 8-18 12:12:12",
                                type: '兑换手续费',
                                iconType: "WWEC",
                                count: '99'
                            },
                            {
                                time: "2018 8-18 12:12:12",
                                type: '提取',
                                iconType: "WWEC",
                                count: '99'
                            },
                            {
                                time: "2018 8-18 12:12:12",
                                type: '矿工费',
                                iconType: "WWEC",
                                count: '99'
                            },
                        ]
                    }
                    return fun(data, arg);
                }
            }
            /**
             * 托管资产提取列表
             */
            public static tgAssetList (fun, arg) {
                let ret = {
                    retCode: 0,
                    data: [
                        {
                            imgSrc: 'img/coins/BCH.png',
                            name: 'BCH',
                            count: '0.000',
                            status: '提取'
                        },
                        {
                            imgSrc: 'img/coins/BTH.png',
                            name: 'BTH',
                            count: '0.000',
                            status: '提取'
                        },
                        {
                            imgSrc: 'img/coins/ETH.png',
                            name: 'ETH',
                            count: '0.000',
                            status: '提取'
                        },
                        {
                            imgSrc: 'img/coins/LTC.png',
                            name: 'LTC',
                            count: '0.000',
                            status: '冻结中'
                        }
                    ]
                }
                return fun(ret, arg)
            }
    }
}