/**Created by the LayaAirIDE*/
module view.coin{
	export class AddCoins extends ui.coin.AddCoinsUI{
		private comp:ui.coin.AddCoinsUI;
		private parentUI:ui.WalletMainUI;
		constructor(){
			super();
			this.init();
			this.initEvent();
			this.setData(null);
		}
		private init(){
			this.comp = new ui.coin.AddCoinsUI();
			this.stage.addChild(this.comp)
		}
		private initEvent(){
			this.comp.btn_goback.on(Laya.Event.CLICK,this,this.btnClick,[0]);
			this.comp.btn_query.on(Laya.Event.CLICK,this,this.btnClick,[1]);
		}
		private btnClick(index:number){
			switch(index){
				case 0:
					this.stage.removeChild(this.comp);
					new view.WalletMain().initQueryData(testData.getWalletInfo(this.parentUI.lab_wName.text));
				break;
				case 1:
				
				break;
				default:
				break;
			}
		}
		public setParentUI(parentUI:ui.WalletMainUI){
			this.parentUI = parentUI;
		}
		private setData(data:any){
			this.comp.list_coin.array = [];
            this.comp.list_coin.itemRender = walItemUI;
            this.comp.list_coin.repeatX = 1;
            this.comp.list_coin.repeatY = data.length;
            this.comp.list_coin.selectEnable = true;
            this.comp.list_coin.selectHandler = new Handler(this, this.onSelect);
            this.comp.list_coin.renderHandler = new Handler(this, this.updateItem);
			this.comp.list_coin.array = data;
		}
	}
}