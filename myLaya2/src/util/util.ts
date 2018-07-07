class util {
    constructor() {

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

    //设置storage，输入jsonString
    public static setItemNoJson(itemName, data) {
        laya.net.LocalStorage.setItem(itemName, data);
    }

    //设置storage，输入json
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
            console.log("qrcode    value:" + value);
            console.log("qrcode._oDrawing._elImage.src " + qrcode._oDrawing._elImage.src);//这里是一个异步的
            Laya.timer.loop(300, caller, callBack, [qrcode]);
        } catch (error) {
            console.log(error)
        }
    }

    //复制功能
    public static getCopyValue(value: string, callBack: any, data: any) {
        // 只能使用native 方法
        // try {
        //     console.log("getCopyValue    value:" + value);
        //     let btn = Laya.Browser.document.createElement('button');
        //     var clipboard = new Laya.Browser.window.ClipboardJS(btn, {
        //         text: function () {
        //             return value;
        //         }
        //     });
        //     btn.click();
        //     clipboard.on('success', function (e) {
        //         console.log("success", e);
        //     });
        //     clipboard.on('error', function (e) {
        //         console.log("error" + e);
        //     });
        //     callBack(data);
        //     btn.remove();
        // } catch (error) {
        //     console.log("getCopyValue    error:" + error);
        // }
        callBack(data);
        let json = {
            "type": 1,
            "data": value
        };
        try {
            Laya.Browser.window.Bridge.callApp(JSON.stringify(json));
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

    public static getScreenWidth() {
        if (Laya.stage) {
            return Laya.stage.width
        }
        return config.prod.appWidth;
    }

    //ui util
    //密码等级0-3 : 弱-强
    public static getPassLevel(view: Laya.Box, level: number) {
        for (let i = view._childs.length - 1; i >= 0; i--) {
            let t: Laya.Image = view._childs[i];
            let m = [3, 2, 1, 0];
            if (m[i] <= level) {
                t.skin = config.resource.passLevelS;
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

    //验证手机号码
    public static vilPhoneNumber(phone: string): boolean {
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/;//简单验证，可以更新
        if (reg.test(phone)) {
            return true;
        }
        return false;
    }
}