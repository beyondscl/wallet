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
    var info;
    (function (info) {
        var Candy = /** @class */ (function (_super) {
            __extends(Candy, _super);

            function Candy() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }

            Candy.prototype.init = function () {
                this.comp = new ui.info.CandyUI();
                Laya.stage.addChild(this.comp);
            };
            Candy.prototype.initEvent = function () {
                this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            };
            Candy.prototype.setData = function (data) {
                this.comp.list_wallet.array = data;
                this.comp.list_wallet.x = 1;
                this.comp.list_wallet.y = data.length;
                this.comp.list_wallet.vScrollBarSkin = "";
                this.comp.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
                this.comp.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
            };
            Candy.prototype.onListRender = function (cell, index) {
                var data = this.comp.list_wallet.array[index];
                var wImg = cell.getChildByName('img_wallet');
                wImg.skin = data.wSkin;
                var wName = cell.getChildByName('lab_wName');
                wName.text = data.wName;
                var wAddr = cell.getChildByName('lab_wAddr');
                wAddr.text = util.getAddr(data.wAddr);
                var radio = cell.getChildByName('radio');
            };
            Candy.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.comp.removeSelf();
                    this.parentUI.visible = true;
                }
            };
            Candy.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            Candy.prototype.onSelect = function (index) {
                var childs = this.comp.list_wallet.cells;
                for (var i = 0; i < childs.length; i++) {
                    var radio = childs[i].getChildByName('radio');
                    if (i != index) {
                        radio.selected = false;
                    }
                    else {
                        radio.selected = true;
                    }
                }
            };
            Candy.prototype.getSelectedItem = function () {
                var childs = this.comp.list_wallet.cells;
                for (var i = 0; i < childs.length; i++) {
                    var radio = childs[i].getChildByName('radio');
                    if (radio.selected) {
                        return childs[i].getChildByName('lab_wName').text;
                    }
                }
            };
            return Candy;
        }(ui.info.CandyUI));
        info.Candy = Candy;
    })(info = view.info || (view.info = {}));
})(view || (view = {}));
//# sourceMappingURL=Candy.js.map