//交易历史记录
var mod;
(function (mod) {
    var dealtemMod = /** @class */ (function () {
        function dealtemMod(dealType, dealFromAddr, dealToAddr, dealAmount, dealCoinType, dealTransId, dealGas, dealTime, dealConfirm, dealNonce) {
            this.dealType = config.msg.deal_transfer_in; // or send
            this.dealFromAddr = '';
            this.dealToAddr = '';
            this.dealAmount = 0;
            this.dealCoinType = 'ETH'; //other
            this.dealTransId = '';
            this.dealGas = 0; //最终消耗gas
            this.dealTime = ''; //yyyy-mm-dd HH:mm:mi
            this.dealConfirm = 0; //确认个数
            this.dealNonce = 0; //
            this.dealType = dealType;
            this.dealFromAddr = dealFromAddr;
            this.dealToAddr = dealToAddr;
            this.dealAmount = dealAmount;
            this.dealAmount = dealAmount;
            this.dealCoinType = dealCoinType;
            this.dealTransId = dealTransId;
            this.dealGas = dealGas;
            this.dealTime = dealTime;
            this.dealConfirm = dealConfirm;
            this.dealNonce = dealNonce;
        }

        dealtemMod.prototype.toJson = function () {
            var json = {
                "dealType": this.dealType,
                "dealFromAddr": this.dealFromAddr,
                "dealToAddr": this.dealToAddr,
                "dealAmount": this.dealAmount,
                "dealCoinType": this.dealCoinType,
                "dealTransId": this.dealTransId,
                "dealGas": this.dealGas,
                "dealTime": this.dealTime,
                "dealConfirm": this.dealConfirm,
                "dealNonce": this.dealNonce
            };
            return json;
        };
        dealtemMod.prototype.setJson = function (json) {
            this.dealType = json.dealType;
            this.dealFromAddr = json.dealFromAddr;
            this.dealToAddr = json.dealToAddr;
            this.dealAmount = json.dealAmount;
            this.dealCoinType = json.dealCoinType;
            this.dealTransId = json.dealTransId;
            this.dealGas = json.dealGas;
            this.dealTime = json.dealTime;
            this.dealConfirm = json.dealConfirm;
            this.dealNonce = json.dealNonce;
        };
        dealtemMod.prototype.getDealImgSrc = function () {
            return this.dealType == config.msg.deal_transfer_in ? config.resource.dealFromSrc : config.resource.dealToSrc;
        };
        dealtemMod.prototype.getDealChName = function () {
            return this.dealType == config.msg.deal_transfer_in ? config.msg.deal_cn_in : config.msg.deal_cn_out;
        };
        //发送返回目标地址，接受显示源地址
        dealtemMod.prototype.getDealAddr = function () {
            return this.dealType == config.msg.deal_transfer_in ? this.dealFromAddr : this.dealToAddr;
        };
        return dealtemMod;
    }());
    mod.dealtemMod = dealtemMod;
})(mod || (mod = {}));
//# sourceMappingURL=dealtemMod.js.map