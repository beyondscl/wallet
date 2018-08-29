/**
* 持有资产的模型 
*/
module mod{
	export class holdAssets{
		public coinName: string; //资产名称
		public coinImg: string; //资产图标
		public coinTransfer: Number; //资产汇率
		public coinHost: Number; //资产持有量
		public coinAddr: string; //资产转入地址

		constructor(coinName, coinImg, coinTransfer, coinHost, coinAddr){
			this.coinName = coinName;
			this.coinImg = coinImg;
			this.coinTransfer = coinTransfer;
			this.coinHost = coinHost;
			this.coinAddr = coinAddr;
		}
	}
}