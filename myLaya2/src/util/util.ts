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
}