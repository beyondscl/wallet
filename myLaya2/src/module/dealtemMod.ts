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

        public getDealImgSrc(): string {
            return this.dealType == config.msg.deal_transfer_in ? config.resource.dealFromSrc : config.resource.dealToSrc;
        }

        public getDealChName(): string {
            return this.dealType == config.msg.deal_transfer_in ? config.msg.deal_cn_in : config.msg.deal_cn_out;
        }

        //发送返回目标地址，接受显示源地址
        public getDealAddr(): string {
            return this.dealType == config.msg.deal_transfer_in ? this.dealFromAddr : this.dealToAddr;
        }
    }
}
