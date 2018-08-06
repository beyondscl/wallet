/**
 * 钱包与web3.js
 */
module service {
    export class walletServcie {
        private static claName = 'service.walletServcie';
        constructor() {
        }

        /*
        *-----------------------------------------------------
        * 钱包普通操作
        *-----------------------------------------------------
        */

        //修改钱包名称
        //oName 旧钱包名称，nName新名词
        public static walletUpdateName(oName: string, nName: string): boolean {
            let walletJson = util.getItem(nName);
            if (walletJson) {//已经存在该钱包
                return false;
            }

            let ow = util.getItem(oName);
            if (ow) {
                ow.wName = nName;
                util.setItemJson(nName, ow);
                mod.userMod.defWallet.wName = nName;//更新默认钱包
                let walletNames = util.getItem(config.prod.getAppKey());//更新钱包列表
                if (walletNames) {
                    for (let i = 0; i < walletNames.length; i++) {
                        if (walletNames[i].trim() == oName.trim()) {
                            walletNames[i] = nName;
                            util.setItemJson(config.prod.getAppKey(), walletNames);
                            break;
                        }
                    }
                }
                //更新钱包具体数据
                let wallet = this.getWallet(oName);
                wallet.wName = nName;
                util.setItemJson(nName, wallet);
                util.delItem(oName);
                return true;
            }
            console.log("walletUpdateName no walletName:" + oName);
            return false;
        }

        //检查是否存在该钱包
        public static checkDupWal(wName: string): boolean {
            let walletJson = util.getItem(wName);
            return null == walletJson ? false : true;
        }

        //创建钱包
        public static creatWallet(wName: string, wPass: string, cb: any, args: Array<any>): mod.walletMod {
            try {
                let walletJson = util.getItem(wName);
                if (walletJson) {
                    return;
                }
                let mnemonicWord = Laya.Browser.window.genSeed();
                return Laya.Browser.window.generateAddresses(mnemonicWord, 1, wPass).then(
                    ret => {
                        cb(wName, wPass, mnemonicWord, ret, args)
                    },error =>{
                        util.log(this.claName,"creatWallet",[wName,'no_pass'],error);
                        cb(wName, wPass, mnemonicWord, {"retCode":3}, args)
                    }
                );
            } catch (error) {
                util.log(this.claName,"creatWallet",[wName,'no_pass'],error);
                console.log("creatWallet error:", error)
                cb("","","", {"retCode":3}, args)
            }
        }

        //删除钱包
        public static deleteWallet(wName: string, v: view.WalletDetail) {
            //删除list name
            //删除wallet
            //删除后可能没有钱包了,跳转到创建界面
            try {
                console.log("deleteWallet :", wName);
                let wals: Array<string> = util.getItem(config.prod.getAppKey());
                let walsNew: Array<string> = [];
                for (let i = 0; i < wals.length; i++) {
                    if (wals[i] != wName) {
                        walsNew.push(wals[i]);
                    }
                }
                util.setItemJson(config.prod.getAppKey(), walsNew);
                util.delItem(wName);
                //删除当前页面
                v.comp.removeSelf();
                if (walsNew.length == 0) {
                    util.deleteView();
                    new EnterApp();
                } else {
                    //后台更新主页数据
                    let walletMod = this.getWallet(walsNew[0]);
                    util.getMainView().initQueryData(walletMod);
                    //显示钱包管理页面
                    util.showView([3]);
                    new view.alert.Warn("删除钱包成功", "").popup();
                }

            } catch (error) {
                util.log(this.claName,"deleteWallet",[wName],error);
                new view.alert.Warn("删除钱包失败", "").popup();
                console.log("deleteWallet", error);
            }
        }

        //
        public static getKeyStore():string{
            return Laya.Browser.window.serialize();
        }

        //import钱包
        public static importWallet(mnemonicWord: string, wName: string, wPass: string, cb: any, args: Array<any>): mod.walletMod {
            try {
                let walletJson = util.getItem(wName);
                if (walletJson) {//已经验证过一次了
                    return;
                }
                return Laya.Browser.window.generateAddresses(mnemonicWord, 1, wPass).then(
                    ret => {
                        return cb(wName, wPass, mnemonicWord, ret, args)
                    },error =>{
                        util.log(this.claName,"importWallet",['no mnemonicWord',wName],error);
                    }
                );
            } catch (error) {
                util.log(this.claName,"importWallet",['no mnemonicWord',wName],error);
                console.log("importWallet error:", error)
            }
        }

        //获取所有币种：用于钱包添加币种
        public static getAllCoins(): Array<mod.coinItemMod> {
            return mod.userMod.allCoins;
        }

        //根据币种名称获取coin
        public static getCoinInfo(coinName): mod.coinItemMod {
            let allCoins: Array<mod.coinItemMod> = service.walletServcie.getAllCoins();
            for (let j = 0; j < allCoins.length; j++) {
                if (allCoins[j].coinName == coinName) {
                    return allCoins[j];
                }
            }
            return null;
        }

