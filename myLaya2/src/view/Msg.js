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
    var Msg = /** @class */ (function (_super) {
        __extends(Msg, _super);
        function Msg() {
            return _super.call(this) || this;
        }
        Msg.popMsg = function (msg) {
            var msgDialog = new Laya.Dialog();
            msgDialog.width = 122;
            msgDialog.height = 220;
            msgDialog.dragArea = "0,0," + msgDialog.width + "," + msgDialog.height;
            var bg = new Laya.Image("img/dialog_bg.png");
            bg.centerX = 0;
            bg.centerY = 0 - 30;
            msgDialog.addChild(bg);
            var text_msg = new Laya.TextInput(msg);
            text_msg.width = bg.width;
            text_msg.height = bg.height - 30;
            text_msg.x = bg.x;
            text_msg.y = bg.y;
            text_msg.wordWrap = true;
            text_msg.editable = false;
            text_msg.align = 'left';
            text_msg.valign = 'middle';
            text_msg.mouseEnabled = false;
            msgDialog.addChild(text_msg);
            var button = new Laya.Button("img/dialog_banner.png");
            button.label = config.msg.submit;
            button.name = Dialog.CLOSE;
            button.width = bg.width;
            button.height = 30;
            button.x = bg.x;
            button.y = bg.y + bg.height - button.height;
            msgDialog.addChild(button);
            msgDialog.popup();
        };
        return Msg;
    }(ui.MsgUI));
    view.Msg = Msg;
})(view || (view = {}));
//# sourceMappingURL=Msg.js.map