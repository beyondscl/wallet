
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.alert {
    export class confirmUI extends Dialog {
		public title:Laya.Label;
		public btn_cancel:Laya.Button;
		public btn_sub:Laya.Button;
		public sub_title:Laya.TextArea;

        public static  uiView:any ={"type":"Dialog","props":{"y":0,"x":0,"width":750,"height":1334},"child":[{"type":"Image","props":{"top":0,"skin":"img/main/white.png","right":0,"left":0,"bottom":0,"alpha":0}},{"type":"Box","props":{"y":467,"x":100,"width":550,"height":400,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"top":0,"skin":"img/main/white_radius.png","right":0,"left":0,"bottom":0}},{"type":"Label","props":{"y":47,"var":"title","text":"备份成功","height":56,"fontSize":40,"color":"#163853","centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"y":254,"visible":false,"text":"是否删除助记词","height":56,"fontSize":32,"color":"#163853","centerX":0,"bold":false,"align":"center"}},{"type":"Button","props":{"width":275,"var":"btn_cancel","stateNum":1,"skin":"img/main/img_blue1.png","left":0,"labelSize":32,"label":"不","height":80,"bottom":0}},{"type":"Button","props":{"width":275,"var":"btn_sub","stateNum":1,"skin":"img/main/img_blue2.png","right":0,"labelSize":32,"label":"是","height":80,"bottom":0}},{"type":"TextArea","props":{"var":"sub_title","text":"你备份的助记词顺序验证正确，是否从WWEC Wallet中移除该助记词？","right":10,"left":10,"height":150,"fontSize":32,"editable":false,"centerY":0,"align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.alert.confirmUI.uiView);
        }
    }
}

module ui.alert {
    export class EnterPassUI extends Dialog {
		public text_pass:Laya.TextInput;
		public btn_cancel:Laya.Button;
		public btn_submit:Laya.Button;
		public addr:Laya.Label;
		public amount:Laya.Label;
		public warn:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"y":0,"x":0,"width":750,"layoutEnabled":true,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":690,"top":0,"skin":"img/main/white.png","right":0,"left":0,"layoutEnabled":true,"height":628,"bottom":0,"alpha":0}},{"type":"Box","props":{"width":550,"layoutEnabled":true,"height":400,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":690,"top":0,"skin":"img/main/white_radius.png","right":0,"left":0,"layoutEnabled":true,"height":628,"bottom":0}},{"type":"Label","props":{"valign":"middle","top":50,"text":"请输入钱包密码","right":0,"left":0,"height":44,"fontSize":32,"color":"#163853","bold":true,"align":"center"}},{"type":"TextInput","props":{"var":"text_pass","type":"password","right":30,"promptColor":"#B0BBC4","prompt":"请输入密码","left":30,"layoutEnabled":true,"height":60,"fontSize":32,"color":"#B0BBC4","centerY":35,"borderColor":"#c0c0c0","bgColor":"#ffffff","align":"left"}},{"type":"Button","props":{"y":325,"x":0,"width":275,"var":"btn_cancel","stateNum":1,"skin":"img/main/qx@3x.png","left":0,"layoutEnabled":true,"labelSize":32,"labelColors":"#ffffff","label":"取消","height":75,"bottom":0}},{"type":"Button","props":{"var":"btn_submit","stateNum":1,"skin":"img/main/fz@3x.png","right":0,"left":275,"layoutEnabled":true,"labelSize":32,"labelColors":"#ffffff","label":"确定","height":75,"bottom":0}},{"type":"Label","props":{"visible":false,"var":"addr","valign":"middle","top":105,"text":"To:000000...000000","height":44,"fontSize":32,"color":"#687076","centerX":0,"align":"center"}},{"type":"Label","props":{"visible":false,"var":"amount","valign":"middle","top":152,"text":"0.0098 ETH","height":44,"fontSize":32,"color":"#598ADA","centerX":0,"align":"center"}},{"type":"Label","props":{"y":268,"visible":false,"var":"warn","valign":"middle","text":"密码不正确，请重新输入","right":30,"left":30,"height":30,"fontSize":20,"color":"#ff0400","align":"right"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.alert.EnterPassUI.uiView);
        }
    }
}

module ui.alert {
    export class ExportPriKeyUI extends Dialog {
		public text_pKey:Laya.TextArea;
		public btn_copy:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"y":0,"x":0,"width":200,"height":120},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"layoutEnabled":true,"bottom":0},"child":[{"type":"Image","props":{"top":0,"skin":"template/Warn/alert_dialog.png","right":0,"left":0,"layoutEnabled":true,"bottom":0}},{"type":"TextArea","props":{"wordWrap":true,"var":"text_pKey","type":"text","top":10,"right":10,"padding":"10","left":10,"font":"SimHei","editable":false,"color":"#000000","bottom":40,"bgColor":"#bbbbbb"}},{"type":"Button","props":{"var":"btn_copy","skin":"img/blue.png","right":10,"left":10,"label":"复制","height":30,"bottom":5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.alert.ExportPriKeyUI.uiView);
        }
    }
}

module ui.alert {
    export class IframeUI extends Dialog {

        public static  uiView:any ={"type":"Dialog","props":{"width":375,"height":667},"child":[{"type":"Image","props":{"top":0,"skin":"img/main/white.png","right":0,"left":0,"bottom":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.alert.IframeUI.uiView);
        }
    }
}

module ui.alert {
    export class infoUI extends Dialog {
		public msg:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"top":0,"skin":"img/main/white.png","right":0,"left":0,"bottom":0,"alpha":0}},{"type":"Box","props":{"width":200,"height":160,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"top":0,"skin":"img/main/kk.png","right":0,"left":0,"bottom":0,"alpha":0.6}},{"type":"Image","props":{"y":23,"width":53,"skin":"img/main/jiazai.png","height":53,"centerX":0,"alpha":1}},{"type":"Label","props":{"wordWrap":true,"width":204,"var":"msg","valign":"middle","text":"这里只能十个字这里哦","padding":"2,2,2,2","leading":5,"height":30,"fontSize":20,"color":"#ffffff","centerX":0,"bottom":30,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.alert.infoUI.uiView);

        }

    }
}

module ui.alert {
    export class waitingUI extends Dialog {
		public img_wait:Laya.Image;
		public wait_msg:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"y":0,"x":0,"width":750,"height":1334},"child":[{"type":"Image","props":{"top":0,"skin":"img/main/white.png","right":0,"left":0,"bottom":0,"alpha":0}},{"type":"Box","props":{"width":200,"height":200,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":550,"top":0,"skin":"img/main/kk.png","right":0,"left":0,"height":400,"bottom":0,"alpha":0.6}},{"type":"Image","props":{"width":90,"var":"img_wait","skin":"img/main/jiazai@3x.png","height":90,"centerY":-16,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":1}},{"type":"Label","props":{"var":"wait_msg","valign":"middle","text":"正在加载...","height":50,"fontSize":24,"color":"#ffffff","centerX":0,"bottom":6,"alpha":1,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.alert.waitingUI.uiView);
        }
    }
}

module ui.alert {
    export class WarnUI extends Dialog {
		public warn_title:Laya.Label;
		public warn_msg:Laya.Label;
		public btn_know:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"y":0,"x":0,"width":750,"height":1334},"child":[{"type":"Image","props":{"y":10,"x":10,"top":0,"skin":"img/main/white.png","right":0,"left":0,"bottom":0,"alpha":0}},{"type":"Box","props":{"width":550,"height":400,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"top":0,"skin":"img/main/white_radius.png","right":0,"left":0,"bottom":0}},{"type":"Label","props":{"y":60,"var":"warn_title","text":"备份失败","height":56,"fontSize":40,"color":"#163853","centerX":0,"bold":true}},{"type":"Label","props":{"var":"warn_msg","valign":"middle","text":"请检查你的助记词","height":56,"fontSize":32,"color":"#163853","centerY":0,"centerX":0,"bold":false,"align":"center"}},{"type":"Button","props":{"var":"btn_know","stateNum":1,"skin":"img/main/QDZZ 6@3x.png","right":0,"left":0,"labelSize":32,"label":"我知道了","height":80,"bottom":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.alert.WarnUI.uiView);
        }
    }
}

module ui.alert {
    export class WarnZjcUI extends Dialog {
		public btn_know:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"y":0,"x":0,"width":750,"height":1334},"child":[{"type":"Image","props":{"top":0,"skin":"img/main/white.png","right":0,"left":0,"bottom":0,"alpha":0}},{"type":"Box","props":{"width":550,"height":400,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"top":0,"skin":"img/main/white_radius.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":16,"width":112,"skin":"img/main/camera@2x.png","height":112,"centerX":0}},{"type":"Label","props":{"y":134,"text":"请勿截图","height":56,"fontSize":40,"color":"#163853","centerX":0,"bold":true}},{"type":"Label","props":{"y":237,"valign":"middle","text":"请抄写下来助记词并存放在安全的地方。","right":20,"left":20,"height":44,"fontSize":24,"color":"#687076","align":"left"}},{"type":"Label","props":{"y":192,"valign":"middle","text":"如果有人获取你的助记词将直接获取你的资产！","right":20,"left":20,"height":44,"fontSize":24,"color":"#687076","align":"left"}},{"type":"Button","props":{"width":550,"var":"btn_know","stateNum":1,"skin":"img/main/QDZZ 6@3x.png","labelSize":32,"labelColors":"#ffffff","label":"我知道了","height":80,"bottom":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.alert.WarnZjcUI.uiView);
        }
    }
}

module ui.backup {
    export class BackUpConfUI extends View {
		public btn_back:Laya.Image;
		public box_label:Laya.Box;
		public box_zjc:Laya.Box;
		public btn_conf:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":54,"x":20,"width":65,"var":"btn_back","skin":"img/main/back@2x.png","height":65}},{"type":"Label","props":{"y":62,"valign":"middle","text":"备份助记词","height":44,"fontSize":32,"color":"#163853","centerX":0,"align":"center"}},{"type":"Label","props":{"y":198,"x":30,"valign":"middle","text":"确认你的钱包助记词","height":56,"fontSize":40,"color":"#163853","bold":true,"align":"center"}},{"type":"Label","props":{"y":274,"x":30,"valign":"middle","text":"请按顺序点击助记词，以确认你的备份助记词","height":44,"fontSize":24,"color":"#687076","align":"left"}},{"type":"Box","props":{"y":621,"x":30,"width":688,"var":"box_label","height":225},"child":[{"type":"Label","props":{"y":0,"x":30,"valign":"middle","text":"法法","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":0,"x":235,"valign":"middle","text":"法法","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":0,"x":500,"valign":"middle","text":"法法","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":60,"x":30,"valign":"middle","text":"法法","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":60,"x":235,"valign":"middle","text":"法法","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":60,"x":500,"valign":"middle","text":"法法","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":120,"x":30,"valign":"middle","text":"法法","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":120,"x":235,"valign":"middle","text":"法法","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":180,"x":30,"valign":"middle","text":"法法","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":120,"x":500,"valign":"middle","text":"法法","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":180,"x":235,"valign":"middle","text":"法法","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":180,"x":500,"valign":"middle","text":"法法","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}}]},{"type":"Box","props":{"y":348,"width":688,"var":"box_zjc","height":225,"centerX":0},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":690,"lineWidth":1,"height":225,"fillColor":"#ECECEC"}},{"type":"Label","props":{"y":5,"valign":"middle","padding":"1,10,1,10","left":30,"height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":5,"x":235,"valign":"middle","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":5,"x":500,"valign":"middle","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":60,"x":30,"valign":"middle","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":60,"x":235,"valign":"middle","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":60,"x":500,"valign":"middle","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":113,"valign":"middle","padding":"1,10,1,10","left":30,"height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":113,"x":235,"valign":"middle","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":113,"x":500,"valign":"middle","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":169,"x":30,"valign":"middle","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":169,"x":235,"valign":"middle","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}},{"type":"Label","props":{"y":169,"x":500,"valign":"middle","padding":"1,10,1,10","height":44,"fontSize":28,"color":"#163853","align":"center"}}]},{"type":"Button","props":{"y":950,"width":708,"var":"btn_conf","stateNum":1,"skin":"img/main/anliu@2x.png","sizeGrid":"0,0,0,0","labelSize":32,"labelColors":"#ffffff","label":"确定","height":80,"disabled":false,"centerX":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.backup.BackUpConfUI.uiView);
        }
    }
}

module ui.backup {
    export class BackUpZjcUI extends View {
		public btn_back:Laya.Image;
		public btn_backup:Laya.Button;
		public text_zjc:Laya.TextArea;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":54,"x":20,"width":65,"var":"btn_back","skin":"img/main/back@2x.png","height":65}},{"type":"Label","props":{"y":62,"valign":"middle","text":"备份助记词","height":44,"fontSize":32,"color":"#163853","centerX":0,"align":"center"}},{"type":"Label","props":{"y":198,"x":30,"valign":"middle","text":"抄写下你的钱包助记词","height":56,"fontSize":40,"color":"#163853","bold":true,"align":"center"}},{"type":"Label","props":{"y":274,"x":30,"valign":"middle","text":"助记词用于恢复钱包和充值钱包密码，将它准确的抄写到纸上，","height":44,"fontSize":24,"color":"#687076","align":"left"}},{"type":"Label","props":{"y":318,"x":26,"valign":"middle","text":" 并存放在只有你知道的安全的地方。","height":44,"fontSize":24,"color":"#687076","align":"left"}},{"type":"Button","props":{"y":874,"width":708,"var":"btn_backup","stateNum":1,"skin":"img/main/anliu@2x.png","sizeGrid":"0,0,0,0","labelSize":32,"labelColors":"#ffffff","label":"下一步","height":80,"centerX":0}},{"type":"TextArea","props":{"y":418,"wordWrap":true,"width":688,"var":"text_zjc","text":"ABCDEFGHIJ,ABCDEFGHIJ,ABCDEFGHIJ,ABCDEFGHIJ,ABCDEFGHIJ,ABCDEFGHIJ,ABCDEFGHIJ,ABCDEFGHIJ,ABCDEFGHIJ,ABCDEFGHIJ,ABCDEFGHIJ,ABCDEFGHIJ","padding":"30","leading":30,"height":400,"fontSize":28,"editable":false,"color":"#163853","centerX":0,"bgColor":"#ECECEC","align":"left"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.backup.BackUpZjcUI.uiView);
        }
    }
}

