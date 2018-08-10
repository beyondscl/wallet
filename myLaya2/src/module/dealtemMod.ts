//交易历史记录
module mod {
    export class dealtemMod {
        public dealType = config.msg.deal_transfer_in;// or send
        public dealFromAddr = '';
        public dealToAddr = '';
        public dealAmount = 0;
        public dealCoinType = 'ETH';//other
        public dealTransId = '';
        public dealGas = 0;//最终消耗gas
        public dealTime = '';//yyyy-mm-dd HH:mm:mi
        public dealConfirm = 0;//确认个数
        public dealNonce = 0;//

        constructor(dealType, dealFromAddr, dealToAddr, dealAmount, dealCoinType, dealTransId, dealGas, dealTime, dealConfirm, dealNonce) {
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

        public toJson() {
            let json = {
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

            }
            return json;
        }

        public setJson(json) {
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
        }

        public getDealImgSrc(): string {
            if(this.dealFromAddr==this.dealToAddr){
                return config.resource.dealSelfSrc;
            }
            return this.dealType == config.msg.deal_transfer_in ? config.resource.dealFromSrc : config.resource.dealToSrc;
        }

        public getDealChName(): string {
            if(this.dealFromAddr==this.dealToAddr){
                return config.msg.deal_cn_self;
            }
            return this.dealType == config.msg.deal_transfer_in ? config.msg.deal_cn_in : config.msg.deal_cn_out;
        }

        //返回全量地址
        public getDealAddr(): string {
            return this.dealType == config.msg.deal_transfer_in ? this.dealFromAddr : this.dealToAddr;
        }
        //返回 from  to self 
        public getDealType(): string {
            let trans_type1 = this.dealType.toUpperCase() == config.msg.deal_transfer_in ? 'From' : 'To';//from | to |self
            if(this.dealFromAddr==this.dealToAddr){
                trans_type1 = "Self";
            }
            return trans_type1;
        }
        //返回颜色red green blue
        public getDealColor(){
            if(this.dealFromAddr==this.dealToAddr){
                return "blue";
            }
            return this.dealType.toUpperCase() == config.msg.deal_transfer_in ? 'green':'red';
        }

        //返回符号+ - ''
        public getDealSymbol(){
            if(this.dealFromAddr==this.dealToAddr){
                return "";
            }
            return this.dealType.toUpperCase() == config.msg.deal_transfer_in ? '+':'-';
        }
        //用于明细展示
        public getDealAmount(){
            let trans_type = this.getDealSymbol();
            if (util.isContain(config.prod.expCoins, this.dealCoinType)) {//无法计算价格
                return  trans_type + this.dealAmount + ' ' + this.dealCoinType + " (RMB¥ - )";
            } else {//折算人民币
                return trans_type + this.dealAmount + ' ' + this.dealCoinType + " (RMB¥" + (this.dealAmount * mod.userMod.ethToUsd * mod.userMod.usdToRmb).toFixed(2) + ")";//-0.00001 ETH (US$0.05)
            }
        }

        //用于明细展示价格:0.01RMB
        public getDealGas(){
            return this.dealGas + " ("+(this.dealGas/1e9*mod.userMod.ethToUsd * mod.userMod.usdToRmb).toFixed(2)+" RMB¥)";
        }
    }
}
