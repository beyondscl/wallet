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
				todayDividend: 2009,
				canExchangeDividend: 10,
				hostDays: 18,
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

		// 获取已持有资产列表
		public static getHostAssets(fun, args): any {
			let ret = [];
			fun(ret, args);
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

		//获取所有支持的资产列表
		public static getAllHostAssets(): any{
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

		//将获取资产列表的项目转换为holdAssets列表
		public static getAssetsListItem(data): Array<mod.holdAssets> {
			let datas = []
			for (var i in data) {
				let item = data[i];
				let v = new mod.holdAssets(item.coinName, item.coinImg, item.coinTransfer, item.coinHost, item.coinAddr);
				data.push(v)
			}
			return datas
		}

		// 关闭智能猫
		public static closeSmartCat(fun, args): any {
			mod.smartCatMod.smartCatStatus = false
			args[0].stop()
		}
		
		// 开启智能猫
		public static startSmartCat(fun, args): any {
			mod.smartCatMod.smartCatStatus = true
		}
	}
}