//不要覆盖改变量main_config | env的值
var env = 'dev';// prod(国外正式环境) | dev(国内外面测试环境) | debug (本地环境)
var main_config = {
    dev: {
        HOST: 'https://rinkeby.infura.io/2F62Qc2BC0h9WHj2553t',
        apiLocalHost : "http://120.79.236.139",
        WWEC_ADDR: "0xe2295aab7dbe7df9ad985ca45d019801865e253f",
        VERSION:"1.1.4",
        downLoadUrl:"http://120.79.30.150/com.wwec.wallet.apk",
    },
    prod: {
        HOST: 'https://mainnet.infura.io/2F62Qc2BC0h9WHj2553t',
        apiLocalHost : "https://wallet.wwec.top",
        WWEC_ADDR: "0xd33996d55fd5c5dabf5ec7eb24a94b57263de169",
        VERSION:"1.1.4",
        downLoadUrl:"http://120.79.30.150/com.wwec.wallet.dev.apk",
    },
    debug:{
        HOST: 'https://rinkeby.infura.io/2F62Qc2BC0h9WHj2553t',
        apiLocalHost : "http://192.168.2.148:3005",
        WWEC_ADDR: "0xe2295aab7dbe7df9ad985ca45d019801865e253f",
        VERSION:"1.1.4",
        downLoadUrl:"http://120.79.30.150/com.wwec.wallet.dev.apk",
    }
}