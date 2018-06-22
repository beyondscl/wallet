// import Image = Laya.Image;
// class WalItemUI extends ui.items.WalItemUI{
//         public static WID: number = 300;
//         public static HEI: number = 50;
//         private img  = new Image();
// 		private lab_name: Label = new Label();
// 		private lab_total: Label = new Label();
// 		private lab_type: Label = new Label();
// 		constructor(){
//             super();
// 			this.size(WalItemUI.WID, WalItemUI.HEI);
// 			this.addChild(this.img);
// 			this.addChild(this.lab_name);
// 			this.addChild(this.lab_total);
// 			this.addChild(this.lab_type);
//         }
//         public init(walItem:walItem): void {
// 			this.img.skin = walItem.itemImgSrc;
// 			this.img.width = 30;
// 			this.img.height = 30;
//             this.lab_name.text = walItem.itemName;
// 			this.lab_total.text = walItem.itemTotal;
// 			this.lab_type.text = "≈¥" + walItem.itemMonType;
//         }
// }
//# sourceMappingURL=WalItemUI.js.map