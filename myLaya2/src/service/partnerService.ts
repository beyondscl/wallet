module service {
    export class partnerService {
        constructor(){

        }

        /**
         * 获取123级以及无限宇宙概况
         */
         public static partnerMain (fun: any, args: any): void {
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
            data = {
                personNum: "12345",
                nickSrc: 'img/main/daka.png',
                retCode: 0,
                list:[
                    {
                        title: '一级伙伴',
                        personNUm: '88',
                        share: '90%',
                        startCatNum: '80',
                        moneySta: '正常'
                    },
                    {
                        title: '二级伙伴',
                        personNUm: '88',
                        share: '90%',
                        startCatNum: '80',
                        moneySta: '正常'
                    },
                    {
                        title: '三级伙伴',
                        personNUm: '88',
                        share: '90%',
                        startCatNum: '80',
                        moneySta: '异常'
                    }
                ]
            }
            return fun(data, args);
         }

         /**
          * 获取一级伙伴的列表
          */

          public static partnerOneClass (page, pageSize, fun, arg) {
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
            data = {
                retCode: 0,
                list: [
                    {
                        phoneNum: '13518161234', 
                        todayfitnit: "123456",
                        startCatStatus: "启动中...",
                        tgMoney: '7894',
                        EthMoney: '1.1',
                        BtcMoney: '1.2',
                        EfgMoney: '1.3',
                        DghMoney: '1.4',
                        typeImg: ''
                    },
                    {
                        phoneNum: '13518161234', 
                        todayfitnit: "123456",
                        startCatStatus: "启动中...",
                        tgMoney: '7894',
                        EthMoney: '1.1',
                        BtcMoney: '1.2',
                        EfgMoney: '1.3',
                        DghMoney: '1.4',
                        typeImg: ''
                    },
                    {
                        phoneNum: '13518161234', 
                        todayfitnit: "123456",
                        startCatStatus: "启动中...",
                        tgMoney: '7894',
                        EthMoney: '1.1',
                        BtcMoney: '1.2',
                        EfgMoney: '1.3',
                        DghMoney: '1.4',
                        typeImg: ''
                    },
                    {
                        phoneNum: '13518161234', 
                        todayfitnit: "123456",
                        startCatStatus: "启动中...",
                        tgMoney: '7894',
                        EthMoney: '1.1',
                        BtcMoney: '1.2',
                        EfgMoney: '1.3',
                        DghMoney: '1.4',
                        typeImg: ''
                    },
                    {
                        phoneNum: '13518161234',
                        todayfitnit: "123456",
                        startCatStatus: "关闭中...",
                        tgMoney: '7894',
                        EthMoney: '1.1',
                        BtcMoney: '1.2',
                        EfgMoney: '1.3',
                        DghMoney: '1.4',
                        typeImg: ''
                    }
                ]
            }
            return fun(data, arg);
          }


         /**
          * 二级以及三级伙伴列表
          */
            public static parterMulList (page: number, pageSize: number, level: number,fun: any, arg: any) {
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
                if (2 == level) {
                    data = {
                        retCode: 0,
                        list: [
                            {
                                phoneNum : '13513513512',
                                status: "智能猫开启中..."
                            },
                            {
                                phoneNum : '13513513513',
                                status: "未开启"
                            },
                            {
                                phoneNum : '13513513514',
                                status: "智能猫开启中..."
                            },
                            {
                                phoneNum : '13513513515',
                                status: "未开启"
                            },
                            {
                                phoneNum : '13513513516',
                                status: "智能猫开启中..."
                            }
                        ]
                    }
                    return fun(data, arg);
                } else if (3 == level) {
                    data = {
                        retCode: 0,
                        list: [
                            {
                                phoneNum : '13513513512',
                                status: "未开启"
                            },
                            {
                                phoneNum : '13513513513',
                                status: "未开启"
                            },
                            {
                                phoneNum : '13513513514',
                                status: "未开启"
                            },
                            {
                                phoneNum : '13513513515',
                                status: "未开启"
                            },
                            {
                                phoneNum : '13513513516',
                                status: "智能猫开启中..."
                            }
                        ]
                    }
                    return fun(data, arg)
                } else if (4 == level) {
                    data = {
                        retCode: 0,
                        list: [
                            {
                                phoneNum : '12345678978',
                                status: "智能猫开启中"
                            },
                            {
                                phoneNum : '12345678978',
                                status: "未开启"
                            },
                            {
                                phoneNum : '12345678978',
                                status: "智能猫开启中"
                            },
                            {
                                phoneNum : '12345678978',
                                status: "未开启"
                            },
                            {
                                phoneNum : '12345678978',
                                status: "智能猫开启中..."
                            }
                        ]
                    }
                    return fun(data, arg);
                }
            }

            /**
             * 无限宇宙列表
             */
            public static partnerUniverList (fun, arg) {
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
                data = {
                    retCode: 0,
                    list: [
                        {
                            title: '水星居民',
                            personNum: 88,
                            startCat: 1
                        },
                        {
                            title: '金星居民',
                            personNum: 88,
                            startCat: 2
                        },
                        {
                            title: '火星居民',
                            personNum: 88,
                            startCat: 3
                        },
                        {
                            title: '木星居民',
                            personNum: 88,
                            startCat:4
                        },
                        {
                            title: '土星居民',
                            personNum: 88,
                            startCat: 5
                        },
                        {
                            title: '天王星居民',
                            personNum: 88,
                            startCat: 6
                        },
                        {
                            title: '海王星居民',
                            personNum: 88,
                            startCat: 7
                        },
                    ]
                }
                return fun(data, arg);
            }
            /**
             * 
             * @param str 电话号码
             * @param fun 
             * @param arg 
             */
            public static PartnerSearch (phoNum: string,fun, arg) {
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
                if (phoNum == '13518161000') {
                    data = {
                        retCode: 0,
                        type: 'One',
                        list: 
                            {
                                title: '一级伙伴',
                                phoneNum: '13518161234',
                                status: '启动中...',
                                tgMoney: '9999',
                                fitnit: '1234',
                                iconType: 'WWEC',
                                EthMoney: '1.0',
                                BtcMoney: '1.1',
                                EfgMoney: '1.2',
                                DghMoney: '1.3'
                            }
                        
                    }
                    return fun(data, arg);
                } else if (phoNum == '13518161001') {
                    data = {
                        retCode: 0,
                        type: 'Mulit',
                        list: 
                            {
                                title: '二级伙伴',
                                phoneNum: '13518161001',
                                status: '智能猫启动中...'
                            }
                        
                    }
                    return fun(data, arg);
                } else if (phoNum == '13518161002') {
                    data = {
                        retCode: 0,
                        type: 'More',
                        list: 
                            {
                                title: '海王星居民',
                                phoneNum: '13518161002',
                                status: '智能猫启动中...'
                            }
                        
                    }
                    return fun(data, arg);
                } else {
                     data = {
                        retCode: 1,
                    }
                    return fun(data, arg);
                }
            }
         
         /**
          * 伙伴收益
          */
          public static PartnerRenturn (fun, arg) {
            let ret = {
                retCode: 0,
                allReturn: 1258,
                oneReturn: 1000,
                sunReturn: 100,
                univerReturn: 158
            }
            return fun(ret, arg);
          }
    }
}