/**Created by the LayaAirIDE*/
module view {
    import Handler = Laya.Handler;

    export class TransHisList extends ui.TransHisListUI {
        private comp: ui.TransHisListUI;
        private parentUI;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(data: Array<mod.dealtemMod>, parent: any) {
            this.parentUI = parent;
            this.setListUp(data);
        }

        private init() {
            this.comp = new ui.TransHisListUI();
            Laya.stage.addChild(this.comp);
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
        }

        private goBack() {
            Laya.stage.removeChild(this.comp);
            this.parentUI.visible = true;
        }

        //init deal history list
        private setListUp(data: Array<mod.dealtemMod>): void {
            this.comp.list.array = data;
            this.comp.list.vScrollBarSkin = "";
            // this.comp.list.selectHandler = new Handler(this, this.onSelect);
            this.comp.list.renderHandler = new Handler(this, this.onListRender);
            
        }

        private onListRender(cell: Box, index: number) {
            // cell.on(Laya.Event.CLICK, this, this.onSelect, [index]);

            var data: mod.dealtemMod = this.comp.list.array[index];

            let cImg = cell.getChildByName('img') as Laya.Image;
            cImg.skin = data.getDealImgSrc();

            let cName = cell.getChildByName('lab_deal_name') as Label;
            cName.text = data.getDealChName();

            let addr = cell.getChildByName('lab_addr') as Label;
            let trans_type1 = data.dealType.toUpperCase() == config.msg.deal_transfer_in ? 'From' : 'To';//from | to
            addr.text = trans_type1 + ": " + util.getAddr(data.getDealAddr());

            let amount = cell.getChildByName('lab_amount') as Label;
            let trans_type = data.dealType.toUpperCase() == config.msg.deal_transfer_in ? '+' : '-';//+ | -
            amount.text = trans_type + data.dealAmount + " " + data.dealCoinType.toUpperCase();
            amount.color = data.dealType.toUpperCase() == config.msg.deal_transfer_out ? 'red' : 'green';
        }

        // private updateItem(cell: dealItemUI, index: number): void {
        //     cell.init(cell.dataSource);
        // }
        private onSelect(index: number): void {
            this.comp.visible = false;
            new view.TransDetail().initData(this.comp.list.array[index], this.comp);
        }
    }
}