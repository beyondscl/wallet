/**Created by the LayaAirIDE*/
module view{
	export class CreateWallet extends ui.WalletCreateUI{
		private comp:ui.WalletCreateUI;
		private parentUI:ui.WalletMainUI;
		private isAgreeImgs:Array<string> = ["img/icon_box-empty.png","img/icon_box-checked.png"];
		constructor(){
			super();
			this.init();
            Laya.loader.load(this.isAgreeImgs, Laya.Handler.create(this, this.initEvent));
		}
		private init(){
			this.comp = new ui.WalletCreateUI();
			Laya.stage.bgColor='white';
			Laya.stage.addChild(this.comp);
		}
		private initEvent(){
			this.comp.btn_back.on(Laya.Event.CLICK,this,this.goBack);
			this.comp.check_argee.on(Laya.Event.CLICK,this,this.updateArgee);
			this.comp.btn_create.on(Laya.Event.CLICK,this,this.createWallet);
			this.comp.btn_import.on(Laya.Event.CLICK,this,this.importWallet);
			this.comp.text_pass.on(Laya.Event.KEY_UP,this,this.infoPassStrong);
		}
		public setParentUI(parentUI:any){
			this.parentUI = parentUI;
		}
		private goBack(){
			Laya.stage.removeChild(this.comp);
			this.parentUI==null?new EnterApp():new view.WalletMain().initQueryData(testData.getWalletInfo(this.parentUI.lab_wName.text));//获取数据
		}
		private updateArgee(){
			this.comp.btn_create.disabled = this.comp.check_argee.selected;
			this.comp.btn_create.mouseEnabled = this.comp.check_argee.selected;
		}
		private createWallet(){
			if(this.checkArgs()){
				Laya.stage.removeChild(this.comp);
				//创建重复未判定
				let wallet = new mod.walletMod(this.comp.text_wall_name.text,this.comp.text_pass.text,"privatekey","keystore","851a3sdf18851a3sdf18851a3sdf18851a3sdf1852",['ETH']);
				let walletString = wallet.toJson();
				laya.net.LocalStorage.setItem(this.comp.text_wall_name.text,JSON.stringify(walletString));  
				let appStore = laya.net.LocalStorage.getItem(config.prod.appKey);
				if(appStore){
					let walletOld = JSON.parse(appStore);
					walletOld.put(this.comp.text_wall_name.text);
					laya.net.LocalStorage.setItem(config.prod.appKey,JSON.stringify(walletOld));  
				}else{
					laya.net.LocalStorage.setItem(config.prod.appKey,JSON.stringify([this.comp.text_wall_name.text]));  
				}
				new view.WalletMain().initQueryData(wallet);
				return;
			}
		}
		private checkArgs():boolean{
			let warnColor = '#c82624';
			if(this.comp.text_wall_name.text.length<3||this.comp.text_wall_name.text.length>20){
				this.comp.text_wall_name.prompt = "钱包名称:长度2-20";
				this.comp.text_wall_name.promptColor = warnColor;
				return false;
			}
			if(this.comp.text_pass.text.length<8||this.comp.text_pass.text.length>20){
				this.comp.text_pass.prompt = "密码:长度8-20";
				this.comp.text_pass.promptColor = warnColor;
				return false;
			}
			if(this.comp.text_pass_conf.text.length<8||this.comp.text_pass_conf.text.length>20){
				this.comp.text_pass_conf.prompt = "确认密码:长度8-20";
				this.comp.text_pass_conf.promptColor = warnColor;
				return false;
			}
			if(this.comp.text_pass_prompt.text.length>20){
				this.comp.text_pass_prompt.prompt = "密码提示信息不能超过20";
				this.comp.text_pass_prompt.promptColor = warnColor;
				return false;
			}
			if(this.comp.text_pass_conf.text.length!=this.comp.text_pass.text.length){
				new view.Msg.popMsg(config.msg.pass_inconsistent);
				return false;
			}
			return true;
		}
		private infoPassStrong(){
			let pass = this.comp.text_pass.text;
			this.comp.lab_pass_level.visible = true;
			// let week = '^[a-zA-Z]*$';//字母/数字:弱
			// let week2 = '^[0-9]*$';//字母/数字:弱
			let middle = '(?=^.{8,20}$)(?=(?:.*?\d))(?=.*[a-z])(?=.*[A-Z])';//字母数字大小写:中
			let strong = '(?=^.{8,20}$)(?=(?:.*?\d))(?=.*[a-z])(?=.*[A-Z])(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})';;//字母数字大小写特殊符号
			if(new RegExp(strong).test(pass)){
				this.comp.lab_pass_level.text = '密码强度：强';
				this.comp.lab_pass_level.color = 'green';
				return;
			}
			if(new RegExp(middle).test(pass)){
				this.comp.lab_pass_level.text = '密码强度：中';
				this.comp.lab_pass_level.color = 'yellow';
				return;
			}
			this.comp.lab_pass_level.text = '密码强度：弱';
			this.comp.lab_pass_level.color = 'red';
		}
		private importWallet(){
			
		}
	}
}