module ui.coin {
    export class AddCoinsUI extends View {
		public btn_goback:Laya.Button;
		public btn_query:Laya.Button;
		public listCoin:Laya.List;
		public cImg:Laya.Image;
		public cVender:Laya.Label;
		public cName:Laya.Label;
		public cAddr:Laya.Label;
		public cCheckbox:Laya.CheckBox;

        public static  uiView:any ={"type":"View","props":{"width":750,"visible":true,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Label","props":{"y":36,"valign":"middle","text":"添加新资产","strokeColor":"#f9f9f9","skin":"template/Navigator/label.png","height":44,"fontSize":32,"color":"#000000","centerX":0,"align":"center"}},{"type":"Button","props":{"y":30,"x":30,"width":65,"var":"btn_goback","stateNum":1,"skin":"img/main/back@2x.png","labelSize":22,"labelColors":"#057AFB,#057AFB,#7EB9FB","height":65}},{"type":"Button","props":{"width":40,"var":"btn_query","top":44,"skin":"img/main/btn_search_icon.png","sizeGrid":"0,0,0,0","right":38,"height":40,"disabled":true}},{"type":"List","props":{"var":"listCoin","top":100,"right":0,"repeatX":1,"name":"listCoin","left":0,"bottom":0},"child":[{"type":"Box","props":{"right":0,"name":"render","left":0,"height":160},"child":[{"type":"Image","props":{"top":0,"skin":"img/main/white.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"x":30,"width":78,"var":"cImg","skin":"img/main/touxiang@2x.png","name":"cImg","height":78,"centerY":0}},{"type":"Label","props":{"y":80,"x":150,"width":400,"var":"cVender","valign":"middle","text":"cVender","skin":"template/List/label.png","name":"cVender","height":32,"fontSize":24,"color":"#8E979F","align":"left"}},{"type":"Label","props":{"y":33,"x":150,"width":400,"var":"cName","valign":"middle","text":"cName","skin":"template/List/label.png","name":"cName","height":40,"fontSize":32,"color":"#100E28","align":"left"}},{"type":"Label","props":{"y":117,"x":150,"width":400,"var":"cAddr","valign":"middle","text":"cAddr","skin":"template/List/label.png","name":"cAddr","height":32,"fontSize":24,"color":"#8E979F","align":"left"}},{"type":"CheckBox","props":{"var":"cCheckbox","stateNum":2,"skin":"img/main/checkbox_switch.png","right":30,"name":"cCheckbox","centerY":0}},{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":0}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.coin.AddCoinsUI.uiView);
        }
    }
}

module ui.coin {
    export class queryCoinsUI extends View {
		public text_search:Laya.TextInput;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1344},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0}},{"type":"Image","props":{"width":60,"top":30,"skin":"img/main/search@2x.png","left":30,"height":60}},{"type":"Label","props":{"top":30,"text":"取消","right":30,"height":44,"fontSize":32}},{"type":"TextInput","props":{"var":"text_search","top":30,"right":100,"promptColor":"#8E979F","prompt":"搜索Token名称或合约地址","left":100,"height":44}},{"type":"Image","props":{"top":74,"skin":"img/main/itemSepar.png","right":100,"left":100}},{"type":"Box","props":{"y":350,"width":200,"height":230,"centerX":0},"child":[{"type":"Image","props":{"top":0,"skin":"img/main/wjl@2x.png","right":0,"left":0,"bottom":30}},{"type":"Label","props":{"text":"暂无记录","height":30,"fontSize":28,"color":"#687076","centerX":0,"bottom":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.coin.queryCoinsUI.uiView);
        }
    }
}

module ui {
    export class EnterAppUI extends View {
		public btn_create:Laya.Button;
		public btn_import:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":750,"top":0,"right":0,"left":0,"layoutEnabled":true,"height":1334,"bottom":0},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"y":230,"width":226,"skin":"img/main/qianbaoicon@2x.png","height":226,"centerX":0}},{"type":"Label","props":{"y":510,"valign":"middle","text":"WWEC Wallet","height":50,"fontSize":40,"color":"#163853","centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"y":584,"valign":"middle","text":"您的数字钱包管家","height":56,"fontSize":40,"color":"#163853","centerX":0,"bold":true,"align":"center"}},{"type":"Button","props":{"y":812,"width":690,"var":"btn_create","stateNum":1,"skin":"img/main/anliu@2x.png","labelSize":36,"labelColors":"#ffffff","label":"创建钱包","height":80,"centerX":0}},{"type":"Button","props":{"y":946,"width":690,"var":"btn_import","stateNum":1,"skin":"img/main/anliu@2x.png","labelSize":36,"labelColors":"#ffffff","label":"导入钱包","height":80,"centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.EnterAppUI.uiView);
        }
    }
}

module ui {
    export class GuideUI extends View {
		public item0:Laya.Box;
		public item1:Laya.Box;
		public item2:Laya.Box;
		public item3:Laya.Box;
		public img_enter:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Box","props":{"var":"item0","top":0,"right":0,"name":"item0","left":0,"bottom":0},"child":[{"type":"Image","props":{"top":-5,"skin":"img/guide/bg.png","right":-5,"left":-5,"bottom":-5}},{"type":"Image","props":{"width":708,"top":0,"skin":"img/guide/ydy_1.png","left":0,"height":1254}},{"type":"Image","props":{"y":1025,"skin":"img/guide/ydy_1_word.png","right":0,"left":0,"height":164}},{"type":"Box","props":{"y":10,"x":10,"right":0,"left":0,"height":16,"bottom":42},"child":[{"type":"Image","props":{"x":306,"width":16,"skin":"img/guide/ty16_1.png","height":16}},{"type":"Image","props":{"x":348,"width":16,"skin":"img/guide/tu16.png","height":16}},{"type":"Image","props":{"x":388,"width":16,"skin":"img/guide/tu16.png","height":16}},{"type":"Image","props":{"x":430,"width":16,"skin":"img/guide/tu16.png","height":16}}]}]},{"type":"Box","props":{"visible":false,"var":"item1","top":0,"right":0,"name":"item1","left":0,"bottom":0},"child":[{"type":"Image","props":{"top":-5,"skin":"img/guide/bg.png","right":-5,"left":-5,"bottom":-5}},{"type":"Image","props":{"y":0,"x":0,"width":710,"skin":"img/guide/ydy_2.png","height":1314}},{"type":"Image","props":{"y":1000,"width":749,"skin":"img/guide/ydy_2_word.png","left":0,"height":164}},{"type":"Box","props":{"y":1276,"x":0,"right":0,"left":0,"height":16,"bottom":42},"child":[{"type":"Image","props":{"x":306,"width":16,"skin":"img/guide/tu16.png","height":16}},{"type":"Image","props":{"x":348,"width":16,"skin":"img/guide/ty16_1.png","height":16}},{"type":"Image","props":{"x":388,"width":16,"skin":"img/guide/tu16.png","height":16}},{"type":"Image","props":{"x":430,"width":16,"skin":"img/guide/tu16.png","height":16}}]}]},{"type":"Box","props":{"visible":false,"var":"item2","top":0,"right":0,"name":"item2","left":0,"bottom":0},"child":[{"type":"Image","props":{"top":-5,"skin":"img/guide/bg.png","right":-5,"left":-5,"bottom":-5}},{"type":"Image","props":{"y":0,"skin":"img/guide/ydy_3.png","right":0,"left":0,"height":1194}},{"type":"Image","props":{"y":1000,"skin":"img/guide/ydy_3_word.png","right":0,"left":0,"height":164}},{"type":"Box","props":{"y":1276,"x":0,"right":0,"left":0,"height":16,"bottom":42},"child":[{"type":"Image","props":{"x":306,"width":16,"skin":"img/guide/tu16.png","height":16}},{"type":"Image","props":{"x":348,"width":16,"skin":"img/guide/tu16.png","height":16}},{"type":"Image","props":{"x":388,"width":16,"skin":"img/guide/ty16_1.png","height":16}},{"type":"Image","props":{"x":430,"width":16,"skin":"img/guide/tu16.png","height":16}}]}]},{"type":"Box","props":{"visible":false,"var":"item3","top":0,"right":0,"name":"item3","left":0,"bottom":0},"child":[{"type":"Image","props":{"top":-5,"skin":"img/guide/bg.png","right":-5,"left":-5,"bottom":-5}},{"type":"Image","props":{"y":0,"x":0,"width":748,"skin":"img/guide/ydy_4.png","height":1252}},{"type":"Image","props":{"y":1000,"skin":"img/guide/ydy_4_word.png","right":0,"left":0,"height":164}},{"type":"Image","props":{"width":266,"var":"img_enter","skin":"img/guide/ljjr.png","height":80,"centerX":0,"bottom":67}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GuideUI.uiView);
        }
    }
}

module ui.info {
    export class aboutUI extends View {
		public btn_back:Laya.Image;
		public lab_version:Laya.Label;
		public btn_team:Laya.Box;
		public btn_service:Laya.Box;
		public btn_log:Laya.Box;
		public btn_guide:Laya.Box;
		public btn_update:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"top":-2,"skin":"img/main/white.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":40,"x":30,"width":65,"var":"btn_back","skin":"img/main/back@2x.png","height":65}},{"type":"Label","props":{"y":48,"x":300,"valign":"middle","text":"关于我们","height":44,"fontSize":32,"color":"#163853","centerX":0,"bold":true,"align":"center"}},{"type":"Image","props":{"y":186,"width":96,"skin":"img/main/qianbaoicon@2x.png","height":96,"centerX":0}},{"type":"Label","props":{"y":317,"var":"lab_version","text":"当前版本：1.0","height":34,"fontSize":24,"color":"#8E979F","centerX":0}},{"type":"TextArea","props":{"y":374,"width":654,"valign":"middle","text":"WWEC Wallet 是一款移动轻钱包App, 它旨在为普通用户提供 一款安全放心，简单好用，功能强大的数字资产钱包应用。","leading":8,"height":68,"fontSize":24,"editable":false,"color":"#8E979F","centerX":0,"align":"left"}},{"type":"Box","props":{"y":526,"x":56,"var":"btn_team","right":56,"left":56,"height":40},"child":[{"type":"Label","props":{"valign":"middle","text":"团队介绍","fontSize":28,"color":"#163853","align":"left"}},{"type":"Image","props":{"width":32,"skin":"img/main/next@2x.png","right":0,"height":32,"centerY":0}}]},{"type":"Box","props":{"y":646,"x":56,"var":"btn_service","right":56,"left":56,"height":40},"child":[{"type":"Label","props":{"valign":"middle","text":"隐私条款","fontSize":28,"color":"#163853","align":"left"}},{"type":"Image","props":{"width":32,"skin":"img/main/next@2x.png","right":0,"height":32,"centerY":0}}]},{"type":"Box","props":{"y":766,"x":56,"var":"btn_log","right":56,"left":56,"height":40},"child":[{"type":"Label","props":{"valign":"middle","text":"版本日志","fontSize":28,"color":"#163853","align":"left"}},{"type":"Image","props":{"width":32,"skin":"img/main/next@2x.png","right":0,"height":32,"centerY":0}}]},{"type":"Box","props":{"y":888,"x":56,"var":"btn_guide","right":56,"left":56,"height":40},"child":[{"type":"Label","props":{"valign":"middle","text":"产品向导","fontSize":28,"color":"#163853","align":"left"}},{"type":"Image","props":{"width":32,"skin":"img/main/next@2x.png","right":0,"height":32,"centerY":0}}]},{"type":"Box","props":{"y":1008,"x":56,"var":"btn_update","right":56,"left":56,"height":40},"child":[{"type":"Label","props":{"valign":"middle","text":"检测新版","fontSize":28,"color":"#163853","align":"left"}},{"type":"Image","props":{"width":32,"skin":"img/main/next@2x.png","right":0,"height":32,"centerY":0}}]},{"type":"Label","props":{"text":"Copyright @ 2018 ConsenLabs","height":34,"fontSize":24,"color":"#8E979F","centerX":0,"bottom":88}},{"type":"Label","props":{"x":10,"text":"All right reserved","height":34,"fontSize":24,"color":"#8E979F","centerX":0,"bottom":54}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.info.aboutUI.uiView);
        }
    }
}

module ui.info {
    export class aboutTeamUI extends View {
		public btn_back:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Box","props":{"y":10,"x":10,"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"top":0,"skin":"img/main/white.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":40,"x":30,"width":65,"var":"btn_back","skin":"img/main/back@2x.png","height":65}},{"type":"Label","props":{"y":48,"x":300,"valign":"middle","text":"团队介绍","height":44,"fontSize":32,"color":"#163853","centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"y":186,"valign":"middle","text":"WWEC Foundation（新加坡）","height":44,"fontSize":32,"color":"#163853","centerX":-14,"bold":true,"align":"center"}},{"type":"TextArea","props":{"y":300,"width":590,"text":"我们专注于区块链电商公链及应用，打造最具影响力的世界数字资产。","leading":10,"height":100,"fontSize":28,"color":"#8E979F","centerX":0}},{"type":"TextArea","props":{"y":400,"width":590,"text":"我们有梦想、有格局、有思维、有资源，共创财富共同体、生命共同体！ ","leading":10,"height":100,"fontSize":28,"color":"#8E979F","centerX":0}},{"type":"TextArea","props":{"y":500,"width":590,"text":"我们遵守公约、传播共识！我们共创辉煌、共享荣耀！","leading":10,"height":100,"fontSize":28,"color":"#8E979F","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.info.aboutTeamUI.uiView);
        }
    }
}

