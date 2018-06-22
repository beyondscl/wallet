/**Created by the LayaAirIDE*/
module view{
	export class Msg extends ui.MsgUI{
		constructor(){			
			super();
		}
		public static popMsg(msg:string){
			var msgDialog = new Laya.Dialog();
			msgDialog.width = 122;
			msgDialog.height = 220;
			msgDialog.dragArea = "0,0," + msgDialog.width + "," + msgDialog.height;
    		var bg: Laya.Image = new Laya.Image("img/dialog_bg.png");
			bg.centerX = 0;
			bg.centerY = 0-30;
			msgDialog.addChild(bg);

			var text_msg = new Laya.TextInput(msg);
			text_msg.width = bg.width;
			text_msg.height = bg.height - 30;
			text_msg.x = bg.x;
			text_msg.y = bg.y;
			text_msg.wordWrap = true;
			text_msg.editable = false;
			text_msg.align = 'left'
			text_msg.valign = 'middle';
			text_msg.mouseEnabled = false;
			msgDialog.addChild(text_msg);

			var button: Laya.Button = new Laya.Button("img/dialog_banner.png");
			button.label = config.msg.submit;
            button.name = Dialog.CLOSE;
			button.width = bg.width;
			button.height = 30;
			button.x = bg.x;
			button.y =  bg.y+bg.height-button.height;
            msgDialog.addChild(button);
			msgDialog.popup();
		}
	}
}