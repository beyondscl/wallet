// api 请参考 https://github.com/ConsenSys/eth-lightwallet
var web3 = new Web3();
var global_keystore;
var allInstance = {}; //存储合约实例

const HOST = main_config[env].HOST;


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
            if(err){
                reject({"retCode":2, "error": err});
            }
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
    return new Promise((resolve, reject) =>{
        global_keystore.passwordProvider = function(callback){
            callback(null, password);
        };
        global_keystore.keyFromPassword(password, function (err, pwDerivedKey) {
            if(global_keystore.isDerivedKeyCorrect(pwDerivedKey)){
                    value = parseFloat(valueEth)*1.0e18;
                    web3.eth.sendTransaction({from: fromAddr, to: toAddr, value: value, gasPrice: gasPrice, gas: gas},
                        function (err, txhash) {
                            if(err){
                                reject({"retCode":1, "error":err})
                            }else{
                                resolve({"retCode":0, "txhash":txhash})
                            }
                    })
            }else{
                reject({"retCode":2, "error":"Incorrect passwrod"})
            }
        })
    })
}

/**
    fromAddr:string(),
    contractAddr:string(),
    abi:JSON,
    functionName:string(),
    args:[],
    valueEth:float,
    gasPrice:integer(),
    gas:integer()
*/
function functionCall(password, fromAddr, contractAddr, abi, functionName, args, valueEth, gasPrice, gas) {
    return new Promise((resolve, reject) =>{
        global_keystore.passwordProvider = function(callback){
            callback(null, password);
        };
        global_keystore.keyFromPassword(password, function (err, pwDerivedKey) {
            if(global_keystore.isDerivedKeyCorrect(pwDerivedKey)){
                    var contract = web3.eth.contract(abi).at(contractAddr);
                    var value = parseFloat(valueEth)*1.0e18;
                    args.push({from: fromAddr, value: value, gasPrice: gasPrice, gas: gas})
                    var callback = function(err, txhash) {
                        if(err){
                            reject({"retCode":1, "error":err})
                        }else{
                            resolve({"retCode":0, "txhash":txhash})
                        }
                    }
                    args.push(callback);
                    contract[functionName].apply(this, args);
            }else{
                reject({"retCode":2, "error":"Incorrect passwrod"})
            }
        })
    })
}

function balanceOf(address, abi, contractAddr){
    return new Promise((resolve, reject) =>{
        if(isEmptyObject(getInstance(contractAddr))){
            setConctract(abi, contractAddr);
        }
        var contract = getInstance(contractAddr);
        contract.balanceOf(address, function(error, result){
            if(error){
                console.log("contract.balanceOf error:",error);
                console.log("contract.balanceOf result:", result);
                console.log("contract.balanceOf address:",address);
                console.log("contract.balanceOf contract:",contract);
                console.log("contract.balanceOf contractAddr:",contractAddr);
                console.log("contract.balanceOf abi:",abi);
                resolve({"retCode":1, "error":error})
            }else{
                resolve({"retCode":0, "ret":result})
            }
        })
    })
}

function newGetBalance(address, contractAddr){
    return new Promise((resolve, reject) =>{
        var contract = getInstance(contractAddr);
        contract.balanceOf(address, function(error, result){
            if(error){
                console.log("newGetBalance error result address contractAddr:",error, result,address,contractAddr);
                resolve({"retCode":1, "error":error})
            }else{
                resolve({"retCode":0, "ret":result})
            }
        })
    })
}

function getBalance(addr) {
    return new Promise((resolve, reject) =>{
        web3.eth.getBalance(addr, function (err, result) {
            if(err){
                resolve({"retCode":1, "error":err})
            }else{
                resolve({"retCode":0, "ret":result})
            }
        })
    })
}

function isSeedValid(seed){
    return lightwallet.keystore.isSeedValid(seed);
}

/**
    address: string(), 合约地址
    abi: json, 合约abi
    functionName: string(),函数名
    args:[], 函数的参数列表  举例 函数为ERC20的 transfer的时候 [toAddr, value]
    obj: {}, 交易的默认参数 {from:from, to: to, value: value}

*/
function estimateGas(address, abi, functionName, args, obj){
    return new Promise((resolve, reject) =>{
        var contract = web3.eth.contract(abi).at(address);
        // var callData = contract.transfer.getData(args[0], args[1]);
        // var gasEstimate = web3.eth.estimateGas({
        //     from: obj.from,
        //     to: address,
        //     data: callData
        // });
        args.push(obj);
        var callback = function(err, ret) {
            if(err){
                reject({"retCode":1, "error":err})
            }else{
                resolve({"retCode":0, "ret":ret})
            }
        };
        args.push(callback);
        contract[functionName].estimateGas.apply(this, args);


        // resolve(contract[functionName].estimateGas.apply(this, args));
    })
}

//初始化设置合约
function setConctract(abi, address){
    var contract = web3.eth.contract(abi).at(address);
    setInstance(address, contract);
}

//对象操作
function setInstance(_addr, _instance){
    allInstance[_addr]=_instance;
};

function getInstance(_addr){
    return allInstance[_addr];
};

function removeInstance(_addr){
    delete allInstance[_addr];
};

function isEmptyObject(obj)
{
    for(var key in obj){
        return false
    };
    return true
};