        //根据币种合约地址获取coin
        public static getCoinInfo2(contractAddr: string): mod.coinItemMod {
            let allCoins: Array<mod.coinItemMod> = service.walletServcie.getAllCoins();
            for (let j = 0; j < allCoins.length; j++) {
                if (allCoins[j].coinAddr == contractAddr) {
                    return allCoins[j];
                }
            }
            return null;
        }

        //获取所有币种：用于钱包添加币种,传入钱包名称，用于初始化
        public static getAllCoinsByWal(wName: string): Array<mod.coinItemMod> {
            let wallet: mod.walletMod = this.getWallet(wName);
            let selectedCoins = wallet.wCoins;
            let allCoins = this.getAllCoins();
            for (let i = 0; i < allCoins.length; i++) {
                let c: mod.coinItemMod = allCoins[i];
                for (let j = 0; j < selectedCoins.length; j++) {
                    if (c.coinName == selectedCoins[j]) {
                        c.coinSelected = true;
                    }
                }
            }
            return allCoins;
        }

        /**
         * @Deprecated
         * 获取币种交易列表
         */
        public static getDealListByWName(coinName: string): Array<mod.dealtemMod> {
            let datas: Array<mod.dealtemMod> = [];
            let deals = util.getItem(config.prod.getAppDealKey());
            if (deals) {
                for (let j = 0; j < deals.length; j++) {
                    let d = deals[j];
                    if (d.dealCoinType == coinName) {
                        let t = new mod.dealtemMod("", "", "", "", "", "", "", "", "", "");
                        t.setJson(d);
                        datas[datas.length] = t;
                    }
                }
            }
            return datas;
        }

        /**
         * @Deprecated
         * 获取所有交易列表
         */
        public static getDealList(): Array<mod.dealtemMod> {
            let datas: Array<mod.dealtemMod> = [];
            let deals = util.getItem(config.prod.getAppDealKey());
            if (deals) {
                for (let j = 0; j < deals.length; j++) {
                    let d = deals[j];
                    let t = new mod.dealtemMod("", "", "", "", "", "", "", "", "", "");
                    t.setJson(d);
                    datas[datas.length] = t;
                }
            }
            return datas;
        }

        //导入钱包：根据地址查询钱包是否存在
        public static getWalletByAddr(addr:string):mod.walletMod{
            let allWallets = service.walletServcie.getWallets();
            if (allWallets) { //判断是否存在
                    for (let i = 0; i < allWallets.length; i++) {
                        let w = allWallets[i] as mod.walletMod;
                        if (w.wAddr && w.wAddr == addr) { //一定要在初始化数据mod后再判断 0x
                            return w;
                        }
                    }
            }
            return null;
        }

        //管理钱包：获取所有钱包
        public static getWallets(): Array<mod.walletMod> {
            let walletNames = util.getItem(config.prod.getAppKey());
            if (walletNames) {
                let data = [];
                for (let i = 0; i < walletNames.length; i++) {
                    let walletJson = util.getItem(walletNames[i]);
                    let wal = new mod.walletMod();
                    wal.setWallet(walletJson);
                    data[data.length] = wal;
                }
                return data;
            }
            return null;
        }

        //管理钱包：根据钱包名称获取所有信息，备份之后，备份数据后部分数据会被置空
        public static getWallet(wName: string): mod.walletMod {
            let walletJson = util.getItem(wName);
            if (walletJson == null) {
                console.log("不存在钱包：" + wName);
                return null;
            }
            let t = new mod.walletMod()
            t.setWallet(walletJson);
            return t;
        }

        //判断钱包是否选择了该coin
        private static getSelected(wName, cName) {
            let wallet = util.getItem(wName);
            if (wallet) {
                for (let i = 0; i < wallet.wCoins.length; i++) {
                    if (wallet.wCoins[i] == cName) {
                        return true;
                    }
                }
            }
            return false;
        }

        public static checkPassword(any) {
            return true;
        }

        /**
         * 如果已经备份删除助记词是不能修改密码的
         * @param w 钱包
         * @param pass 新密码
         */
        public static resetPass(w: mod.walletMod, pass: string, callback, args) {
            if (this.vilMemoryWork(w.wZjc)) {
                Laya.Browser.window.generateAddresses(w.wZjc, 1, pass).then(
                    ret => {
                        return callback(ret, args)
                    },
                    error => {
                        console.error("重置密码失败:", error);
                        callback(null, args)
                    }
                );
            }
        }

        /*
        *-----------------------------------------------------
        *操作web3
        *-----------------------------------------------------
        */

        //创建，切换钱包需要实例化全局对象用于交易
        public static initLigthWallet(wKeyStore: string) {
            Laya.Browser.window.deserialize(wKeyStore);
        }

