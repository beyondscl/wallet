/**Created by the LayaAirIDE*/
module view.smartcat{
	export class MySmartcat extends ui.smartcat.MySmartcatUI {
		public claName = 'view.smartcat.MySmartcat';
		public comp: ui.smartcat.MySmartcatUI;
		private parentUI: view.SmartCat;
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
			Laya.stage.scaleMode = config.prod.appAdapterType;
		}

		private initEvent() {
			this.comp.back_btn.on(Laya.Event.CLICK, this ,this.goBack);
			
		}

		private goBack() {
			this.comp.removeSelf();
			this.parentUI.comp.visible = true;
			native.native.setCurrView(this.parentUI, 2);
		}
	}
}