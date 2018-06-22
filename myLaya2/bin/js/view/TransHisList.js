var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var List = Laya.List;
    var Handler = Laya.Handler;
    var TransHisList = /** @class */ (function (_super) {
        __extends(TransHisList, _super);
        function TransHisList() {
            var _this = _super.call(this) || this;
            _this.list = new List();
            _this.init();
            _this.initEvent();
            return _this;
        }
        TransHisList.prototype.init = function () {
            this.comp = new ui.TransHisListUI();
            this.comp.addChild(this.list);
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
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
            this.list.name = 'item0';
            this.list.itemRender = dealItemUI;
            this.list.repeatX = 1;
            this.list.repeatY = data.length > 100 ? 100 : data.length;
            this.list.x = 0;
            this.list.bottom = 40;
            this.list.top = 60;
            // 使用但隐藏滚动条
            this.list.vScrollBarSkin = "";
            this.list.selectEnable = true;
            this.list.selectHandler = new Handler(this, this.onSelect, null, false);
            this.list.renderHandler = new Handler(this, this.updateItem, null, false);
            this.list.array = data;
        };
        TransHisList.prototype.updateItem = function (cell, index) {
            cell.init(cell.dataSource);
        };
        TransHisList.prototype.onSelect = function (index) {
            this.comp.visible = false;
            new view.TransDetail().initData(this.list.array[index], this.comp);
        };
        return TransHisList;
    }(ui.TransHisListUI));
    view.TransHisList = TransHisList;
})(view || (view = {}));
//# sourceMappingURL=TransHisList.js.map