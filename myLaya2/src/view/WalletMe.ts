/**Created by the LayaAirIDE*/
module view{
	import List = Laya.List;
	import Handler = Laya.Handler;
	export class WalletMe extends ui.WalletMeUI{
		private comp:ui.WalletMeUI;
		constructor(){
			super();
			this.init();
			this.initEvent();
		}
		private init(){
			this.comp = new ui.WalletMeUI();
			Laya.stage.addChild(this.comp);
		}
		private initEvent(){
			this.comp.btn_assets.on(Laya.Event.CLICK,this,this.tabSelect,[0]);
			this.comp.btn_me.on(Laya.Event.CLICK,this,this.tabSelect,[1]);
			this.comp.btn_dealHistory.on(Laya.Event.CLICK,this,this.tabSelect,[2]);
			this.comp.btn_manageWal.on(Laya.Event.CLICK,this,this.tabSelect,[3]);
		}
		private initQueryData(){

		}
		private queryCallBack(){
			
		}
		private tabSelect(index:number):void{
		  if(index==1){
			// new view.WalletMe();
		  }
		  if(index==0){
			this.stage.removeChild(this.comp);
			new view.WalletMain().initQueryData(mod.userMod.defWallet);
		  }
		  if(index==2){
			//测试数据
            let datas:Array<mod.dealtemMod> = [];
            for(let i=0;i<3;i++){
                 let t = new mod.dealtemMod('send','0x911E1C126c3FddC74fd83A90283F1d50732b2a72','0x911E1C126c3FddC74fd83A90283F1d50732b2a72',i+1,'ETH',null,null,null,null,null);
                 datas.push(t);  
            }
            let t = new mod.dealtemMod('RECEIVE','0x911E1C126c3FddC74fd83A90283F1d50732b2a72','0x911E1C126c3FddC74fd83A90283F1d50732b2a72',9,'ETH',null,null,null,null,null);
            datas.push(t); 
			this.comp.visible = false;
			new view.TransHisList().setData(datas,this.comp);
		  }
		  if(index==3){
						this.comp.visible = false;
						new view.WalletManage();
		  }
	  }
	 
	}
}