module ui.info {
    export class CandyUI extends View {
		public btn_back:Laya.Image;
		public text_phone:Laya.TextInput;
		public warn_phone:Laya.Label;
		public btn_getcode:Laya.Button;
		public text_code:Laya.TextInput;
		public warn_code:Laya.Label;
		public list_wallet:Laya.List;
		public radio:Laya.Radio;
		public warn_list:Laya.Label;
		public btn_apply:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"y":40,"x":30,"width":65,"var":"btn_back","skin":"img/main/back@2x.png","height":65}},{"type":"Label","props":{"y":45,"width":213,"valign":"middle","text":"领取糖果","height":44,"fontSize":32,"color":"#163853","centerX":0,"bold":true,"align":"center"}},{"type":"TextInput","props":{"y":194,"x":30,"width":300,"var":"text_phone","type":"number","promptColor":"#163853","prompt":"请输入手机号","maxChars":11,"height":45,"fontSize":24,"color":"#163853"},"child":[{"type":"Label","props":{"visible":false,"var":"warn_phone","top":40,"text":"请输入正确的手机号","right":0,"left":0,"fontSize":20,"color":"#ff0400","align":"right"}}]},{"type":"Button","props":{"y":198,"width":165,"visible":false,"var":"btn_getcode","skin":"img/main/img_blue2.png","right":48,"labelSize":24,"labelColors":"#FFFFFF","label":"获取验证码","height":40,"disabled":false}},{"type":"TextInput","props":{"y":269,"x":30,"width":300,"visible":false,"var":"text_code","type":"number","promptColor":"#163853","prompt":"验证码","maxChars":6,"height":34,"fontSize":24,"color":"#163853"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":0}},{"type":"Label","props":{"visible":false,"var":"warn_code","top":40,"text":"验证码不正确","right":0,"left":0,"height":20,"fontSize":20,"color":"#ff0400","align":"right"}}]},{"type":"List","props":{"var":"list_wallet","top":350,"selectEnable":true,"right":0,"repeatX":1,"left":0,"bottom":400},"child":[{"type":"Box","props":{"right":0,"renderType":"render","name":"render","left":0,"height":120},"child":[{"type":"Image","props":{"width":750,"top":0,"skin":"img/main/white.png","right":0,"left":0,"height":60,"bottom":0}},{"type":"Image","props":{"x":60,"width":58,"skin":"img/main/wo de-@2x.png","name":"img_wallet","height":58,"centerY":0}},{"type":"Label","props":{"y":26,"x":154,"width":170,"valign":"middle","text":"ETH","skin":"template/List/label.png","name":"lab_wName","height":34,"fontSize":24,"color":"#163853","align":"left"}},{"type":"Label","props":{"y":60,"x":154,"width":400,"valign":"middle","text":"035dx5dx...","skin":"template/List/label.png","name":"lab_wAddr","height":28,"fontSize":20,"color":"#8E979F","align":"left"}},{"type":"Radio","props":{"width":30,"var":"radio","skin":"img/main/radio2.png","right":50,"name":"radio","height":30,"centerY":0}}]}]},{"type":"Label","props":{"visible":false,"var":"warn_list","text":"请选择钱包","right":30,"left":0,"height":20,"fontSize":20,"color":"#ff0400","bottom":360,"align":"right"}},{"type":"Button","props":{"width":690,"var":"btn_apply","stateNum":1,"skin":"img/main/anliu@2x.png","labelSize":32,"labelColors":"#ffffff","label":"领取糖果","height":88,"centerX":0,"bottom":200}},{"type":"Label","props":{"text":"一个手机号及钱包地址只能领取1次糖果","height":34,"fontSize":24,"color":"#8E979F","centerX":0,"bottom":116}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.info.CandyUI.uiView);
        }
    }
}

module ui.info {
    export class SelectWalletUI extends View {
		public btn_back:Laya.Image;
		public list_wallet:Laya.List;
		public radio:Laya.Radio;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"y":40,"x":30,"width":65,"var":"btn_back","skin":"img/main/back@2x.png","height":65}},{"type":"Label","props":{"y":45,"width":213,"valign":"middle","text":"选择您的钱包","height":44,"fontSize":32,"color":"#163853","centerX":0,"bold":true,"align":"center"}},{"type":"List","props":{"var":"list_wallet","top":170,"selectEnable":true,"right":0,"repeatX":1,"left":0,"bottom":0},"child":[{"type":"Box","props":{"right":0,"renderType":"render","name":"render","left":0,"height":120},"child":[{"type":"Image","props":{"width":750,"top":0,"skin":"img/main/white.png","right":0,"left":0,"height":60,"bottom":0}},{"type":"Image","props":{"x":60,"width":58,"skin":"img/main/wo de-@2x.png","name":"img_wallet","height":58,"centerY":0}},{"type":"Label","props":{"y":26,"x":154,"width":170,"valign":"middle","text":"ETH","skin":"template/List/label.png","name":"lab_wName","height":34,"fontSize":24,"color":"#163853","align":"left"}},{"type":"Label","props":{"y":60,"x":154,"width":400,"valign":"middle","text":"035dx5dx...","skin":"template/List/label.png","name":"lab_wAddr","height":28,"fontSize":20,"color":"#8E979F","align":"left"}},{"type":"Radio","props":{"width":30,"var":"radio","skin":"img/main/radio2.png","right":50,"name":"radio","height":30,"centerY":0}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.info.SelectWalletUI.uiView);
        }
    }
}

module ui.info {
    export class ServiceUI extends View {
		public btn_close:Laya.Image;
		public box_info:Laya.Box;
		public text:laya.display.Text;
		public box_btn:Laya.Box;
		public agree:Laya.CheckBox;
		public btn_accept:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Image","props":{"top":0,"skin":"img/main/white.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":0,"x":700,"width":50,"visible":false,"var":"btn_close","top":0,"skin":"img/main/xx@2x.png","right":0,"height":50}},{"type":"Box","props":{"var":"box_info","top":50,"right":0,"left":0,"bottom":130},"child":[{"type":"Text","props":{"y":0,"x":0,"wordWrap":true,"width":750,"var":"text","text":"阿斯顿发生大四顿饭","strokeColor":"#000000","overflow":"scroll","leading":10,"height":1150,"fontSize":24,"color":"#000000"}}]},{"type":"Box","props":{"var":"box_btn","right":0,"left":0,"height":130,"bottom":0},"child":[{"type":"Label","props":{"y":0,"x":70,"width":633,"valign":"middle","text":"我已经仔细阅读并同意隐私及服务条款","padding":"0","name":"隐私及服务条款","height":34,"fontSize":24,"color":"#8E979F","align":"left"}},{"type":"CheckBox","props":{"y":0,"x":30,"width":230,"var":"agree","skin":"img/main/radio.png","scaleY":2,"scaleX":2,"mouseEnabled":true,"layoutEnabled":true,"hitTestPrior":true,"height":24,"click":"updateArgee"}},{"type":"Button","props":{"var":"btn_accept","stateNum":1,"skin":"img/main/img_blue2.png","sizeGrid":"0,0,0,0","right":0,"left":0,"labelSize":32,"labelColors":"#ffffff","label":"下一步","height":80,"disabled":true,"bottom":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.info.ServiceUI.uiView);
        }
    }
}

module ui {
    export class MsgUI extends Dialog {
		public lab_title:Laya.Label;
		public lab_msg:laya.display.Text;

