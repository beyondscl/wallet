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
    var set;
    (function (set) {
        var WalletImport = /** @class */ (function (_super) {
            __extends(WalletImport, _super);

            function WalletImport() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }

            WalletImport.prototype.init = function () {
                this.comp = new ui.set.WalletImportUI();
                Laya.stage.addChild(this.comp);
                Laya.stage.bgColor = 'white';
            };
            WalletImport.prototype.initEvent = function () {
                this.comp.tab.selectHandler = new Laya.Handler(this, this.onSelect);
                this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
                this.comp.btn_sao.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            };
            WalletImport.prototype.onSelect = function (index) {
                this.comp.stack.selectedIndex = index;
            };
            WalletImport.prototype.setData = function (key) {
            };
            WalletImport.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.comp.removeSelf();
                    this.parentUI.visible = true;
                }
            };
            WalletImport.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            return WalletImport;
        }(ui.set.WalletImportUI));
        set.WalletImport = WalletImport;
    })(set = view.set || (view.set = {}));
})(view || (view = {}));
//# sourceMappingURL=WalletImport.js.map