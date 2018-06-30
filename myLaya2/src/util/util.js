var util = /** @class */ (function () {
    function util() {
    }

    util.getAddr = function (addr) {
        return addr.replace(/([^]{8})([^]{26})([^]*)/, "$1......$3");
    };
    //获取storage，返回json
    util.getItem = function (itemName) {
        var data = laya.net.LocalStorage.getItem(itemName);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    };
    //设置storage，输入jsonString
    util.setItemNoJson = function (itemName, data) {
        laya.net.LocalStorage.setItem(itemName, data);
    };
    //设置storage，输入json
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
            console.log("qrcode    value:" + value);
            console.log("qrcode._oDrawing._elImage.src " + qrcode._oDrawing._elImage.src); //这里是一个异步的
            Laya.timer.loop(300, caller, callBack, [qrcode]);
        }
        catch (error) {
            console.log(error);
        }
    };
    //复制功能
    util.getCopyValue = function (value, callBack, data) {
        try {
            console.log("getCopyValue    value:" + value);
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
    };
    //设置屏幕
    util.setScreen = function (comp) {
        var screenW = Laya.Browser.width;
        comp.scaleX = screenW / config.prod.appWidth;
        comp.scaleY = config.prod.scale * screenW / config.prod.appWidth;
    };
    util.getScreenWidth = function () {
        if (Laya.stage) {
            return Laya.stage.width;
        }
        return config.prod.appWidth;
    };
    //ui util
    //密码等级0-3 : 弱-强
    util.getPassLevel = function (view, level) {
        for (var i = view._childs.length - 1; i >= 0; i--) {
            var t = view._childs[i];
            var m = [3, 2, 1, 0];
            if (m[i] <= level) {
                t.skin = config.resource.passLevelS;
            }
            else {
                t.skin = config.resource.passLevelW;
            }
        }
    };
    return util;
}());
//# sourceMappingURL=util.js.map