        public static  uiView:any ={"type":"Dialog","props":{"width":300,"staticCache":true,"popupCenter":true,"layoutEnabled":true,"height":429,"centerY":0,"centerX":0,"cacheAs":"normal"},"child":[{"type":"Rect","props":{"y":135,"x":30,"width":240,"lineWidth":1,"height":180,"fillColor":"#ffffff"}},{"type":"Label","props":{"y":158,"var":"lab_title","text":"系统提示","fontSize":16,"font":"SimHei","color":"#000000","centerX":0,"bold":true}},{"type":"Line","props":{"y":185,"x":30,"toY":0,"toX":240,"lineWidth":1,"lineColor":"#b9b9b9"}},{"type":"Text","props":{"y":195,"x":30,"wordWrap":true,"width":240,"var":"lab_msg","text":"你好附近的设计费血常规发大水发链接","height":60,"font":"SimHei","color":"#000000","align":"left"}},{"type":"Button","props":{"y":263,"width":166,"stateNum":1,"skin":"img/main/anliu@2x.png","name":"Dialog.CLOSE","label":"确定","height":34,"centerX":0}},{"type":"Label","props":{"text":"label"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.MsgUI.uiView);
        }
    }
}

module ui.set {
    export class ExpKeystoreUI extends View {
		public btn_back:Laya.Button;
		public btn_tab:Laya.Tab;
		public viewStack:Laya.ViewStack;
		public text_keystore:Laya.TextArea;
		public btn_copy:Laya.Button;
		public item1:Laya.Box;
		public img_keystore:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":375,"layoutEnabled":true,"height":667},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":300,"lineWidth":1,"height":60}},{"type":"Label","props":{"y":10,"x":118,"valign":"middle","top":20,"text":"导出 Keystore","height":30,"fontSize":16,"color":"#000000","centerX":0,"align":"center"}},{"type":"Button","props":{"y":10,"x":20,"width":117,"var":"btn_back","top":20,"skin":"template/Navigator/btn_BackButton.png","height":30}},{"type":"Image","props":{"y":60,"x":10,"skin":"img/itemSepar.png","right":0,"left":0}},{"type":"Tab","props":{"y":60,"var":"btn_tab","selectedIndex":0,"right":0,"left":0,"layoutEnabled":true,"height":40},"child":[{"type":"Button","props":{"top":0,"right":150,"name":"item0","left":0,"labelSize":16,"label":"Keystore 文件","bottom":0}},{"type":"Button","props":{"top":0,"right":0,"name":"item1","left":150,"labelSize":16,"label":"二维码","bottom":0}}]},{"type":"ViewStack","props":{"var":"viewStack","top":100,"selectedIndex":0,"right":0,"mouseEnabled":true,"left":0,"bottom":0},"child":[{"type":"Box","props":{"x":0,"top":0,"right":0,"name":"item0","left":0,"layoutEnabled":true,"bottom":0},"child":[{"type":"Label","props":{"y":0,"valign":"middle","text":"离线保存","right":20,"left":20,"height":20,"color":"#108bbb","align":"left"}},{"type":"TextArea","props":{"y":25,"width":260,"text":"离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存","right":20,"left":20,"height":35,"color":"#645a5a"}},{"type":"Label","props":{"y":60,"x":40,"valign":"middle","text":"密码保险箱保存","left":20,"height":20,"color":"#108bbb"}},{"type":"TextArea","props":{"y":80,"x":20,"width":260,"text":"离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存","right":20,"left":20,"height":40,"color":"#645a5a"}},{"type":"Label","props":{"y":120,"x":20,"valign":"middle","text":"请勿使用网络传输","left":20,"height":20,"color":"#108bbb"}},{"type":"TextArea","props":{"y":140,"x":10,"width":260,"text":"离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存","right":20,"left":20,"height":40,"color":"#645a5a"}},{"type":"TextArea","props":{"width":335,"var":"text_keystore","top":180,"right":20,"overflow":"scroll","left":20,"height":280,"bottom":90}},{"type":"Button","props":{"var":"btn_copy","skin":"img/blue.png","right":20,"left":20,"layoutEnabled":true,"label":"复制","height":60,"bottom":27}}]},{"type":"Box","props":{"x":0,"var":"item1","top":0,"right":0,"name":"item1","left":0,"layoutEnabled":true,"bottom":0},"child":[{"type":"Label","props":{"y":0,"x":20,"valign":"middle","text":"仅供直接扫描","right":20,"left":20,"height":20,"color":"#108bbb","align":"left"}},{"type":"TextArea","props":{"y":25,"x":20,"width":260,"text":"离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存","right":20,"left":20,"height":40,"color":"#645a5a"}},{"type":"Label","props":{"y":65,"x":20,"valign":"middle","text":"在安全环境下使用","left":20,"height":20,"color":"#108bbb"}},{"type":"TextArea","props":{"y":90,"x":20,"width":260,"text":"离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存","right":20,"left":20,"height":40,"color":"#645a5a"}},{"type":"Rect","props":{"y":214,"x":112,"width":150,"lineWidth":1,"height":150,"fillColor":"#a1a0a0"}},{"type":"Image","props":{"y":220,"x":117,"width":140,"var":"img_keystore","skin":"img/ewm.jpg","height":140}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.set.ExpKeystoreUI.uiView);
        }
    }
}

module ui.set {
    export class UpdatePassUI extends View {
		public btn_back:Laya.Button;
		public lab_save:Laya.Label;
		public lab_oldPass:Laya.TextInput;
		public lab_newPass:Laya.TextInput;
		public lab_confPass:Laya.TextInput;
		public lab_import:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Label","props":{"y":62,"valign":"middle","text":"更改密码","height":44,"fontSize":32,"color":"#163853","centerX":0,"align":"center"}},{"type":"Button","props":{"y":50,"x":30,"width":65,"var":"btn_back","stateNum":1,"skin":"img/main/back@2x.png","height":65}},{"type":"Label","props":{"y":62,"var":"lab_save","valign":"middle","text":"保存","right":20,"height":44,"fontSize":32,"color":"#218d92","align":"center"}},{"type":"TextInput","props":{"y":200,"var":"lab_oldPass","type":"password","right":30,"prompt":"旧密码","maxChars":30,"left":30,"height":44,"fontSize":32}},{"type":"TextInput","props":{"y":300,"var":"lab_newPass","type":"password","right":30,"prompt":"新密码","maxChars":30,"left":30,"height":44,"fontSize":32}},{"type":"TextInput","props":{"y":400,"var":"lab_confPass","type":"password","right":30,"prompt":"确认密码","maxChars":30,"left":30,"height":44,"fontSize":32}},{"type":"Label","props":{"y":500,"width":450,"visible":false,"valign":"middle","text":"忘记密码？导入助记词或私钥可重置密码。","left":30,"height":30,"fontSize":24,"color":"#9e9999","align":"left"}},{"type":"Label","props":{"y":500,"x":484,"width":62,"visible":false,"var":"lab_import","valign":"middle","text":"导入","height":30,"fontSize":28,"color":"#0047ff","align":"left"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.set.UpdatePassUI.uiView);
        }
    }
}

module ui.set {
    export class WalletImportUI extends View {
		public btn_back:Laya.Image;
		public btn_sao:Laya.Image;
		public tab:Laya.Tab;
		public stack:Laya.ViewStack;
		public o_text_zjc:Laya.TextArea;
		public o_sel_dir:Laya.ComboBox;
		public o_text_pass:Laya.TextInput;
		public o_text_confpass:Laya.TextInput;
		public o_btn_import:Laya.Button;
		public hetp_zjc:Laya.Label;
		public o_check_agree:Laya.CheckBox;
		public lab_service:Laya.Label;
		public warn_zjc:Laya.Label;
		public warn_pass:Laya.Label;
		public warn_passconf:Laya.Label;
		public text_keystore:Laya.TextArea;
		public keystore_pass:Laya.TextInput;
		public ks_agree:Laya.CheckBox;
		public help_keystore:Laya.Label;
		public ks_btn_import:Laya.Button;
		public text_privateKey:Laya.TextArea;
		public help_pk:Laya.Label;
		public pk_btn_import:Laya.Button;
		public pk_text_pass:Laya.TextInput;
		public pk_text_confPass:Laya.TextInput;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"layoutEnabled":true,"height":1334,"bottom":0},"child":[{"type":"Label","props":{"y":62,"x":90,"valign":"middle","text":"导入钱包","height":44,"fontSize":32,"color":"#163853","centerX":0,"align":"center"}},{"type":"Image","props":{"y":50,"x":30,"width":65,"var":"btn_back","skin":"img/main/back@2x.png","height":65}},{"type":"Image","props":{"y":54,"width":56,"var":"btn_sao","skin":"img/main/sys@2x.png","right":30,"height":56}},{"type":"Tab","props":{"y":178,"width":750,"var":"tab","selectedIndex":0,"right":0,"left":0,"height":100},"child":[{"type":"Button","props":{"width":250,"top":0,"name":"item0","left":0,"labelSize":28,"label":"助记词","bottom":0}},{"type":"Button","props":{"x":250,"width":250,"top":0,"name":"item1","labelSize":28,"label":"官方钱包","disabled":true,"bottom":0}},{"type":"Button","props":{"y":10,"width":250,"top":0,"right":0,"name":"item2","labelSize":28,"label":"私钥","disabled":true,"bottom":0}},{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":0}}]},{"type":"ViewStack","props":{"var":"stack","top":308,"selectedIndex":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Box","props":{"top":0,"right":0,"name":"item0","left":0,"bottom":0},"child":[{"type":"TextArea","props":{"y":0,"var":"o_text_zjc","right":30,"promptColor":"#687076","prompt":"助记词，用空格分开","padding":"10","left":30,"layoutEnabled":true,"height":192,"fontSize":28,"borderColor":"#b5b5b5"}},{"type":"ComboBox","props":{"y":269,"var":"o_sel_dir","sizeGrid":"0,0,0,0","selectedIndex":0,"right":30,"left":30,"labels":"m/0'/0'/0',m/44’/60’/0’/0/0 Jaxx Metamask(ETH),m/44’/60’/0’/0 Ledger(ETH),m/44’/60’/1’/0/0 自定义路径","labelSize":28,"labelPadding":"10,0,10,0","labelColors":"#8E979F","itemSize":28,"itemColors":"#8E979F","height":44},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-10}}]},{"type":"TextInput","props":{"y":375,"var":"o_text_pass","type":"password","right":30,"promptColor":"#8E979F","prompt":"密码","maxChars":30,"left":30,"height":44,"fontSize":28},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-10}}]},{"type":"TextInput","props":{"y":480,"var":"o_text_confpass","type":"password","right":30,"promptColor":"#8E979F","prompt":"确认密码","maxChars":30,"left":30,"height":44,"fontSize":28},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-10}}]},{"type":"Button","props":{"var":"o_btn_import","stateNum":1,"skin":"img/main/anliu@2x.png","right":30,"left":28,"labelSize":32,"labelColors":"#ffffff","label":"开始导入","height":80,"disabled":true,"bottom":220}},{"type":"Label","props":{"var":"hetp_zjc","valign":"middle","text":"什么是助记词？","right":20,"left":20,"height":30,"fontSize":24,"color":"#687076","bottom":148,"align":"center"}},{"type":"Label","props":{"y":613,"x":76,"width":240,"valign":"middle","text":"我已经仔细阅读并同意","padding":"0","height":34,"fontSize":24,"color":"#8E979F","align":"left"}},{"type":"CheckBox","props":{"y":615,"x":36,"width":116,"var":"o_check_agree","skin":"img/main/radio.png","scaleY":2,"scaleX":2,"mouseEnabled":true,"layoutEnabled":true,"hitTestPrior":true,"height":24,"click":"updateArgee"}},{"type":"Label","props":{"y":613,"x":318,"width":240,"var":"lab_service","valign":"middle","text":"隐私及服务条款","padding":"0","name":"lab_service","height":34,"fontSize":24,"color":"#598ADA","align":"left"}},{"type":"Image","props":{"y":269,"width":44,"skin":"img/main/Stroke 2@2x.png","right":30,"height":44}},{"type":"Label","props":{"y":208,"width":690,"visible":false,"var":"warn_zjc","text":"请输入正确的助记词","right":30,"left":30,"height":30,"fontSize":20,"color":"#ff0400","align":"right"}},{"type":"Label","props":{"y":438,"width":690,"visible":false,"var":"warn_pass","text":"密码不少于8位","right":30,"left":37,"height":30,"fontSize":20,"color":"#ff0400","align":"right"}},{"type":"Label","props":{"y":538,"width":690,"visible":false,"var":"warn_passconf","text":"2次输入的密码不一致","right":30,"left":31,"height":30,"fontSize":20,"color":"#ff0400","align":"right"}}]},{"type":"Box","props":{"top":0,"right":0,"name":"item1","left":0,"bottom":0},"child":[{"type":"TextArea","props":{"y":0,"wordWrap":true,"valign":"middle","text":"直接复制粘贴以太坊官方钱包keystore文件内容至输入框，或者扫二维码录入。","stroke":0,"right":30,"padding":"5","left":30,"leading":5,"layoutEnabled":true,"height":88,"fontSize":24,"editable":false,"disabled":true,"color":"#687076","align":"left"}},{"type":"TextArea","props":{"y":120,"wordWrap":true,"var":"text_keystore","right":30,"promptColor":"#687076","prompt":"keystore文本内容","padding":"10","left":30,"layoutEnabled":true,"height":152,"fontSize":28,"borderColor":"#b5b5b5"}},{"type":"TextInput","props":{"y":331,"var":"keystore_pass","type":"password","right":30,"promptColor":"#8E979F","prompt":"keystore密码","maxChars":30,"left":30,"height":44,"fontSize":28}},{"type":"Image","props":{"y":375,"skin":"img/main/itemSepar.png","right":30,"left":30}},{"type":"Label","props":{"y":455,"x":80,"width":240,"valign":"middle","text":"我已经仔细阅读并同意","padding":"0","name":"lab_service","height":34,"fontSize":24,"color":"#8E979F","align":"left"}},{"type":"CheckBox","props":{"y":457,"x":40,"width":118,"var":"ks_agree","skin":"img/main/radio.png","scaleY":2,"scaleX":2,"mouseEnabled":true,"layoutEnabled":true,"hitTestPrior":true,"height":24,"click":"updateArgee"}},{"type":"Label","props":{"y":455,"x":322,"width":240,"valign":"middle","text":"隐私及服务条款","padding":"0","name":"lab_service","height":34,"fontSize":24,"color":"#598ADA","align":"left"}},{"type":"Label","props":{"y":848,"x":20,"var":"help_keystore","valign":"middle","text":"什么是keystore?","right":20,"left":20,"height":30,"fontSize":24,"color":"#687076","bottom":148,"align":"center"}},{"type":"Button","props":{"y":10,"x":10,"var":"ks_btn_import","stateNum":1,"skin":"img/main/anliu@2x.png","right":30,"left":28,"labelSize":32,"labelColors":"#ffffff","label":"开始导入","height":80,"bottom":220}}]},{"type":"Box","props":{"top":0,"right":0,"name":"item2","left":0,"bottom":0},"child":[{"type":"TextArea","props":{"y":0,"wordWrap":true,"var":"text_privateKey","stroke":0,"right":30,"promptColor":"#687076","prompt":"明文私钥","padding":"5","left":30,"leading":5,"layoutEnabled":true,"height":192,"fontSize":28,"borderColor":"#b5b5b5","align":"left"}},{"type":"Label","props":{"y":848,"x":20,"var":"help_pk","valign":"middle","text":"什么是私钥？","right":20,"left":20,"height":30,"fontSize":24,"color":"#687076","bottom":148,"align":"center"}},{"type":"Button","props":{"y":726,"x":28,"var":"pk_btn_import","stateNum":1,"skin":"img/main/anliu@2x.png","right":30,"left":28,"labelSize":32,"labelColors":"#ffffff","label":"开始导入","height":80,"bottom":220}},{"type":"TextInput","props":{"y":242,"width":500,"var":"pk_text_pass","type":"password","promptColor":"#8E979F","prompt":"密码","maxChars":30,"left":30,"height":44,"fontSize":28}},{"type":"Image","props":{"y":414,"x":30,"skin":"img/main/itemSepar.png","right":30,"left":30}},{"type":"TextInput","props":{"y":362,"width":500,"var":"pk_text_confPass","type":"password","promptColor":"#8E979F","prompt":"确认密码","maxChars":30,"left":30,"height":44,"fontSize":28}},{"type":"Image","props":{"y":406,"x":30,"skin":"img/main/itemSepar.png","right":30,"left":30}},{"type":"Label","props":{"y":487,"x":70,"width":240,"valign":"middle","text":"我已经仔细阅读并同意","padding":"0","name":"lab_service","height":34,"fontSize":24,"color":"#8E979F","align":"left"}},{"type":"CheckBox","props":{"y":489,"x":30,"width":126,"skin":"img/main/radio.png","scaleY":2,"scaleX":2,"mouseEnabled":true,"layoutEnabled":true,"hitTestPrior":true,"height":24,"click":"updateArgee"}},{"type":"Label","props":{"y":487,"x":312,"width":240,"valign":"middle","text":"隐私及服务条款","padding":"0","height":34,"fontSize":24,"color":"#598ADA","align":"left"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.set.WalletImportUI.uiView);
        }
    }
}

module ui {
    export class TransDetailUI extends View {
		public lab_coin_name:Laya.Label;
		public btn_goback:Laya.Button;
		public lab_amount:Laya.Label;
		public lab_type:Laya.Label;
		public lab_addr:Laya.Label;
		public lab_transId:Laya.Label;
		public lab_gas:Laya.Label;
		public lab_confirm:Laya.Label;
		public lab_time:Laya.Label;
		public lab_nonce:Laya.Label;
		public btn_moreinfo:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Label","props":{"var":"lab_coin_name","valign":"middle","top":38,"text":"交易明细","height":30,"fontSize":32,"color":"#163853","centerX":0,"align":"center"}},{"type":"Button","props":{"width":65,"var":"btn_goback","top":30,"stateNum":1,"skin":"img/main/back@2x.png","left":30,"height":65}},{"type":"Label","props":{"y":140,"var":"lab_amount","valign":"middle","text":"-0.00001 ETH (US$0.05)","height":30,"fontSize":28,"color":"#ff0400","centerX":-1}},{"type":"Label","props":{"y":200,"var":"lab_type","valign":"middle","text":"收款账户","right":30,"left":30,"height":40,"fontSize":24,"color":"#000000","bold":true}},{"type":"Label","props":{"y":250,"var":"lab_addr","valign":"middle","text":"获取数据中","right":30,"overflow":"scroll","left":30,"height":40,"fontSize":24,"color":"#000000","align":"left"}},{"type":"Label","props":{"y":330,"valign":"middle","text":"交易 ID","right":30,"left":30,"height":40,"fontSize":24,"color":"#000000","bold":true}},{"type":"Label","props":{"y":380,"wordWrap":true,"var":"lab_transId","valign":"top","text":"获取数据中","right":30,"padding":"2,2,2,2","overflow":"scroll","left":30,"leading":10,"height":80,"fontSize":28,"color":"#000000","align":"left"}},{"type":"Label","props":{"y":500,"valign":"middle","text":"Gas 价格(GWEI)","right":30,"left":30,"height":40,"fontSize":24,"color":"#000000","bold":true}},{"type":"Label","props":{"y":550,"var":"lab_gas","valign":"middle","text":"获取数据中","right":30,"overflow":"scroll","left":30,"height":40,"fontSize":24,"color":"#000000"}},{"type":"Label","props":{"y":760,"valign":"middle","text":"状态","right":30,"left":30,"height":40,"fontSize":24,"color":"#000000","bold":true}},{"type":"Label","props":{"y":810,"var":"lab_confirm","valign":"middle","text":"获取数据中","right":30,"left":30,"height":40,"fontSize":24,"color":"#000000"}},{"type":"Label","props":{"y":630,"valign":"middle","text":"时间","right":30,"left":30,"height":40,"fontSize":24,"color":"#000000","bold":true}},{"type":"Label","props":{"y":680,"var":"lab_time","valign":"middle","text":"获取数据中","right":30,"overflow":"scroll","left":30,"height":40,"fontSize":24,"color":"#000000"}},{"type":"Label","props":{"y":850,"visible":false,"valign":"middle","text":"Nonce","right":30,"left":30,"height":40,"fontSize":24,"color":"#000000","bold":true}},{"type":"Label","props":{"y":900,"visible":false,"var":"lab_nonce","valign":"middle","text":"-","right":30,"left":30,"height":40,"fontSize":24,"color":"#000000"}},{"type":"Button","props":{"y":389,"x":0,"visible":false,"var":"btn_moreinfo","right":0,"left":0,"label":"查看更多交易详情","height":40,"bottom":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TransDetailUI.uiView);

        }

    }
}

