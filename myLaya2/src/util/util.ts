class util {
    //用于钱包钱包备份相关
    //提供一个数组存储comp删除，第一个显示，其余的删除,在你不明白的时候不要使用该相关函数
    private static _compStack = [];
    //所有的页面，view非comp，为了不影响之前的代码
    private static _viewStack = [];
    // main view 这个变量很重要
    private static _mainView: view.WalletMain;

    constructor() {

    }

    public static setMainView(v: view.WalletMain) {
        this._mainView = v;
    }

    public static getMainView(): view.WalletMain {
        return this._mainView;
    }

    public static getAddr(addr: string): string {
        return addr.replace(/([^]{8})([^]{26})([^]*)/, "$1......$3");
    }

    //删除
    public static delItem(itemName) {
        let data = laya.net.LocalStorage.removeItem(itemName);
    }

    //获取storage，返回json
    public static getItem(itemName) {
        let data = laya.net.LocalStorage.getItem(itemName);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    }

    //设置storage，输入json

    //设置storage，输入jsonString
    public static setItemNoJson(itemName, data) {
        laya.net.LocalStorage.setItem(itemName, data);
    }

    //['abc']需要调用下面这个方法
    public static setItemJson(itemName, data) {
        data = JSON.stringify(data);
        laya.net.LocalStorage.setItem(itemName, data);
    }

    //生成二维码:qrcode._oDrawing._elImage.src
    public static createEwm(w: number, h: number, value: string, caller, callBack: any): any {
        try {
            console.log("createEwm    value:" + value);
            var div: any = Laya.Browser.document.createElement("div");
            let qrcode = new Laya.Browser.window.QRCode(div, {
                width: w,
                height: h
            });
            qrcode.makeCode(value);
            Laya.timer.loop(300, caller, callBack, [qrcode]);
        } catch (error) {
            console.log("createEwm error :", error)
        }
    }

    //复制功能
    public static getCopyValue(value: string, callBack: any, data: any) {
        // 只能使用native 方法
        try {
            console.log("try ClipboardJS value:" + value);
            let btn = Laya.Browser.document.createElement('button');
            var clipboard = new Laya.Browser.window.ClipboardJS(btn, {
                text: function () {
                    return value;
                }
            });
            btn.click();
            clipboard.on('success', function (e) {
                console.log("success", e);
            });
            clipboard.on('error', function (e) {
                console.log("error" + e);
            });
            callBack(data);
            btn.remove();
        } catch (error) {
            console.log("getCopyValue    error:" + error);
        }
        let json = {
            "type": 1,
            "data": value
        };
        try {
            Laya.Browser.window.Bridge.callApp(JSON.stringify(json));
            callBack(data);
        } catch (error) {
            console.log("复制只支持app")
        }
    }

    //设置屏幕
    public static setScreen(comp: View) {
        let screenW = Laya.Browser.width;
        comp.scaleX = screenW / config.prod.appWidth;
        comp.scaleY = config.prod.scale * screenW / config.prod.appWidth;
    }

    //ui util

    public static getScreenWidth() {
        if (Laya.stage) {
            return Laya.stage.width
        }
        return config.prod.appWidth;
    }

    //密码等级0-3 : 弱-极强
    public static getPassLevel(view: Laya.Box, level: number) {
        for (let i = view._childs.length - 1; i >= 0; i--) {
            let t: Laya.Image = view._childs[i];
            let m = [3, 2, 1, 0];
            if (m[i] <= level) {
                if (level == 0) {
                    t.skin = config.resource.passLeveSW;
                } else {
                    t.skin = config.resource.passLevelS;
                }
            } else {
                t.skin = config.resource.passLevelW;
            }
        }
    }

    //验证字符串是否是数字
    public static isNumber(theObj) {
        var reg = /^[0-9]+.?[0-9]*$/;
        if (reg.test(theObj)) {
            return true;
        }
        return false;
    }

    //随机字符
    public static randomString(len): string {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (let i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }

    //获取日志yyyy-M-d hh:mi:ss
    public static getFormatTime(): string {
        var date = new Date();
        var year = date.getFullYear(),
            month = date.getMonth() + 1,//月份是从0开始的
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();
        var newTime = year + '-' +
            month + '-' +
            day + ' ' +
            hour + ':' +
            min + ':' +
            sec;
        return newTime;
    }

    //---------------------------------------------

    //验证手机号码
    public static vilPhoneNumber(phone: string): boolean {
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/;//简单验证，可以更新
        if (reg.test(phone)) {
            return true;
        }
        return false;
    }

    //compstack
    //---------------------------------------------
    public static putCompStack(comp: View) {
        this._compStack[this._compStack.length] = comp;
    }

    //请和上面的配置使用，谨慎使用
    //args[type] type1 =1 
    public static compShow(args) {
        for (let i = 1; i < this._compStack.length; i++) {
            if (this._compStack[i]) {
                let comp: View = this._compStack[i];
                comp.removeSelf();
            }

        }
        if (this._compStack[0]) {
            let comp: View = this._compStack[0];
            let type = args[0];
            if (type && 1 == type) {//1:备份助记词
                let comp: view.WalletDetail = this._compStack[0];
                comp.visible = true;
                comp.btn_backup.visible = false;
            } else {
                let comp: View = this._compStack[0];
                comp.visible = true;
            }
        }
        this._compStack = [];
    }

    public static compClear() {
        this._compStack = [];
    }

    //删除所有已经存入的comp
    public static compDeleteAll() {
        for (let i = 0; i < this._viewStack.length; i++) {
            let t = this._viewStack[i] as View;
            t.removeSelf();
        }
        this._compStack = [];
    }

    //---------------------------------------------
    //_viewStack
    public static clearView() {
        this._viewStack = [];
    }

    public static deleteView() {
        console.log("deleteView", this._viewStack);
        for (let i = 1; i < this._viewStack.length; i++) {
            try {
                if (this._viewStack[i] && this._viewStack[i].comp) {
                    this._viewStack[i].comp.removeSelf();
                    console.log("deleteView_:", this._viewStack[i].comp);
                }
            } catch (error) {

            }
        }
        this._viewStack = [];
    }

    public static putView(v: View) {
        this._viewStack.push(v);
    }

    public static showView(args) {
        for (let i = 1; i < this._viewStack.length; i++) {
            if (this._viewStack[i]) {
                if (this._viewStack[i] && this._viewStack[i].comp) {
                    let comp: View = this._viewStack[i].comp;
                    comp.removeSelf();
                }
            }

        }
        if (this._viewStack[0]) {
            let t: View = this._viewStack[0];
            let type = args[0];
            if (type && 2 == type && t) {//转账成功
                let v: view.WalletTransfer = this._viewStack[0];
                v.comp.visible = true;
                v.refresh();
            } else if (type && 3 == type && t) {//删除钱包成功
                let v: view.WalletManage = this._viewStack[0];
                v.setData(service.walletServcie.getWallets());
                v.comp.visible = true;
            }
        }
        this._viewStack = [];
    }

    //---------------------------------------------


    //判断一个数组中是否包含一个元素
    public static isContain(array: Array<any>, item): boolean {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == item) {
                return true;
            }
        }
        return false;
    }

    //密码算法
    public static getPassScore(pass: string) {
        let score = 0;
        //长度判断
        let reg = /(?=.{8,})/;
        if (reg.test(pass)) {//
            score += 25;
        }
        //数字判断
        reg = /\D*/;
        let _pass = pass.replace(reg, '');
        if (_pass.length == 1) {
            score += 10;
        } else if (_pass.length > 1) {
            score += 20;
        }
        //字母判断
        reg = /^[a-z]*$/;//全小写
        if (reg.test(pass)) {
            score += 10;
        }
        reg = /^[A-Z]*$/;//全大写
        if (reg.test(pass)) {
            score += 10;
        }
        //包含大小写
        reg = /(?=.*[a-z])(?=.*[A-Z])/;
        // let reg2 = /(?=\d)/;
        // let reg3 = /(?=(?:.*?[!@#$%*()_+^&}{:;?.]))/;
        if (reg.test(pass)) {
            score += 20;
        }
        // + : >=1; * 任意次数;{n,} 大于等于n次 ; ? 0或者1次
        // (?=.*\d) 匹配任意字符开头，包含一个数字
        // ?:不捕获
        //特殊字符判断
        //前置后置表达式
        reg = /(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})/;//1个
        if (reg.test(pass)) {
            score += 10;
        }
        reg = /(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2,})/;//大于1个
        if (reg.test(pass)) {
            score += 25;
        }
        //其他
        reg = /(?=.*[A-Za-z])(?=.*\d)/;
        if (reg.test(pass)) {//包含不限于字母数字
            score += 2;
        }
        reg = /(?=.*[A-Za-z])(?=.*\d)(?=(?:.*?[!@#$%*()_+^&}{:;?.]))/;
        if (reg.test(pass)) {//包含不限于字母数字特殊
            score += 3;
        }
        reg = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=(?:.*?[!@#$%*()_+^&}{:;?.]))/;
        if (reg.test(pass)) {//包含不限于大小写字母数字特殊字符
            score += 5;
        }

        //返回等级
        if (score < 35) {
            return 0;
        } else if (score < 50) {
            return 1;
        } else if (score < 70) {
            return 2;
        } else if (score < 90) {
            return 3;
        } else {
            return 4;
        }
    }

    // wei 转人民币
    // 其他的要转。以后再做
    public static coinToRmb(amount: number, coin) {
        if (coin == 'ETH') {
            return (amount / config.prod.WEI_TO_ETH * mod.userMod.ethToUsd * mod.userMod.usdToRmb).toFixed(2);
        }
        return 0;
    }
}