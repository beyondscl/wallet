//不要覆盖改变量main_config | env的值
var env = 'dev';// prod(国外正式环境) | dev(国内外面测试环境) | debug (本地环境)
var main_config = {
    dev: {
        HOST: 'https://rinkeby.infura.io/2F62Qc2BC0h9WHj2553t',
        apiLocalHost : "http://120.79.236.139",
        WWEC_ADDR: "0xe2295aab7dbe7df9ad985ca45d019801865e253f",
    },
    prod: {
        HOST: 'https://mainnet.infura.io/2F62Qc2BC0h9WHj2553t',
        apiLocalHost : "https://wallet.wwec.top",
        WWEC_ADDR: "0xd33996d55fd5c5dabf5ec7eb24a94b57263de169",
    },
    debug:{
        HOST: 'http://192.168.2.106:8454',
        apiLocalHost:"http://120.79.236.139",
        WWEC_ADDR :"0xd86ad2fe358f4650b1035e967ffb8ef0381c4f58",

    }
}