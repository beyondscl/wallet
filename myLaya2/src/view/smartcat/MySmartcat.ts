/**Created by the LayaAirIDE*/
module view.smartcat{
	export class MySmartcat extends ui.smartcat.MySmartcatUI {
		public claName = 'view.smartcat.MySmartcat';
		public comp: ui.smartcat.MySmartcatUI;
		private parentUI: view.SmartCat;
		private data: mod.smartCatMod;
		constructor(){
			super();
			this.init();
		}

		public setParentUI(main: view.SmartCat) {
			this.parentUI = main;
		}

		public setData(res, args) {
			for (var i in res) {
				mod.smartCatMod[i] = res[i];
			};
			let comp = args[0]
			comp.label_hostAssetsValue.text = '' + mod.smartCatMod.hostAssetsValue;
			comp.label_todayDividend.text = '' + mod.smartCatMod.todayDividend;
			comp.label_hostDays.text = '' + mod.smartCatMod.hostDays;
		}

		// 获取概览数据
		public getAllMarketValue() {
			service.smartcatService.getAllMarketValue(this.setData,[this.comp])
		}

		//获取已持有资产的列表
		public getHostAssets() {
			let wait = new view.alert.info(config.msg.WAIT_OPERATOR);
			wait.popup();
			service.smartcatService.getHostAssets(function (ret, args){
				let v: view.smartcat.MySmartcat = args[0];
				ret = JSON.parse(ret)
				if (ret.retCode == 0 && ret.data.list.length != 0) {
					let realData = [].concat(service.smartcatService.getAssetsListItem(ret.data));
					v.setListData([])
				} else if(ret.retCode != 0) {
					new view.alert.info(ret.reason ? ret.reason : config.msg.OPERATOR_ERROR).popup();
					v.setListData([])
				} else {
					v.setListData([])
				}
				args[1].stop();
			}, [this, wait])
		}

		private init() {
			this.comp = new ui.smartcat.MySmartcatUI();
			Laya.stage.addChild(this.comp);
			Laya.stage.bgColor = 'white';
			Laya.stage.scaleMode = config.prod.appAdapterType;
			this.getAllMarketValue();
			this.initEvent();
		}

		private initEvent() {
			this.comp.back_btn.on(Laya.Event.CLICK, this ,this.goBack);
<<<<<<< HEAD
			this.comp.btn_toggle.on(Laya.Event.CLICK, this, this.toggleSmartcat);
=======
			this.comp.turn.on(Laya.Event.CLICK, this, this.btnClick);
		}

		private btnClick () {
			let str = this.comp.turn.text;
			// if (str == '开启智能猫') {

			// }
			console.log(str);
>>>>>>> origin/dev
		}

		private goBack() {
			this.comp.removeSelf();
			this.parentUI.comp.visible = true;
			native.native.setCurrView(this.parentUI, 2);
		}

		// 将格式化的资产列表数据渲染展示
		private setListData(data: Array<mod.holdAssets>): void {

		}

		private toggleSmartcat() {
			if (mod.smartCatMod.smartCatStatus) {
				// 关闭智能猫
				let info = new view.alert.confirm(config.msg.CLOSE_SMARTCAT_CONFIRM, "确认关闭智能猫，扣去100%手续费");
				info.setCallback(function confirmCb(ret) {
					if (ret == 2) { 
						console.log('关闭智能猫页面ok')
						var load = new view.alert.waiting(config.msg.WAIT_CLOSE_SMARTCAT);
						load.popup();
						service.smartcatService.closeSmartCat(this.toggleSmartcatCb, [load]);
					}
				},[]);
				info.popup();
			} else {
				// 开启智能猫
				let info = new view.alert.confirm(config.msg.START_SMARTCAT_CONFIRM, "确认开启智能猫？");
				info.setCallback(function confirmCb(ret, args) {
					if (ret == 2) {
						console.log('xxxxx')
						mod.smartCatMod.smartCatStatus = true;
						return;
					}
				}, [smartcat]);
				info.popup();
			}
		}
		
		private toggleSmartcatCb() {
			this.init()
		}
	}
}