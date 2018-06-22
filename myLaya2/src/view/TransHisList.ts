/**Created by the LayaAirIDE*/
module view{
	import List = Laya.List;
	import Handler = Laya.Handler;
	export class TransHisList extends ui.TransHisListUI{
		private comp:ui.TransHisListUI;
		private list:List = new List();
		private parentUI;
		constructor(){
			super();
			this.init();
			this.initEvent();
		}
		private init(){
			this.comp = new ui.TransHisListUI();
			this.comp.addChild(this.list);
			Laya.stage.addChild(this.comp);
			Laya.stage.bgColor = 'white';
		}
		private initEvent(){
            this.comp.btn_goback.on(Laya.Event.CLICK,this,this.goBack);
		}
		private goBack(){
			Laya.stage.removeChild(this.comp);
            this.parentUI.visible = true;
		}
 		public setData(data:Array<mod.dealtemMod>,parent:any){ 
			this.parentUI = parent;
            this.setListUp(data);
        }
        //init deal history list
		private setListUp(data:Array<mod.dealtemMod>): void {
            this.list.name = 'item0';
            this.list.itemRender = dealItemUI;
            this.list.repeatX = 1;
            this.list.repeatY = data.length>100?100:data.length;
            this.list.x = 0;
			this.list.bottom = 40;
			this.list.top = 60;
            // 使用但隐藏滚动条
            this.list.vScrollBarSkin = "";
            this.list.selectEnable = true;
            this.list.selectHandler = new Handler(this, this.onSelect,null,false);
            this.list.renderHandler = new Handler(this, this.updateItem,null,false);
			this.list.array = data;
        }
        private updateItem(cell: dealItemUI, index: number): void {
            cell.init(cell.dataSource);
        }
        private onSelect(index: number): void {
            this.comp.visible = false;
            new view.TransDetail().initData(this.list.array[index],this.comp);
        }
	}
}