module ui {
    export class TransHisListUI extends View {
		public btn_goback:Laya.Button;
		public list:Laya.List;
		public lab_nodata:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Label","props":{"y":30,"x":108,"valign":"middle","text":"交易","height":60,"fontSize":32,"color":"#163853","centerX":0,"align":"center"}},{"type":"Button","props":{"y":30,"x":30,"width":65,"var":"btn_goback","stateNum":1,"skin":"img/main/back@2x.png","height":65}},{"type":"List","props":{"var":"list","top":100,"selectEnable":true,"right":0,"repeatY":10,"repeatX":1,"name":"list","left":0,"height":0},"child":[{"type":"Box","props":{"right":0,"name":"render","left":0,"height":120},"child":[{"type":"Image","props":{"y":0,"x":0,"top":0,"skin":"img/main/white.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":32,"x":30,"width":56,"skin":"img/main/transfer_in.png","name":"img","height":56,"centerY":0}},{"type":"Label","props":{"y":0,"x":100,"width":200,"valign":"bottom","text":"label","skin":"template/List/label.png","name":"lab_deal_name","height":60,"fontSize":24,"color":"#163853","align":"left"}},{"type":"Label","props":{"y":60,"x":100,"width":400,"valign":"middle","text":"label","skin":"template/List/label.png","name":"lab_addr","height":60,"fontSize":20,"color":"#8E979F","align":"left"}},{"type":"Label","props":{"y":35,"x":520,"width":350,"valign":"middle","text":"label","skin":"template/List/label.png","right":30,"name":"lab_amount","height":50,"fontSize":28,"color":"#FF516F","centerY":0,"align":"right"}},{"type":"Image","props":{"y":119,"x":0,"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":0}}]}]},{"type":"Label","props":{"visible":false,"var":"lab_nodata","valign":"middle","text":"暂无数据","height":120,"fontSize":42,"color":"#163853","centerY":0,"centerX":0,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TransHisListUI.uiView);

        }

    }
}

module ui.user {
    export class UseInviteUI extends View {
		public btn_back:Laya.Button;
		public lab_selectw:Laya.Label;
		public lab_invid_count:Laya.Label;
		public lab_invid_code:Laya.Label;
		public img_ewm:Laya.Image;
		public btn_copy:Laya.Button;
		public box_wal:Laya.Box;
		public lab_addr:Laya.Label;
		public lab_wname:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":750,"lineWidth":1,"height":284,"fillColor":"#598ADA"}},{"type":"Button","props":{"y":30,"x":20,"width":65,"var":"btn_back","stateNum":1,"skin":"img/main/back@2x.png","labelSize":22,"labelColors":"#057AFB,#057AFB,#7EB9FB","height":65}},{"type":"Label","props":{"y":114,"x":30,"valign":"middle","text":"奖励发送至：","height":40,"fontSize":28,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":180,"var":"lab_selectw","valign":"middle","text":"请选择钱包","right":30,"left":30,"height":40,"fontSize":28,"color":"#ff0400","align":"left"},"child":[{"type":"Image","props":{"y":469,"x":643,"skin":"img/main/Path 12@3x.png","centerY":0}}]},{"type":"Label","props":{"y":362,"width":314,"valign":"middle","text":"当前邀请人数：","strokeColor":"#ffffff","height":60,"fontSize":48,"color":"#8FB5F2","centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"y":362,"x":540,"width":160,"var":"lab_invid_count","valign":"middle","text":"0","strokeColor":"#ffffff","height":60,"fontSize":48,"color":"#8FB5F2","bold":true,"align":"left"}},{"type":"Label","props":{"y":480,"text":"您的专属邀请码","fontSize":28,"color":"#687076","centerX":0}},{"type":"Label","props":{"y":552,"width":252,"var":"lab_invid_code","valign":"middle","text":"-----","height":66,"fontSize":40,"color":"#ffffff","centerX":0,"bgColor":"#8FB5F2","align":"center"}},{"type":"Image","props":{"y":670,"x":205,"width":340,"var":"img_ewm","height":340,"centerX":0}},{"type":"Label","props":{"y":1030,"valign":"middle","text":"扫描下载万微钱包","height":40,"fontSize":28,"color":"#598ADA","centerX":0,"align":"center"}},{"type":"Button","props":{"y":1130,"x":30,"width":690,"var":"btn_copy","stateNum":1,"skin":"img/main/anliu@2x.png","labelSize":36,"labelColors":"#ffffff","label":"复制邀请码","height":80,"centerX":0}},{"type":"Box","props":{"y":180,"var":"box_wal","right":30,"left":30,"height":80},"child":[{"type":"Image","props":{"width":60,"skin":"img/main/touxiang@2x.png","height":60,"centerY":0}},{"type":"Label","props":{"y":45,"width":500,"var":"lab_addr","valign":"middle","text":"地址","left":90,"height":28,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":5,"width":500,"var":"lab_wname","valign":"middle","text":"钱包名称","left":90,"height":35,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"x":633,"skin":"img/main/Path 12@3x.png","centerY":0}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.user.UseInviteUI.uiView);
        }
    }
}

module ui.user {
    export class UserLoginUI extends View {
		public btn_forget:Laya.Box;
		public inp_uname:Laya.TextInput;
		public inp_upass:Laya.TextInput;
		public lab_reset:Laya.Label;
		public btn_login:Laya.Button;
		public btn_regist:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Box","props":{"var":"btn_forget","top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"y":92,"width":142,"skin":"img/main/qianbaoicon@2x.png","height":142,"centerX":0}},{"type":"Label","props":{"y":268,"valign":"middle","text":"WWEC Wallet","height":56,"fontSize":40,"color":"#163853","centerX":0,"bold":true,"align":"center"}},{"type":"TextInput","props":{"y":574,"var":"inp_uname","valign":"middle","type":"number","right":30,"promptColor":"#687076","prompt":"请输入手机号","maxChars":11,"left":30,"height":40,"fontSize":28,"align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-5}}]},{"type":"TextInput","props":{"y":690,"var":"inp_upass","valign":"middle","type":"password","right":30,"promptColor":"#687076","prompt":"请输入密码","maxChars":32,"left":30,"height":40,"fontSize":28,"align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-5}}]},{"type":"Label","props":{"y":790,"var":"lab_reset","text":"忘记密码？","right":32,"height":34,"fontSize":24,"color":"#687076"}},{"type":"Button","props":{"y":876,"x":30,"width":690,"var":"btn_login","stateNum":1,"skin":"img/main/anliu@2x.png","labelSize":36,"labelColors":"#ffffff","label":"登录","height":80,"centerX":0}},{"type":"Label","props":{"y":1014,"x":343,"var":"btn_regist","valign":"middle","text":"注册","height":44,"fontSize":32,"color":"#598ADA","centerX":0,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.user.UserLoginUI.uiView);
        }
    }
}

module ui.user {
    export class UserRegistUI extends View {
		public inp_phNumber:Laya.TextInput;
		public inp_vcode:Laya.TextInput;
		public inp_pass:Laya.TextInput;
		public inp_passconf:Laya.TextInput;
		public inp_invitation:Laya.TextInput;
		public btn_regist:Laya.Button;
		public btn_login:Laya.Label;
		public btn_getcode:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"y":92,"width":142,"skin":"img/main/qianbaoicon@2x.png","height":142,"centerX":0}},{"type":"Label","props":{"y":268,"valign":"middle","text":"WWEC Wallet","height":56,"fontSize":40,"color":"#163853","centerX":0,"bold":true,"align":"center"}},{"type":"TextInput","props":{"y":456,"width":500,"var":"inp_phNumber","valign":"middle","promptColor":"#687076","prompt":"请输入手机号","maxChars":11,"left":30,"height":40,"fontSize":28,"align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-5}}]},{"type":"TextInput","props":{"y":580,"width":500,"var":"inp_vcode","valign":"middle","promptColor":"#687076","prompt":"请输入验证码","maxChars":6,"left":30,"height":40,"fontSize":28,"align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-5}}]},{"type":"TextInput","props":{"y":704,"x":30,"width":500,"var":"inp_pass","valign":"middle","type":"password","promptColor":"#687076","prompt":"登录密码","maxChars":32,"left":30,"height":40,"fontSize":28,"align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-5}}]},{"type":"TextInput","props":{"y":828,"x":30,"width":500,"var":"inp_passconf","valign":"middle","type":"password","promptColor":"#687076","prompt":"确认登录密码","maxChars":32,"left":30,"height":40,"fontSize":28,"align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-5}}]},{"type":"TextInput","props":{"y":952,"x":30,"width":500,"var":"inp_invitation","valign":"middle","promptColor":"#FF5151","prompt":"邀请码（必填）","maxChars":6,"left":30,"height":40,"fontSize":28,"align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-5}}]},{"type":"Button","props":{"y":1074,"x":30,"width":690,"var":"btn_regist","stateNum":1,"skin":"img/main/anliu@2x.png","labelSize":36,"labelColors":"#ffffff","label":"注册","height":80,"centerX":0}},{"type":"Label","props":{"y":1212,"x":343,"var":"btn_login","valign":"middle","text":"登录","height":44,"fontSize":32,"color":"#598ADA","centerX":0,"align":"center"}},{"type":"Button","props":{"y":444,"width":168,"var":"btn_getcode","skin":"img/main/img_blue2.png","right":30,"labelSize":24,"labelColors":"#FFFFFF","label":"获取验证码","height":60,"disabled":false}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.user.UserRegistUI.uiView);
        }
    }
}

module ui.user {
    export class UserResetUI extends View {
		public inp_phone:Laya.TextInput;
		public inp_code:Laya.TextInput;
		public inp_pass:Laya.TextInput;
		public inp_passconf:Laya.TextInput;
		public btn_update:Laya.Button;
		public btn_getcode:Laya.Button;
		public btn_login:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Box","props":{"y":10,"x":10,"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"y":92,"width":142,"skin":"img/main/qianbaoicon@2x.png","height":142,"centerX":0}},{"type":"Label","props":{"y":268,"valign":"middle","text":"WWEC Wallet","height":56,"fontSize":40,"color":"#163853","centerX":0,"bold":true,"align":"center"}},{"type":"TextInput","props":{"y":456,"width":500,"var":"inp_phone","valign":"middle","promptColor":"#687076","prompt":"请输入手机号","maxChars":11,"left":30,"height":40,"fontSize":28,"align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-5}}]},{"type":"TextInput","props":{"y":580,"width":500,"var":"inp_code","valign":"middle","type":"number","promptColor":"#687076","prompt":"请输入验证码","maxChars":6,"left":30,"height":40,"fontSize":28,"align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-5}}]},{"type":"TextInput","props":{"y":704,"x":30,"width":500,"var":"inp_pass","valign":"middle","type":"password","promptColor":"#687076","prompt":"修改密码","maxChars":32,"left":30,"height":40,"fontSize":28,"align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-5}}]},{"type":"TextInput","props":{"y":828,"x":30,"width":500,"var":"inp_passconf","valign":"middle","type":"password","promptColor":"#687076","prompt":"确认修改密码","maxChars":32,"left":30,"height":40,"fontSize":28,"align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-5}}]},{"type":"Button","props":{"y":1074,"x":30,"width":690,"var":"btn_update","stateNum":1,"skin":"img/main/anliu@2x.png","labelSize":36,"labelColors":"#ffffff","label":"确定修改","height":80,"centerX":0}},{"type":"Button","props":{"y":444,"width":168,"var":"btn_getcode","skin":"img/main/img_blue2.png","right":30,"labelSize":24,"labelColors":"#FFFFFF","label":"获取验证码","height":60,"disabled":false}},{"type":"Label","props":{"y":1222,"x":343,"var":"btn_login","valign":"middle","text":"登录","height":44,"fontSize":32,"color":"#598ADA","centerX":0,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.user.UserResetUI.uiView);
        }
    }
}

