class util {
    constructor() {

    }

    public static getAddr(addr: string): string {
        return addr.replace(/([^]{8})([^]{26})([^]*)/, "$1......$3");
    }

    //获取storage，返回json
    public static getItem(itemName) {
        let data = Laya.LocalStorage.getItem(itemName);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    }

    //设置storage，输入jsonString
    public static setItemNoJson(itemName, data) {
        Laya.LocalStorage.setItem(itemName, data);
    }

    //设置storage，输入json
    //['abc']需要调用下面这个方法
    public static setItemJson(itemName, data) {
        data = JSON.stringify(data);
        Laya.LocalStorage.setItem(itemName, data);
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
            console.log("qrcode    value:" + value);
            console.log("qrcode._oDrawing._elImage.src " + qrcode._oDrawing._elImage.src);//这里是一个异步的
            Laya.timer.loop(300, caller, callBack, [qrcode]);
        } catch (error) {
            console.log(error)
        }
    }

    //复制功能
    public static getCopyValue(value: string, callBack: any, data: any) {
        try {
            console.log("getCopyValue    value:" + value);
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
    }

    //设置屏幕
    public static setScreen(comp: View) {
        let screenW = Laya.Browser.width;
        comp.scaleX = screenW / config.prod.appWidth;
        comp.scaleY = config.prod.scale * screenW / config.prod.appWidth;
    }

    public static getScreenWidth() {
        if (Laya.stage) {
            return Laya.stage.width
        }
        return config.prod.appWidth;
    }
}