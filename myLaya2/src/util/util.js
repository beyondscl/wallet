var util = /** @class */ (function () {
    function util() {
    }
    util.getAddr = function (addr) {
        return addr.replace(/([^]{8})([^]{26})([^]*)/, "$1......$3");
    };
    //获取storage，返回json
    util.getItem = function (itemName) {
        var data = Laya.LocalStorage.getItem(itemName);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    };
    //设置storage，输入jsonString
    util.setItemNoJson = function (itemName, data) {
        Laya.LocalStorage.setItem(itemName, data);
    };
    //设置storage，输入json
    //['abc']需要调用下面这个方法
    util.setItemJson = function (itemName, data) {
        data = JSON.stringify(data);
        Laya.LocalStorage.setItem(itemName, data);
    };
    //生成二维码:qrcode._oDrawing._elImage.src
    util.createEwm = function (w, h, value, caller, callBack) {
        var div = Laya.Browser.document.createElement("div");
        var qrcode = new Laya.Browser.window.QRCode(div, {
            width: w,
            height: h
        });
        qrcode.makeCode(value);
        console.log(qrcode._oDrawing._elImage.src); //这里是一个异步的
        // Laya.timer.loop(200, this, callBack(qrcode));
        Laya.timer.loop(300, caller, callBack, [qrcode]);
    };
    return util;
}());
//# sourceMappingURL=util.js.map