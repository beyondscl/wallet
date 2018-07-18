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
var guide = /** @class */ (function (_super) {
    __extends(guide, _super);
    function guide() {
        var _this = _super.call(this) || this;
        _this.guidesImg = ["guide/timg.jpg", "guide/timg1.jpg", "guide/timg2.jpg"];
        _this.index = 0;
        _this.guideImg = new Laya.Sprite();
        _this.guideImg.loadImage(_this.guidesImg[_this.index++], 0, 0, Laya.stage.width, Laya.stage.height);
        Laya.stage.addChild(_this.guideImg);
        _this.guideImg.on('click', _this, _this.touchEvent);
        return _this;
    }
    ;
    guide.prototype.onLoaded = function () {
        this.guideUI = new ui.GuideUI();
        Laya.stage.addChild(this.guideUI);
    };
    //functions
    guide.prototype.touchEvent = function () {
        if (this.index >= this.guidesImg.length) {
            Laya.stage.removeChild(this.guideImg);
            Laya.stage.removeChild(this.guideUI);
            new main();
            return;
        }
        this.guideImg.loadImage(this.guidesImg[this.index++], 0, 0, Laya.stage.width, Laya.stage.height);
    };
    return guide;
}(base));
//# sourceMappingURL=guide.js.map