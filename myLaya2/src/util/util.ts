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
        var div: any = Laya.Browser.document.createElement("div");
        let qrcode = new Laya.Browser.window.QRCode(div, {
            width: w,
            height: h
        });
        qrcode.makeCode(value);
        console.log(qrcode._oDrawing._elImage.src);//这里是一个异步的
        // Laya.timer.loop(200, this, callBack(qrcode));
        Laya.timer.loop(300, caller, callBack, [qrcode]);
    }

    //复制功能
    public static getCopyValue(value: string, callBack: any, data: any) {
        let btn = Laya.Browser.document.createElement('button');
        var clipboard = new Laya.Browser.window.ClipboardJS(btn, {
            text: function () {
                return value;
            }
        });
        btn.click();
        clipboard.on('success', function (e) {
        });
        clipboard.on('error', function (e) {
            console.log(e);
        });
        callBack(data);
        btn.remove();
    }
}