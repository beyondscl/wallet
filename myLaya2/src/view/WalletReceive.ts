/**Created by the LayaAirIDE*/
module view{
	export class WalletReceive extends ui.WalletReceiveUI{
		private comp:ui.WalletReceiveUI;
		constructor(){
			super();
			this.init();
			this.initEvent();
		}
		private init(){
            this.comp = new ui.WalletReceiveUI();
            Laya.stage.addChild(this.comp);
        }
        private initEvent(){
            this.comp.btn_goback.on(Laya.Event.CLICK,this,this.goBack);
            this.comp.btn_copy.on(Laya.Event.CLICK,this,this.btnClick,[1]);
        }
        public setData(data:any){
            
        }
        private goBack(){
            Laya.stage.removeChild(this.comp);
            new view.WalletMain().initQueryData(mod.userMod.defWallet);
        }
        private btnClick(type:number){
            switch(type){
                case (1):

                break;
                default:
                console.log("error type");
                break;
            }
		}
	}
}