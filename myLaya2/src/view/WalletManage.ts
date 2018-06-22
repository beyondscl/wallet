/**Created by the LayaAirIDE*/
module view{
	export class WalletManage extends ui.WalletManageUI{
		private comp:ui.WalletManageUI;
		private parentUI;
		constructor(){
			super();
			this.init();
			this.initEvent();
		}
		private init(){
			this.comp = new ui.WalletManageUI();
			Laya.stage.addChild(this.comp);
			Laya.stage.bgColor = 'white';
		}
		private initEvent(){
            this.comp.btn_goback.on(Laya.Event.CLICK,this,this.goBack);
		}
		private goBack(){
		Laya.stage.removeChild(this.comp);
		}
	}
}