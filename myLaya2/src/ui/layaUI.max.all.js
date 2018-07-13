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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var alert;
    (function (alert) {
        var confirmUI = /** @class */ (function (_super) {
            __extends(confirmUI, _super);
            function confirmUI() {
                return _super.call(this) || this;
            }
            confirmUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.alert.confirmUI.uiView);
            };
            confirmUI.uiView = { "type": "Dialog", "props": { "width": 690, "height": 648 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "img/main/white_radius.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Label", "props": { "y": 182, "var": "title", "text": "备份成功", "height": 56, "fontSize": 40, "color": "#163853", "centerX": 0, "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 254, "visible": false, "text": "是否删除助记词", "height": 56, "fontSize": 32, "color": "#163853", "centerX": 0, "bold": false, "align": "center" } }, { "type": "Button", "props": { "width": 345, "var": "btn_cancel", "stateNum": 1, "skin": "img/main/img_blue1.png", "left": 0, "labelSize": 32, "label": "不", "height": 80, "bottom": 0 } }, { "type": "Button", "props": { "width": 345, "var": "btn_sub", "stateNum": 1, "skin": "img/main/img_blue2.png", "right": 0, "labelSize": 32, "label": "是", "height": 80, "bottom": 0 } }, { "type": "TextArea", "props": { "y": 254, "width": 594, "var": "sub_title", "text": "你备份的助记词顺序验证正确，是否从WWEC Wallet中移除该助记词？", "height": 150, "fontSize": 32, "editable": false, "centerX": 0, "align": "left" } }] }] };
            return confirmUI;
        }(Dialog));
        alert.confirmUI = confirmUI;
    })(alert = ui.alert || (ui.alert = {}));
})(ui || (ui = {}));
(function (ui) {
    var alert;
    (function (alert) {
        var EnterPassUI = /** @class */ (function (_super) {
            __extends(EnterPassUI, _super);
            function EnterPassUI() {
                return _super.call(this) || this;
            }
            EnterPassUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.alert.EnterPassUI.uiView);
            };
            EnterPassUI.uiView = { "type": "Dialog", "props": { "width": 690, "layoutEnabled": true, "height": 500 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "layoutEnabled": true, "bottom": 0 }, "child": [{ "type": "Image", "props": { "width": 690, "top": 0, "skin": "img/main/white_radius.png", "right": 0, "left": 0, "layoutEnabled": true, "height": 628, "bottom": 0 } }, { "type": "Label", "props": { "valign": "middle", "top": 50, "text": "请输入钱包密码", "right": 0, "left": 0, "height": 44, "fontSize": 32, "color": "#163853", "align": "center" } }, { "type": "TextInput", "props": { "width": 560, "var": "text_pass", "type": "password", "promptColor": "#B0BBC4", "prompt": "请输入密码", "layoutEnabled": true, "height": 88, "fontSize": 32, "color": "#B0BBC4", "centerY": 0, "centerX": 0, "borderColor": "#c0c0c0", "bgColor": "#ffffff", "align": "left" } }, { "type": "Button", "props": { "var": "btn_submit", "stateNum": 2, "skin": "img/main/img_blue2.png", "right": 0, "left": 0, "layoutEnabled": true, "labelSize": 32, "labelColors": "#ffffff", "label": "确定", "height": 88, "bottom": 0 } }, { "type": "Label", "props": { "visible": false, "var": "addr", "valign": "middle", "top": 120, "text": "To:0x5da6284904kskgkfe42lkdkl2940020r jfkell", "right": 0, "left": 0, "height": 44, "fontSize": 32, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "visible": false, "var": "amount", "valign": "middle", "top": 252, "text": "0.0098 ETH", "right": 0, "left": 1, "height": 44, "fontSize": 32, "color": "#598ADA", "align": "center" } }, { "type": "Label", "props": { "y": 300, "width": 560, "visible": false, "var": "warn", "valign": "middle", "text": "密码不正确，请重新输入", "height": 40, "fontSize": 20, "color": "#ff0400", "centerX": 0, "align": "right" } }] }] };
            return EnterPassUI;
        }(Dialog));
        alert.EnterPassUI = EnterPassUI;
    })(alert = ui.alert || (ui.alert = {}));
})(ui || (ui = {}));
(function (ui) {
    var alert;
    (function (alert) {
        var ExportPriKeyUI = /** @class */ (function (_super) {
            __extends(ExportPriKeyUI, _super);
            function ExportPriKeyUI() {
                return _super.call(this) || this;
            }
            ExportPriKeyUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.alert.ExportPriKeyUI.uiView);
            };
            ExportPriKeyUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 200, "height": 120 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "layoutEnabled": true, "bottom": 0 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "template/Warn/alert_dialog.png", "right": 0, "left": 0, "layoutEnabled": true, "bottom": 0 } }, { "type": "TextArea", "props": { "wordWrap": true, "var": "text_pKey", "type": "text", "top": 10, "right": 10, "padding": "10", "left": 10, "font": "SimHei", "editable": false, "color": "#000000", "bottom": 40, "bgColor": "#bbbbbb" } }, { "type": "Button", "props": { "var": "btn_copy", "skin": "img/blue.png", "right": 10, "left": 10, "label": "复制", "height": 30, "bottom": 5 } }] }] };
            return ExportPriKeyUI;
        }(Dialog));
        alert.ExportPriKeyUI = ExportPriKeyUI;
    })(alert = ui.alert || (ui.alert = {}));
})(ui || (ui = {}));
(function (ui) {
    var alert;
    (function (alert) {
        var IframeUI = /** @class */ (function (_super) {
            __extends(IframeUI, _super);
            function IframeUI() {
                return _super.call(this) || this;
            }
            IframeUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.alert.IframeUI.uiView);
            };
            IframeUI.uiView = { "type": "Dialog", "props": { "width": 375, "height": 667 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "img/main/white.jpg", "right": 0, "left": 0, "bottom": 0 } }] };
            return IframeUI;
        }(Dialog));
        alert.IframeUI = IframeUI;
    })(alert = ui.alert || (ui.alert = {}));
})(ui || (ui = {}));
(function (ui) {
    var alert;
    (function (alert) {
        var waitingUI = /** @class */ (function (_super) {
            __extends(waitingUI, _super);
            function waitingUI() {
                return _super.call(this) || this;
            }
            waitingUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.alert.waitingUI.uiView);
            };
            waitingUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "width": 692, "skin": "img/main/white_radius.png", "height": 628, "centerY": 0, "centerX": 0, "alpha": 0.6 } }, { "type": "Image", "props": { "y": 667, "x": 375, "width": 192, "var": "img_wait", "skin": "img/main/jiazai@3x.png", "height": 192, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 } }, { "type": "Label", "props": { "y": 788, "var": "wait_msg", "valign": "middle", "text": "正在加载", "right": 0, "left": 0, "height": 50, "fontSize": 32, "color": "#163853", "alpha": 1, "align": "center" } }] }] };
            return waitingUI;
        }(Dialog));
        alert.waitingUI = waitingUI;
    })(alert = ui.alert || (ui.alert = {}));
})(ui || (ui = {}));
(function (ui) {
    var alert;
    (function (alert) {
        var WarnUI = /** @class */ (function (_super) {
            __extends(WarnUI, _super);
            function WarnUI() {
                return _super.call(this) || this;
            }
            WarnUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.alert.WarnUI.uiView);
            };
            WarnUI.uiView = { "type": "Dialog", "props": { "width": 690, "height": 648 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "img/main/white_radius.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Label", "props": { "y": 182, "var": "warn_title", "text": "备份失败", "height": 56, "fontSize": 40, "color": "#163853", "centerX": 0, "bold": true } }, { "type": "Label", "props": { "y": 254, "var": "warn_msg", "text": "请检查你的助记词", "height": 56, "fontSize": 32, "color": "#163853", "centerX": 0, "bold": false } }, { "type": "Button", "props": { "y": 458, "x": 141, "width": 408, "var": "btn_know", "stateNum": 1, "skin": "img/main/anliu@2x.png", "labelSize": 32, "label": "我知道了", "height": 80, "centerX": 0 } }] }] };
            return WarnUI;
        }(Dialog));
        alert.WarnUI = WarnUI;
    })(alert = ui.alert || (ui.alert = {}));
})(ui || (ui = {}));
(function (ui) {
    var alert;
    (function (alert) {
        var WarnZjcUI = /** @class */ (function (_super) {
            __extends(WarnZjcUI, _super);
            function WarnZjcUI() {
                return _super.call(this) || this;
            }
            WarnZjcUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.alert.WarnZjcUI.uiView);
            };
            WarnZjcUI.uiView = { "type": "Dialog", "props": { "width": 690, "height": 648 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "img/main/white.jpg", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 44, "width": 112, "skin": "img/main/camera@2x.png", "height": 112, "centerX": 0 } }, { "type": "Label", "props": { "y": 182, "text": "请勿截图", "height": 56, "fontSize": 40, "color": "#163853", "centerX": 0, "bold": true } }, { "type": "Label", "props": { "y": 278, "x": 47, "valign": "middle", "text": "下来助记词并存放在安全的地方。", "height": 44, "fontSize": 24, "color": "#687076", "align": "left" } }, { "type": "Label", "props": { "y": 232, "valign": "middle", "text": "如果有人获取你的助记词将直接获取你的资产！请抄写", "right": 50, "left": 50, "height": 44, "fontSize": 24, "color": "#687076", "align": "left" } }, { "type": "Button", "props": { "y": 458, "width": 408, "var": "btn_know", "stateNum": 1, "skin": "img/main/anliu@2x.png", "labelSize": 32, "label": "我知道了", "height": 80, "centerX": 0 } }] }] };
            return WarnZjcUI;
        }(Dialog));
        alert.WarnZjcUI = WarnZjcUI;
    })(alert = ui.alert || (ui.alert = {}));
})(ui || (ui = {}));
(function (ui) {
    var backup;
    (function (backup) {
        var BackUpConfUI = /** @class */ (function (_super) {
            __extends(BackUpConfUI, _super);
            function BackUpConfUI() {
                return _super.call(this) || this;
            }
            BackUpConfUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.backup.BackUpConfUI.uiView);
            };
            BackUpConfUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 54, "x": 20, "width": 65, "var": "btn_back", "skin": "img/main/back@2x.png", "height": 65 } }, { "type": "Label", "props": { "y": 62, "valign": "middle", "text": "备份助记词", "height": 44, "fontSize": 32, "color": "#163853", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 198, "x": 30, "valign": "middle", "text": "确认你的钱包助记词", "height": 56, "fontSize": 40, "color": "#163853", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 274, "x": 30, "valign": "middle", "text": "请按顺序点击助记词，以确认你的备份助记词", "height": 44, "fontSize": 24, "color": "#687076", "align": "left" } }, { "type": "Button", "props": { "y": 874, "width": 708, "var": "btn_conf", "stateNum": 1, "skin": "img/main/anliu@2x.png", "sizeGrid": "0,0,0,0", "labelSize": 32, "labelColors": "#ffffff", "label": "确定", "height": 80, "disabled": false, "centerX": 0 } }, { "type": "Box", "props": { "y": 604, "x": 30, "width": 688, "var": "box_label", "height": 250 }, "child": [{ "type": "Label", "props": { "y": 0, "width": 130, "valign": "middle", "text": "法法", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 146, "width": 130, "valign": "middle", "text": "法法", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 309, "width": 130, "valign": "middle", "text": "法法", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 500, "width": 130, "valign": "middle", "text": "法法", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 50, "x": 6, "width": 130, "valign": "middle", "text": "法法", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 50, "x": 161, "width": 130, "valign": "middle", "text": "法法", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 50, "x": 314, "width": 130, "valign": "middle", "text": "法法", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 50, "x": 469, "width": 130, "valign": "middle", "text": "法法", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 104, "x": 165, "valign": "middle", "text": "法法", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 104, "x": 13, "width": 100, "valign": "middle", "text": "法法", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 104, "x": 329, "width": 130, "valign": "middle", "text": "法法", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 104, "x": 515, "width": 130, "valign": "middle", "text": "法法", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }] }, { "type": "Box", "props": { "y": 348, "width": 688, "var": "box_zjc", "height": 178, "centerX": 0 }, "child": [{ "type": "Rect", "props": { "y": 0, "x": 0, "width": 690, "lineWidth": 1, "height": 180, "fillColor": "#ECECEC" } }, { "type": "Label", "props": { "width": 100, "valign": "middle", "top": 5, "left": 5, "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "x": 120, "width": 100, "valign": "middle", "top": 5, "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "x": 297, "width": 100, "valign": "middle", "top": 5, "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "x": 430, "width": 100, "valign": "middle", "top": 5, "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "width": 100, "valign": "middle", "top": 5, "right": 5, "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 57, "width": 100, "valign": "middle", "left": 5, "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 58, "width": 136, "valign": "middle", "left": 118, "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 63, "x": 284, "width": 100, "valign": "middle", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 62, "x": 424, "width": 100, "valign": "middle", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "y": 55, "x": 564, "width": 100, "valign": "middle", "height": 44, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "Label", "props": { "x": 23, "width": 100, "valign": "middle", "height": 44, "fontSize": 28, "color": "#163853", "bottom": 5, "align": "center" } }, { "type": "Label", "props": { "x": 204, "width": 100, "valign": "middle", "height": 44, "fontSize": 28, "color": "#163853", "bottom": 5, "align": "center" } }] }] };
            return BackUpConfUI;
        }(View));
        backup.BackUpConfUI = BackUpConfUI;
    })(backup = ui.backup || (ui.backup = {}));
})(ui || (ui = {}));
(function (ui) {
    var backup;
    (function (backup) {
        var BackUpZjcUI = /** @class */ (function (_super) {
            __extends(BackUpZjcUI, _super);
            function BackUpZjcUI() {
                return _super.call(this) || this;
            }
            BackUpZjcUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.backup.BackUpZjcUI.uiView);
            };
            BackUpZjcUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 54, "x": 20, "width": 65, "var": "btn_back", "skin": "img/main/back@2x.png", "height": 65 } }, { "type": "Label", "props": { "y": 62, "valign": "middle", "text": "备份助记词", "height": 44, "fontSize": 32, "color": "#163853", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 198, "x": 30, "valign": "middle", "text": "抄写下你的钱包助记词", "height": 56, "fontSize": 40, "color": "#163853", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 274, "x": 30, "valign": "middle", "text": "助记词用于恢复钱包和充值钱包密码，将它准确的抄写到纸上，", "height": 44, "fontSize": 24, "color": "#687076", "align": "left" } }, { "type": "Label", "props": { "y": 318, "x": 26, "valign": "middle", "text": " 并存放在只有你知道的安全的地方。", "height": 44, "fontSize": 24, "color": "#687076", "align": "left" } }, { "type": "Button", "props": { "y": 874, "width": 708, "var": "btn_backup", "stateNum": 1, "skin": "img/main/anliu@2x.png", "sizeGrid": "0,0,0,0", "labelSize": 32, "labelColors": "#ffffff", "label": "下一步", "height": 80, "centerX": 0 } }, { "type": "TextArea", "props": { "y": 418, "wordWrap": true, "width": 688, "var": "text_zjc", "text": "winga wingb wingcc wingd winge wingf wingg wingh wingi wingj wingk wingl", "padding": "30", "leading": 30, "height": 152, "fontSize": 28, "editable": false, "color": "#163853", "centerX": 0, "bgColor": "#ECECEC", "align": "left" } }] };
            return BackUpZjcUI;
        }(View));
        backup.BackUpZjcUI = BackUpZjcUI;
    })(backup = ui.backup || (ui.backup = {}));
})(ui || (ui = {}));
(function (ui) {
    var coin;
    (function (coin) {
        var AddCoinsUI = /** @class */ (function (_super) {
            __extends(AddCoinsUI, _super);
            function AddCoinsUI() {
                return _super.call(this) || this;
            }
            AddCoinsUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.coin.AddCoinsUI.uiView);
            };
            AddCoinsUI.uiView = { "type": "View", "props": { "width": 750, "visible": true, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Label", "props": { "y": 30, "x": 10, "valign": "middle", "text": "添加新资产", "strokeColor": "#f9f9f9", "skin": "template/Navigator/label.png", "height": 44, "fontSize": 32, "color": "#000000", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 30, "x": 30, "width": 65, "var": "btn_goback", "stateNum": 1, "skin": "img/main/back@2x.png", "labelSize": 22, "labelColors": "#057AFB,#057AFB,#7EB9FB", "height": 65 } }, { "type": "Button", "props": { "width": 60, "var": "btn_query", "top": 30, "skin": "img/main/btn_search_icon.png", "sizeGrid": "0,0,0,0", "right": 30, "height": 60, "disabled": true } }, { "type": "List", "props": { "var": "listCoin", "top": 100, "right": 0, "repeatX": 1, "name": "listCoin", "left": 0, "bottom": 0 }, "child": [{ "type": "Box", "props": { "right": 0, "name": "render", "left": 0, "height": 160 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "img/main/white.jpg", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "x": 30, "width": 78, "var": "cImg", "skin": "img/main/touxiang@2x.png", "name": "cImg", "height": 78, "centerY": 0 } }, { "type": "Label", "props": { "y": 88, "x": 150, "width": 400, "var": "cVender", "valign": "middle", "text": "cVender", "skin": "template/List/label.png", "name": "cVender", "height": 32, "fontSize": 24, "color": "#8E979F", "align": "left" } }, { "type": "Label", "props": { "y": 40, "x": 150, "width": 400, "var": "cName", "valign": "middle", "text": "cName", "skin": "template/List/label.png", "name": "cName", "height": 40, "fontSize": 32, "color": "#100E28", "align": "left" } }, { "type": "Label", "props": { "y": 128, "x": 150, "width": 400, "var": "cAddr", "valign": "middle", "text": "cAddr", "skin": "template/List/label.png", "name": "cAddr", "height": 32, "fontSize": 24, "color": "#8E979F", "align": "left" } }, { "type": "CheckBox", "props": { "var": "cCheckbox", "stateNum": 2, "skin": "img/main/checkbox_switch.png", "right": 30, "name": "cCheckbox", "centerY": 0 } }] }] }] };
            return AddCoinsUI;
        }(View));
        coin.AddCoinsUI = AddCoinsUI;
    })(coin = ui.coin || (ui.coin = {}));
})(ui || (ui = {}));
(function (ui) {
    var coin;
    (function (coin) {
        var queryCoinsUI = /** @class */ (function (_super) {
            __extends(queryCoinsUI, _super);
            function queryCoinsUI() {
                return _super.call(this) || this;
            }
            queryCoinsUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.coin.queryCoinsUI.uiView);
            };
            queryCoinsUI.uiView = { "type": "View", "props": { "width": 750, "height": 1344 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "width": 60, "top": 30, "skin": "img/main/search@2x.png", "left": 30, "height": 60 } }, { "type": "Label", "props": { "top": 30, "text": "取消", "right": 30, "height": 44, "fontSize": 32 } }, { "type": "TextInput", "props": { "var": "text_search", "top": 30, "right": 100, "promptColor": "#8E979F", "prompt": "搜索Token名称或合约地址", "left": 100, "height": 44 } }, { "type": "Image", "props": { "top": 74, "skin": "img/main/itemSepar.png", "right": 100, "left": 100 } }, { "type": "Box", "props": { "y": 350, "width": 200, "height": 230, "centerX": 0 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "img/main/wjl@2x.png", "right": 0, "left": 0, "bottom": 30 } }, { "type": "Label", "props": { "text": "暂无记录", "height": 30, "fontSize": 28, "color": "#687076", "centerX": 0, "bottom": 0 } }] }] };
            return queryCoinsUI;
        }(View));
        coin.queryCoinsUI = queryCoinsUI;
    })(coin = ui.coin || (ui.coin = {}));
})(ui || (ui = {}));
(function (ui) {
    var EnterAppUI = /** @class */ (function (_super) {
        __extends(EnterAppUI, _super);
        function EnterAppUI() {
            return _super.call(this) || this;
        }
        EnterAppUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.EnterAppUI.uiView);
        };
        EnterAppUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 750, "top": 0, "right": 0, "left": 0, "layoutEnabled": true, "height": 1334, "bottom": 0 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "top": 0, "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 230, "width": 226, "skin": "img/main/qianbaoicon@2x.png", "height": 226, "centerX": 0 } }, { "type": "Label", "props": { "y": 510, "valign": "middle", "text": "WWEC Wallet", "height": 50, "fontSize": 40, "color": "#163853", "centerX": 0, "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 584, "valign": "middle", "text": "您的数字钱包管家", "height": 56, "fontSize": 40, "color": "#163853", "centerX": 0, "bold": true, "align": "center" } }, { "type": "Button", "props": { "y": 812, "width": 690, "var": "btn_create", "stateNum": 1, "skin": "img/main/anliu@2x.png", "labelSize": 36, "labelColors": "#ffffff", "label": "创建钱包", "height": 80, "centerX": 0 } }, { "type": "Button", "props": { "y": 946, "width": 690, "var": "btn_import", "stateNum": 1, "skin": "img/main/anliu@2x.png", "labelSize": 36, "labelColors": "#ffffff", "label": "导入钱包", "height": 80, "centerX": 0 } }] }] };
        return EnterAppUI;
    }(View));
    ui.EnterAppUI = EnterAppUI;
})(ui || (ui = {}));
(function (ui) {
    var GuideUI = /** @class */ (function (_super) {
        __extends(GuideUI, _super);
        function GuideUI() {
            return _super.call(this) || this;
        }
        GuideUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GuideUI.uiView);
        };
        GuideUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Box", "props": { "var": "item0", "top": 0, "right": 0, "name": "item0", "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "img/guide/bg.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "width": 708, "top": 0, "skin": "img/guide/ydy_1.png", "left": 0, "height": 1254 } }, { "type": "Image", "props": { "y": 1025, "skin": "img/guide/ydy_1_word.png", "right": 0, "left": 0, "height": 164 } }, { "type": "Box", "props": { "y": 10, "x": 10, "right": 0, "left": 0, "height": 16, "bottom": 42 }, "child": [{ "type": "Image", "props": { "x": 306, "width": 16, "skin": "img/guide/ty16_1.png", "height": 16 } }, { "type": "Image", "props": { "x": 348, "width": 16, "skin": "img/guide/tu16.png", "height": 16 } }, { "type": "Image", "props": { "x": 388, "width": 16, "skin": "img/guide/tu16.png", "height": 16 } }, { "type": "Image", "props": { "x": 430, "width": 16, "skin": "img/guide/tu16.png", "height": 16 } }] }] }, { "type": "Box", "props": { "visible": false, "var": "item1", "top": 0, "right": 0, "name": "item1", "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "img/guide/bg.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 710, "skin": "img/guide/ydy_2.png", "height": 1314 } }, { "type": "Image", "props": { "y": 1000, "width": 749, "skin": "img/guide/ydy_2_word.png", "left": 0, "height": 164 } }, { "type": "Box", "props": { "y": 1276, "x": 0, "right": 0, "left": 0, "height": 16, "bottom": 42 }, "child": [{ "type": "Image", "props": { "x": 306, "width": 16, "skin": "img/guide/tu16.png", "height": 16 } }, { "type": "Image", "props": { "x": 348, "width": 16, "skin": "img/guide/ty16_1.png", "height": 16 } }, { "type": "Image", "props": { "x": 388, "width": 16, "skin": "img/guide/tu16.png", "height": 16 } }, { "type": "Image", "props": { "x": 430, "width": 16, "skin": "img/guide/tu16.png", "height": 16 } }] }] }, { "type": "Box", "props": { "visible": false, "var": "item2", "top": 0, "right": 0, "name": "item2", "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "img/guide/bg.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 0, "skin": "img/guide/ydy_3.png", "right": 0, "left": 0, "height": 1194 } }, { "type": "Image", "props": { "y": 1000, "skin": "img/guide/ydy_3_word.png", "right": 0, "left": 0, "height": 164 } }, { "type": "Box", "props": { "y": 1276, "x": 0, "right": 0, "left": 0, "height": 16, "bottom": 42 }, "child": [{ "type": "Image", "props": { "x": 306, "width": 16, "skin": "img/guide/tu16.png", "height": 16 } }, { "type": "Image", "props": { "x": 348, "width": 16, "skin": "img/guide/tu16.png", "height": 16 } }, { "type": "Image", "props": { "x": 388, "width": 16, "skin": "img/guide/ty16_1.png", "height": 16 } }, { "type": "Image", "props": { "x": 430, "width": 16, "skin": "img/guide/tu16.png", "height": 16 } }] }] }, { "type": "Box", "props": { "visible": false, "var": "item3", "top": 0, "right": 0, "name": "item3", "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "img/guide/bg.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 748, "skin": "img/guide/ydy_4.png", "height": 1252 } }, { "type": "Image", "props": { "y": 1000, "skin": "img/guide/ydy_4_word.png", "right": 0, "left": 0, "height": 164 } }, { "type": "Image", "props": { "width": 266, "var": "img_enter", "skin": "img/guide/ljjr.png", "height": 80, "centerX": 0, "bottom": 67 } }] }] };
        return GuideUI;
    }(View));
    ui.GuideUI = GuideUI;
})(ui || (ui = {}));
(function (ui) {
    var info;
    (function (info) {
        var aboutUI = /** @class */ (function (_super) {
            __extends(aboutUI, _super);
            function aboutUI() {
                return _super.call(this) || this;
            }
            aboutUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.info.aboutUI.uiView);
            };
            aboutUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "top": -2, "skin": "img/main/white.jpg", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 40, "x": 30, "width": 65, "var": "btn_back", "skin": "img/main/back@2x.png", "height": 65 } }, { "type": "Label", "props": { "y": 48, "x": 300, "valign": "middle", "text": "关于我们", "height": 44, "fontSize": 32, "color": "#163853", "centerX": 0, "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 186, "width": 96, "skin": "img/main/qianbaoicon@2x.png", "height": 96, "centerX": 0 } }, { "type": "Label", "props": { "y": 317, "var": "lab_version", "text": "当前版本：1.0", "height": 34, "fontSize": 24, "color": "#8E979F", "centerX": 0 } }, { "type": "TextArea", "props": { "y": 374, "width": 654, "valign": "middle", "text": "WWEC Wallet 是一款移动轻钱包App, 它旨在为普通用户提供 一款安全放心，简单好用，功能强大的数字资产钱包应用。", "leading": 8, "height": 68, "fontSize": 24, "editable": false, "color": "#8E979F", "centerX": 0, "align": "left" } }, { "type": "Box", "props": { "y": 526, "x": 56, "var": "btn_team", "right": 56, "left": 56, "height": 40 }, "child": [{ "type": "Label", "props": { "valign": "middle", "text": "团队介绍", "fontSize": 28, "color": "#163853", "align": "left" } }, { "type": "Image", "props": { "width": 32, "skin": "img/main/next@2x.png", "right": 0, "height": 32, "centerY": 0 } }] }, { "type": "Box", "props": { "y": 646, "x": 56, "var": "btn_service", "right": 56, "left": 56, "height": 40 }, "child": [{ "type": "Label", "props": { "valign": "middle", "text": "隐私条款", "fontSize": 28, "color": "#163853", "align": "left" } }, { "type": "Image", "props": { "width": 32, "skin": "img/main/next@2x.png", "right": 0, "height": 32, "centerY": 0 } }] }, { "type": "Box", "props": { "y": 766, "x": 56, "var": "btn_log", "right": 56, "left": 56, "height": 40 }, "child": [{ "type": "Label", "props": { "valign": "middle", "text": "版本日志", "fontSize": 28, "color": "#163853", "align": "left" } }, { "type": "Image", "props": { "width": 32, "skin": "img/main/next@2x.png", "right": 0, "height": 32, "centerY": 0 } }] }, { "type": "Box", "props": { "y": 888, "x": 56, "var": "btn_guide", "right": 56, "left": 56, "height": 40 }, "child": [{ "type": "Label", "props": { "valign": "middle", "text": "产品向导", "fontSize": 28, "color": "#163853", "align": "left" } }, { "type": "Image", "props": { "width": 32, "skin": "img/main/next@2x.png", "right": 0, "height": 32, "centerY": 0 } }] }, { "type": "Box", "props": { "y": 1008, "x": 56, "var": "btn_update", "right": 56, "left": 56, "height": 40 }, "child": [{ "type": "Label", "props": { "valign": "middle", "text": "检测新版", "fontSize": 28, "color": "#163853", "align": "left" } }, { "type": "Image", "props": { "width": 32, "skin": "img/main/next@2x.png", "right": 0, "height": 32, "centerY": 0 } }] }, { "type": "Label", "props": { "text": "Copyright @ 2018 ConsenLabs", "height": 34, "fontSize": 24, "color": "#8E979F", "centerX": 0, "bottom": 88 } }, { "type": "Label", "props": { "x": 10, "text": "All right reserved", "height": 34, "fontSize": 24, "color": "#8E979F", "centerX": 0, "bottom": 54 } }] }] };
            return aboutUI;
        }(View));
        info.aboutUI = aboutUI;
    })(info = ui.info || (ui.info = {}));
})(ui || (ui = {}));
(function (ui) {
    var info;
    (function (info) {
        var aboutTeamUI = /** @class */ (function (_super) {
            __extends(aboutTeamUI, _super);
            function aboutTeamUI() {
                return _super.call(this) || this;
            }
            aboutTeamUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.info.aboutTeamUI.uiView);
            };
            aboutTeamUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Box", "props": { "y": 10, "x": 10, "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "img/main/white.jpg", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 40, "x": 30, "width": 65, "var": "btn_back", "skin": "img/main/back@2x.png", "height": 65 } }, { "type": "Label", "props": { "y": 48, "x": 300, "valign": "middle", "text": "团队介绍", "height": 44, "fontSize": 32, "color": "#163853", "centerX": 0, "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 186, "valign": "middle", "text": "WWEC Foundation（新加坡）", "height": 44, "fontSize": 32, "color": "#163853", "centerX": -14, "bold": true, "align": "center" } }, { "type": "TextArea", "props": { "y": 300, "width": 590, "text": "我们专注于区块链电商公链及应用，打造最具影响力的世界数字资产。", "leading": 10, "height": 100, "fontSize": 28, "color": "#8E979F", "centerX": 0 } }, { "type": "TextArea", "props": { "y": 400, "width": 590, "text": "我们有梦想、有格局、有思维、有资源，共创财富共同体、生命共同体！ ", "leading": 10, "height": 100, "fontSize": 28, "color": "#8E979F", "centerX": 0 } }, { "type": "TextArea", "props": { "y": 500, "width": 590, "text": "我们遵守公约、传播共识！我们共创辉煌、共享荣耀！", "leading": 10, "height": 100, "fontSize": 28, "color": "#8E979F", "centerX": 0 } }] }] };
            return aboutTeamUI;
        }(View));
        info.aboutTeamUI = aboutTeamUI;
    })(info = ui.info || (ui.info = {}));
})(ui || (ui = {}));
(function (ui) {
    var info;
    (function (info) {
        var CandyUI = /** @class */ (function (_super) {
            __extends(CandyUI, _super);
            function CandyUI() {
                return _super.call(this) || this;
            }
            CandyUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.info.CandyUI.uiView);
            };
            CandyUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 40, "x": 30, "width": 65, "var": "btn_back", "skin": "img/main/back@2x.png", "height": 65 } }, { "type": "Label", "props": { "y": 45, "width": 213, "valign": "middle", "text": "领取糖果", "height": 44, "fontSize": 32, "color": "#163853", "centerX": 0, "bold": true, "align": "center" } }, { "type": "TextInput", "props": { "y": 194, "x": 30, "width": 300, "var": "text_phone", "type": "number", "promptColor": "#163853", "prompt": "请输入手机号", "maxChars": 11, "height": 34, "fontSize": 24, "color": "#163853" }, "child": [{ "type": "Image", "props": { "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Label", "props": { "visible": false, "var": "warn_phone", "top": 40, "text": "请输入正确的手机号", "right": 0, "left": 0, "fontSize": 20, "color": "#ff0400", "align": "right" } }] }, { "type": "Button", "props": { "y": 198, "width": 165, "var": "btn_getcode", "skin": "img/main/img_blue2.png", "right": 48, "labelSize": 24, "labelColors": "#FFFFFF", "label": "获取验证码", "height": 34, "disabled": false } }, { "type": "TextInput", "props": { "y": 269, "x": 30, "width": 300, "var": "text_code", "type": "number", "promptColor": "#163853", "prompt": "验证码", "maxChars": 6, "height": 34, "fontSize": 24, "color": "#163853" }, "child": [{ "type": "Image", "props": { "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Label", "props": { "visible": false, "var": "warn_code", "top": 40, "text": "验证码不正确", "right": 0, "left": 0, "height": 20, "fontSize": 20, "color": "#ff0400", "align": "right" } }] }, { "type": "List", "props": { "var": "list_wallet", "top": 350, "selectEnable": true, "right": 0, "repeatX": 1, "left": 0, "bottom": 400 }, "child": [{ "type": "Box", "props": { "right": 0, "renderType": "render", "name": "render", "left": 0, "height": 120 }, "child": [{ "type": "Image", "props": { "width": 750, "top": 0, "skin": "img/main/white.jpg", "right": 0, "left": 0, "height": 60, "bottom": 0 } }, { "type": "Image", "props": { "x": 60, "width": 58, "skin": "img/main/wo de-@2x.png", "name": "img_wallet", "height": 58, "centerY": 0 } }, { "type": "Label", "props": { "y": 26, "x": 154, "width": 170, "valign": "middle", "text": "ETH", "skin": "template/List/label.png", "name": "lab_wName", "height": 34, "fontSize": 24, "color": "#163853", "align": "left" } }, { "type": "Label", "props": { "y": 60, "x": 154, "width": 400, "valign": "middle", "text": "035dx5dx...", "skin": "template/List/label.png", "name": "lab_wAddr", "height": 28, "fontSize": 20, "color": "#8E979F", "align": "left" } }, { "type": "Radio", "props": { "width": 30, "var": "radio", "skin": "img/main/radio2.png", "right": 50, "name": "radio", "height": 30, "centerY": 0 } }] }] }, { "type": "Label", "props": { "visible": false, "var": "warn_list", "text": "请选择钱包", "right": 30, "left": 0, "height": 20, "fontSize": 20, "color": "#ff0400", "bottom": 360, "align": "right" } }, { "type": "Button", "props": { "width": 690, "var": "btn_apply", "stateNum": 1, "skin": "img/main/anliu@2x.png", "labelSize": 32, "labelColors": "#ffffff", "label": "领取糖果", "height": 88, "centerX": 0, "bottom": 200 } }, { "type": "Label", "props": { "text": "一个手机号及钱包地址只能领取1次糖果", "height": 34, "fontSize": 24, "color": "#8E979F", "centerX": 0, "bottom": 116 } }] }] };
            return CandyUI;
        }(View));
        info.CandyUI = CandyUI;
    })(info = ui.info || (ui.info = {}));
})(ui || (ui = {}));
(function (ui) {
    var info;
    (function (info) {
        var ServiceUI = /** @class */ (function (_super) {
            __extends(ServiceUI, _super);
            function ServiceUI() {
                return _super.call(this) || this;
            }
            ServiceUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.info.ServiceUI.uiView);
            };
            ServiceUI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "img/main/white.jpg", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 0, "x": 700, "width": 50, "visible": false, "var": "btn_close", "top": 0, "skin": "img/main/xx@2x.png", "right": 0, "height": 50 } }, { "type": "Box", "props": { "var": "box_info", "top": 50, "right": 0, "left": 0, "bottom": 130 }, "child": [{ "type": "Text", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 750, "var": "text", "text": "阿斯顿发生大四顿饭", "strokeColor": "#000000", "overflow": "scroll", "leading": 10, "height": 1150, "fontSize": 24, "color": "#000000" } }] }, { "type": "Box", "props": { "var": "box_btn", "right": 0, "left": 0, "height": 130, "bottom": 0 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 70, "width": 633, "valign": "middle", "text": "我已经仔细阅读并同意隐私及服务条款", "padding": "0", "name": "隐私及服务条款", "height": 34, "fontSize": 24, "color": "#8E979F", "align": "left" } }, { "type": "CheckBox", "props": { "y": 0, "x": 30, "width": 24, "var": "agree", "skin": "img/main/radio.png", "scaleY": 2, "scaleX": 2, "mouseEnabled": true, "layoutEnabled": true, "hitTestPrior": true, "height": 24, "click": "updateArgee" } }, { "type": "Button", "props": { "var": "btn_accept", "stateNum": 1, "skin": "img/main/img_blue2.png", "sizeGrid": "0,0,0,0", "right": 0, "left": 0, "labelSize": 32, "labelColors": "#ffffff", "label": "下一步", "height": 80, "disabled": true, "bottom": 0 } }] }] };
            return ServiceUI;
        }(View));
        info.ServiceUI = ServiceUI;
    })(info = ui.info || (ui.info = {}));
})(ui || (ui = {}));
(function (ui) {
    var LoginUI = /** @class */ (function (_super) {
        __extends(LoginUI, _super);
        function LoginUI() {
            return _super.call(this) || this;
        }
        LoginUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.LoginUI.uiView);
        };
        LoginUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 600, "height": 800 }, "child": [{ "type": "Label", "props": { "width": 600, "var": "lab_title", "valign": "middle", "top": 20, "text": "登  录", "left": 0, "fontSize": 32, "font": "SimHei", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "x": 55, "width": 40, "var": "lab_quit", "top": 20, "text": "X", "height": 40, "fontSize": 32, "font": "SimSun", "color": "#000000", "align": "center" } }, { "type": "Line", "props": { "y": 60, "x": 300, "toY": 1, "toX": 0, "lineWidth": 600, "lineColor": "#9f9f9f" } }, { "type": "Label", "props": { "y": 80, "x": 55, "text": "国家/地区", "name": "lab_conArea", "layoutEnabled": true, "fontSize": 20, "font": "SimHei", "color": "#a6a6a6" } }, { "type": "Label", "props": { "y": 80, "x": 196, "var": "lab_contury", "text": "中国", "name": "lab_contury", "fontSize": 20, "font": "SimHei", "color": "#000000" } }, { "type": "Label", "props": { "y": 80, "x": 530, "var": "lab_sele_contury", "text": ">", "name": "lab_sele_contury", "fontSize": 20, "font": "Arial", "color": "#000000" } }, { "type": "Line", "props": { "y": 115, "x": 300, "toY": 1, "toX": 0, "lineWidth": 500, "lineColor": "#9f9f9f" } }, { "type": "TextInput", "props": { "y": 130, "x": 55, "width": 490, "var": "text_phoneNum", "valign": "middle", "type": "number", "rotation": 0, "prompt": "手机号码", "overflow": "hidden", "name": "text_phoneNum", "maxChars": 11, "layoutEnabled": true, "hitTestPrior": true, "height": 22, "fontSize": 20, "font": "SimHei", "color": "#a6a6a6", "align": "left" } }, { "type": "Line", "props": { "y": 165, "x": 300, "toY": 1, "toX": 0, "lineWidth": 500, "lineColor": "#9f9f9f" } }, { "type": "TextInput", "props": { "y": 175, "x": 55, "width": 487, "var": "text_password", "valign": "middle", "type": "password", "prompt": "密码", "name": "text_password", "maxChars": 30, "layoutEnabled": true, "height": 22, "fontSize": 20, "font": "SimHei", "color": "#a6a6a6", "align": "left" } }, { "type": "Line", "props": { "y": 209, "x": 300, "toY": 1, "toX": 0, "lineWidth": 500, "lineColor": "#9f9f9f" } }, { "type": "Button", "props": { "y": 236, "x": 55, "width": 500, "stateNum": 3, "skin": "comp/button.png", "name": "btn_submit", "label": "确    定", "height": 37 } }, { "type": "Button", "props": { "y": 292, "x": 55, "width": 500, "skin": "comp/button.png", "name": "btn_regist", "label": "注    册", "height": 36 } }] };
        return LoginUI;
    }(View));
    ui.LoginUI = LoginUI;
})(ui || (ui = {}));
(function (ui) {
    var MsgUI = /** @class */ (function (_super) {
        __extends(MsgUI, _super);
        function MsgUI() {
            return _super.call(this) || this;
        }
        MsgUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.MsgUI.uiView);
        };
        MsgUI.uiView = { "type": "Dialog", "props": { "width": 300, "staticCache": true, "popupCenter": true, "layoutEnabled": true, "height": 429, "centerY": 0, "centerX": 0, "cacheAs": "normal" }, "child": [{ "type": "Rect", "props": { "y": 135, "x": 30, "width": 240, "lineWidth": 1, "height": 180, "fillColor": "#ffffff" } }, { "type": "Label", "props": { "y": 158, "var": "lab_title", "text": "系统提示", "fontSize": 16, "font": "SimHei", "color": "#000000", "centerX": 0, "bold": true } }, { "type": "Line", "props": { "y": 185, "x": 30, "toY": 0, "toX": 240, "lineWidth": 1, "lineColor": "#b9b9b9" } }, { "type": "Text", "props": { "y": 195, "x": 30, "wordWrap": true, "width": 240, "var": "lab_msg", "text": "你好附近的设计费血常规发大水发链接", "height": 60, "font": "SimHei", "color": "#000000", "align": "left" } }, { "type": "Button", "props": { "y": 263, "width": 166, "skin": "comp/button.png", "name": "Dialog.CLOSE", "label": "确定", "height": 34, "centerX": 0 } }, { "type": "Label", "props": { "text": "label" } }] };
        return MsgUI;
    }(Dialog));
    ui.MsgUI = MsgUI;
})(ui || (ui = {}));
(function (ui) {
    var set;
    (function (set) {
        var ExpKeystoreUI = /** @class */ (function (_super) {
            __extends(ExpKeystoreUI, _super);
            function ExpKeystoreUI() {
                return _super.call(this) || this;
            }
            ExpKeystoreUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.set.ExpKeystoreUI.uiView);
            };
            ExpKeystoreUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 375, "layoutEnabled": true, "height": 667 }, "child": [{ "type": "Rect", "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 60 } }, { "type": "Label", "props": { "y": 10, "x": 118, "valign": "middle", "top": 20, "text": "导出 Keystore", "height": 30, "fontSize": 16, "color": "#000000", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 10, "x": 20, "width": 117, "var": "btn_back", "top": 20, "skin": "template/Navigator/btn_BackButton.png", "height": 30 } }, { "type": "Image", "props": { "y": 60, "x": 10, "skin": "img/itemSepar.png", "right": 0, "left": 0 } }, { "type": "Tab", "props": { "y": 60, "var": "btn_tab", "selectedIndex": 0, "right": 0, "left": 0, "layoutEnabled": true, "height": 40 }, "child": [{ "type": "Button", "props": { "top": 0, "right": 150, "name": "item0", "left": 0, "labelSize": 16, "label": "Keystore 文件", "bottom": 0 } }, { "type": "Button", "props": { "top": 0, "right": 0, "name": "item1", "left": 150, "labelSize": 16, "label": "二维码", "bottom": 0 } }] }, { "type": "ViewStack", "props": { "var": "viewStack", "top": 100, "selectedIndex": 0, "right": 0, "mouseEnabled": true, "left": 0, "bottom": 0 }, "child": [{ "type": "Box", "props": { "x": 0, "top": 0, "right": 0, "name": "item0", "left": 0, "layoutEnabled": true, "bottom": 0 }, "child": [{ "type": "Label", "props": { "y": 0, "valign": "middle", "text": "离线保存", "right": 20, "left": 20, "height": 20, "color": "#108bbb", "align": "left" } }, { "type": "TextArea", "props": { "y": 25, "width": 260, "text": "离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存", "right": 20, "left": 20, "height": 35, "color": "#645a5a" } }, { "type": "Label", "props": { "y": 60, "x": 40, "valign": "middle", "text": "密码保险箱保存", "left": 20, "height": 20, "color": "#108bbb" } }, { "type": "TextArea", "props": { "y": 80, "x": 20, "width": 260, "text": "离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存", "right": 20, "left": 20, "height": 40, "color": "#645a5a" } }, { "type": "Label", "props": { "y": 120, "x": 20, "valign": "middle", "text": "请勿使用网络传输", "left": 20, "height": 20, "color": "#108bbb" } }, { "type": "TextArea", "props": { "y": 140, "x": 10, "width": 260, "text": "离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存", "right": 20, "left": 20, "height": 40, "color": "#645a5a" } }, { "type": "TextArea", "props": { "width": 335, "var": "text_keystore", "top": 180, "right": 20, "overflow": "scroll", "left": 20, "height": 280, "bottom": 90 } }, { "type": "Button", "props": { "var": "btn_copy", "skin": "img/blue.png", "right": 20, "left": 20, "layoutEnabled": true, "label": "复制", "height": 60, "bottom": 27 } }] }, { "type": "Box", "props": { "x": 0, "var": "item1", "top": 0, "right": 0, "name": "item1", "left": 0, "layoutEnabled": true, "bottom": 0 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 20, "valign": "middle", "text": "仅供直接扫描", "right": 20, "left": 20, "height": 20, "color": "#108bbb", "align": "left" } }, { "type": "TextArea", "props": { "y": 25, "x": 20, "width": 260, "text": "离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存", "right": 20, "left": 20, "height": 40, "color": "#645a5a" } }, { "type": "Label", "props": { "y": 65, "x": 20, "valign": "middle", "text": "在安全环境下使用", "left": 20, "height": 20, "color": "#108bbb" } }, { "type": "TextArea", "props": { "y": 90, "x": 20, "width": 260, "text": "离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存", "right": 20, "left": 20, "height": 40, "color": "#645a5a" } }, { "type": "Rect", "props": { "y": 214, "x": 112, "width": 150, "lineWidth": 1, "height": 150, "fillColor": "#a1a0a0" } }, { "type": "Image", "props": { "y": 220, "x": 117, "width": 140, "var": "img_keystore", "skin": "img/ewm.jpg", "height": 140 } }] }] }] };
            return ExpKeystoreUI;
        }(View));
        set.ExpKeystoreUI = ExpKeystoreUI;
    })(set = ui.set || (ui.set = {}));
})(ui || (ui = {}));
(function (ui) {
    var set;
    (function (set) {
        var UpdatePassUI = /** @class */ (function (_super) {
            __extends(UpdatePassUI, _super);
            function UpdatePassUI() {
                return _super.call(this) || this;
            }
            UpdatePassUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.set.UpdatePassUI.uiView);
            };
            UpdatePassUI.uiView = { "type": "View", "props": { "width": 375, "height": 667 }, "child": [{ "type": "Rect", "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 60 } }, { "type": "Label", "props": { "y": 10, "x": 118, "valign": "middle", "top": 20, "text": "更改密码", "height": 30, "fontSize": 16, "color": "#000000", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 10, "x": 20, "width": 117, "var": "btn_back", "top": 20, "skin": "template/Navigator/btn_BackButton.png", "height": 30 } }, { "type": "Label", "props": { "y": 10, "x": 238, "var": "lab_save", "valign": "middle", "top": 20, "text": "保存", "right": 20, "height": 30, "fontSize": 16, "color": "#218d92", "align": "center" } }, { "type": "Image", "props": { "top": 60, "skin": "img/itemSepar.png", "right": 0, "left": 0 } }, { "type": "TextInput", "props": { "y": 90, "var": "lab_oldPass", "type": "password", "right": 20, "prompt": "旧密码", "maxChars": 30, "left": 20, "height": 30 } }, { "type": "Image", "props": { "y": 130, "x": 0, "skin": "img/itemSepar.png", "right": 0, "left": 0 } }, { "type": "TextInput", "props": { "y": 140, "var": "lab_newPass", "type": "password", "right": 20, "prompt": "新密码", "maxChars": 30, "left": 20, "height": 30 } }, { "type": "Image", "props": { "y": 180, "x": 0, "skin": "img/itemSepar.png", "right": 0, "left": 0 } }, { "type": "TextInput", "props": { "y": 190, "var": "lab_confPass", "type": "password", "right": 20, "prompt": "确认密码", "maxChars": 30, "left": 20, "height": 30 } }, { "type": "Label", "props": { "y": 240, "width": 229, "valign": "middle", "text": "忘记密码？导入助记词或私钥可重置密码。", "left": 20, "height": 20, "color": "#9e9999", "align": "left" } }, { "type": "Label", "props": { "y": 240, "var": "lab_import", "valign": "middle", "text": "导入", "right": 27, "height": 20, "color": "#0047ff", "align": "left" } }] };
            return UpdatePassUI;
        }(View));
        set.UpdatePassUI = UpdatePassUI;
    })(set = ui.set || (ui.set = {}));
})(ui || (ui = {}));
(function (ui) {
    var set;
    (function (set) {
        var WalletImportUI = /** @class */ (function (_super) {
            __extends(WalletImportUI, _super);
            function WalletImportUI() {
                return _super.call(this) || this;
            }
            WalletImportUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.set.WalletImportUI.uiView);
            };
            WalletImportUI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "right": 0, "left": 0, "layoutEnabled": true, "height": 1334, "bottom": 0 }, "child": [{ "type": "Label", "props": { "y": 62, "x": 90, "valign": "middle", "text": "导入钱包", "height": 44, "fontSize": 32, "color": "#163853", "centerX": 0, "align": "center" } }, { "type": "Image", "props": { "y": 64, "x": 30, "width": 65, "var": "btn_back", "skin": "img/main/back@2x.png", "height": 65 } }, { "type": "Image", "props": { "y": 54, "width": 56, "var": "btn_sao", "skin": "img/main/sys@2x.png", "right": 30, "height": 56 } }, { "type": "Tab", "props": { "y": 178, "width": 750, "var": "tab", "selectedIndex": 0, "right": 0, "left": 0, "height": 100 }, "child": [{ "type": "Button", "props": { "width": 250, "top": 0, "name": "item0", "left": 0, "labelSize": 28, "label": "助记词", "bottom": 0 } }, { "type": "Button", "props": { "x": 250, "width": 250, "top": 0, "name": "item1", "labelSize": 28, "label": "官方钱包", "disabled": true, "bottom": 0 } }, { "type": "Button", "props": { "y": 10, "width": 250, "top": 0, "right": 0, "name": "item2", "labelSize": 28, "label": "私钥", "disabled": true, "bottom": 0 } }, { "type": "Image", "props": { "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": 0 } }] }, { "type": "ViewStack", "props": { "var": "stack", "top": 308, "selectedIndex": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "name": "item0", "left": 0, "bottom": 0 }, "child": [{ "type": "TextArea", "props": { "y": 0, "var": "o_text_zjc", "right": 30, "promptColor": "#687076", "prompt": "助记词，用空格分开", "padding": "10", "left": 30, "layoutEnabled": true, "height": 192, "fontSize": 28, "borderColor": "#b5b5b5" } }, { "type": "ComboBox", "props": { "y": 269, "var": "o_sel_dir", "sizeGrid": "0,0,0,0", "selectedIndex": 0, "right": 30, "left": 30, "labels": "m/0'/0'/0',m/44’/60’/0’/0/0 Jaxx Metamask(ETH),m/44’/60’/0’/0 Ledger(ETH),m/44’/60’/1’/0/0 自定义路径", "labelSize": 28, "labelPadding": "10,0,10,0", "labelColors": "#8E979F", "itemSize": 28, "itemColors": "#8E979F", "height": 44 }, "child": [{ "type": "Image", "props": { "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": -10 } }] }, { "type": "TextInput", "props": { "y": 375, "var": "o_text_pass", "type": "password", "right": 30, "promptColor": "#8E979F", "prompt": "密码", "maxChars": 30, "left": 30, "height": 44, "fontSize": 28 }, "child": [{ "type": "Image", "props": { "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": -10 } }] }, { "type": "TextInput", "props": { "y": 480, "var": "o_text_confpass", "type": "password", "right": 30, "promptColor": "#8E979F", "prompt": "确认密码", "maxChars": 30, "left": 30, "height": 44, "fontSize": 28 }, "child": [{ "type": "Image", "props": { "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": -10 } }] }, { "type": "Button", "props": { "var": "o_btn_import", "stateNum": 1, "skin": "img/main/anliu@2x.png", "right": 30, "left": 28, "labelSize": 32, "labelColors": "#ffffff", "label": "开始导入", "height": 80, "disabled": true, "bottom": 220 } }, { "type": "Label", "props": { "var": "hetp_zjc", "valign": "middle", "text": "什么是助记词？", "right": 20, "left": 20, "height": 30, "fontSize": 24, "color": "#687076", "bottom": 148, "align": "center" } }, { "type": "Label", "props": { "y": 613, "x": 76, "width": 240, "valign": "middle", "text": "我已经仔细阅读并同意", "padding": "0", "height": 34, "fontSize": 24, "color": "#8E979F", "align": "left" } }, { "type": "CheckBox", "props": { "y": 615, "x": 36, "width": 116, "var": "o_check_agree", "skin": "img/main/radio.png", "scaleY": 2, "scaleX": 2, "mouseEnabled": true, "layoutEnabled": true, "hitTestPrior": true, "height": 24, "click": "updateArgee" } }, { "type": "Label", "props": { "y": 613, "x": 318, "width": 240, "var": "lab_service", "valign": "middle", "text": "隐私及服务条款", "padding": "0", "name": "lab_service", "height": 34, "fontSize": 24, "color": "#598ADA", "align": "left" } }, { "type": "Image", "props": { "y": 269, "width": 44, "skin": "img/main/Stroke 2@2x.png", "right": 30, "height": 44 } }, { "type": "Label", "props": { "y": 208, "width": 690, "visible": false, "var": "warn_zjc", "text": "请输入正确的助记词", "right": 30, "left": 30, "height": 30, "fontSize": 20, "color": "#ff0400", "align": "right" } }, { "type": "Label", "props": { "y": 438, "width": 690, "visible": false, "var": "warn_pass", "text": "密码不少于8位", "right": 30, "left": 37, "height": 30, "fontSize": 20, "color": "#ff0400", "align": "right" } }, { "type": "Label", "props": { "y": 538, "width": 690, "visible": false, "var": "warn_passconf", "text": "2次输入的密码不一致", "right": 30, "left": 31, "height": 30, "fontSize": 20, "color": "#ff0400", "align": "right" } }] }, { "type": "Box", "props": { "top": 0, "right": 0, "name": "item1", "left": 0, "bottom": 0 }, "child": [{ "type": "TextArea", "props": { "y": 0, "wordWrap": true, "valign": "middle", "text": "直接复制粘贴以太坊官方钱包keystore文件内容至输入框，或者扫二维码录入。", "stroke": 0, "right": 30, "padding": "5", "left": 30, "leading": 5, "layoutEnabled": true, "height": 88, "fontSize": 24, "editable": false, "disabled": true, "color": "#687076", "align": "left" } }, { "type": "TextArea", "props": { "y": 120, "wordWrap": true, "var": "text_keystore", "right": 30, "promptColor": "#687076", "prompt": "keystore文本内容", "padding": "10", "left": 30, "layoutEnabled": true, "height": 152, "fontSize": 28, "borderColor": "#b5b5b5" } }, { "type": "TextInput", "props": { "y": 331, "var": "keystore_pass", "type": "password", "right": 30, "promptColor": "#8E979F", "prompt": "keystore密码", "maxChars": 30, "left": 30, "height": 44, "fontSize": 28 } }, { "type": "Image", "props": { "y": 375, "skin": "img/main/itemSepar.png", "right": 30, "left": 30 } }, { "type": "Label", "props": { "y": 455, "x": 80, "width": 240, "valign": "middle", "text": "我已经仔细阅读并同意", "padding": "0", "name": "lab_service", "height": 34, "fontSize": 24, "color": "#8E979F", "align": "left" } }, { "type": "CheckBox", "props": { "y": 457, "x": 40, "width": 118, "var": "ks_agree", "skin": "img/main/radio.png", "scaleY": 2, "scaleX": 2, "mouseEnabled": true, "layoutEnabled": true, "hitTestPrior": true, "height": 24, "click": "updateArgee" } }, { "type": "Label", "props": { "y": 455, "x": 322, "width": 240, "valign": "middle", "text": "隐私及服务条款", "padding": "0", "name": "lab_service", "height": 34, "fontSize": 24, "color": "#598ADA", "align": "left" } }, { "type": "Label", "props": { "y": 848, "x": 20, "var": "help_keystore", "valign": "middle", "text": "什么是keystore?", "right": 20, "left": 20, "height": 30, "fontSize": 24, "color": "#687076", "bottom": 148, "align": "center" } }, { "type": "Button", "props": { "y": 10, "x": 10, "var": "ks_btn_import", "stateNum": 1, "skin": "img/main/anliu@2x.png", "right": 30, "left": 28, "labelSize": 32, "labelColors": "#ffffff", "label": "开始导入", "height": 80, "bottom": 220 } }] }, { "type": "Box", "props": { "top": 0, "right": 0, "name": "item2", "left": 0, "bottom": 0 }, "child": [{ "type": "TextArea", "props": { "y": 0, "wordWrap": true, "var": "text_privateKey", "stroke": 0, "right": 30, "promptColor": "#687076", "prompt": "明文私钥", "padding": "5", "left": 30, "leading": 5, "layoutEnabled": true, "height": 192, "fontSize": 28, "borderColor": "#b5b5b5", "align": "left" } }, { "type": "Label", "props": { "y": 848, "x": 20, "var": "help_pk", "valign": "middle", "text": "什么是私钥？", "right": 20, "left": 20, "height": 30, "fontSize": 24, "color": "#687076", "bottom": 148, "align": "center" } }, { "type": "Button", "props": { "y": 726, "x": 28, "var": "pk_btn_import", "stateNum": 1, "skin": "img/main/anliu@2x.png", "right": 30, "left": 28, "labelSize": 32, "labelColors": "#ffffff", "label": "开始导入", "height": 80, "bottom": 220 } }, { "type": "TextInput", "props": { "y": 242, "width": 500, "var": "pk_text_pass", "type": "password", "promptColor": "#8E979F", "prompt": "密码", "maxChars": 30, "left": 30, "height": 44, "fontSize": 28 } }, { "type": "Image", "props": { "y": 414, "x": 30, "skin": "img/main/itemSepar.png", "right": 30, "left": 30 } }, { "type": "TextInput", "props": { "y": 362, "width": 500, "var": "pk_text_confPass", "type": "password", "promptColor": "#8E979F", "prompt": "确认密码", "maxChars": 30, "left": 30, "height": 44, "fontSize": 28 } }, { "type": "Image", "props": { "y": 406, "x": 30, "skin": "img/main/itemSepar.png", "right": 30, "left": 30 } }, { "type": "Label", "props": { "y": 487, "x": 70, "width": 240, "valign": "middle", "text": "我已经仔细阅读并同意", "padding": "0", "name": "lab_service", "height": 34, "fontSize": 24, "color": "#8E979F", "align": "left" } }, { "type": "CheckBox", "props": { "y": 489, "x": 30, "width": 126, "skin": "img/main/radio.png", "scaleY": 2, "scaleX": 2, "mouseEnabled": true, "layoutEnabled": true, "hitTestPrior": true, "height": 24, "click": "updateArgee" } }, { "type": "Label", "props": { "y": 487, "x": 312, "width": 240, "valign": "middle", "text": "隐私及服务条款", "padding": "0", "height": 34, "fontSize": 24, "color": "#598ADA", "align": "left" } }] }] }] };
            return WalletImportUI;
        }(View));
        set.WalletImportUI = WalletImportUI;
    })(set = ui.set || (ui.set = {}));
})(ui || (ui = {}));
(function (ui) {
    var temple;
    (function (temple) {
        var testUI = /** @class */ (function (_super) {
            __extends(testUI, _super);
            function testUI() {
                return _super.call(this) || this;
            }
            testUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.temple.testUI.uiView);
            };
            testUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 770, "x": 27, "skin": "template/Tab/tab bar_no button.png" } }, { "type": "Tab", "props": { "y": 770, "x": 78, "stateNum": 0, "selectedIndex": 1 }, "child": [{ "type": "Button", "props": { "stateNum": 2, "skin": "template/Tab/btn_Icon1.png", "name": "item0", "labelPadding": "30", "labelColors": "#929292,#0079ff", "label": "Favorites" } }, { "type": "Button", "props": { "y": 0, "x": 154, "stateNum": 2, "skin": "template/Tab/btn_Icon2.png", "name": "item1", "labelPadding": "30", "labelColors": "#929292,#0079ff", "label": "Recents" } }, { "type": "Button", "props": { "y": 0, "x": 314, "stateNum": 2, "skin": "template/Tab/btn_Icon3.png", "name": "item2", "labelPadding": "30", "labelColors": "#929292,#0079ff", "label": "Contacts" } }, { "type": "Button", "props": { "y": 0, "x": 473, "stateNum": 2, "skin": "template/Tab/btn_Icon4.png", "name": "item3", "labelPadding": "30", "labelColors": "#929292,#0079ff", "label": "Keypad" } }] }] };
            return testUI;
        }(View));
        temple.testUI = testUI;
    })(temple = ui.temple || (ui.temple = {}));
})(ui || (ui = {}));
(function (ui) {
    var TransDetailUI = /** @class */ (function (_super) {
        __extends(TransDetailUI, _super);
        function TransDetailUI() {
            return _super.call(this) || this;
        }
        TransDetailUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.TransDetailUI.uiView);
        };
        TransDetailUI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Label", "props": { "var": "lab_coin_name", "valign": "middle", "top": 38, "text": "交易明细", "height": 30, "fontSize": 32, "color": "#163853", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "width": 65, "var": "btn_goback", "top": 30, "stateNum": 1, "skin": "img/main/back@2x.png", "left": 30, "height": 65 } }, { "type": "Label", "props": { "y": 140, "var": "lab_amount", "valign": "middle", "text": "-0.00001 ETH (US$0.05)", "height": 30, "fontSize": 28, "color": "#ff0400", "centerX": -1 } }, { "type": "Label", "props": { "y": 200, "var": "lab_type", "valign": "middle", "text": "收款账户", "right": 30, "left": 30, "height": 40, "fontSize": 24, "color": "#000000" } }, { "type": "Label", "props": { "y": 250, "var": "lab_addr", "valign": "middle", "text": "-----", "right": 30, "overflow": "scroll", "left": 30, "height": 40, "fontSize": 24, "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 300, "valign": "middle", "text": "交易 ID", "right": 30, "left": 30, "height": 40, "fontSize": 24, "color": "#000000" } }, { "type": "Label", "props": { "y": 350, "var": "lab_transId", "valign": "middle", "text": "-----", "right": 30, "overflow": "scroll", "left": 30, "height": 40, "fontSize": 24, "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 400, "valign": "middle", "text": "Gas 价格(GWEI)", "right": 30, "left": 30, "height": 40, "fontSize": 24, "color": "#000000" } }, { "type": "Label", "props": { "y": 450, "var": "lab_gas", "valign": "middle", "text": "0.000021 ETH(US$0.01)", "right": 30, "overflow": "scroll", "left": 30, "height": 40, "fontSize": 24, "color": "#000000" } }, { "type": "Label", "props": { "y": 600, "valign": "middle", "text": "确认", "right": 30, "left": 30, "height": 40, "fontSize": 24, "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": 650, "var": "lab_confirm", "valign": "middle", "text": "-", "right": 30, "left": 30, "height": 40, "fontSize": 24, "color": "#000000" } }, { "type": "Label", "props": { "y": 500, "valign": "middle", "text": "时间", "right": 30, "left": 30, "height": 40, "fontSize": 24, "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": 550, "var": "lab_time", "valign": "middle", "text": "2018-06-22 15:10:10", "right": 30, "overflow": "scroll", "left": 30, "height": 40, "fontSize": 24, "color": "#000000" } }, { "type": "Label", "props": { "y": 700, "valign": "middle", "text": "Nonce", "right": 30, "left": 30, "height": 40, "fontSize": 24, "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": 750, "var": "lab_nonce", "valign": "middle", "text": "-", "right": 30, "left": 30, "height": 40, "fontSize": 24, "color": "#000000" } }, { "type": "Button", "props": { "y": 389, "x": 0, "visible": false, "var": "btn_moreinfo", "right": 0, "left": 0, "label": "查看更多交易详情", "height": 40, "bottom": 0 } }] };
        return TransDetailUI;
    }(View));
    ui.TransDetailUI = TransDetailUI;
})(ui || (ui = {}));
(function (ui) {
    var TransHisListUI = /** @class */ (function (_super) {
        __extends(TransHisListUI, _super);
        function TransHisListUI() {
            return _super.call(this) || this;
        }
        TransHisListUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.TransHisListUI.uiView);
        };
        TransHisListUI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Label", "props": { "y": 30, "x": 108, "valign": "middle", "text": "交易", "height": 60, "fontSize": 32, "color": "#163853", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 30, "x": 30, "width": 65, "var": "btn_goback", "stateNum": 1, "skin": "img/main/back@2x.png", "height": 65 } }, { "type": "List", "props": { "var": "list", "top": 100, "selectEnable": false, "right": 0, "name": "list", "left": 0, "bottom": 0 }, "child": [{ "type": "Box", "props": { "right": 0, "name": "render", "left": 0, "height": 120 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "template/List/SimpleListBoxItemBackground.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 32, "x": 30, "width": 56, "skin": "img/main/transfer_in.png", "name": "img", "height": 56, "centerY": 0 } }, { "type": "Label", "props": { "y": 0, "x": 100, "width": 400, "valign": "bottom", "text": "label", "skin": "template/List/label.png", "name": "lab_deal_name", "height": 60, "fontSize": 24, "color": "#163853", "align": "left" } }, { "type": "Label", "props": { "y": 60, "x": 100, "width": 400, "valign": "middle", "text": "label", "skin": "template/List/label.png", "name": "lab_addr", "height": 60, "fontSize": 20, "color": "#8E979F", "align": "left" } }, { "type": "Label", "props": { "y": 35, "x": 520, "width": 200, "valign": "middle", "text": "label", "skin": "template/List/label.png", "right": 30, "name": "lab_amount", "height": 50, "fontSize": 28, "color": "#FF516F", "centerY": 0, "align": "right" } }, { "type": "Image", "props": { "y": 119, "x": 0, "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": 0 } }] }] }] };
        return TransHisListUI;
    }(View));
    ui.TransHisListUI = TransHisListUI;
})(ui || (ui = {}));
(function (ui) {
    var WalletBackUpUI = /** @class */ (function (_super) {
        __extends(WalletBackUpUI, _super);
        function WalletBackUpUI() {
            return _super.call(this) || this;
        }
        WalletBackUpUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.WalletBackUpUI.uiView);
        };
        WalletBackUpUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 54, "x": 20, "width": 65, "var": "btn_back", "skin": "img/main/back@2x.png", "height": 65 } }, { "type": "Image", "props": { "y": 266, "width": 124, "skin": "img/main/anquan@2x.png", "height": 144, "centerX": 0 } }, { "type": "Label", "props": { "y": 62, "valign": "middle", "text": "备份钱包", "height": 44, "fontSize": 32, "color": "#163853", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 496, "valign": "middle", "text": "立即备份你的钱包！", "height": 56, "fontSize": 40, "color": "#163853", "centerX": 0, "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 636, "x": 30, "valign": "middle", "text": "备份钱包：导出「助记词」并抄写到安全的地方", "height": 44, "fontSize": 24, "color": "#687076", "align": "left" } }, { "type": "Label", "props": { "y": 680, "x": 26, "valign": "middle", "text": " 千万不要保存到网络上。然后尝试转入，转出小额资产开始使用。", "height": 44, "fontSize": 24, "color": "#687076", "align": "left" } }, { "type": "Button", "props": { "y": 946, "width": 708, "var": "btn_backup", "stateNum": 1, "skin": "img/main/anliu@2x.png", "sizeGrid": "0,0,0,0", "labelSize": 32, "labelColors": "#ffffff", "label": "备份钱包", "height": 80, "centerX": 0 } }, { "type": "Label", "props": { "y": 1072, "var": "info_backup", "text": "查看备份详细教程", "height": 34, "fontSize": 32, "color": "#687076", "centerX": 0, "align": "center" } }] }] };
        return WalletBackUpUI;
    }(View));
    ui.WalletBackUpUI = WalletBackUpUI;
})(ui || (ui = {}));
(function (ui) {
    var WalletCreateUI = /** @class */ (function (_super) {
        __extends(WalletCreateUI, _super);
        function WalletCreateUI() {
            return _super.call(this) || this;
        }
        WalletCreateUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.WalletCreateUI.uiView);
        };
        WalletCreateUI.uiView = { "type": "View", "props": { "width": 750, "visible": true, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Label", "props": { "y": 186, "x": 70, "valign": "middle", "text": "密码用于保护私匙和交易授权，强度非常重要", "height": 34, "fontSize": 24, "color": "#163853", "align": "left" } }, { "type": "Label", "props": { "y": 234, "x": 70, "valign": "middle", "text": "WWECToken 不储存密码，也无法帮您找回，请务必牢记", "height": 34, "fontSize": 24, "color": "#163853", "align": "left" } }, { "type": "TextInput", "props": { "y": 338, "x": 30, "width": 500, "var": "text_wall_name", "promptColor": "#8e979f", "prompt": "钱包名称", "maxChars": 20, "layoutEnabled": true, "height": 45, "fontSize": 28, "align": "left" }, "child": [{ "type": "Image", "props": { "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": -10 } }] }, { "type": "TextInput", "props": { "y": 454, "x": 30, "width": 500, "var": "text_pass", "type": "password", "promptColor": "#8e979f", "prompt": "密码", "maxChars": 32, "layoutEnabled": true, "height": 45, "fontSize": 28, "align": "left" }, "child": [{ "type": "Image", "props": { "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": -10 } }] }, { "type": "TextInput", "props": { "y": 578, "x": 30, "width": 500, "var": "text_pass_conf", "type": "password", "promptColor": "#8e979f", "prompt": "确认密码", "maxChars": 32, "layoutEnabled": true, "height": 45, "fontSize": 28, "align": "left" }, "child": [{ "type": "Image", "props": { "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": -10 } }] }, { "type": "Label", "props": { "y": 706, "x": 70, "width": 240, "var": "lab_info", "valign": "middle", "text": "我已经仔细阅读并同意", "padding": "0", "name": "隐私及服务条款", "height": 34, "fontSize": 24, "color": "#8E979F", "align": "left" } }, { "type": "CheckBox", "props": { "y": 708, "x": 30, "width": 126, "var": "check_argee", "skin": "img/main/radio.png", "scaleY": 2, "scaleX": 2, "mouseEnabled": true, "layoutEnabled": true, "hitTestPrior": true, "height": 24, "click": "updateArgee" } }, { "type": "Label", "props": { "y": 62, "valign": "middle", "text": "创建钱包", "strokeColor": "#f9f9f9", "skin": "template/Navigator/label.png", "height": 44, "fontSize": 32, "color": "#FF163853", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 54, "x": 20, "width": 65, "var": "btn_back", "stateNum": 1, "skin": "img/main/back@2x.png", "labelSize": 22, "labelColors": "#057AFB,#057AFB,#7EB9FB", "height": 65 } }, { "type": "Label", "props": { "y": 432, "visible": false, "var": "lab_pass_level", "valign": "middle", "text": "弱", "right": 106, "height": 34, "fontSize": 20, "color": "#5eb0c2", "align": "center" } }, { "type": "Label", "props": { "y": 386, "width": 294, "visible": false, "var": "lab_warn_wName", "valign": "middle", "text": "钱包已经存在", "right": 70, "height": 34, "fontSize": 20, "color": "#ff0400", "align": "right" } }, { "type": "Label", "props": { "y": 510, "width": 643, "visible": false, "var": "lab_pass", "valign": "middle", "text": "简单密码", "right": 70, "height": 34, "fontSize": 20, "color": "#ff0400", "align": "right" } }, { "type": "Label", "props": { "y": 624, "width": 301, "visible": false, "var": "lab_pass_conf", "valign": "middle", "text": "两次密码不一致", "right": 70, "height": 34, "fontSize": 20, "color": "#ff0400", "align": "right" } }, { "type": "Label", "props": { "y": 984, "var": "btn_import", "valign": "middle", "text": "导入钱包", "height": 44, "fontSize": 32, "color": "#8E979F", "centerX": 0, "align": "center" } }, { "type": "Image", "props": { "y": 198, "x": 30, "width": 12, "skin": "img/main/Oval@2x.png", "height": 12 } }, { "type": "Image", "props": { "y": 246, "x": 30, "width": 12, "skin": "img/main/Oval@2x.png", "height": 12 } }, { "type": "Label", "props": { "y": 470, "var": "lab_words", "valign": "middle", "text": "0字符", "right": 106, "height": 34, "fontSize": 20, "color": "#8e979f", "align": "right" } }, { "type": "Box", "props": { "y": 428, "x": 656, "width": 36, "var": "box_pass_level", "height": 76 }, "child": [{ "type": "Image", "props": { "width": 36, "top": 0, "skin": "img/main/fangkuai@2x.png", "name": "a", "height": 16 } }, { "type": "Image", "props": { "x": 0, "width": 36, "top": 20, "skin": "img/main/fangkuai@2x.png", "name": "b", "height": 16 } }, { "type": "Image", "props": { "x": 0, "width": 36, "top": 40, "skin": "img/main/fangkuai@2x.png", "name": "c", "height": 16 } }, { "type": "Image", "props": { "width": 36, "skin": "img/main/fangkuai@2x.png", "name": "d", "height": 16, "bottom": 0 } }] }, { "type": "Label", "props": { "y": 706, "x": 312, "width": 240, "var": "href_ysfw", "valign": "middle", "text": "隐私及服务条款", "padding": "0", "height": 34, "fontSize": 24, "color": "#598ADA", "align": "left" } }, { "type": "Button", "props": { "y": 838, "x": 10, "width": 708, "var": "btn_create", "stateNum": 1, "skin": "img/main/anliu@2x.png", "sizeGrid": "0,0,0,0", "labelSize": 32, "labelColors": "#ffffff", "label": "创建钱包", "height": 80, "disabled": true, "centerX": 0 } }] };
        return WalletCreateUI;
    }(View));
    ui.WalletCreateUI = WalletCreateUI;
})(ui || (ui = {}));
(function (ui) {
    var WalletDetailUI = /** @class */ (function (_super) {
        __extends(WalletDetailUI, _super);
        function WalletDetailUI() {
            return _super.call(this) || this;
        }
        WalletDetailUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.WalletDetailUI.uiView);
        };
        WalletDetailUI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Rect", "props": { "y": 0, "x": 0, "width": 750, "height": 216, "fillColor": "#598ADA" } }, { "type": "Button", "props": { "y": 40, "x": 30, "width": 65, "var": "btn_back", "stateNum": 1, "skin": "img/main/back@2x.png", "labelSize": 22, "labelColors": "#057AFB,#057AFB,#7EB9FB", "height": 65 } }, { "type": "Label", "props": { "y": 40, "x": 353, "var": "lab_wName", "valign": "middle", "text": "myeth", "height": 44, "fontSize": 32, "color": "#ffffff", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "var": "btn_save", "valign": "middle", "top": 40, "text": "保存", "right": 30, "height": 40, "fontSize": 28, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 282, "width": 67, "var": "lab_total", "valign": "middle", "text": "0 ¥", "height": 40, "fontSize": 28, "color": "#163853", "centerX": 0, "align": "center" } }, { "type": "Image", "props": { "y": 172, "width": 88, "var": "img_wImg", "skin": "img/main/wd@2x.png", "height": 88, "centerX": 0 } }, { "type": "Label", "props": { "y": 332, "var": "lab_wAddr", "valign": "middle", "text": "52s5c2d6...3625x15d", "right": 0, "left": 0, "height": 40, "fontSize": 28, "color": "#8E979F", "align": "center" } }, { "type": "Label", "props": { "y": 516, "x": 30, "valign": "middle", "text": "钱包名称", "height": 40, "fontSize": 28, "color": "#163853", "align": "center" } }, { "type": "TextInput", "props": { "y": 556, "width": 478, "var": "text_wName", "text": "myeth", "left": 30, "height": 40, "fontSize": 28, "color": "#163853" }, "child": [{ "type": "Image", "props": { "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": 0 } }] }, { "type": "Box", "props": { "y": 644, "var": "box_reverpass", "right": 0, "left": 0, "height": 50, "disabled": true }, "child": [{ "type": "Label", "props": { "width": 191, "valign": "middle", "text": "修改密码", "left": 30, "height": 40, "fontSize": 28, "color": "#163853", "centerY": 0, "align": "left" } }, { "type": "Image", "props": { "skin": "img/main/next@2x.png", "right": 20, "centerY": 0 } }] }, { "type": "Box", "props": { "y": 764, "var": "box_expSeckey", "right": 0, "left": 0, "height": 50, "disabled": true }, "child": [{ "type": "Label", "props": { "width": 233, "valign": "middle", "text": "导出私钥", "left": 30, "height": 40, "fontSize": 28, "color": "#163853", "centerY": 0, "align": "left" } }, { "type": "Image", "props": { "skin": "img/main/next@2x.png", "right": 20, "centerY": 0 } }] }, { "type": "Box", "props": { "y": 884, "var": "box_expKeystore", "right": 0, "left": 0, "height": 50, "disabled": true }, "child": [{ "type": "Label", "props": { "width": 203, "valign": "middle", "text": "导出Keystore", "left": 30, "height": 44, "fontSize": 28, "color": "#163853", "centerY": 0, "align": "left" } }, { "type": "Image", "props": { "skin": "img/main/next@2x.png", "right": 20, "centerY": 0 } }] }, { "type": "Button", "props": { "var": "btn_backup", "stateNum": 1, "skin": "img/main/anliu@2x.png", "sizeGrid": "0,0,0,0", "right": 30, "left": 30, "labelSize": 32, "labelColors": "#ffffff", "label": "备份助记词", "height": 80, "bottom": 172 } }, { "type": "Button", "props": { "var": "btn_delete", "stateNum": 1, "skin": "img/main/anliu-@2x.png", "sizeGrid": "0,0,0,0", "right": 30, "left": 30, "labelSize": 32, "labelColors": "#ffffff", "label": "删除钱包", "height": 80, "bottom": 60 } }] };
        return WalletDetailUI;
    }(View));
    ui.WalletDetailUI = WalletDetailUI;
})(ui || (ui = {}));
(function (ui) {
    var WalletMainUI = /** @class */ (function (_super) {
        __extends(WalletMainUI, _super);
        function WalletMainUI() {
            return _super.call(this) || this;
        }
        WalletMainUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.WalletMainUI.uiView);
        };
        WalletMainUI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "img/main/e@2x.png", "right": 0, "left": 0, "height": 544 } }, { "type": "Image", "props": { "y": 80, "width": 120, "skin": "img/main/touxiang@2x.png", "height": 120, "centerX": 0 } }, { "type": "Label", "props": { "y": 225, "var": "lab_wName", "text": "我的钱包名称", "height": 40, "fontSize": 32, "color": "#ffffff", "centerX": 0 } }, { "type": "Label", "props": { "y": 288, "width": 368, "var": "lab_wAddr", "valign": "middle", "text": "AAAAAAAA......AAAAAAAA", "overflow": "hidden", "height": 44, "fontSize": 28, "color": "#ffffff", "centerX": -61, "align": "right" } }, { "type": "Label", "props": { "y": 480, "x": 30, "width": 565, "valign": "middle", "text": "总资产( ¥ )", "height": 44, "fontSize": 24, "color": "#000000" } }, { "type": "Label", "props": { "y": 398, "width": 518, "var": "lab_total", "valign": "middle", "text": "0", "left": 75, "height": 80, "fontSize": 56, "color": "#000000", "align": "left" } }, { "type": "Image", "props": { "y": 283, "x": 496, "width": 67, "var": "btn_owner_info", "skin": "img/main/erweima@2x.png", "height": 60 } }, { "type": "Image", "props": { "y": 429, "width": 88, "var": "btn_addCoin", "skin": "img/main/tj@2x.png", "sizeGrid": "0,0,0,0", "right": 30, "height": 88 } }, { "type": "Image", "props": { "width": 60, "var": "btn_more", "top": 60, "skin": "img/main/mr@2x.png", "right": 30, "height": 60 } }, { "type": "List", "props": { "width": 750, "var": "list_wallet", "top": 544, "spaceY": 5, "selectEnable": true, "right": 0, "repeatX": 1, "left": 0, "height": 844, "bottom": 96 }, "child": [{ "type": "Box", "props": { "right": 0, "name": "render", "left": 0, "height": 150 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "template/List/SimpleListBoxItemBackground.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "x": 28, "width": 80, "var": "cImg", "skin": "img/main/qb@2x.png", "name": "cImg", "height": 80, "centerY": 0 } }, { "type": "Label", "props": { "x": 114, "width": 300, "var": "cName", "text": "label", "skin": "template/List/label.png", "name": "cName", "height": 48, "fontSize": 40, "color": "#100E28", "centerY": 0 } }, { "type": "Label", "props": { "var": "cTotal", "valign": "middle", "text": "第三方士大夫", "right": 30, "name": "cTotal", "height": 40, "fontSize": 40, "color": "#100E28", "centerY": -13, "align": "right" } }, { "type": "Label", "props": { "var": "cValue", "valign": "middle", "text": "不晓得官方", "right": 30, "name": "cValue", "height": 44, "fontSize": 24, "color": "#8E979F", "bottom": 5, "align": "right" } }] }] }, { "type": "Button", "props": { "x": 155, "width": 72, "var": "btn_assets", "stateNum": 1, "skin": "img/main/zichan@2x.png", "sizeGrid": "0,0,-80,0", "name": "item1", "labelSize": 20, "labelPadding": "30", "labelColors": "#598ADA", "label": "资产", "height": 88, "bottom": 8 } }, { "type": "Button", "props": { "x": 473, "width": 72, "var": "btn_me", "stateNum": 1, "skin": "img/main/wode@2x.png", "sizeGrid": "0,0,-80,0", "name": "item2", "labelSize": 20, "labelPadding": "30", "labelColors": "#B0BBC4", "label": "我的", "height": 88, "bottom": 8 } }, { "type": "Label", "props": { "y": 398, "width": 40, "valign": "middle", "text": "≈", "left": 30, "height": 80, "fontSize": 56, "color": "#000000", "align": "left" } }] };
        return WalletMainUI;
    }(View));
    ui.WalletMainUI = WalletMainUI;
})(ui || (ui = {}));
(function (ui) {
    var WalletManageUI = /** @class */ (function (_super) {
        __extends(WalletManageUI, _super);
        function WalletManageUI() {
            return _super.call(this) || this;
        }
        WalletManageUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.WalletManageUI.uiView);
        };
        WalletManageUI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Rect", "props": { "y": 0, "x": 0, "width": 750, "lineWidth": 1, "height": 1334, "fillColor": "#F3F3F4" } }, { "type": "Box", "props": { "y": 0, "right": 0, "left": 0, "height": 128 }, "child": [{ "type": "Rect", "props": { "y": 0, "x": 0, "width": 750, "lineWidth": 1, "height": 128, "fillColor": "#ffffff" } }, { "type": "Image", "props": { "x": 30, "width": 65, "var": "btn_goback", "skin": "img/main/back@2x.png", "height": 65, "centerY": 0 } }, { "type": "Label", "props": { "x": 310, "valign": "middle", "text": "管理钱包", "height": 40, "fontSize": 32, "color": "#163853", "centerY": 0, "centerX": 0, "bold": true, "align": "center" } }] }, { "type": "List", "props": { "var": "list_wallet", "top": 156, "spaceY": 28, "selectEnable": true, "right": 0, "repeatX": 1, "left": 0, "bottom": 88 }, "child": [{ "type": "Box", "props": { "right": 0, "renderType": "render", "name": "render", "left": 0, "height": 280 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "img/main/white.jpg", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 67, "x": 60, "width": 60, "var": "img_wallet", "skin": "img/main/wd@2x.png", "name": "img_wallet", "height": 60 } }, { "type": "Label", "props": { "y": 56, "x": 154, "width": 170, "var": "lab_wName", "valign": "middle", "text": "ETH", "skin": "template/List/label.png", "name": "lab_wName", "height": 40, "fontSize": 30, "color": "#163853", "align": "left" } }, { "type": "Label", "props": { "y": 104, "x": 154, "width": 560, "var": "lab_wAddr", "valign": "middle", "text": "035dx5dx...", "skin": "template/List/label.png", "name": "lab_wAddr", "height": 30, "fontSize": 26, "color": "#8E979F", "align": "left" } }, { "type": "Image", "props": { "y": 60, "width": 32, "skin": "img/main/next@2x.png", "right": 20, "height": 32 } }, { "type": "Label", "props": { "var": "lab_wTotal", "valign": "middle", "text": "0 ¥", "skin": "template/List/label.png", "right": 25, "name": "lab_wTotal", "left": 60, "height": 55, "fontSize": 28, "color": "#163853", "bottom": 39, "align": "right" } }, { "type": "Image", "props": { "y": 155, "skin": "img/main/itemSepar.png", "right": 20, "left": 60, "height": 1 } }] }] }, { "type": "Button", "props": { "y": 1274, "x": 0, "width": 375, "var": "btn_create", "stateNum": 1, "skin": "img/main/img_blue1.png", "labelSize": 32, "labelColors": "#ffffff", "labelAlign": "center", "label": "创建钱包", "height": 88, "bottom": 0 } }, { "type": "Button", "props": { "y": 1274, "x": 375, "width": 375, "var": "btn_import", "stateNum": 1, "skin": "img/main/img_blue2.png", "mouseEnabled": true, "layoutEnabled": true, "labelSize": 32, "labelColors": "#ffffff", "label": "导入钱包", "height": 88, "bottom": 0 } }] }] };
        return WalletManageUI;
    }(View));
    ui.WalletManageUI = WalletManageUI;
})(ui || (ui = {}));
(function (ui) {
    var WalletMeUI = /** @class */ (function (_super) {
        __extends(WalletMeUI, _super);
        function WalletMeUI() {
            return _super.call(this) || this;
        }
        WalletMeUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.WalletMeUI.uiView);
        };
        WalletMeUI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "width": 68, "top": 30, "skin": "img/main/sz@2x.png", "right": 30, "height": 68 } }, { "type": "Image", "props": { "y": 172, "x": 60, "width": 58, "skin": "img/main/wd@2x.png", "height": 58 } }, { "type": "Label", "props": { "y": 172, "x": 146, "valign": "middle", "text": "欢迎来到WWEC Wallet", "height": 56, "fontSize": 40, "color": "#163853", "bold": true, "align": "left" } }] }, { "type": "Box", "props": { "y": 340, "width": 750, "var": "btn_manageWal", "right": 0, "left": 0, "height": 60 }, "child": [{ "type": "Image", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "x": 54, "width": 56, "skin": "img/main/glqb@2x.png", "height": 56, "centerY": 0 } }, { "type": "Label", "props": { "x": 138, "width": 445, "valign": "middle", "text": "管理钱包", "skin": "template/List/label.png", "height": 44, "fontSize": 32, "color": "#163853", "centerY": 0, "bold": true, "align": "left" } }, { "type": "Image", "props": { "width": 32, "skin": "img/main/next@2x.png", "right": 42, "height": 32, "centerY": 0 } }] }, { "type": "Box", "props": { "y": 430, "var": "btn_dealHistory", "right": 0, "left": 0, "height": 60 }, "child": [{ "type": "Image", "props": { "top": 0, "right": 0, "left": 0, "bottom": -1 } }, { "type": "Image", "props": { "x": 54, "width": 56, "skin": "img/main/jyjl@2x.png", "height": 56, "centerY": 0 } }, { "type": "Label", "props": { "x": 138, "width": 445, "valign": "middle", "text": "交易记录", "skin": "template/List/label.png", "height": 44, "fontSize": 32, "color": "#163853", "centerY": 0, "bold": true, "align": "left" } }, { "type": "Image", "props": { "width": 32, "skin": "img/main/next@2x.png", "right": 42, "height": 32, "centerY": 0 } }] }, { "type": "Box", "props": { "y": 520, "x": 20, "var": "btn_lqtg", "right": 0, "left": 0, "height": 60, "disabled": false }, "child": [{ "type": "Image", "props": { "top": 0, "right": 0, "left": 0, "bottom": -1 } }, { "type": "Image", "props": { "x": 54, "width": 56, "skin": "img/main/tglq@2x.png", "height": 56, "centerY": 0 } }, { "type": "Label", "props": { "x": 138, "width": 445, "valign": "middle", "text": "糖果领取", "skin": "template/List/label.png", "height": 44, "fontSize": 32, "color": "#163853", "centerY": 0, "bold": true, "align": "left" } }, { "type": "Image", "props": { "width": 32, "skin": "img/main/next@2x.png", "right": 42, "height": 32, "centerY": 0 } }] }, { "type": "Box", "props": { "y": 610, "x": 30, "var": "btn_helpus", "right": 0, "left": 0, "height": 60, "disabled": true }, "child": [{ "type": "Image", "props": { "top": 0, "right": 0, "left": 0, "bottom": -1 } }, { "type": "Image", "props": { "x": 54, "width": 56, "skin": "img/main/bzwm@2x.png", "height": 56, "centerY": 0 } }, { "type": "Label", "props": { "x": 138, "width": 445, "valign": "middle", "text": "帮助我们", "skin": "template/List/label.png", "height": 44, "fontSize": 32, "color": "#163853", "centerY": 0, "bold": true, "align": "left" } }, { "type": "Image", "props": { "width": 32, "skin": "img/main/next@2x.png", "right": 42, "height": 32, "centerY": 0 } }] }, { "type": "Box", "props": { "y": 700, "x": 40, "var": "btn_about", "right": 0, "left": 0, "height": 60 }, "child": [{ "type": "Image", "props": { "top": 0, "right": 0, "left": 0, "bottom": -1 } }, { "type": "Image", "props": { "x": 54, "width": 56, "skin": "img/main/gywm@2x.png", "height": 56, "centerY": 0 } }, { "type": "Label", "props": { "x": 138, "width": 445, "valign": "middle", "text": "关于我们", "skin": "template/List/label.png", "height": 44, "fontSize": 32, "color": "#163853", "centerY": 0, "bold": true, "align": "left" } }, { "type": "Image", "props": { "width": 32, "skin": "img/main/next@2x.png", "right": 42, "height": 32, "centerY": 0 } }] }, { "type": "Button", "props": { "y": 1238, "x": 155, "width": 72, "var": "btn_assets", "stateNum": 1, "skin": "img/main/zichan-@2x.png", "sizeGrid": "0,0,-80,0", "labelSize": 20, "labelPadding": "35", "labelColors": "#B0BBC4", "label": "资产", "height": 88, "bottom": 8 } }, { "type": "Button", "props": { "y": 1238, "x": 473, "width": 72, "var": "btn_me", "stateNum": 1, "skin": "img/main/wo. de-@2x.png", "sizeGrid": "0,0,-80,0", "name": "item2", "labelSize": 20, "labelPadding": "35", "labelColors": "#598ADA", "label": "我的", "height": 88, "bottom": 8 } }] };
        return WalletMeUI;
    }(View));
    ui.WalletMeUI = WalletMeUI;
})(ui || (ui = {}));
(function (ui) {
    var WalletQuickUI = /** @class */ (function (_super) {
        __extends(WalletQuickUI, _super);
        function WalletQuickUI() {
            return _super.call(this) || this;
        }
        WalletQuickUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.WalletQuickUI.uiView);
        };
        WalletQuickUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 375, "height": 1334 }, "child": [{ "type": "Image", "props": { "var": "bg", "top": 0, "skin": "img/main/white.jpg", "right": 0, "left": 0, "bottom": 0 } }, { "type": "List", "props": { "var": "list_wallet", "top": 80, "spaceY": 15, "selectEnable": true, "right": 0, "repeatX": 1, "left": 0, "height": 320 }, "child": [{ "type": "Box", "props": { "right": 0, "name": "render", "left": 0, "height": 80 }, "child": [{ "type": "Image", "props": { "var": "img_bg", "top": 0, "skin": "img/main/white.jpg", "right": 0, "name": "img_bg", "left": 0, "bottom": -1 } }, { "type": "Image", "props": { "x": 30, "width": 56, "var": "img_wallet", "skin": "img/main/wode@2x.png", "name": "img_wallet", "height": 56, "centerY": 0 } }, { "type": "Label", "props": { "y": 19, "x": 100, "width": 215, "var": "lab_wName", "valign": "middle", "text": "label", "skin": "template/List/label.png", "name": "lab_wName", "height": 50, "fontSize": 28, "color": "#687076", "align": "left" } }] }] }, { "type": "Box", "props": { "x": 0, "var": "box_btns", "top": 460, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "img_spe", "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "height": 2 } }, { "type": "Image", "props": { "y": 10, "width": 56, "skin": "img/main/sys@2x.png", "left": 30, "height": 56 } }, { "type": "Label", "props": { "y": 10, "x": 100, "var": "lab_sao", "valign": "middle", "text": "扫一扫", "height": 56, "fontSize": 28, "color": "#687076", "align": "left" } }, { "type": "Image", "props": { "y": 90, "width": 56, "skin": "img/main/qb@2x.png", "left": 30, "height": 56 } }, { "type": "Label", "props": { "y": 90, "x": 100, "var": "lab_create", "valign": "middle", "text": "创建钱包", "height": 56, "fontSize": 28, "color": "#687076", "align": "left" } }] }] };
        return WalletQuickUI;
    }(Dialog));
    ui.WalletQuickUI = WalletQuickUI;
})(ui || (ui = {}));
(function (ui) {
    var WalletReceiveUI = /** @class */ (function (_super) {
        __extends(WalletReceiveUI, _super);
        function WalletReceiveUI() {
            return _super.call(this) || this;
        }
        WalletReceiveUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.WalletReceiveUI.uiView);
        };
        WalletReceiveUI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Rect", "props": { "width": 750, "lineWidth": 1, "height": 224, "fillColor": "#598ADA" } }, { "type": "Button", "props": { "y": 40, "x": 40, "width": 65, "var": "btn_goback", "stateNum": 1, "skin": "img/main/xx@2x.png", "labelSize": 22, "labelColors": "#057AFB,#057AFB,#7EB9FB", "height": 65 } }, { "type": "Label", "props": { "y": 48, "x": 343, "valign": "middle", "text": "收款", "strokeColor": "#f9f9f9", "skin": "template/Navigator/label.png", "height": 44, "fontSize": 32, "color": "#ffffff", "centerX": 0, "align": "center" } }, { "type": "Image", "props": { "y": 180, "x": 331, "width": 88, "skin": "img/main/wd@2x.png", "height": 88, "centerX": 0 } }, { "type": "Button", "props": { "y": 40, "width": 120, "var": "btn_share", "stateNum": 1, "skin": "img/main/fenxiang@2x.png", "sizeGrid": "0,-120,0,0", "right": 40, "labelSize": 24, "labelPadding": "0,0,0,30", "labelColors": "#ffffff", "label": "分享", "height": 60, "disabled": true } }, { "type": "TextInput", "props": { "y": 308, "wordWrap": true, "var": "lab_wAddr", "valign": "middle", "text": "0x098373B3863c1ca7862b4786c13611a71e2BB682", "right": 0, "overflow": "scroll", "left": 0, "layoutEnabled": true, "height": 40, "fontSize": 24, "editable": false, "color": "#8E979F", "align": "center" } }, { "type": "Image", "props": { "width": 500, "var": "img_wAddr", "height": 500, "centerY": 127, "centerX": 0 } }, { "type": "Label", "props": { "y": 1000, "visible": false, "valign": "middle", "text": "复制地址", "right": 0, "left": 0, "height": 80, "fontSize": 32, "color": "#8E979F", "align": "center" } }, { "type": "TextInput", "props": { "y": 390, "wordWrap": true, "var": "text_amount", "valign": "middle", "type": "number", "right": 100, "promptColor": "#163853", "prompt": "请输入金额", "overflow": "scroll", "left": 100, "layoutEnabled": true, "height": 40, "fontSize": 24, "color": "#163853", "align": "left" }, "child": [{ "type": "Image", "props": { "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": 0 } }] }, { "type": "Label", "props": { "y": 451, "visible": false, "var": "warn_amount", "text": "请输入合法的金额", "right": 100, "height": 30, "fontSize": 24, "color": "#ff0400", "align": "right" } }, { "type": "Button", "props": { "y": 1134, "var": "btn_copy", "stateNum": 1, "skin": "img/main/anliu@2x.png", "right": 40, "left": 40, "labelSize": 32, "labelColors": "#ffffff", "label": "复制地址", "height": 80 } }] }] };
        return WalletReceiveUI;
    }(View));
    ui.WalletReceiveUI = WalletReceiveUI;
})(ui || (ui = {}));
(function (ui) {
    var WalletSendUI = /** @class */ (function (_super) {
        __extends(WalletSendUI, _super);
        function WalletSendUI() {
            return _super.call(this) || this;
        }
        WalletSendUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.WalletSendUI.uiView);
        };
        WalletSendUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Label", "props": { "y": 30, "x": 355, "width": 87, "var": "lab_coin_name", "valign": "middle", "top": 66, "text": "ETH", "height": 60, "fontSize": 32, "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 30, "x": 283, "width": 70, "valign": "middle", "top": 66, "text": "转账", "height": 60, "fontSize": 32, "color": "#000000", "align": "center" } }, { "type": "TextInput", "props": { "y": 220, "var": "text_addr", "right": 30, "prompt": "收款人账户地址", "maxChars": 42, "left": 30, "layoutEnabled": true, "height": 80, "fontSize": 28 } }, { "type": "TextInput", "props": { "y": 360, "var": "text_amount", "type": "number", "right": 30, "prompt": "转账金额", "maxChars": 30, "left": 30, "layoutEnabled": true, "height": 80, "fontSize": 28 } }, { "type": "Button", "props": { "y": 379, "x": 0, "var": "btn_next", "stateNum": 1, "skin": "img/main/bfqb@2x.png", "sizeGrid": "0,0,0,0", "right": 0, "left": 0, "labelSize": 28, "labelColors": "#ffffff", "labelAlign": "center", "label": "下一步", "height": 88, "bottom": 0 } }, { "type": "Image", "props": { "width": 60, "var": "btn_sys", "top": 30, "skin": "img/main/sys@2x.png", "right": 30, "height": 60 } }, { "type": "Button", "props": { "y": 30, "x": 30, "width": 65, "var": "btn_goback", "stateNum": 1, "skin": "img/main/back@2x.png", "labelSize": 22, "labelColors": "#057AFB,#057AFB,#7EB9FB", "height": 65 } }, { "type": "Label", "props": { "y": 310, "width": 491, "visible": false, "var": "warn_Addr", "text": "地址不正确", "right": 30, "height": 35, "fontSize": 18, "color": "#ff0400", "align": "right" } }, { "type": "Label", "props": { "y": 450, "width": 440, "visible": false, "var": "warn_amount", "text": "请输入正确的金额", "right": 30, "height": 40, "fontSize": 18, "color": "#ff0400", "align": "right" } }] };
        return WalletSendUI;
    }(View));
    ui.WalletSendUI = WalletSendUI;
})(ui || (ui = {}));
(function (ui) {
    var WalletSendSubmitUI = /** @class */ (function (_super) {
        __extends(WalletSendSubmitUI, _super);
        function WalletSendSubmitUI() {
            return _super.call(this) || this;
        }
        WalletSendSubmitUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.WalletSendSubmitUI.uiView);
        };
        WalletSendSubmitUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Button", "props": { "y": 40, "x": 30, "width": 65, "var": "btn_goback", "stateNum": 1, "skin": "img/main/xx@2x.png", "labelSize": 22, "labelColors": "#057AFB,#057AFB,#7EB9FB", "height": 65 } }, { "type": "Label", "props": { "y": 48, "x": 162, "width": 204, "var": "coin_type", "valign": "middle", "text": "ETH", "strokeColor": "#f9f9f9", "skin": "template/Navigator/label.png", "height": 44, "fontSize": 32, "color": "#163853", "align": "right" } }, { "type": "TextInput", "props": { "y": 131, "text": "收款人账户地址", "right": 20, "maxChars": 30, "left": 30, "layoutEnabled": true, "height": 40, "fontSize": 24, "editable": false, "color": "#8E979F" } }, { "type": "TextInput", "props": { "y": 270, "right": 20, "prompt": "发送人账户地址", "maxChars": 30, "left": 30, "layoutEnabled": true, "height": 40, "fontSize": 28, "editable": false, "color": "#8E979F" } }, { "type": "Label", "props": { "y": 410, "valign": "middle", "text": "转账金额 :", "left": 30, "height": 40, "fontSize": 28, "color": "#868686", "align": "left" } }, { "type": "TextInput", "props": { "y": 180, "var": "text_to", "text": "0x098373B3863c1ca7862b4786c13611a71e2BB682", "right": 20, "maxChars": 42, "left": 30, "layoutEnabled": true, "height": 40, "fontSize": 28, "editable": false, "color": "#8E979F", "align": "left" }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": 0 } }] }, { "type": "TextInput", "props": { "y": 320, "var": "text_from", "text": "0x098373B3863c1ca7862b4786c13611a71e2BB682", "right": 20, "prompt": "发送人账户地址", "overflow": "scroll", "maxChars": 42, "left": 30, "layoutEnabled": true, "height": 40, "fontSize": 29, "editable": false, "color": "#8E979F", "align": "left" } }, { "type": "Button", "props": { "var": "btn_submit", "stateNum": 1, "skin": "img/main/bfqb@2x.png", "sizeGrid": "0,0,0,0", "right": 0, "left": 0, "labelSize": 32, "labelColors": "#ffffff", "labelAlign": "center", "label": "提交", "height": 88, "bottom": 0 } }, { "type": "TextInput", "props": { "y": 410, "x": 177, "width": 532, "var": "send_amout", "valign": "middle", "type": "number", "text": "0", "maxChars": 30, "height": 40, "fontSize": 32, "editable": false, "color": "#8E979F", "align": "left" }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": 0 } }] }, { "type": "HSlider", "props": { "y": 550, "var": "sli_gas", "skin": "img/main/BackProgressBar.png", "sizeGrid": "0,15,0,15", "right": 30, "min": 10, "max": 200, "left": 30, "height": 50 } }, { "type": "Label", "props": { "y": 500, "text": "矿工费用(GWEI)", "left": 30, "height": 40, "fontSize": 28, "color": "#868686" } }, { "type": "Label", "props": { "y": 610, "var": "lab_slow", "text": "慢", "left": 30, "height": 30, "fontSize": 20, "color": "#868686" } }, { "type": "Label", "props": { "y": 610, "var": "lab_quick", "text": "快", "right": 30, "height": 30, "fontSize": 20, "color": "#868686" } }, { "type": "Label", "props": { "y": 680, "text": "最大交易手续费", "left": 30, "height": 30, "fontSize": 20, "color": "#8E979F" } }, { "type": "TextInput", "props": { "y": 680, "width": 154, "var": "lab_max_gas", "valign": "top", "text": "0.000021 ETH", "right": 30, "height": 30, "fontSize": 20, "editable": false, "color": "#8E979F", "align": "right" } }, { "type": "TextInput", "props": { "y": 710, "width": 248, "var": "lab_max_gas_usd", "valign": "middle", "text": "0.01 USD", "right": 30, "height": 30, "fontSize": 20, "editable": false, "color": "#8E979F", "align": "right" } }, { "type": "Label", "props": { "y": 780, "text": "总费用", "left": 30, "height": 30, "fontSize": 20, "color": "#8E979F" } }, { "type": "TextInput", "props": { "y": 780, "width": 194, "var": "lab_max_total", "valign": "top", "text": "1.000021 ETH", "right": 30, "height": 30, "fontSize": 20, "editable": false, "color": "#8E979F", "align": "right" } }, { "type": "TextInput", "props": { "y": 810, "width": 245, "var": "lab_max_total_usd", "valign": "middle", "text": "516.10 USD", "right": 30, "height": 30, "fontSize": 20, "editable": false, "color": "#8E979F", "align": "right" } }, { "type": "Label", "props": { "y": 48, "x": 393, "valign": "middle", "text": "转账", "strokeColor": "#f9f9f9", "skin": "template/Navigator/label.png", "height": 44, "fontSize": 32, "color": "#163853", "align": "left" } }] };
        return WalletSendSubmitUI;
    }(View));
    ui.WalletSendSubmitUI = WalletSendSubmitUI;
})(ui || (ui = {}));
(function (ui) {
    var WalletTransferUI = /** @class */ (function (_super) {
        __extends(WalletTransferUI, _super);
        function WalletTransferUI() {
            return _super.call(this) || this;
        }
        WalletTransferUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.WalletTransferUI.uiView);
        };
        WalletTransferUI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "height": 224 }, "child": [{ "type": "Rect", "props": { "y": 0, "x": 0, "width": 0, "height": 0, "fillColor": "#598ADA" } }, { "type": "Label", "props": { "y": 140, "x": 330, "valign": "middle", "text": "总资产(¥)", "fontSize": 22, "color": "#8E979F", "centerX": 1, "align": "center" } }, { "type": "Label", "props": { "y": 100, "x": 358, "var": "lab_coin_total", "valign": "middle", "text": "≈ 0", "height": 30, "fontSize": 24, "color": "#598ADA", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 38, "x": 343, "var": "lab_coin_name", "valign": "middle", "text": "ETH", "strokeColor": "#f9f9f9", "skin": "template/Navigator/label.png", "height": 44, "fontSize": 32, "color": "#163853", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 30, "x": 30, "width": 65, "var": "btn_goback", "stateNum": 1, "skin": "img/main/back@2x.png", "labelSize": 22, "labelColors": "#057AFB,#057AFB,#7EB9FB", "height": 65 } }] }, { "type": "List", "props": { "var": "list", "top": 224, "selectEnable": false, "right": 0, "left": 0, "bottom": 88 }, "child": [{ "type": "Box", "props": { "right": 0, "name": "render", "left": 0, "height": 120 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "template/List/SimpleListBoxItemBackground.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 32, "x": 30, "width": 56, "var": "img", "skin": "img/main/transfer_in.png", "name": "img", "height": 56, "centerY": 0 } }, { "type": "Label", "props": { "y": 0, "x": 100, "width": 400, "var": "lab_deal_name", "valign": "bottom", "text": "label", "skin": "template/List/label.png", "name": "lab_deal_name", "height": 60, "fontSize": 24, "color": "#163853", "align": "left" } }, { "type": "Label", "props": { "y": 60, "x": 100, "width": 400, "var": "lab_addr", "valign": "middle", "text": "label", "skin": "template/List/label.png", "name": "lab_addr", "height": 60, "fontSize": 20, "color": "#8E979F", "align": "left" } }, { "type": "Label", "props": { "y": 35, "x": 520, "width": 200, "var": "lab_amount", "valign": "middle", "text": "label", "skin": "template/List/label.png", "right": 30, "name": "lab_amount", "height": 50, "fontSize": 28, "color": "#FF516F", "centerY": 0, "align": "right" } }, { "type": "Image", "props": { "y": 119, "x": 0, "skin": "img/main/itemSepar.png", "right": 0, "left": 0, "bottom": 0 } }] }] }, { "type": "Button", "props": { "y": 1246, "x": 0, "width": 375, "var": "btn_send", "stateNum": 3, "skin": "img/main/img_blue1.png", "left": 0, "labelSize": 32, "labelColors": "#ffffff", "labelAlign": "center", "label": "转账", "height": 88, "bottom": 0 } }, { "type": "Button", "props": { "y": 1246, "x": 374, "var": "btn_receive", "stateNum": 1, "skin": "img/main/img_blue2.png", "right": 0, "left": 374, "labelSize": 32, "labelColors": "#ffffff", "labelAlign": "center", "label": "收款", "height": 88, "bottom": 0 } }] };
        return WalletTransferUI;
    }(View));
    ui.WalletTransferUI = WalletTransferUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map