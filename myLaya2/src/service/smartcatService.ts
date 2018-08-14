/**
* 智能猫相关 
*/
module service{
	export class smartcatService{
		constructor(){

		}

		//获取基础数据列表
		public static getAllMarketValue(fun, args): any {
			let ret = {
				hostAssetsValue: 1000,
				todayDividend: 200,
				canExchangeDividend: 10,
				hostDays: 1,
				smartCatStatus: false
			}
			fun(ret, args)
			// let options = {
			// 	url: '',
			// 	async: true,
			// 	success: function(ret, args) {
			// 		fun(ret, args)
			// 	},
			// 	complete: function () {
			// 	},
			// 	error: function (ret, args) {
			// 		fun(ret, args)
			// 		console.log('request error:' , ret, args)
			// 	}
			// }
			// Laya.Browser.window.Ajax.post(options)
		}

		// 获取资产列表
		public static getHostAssets(fun, args): any {
			let ret = []
			fun(ret, args)
		}
		//将获取资产列表的项目转换为holdAssets列表
		public static getAssetsListItem(data): Array<mod.holdAssets> {
			return []
		}

		// 关闭吧智能猫
		public static closeSmartCat(fun, args): any {

		}
	}
}