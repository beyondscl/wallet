//不要覆盖改变量main_config | env的值
var env = 'prod';// prod(国外正式环境) | dev(国内外面测试环境) | debug (本地环境)
var main_config = {
    dev: {
        HOST: 'https://rinkeby.infura.io/2F62Qc2BC0h9WHj2553t',
        apiLocalHost : "http://120.79.236.139",
        WWEC_ADDR: "0xe2295aab7dbe7df9ad985ca45d019801865e253f",
        VERSION:"1.1.4",
        downLoadUrl:"http://120.79.30.150/app-dev.apk",
    },
    prod: {
        HOST: 'https://mainnet.infura.io/2F62Qc2BC0h9WHj2553t',
        apiLocalHost : "https://wallet.wwec.top",
        WWEC_ADDR: "0x33f09ce2a7b55a866f7fa5200779c734d15cc840",
        VERSION:"1.1.4",
        downLoadUrl:"http://120.79.30.150/app-release.apk",
    },
    debug:{
        HOST: 'https://rinkeby.infura.io/2F62Qc2BC0h9WHj2553t',
        apiLocalHost : "http://192.168.2.148:3005",
        WWEC_ADDR: "0xe2295aab7dbe7df9ad985ca45d019801865e253f",
        VERSION:"1.1.4",
        downLoadUrl:"http://120.79.30.150/app-dev.apk",
    }
}