module ui {
    export class WalletBackUpUI extends View {
		public btn_back:Laya.Image;
		public btn_backup:Laya.Button;
		public info_backup:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"y":54,"x":20,"width":65,"var":"btn_back","skin":"img/main/back@2x.png","height":65}},{"type":"Image","props":{"y":266,"width":124,"skin":"img/main/anquan@2x.png","height":144,"centerX":0}},{"type":"Label","props":{"y":62,"valign":"middle","text":"备份钱包","height":44,"fontSize":32,"color":"#163853","centerX":0,"align":"center"}},{"type":"Label","props":{"y":496,"valign":"middle","text":"立即备份你的钱包！","height":56,"fontSize":40,"color":"#163853","centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"y":636,"x":30,"valign":"middle","text":"备份钱包：导出「助记词」并抄写到安全的地方","height":44,"fontSize":24,"color":"#687076","align":"left"}},{"type":"Label","props":{"y":680,"x":26,"valign":"middle","text":" 千万不要保存到网络上。然后尝试转入，转出小额资产开始使用。","height":44,"fontSize":24,"color":"#687076","align":"left"}},{"type":"Button","props":{"y":946,"width":708,"var":"btn_backup","stateNum":1,"skin":"img/main/anliu@2x.png","sizeGrid":"0,0,0,0","labelSize":32,"labelColors":"#ffffff","label":"备份钱包","height":80,"centerX":0}},{"type":"Label","props":{"y":1072,"var":"info_backup","text":"查看备份详细教程","height":34,"fontSize":32,"color":"#687076","centerX":0,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.WalletBackUpUI.uiView);
        }
    }
}

module ui {
    export class WalletCreateUI extends View {
		public text_wall_name:Laya.TextInput;
		public text_pass:Laya.TextInput;
		public text_pass_conf:Laya.TextInput;
		public lab_info:Laya.Label;
		public check_argee:Laya.CheckBox;
		public btn_back:Laya.Button;
		public lab_pass_level:Laya.Label;
		public lab_warn_wName:Laya.Label;
		public lab_pass:Laya.Label;
		public lab_pass_conf:Laya.Label;
		public btn_import:Laya.Label;
		public lab_words:Laya.Label;
		public box_pass_level:Laya.Box;
		public href_ysfw:Laya.Label;
		public btn_create:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"visible":true,"top":0,"right":0,"left":0,"height":1334,"cacheAsBitmap":true,"cacheAs":"bitmap","bottom":0},"child":[{"type":"Label","props":{"y":186,"x":70,"valign":"middle","text":"密码用于保护私匙和交易授权，强度非常重要","height":34,"fontSize":24,"color":"#163853","align":"left"}},{"type":"Label","props":{"y":234,"x":70,"valign":"middle","text":"WWEC Wallet 不储存密码，也无法帮您找回，请务必牢记","height":34,"fontSize":24,"color":"#163853","align":"left"}},{"type":"TextInput","props":{"y":338,"x":30,"width":500,"var":"text_wall_name","promptColor":"#8e979f","prompt":"钱包名称","maxChars":20,"layoutEnabled":true,"height":45,"fontSize":28,"align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-10}}]},{"type":"TextInput","props":{"y":454,"x":30,"width":500,"var":"text_pass","type":"password","promptColor":"#8e979f","prompt":"密码","maxChars":32,"layoutEnabled":true,"height":45,"fontSize":28,"align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-10}}]},{"type":"TextInput","props":{"y":578,"x":30,"width":500,"var":"text_pass_conf","type":"password","promptColor":"#8e979f","prompt":"确认密码","maxChars":32,"layoutEnabled":true,"height":45,"fontSize":28,"align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":-10}}]},{"type":"Label","props":{"y":706,"x":70,"width":240,"var":"lab_info","valign":"middle","text":"我已经仔细阅读并同意","padding":"0","name":"隐私及服务条款","height":34,"fontSize":24,"color":"#8E979F","align":"left"}},{"type":"CheckBox","props":{"y":708,"x":30,"width":126,"var":"check_argee","skin":"img/main/radio.png","scaleY":2,"scaleX":2,"mouseEnabled":true,"layoutEnabled":true,"hitTestPrior":true,"height":24,"click":"updateArgee"}},{"type":"Label","props":{"y":62,"valign":"middle","text":"创建钱包","strokeColor":"#f9f9f9","skin":"template/Navigator/label.png","height":44,"fontSize":32,"color":"#FF163853","centerX":0,"align":"center"}},{"type":"Button","props":{"y":54,"x":20,"width":65,"var":"btn_back","stateNum":1,"skin":"img/main/back@2x.png","labelSize":22,"labelColors":"#057AFB,#057AFB,#7EB9FB","height":65}},{"type":"Label","props":{"y":450,"var":"lab_pass_level","valign":"middle","text":"很弱","right":106,"height":34,"fontSize":20,"color":"#ff0400","align":"center"}},{"type":"Label","props":{"y":386,"width":294,"visible":false,"var":"lab_warn_wName","valign":"middle","text":"钱包已经存在","right":70,"height":34,"fontSize":20,"color":"#ff0400","align":"right"}},{"type":"Label","props":{"y":510,"width":643,"var":"lab_pass","valign":"middle","text":"不少于8个字符,建议混合大小写字母，数字，特殊字符","right":70,"height":34,"fontSize":20,"color":"#ff0400","align":"right"}},{"type":"Label","props":{"y":624,"width":301,"visible":false,"var":"lab_pass_conf","valign":"middle","text":"两次密码不一致","right":70,"height":34,"fontSize":20,"color":"#ff0400","align":"right"}},{"type":"Label","props":{"y":984,"var":"btn_import","valign":"middle","text":"导入钱包","height":44,"fontSize":32,"color":"#8E979F","centerX":0,"align":"center"}},{"type":"Image","props":{"y":198,"x":30,"width":12,"skin":"img/main/Oval@2x.png","height":12}},{"type":"Image","props":{"y":246,"x":30,"width":12,"skin":"img/main/Oval@2x.png","height":12}},{"type":"Label","props":{"y":510,"visible":false,"var":"lab_words","valign":"middle","text":"0字符","right":70,"height":34,"fontSize":20,"color":"#5eb0c2","align":"right"}},{"type":"Box","props":{"y":428,"x":656,"width":36,"var":"box_pass_level","height":76},"child":[{"type":"Image","props":{"width":36,"top":0,"skin":"img/main/fangkuai@2x.png","name":"a","height":16}},{"type":"Image","props":{"x":0,"width":36,"top":20,"skin":"img/main/fangkuai@2x.png","name":"b","height":16}},{"type":"Image","props":{"x":0,"width":36,"top":40,"skin":"img/main/fangkuai@2x.png","name":"c","height":16}},{"type":"Image","props":{"width":36,"skin":"img/main/fangkuai@2x.png","name":"d","height":16,"bottom":0}}]},{"type":"Label","props":{"y":706,"x":312,"width":240,"var":"href_ysfw","valign":"middle","text":"隐私及服务条款","padding":"0","height":34,"fontSize":24,"color":"#598ADA","align":"left"}},{"type":"Button","props":{"y":838,"x":10,"width":708,"var":"btn_create","stateNum":1,"skin":"img/main/anliu@2x.png","sizeGrid":"0,0,0,0","labelSize":32,"labelColors":"#ffffff","label":"创建钱包","height":80,"disabled":true,"centerX":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.WalletCreateUI.uiView);
        }
    }
}

module ui {
    export class WalletDetailUI extends View {
		public btn_back:Laya.Button;
		public lab_wName:Laya.Label;
		public btn_save:Laya.Label;
		public lab_total:Laya.Label;
		public img_wImg:Laya.Image;
		public lab_wAddr:Laya.Label;
		public text_wName:Laya.TextInput;
		public box_reverpass:Laya.Box;
		public box_expSeckey:Laya.Box;
		public box_expKeystore:Laya.Box;
		public btn_backup:Laya.Button;
		public btn_delete:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":750,"height":216,"fillColor":"#598ADA"}},{"type":"Button","props":{"y":40,"x":30,"width":65,"var":"btn_back","stateNum":1,"skin":"img/main/back@2x.png","labelSize":22,"labelColors":"#057AFB,#057AFB,#7EB9FB","height":65}},{"type":"Label","props":{"y":40,"x":353,"var":"lab_wName","valign":"middle","text":"myeth","height":44,"fontSize":32,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"var":"btn_save","valign":"middle","top":40,"text":"保存","right":30,"height":40,"fontSize":28,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":282,"var":"lab_total","valign":"middle","text":"0 ¥","height":40,"fontSize":28,"color":"#163853","centerX":0,"align":"center"}},{"type":"Image","props":{"y":172,"width":88,"var":"img_wImg","skin":"img/main/wd@2x.png","height":88,"centerX":0}},{"type":"Label","props":{"y":332,"var":"lab_wAddr","valign":"middle","text":"52s5c2d6...3625x15d","right":0,"left":0,"height":40,"fontSize":28,"color":"#8E979F","align":"center"}},{"type":"Label","props":{"y":516,"x":30,"valign":"middle","text":"钱包名称","height":40,"fontSize":28,"color":"#163853","align":"center"}},{"type":"TextInput","props":{"y":556,"width":478,"var":"text_wName","text":"myeth","left":30,"height":40,"fontSize":28,"color":"#163853"}},{"type":"Image","props":{"y":600,"skin":"img/main/itemSepar.png","right":0,"left":30}},{"type":"Box","props":{"y":644,"var":"box_reverpass","right":0,"left":0,"height":50},"child":[{"type":"Label","props":{"width":191,"valign":"middle","text":"修改密码","left":30,"height":40,"fontSize":28,"color":"#163853","centerY":0,"align":"left"}},{"type":"Image","props":{"skin":"img/main/next@2x.png","right":20,"centerY":0}}]},{"type":"Box","props":{"y":764,"var":"box_expSeckey","right":0,"left":0,"height":50,"disabled":true},"child":[{"type":"Label","props":{"width":233,"valign":"middle","text":"导出私钥","left":30,"height":40,"fontSize":28,"color":"#163853","centerY":0,"align":"left"}},{"type":"Image","props":{"skin":"img/main/next@2x.png","right":20,"centerY":0}},{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":30,"height":1,"bottom":-35}}]},{"type":"Box","props":{"y":884,"var":"box_expKeystore","right":0,"left":0,"height":50,"disabled":true},"child":[{"type":"Label","props":{"width":203,"valign":"middle","text":"导出Keystore","left":30,"height":44,"fontSize":28,"color":"#163853","centerY":0,"align":"left"}},{"type":"Image","props":{"skin":"img/main/next@2x.png","right":20,"centerY":0}},{"type":"Image","props":{"y":10,"x":10,"skin":"img/main/itemSepar.png","right":0,"left":30,"height":1,"bottom":-35}}]},{"type":"Button","props":{"var":"btn_backup","stateNum":1,"skin":"img/main/anliu@2x.png","sizeGrid":"0,0,0,0","right":30,"left":30,"labelSize":32,"labelColors":"#ffffff","label":"备份助记词","height":80,"bottom":172}},{"type":"Button","props":{"var":"btn_delete","stateNum":1,"skin":"img/main/anliu-@2x.png","sizeGrid":"0,0,0,0","right":30,"left":30,"labelSize":32,"labelColors":"#ffffff","label":"删除钱包","height":80,"bottom":60}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.WalletDetailUI.uiView);
        }
    }
}

