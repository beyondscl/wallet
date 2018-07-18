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
    var info;
    (function (info) {
        var SelectWallet = /** @class */ (function (_super) {
            __extends(SelectWallet, _super);
            function SelectWallet() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }
            SelectWallet.prototype.setData = function (data, selctAddr) {
                this.comp.list_wallet.array = data;
                this.comp.list_wallet.vScrollBarSkin = "";
                this.comp.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
                this.comp.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
                this.selectedAddr = selctAddr;
            };
            SelectWallet.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            SelectWallet.prototype.init = function () {
                this.comp = new ui.info.SelectWalletUI();
                Laya.stage.addChild(this.comp);
            };
            SelectWallet.prototype.initEvent = function () {
                this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            };
            SelectWallet.prototype.onListRender = function (cell, index) {
                var data = this.comp.list_wallet.array[index];
                var wImg = cell.getChildByName('img_wallet');
                wImg.skin = data.wSkin;
                var wName = cell.getChildByName('lab_wName');
                wName.text = data.wName;
                var wAddr = cell.getChildByName('lab_wAddr');
                wAddr.text = util.getAddr(data.wAddr);
                var radio = cell.getChildByName('radio');
                if (this.selectedAddr && this.selectedAddr == data.wAddr) {
                    radio.selected = true;
                }
            };
            SelectWallet.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.comp.removeSelf();
                    this.parentUI.comp.visible = true;
                    return;
                }
            };
            SelectWallet.prototype.onSelect = function (index) {
                var childs = this.comp.list_wallet.cells;
                for (var i = 0; i < childs.length; i++) {
                    var radio = childs[i].getChildByName('radio');
                    if (i != index) {
                        radio.selected = false;
                    }
                    else {
                        radio.selected = true;
                        var wName = childs[i].getChildByName('lab_wName');
                        this.parentUI.setSelectedWaddr(wName.text);
                        this.comp.removeSelf();
                        this.parentUI.comp.visible = true;
                    }
                }
            };
            SelectWallet.prototype.getSelectedItem = function () {
                var childs = this.comp.list_wallet.cells;
                for (var i = 0; i < childs.length; i++) {
                    var radio = childs[i].getChildByName('radio');
                    if (radio.selected) {
                        return childs[i].getChildByName('lab_wName').text;
                    }
                }
                return null;
            };
            return SelectWallet;
        }(ui.info.SelectWalletUI));
        info.SelectWallet = SelectWallet;
    })(info = view.info || (view.info = {}));
})(view || (view = {}));
//# sourceMappingURL=SelectWallet.js.map