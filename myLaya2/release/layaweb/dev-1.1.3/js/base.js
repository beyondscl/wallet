var base = /** @class */ (function () {
    function base() {
        this.screenModes = ["noscale", "exactfit", "showall", "noborder", "full", "fixedwidth", "fixedheight"];
    }
    //初始舞台
    base.prototype.init = function () {
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        //设置适配模式
        Laya.stage.scaleMode = "exactfit";
        //设置横竖屏
        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        //设置水平对齐
        Laya.stage.alignH = "center";
        //设置垂直对齐
        Laya.stage.alignV = "middle";
    };
    return base;
}());
//# sourceMappingURL=base.js.map