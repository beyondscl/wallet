var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var Handler = Laya.Handler;
    var TransHisList = /** @class */ (function (_super) {
        __extends(TransHisList, _super);

        function TransHisList() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.initEvent();
            return _this;
        }

        TransHisList.prototype.init = function () {
            this.comp = new ui.TransHisListUI();
            Laya.stage.addChild(this.comp);
        };
        TransHisList.prototype.initEvent = function () {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
        };
        TransHisList.prototype.goBack = function () {
            Laya.stage.removeChild(this.comp);
            this.parentUI.visible = true;
        };
        TransHisList.prototype.setData = function (data, parent) {
            this.parentUI = parent;
            this.setListUp(data);
        };
        //init deal history list
        TransHisList.prototype.setListUp = function (data) {
            this.comp.list.repeatY = data.length;
            this.comp.list.vScrollBarSkin = "";
            this.comp.list.selectHandler = new Handler(this, this.onSelect);
            this.comp.list.renderHandler = new Handler(this, this.onListRender);
            this.comp.list.array = data;
        };
        TransHisList.prototype.onListRender = function (cell, index) {
            var data = this.comp.list.array[index];
            var cImg = cell.getChildByName('img');
            cImg.skin = data.getDealImgSrc();
            var cName = cell.getChildByName('lab_deal_name');
            cName.text = data.getDealChName();
            var addr = cell.getChildByName('lab_addr');
            var trans_type1 = data.dealType.toUpperCase() == config.msg.deal_transfer_in ? 'From' : 'To'; //from | to
            addr.text = trans_type1 + ": " + util.getAddr(data.getDealAddr());
            var amount = cell.getChildByName('lab_amount');
            var trans_type = data.dealType.toUpperCase() == config.msg.deal_transfer_in ? '+' : '-'; //+ | -
            amount.text = trans_type + data.dealAmount + " " + data.dealCoinType.toUpperCase();
            amount.color = data.dealType.toUpperCase() == config.msg.deal_transfer_out ? 'red' : 'green';
        };
        // private updateItem(cell: dealItemUI, index: number): void {
        //     cell.init(cell.dataSource);
        // }
        TransHisList.prototype.onSelect = function (index) {
            this.comp.visible = false;
            new view.TransDetail().initData(this.comp.list.array[index], this.comp);
        };
        return TransHisList;
    }(ui.TransHisListUI));
    view.TransHisList = TransHisList;
})(view || (view = {}));
//# sourceMappingURL=TransHisList.js.map