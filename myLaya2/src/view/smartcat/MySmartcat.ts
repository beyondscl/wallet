/**Created by the LayaAirIDE*/
module view.smartcat{
	export class MySmartcat extends ui.smartcat.MySmartcatUI {
		public claName = 'view.smartcat.MySmartcat';
		public comp: ui.smartcat.MySmartcatUI;
		private parentUI: view.SmartCat;
		private waiting: view.alert.waiting;
		private comfirm: view.alert.confirm;
		private info: view.alert.info;
		constructor(){
			super();
			this.init();
			this.initEvent();
		}

		public setParentUI(main: view.SmartCat) {
			this.parentUI = main;
		}

		private init() {
			this.comp = new ui.smartcat.MySmartcatUI();
			Laya.stage.addChild(this.comp);
			Laya.stage.bgColor = 'white';
			native.native.setCurrView(this.parentUI, 2);
			Laya.stage.scaleMode = config.prod.appAdapterType;
		}

		private initEvent() {
			this.comp.back_btn.on(Laya.Event.CLICK, this ,this.goBack);
			this.comp.turn_on.on(Laya.Event.CLICK, this, this.btnClick, [1]);
			this.comp.turn_off.on(Laya.Event.CLICK, this, this.btnClick, [2]);
		}

		private btnClick (index: number) {
			if (1 == index) {
				this.comfirm = new view.alert.confirm('开启智能猫', '确定开启智能猫?');
				this.comfirm.setCallback((ret, arg) => {
					if (ret == 2) {
						arg[0].waiting = new view.alert.waiting('开启中..');
						arg[0].waiting.popup();
						service.smartcatService.openCat(arg[0].openCb, arg[0]);
					}
				}, [this]);
				this.comfirm.popup();
			}
			if (2 == index) {
				this.comfirm = new view.alert.confirm('关闭智能猫', '托管天数低于20天,停止智能猫,将扣除启动智能猫资产的5%,托管天数大于20天,停止智能猫,将扣除启动智能猫资产的1%.');
				this.comfirm.setCallback((ret, arg) => {
					if (ret == 2) {
						arg[0].waiting = new view.alert.waiting('关闭中..');
						arg[0].waiting.popup();
						service.smartcatService.closeCat(arg[0].closeCb, arg[0]);
					}
				}, [this]);
				this.comfirm.popup();
			}
		}

		private openCb (ret, v) {
			v.waiting.stop();
			try {
				ret = JSON.parse(ret);
				v.info = new view.alert.info(ret.message);
				v.info.popup();
			} catch (err) {	
				console.log("openCatErr: " + err);
			}
		}

		private goBack() {
			this.comp.removeSelf();
			this.parentUI.comp.visible = true;
			native.native.setCurrView(this.parentUI, 1);
		}
	}
}