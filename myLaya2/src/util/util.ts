class util {
    constructor() {

    }

    public static getAddr(addr: string): string {
        return addr.replace(/([^]{8})([^]{20})([^]*)/, "$1......$2");
    }
    public static getStorageItem(itemName){
        let data = Laya.LocalStorage.getItem(itemName);
        if(data){
            return JSON.parse(data);
        }
        return null;
    }
    public static setStorageItem(itemName,data){
        Laya.LocalStorage.setItem(itemName,data);
    }
}