module ui {
    export class WalletMainUI extends View {
		public lab_wName:Laya.Label;
		public lab_wAddr:Laya.Label;
		public lab_total:Laya.Label;
		public btn_owner_info:Laya.Image;
		public btn_addCoin:Laya.Image;
		public btn_more:Laya.Image;
		public list_wallet:Laya.List;
		public cImg:Laya.Image;
		public cName:Laya.Label;
		public cTotal:Laya.Label;
		public cValue:Laya.Label;
		public btn_assets:Laya.Button;
		public btn_me:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"height":1334,"cacheAsBitmap":true,"cacheAs":"bitmap","bottom":0},"child":[{"type":"Image","props":{"top":0,"skin":"img/main/e@2x.png","right":0,"left":0,"height":544}},{"type":"Image","props":{"y":80,"width":120,"skin":"img/main/touxiang@2x.png","height":120,"centerX":0}},{"type":"Label","props":{"y":225,"var":"lab_wName","text":"我的钱包名称","height":40,"fontSize":32,"color":"#ffffff","centerX":0}},{"type":"Label","props":{"y":288,"width":368,"var":"lab_wAddr","valign":"middle","text":"AAAAAAAA......AAAAAAAA","overflow":"hidden","height":44,"fontSize":28,"color":"#ffffff","centerX":-61,"align":"right"}},{"type":"Label","props":{"y":480,"x":30,"width":565,"valign":"middle","text":"总资产( ¥ )","height":44,"fontSize":24,"color":"#000000"}},{"type":"Label","props":{"y":398,"width":518,"var":"lab_total","valign":"middle","text":"0","left":75,"height":80,"fontSize":56,"color":"#000000","align":"left"}},{"type":"Image","props":{"y":283,"x":496,"width":67,"var":"btn_owner_info","skin":"img/main/erweima@2x.png","height":60}},{"type":"Image","props":{"y":429,"width":88,"var":"btn_addCoin","skin":"img/main/tj@2x.png","sizeGrid":"0,0,0,0","right":30,"height":88}},{"type":"Image","props":{"width":60,"var":"btn_more","top":60,"skin":"img/main/mr@2x.png","right":30,"height":60}},{"type":"List","props":{"width":750,"var":"list_wallet","top":544,"spaceY":5,"selectEnable":true,"right":0,"repeatX":1,"left":0,"height":844,"bottom":96},"child":[{"type":"Box","props":{"right":0,"name":"render","left":0,"height":150},"child":[{"type":"Image","props":{"top":0,"skin":"img/main/white.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"x":28,"width":80,"var":"cImg","skin":"img/main/qb@2x.png","name":"cImg","height":80,"centerY":0}},{"type":"Label","props":{"x":114,"width":300,"var":"cName","text":"数据读取中","skin":"template/List/label.png","name":"cName","height":48,"fontSize":40,"color":"#100E28","centerY":0}},{"type":"Label","props":{"var":"cTotal","valign":"middle","text":"0","right":30,"name":"cTotal","height":40,"fontSize":40,"color":"#100E28","centerY":-13,"align":"right"}},{"type":"Label","props":{"var":"cValue","valign":"middle","text":"0","right":30,"name":"cValue","height":44,"fontSize":24,"color":"#8E979F","bottom":5,"align":"right"}},{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":0}}]}]},{"type":"Button","props":{"x":155,"width":72,"var":"btn_assets","stateNum":1,"skin":"img/main/zichan@2x.png","sizeGrid":"0,0,-80,0","name":"item1","labelSize":20,"labelPadding":"30","labelColors":"#598ADA","label":"资产","height":88,"bottom":8}},{"type":"Button","props":{"x":473,"width":72,"var":"btn_me","stateNum":1,"skin":"img/main/wode@2x.png","sizeGrid":"0,0,-80,0","name":"item2","labelSize":20,"labelPadding":"30","labelColors":"#B0BBC4","label":"我的","height":88,"bottom":8}},{"type":"Label","props":{"y":398,"width":40,"valign":"middle","text":"≈","left":30,"height":80,"fontSize":56,"color":"#000000","align":"left"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.WalletMainUI.uiView);
        }
    }
}

module ui {
    export class WalletManageUI extends View {
		public btn_goback:Laya.Image;
		public list_wallet:Laya.List;
		public img_wallet:Laya.Image;
		public lab_wName:Laya.Label;
		public lab_wAddr:Laya.Label;
		public lab_wTotal:Laya.Label;
		public btn_create:Laya.Button;
		public btn_import:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":750,"lineWidth":1,"height":1334,"fillColor":"#F3F3F4"}},{"type":"Box","props":{"y":0,"right":0,"left":0,"height":128},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":750,"lineWidth":1,"height":128,"fillColor":"#ffffff"}},{"type":"Image","props":{"x":30,"width":65,"var":"btn_goback","skin":"img/main/back@2x.png","height":65,"centerY":0}},{"type":"Label","props":{"x":310,"valign":"middle","text":"管理钱包","height":40,"fontSize":32,"color":"#163853","centerY":0,"centerX":0,"bold":true,"align":"center"}}]},{"type":"List","props":{"var":"list_wallet","top":156,"spaceY":28,"selectEnable":true,"right":0,"repeatX":1,"left":0,"bottom":88},"child":[{"type":"Box","props":{"right":0,"renderType":"render","name":"render","left":0,"height":280},"child":[{"type":"Image","props":{"top":0,"skin":"img/main/white.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":67,"x":60,"width":60,"var":"img_wallet","skin":"img/main/wd@2x.png","name":"img_wallet","height":60}},{"type":"Label","props":{"y":56,"x":154,"width":170,"var":"lab_wName","valign":"middle","text":"ETH","skin":"template/List/label.png","name":"lab_wName","height":40,"fontSize":38,"color":"#163853","align":"left"}},{"type":"Label","props":{"y":104,"x":154,"width":560,"var":"lab_wAddr","valign":"middle","text":"035dx5dx...","skin":"template/List/label.png","name":"lab_wAddr","height":30,"fontSize":26,"color":"#8E979F","align":"left"}},{"type":"Image","props":{"y":60,"width":32,"skin":"img/main/next@2x.png","right":20,"height":32}},{"type":"Label","props":{"var":"lab_wTotal","valign":"middle","text":"0","skin":"template/List/label.png","right":55,"name":"lab_wTotal","left":35,"height":55,"fontSize":28,"color":"#163853","bottom":37,"align":"right"}},{"type":"Image","props":{"y":155,"skin":"img/main/itemSepar.png","right":20,"left":60,"height":1}},{"type":"Label","props":{"valign":"middle","text":"¥","skin":"template/List/label.png","right":35,"height":55,"fontSize":28,"color":"#163853","bottom":39,"align":"right"}}]}]},{"type":"Button","props":{"y":1274,"x":0,"width":375,"var":"btn_create","stateNum":1,"skin":"img/main/img_blue1.png","labelSize":32,"labelColors":"#ffffff","labelAlign":"center","label":"创建钱包","height":88,"bottom":0}},{"type":"Button","props":{"y":1274,"x":375,"width":375,"var":"btn_import","stateNum":1,"skin":"img/main/img_blue2.png","mouseEnabled":true,"layoutEnabled":true,"labelSize":32,"labelColors":"#ffffff","label":"导入钱包","height":88,"bottom":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.WalletManageUI.uiView);
        }
    }
}

module ui {
    export class WalletMeUI extends View {
		public lab_wel:Laya.Label;
		public btn_manageWal:Laya.Box;
		public btn_dealHistory:Laya.Box;
		public btn_lqtg:Laya.Box;
		public btn_helpus:Laya.Box;
		public btn_about:Laya.Box;
		public btn_logout:Laya.Button;
		public btn_assets:Laya.Button;
		public btn_me:Laya.Button;
		public btn_invid:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"height":1334,"cacheAsBitmap":true,"cacheAs":"bitmap","bottom":0},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"width":68,"top":30,"skin":"img/main/sz@2x.png","right":30,"height":68}},{"type":"Image","props":{"y":172,"x":60,"width":58,"skin":"img/main/wd@2x.png","height":58}},{"type":"Label","props":{"y":172,"x":146,"var":"lab_wel","valign":"middle","text":"欢迎来到WWEC Wallet","height":56,"fontSize":40,"color":"#163853","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":340,"width":750,"var":"btn_manageWal","right":0,"left":0,"height":60},"child":[{"type":"Image","props":{"top":0,"right":0,"left":0,"bottom":0}},{"type":"Image","props":{"x":54,"width":56,"skin":"img/main/glqb@2x.png","height":56,"centerY":0}},{"type":"Label","props":{"x":138,"width":445,"valign":"middle","text":"管理钱包","skin":"template/List/label.png","height":44,"fontSize":32,"color":"#163853","centerY":0,"bold":true,"align":"left"}},{"type":"Image","props":{"width":32,"skin":"img/main/next@2x.png","right":42,"height":32,"centerY":0}},{"type":"Image","props":{"y":50,"x":50,"skin":"img/main/itemSepar.png","right":0,"left":138,"height":1,"bottom":-15}}]},{"type":"Box","props":{"y":430,"var":"btn_dealHistory","right":0,"left":0,"height":60},"child":[{"type":"Image","props":{"top":0,"right":0,"left":0,"bottom":-1}},{"type":"Image","props":{"x":54,"width":56,"skin":"img/main/jyjl@2x.png","height":56,"centerY":0}},{"type":"Label","props":{"x":138,"width":445,"valign":"middle","text":"交易记录","skin":"template/List/label.png","height":44,"fontSize":32,"color":"#163853","centerY":0,"bold":true,"align":"left"}},{"type":"Image","props":{"width":32,"skin":"img/main/next@2x.png","right":42,"height":32,"centerY":0}},{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":138,"height":1,"bottom":-15}}]},{"type":"Box","props":{"y":520,"x":20,"var":"btn_lqtg","right":0,"left":0,"height":60,"disabled":false},"child":[{"type":"Image","props":{"top":0,"right":0,"left":0,"bottom":-1}},{"type":"Image","props":{"x":54,"width":56,"skin":"img/main/tglq@2x.png","height":56,"centerY":0}},{"type":"Label","props":{"x":138,"width":445,"valign":"middle","text":"糖果领取","skin":"template/List/label.png","height":44,"fontSize":32,"color":"#163853","centerY":0,"bold":true,"align":"left"}},{"type":"Image","props":{"width":32,"skin":"img/main/next@2x.png","right":42,"height":32,"centerY":0}},{"type":"Image","props":{"y":10,"x":10,"skin":"img/main/itemSepar.png","right":0,"left":138,"height":1,"bottom":-15}}]},{"type":"Box","props":{"y":700,"var":"btn_helpus","right":0,"left":0,"height":60,"disabled":false},"child":[{"type":"Image","props":{"top":0,"right":0,"left":0,"bottom":-1}},{"type":"Image","props":{"x":54,"width":56,"skin":"img/main/bzwm@2x.png","height":56,"centerY":0}},{"type":"Label","props":{"x":138,"width":445,"valign":"middle","text":"帮助我们","skin":"template/List/label.png","height":44,"fontSize":32,"color":"#163853","centerY":0,"bold":true,"align":"left"}},{"type":"Image","props":{"width":32,"skin":"img/main/next@2x.png","right":42,"height":32,"centerY":0}},{"type":"Image","props":{"y":20,"x":20,"skin":"img/main/itemSepar.png","right":0,"left":138,"height":1,"bottom":-15}}]},{"type":"Box","props":{"y":790,"var":"btn_about","right":0,"left":0,"height":60},"child":[{"type":"Image","props":{"top":0,"right":0,"left":0,"bottom":-1}},{"type":"Image","props":{"x":54,"width":56,"skin":"img/main/gywm@2x.png","height":56,"centerY":0}},{"type":"Label","props":{"x":138,"width":445,"valign":"middle","text":"关于我们","skin":"template/List/label.png","height":44,"fontSize":32,"color":"#163853","centerY":0,"bold":true,"align":"left"}},{"type":"Image","props":{"width":32,"skin":"img/main/next@2x.png","right":42,"height":32,"centerY":0}},{"type":"Image","props":{"y":40,"x":40,"skin":"img/main/itemSepar.png","right":0,"left":138,"height":1,"bottom":-15}}]},{"type":"Button","props":{"y":1088,"var":"btn_logout","stateNum":1,"skin":"img/main/anliu@2x.png","right":30,"left":30,"labelSize":32,"labelColors":"#ffffff","label":"退出登录","height":80}},{"type":"Button","props":{"y":1238,"x":155,"width":72,"var":"btn_assets","stateNum":1,"skin":"img/main/zichan-@2x.png","sizeGrid":"0,0,-80,0","labelSize":20,"labelPadding":"35","labelColors":"#B0BBC4","label":"资产","height":88,"bottom":8}},{"type":"Button","props":{"y":1238,"x":473,"width":72,"var":"btn_me","stateNum":1,"skin":"img/main/wo. de-@2x.png","sizeGrid":"0,0,-80,0","name":"item2","labelSize":20,"labelPadding":"35","labelColors":"#598ADA","label":"我的","height":88,"bottom":8}},{"type":"Box","props":{"y":610,"var":"btn_invid","right":0,"left":0,"height":60,"disabled":false},"child":[{"type":"Image","props":{"top":0,"right":0,"left":0,"bottom":-1}},{"type":"Image","props":{"x":54,"width":56,"skin":"img/main/tuijian@3x.png","height":56,"centerY":0}},{"type":"Label","props":{"x":138,"width":445,"valign":"middle","text":"邀请有奖","skin":"template/List/label.png","height":44,"fontSize":32,"color":"#163853","centerY":0,"bold":true,"align":"left"}},{"type":"Image","props":{"width":32,"skin":"img/main/next@2x.png","right":42,"height":32,"centerY":0}},{"type":"Image","props":{"y":30,"x":30,"skin":"img/main/itemSepar.png","right":0,"left":138,"height":1,"bottom":-15}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.WalletMeUI.uiView);
        }
    }
}

module ui {
    export class WalletQuickUI extends Dialog {
		public bg:Laya.Image;
		public list_wallet:Laya.List;
		public img_bg:Laya.Image;
		public img_wallet:Laya.Image;
		public lab_wName:Laya.Label;
		public box_btns:Laya.Box;
		public img_spe:Laya.Image;
		public lab_sao:Laya.Label;
		public lab_create:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"y":0,"x":0,"width":375,"height":1334,"cacheAsBitmap":true,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"var":"bg","top":0,"skin":"img/main/white.jpg","right":0,"left":0,"bottom":0}},{"type":"List","props":{"var":"list_wallet","top":80,"spaceY":15,"selectEnable":true,"right":0,"repeatX":1,"left":0,"height":320},"child":[{"type":"Box","props":{"right":0,"name":"render","left":0,"height":80},"child":[{"type":"Image","props":{"var":"img_bg","top":0,"skin":"img/main/white.png","right":0,"name":"img_bg","left":0,"bottom":-1}},{"type":"Image","props":{"x":30,"width":56,"var":"img_wallet","skin":"img/main/wode@2x.png","name":"img_wallet","height":56,"centerY":0}},{"type":"Label","props":{"y":19,"x":100,"width":215,"var":"lab_wName","valign":"middle","text":"label","skin":"template/List/label.png","name":"lab_wName","height":50,"fontSize":28,"color":"#687076","align":"left"}}]}]},{"type":"Box","props":{"x":0,"var":"box_btns","top":460,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img_spe","skin":"img/main/itemSepar.png","right":0,"left":0,"height":2}},{"type":"Image","props":{"y":10,"width":56,"skin":"img/main/sys@2x.png","left":30,"height":56}},{"type":"Label","props":{"y":10,"x":100,"var":"lab_sao","valign":"middle","text":"扫一扫","height":56,"fontSize":28,"color":"#687076","align":"left"}},{"type":"Image","props":{"y":90,"width":56,"skin":"img/main/qb@2x.png","left":30,"height":56}},{"type":"Label","props":{"y":90,"x":100,"var":"lab_create","valign":"middle","text":"创建钱包","height":56,"fontSize":28,"color":"#687076","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.WalletQuickUI.uiView);
        }
    }
}

module ui {
    export class WalletReceiveUI extends View {
		public btn_goback:Laya.Button;
		public btn_share:Laya.Button;
		public lab_wAddr:Laya.TextInput;
		public img_wAddr:Laya.Image;
		public text_amount:Laya.TextInput;
		public warn_amount:Laya.Label;
		public btn_copy:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":224,"fillColor":"#598ADA"}},{"type":"Button","props":{"y":40,"x":40,"width":65,"var":"btn_goback","stateNum":1,"skin":"img/main/xx@2x.png","labelSize":22,"labelColors":"#057AFB,#057AFB,#7EB9FB","height":65}},{"type":"Label","props":{"y":48,"x":343,"valign":"middle","text":"收款","strokeColor":"#f9f9f9","skin":"template/Navigator/label.png","height":44,"fontSize":32,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Image","props":{"y":180,"x":331,"width":88,"skin":"img/main/wd@2x.png","height":88,"centerX":0}},{"type":"Button","props":{"y":40,"width":120,"var":"btn_share","stateNum":1,"skin":"img/main/fenxiang@2x.png","sizeGrid":"0,-120,0,0","right":40,"labelSize":24,"labelPadding":"0,0,0,30","labelColors":"#ffffff","label":"分享","height":60,"disabled":false}},{"type":"TextInput","props":{"y":360,"wordWrap":true,"var":"lab_wAddr","valign":"middle","text":"0x098373B3863c1ca7862b4786c13611a71e2BB682","right":0,"overflow":"scroll","left":0,"layoutEnabled":true,"height":40,"fontSize":28,"editable":false,"color":"#8E979F","align":"center"}},{"type":"Image","props":{"width":500,"var":"img_wAddr","height":500,"centerY":127,"centerX":0}},{"type":"Label","props":{"y":1000,"visible":false,"valign":"middle","text":"复制地址","right":0,"left":0,"height":80,"fontSize":32,"color":"#8E979F","align":"center"}},{"type":"TextInput","props":{"y":390,"wordWrap":true,"visible":false,"var":"text_amount","valign":"middle","type":"number","right":100,"promptColor":"#163853","prompt":"请输入金额","overflow":"scroll","left":100,"layoutEnabled":true,"height":40,"fontSize":24,"color":"#163853","align":"left"},"child":[{"type":"Image","props":{"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":0}}]},{"type":"Label","props":{"y":451,"visible":false,"var":"warn_amount","text":"请输入合法的金额","right":100,"height":30,"fontSize":24,"color":"#ff0400","align":"right"}},{"type":"Button","props":{"y":1134,"var":"btn_copy","stateNum":1,"skin":"img/main/anliu@2x.png","right":40,"left":40,"labelSize":32,"labelColors":"#ffffff","label":"复制地址","height":80}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.WalletReceiveUI.uiView);

        }

    }
}

module ui {
    export class WalletSendUI extends View {
		public lab_coin_name:Laya.Label;
		public text_addr:Laya.TextInput;
		public text_amount:Laya.TextInput;
		public btn_next:Laya.Button;
		public btn_sys:Laya.Image;
		public btn_goback:Laya.Button;
		public warn_Addr:Laya.Label;
		public warn_amount:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Label","props":{"y":30,"x":355,"width":87,"var":"lab_coin_name","valign":"middle","top":66,"text":"ETH","height":60,"fontSize":32,"color":"#000000","align":"center"}},{"type":"Label","props":{"y":30,"x":283,"width":70,"valign":"middle","top":66,"text":"转账","height":60,"fontSize":32,"color":"#000000","align":"center"}},{"type":"TextInput","props":{"y":220,"var":"text_addr","right":30,"prompt":"收款人账户地址","maxChars":42,"left":30,"layoutEnabled":true,"height":80,"fontSize":28}},{"type":"TextInput","props":{"y":360,"var":"text_amount","type":"number","right":30,"prompt":"转账金额","maxChars":30,"left":30,"layoutEnabled":true,"height":80,"fontSize":28}},{"type":"Button","props":{"y":379,"x":0,"var":"btn_next","stateNum":1,"skin":"img/main/bfqb@2x.png","sizeGrid":"0,0,0,0","right":0,"left":0,"labelSize":28,"labelColors":"#ffffff","labelAlign":"center","label":"下一步","height":88,"bottom":0}},{"type":"Image","props":{"width":60,"var":"btn_sys","top":30,"skin":"img/main/sys@2x.png","right":30,"height":60}},{"type":"Button","props":{"y":30,"x":30,"width":65,"var":"btn_goback","stateNum":1,"skin":"img/main/back@2x.png","labelSize":22,"labelColors":"#057AFB,#057AFB,#7EB9FB","height":65}},{"type":"Label","props":{"y":310,"width":491,"visible":false,"var":"warn_Addr","text":"地址不正确","right":30,"height":35,"fontSize":18,"color":"#ff0400","align":"right"}},{"type":"Label","props":{"y":450,"width":440,"visible":false,"var":"warn_amount","text":"请输入正确的金额","right":30,"height":40,"fontSize":18,"color":"#ff0400","align":"right"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.WalletSendUI.uiView);
        }
    }
}

