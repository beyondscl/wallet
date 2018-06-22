var laya;
(function (laya) {
    var Stage = Laya.Stage;
    var Button = Laya.Button;
    var Dialog = Laya.Dialog;
    var Image = Laya.Image;
    var Handler = Laya.Handler;
    var UI_Dialog = /** @class */ (function () {
        function UI_Dialog() {
            // 不支持WebGL时自动切换至Canvas
            // Laya.init(800, 600, WebGL);    
            this.DIALOG_WIDTH = 220;
            this.DIALOG_HEIGHT = 275;
            this.CLOSE_BTN_WIDTH = 43;
            this.CLOSE_BTN_PADDING = 5;
            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
            Laya.stage.bgColor = "#232628";
            this.assets = ["img/dialog_bg.png", "img/dialog_banner.png"];
            Laya.loader.load(this.assets, Handler.create(this, this.onSkinLoadComplete));
        }
        UI_Dialog.prototype.onSkinLoadComplete = function () {
            var dialog = new Dialog();
            var bg = new Image(this.assets[0]);
            dialog.addChild(bg);
            var button = new Button(this.assets[1]);
            button.name = Dialog.CLOSE;
            button.pos(this.DIALOG_WIDTH - this.CLOSE_BTN_WIDTH - this.CLOSE_BTN_PADDING, this.CLOSE_BTN_PADDING);
            dialog.addChild(button);
            dialog.dragArea = "0,0," + this.DIALOG_WIDTH + "," + this.DIALOG_HEIGHT;
            dialog.show();
        };
        return UI_Dialog;
    }());
    laya.UI_Dialog = UI_Dialog;
})(laya || (laya = {}));
//# sourceMappingURL=UI_Dialog.js.map