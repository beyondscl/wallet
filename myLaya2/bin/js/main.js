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
var main = /** @class */ (function (_super) {
    __extends(main, _super);

    //cons
    function main() {
        var _this = _super.call(this) || this;
        _this.onload();
        return _this;
    }

    //functions
    main.prototype.onload = function () {
        this.comp = new ui.MainUI();
        Laya.stage.addChild(this.comp);
        this.comp.bar_btns.selectHandler = new Laya.Handler(this, this.onselect);
    };
    main.prototype.onselect = function (index) {
        if (index == 3) {
            Laya.stage.removeChild(this.comp);
            new login();
            return;
        }
        this.comp.main_contents.selectedIndex = index;
    };
    return main;
}(base));
//# sourceMappingURL=main.js.map