        //交易eth
        public static transfer(password, fromAddr, toAddr, value, gasPrice, gas, callback, args) {
            Laya.Browser.window.sendEther(password, fromAddr, toAddr, value, gasPrice, gas).then(
                ret => {
                    callback(ret, args)
                }, error => {
                    util.log(this.claName,"sendToken",['no_pass', fromAddr, toAddr, value, gasPrice, gas],error);
                    console.log("交易失败:", error);
                    callback(error, args)
                }
            ).catch(function (e) {
                callback(e, args)
            })
        }

        //发送token
        public static sendToken(pass, fromAddr, contractAddr, abi, functionName, args, valueEth, gasPrice, gas, callback, cbArgs) {
            if (!functionName) functionName = 'transfer';
            Laya.Browser.window.functionCall('no_pass', fromAddr, contractAddr, abi, functionName, args, valueEth, gasPrice, gas)
                .then(ret => {
                        callback(ret, cbArgs)
                    }
                    , error => {
                        util.log(this.claName,"sendToken",[pass, fromAddr, contractAddr, abi, functionName, args, valueEth, gasPrice, gas],error);
                        console.log("交易失败:", error);
                        callback(error, cbArgs)
                    }
                ).catch(function (e) {
                callback(e, cbArgs);
            });
        }

        //获取eth余额
        public static getBalance(addr, callback, arg) {
            Laya.Browser.window.getBalance(addr).then(
                ret => {
                    callback(ret, arg);
                }
                , error => {
                    console.log("获取余额 error:", error);
                    util.log(this.claName,"getBalance",[addr],error);
                }
            )
        }

        //获取token余额
        public static getTokenBalance(fromAddr, contractAddr, abi, callback, args) {
            let ret = Laya.Browser.window.balanceOf(fromAddr, abi, contractAddr).then(
                ret => {
                    callback(ret, args);
                }
                , error => {
                    console.log("获取token余额 error:", error);
                    util.log(this.claName,"getTokenBalance",[fromAddr, contractAddr, abi],error);
                }
            )
        }

        /**
         * Deprecated
         * @param data
         */
        public static addDealItem(data: mod.dealtemMod): void {
            let deals = util.getItem(config.prod.getAppDealKey());
            if (deals) {
                deals[deals.length] = data.toJson();
                util.setItemJson(config.prod.getAppDealKey(), deals);
            } else {//新建
                util.setItemJson(config.prod.getAppDealKey(), [data.toJson()]);
            }
        }

        //导入钱包校验助记词
        public static vilMemoryWork(words: string) {
            if (words && Laya.Browser.window.lightwallet.keystore.isSeedValid(words)) {
                return true;
            }
            return false;
        }

        /**
         * @Deprecated
         * @param addr
         */
        public static getIban(addr: string) {
            return Laya.Browser.window.web3.eth.iban.toAddress(addr);
        }

        /**
         * @Deprecated
         * @param data
         */
        public static ibanToAddr(data: string) {
            let addr = '';
            let amount = '';
            let token = 'ETH';
        }

        /**
         * 过滤的币种总数都不需要查
         * 1.eth查询
         * 2.token查询
         * @param wName
         * @param lab
         */
        public static getWalletMoney(wName: string, lab: Label): number {
            let wallet = this.getWallet(wName);
            let coins = wallet.wCoins;
            if (!coins || coins.length == 0) {
                return 0;
            }
            let t = 0;
            for (let i = 0; i < coins.length; i++) {
                if (util.isContain(config.prod.expCoins, coins[i])) {
                    continue;
                }
                this.getBalance(wallet.wAddr, function (ret, args) {
                    let lab = args[0] as Label;
                    let c = args[1];
                    if (ret.retCode == 0) {
                        lab.text = util.coinToRmb(ret.ret.toNumber(), c) + '';
                        console.log(c, lab.text);
                    }
                }, [lab, coins[i]]);
            }
            return t;
        }

        /**
         * 获得公告列表
         */
        public static getNotice(fun, args): any {
            // let getNotice = {
            //     url: config.prod.apiNoticeList,
            //     method: 'GET',
            //     token: mod.userMod.token,
            //     data: {},
            //     callbackArgs: args,
            //     async: true,
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
            // Laya.Browser.window.Ajax.get(getNotice);
            let ret = {
                data:[],
                code: 0
            };
            ret.data = [
                    {noticeTime:"2018-7-21 09:25:00", noticeTitle: "公告标题1", noticeContent: "公告内容1"},
                    {noticeTime:"2018-7-21 09:25:00", noticeTitle: "公告标题2", noticeContent: "公告内容2"},
                    {noticeTime:"2018-7-21 09:25:00", noticeTitle: "公告标题3", noticeContent: "公告内容3"},
                    {noticeTime:"2018-7-21 09:25:00", noticeTitle: "公告标题4", noticeContent: "公告内容4"},
                    {noticeTime:"2018-7-21 09:25:00", noticeTitle: "公告标题5", noticeContent: "公告内容5"}
                ]
                return fun(ret, args);
        }

        //web3 等外部操作--------------------------------end
    }
}