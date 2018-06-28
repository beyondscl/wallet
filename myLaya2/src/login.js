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
var login = /** @class */ (function (_super) {
    __extends(login, _super);

    function login() {
        var _this = _super.call(this) || this;
        _this.onLoad();
        return _this;
    }

    login.prototype.onLoad = function () {
        this.comp = new ui.LoginUI();
        Laya.stage.addChild(this.comp);
        Laya.stage.bgColor = 'white';
        // Laya.loader.load("fzss.ttf",Handler.create(this,this.initFont),null,Loader.BUFFER);
        this.initFont();
        this.initEvent();
    };
    login.prototype.initFont = function () {
        this.comp.text_phoneNum.font = '宋体';
        this.comp.text_phoneNum.focus = true;
        this.comp.text_phoneNum.maxChars = 11;
    };
    login.prototype.initEvent = function () {
        this.comp.text_phoneNum.on(Laya.Event.KEY_UP, this, this.checkInput);
    };
    login.prototype.checkInput = function () {
        var phoneLength = this.comp.text_phoneNum.text.length;
        if (phoneLength > 11) {
            //format string
            this.comp.text_phoneNum.text = this.comp.text_phoneNum.text.substr(0, 11);
        }
    };
    return login;
}(base));
//# sourceMappingURL=login.js.map