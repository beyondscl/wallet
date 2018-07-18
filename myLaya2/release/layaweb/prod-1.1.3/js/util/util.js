var util = /** @class */ (function () {
    function util() {
    }
    util.setMainView = function (v) {
        this._mainView = v;
    };
    util.getMainView = function () {
        return this._mainView;
    };
    util.getAddr = function (addr) {
        return addr.replace(/([^]{8})([^]{26})([^]*)/, "$1......$3");
    };
    //删除
    util.delItem = function (itemName) {
        var data = laya.net.LocalStorage.removeItem(itemName);
    };
    //获取storage，返回json
    util.getItem = function (itemName) {
        var data = laya.net.LocalStorage.getItem(itemName);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    };
    //设置storage，输入json
    //设置storage，输入jsonString
    util.setItemNoJson = function (itemName, data) {
        laya.net.LocalStorage.setItem(itemName, data);
    };
    //['abc']需要调用下面这个方法
    util.setItemJson = function (itemName, data) {
        data = JSON.stringify(data);
        laya.net.LocalStorage.setItem(itemName, data);
    };
    //生成二维码:qrcode._oDrawing._elImage.src
    util.createEwm = function (w, h, value, caller, callBack) {
        try {
            console.log("createEwm    value:" + value);
            var div = Laya.Browser.document.createElement("div");
            var qrcode = new Laya.Browser.window.QRCode(div, {
                width: w,
                height: h
            });
            qrcode.makeCode(value);
            Laya.timer.loop(300, caller, callBack, [qrcode]);
        }
        catch (error) {
            console.log("createEwm error :", error);
        }
    };
    //复制功能
    util.getCopyValue = function (value, callBack, data) {
        // 只能使用native 方法
        try {
            console.log("try ClipboardJS value:" + value);
            var btn = Laya.Browser.document.createElement('button');
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
        }
        catch (error) {
            console.log("getCopyValue    error:" + error);
        }
        var json = {
            "type": 1,
            "data": value
        };
        try {
            Laya.Browser.window.Bridge.callApp(JSON.stringify(json));
            callBack(data);
        }
        catch (error) {
            console.log("复制只支持app");
        }
    };
    //设置屏幕
    util.setScreen = function (comp) {
        var screenW = Laya.Browser.width;
        comp.scaleX = screenW / config.prod.appWidth;
        comp.scaleY = config.prod.scale * screenW / config.prod.appWidth;
    };
    //ui util
    util.getScreenWidth = function () {
        if (Laya.stage) {
            return Laya.stage.width;
        }
        return config.prod.appWidth;
    };
    //密码等级0-3 : 弱-极强
    util.getPassLevel = function (view, level) {
        for (var i = view._childs.length - 1; i >= 0; i--) {
            var t = view._childs[i];
            var m = [3, 2, 1, 0];
            if (m[i] <= level) {
                if (level == 0) {
                    t.skin = config.resource.passLeveSW;
                }
                else {
                    t.skin = config.resource.passLevelS;
                }
            }
            else {
                t.skin = config.resource.passLevelW;
            }
        }
    };
    //验证字符串是否是数字
    util.isNumber = function (theObj) {
        var reg = /^[0-9]+.?[0-9]*$/;
        if (reg.test(theObj)) {
            return true;
        }
        return false;
    };
    //随机字符
    util.randomString = function (len) {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    };
    //获取日志yyyy-M-d hh:mi:ss
    util.getFormatTime = function () {
        var date = new Date();
        var year = date.getFullYear(), month = date.getMonth() + 1, //月份是从0开始的
        day = date.getDate(), hour = date.getHours(), min = date.getMinutes(), sec = date.getSeconds();
        var newTime = year + '-' +
            month + '-' +
            day + ' ' +
            hour + ':' +
            min + ':' +
            sec;
        return newTime;
    };
    //---------------------------------------------
    //验证手机号码
    util.vilPhoneNumber = function (phone) {
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/; //简单验证，可以更新
        if (reg.test(phone)) {
            return true;
        }
        return false;
    };
    //compstack
    //---------------------------------------------
    util.putCompStack = function (comp) {
        this._compStack[this._compStack.length] = comp;
    };
    //请和上面的配置使用，谨慎使用
    //args[type] type1 =1 
    util.compShow = function (args) {
        for (var i = 1; i < this._compStack.length; i++) {
            if (this._compStack[i]) {
                var comp = this._compStack[i];
                comp.removeSelf();
            }
        }
        if (this._compStack[0]) {
            var comp = this._compStack[0];
            var type = args[0];
            if (type && 1 == type) { //1:备份助记词
                var comp_1 = this._compStack[0];
                comp_1.visible = true;
                comp_1.btn_backup.visible = false;
            }
            else {
                var comp_2 = this._compStack[0];
                comp_2.visible = true;
            }
        }
        this._compStack = [];
    };
    util.compClear = function () {
        this._compStack = [];
    };
    //删除所有已经存入的comp
    util.compDeleteAll = function () {
        for (var i = 0; i < this._viewStack.length; i++) {
            var t = this._viewStack[i];
            t.removeSelf();
        }
        this._compStack = [];
    };
    //---------------------------------------------
    //_viewStack
    util.clearView = function () {
        this._viewStack = [];
    };
    util.deleteView = function () {
        console.log("deleteView", this._viewStack);
        for (var i = 1; i < this._viewStack.length; i++) {
            try {
                if (this._viewStack[i] && this._viewStack[i].comp) {
                    this._viewStack[i].comp.removeSelf();
                    console.log("deleteView_:", this._viewStack[i].comp);
                }
            }
            catch (error) {
            }
        }
        this._viewStack = [];
    };
    util.putView = function (v) {
        this._viewStack.push(v);
    };
    util.showView = function (args) {
        for (var i = 1; i < this._viewStack.length; i++) {
            if (this._viewStack[i]) {
                if (this._viewStack[i] && this._viewStack[i].comp) {
                    var comp = this._viewStack[i].comp;
                    comp.removeSelf();
                }
            }
        }
        if (this._viewStack[0]) {
            var t = this._viewStack[0];
            var type = args[0];
            if (type && 2 == type && t) { //转账成功
                var v = this._viewStack[0];
                v.comp.visible = true;
                v.refresh();
            }
            else if (type && 3 == type && t) { //删除钱包成功
                var v = this._viewStack[0];
                v.setData(service.walletServcie.getWallets());
                v.comp.visible = true;
            }
        }
        this._viewStack = [];
    };
    //---------------------------------------------
    //判断一个数组中是否包含一个元素
    util.isContain = function (array, item) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == item) {
                return true;
            }
        }
        return false;
    };
    //密码算法
    util.getPassScore = function (pass) {
        var score = 0;
        //长度判断
        var reg = /(?=.{8,})/;
        if (reg.test(pass)) { //
            score += 25;
        }
        //数字判断
        reg = /\D*/;
        var _pass = pass.replace(reg, '');
        if (_pass.length == 1) {
            score += 10;
        }
        else if (_pass.length > 1) {
            score += 20;
        }
        //字母判断
        reg = /^[a-z]*$/; //全小写
        if (reg.test(pass)) {
            score += 10;
        }
        reg = /^[A-Z]*$/; //全大写
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
        reg = /(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})/; //1个
        if (reg.test(pass)) {
            score += 10;
        }
        reg = /(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2,})/; //大于1个
        if (reg.test(pass)) {
            score += 25;
        }
        //其他
        reg = /(?=.*[A-Za-z])(?=.*\d)/;
        if (reg.test(pass)) { //包含不限于字母数字
            score += 2;
        }
        reg = /(?=.*[A-Za-z])(?=.*\d)(?=(?:.*?[!@#$%*()_+^&}{:;?.]))/;
        if (reg.test(pass)) { //包含不限于字母数字特殊
            score += 3;
        }
        reg = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=(?:.*?[!@#$%*()_+^&}{:;?.]))/;
        if (reg.test(pass)) { //包含不限于大小写字母数字特殊字符
            score += 5;
        }
        //返回等级
        if (score < 35) {
            return 0;
        }
        else if (score < 50) {
            return 1;
        }
        else if (score < 70) {
            return 2;
        }
        else if (score < 90) {
            return 3;
        }
        else {
            return 4;
        }
    };
    // wei 转人民币
    // 其他的要转。以后再做
    util.coinToRmb = function (amount, coin) {
        if (coin == 'ETH') {
            return (amount / config.prod.WEI_TO_ETH * mod.userMod.ethToUsd * mod.userMod.usdToRmb).toFixed(2);
        }
        return 0;
    };
    //用于钱包钱包备份相关
    //提供一个数组存储comp删除，第一个显示，其余的删除,在你不明白的时候不要使用该相关函数
    util._compStack = [];
    //所有的页面，view非comp，为了不影响之前的代码
    util._viewStack = [];
    return util;
}());
//# sourceMappingURL=util.js.map