module ui {
    export class WalletSendSubmitUI extends View {
		public btn_goback:Laya.Button;
		public coin_type:Laya.Label;
		public text_to:Laya.TextInput;
		public text_from:Laya.TextInput;
		public btn_submit:Laya.Button;
		public send_amout:Laya.TextInput;
		public sli_gas:Laya.HSlider;
		public lab_slow:Laya.Label;
		public lab_quick:Laya.Label;
		public lab_max_gas:Laya.TextInput;
		public lab_max_gas_usd:Laya.TextInput;
		public lab_max_total:Laya.TextInput;
		public lab_max_total_usd:Laya.TextInput;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Button","props":{"y":40,"x":30,"width":65,"var":"btn_goback","stateNum":1,"skin":"img/main/xx@2x.png","labelSize":22,"labelColors":"#057AFB,#057AFB,#7EB9FB","height":65}},{"type":"Label","props":{"y":48,"x":162,"width":204,"var":"coin_type","valign":"middle","text":"ETH","strokeColor":"#f9f9f9","skin":"template/Navigator/label.png","height":44,"fontSize":32,"color":"#163853","align":"right"}},{"type":"TextInput","props":{"y":131,"text":"收款人账户地址","right":20,"maxChars":30,"left":30,"layoutEnabled":true,"height":40,"fontSize":24,"editable":false,"color":"#8E979F"}},{"type":"TextInput","props":{"y":270,"right":20,"prompt":"发送人账户地址","maxChars":30,"left":30,"layoutEnabled":true,"height":40,"fontSize":28,"editable":false,"color":"#8E979F"}},{"type":"Label","props":{"y":410,"valign":"middle","text":"转账金额 :","left":30,"height":40,"fontSize":28,"color":"#868686","align":"left"}},{"type":"TextInput","props":{"y":180,"var":"text_to","text":"0x098373B3863c1ca7862b4786c13611a71e2BB682","right":20,"maxChars":42,"left":30,"layoutEnabled":true,"height":40,"fontSize":28,"editable":false,"color":"#8E979F","align":"left"},"child":[{"type":"Image","props":{"visible":false,"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":0}}]},{"type":"TextInput","props":{"y":320,"var":"text_from","text":"0x098373B3863c1ca7862b4786c13611a71e2BB682","right":20,"prompt":"发送人账户地址","overflow":"scroll","maxChars":42,"left":30,"layoutEnabled":true,"height":40,"fontSize":29,"editable":false,"color":"#8E979F","align":"left"}},{"type":"Button","props":{"var":"btn_submit","stateNum":1,"skin":"img/main/bfqb@2x.png","sizeGrid":"0,0,0,0","right":0,"left":0,"labelSize":32,"labelColors":"#ffffff","labelAlign":"center","label":"提交","height":88,"bottom":0}},{"type":"TextInput","props":{"y":410,"x":177,"width":532,"var":"send_amout","valign":"middle","type":"number","text":"0","maxChars":30,"height":40,"fontSize":32,"editable":false,"color":"#8E979F","align":"left"},"child":[{"type":"Image","props":{"visible":false,"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":0}}]},{"type":"HSlider","props":{"y":550,"var":"sli_gas","skin":"img/main/BackProgressBar.png","sizeGrid":"0,15,0,15","right":30,"min":10,"max":200,"left":30,"height":50}},{"type":"Label","props":{"y":500,"text":"矿工费用(GWEI)","left":30,"height":40,"fontSize":28,"color":"#868686"}},{"type":"Label","props":{"y":610,"var":"lab_slow","text":"慢","left":30,"height":30,"fontSize":20,"color":"#868686"}},{"type":"Label","props":{"y":610,"var":"lab_quick","text":"快","right":30,"height":30,"fontSize":20,"color":"#868686"}},{"type":"Label","props":{"y":680,"text":"最大交易手续费","left":30,"height":30,"fontSize":20,"color":"#8E979F"}},{"type":"TextInput","props":{"y":680,"width":154,"var":"lab_max_gas","valign":"top","text":"0.000021 ETH","right":30,"height":30,"fontSize":20,"editable":false,"color":"#8E979F","align":"right"}},{"type":"TextInput","props":{"y":710,"width":248,"var":"lab_max_gas_usd","valign":"middle","text":"- ¥ ","right":30,"height":30,"fontSize":20,"editable":false,"color":"#8E979F","align":"right"}},{"type":"Label","props":{"y":780,"text":"总费用","left":30,"height":30,"fontSize":20,"color":"#8E979F"}},{"type":"TextInput","props":{"y":780,"width":194,"var":"lab_max_total","valign":"top","text":"1.000021 ETH","right":30,"height":30,"fontSize":20,"editable":false,"color":"#8E979F","align":"right"}},{"type":"TextInput","props":{"y":810,"width":245,"var":"lab_max_total_usd","valign":"middle","text":"- ¥","right":30,"height":30,"fontSize":20,"editable":false,"color":"#8E979F","align":"right"}},{"type":"Label","props":{"y":48,"x":393,"valign":"middle","text":"转账","strokeColor":"#f9f9f9","skin":"template/Navigator/label.png","height":44,"fontSize":32,"color":"#163853","align":"left"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.WalletSendSubmitUI.uiView);
        }
    }
}

module ui {
    export class WalletTransferUI extends View {
		public lab_coin_total:Laya.Label;
		public lab_coin_name:Laya.Label;
		public btn_goback:Laya.Button;
		public list:Laya.List;
		public img:Laya.Image;
		public lab_deal_name:Laya.Label;
		public lab_addr:Laya.Label;
		public lab_amount:Laya.Label;
		public btn_send:Laya.Button;
		public btn_receive:Laya.Button;
		public lab_nodata:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"right":0,"left":0,"height":1334,"bottom":0},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"height":224},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":0,"height":0,"fillColor":"#598ADA"}},{"type":"Label","props":{"y":140,"x":330,"valign":"middle","text":"总资产(¥)","fontSize":22,"color":"#8E979F","centerX":1,"align":"center"}},{"type":"Label","props":{"y":100,"x":358,"var":"lab_coin_total","valign":"middle","text":"≈ 0","height":30,"fontSize":24,"color":"#598ADA","centerX":0,"align":"center"}},{"type":"Label","props":{"y":38,"x":343,"var":"lab_coin_name","valign":"middle","text":"ETH","strokeColor":"#f9f9f9","skin":"template/Navigator/label.png","height":44,"fontSize":32,"color":"#163853","centerX":0,"align":"center"}},{"type":"Button","props":{"y":30,"x":30,"width":65,"var":"btn_goback","stateNum":1,"skin":"img/main/back@2x.png","labelSize":22,"labelColors":"#057AFB,#057AFB,#7EB9FB","height":65}}]},{"type":"List","props":{"var":"list","top":224,"right":0,"repeatY":8,"repeatX":1,"left":0,"bottom":88},"child":[{"type":"Box","props":{"right":0,"name":"render","left":0,"height":120},"child":[{"type":"Image","props":{"y":0,"x":0,"top":0,"skin":"img/main/white.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":32,"x":30,"width":56,"var":"img","skin":"img/main/transfer_in.png","name":"img","height":56,"centerY":0}},{"type":"Label","props":{"y":0,"x":100,"width":400,"var":"lab_deal_name","valign":"bottom","text":"获取数据中","skin":"template/List/label.png","name":"lab_deal_name","height":60,"fontSize":24,"color":"#163853","align":"left"}},{"type":"Label","props":{"y":60,"x":100,"width":400,"var":"lab_addr","valign":"middle","text":"获取数据中","skin":"template/List/label.png","name":"lab_addr","height":60,"fontSize":20,"color":"#8E979F","align":"left"}},{"type":"Label","props":{"y":35,"x":520,"var":"lab_amount","valign":"middle","text":"0","skin":"template/List/label.png","right":30,"name":"lab_amount","height":50,"fontSize":28,"color":"#FF516F","centerY":0,"align":"right"}},{"type":"Image","props":{"y":119,"x":0,"skin":"img/main/itemSepar.png","right":0,"left":0,"bottom":0}}]}]},{"type":"Button","props":{"y":1246,"x":0,"width":375,"var":"btn_send","stateNum":3,"skin":"img/main/img_blue1.png","left":0,"labelSize":32,"labelColors":"#ffffff","labelAlign":"center","label":"转账","height":88,"bottom":0}},{"type":"Button","props":{"y":1246,"x":374,"var":"btn_receive","stateNum":1,"skin":"img/main/img_blue2.png","right":0,"left":374,"labelSize":32,"labelColors":"#ffffff","labelAlign":"center","label":"收款","height":88,"bottom":0}},{"type":"Label","props":{"y":10,"x":10,"visible":false,"var":"lab_nodata","valign":"middle","text":"暂无记录","height":120,"fontSize":42,"color":"#163853","centerY":0,"centerX":0,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.WalletTransferUI.uiView);

        }

    }
}
