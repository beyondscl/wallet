class util{
    constructor(){

    }
    public static getAddr(addr:string):string{
        return addr.replace(/([^]{8})([^]{20})([^]*)/,"$1******$2");
    }
}