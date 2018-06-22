/**Created by the LayaAirIDE*/
module view{
    import List = Laya.List;
    import Handler = Laya.Handler;
	export class WalletSend extends ui.WalletSendUI{
        private comp:ui.WalletSendUI;
		constructor(){
			super();
			this.init();
			this.initEvent();
		}
		private init(){
            this.comp = new ui.WalletSendUI();
            Laya.stage.addChild(this.comp);
        }
        private initEvent(){
            this.comp.btn_goback.on(Laya.Event.CLICK,this,this.goBack);
            this.comp.btn_next.on(Laya.Event.CLICK,this,this.btnClick,[1]);
        }
        public setData(data:string){
            this.comp.lab_coin_name.text = data.toUpperCase();
        }
        private goBack(){
            Laya.stage.removeChild(this.comp);
            new view.WalletMain().initQueryData(mod.userMod.defWallet);
        }
        private btnClick(type:number){
            switch(type){
                case (1):
                    Laya.stage.removeChild(this.comp);
                    Laya.stage.removeSelf();
                    new view.WalletSendSubmit();
                break;
                default:
                console.log("error type");
                break;
            }
		}        
	}
}