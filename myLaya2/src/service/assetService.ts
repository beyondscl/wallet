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

            /**
             * 申请vip
             */
            public static applyVip (fun, arg){
                let ApplyVip = {
                    url: config.prod.apiApplyVip,
                    token: mod.userMod.token,
                    method: "POST",
                    data: {
                        "vip_id": 1
                    },
                    async: true,
                    callbackArgs: arg,
                    success: function (ret, arg) {
                        fun(ret, arg);
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
                Laya.Browser.window.Ajax.post(ApplyVip);
            }

            /**
             * 查看当前vip状态
             */
             public static vipStatus (fun, arg){
                let status = {
                    url: config.prod.apiVipStatus,
                    token: mod.userMod.token,
                    method: "GET",
                    data: {},
                    async: true,
                    callbackArgs: arg,
                    success: function (ret, arg) {
                        fun(ret, arg);
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
                Laya.Browser.window.Ajax.get(status);
            }
            /**
             * 申请Vip记录
             */
            public static vipHistory (fun, arg) {
                let histroy = {
                    url: config.prod.apiVipHistory,
                    token: mod.userMod.token,
                    method: "GET",
                    data: {},
                    async: true,
                    callbackArgs: arg,
                    success: function (ret, arg) {
                        fun(ret, arg);
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
                Laya.Browser.window.Ajax.get(histroy);
            }

            /**
             * 退出VIP
             */
            public static QuitVip (fun, arg) {
                let quit = {
                    url: config.prod.apiQuitVip,
                    token: mod.userMod.token,
                    method: "POST",
                    data: {
                        "vip_id": 1
                    },
                    async: true,
                    callbackArgs: arg,
                    success: function (ret, arg) {
                        fun(ret, arg);
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
                Laya.Browser.window.Ajax.post(quit);
            }
    }
}