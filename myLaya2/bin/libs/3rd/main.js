// api 请参考 https://github.com/ConsenSys/eth-lightwallet
var web3 = new Web3();
var global_keystore;

const HOST = "http://192.168.2.106:8545";

function setWeb3Provider(keystore) {
    var web3Provider = new HookedWeb3Provider({
        host: HOST,
        transaction_signer: keystore
    });
    web3.setProvider(web3Provider);
}


// 生成12个助记词
function genSeed(){
    return lightwallet.keystore.generateRandomSeed();
}

/** 根据种子生成地址
    seed: string()? , //12个助记词
    totalAddresses: integer(), //要生成多少个地址
    password: string() //kyestore的密码
*/
function generateAddresses(seed, totalAddresses, password)
{
    return new Promise((resolve, reject) => {
        if(!lightwallet.keystore.isSeedValid(seed))
        {
            reject({"retCode":1, "error": "Please enter a valid seed"});
        }

        if(!Number.isInteger(parseInt(totalAddresses)))
        {
            reject({"retCode":1, "error": "Please enter valid number of addresses"});
        }

    	lightwallet.keystore.createVault({
    		password: password,
    	  	seedPhrase: seed
    	}, function (err, ks) {
    	  	ks.keyFromPassword(password, function (err, pwDerivedKey) {
    	    	if(err)
    	    	{
    	    		reject({"retCode":2, "error": err});
    	    	}
    	    	else
    	    	{
    	    		ks.generateNewAddress(pwDerivedKey, totalAddresses);
    	    		var addresses = ks.getAddresses();
                    global_keystore = ks;
                    setWeb3Provider(ks);
                    resolve({"retCode":0, "addresses": addresses});
    	    	}
    	  	});
    	});
    })
}

function getKs(){
    return global_keystore;
}

//序列化之后请用密码做对称加密,然后再存储本地
function serialize()
{
    if(!isEmptyObject(global_keystore)){
        var jsonStr =  global_keystore.serialize();
        return jsonStr;
    }else{
        console.error('empty keystore');
        return;
    }
}

//反序列化用于设置KS对象 返回一个ks对象
// serialized_keystore: string, //json-encoded string
function deserialize(serialized_keystore)
{
    var ks = lightwallet.keystore.deserialize(serialized_keystore);
    global_keystore = ks;
    setWeb3Provider(global_keystore);
    return global_keystore;
}

//host = "http://localhost:8545",
//valueEth 单位用 ether
function sendEther(password, fromAddr, toAddr, valueEth, gasPrice, gas)
{
    global_keystore.passwordProvider = function(callback){
        callback(null, password);
    };

    value = parseFloat(valueEth)*1.0e18;
    web3.eth.sendTransaction({from: fromAddr, to: toAddr, value: value, gasPrice: gasPrice, gas: gas}, function (err, txhash) {
        console.log('error: ' + err)
        console.log('txhash: ' + txhash)
    })
}

function isEmptyObject(obj)
{
    for(var key in obj){
        return false
    };
    return true
};
