/**
* 智能猫相关 
*/
module service{
	export class smartcatService{
		constructor(){

		}

		public static getAllMarketValue(fun, args): any {
			let options = {
			}
			Laya.Browser.window.Ajax.post(options)
		}
		/**
		 * 开启智能猫
		 */
		public static openCat (fun, args) {
			let open = {
                    url: config.prod.openCat,
                    token: mod.userMod.token,
                    method: "POST",
                    data: {},
                    async: true,
                    callbackArgs: args,
                    success: function (ret, args) {
                        fun(ret, args);
                    },
                    complete: function () {
                    },
                    error: function (ret, args) {
                        if ("object" == typeof ret)
                            ret = JSON.stringify(ret)
                        fun(ret, args)
                        console.log("request error:", ret, args);
                    }
                }
                Laya.Browser.window.Ajax.post(open);
		}
        /**
         * 关闭智能猫
         */
        public static closeCat (fun, args) {
			let close = {
                    url: config.prod.openCat,
                    token: mod.userMod.token,
                    method: "POST",
                    data: {},
                    async: true,
                    callbackArgs: args,
                    success: function (ret, args) {
                        fun(ret, args);
                    },
                    complete: function () {
                    },
                    error: function (ret, args) {
                        if ("object" == typeof ret)
                            ret = JSON.stringify(ret)
                        fun(ret, args)
                        console.log("request error:", ret, args);
                    }
                }
                Laya.Browser.window.Ajax.post(close);
		}
	}
}