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
    var MainA = /** @class */ (function (_super) {
        __extends(MainA, _super);
        function MainA() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        MainA.prototype.init = function () {
            this.comp = new ui.MainAUI();
            Laya.stage.bgColor = 'white';
            Laya.stage.addChild(this.comp);
            // 设置数据项为对应图片的路径
            var data = [];
            for (var i = 0; i < 10; i++) {
                var walItemT = new walItemMod();
                walItemT.setItem("img/eth.jpg", "ETH", "0", "0");
                data.push(walItemT);
            }
            this.setup(data);
        };
        MainA.prototype.setup = function (data) {
            var list = new List();
            list.itemRender = walItemUI;
            list.repeatX = 1;
            list.repeatY = 8;
            list.x = 0;
            list.y = 150; //给予第二个rect
            // 使用但隐藏滚动条
            list.vScrollBarSkin = "";
            list.selectEnable = true;
            list.selectHandler = new Handler(this, this.onSelect);
            list.renderHandler = new Handler(this, this.updateItem);
            Laya.stage.addChild(list);
            list.array = data;
        };
        MainA.prototype.updateItem = function (cell, index) {
            cell.init(cell.dataSource);
        };
        MainA.prototype.onSelect = function (index) {
            console.log("当前选择的索引：" + index);
        };
        return MainA;
    }(ui.MainAUI));
    view.MainA = MainA;
})(view || (view = {}));
//# sourceMappingURL=MainA.js.map