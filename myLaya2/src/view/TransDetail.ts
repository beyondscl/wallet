/**Created by the LayaAirIDE*/
module view{
	import List = Laya.List;
	import Handler = Laya.Handler;
	export class TransDetail extends ui.TransDetailUI{
		private comp:ui.TransDetailUI;
		private parentUI:ui.WalletTransferUI;
		constructor(){
			super();
			this.init();
			this.initEvent();
		}
		private init(){
			this.comp = new ui.TransDetailUI();
			Laya.stage.addChild(this.comp);
			Laya.stage.bgColor = 'white';
		}
		private initEvent(){
			this.comp.btn_goback.on(Laya.Event.CLICK,this,this.goBack);
			this.comp.btn_moreinfo.on(Laya.Event.CLICK,this,this.moreinfo);
		}
		/**
		 * @param data 
		 * @param parent ui only
		 */
		public initData(data:mod.dealtemMod,parent:any){
			this.parentUI = parent;

			let lab_type = data.dealType.toUpperCase()==config.msg.deal_transfer_in?'Sender':'Recipient';//入|出
			let trans_type = data.dealType.toUpperCase()==config.msg.deal_transfer_in?'+':'-';//
			this.comp.lab_amount.text = trans_type+data.dealAmount+' '+data.dealCoinType.toUpperCase() + " (US$"+(data.dealAmount*mod.userMod.ethToUsd).toFixed(4)+")";//-0.00001 ETH (US$0.05)
			this.comp.lab_type.text = lab_type;
			this.comp.lab_addr.text = data.getDealAddr().replace(/([^]{8})([^]{20})([^]*)/,"$1******$3");
			this.comp.lab_transId.text = data.dealTransId;
			this.comp.lab_gas.text = data.dealGas+'';
			this.comp.lab_confirm.text = data.dealConfirm+'';
			this.comp.lab_time.text = data.dealTime;
			this.comp.lab_nonce.text = data.dealNonce+'';
		}
		private goBack(){
			this.removeSelf();
			this.stage.removeSelf();
			this.stage.removeChild(this.comp);
			this.parentUI.visible = true;
		}
		private moreinfo(){
		}
	}
}