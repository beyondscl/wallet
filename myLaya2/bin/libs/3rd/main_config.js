//不要覆盖改变量main_config | env的值
var env = 'dev';// prod(国外正式环境) | test(国内外面测试环境) | dev (本地环境)
var main_config = {
    test: {
        HOST: 'http://rinkeby.wwec.top',//https://rinkeby.infura.io/2F62Qc2BC0h9WHj2553t
        apiLocalHost : "http://120.79.236.139",
        VERSION:"2.0.1",
        downLoadUrl:"http://120.79.30.150/app-dev.apk",
    },
    prod: {
        HOST: 'https://abc178.io',//https://mainnet.infura.io/2F62Qc2BC0h9WHj2553t
        apiLocalHost : "https://wallet.wwec.top",
        VERSION:"2.0.1",
        downLoadUrl:"http://120.79.30.150/app-release.apk",
    },
    dev:{
        HOST: 'http://192.168.2.158:8545',//158本地rinkeby
        apiLocalHost : "http://192.168.2.148:3005",
        VERSION:"2.0.1",
        downLoadUrl:"http://120.79.30.150/app-dev.apk",
    }
}