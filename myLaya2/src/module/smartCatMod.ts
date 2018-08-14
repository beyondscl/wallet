/**
* smartCatMod  //我的智能猫
*/
module mod{
	export class smartCatMod{
		constructor(){

		}

		public static hostAssetsValue: number = 0.00; // 托管资产市值
		public static todayDividend: number = 0.00; //今日分红
		public static canExchangeDividend: number = 0.00; //可兑换分红
		public static hostDays: number = 0; //持有天数
		public static smartCatStatus: boolean = false; //智能猫开启状态
		public static holdAssets:Array<mod.holdAssets> = []; //已持有的资产的列表
	}
}