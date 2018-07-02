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
        var EnterPassUI = /** @class */ (function (_super) {
            __extends(EnterPassUI, _super);
            function EnterPassUI() {
                return _super.call(this) || this;
            }
            EnterPassUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.alert.EnterPassUI.uiView);
            };
            EnterPassUI.uiView = {
                "type": "Dialog",
                "props": { "width": 200, "layoutEnabled": true, "height": 120 },
                "child": [{
                        "type": "Box",
                        "props": { "top": 0, "right": 0, "left": 0, "layoutEnabled": true, "bottom": 0 },
                        "child": [{
                                "type": "Image",
                                "props": {
                                    "top": -1,
                                    "skin": "template/Warn/alert_dialog.png",
                                    "right": 0,
                                    "left": 0,
                                    "layoutEnabled": true,
                                    "bottom": 0
                                }
                            }, {
                                "type": "TextInput",
                                "props": {
                                    "y": 40,
                                    "var": "text_pass",
                                    "type": "password",
                                    "right": 5,
                                    "prompt": "请输入密码",
                                    "left": 5,
                                    "layoutEnabled": true,
                                    "height": 30,
                                    "borderColor": "#c0c0c0",
                                    "bgColor": "#ffffff"
                                }
                            }, {
                                "type": "Button",
                                "props": {
                                    "y": 85,
                                    "x": 0,
                                    "width": 100,
                                    "var": "btn_cancel",
                                    "stateNum": 2,
                                    "skin": "template/Warn/btn_alert dialogLeftButton.png",
                                    "left": 0,
                                    "layoutEnabled": true,
                                    "labelSize": 16,
                                    "labelColors": "#3476CA,#E2E6E5,#E2E6E5",
                                    "label": "取消",
                                    "height": 35,
                                    "bottom": 0
                                }
                            }, {
                                "type": "Button",
                                "props": {
                                    "y": 85,
                                    "x": 100,
                                    "width": 100,
                                    "var": "btn_submit",
                                    "stateNum": 2,
                                    "skin": "template/Warn/btn_alert dialogRightButton.png",
                                    "right": 0,
                                    "layoutEnabled": true,
                                    "labelSize": 16,
                                    "labelColors": "#3476CA,#E2E6E5,#E2E6E5",
                                    "label": "确定",
                                    "height": 35,
                                    "bottom": 0
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "valign": "middle",
                                    "top": 0,
                                    "text": "请输入密码",
                                    "right": 0,
                                    "left": 0,
                                    "height": 30,
                                    "font": "SimHei",
                                    "color": "#000000",
                                    "align": "center"
                                }
                            }]
                    }]
            };
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
            ExportPriKeyUI.uiView = {
                "type": "Dialog",
                "props": { "y": 0, "x": 0, "width": 200, "height": 120 },
                "child": [{
                        "type": "Box",
                        "props": { "top": 0, "right": 0, "left": 0, "layoutEnabled": true, "bottom": 0 },
                        "child": [{
                                "type": "Image",
                                "props": {
                                    "top": 0,
                                    "skin": "template/Warn/alert_dialog.png",
                                    "right": 0,
                                    "left": 0,
                                    "layoutEnabled": true,
                                    "bottom": 0
                                }
                            }, {
                                "type": "TextArea",
                                "props": {
                                    "wordWrap": true,
                                    "var": "text_pKey",
                                    "type": "text",
                                    "top": 10,
                                    "right": 10,
                                    "padding": "10",
                                    "left": 10,
                                    "font": "SimHei",
                                    "editable": false,
                                    "color": "#000000",
                                    "bottom": 40,
                                    "bgColor": "#bbbbbb"
                                }
                            }, {
                                "type": "Button",
                                "props": {
                                    "var": "btn_copy",
                                    "skin": "img/blue.png",
                                    "right": 10,
                                    "left": 10,
                                    "label": "复制",
                                    "height": 30,
                                    "bottom": 5
                                }
                            }]
                    }]
            };
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
            IframeUI.uiView = {
                "type": "Dialog",
                "props": { "width": 375, "height": 667 },
                "child": [{
                        "type": "Image",
                        "props": { "top": 0, "skin": "img/main/white.jpg", "right": 0, "left": 0, "bottom": 0 }
                    }]
            };
            return IframeUI;
        }(Dialog));
        alert.IframeUI = IframeUI;
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
            WarnUI.uiView = {
                "type": "Dialog",
                "props": { "width": 690, "height": 648 },
                "child": [{
                        "type": "Box",
                        "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 },
                        "child": [{
                                "type": "Image",
                                "props": {
                                    "y": 0,
                                    "x": 0,
                                    "top": 0,
                                    "skin": "img/main/white.jpg",
                                    "right": 0,
                                    "left": 0,
                                    "bottom": 0
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 182,
                                    "var": "warn_title",
                                    "text": "备份失败",
                                    "height": 56,
                                    "fontSize": 40,
                                    "color": "#163853",
                                    "centerX": 0,
                                    "bold": true
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 254,
                                    "var": "warn_msg",
                                    "text": "请检查你的助记词",
                                    "height": 56,
                                    "fontSize": 32,
                                    "color": "#163853",
                                    "centerX": 0,
                                    "bold": false
                                }
                            }, {
                                "type": "Button",
                                "props": {
                                    "y": 458,
                                    "x": 141,
                                    "width": 408,
                                    "var": "btn_know",
                                    "stateNum": 1,
                                    "skin": "img/main/anliu@2x.png",
                                    "labelSize": 32,
                                    "label": "我知道了",
                                    "height": 80,
                                    "centerX": 0
                                }
                            }]
                    }]
            };
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
            WarnZjcUI.uiView = {
                "type": "Dialog",
                "props": { "width": 690, "height": 648 },
                "child": [{
                        "type": "Box",
                        "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 },
                        "child": [{
                                "type": "Image",
                                "props": {
                                    "y": 0,
                                    "x": 0,
                                    "top": 0,
                                    "skin": "img/main/white.jpg",
                                    "right": 0,
                                    "left": 0,
                                    "bottom": 0
                                }
                            }, {
                                "type": "Image",
                                "props": { "y": 44, "width": 112, "skin": "img/main/camera@2x.png", "height": 112, "centerX": 0 }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 182,
                                    "text": "请勿截图",
                                    "height": 56,
                                    "fontSize": 40,
                                    "color": "#163853",
                                    "centerX": 0,
                                    "bold": true
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 278,
                                    "x": 60,
                                    "valign": "middle",
                                    "text": "如果有人获取你的助记词将直接获取你的资产",
                                    "height": 44,
                                    "fontSize": 24,
                                    "color": "#687076",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 232,
                                    "x": 58,
                                    "valign": "middle",
                                    "text": "请抄写下来助记词并存放在安全的地方。",
                                    "height": 44,
                                    "fontSize": 24,
                                    "color": "#687076",
                                    "align": "left"
                                }
                            }, {
                                "type": "Button",
                                "props": {
                                    "y": 458,
                                    "width": 408,
                                    "var": "btn_know",
                                    "stateNum": 1,
                                    "skin": "img/main/anliu@2x.png",
                                    "labelSize": 32,
                                    "label": "我知道了",
                                    "height": 80,
                                    "centerX": 0
                                }
                            }]
                    }]
            };
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
            BackUpConfUI.uiView = {
                "type": "View",
                "props": { "width": 750, "height": 1334 },
                "child": [{
                        "type": "Image",
                        "props": {
                            "y": 54,
                            "x": 20,
                            "width": 60,
                            "var": "btn_back",
                            "skin": "img/main/back@2x.png",
                            "height": 60
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 62,
                            "valign": "middle",
                            "text": "备份助记词",
                            "height": 44,
                            "fontSize": 32,
                            "color": "#163853",
                            "centerX": 0,
                            "align": "center"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 198,
                            "x": 30,
                            "valign": "middle",
                            "text": "确认你的钱包助记词",
                            "height": 56,
                            "fontSize": 40,
                            "color": "#163853",
                            "bold": true,
                            "align": "center"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 274,
                            "x": 30,
                            "valign": "middle",
                            "text": "请按顺序点击助记词，以确认你的备份助记词",
                            "height": 44,
                            "fontSize": 24,
                            "color": "#687076",
                            "align": "left"
                        }
                    }, {
                        "type": "Button",
                        "props": {
                            "y": 874,
                            "width": 708,
                            "var": "btn_conf",
                            "stateNum": 1,
                            "skin": "img/main/anliu@2x.png",
                            "sizeGrid": "0,0,0,0",
                            "labelSize": 32,
                            "labelColors": "#ffffff",
                            "label": "确定",
                            "height": 80,
                            "disabled": false,
                            "centerX": 0
                        }
                    }, {
                        "type": "Box",
                        "props": { "y": 604, "x": 30, "width": 688, "var": "box_label", "height": 250 },
                        "child": [{
                                "type": "Label",
                                "props": {
                                    "y": 0,
                                    "width": 130,
                                    "valign": "middle",
                                    "text": "法法",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 0,
                                    "x": 146,
                                    "width": 130,
                                    "valign": "middle",
                                    "text": "法法",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 0,
                                    "x": 309,
                                    "width": 130,
                                    "valign": "middle",
                                    "text": "法法",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 0,
                                    "x": 500,
                                    "width": 130,
                                    "valign": "middle",
                                    "text": "法法",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 50,
                                    "x": 6,
                                    "width": 130,
                                    "valign": "middle",
                                    "text": "法法",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 50,
                                    "x": 161,
                                    "width": 130,
                                    "valign": "middle",
                                    "text": "法法",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 50,
                                    "x": 314,
                                    "width": 130,
                                    "valign": "middle",
                                    "text": "法法",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 50,
                                    "x": 469,
                                    "width": 130,
                                    "valign": "middle",
                                    "text": "法法",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 104,
                                    "x": 165,
                                    "valign": "middle",
                                    "text": "法法",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 104,
                                    "x": 13,
                                    "width": 100,
                                    "valign": "middle",
                                    "text": "法法",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 104,
                                    "x": 329,
                                    "width": 130,
                                    "valign": "middle",
                                    "text": "法法",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 104,
                                    "x": 515,
                                    "width": 130,
                                    "valign": "middle",
                                    "text": "法法",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }]
                    }, {
                        "type": "Box",
                        "props": { "y": 348, "width": 688, "var": "box_zjc", "height": 178, "centerX": 0 },
                        "child": [{
                                "type": "Rect",
                                "props": { "y": 0, "x": 0, "width": 690, "lineWidth": 1, "height": 180, "fillColor": "#ECECEC" }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 0,
                                    "x": 0,
                                    "width": 100,
                                    "valign": "middle",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 0,
                                    "x": 120,
                                    "width": 100,
                                    "valign": "middle",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 0,
                                    "x": 297,
                                    "width": 100,
                                    "valign": "middle",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 0,
                                    "x": 430,
                                    "width": 100,
                                    "valign": "middle",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 0,
                                    "x": 593,
                                    "width": 100,
                                    "valign": "middle",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 57,
                                    "x": 4,
                                    "width": 100,
                                    "valign": "middle",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 58,
                                    "width": 136,
                                    "valign": "middle",
                                    "left": 118,
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 63,
                                    "x": 284,
                                    "width": 100,
                                    "valign": "middle",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 62,
                                    "x": 424,
                                    "width": 100,
                                    "valign": "middle",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 55,
                                    "x": 564,
                                    "width": 100,
                                    "valign": "middle",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "x": 23,
                                    "width": 100,
                                    "valign": "middle",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "bottom": 0,
                                    "align": "left"
                                }
                            }, {
                                "type": "Label",
                                "props": {
                                    "x": 204,
                                    "width": 100,
                                    "valign": "middle",
                                    "height": 44,
                                    "fontSize": 28,
                                    "color": "#163853",
                                    "bottom": 0,
                                    "align": "left"
                                }
                            }]
                    }]
            };
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
            BackUpZjcUI.uiView = {
                "type": "View",
                "props": { "width": 750, "height": 1334 },
                "child": [{
                        "type": "Image",
                        "props": {
                            "y": 54,
                            "x": 20,
                            "width": 60,
                            "var": "btn_back",
                            "skin": "img/main/back@2x.png",
                            "height": 60
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 62,
                            "valign": "middle",
                            "text": "备份助记词",
                            "height": 44,
                            "fontSize": 32,
                            "color": "#163853",
                            "centerX": 0,
                            "align": "center"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 198,
                            "x": 30,
                            "valign": "middle",
                            "text": "抄写下你的钱包助记词",
                            "height": 56,
                            "fontSize": 40,
                            "color": "#163853",
                            "bold": true,
                            "align": "center"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 274,
                            "x": 30,
                            "valign": "middle",
                            "text": "助记词用于恢复钱包和充值钱包密码，将它准确的抄写到纸上，",
                            "height": 44,
                            "fontSize": 24,
                            "color": "#687076",
                            "align": "left"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 318,
                            "x": 26,
                            "valign": "middle",
                            "text": " 并存放在只有你知道的安全的地方。",
                            "height": 44,
                            "fontSize": 24,
                            "color": "#687076",
                            "align": "left"
                        }
                    }, {
                        "type": "Button",
                        "props": {
                            "y": 874,
                            "width": 708,
                            "var": "btn_backup",
                            "stateNum": 1,
                            "skin": "img/main/anliu@2x.png",
                            "sizeGrid": "0,0,0,0",
                            "labelSize": 32,
                            "labelColors": "#ffffff",
                            "label": "下一步",
                            "height": 80,
                            "centerX": 0
                        }
                    }, {
                        "type": "TextArea",
                        "props": {
                            "y": 418,
                            "wordWrap": true,
                            "width": 688,
                            "var": "text_zjc",
                            "text": "winga wingb wingcc wingd winge wingf wingg wingh wingi wingj wingk wingl",
                            "padding": "30",
                            "leading": 30,
                            "height": 152,
                            "fontSize": 28,
                            "editable": false,
                            "color": "#163853",
                            "centerX": 0,
                            "bgColor": "#ECECEC",
                            "align": "left"
                        }
                    }]
            };
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
            AddCoinsUI.uiView = {
                "type": "View",
                "props": { "width": 750, "visible": true, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 30,
                            "x": 10,
                            "valign": "middle",
                            "text": "添加新资产",
                            "strokeColor": "#f9f9f9",
                            "skin": "template/Navigator/label.png",
                            "height": 44,
                            "fontSize": 32,
                            "color": "#000000",
                            "centerX": 0,
                            "align": "center"
                        }
                    }, {
                        "type": "Button",
                        "props": {
                            "y": 30,
                            "x": 30,
                            "width": 60,
                            "var": "btn_goback",
                            "stateNum": 1,
                            "skin": "img/main/back@2x.png",
                            "labelSize": 22,
                            "labelColors": "#057AFB,#057AFB,#7EB9FB",
                            "height": 60
                        }
                    }, {
                        "type": "Button",
                        "props": {
                            "width": 30,
                            "var": "btn_query",
                            "top": 30,
                            "skin": "template/Search/btn_search_icon.png",
                            "right": 30,
                            "height": 30
                        }
                    }, {
                        "type": "List",
                        "props": {
                            "var": "listCoin",
                            "vScrollBarSkin": "template/List/vscroll.png",
                            "top": 100,
                            "right": 0,
                            "repeatX": 1,
                            "name": "listCoin",
                            "left": 0,
                            "bottom": 0
                        },
                        "child": [{
                                "type": "Box",
                                "props": { "right": 0, "name": "render", "left": 0, "height": 160 },
                                "child": [{
                                        "type": "Image",
                                        "props": {
                                            "top": 0,
                                            "skin": "template/List/SimpleListBoxItemBackground.png",
                                            "right": 0,
                                            "left": 0,
                                            "bottom": 0
                                        }
                                    }, {
                                        "type": "Image",
                                        "props": {
                                            "x": 28,
                                            "width": 78,
                                            "var": "cImg",
                                            "skin": "template/List/message icon_57x57.png",
                                            "name": "cImg",
                                            "height": 78,
                                            "centerY": 0
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "x": 150,
                                            "width": 300,
                                            "var": "cVender",
                                            "text": "cVender",
                                            "skin": "template/List/label.png",
                                            "name": "cVender",
                                            "height": 50,
                                            "fontSize": 36,
                                            "color": "#000000",
                                            "centerY": 0
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "x": 150,
                                            "width": 300,
                                            "var": "cName",
                                            "top": 0,
                                            "text": "cName",
                                            "skin": "template/List/label.png",
                                            "name": "cName",
                                            "height": 50,
                                            "fontSize": 36
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "x": 150,
                                            "width": 300,
                                            "var": "cAddr",
                                            "text": "cAddr",
                                            "skin": "template/List/label.png",
                                            "name": "cAddr",
                                            "height": 50,
                                            "fontSize": 36,
                                            "bottom": 0
                                        }
                                    }, {
                                        "type": "CheckBox",
                                        "props": {
                                            "var": "cCheckbox",
                                            "stateNum": 2,
                                            "skin": "template/Switcher/checkbox_switch.png",
                                            "right": 30,
                                            "name": "cCheckbox",
                                            "centerY": 0
                                        }
                                    }]
                            }]
                    }]
            };
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
            queryCoinsUI.uiView = {
                "type": "View",
                "props": { "width": 750, "height": 1344 },
                "child": [{ "type": "Box", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 } }, {
                        "type": "Image",
                        "props": { "width": 60, "top": 30, "skin": "img/main/search@2x.png", "left": 30, "height": 60 }
                    }, {
                        "type": "Label",
                        "props": { "top": 30, "text": "取消", "right": 30, "height": 44, "fontSize": 32 }
                    }, {
                        "type": "TextInput",
                        "props": {
                            "var": "text_search",
                            "top": 30,
                            "right": 100,
                            "promptColor": "#8E979F",
                            "prompt": "搜索Token名称或合约地址",
                            "left": 100,
                            "height": 44
                        }
                    }, {
                        "type": "Image",
                        "props": { "top": 74, "skin": "img/main/itemSepar.png", "right": 100, "left": 100 }
                    }, {
                        "type": "Box",
                        "props": { "y": 350, "width": 200, "height": 230, "centerX": 0 },
                        "child": [{
                                "type": "Image",
                                "props": { "top": 0, "skin": "img/main/wjl@2x.png", "right": 0, "left": 0, "bottom": 30 }
                            }, {
                                "type": "Label",
                                "props": {
                                    "text": "暂无记录",
                                    "height": 30,
                                    "fontSize": 28,
                                    "color": "#687076",
                                    "centerX": 0,
                                    "bottom": 0
                                }
                            }]
                    }]
            };
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
        EnterAppUI.uiView = {
            "type": "View",
            "props": {
                "y": 0,
                "x": 0,
                "width": 750,
                "top": 0,
                "right": 0,
                "left": 0,
                "layoutEnabled": true,
                "height": 1334,
                "bottom": 0
            },
            "child": [{
                    "type": "Box",
                    "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 },
                    "child": [{
                            "type": "Image",
                            "props": { "visible": false, "top": 0, "right": 0, "left": 0, "bottom": 0 }
                        }, {
                            "type": "Image",
                            "props": {
                                "y": 230,
                                "width": 226,
                                "skin": "img/main/qianbaoicon@2x.png",
                                "height": 226,
                                "centerX": 0
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 510,
                                "valign": "middle",
                                "text": "WWEC TOKEN",
                                "height": 50,
                                "fontSize": 40,
                                "color": "#163853",
                                "centerX": 0,
                                "bold": true,
                                "align": "center"
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 584,
                                "valign": "middle",
                                "text": "您的数字钱包管家",
                                "height": 56,
                                "fontSize": 40,
                                "color": "#163853",
                                "centerX": 0,
                                "bold": true,
                                "align": "center"
                            }
                        }, {
                            "type": "Button",
                            "props": {
                                "y": 812,
                                "width": 690,
                                "var": "btn_create",
                                "stateNum": 1,
                                "skin": "img/main/anliu@2x.png",
                                "labelSize": 36,
                                "labelColors": "#ffffff",
                                "label": "创建钱包",
                                "height": 80,
                                "centerX": 0
                            }
                        }, {
                            "type": "Button",
                            "props": {
                                "y": 946,
                                "width": 690,
                                "var": "btn_import",
                                "stateNum": 1,
                                "skin": "img/main/anliu@2x.png",
                                "labelSize": 36,
                                "labelColors": "#ffffff",
                                "label": "导入钱包",
                                "height": 80,
                                "centerX": 0
                            }
                        }]
                }]
        };
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
        GuideUI.uiView = {
            "type": "View",
            "props": { "y": 0, "x": 0, "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
            "child": [{
                    "type": "Box",
                    "props": { "var": "item0", "top": 0, "right": 0, "name": "item0", "left": 0, "bottom": 0 },
                    "child": [{
                            "type": "Image",
                            "props": { "top": 0, "skin": "img/guide/bg.png", "right": 0, "left": 0, "bottom": 0 }
                        }, {
                            "type": "Image",
                            "props": { "width": 708, "top": 0, "skin": "img/guide/ydy_1.png", "left": 0, "height": 1254 }
                        }, {
                            "type": "Image",
                            "props": { "y": 1025, "skin": "img/guide/ydy_1_word.png", "right": 0, "left": 0, "height": 164 }
                        }, {
                            "type": "Box",
                            "props": { "y": 10, "x": 10, "right": 0, "left": 0, "height": 16, "bottom": 42 },
                            "child": [{
                                    "type": "Image",
                                    "props": { "x": 306, "width": 16, "skin": "img/guide/ty16_1.png", "height": 16 }
                                }, {
                                    "type": "Image",
                                    "props": { "x": 348, "width": 16, "skin": "img/guide/tu16.png", "height": 16 }
                                }, {
                                    "type": "Image",
                                    "props": { "x": 388, "width": 16, "skin": "img/guide/tu16.png", "height": 16 }
                                }, { "type": "Image", "props": { "x": 430, "width": 16, "skin": "img/guide/tu16.png", "height": 16 } }]
                        }]
                }, {
                    "type": "Box",
                    "props": {
                        "visible": false,
                        "var": "item1",
                        "top": 0,
                        "right": 0,
                        "name": "item1",
                        "left": 0,
                        "bottom": 0
                    },
                    "child": [{
                            "type": "Image",
                            "props": { "y": 0, "x": 0, "top": 0, "skin": "img/guide/bg.png", "right": 0, "left": 0, "bottom": 0 }
                        }, {
                            "type": "Image",
                            "props": { "y": 0, "x": 0, "width": 710, "skin": "img/guide/ydy_2.png", "height": 1314 }
                        }, {
                            "type": "Image",
                            "props": { "y": 1000, "width": 749, "skin": "img/guide/ydy_2_word.png", "left": 0, "height": 164 }
                        }, {
                            "type": "Box",
                            "props": { "y": 1276, "x": 0, "right": 0, "left": 0, "height": 16, "bottom": 42 },
                            "child": [{
                                    "type": "Image",
                                    "props": { "x": 306, "width": 16, "skin": "img/guide/tu16.png", "height": 16 }
                                }, {
                                    "type": "Image",
                                    "props": { "x": 348, "width": 16, "skin": "img/guide/ty16_1.png", "height": 16 }
                                }, {
                                    "type": "Image",
                                    "props": { "x": 388, "width": 16, "skin": "img/guide/tu16.png", "height": 16 }
                                }, { "type": "Image", "props": { "x": 430, "width": 16, "skin": "img/guide/tu16.png", "height": 16 } }]
                        }]
                }, {
                    "type": "Box",
                    "props": {
                        "visible": false,
                        "var": "item2",
                        "top": 0,
                        "right": 0,
                        "name": "item2",
                        "left": 0,
                        "bottom": 0
                    },
                    "child": [{
                            "type": "Image",
                            "props": { "y": 0, "x": 0, "top": 0, "skin": "img/guide/bg.png", "right": 0, "left": 0, "bottom": 0 }
                        }, {
                            "type": "Image",
                            "props": { "y": 0, "skin": "img/guide/ydy_3.png", "right": 0, "left": 0, "height": 1194 }
                        }, {
                            "type": "Image",
                            "props": { "y": 1000, "skin": "img/guide/ydy_3_word.png", "right": 0, "left": 0, "height": 164 }
                        }, {
                            "type": "Box",
                            "props": { "y": 1276, "x": 0, "right": 0, "left": 0, "height": 16, "bottom": 42 },
                            "child": [{
                                    "type": "Image",
                                    "props": { "x": 306, "width": 16, "skin": "img/guide/tu16.png", "height": 16 }
                                }, {
                                    "type": "Image",
                                    "props": { "x": 348, "width": 16, "skin": "img/guide/tu16.png", "height": 16 }
                                }, {
                                    "type": "Image",
                                    "props": { "x": 388, "width": 16, "skin": "img/guide/ty16_1.png", "height": 16 }
                                }, { "type": "Image", "props": { "x": 430, "width": 16, "skin": "img/guide/tu16.png", "height": 16 } }]
                        }]
                }, {
                    "type": "Box",
                    "props": {
                        "visible": false,
                        "var": "item3",
                        "top": 0,
                        "right": 0,
                        "name": "item3",
                        "left": 0,
                        "bottom": 0
                    },
                    "child": [{
                            "type": "Image",
                            "props": { "y": 0, "x": 0, "top": 0, "skin": "img/guide/bg.png", "right": 0, "left": 0, "bottom": 0 }
                        }, {
                            "type": "Image",
                            "props": { "y": 0, "x": 0, "width": 748, "skin": "img/guide/ydy_4.png", "height": 1252 }
                        }, {
                            "type": "Image",
                            "props": { "y": 1000, "skin": "img/guide/ydy_4_word.png", "right": 0, "left": 0, "height": 164 }
                        }, {
                            "type": "Image",
                            "props": {
                                "width": 266,
                                "var": "img_enter",
                                "skin": "img/guide/ljjr.png",
                                "height": 80,
                                "centerX": 0,
                                "bottom": 67
                            }
                        }]
                }]
        };
        return GuideUI;
    }(View));
    ui.GuideUI = GuideUI;
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
        LoginUI.uiView = {
            "type": "View",
            "props": { "y": 0, "x": 0, "width": 600, "height": 800 },
            "child": [{
                    "type": "Label",
                    "props": {
                        "width": 600,
                        "var": "lab_title",
                        "valign": "middle",
                        "top": 20,
                        "text": "登  录",
                        "left": 0,
                        "fontSize": 32,
                        "font": "SimHei",
                        "color": "#000000",
                        "align": "center"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "x": 55,
                        "width": 40,
                        "var": "lab_quit",
                        "top": 20,
                        "text": "X",
                        "height": 40,
                        "fontSize": 32,
                        "font": "SimSun",
                        "color": "#000000",
                        "align": "center"
                    }
                }, {
                    "type": "Line",
                    "props": { "y": 60, "x": 300, "toY": 1, "toX": 0, "lineWidth": 600, "lineColor": "#9f9f9f" }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 80,
                        "x": 55,
                        "text": "国家/地区",
                        "name": "lab_conArea",
                        "layoutEnabled": true,
                        "fontSize": 20,
                        "font": "SimHei",
                        "color": "#a6a6a6"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 80,
                        "x": 196,
                        "var": "lab_contury",
                        "text": "中国",
                        "name": "lab_contury",
                        "fontSize": 20,
                        "font": "SimHei",
                        "color": "#000000"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 80,
                        "x": 530,
                        "var": "lab_sele_contury",
                        "text": ">",
                        "name": "lab_sele_contury",
                        "fontSize": 20,
                        "font": "Arial",
                        "color": "#000000"
                    }
                }, {
                    "type": "Line",
                    "props": { "y": 115, "x": 300, "toY": 1, "toX": 0, "lineWidth": 500, "lineColor": "#9f9f9f" }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 130,
                        "x": 55,
                        "width": 490,
                        "var": "text_phoneNum",
                        "valign": "middle",
                        "type": "number",
                        "rotation": 0,
                        "prompt": "手机号码",
                        "overflow": "hidden",
                        "name": "text_phoneNum",
                        "maxChars": 11,
                        "layoutEnabled": true,
                        "hitTestPrior": true,
                        "height": 22,
                        "fontSize": 20,
                        "font": "SimHei",
                        "color": "#a6a6a6",
                        "align": "left"
                    }
                }, {
                    "type": "Line",
                    "props": { "y": 165, "x": 300, "toY": 1, "toX": 0, "lineWidth": 500, "lineColor": "#9f9f9f" }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 175,
                        "x": 55,
                        "width": 487,
                        "var": "text_password",
                        "valign": "middle",
                        "type": "password",
                        "prompt": "密码",
                        "name": "text_password",
                        "maxChars": 30,
                        "layoutEnabled": true,
                        "height": 22,
                        "fontSize": 20,
                        "font": "SimHei",
                        "color": "#a6a6a6",
                        "align": "left"
                    }
                }, {
                    "type": "Line",
                    "props": { "y": 209, "x": 300, "toY": 1, "toX": 0, "lineWidth": 500, "lineColor": "#9f9f9f" }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 236,
                        "x": 55,
                        "width": 500,
                        "stateNum": 3,
                        "skin": "comp/button.png",
                        "name": "btn_submit",
                        "label": "确    定",
                        "height": 37
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 292,
                        "x": 55,
                        "width": 500,
                        "skin": "comp/button.png",
                        "name": "btn_regist",
                        "label": "注    册",
                        "height": 36
                    }
                }]
        };
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
        MsgUI.uiView = {
            "type": "Dialog",
            "props": {
                "width": 300,
                "staticCache": true,
                "popupCenter": true,
                "layoutEnabled": true,
                "height": 429,
                "centerY": 0,
                "centerX": 0,
                "cacheAs": "normal"
            },
            "child": [{
                    "type": "Rect",
                    "props": { "y": 135, "x": 30, "width": 240, "lineWidth": 1, "height": 180, "fillColor": "#ffffff" }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 158,
                        "var": "lab_title",
                        "text": "系统提示",
                        "fontSize": 16,
                        "font": "SimHei",
                        "color": "#000000",
                        "centerX": 0,
                        "bold": true
                    }
                }, {
                    "type": "Line",
                    "props": { "y": 185, "x": 30, "toY": 0, "toX": 240, "lineWidth": 1, "lineColor": "#b9b9b9" }
                }, {
                    "type": "Text",
                    "props": {
                        "y": 195,
                        "x": 30,
                        "wordWrap": true,
                        "width": 240,
                        "var": "lab_msg",
                        "text": "你好附近的设计费血常规发大水发链接",
                        "height": 60,
                        "font": "SimHei",
                        "color": "#000000",
                        "align": "left"
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 263,
                        "width": 166,
                        "skin": "comp/button.png",
                        "name": "Dialog.CLOSE",
                        "label": "确定",
                        "height": 34,
                        "centerX": 0
                    }
                }, { "type": "Label", "props": { "text": "label" } }]
        };
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
            ExpKeystoreUI.uiView = {
                "type": "View",
                "props": { "y": 0, "x": 0, "width": 375, "layoutEnabled": true, "height": 667 },
                "child": [{
                        "type": "Rect",
                        "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 60 }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 10,
                            "x": 118,
                            "valign": "middle",
                            "top": 20,
                            "text": "导出 Keystore",
                            "height": 30,
                            "fontSize": 16,
                            "color": "#000000",
                            "centerX": 0,
                            "align": "center"
                        }
                    }, {
                        "type": "Button",
                        "props": {
                            "y": 10,
                            "x": 20,
                            "width": 117,
                            "var": "btn_back",
                            "top": 20,
                            "skin": "template/Navigator/btn_BackButton.png",
                            "height": 30
                        }
                    }, {
                        "type": "Image",
                        "props": { "y": 60, "x": 10, "skin": "img/itemSepar.png", "right": 0, "left": 0 }
                    }, {
                        "type": "Tab",
                        "props": {
                            "y": 60,
                            "var": "btn_tab",
                            "selectedIndex": 0,
                            "right": 0,
                            "left": 0,
                            "layoutEnabled": true,
                            "height": 40
                        },
                        "child": [{
                                "type": "Button",
                                "props": {
                                    "top": 0,
                                    "right": 150,
                                    "name": "item0",
                                    "left": 0,
                                    "labelSize": 16,
                                    "label": "Keystore 文件",
                                    "bottom": 0
                                }
                            }, {
                                "type": "Button",
                                "props": {
                                    "top": 0,
                                    "right": 0,
                                    "name": "item1",
                                    "left": 150,
                                    "labelSize": 16,
                                    "label": "二维码",
                                    "bottom": 0
                                }
                            }]
                    }, {
                        "type": "ViewStack",
                        "props": {
                            "var": "viewStack",
                            "top": 100,
                            "selectedIndex": 0,
                            "right": 0,
                            "mouseEnabled": true,
                            "left": 0,
                            "bottom": 0
                        },
                        "child": [{
                                "type": "Box",
                                "props": {
                                    "x": 0,
                                    "top": 0,
                                    "right": 0,
                                    "name": "item0",
                                    "left": 0,
                                    "layoutEnabled": true,
                                    "bottom": 0
                                },
                                "child": [{
                                        "type": "Label",
                                        "props": {
                                            "y": 0,
                                            "valign": "middle",
                                            "text": "离线保存",
                                            "right": 20,
                                            "left": 20,
                                            "height": 20,
                                            "color": "#108bbb",
                                            "align": "left"
                                        }
                                    }, {
                                        "type": "TextArea",
                                        "props": {
                                            "y": 25,
                                            "width": 260,
                                            "text": "离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存",
                                            "right": 20,
                                            "left": 20,
                                            "height": 35,
                                            "color": "#645a5a"
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 60,
                                            "x": 40,
                                            "valign": "middle",
                                            "text": "密码保险箱保存",
                                            "left": 20,
                                            "height": 20,
                                            "color": "#108bbb"
                                        }
                                    }, {
                                        "type": "TextArea",
                                        "props": {
                                            "y": 80,
                                            "x": 20,
                                            "width": 260,
                                            "text": "离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存",
                                            "right": 20,
                                            "left": 20,
                                            "height": 40,
                                            "color": "#645a5a"
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 120,
                                            "x": 20,
                                            "valign": "middle",
                                            "text": "请勿使用网络传输",
                                            "left": 20,
                                            "height": 20,
                                            "color": "#108bbb"
                                        }
                                    }, {
                                        "type": "TextArea",
                                        "props": {
                                            "y": 140,
                                            "x": 10,
                                            "width": 260,
                                            "text": "离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存",
                                            "right": 20,
                                            "left": 20,
                                            "height": 40,
                                            "color": "#645a5a"
                                        }
                                    }, {
                                        "type": "TextArea",
                                        "props": {
                                            "width": 335,
                                            "var": "text_keystore",
                                            "top": 180,
                                            "right": 20,
                                            "overflow": "scroll",
                                            "left": 20,
                                            "height": 280,
                                            "bottom": 90
                                        }
                                    }, {
                                        "type": "Button",
                                        "props": {
                                            "var": "btn_copy",
                                            "skin": "img/blue.png",
                                            "right": 20,
                                            "left": 20,
                                            "layoutEnabled": true,
                                            "label": "复制",
                                            "height": 60,
                                            "bottom": 27
                                        }
                                    }]
                            }, {
                                "type": "Box",
                                "props": {
                                    "x": 0,
                                    "var": "item1",
                                    "top": 0,
                                    "right": 0,
                                    "name": "item1",
                                    "left": 0,
                                    "layoutEnabled": true,
                                    "bottom": 0
                                },
                                "child": [{
                                        "type": "Label",
                                        "props": {
                                            "y": 0,
                                            "x": 20,
                                            "valign": "middle",
                                            "text": "仅供直接扫描",
                                            "right": 20,
                                            "left": 20,
                                            "height": 20,
                                            "color": "#108bbb",
                                            "align": "left"
                                        }
                                    }, {
                                        "type": "TextArea",
                                        "props": {
                                            "y": 25,
                                            "x": 20,
                                            "width": 260,
                                            "text": "离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存",
                                            "right": 20,
                                            "left": 20,
                                            "height": 40,
                                            "color": "#645a5a"
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 65,
                                            "x": 20,
                                            "valign": "middle",
                                            "text": "在安全环境下使用",
                                            "left": 20,
                                            "height": 20,
                                            "color": "#108bbb"
                                        }
                                    }, {
                                        "type": "TextArea",
                                        "props": {
                                            "y": 90,
                                            "x": 20,
                                            "width": 260,
                                            "text": "离线保存离线保存离线保存离线保存离线保存离线保存离线保存离线保存",
                                            "right": 20,
                                            "left": 20,
                                            "height": 40,
                                            "color": "#645a5a"
                                        }
                                    }, {
                                        "type": "Rect",
                                        "props": {
                                            "y": 214,
                                            "x": 112,
                                            "width": 150,
                                            "lineWidth": 1,
                                            "height": 150,
                                            "fillColor": "#a1a0a0"
                                        }
                                    }, {
                                        "type": "Image",
                                        "props": {
                                            "y": 220,
                                            "x": 117,
                                            "width": 140,
                                            "var": "img_keystore",
                                            "skin": "img/ewm.jpg",
                                            "height": 140
                                        }
                                    }]
                            }]
                    }]
            };
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
            UpdatePassUI.uiView = {
                "type": "View",
                "props": { "width": 375, "height": 667 },
                "child": [{
                        "type": "Rect",
                        "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 60 }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 10,
                            "x": 118,
                            "valign": "middle",
                            "top": 20,
                            "text": "更改密码",
                            "height": 30,
                            "fontSize": 16,
                            "color": "#000000",
                            "centerX": 0,
                            "align": "center"
                        }
                    }, {
                        "type": "Button",
                        "props": {
                            "y": 10,
                            "x": 20,
                            "width": 117,
                            "var": "btn_back",
                            "top": 20,
                            "skin": "template/Navigator/btn_BackButton.png",
                            "height": 30
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 10,
                            "x": 238,
                            "var": "lab_save",
                            "valign": "middle",
                            "top": 20,
                            "text": "保存",
                            "right": 20,
                            "height": 30,
                            "fontSize": 16,
                            "color": "#218d92",
                            "align": "center"
                        }
                    }, {
                        "type": "Image",
                        "props": { "top": 60, "skin": "img/itemSepar.png", "right": 0, "left": 0 }
                    }, {
                        "type": "TextInput",
                        "props": {
                            "y": 90,
                            "var": "lab_oldPass",
                            "type": "password",
                            "right": 20,
                            "prompt": "旧密码",
                            "maxChars": 30,
                            "left": 20,
                            "height": 30
                        }
                    }, {
                        "type": "Image",
                        "props": { "y": 130, "x": 0, "skin": "img/itemSepar.png", "right": 0, "left": 0 }
                    }, {
                        "type": "TextInput",
                        "props": {
                            "y": 140,
                            "var": "lab_newPass",
                            "type": "password",
                            "right": 20,
                            "prompt": "新密码",
                            "maxChars": 30,
                            "left": 20,
                            "height": 30
                        }
                    }, {
                        "type": "Image",
                        "props": { "y": 180, "x": 0, "skin": "img/itemSepar.png", "right": 0, "left": 0 }
                    }, {
                        "type": "TextInput",
                        "props": {
                            "y": 190,
                            "var": "lab_confPass",
                            "type": "password",
                            "right": 20,
                            "prompt": "确认密码",
                            "maxChars": 30,
                            "left": 20,
                            "height": 30
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 240,
                            "width": 229,
                            "valign": "middle",
                            "text": "忘记密码？导入助记词或私钥可重置密码。",
                            "left": 20,
                            "height": 20,
                            "color": "#9e9999",
                            "align": "left"
                        }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 240,
                            "var": "lab_import",
                            "valign": "middle",
                            "text": "导入",
                            "right": 27,
                            "height": 20,
                            "color": "#0047ff",
                            "align": "left"
                        }
                    }]
            };
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
            WalletImportUI.uiView = {
                "type": "View",
                "props": {
                    "width": 750,
                    "top": 0,
                    "right": 0,
                    "left": 0,
                    "layoutEnabled": true,
                    "height": 1334,
                    "bottom": 0
                },
                "child": [{
                        "type": "Label",
                        "props": {
                            "y": 62,
                            "x": 90,
                            "valign": "middle",
                            "text": "导入钱包",
                            "height": 44,
                            "fontSize": 32,
                            "color": "#163853",
                            "centerX": 0,
                            "align": "center"
                        }
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 64,
                            "x": 30,
                            "width": 60,
                            "var": "btn_back",
                            "skin": "img/main/back@2x.png",
                            "height": 60
                        }
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 54,
                            "width": 56,
                            "var": "btn_sao",
                            "skin": "img/main/sys@2x.png",
                            "right": 30,
                            "height": 56
                        }
                    }, {
                        "type": "Tab",
                        "props": {
                            "y": 178,
                            "width": 750,
                            "var": "tab",
                            "selectedIndex": 0,
                            "right": 0,
                            "left": 0,
                            "height": 100
                        },
                        "child": [{
                                "type": "Button",
                                "props": {
                                    "width": 250,
                                    "top": 0,
                                    "name": "item0",
                                    "left": 0,
                                    "labelSize": 28,
                                    "label": "助记词",
                                    "bottom": 0
                                }
                            }, {
                                "type": "Button",
                                "props": {
                                    "x": 250,
                                    "width": 250,
                                    "top": 0,
                                    "name": "item1",
                                    "labelSize": 28,
                                    "label": "官方钱包",
                                    "bottom": 0
                                }
                            }, {
                                "type": "Button",
                                "props": {
                                    "y": 10,
                                    "width": 250,
                                    "top": 0,
                                    "right": 0,
                                    "name": "item2",
                                    "labelSize": 28,
                                    "label": "私钥",
                                    "bottom": 0
                                }
                            }]
                    }, {
                        "type": "ViewStack",
                        "props": { "var": "stack", "top": 308, "selectedIndex": 0, "right": 0, "left": 0, "bottom": 0 },
                        "child": [{
                                "type": "Box",
                                "props": { "top": 0, "right": 0, "name": "item0", "left": 0, "bottom": 0 },
                                "child": [{
                                        "type": "TextArea",
                                        "props": {
                                            "y": 0,
                                            "var": "o_text_zjc",
                                            "right": 30,
                                            "promptColor": "#687076",
                                            "prompt": "助记词，用空格分开",
                                            "padding": "10",
                                            "left": 30,
                                            "layoutEnabled": true,
                                            "height": 192,
                                            "fontSize": 28,
                                            "borderColor": "#b5b5b5"
                                        }
                                    }, {
                                        "type": "ComboBox",
                                        "props": {
                                            "y": 230,
                                            "width": 654,
                                            "var": "o_sel_dir",
                                            "sizeGrid": "0,0,0,0",
                                            "selectedIndex": 0,
                                            "left": 30,
                                            "labels": "m/44’/60’/0’/0/0 Jaxx Metamask(ETH),m/44’/60’/0’/0 Ledger(ETH),m/44’/60’/1’/0/0 自定义路径",
                                            "labelSize": 28,
                                            "labelPadding": "10,0,10,0",
                                            "labelColors": "#8E979F",
                                            "itemSize": 28,
                                            "itemColors": "#8E979F",
                                            "height": 44
                                        }
                                    }, {
                                        "type": "TextInput",
                                        "props": {
                                            "y": 360,
                                            "width": 500,
                                            "var": "o_text_pass",
                                            "type": "password",
                                            "promptColor": "#8E979F",
                                            "prompt": "密码",
                                            "maxChars": 30,
                                            "left": 30,
                                            "height": 44,
                                            "fontSize": 28
                                        }
                                    }, {
                                        "type": "Image",
                                        "props": { "y": 404, "skin": "img/main/itemSepar.png", "right": 30, "left": 30 }
                                    }, {
                                        "type": "TextInput",
                                        "props": {
                                            "y": 480,
                                            "width": 500,
                                            "var": "o_text_confpass",
                                            "type": "password",
                                            "promptColor": "#8E979F",
                                            "prompt": "确认密码",
                                            "maxChars": 30,
                                            "left": 30,
                                            "height": 44,
                                            "fontSize": 28
                                        }
                                    }, {
                                        "type": "Image",
                                        "props": { "y": 524, "skin": "img/main/itemSepar.png", "right": 30, "left": 30 }
                                    }, {
                                        "type": "Button",
                                        "props": {
                                            "var": "o_btn_import",
                                            "stateNum": 1,
                                            "skin": "img/main/anliu@2x.png",
                                            "right": 30,
                                            "left": 28,
                                            "labelSize": 32,
                                            "labelColors": "#ffffff",
                                            "label": "开始导入",
                                            "height": 80,
                                            "bottom": 220
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "var": "hetp_zjc",
                                            "valign": "middle",
                                            "text": "什么是助记词？",
                                            "right": 20,
                                            "left": 20,
                                            "height": 30,
                                            "fontSize": 24,
                                            "color": "#687076",
                                            "bottom": 148,
                                            "align": "center"
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 613,
                                            "x": 76,
                                            "width": 240,
                                            "valign": "middle",
                                            "text": "我已经仔细阅读并同意",
                                            "padding": "0",
                                            "name": "隐私及服务条款",
                                            "height": 34,
                                            "fontSize": 24,
                                            "color": "#8E979F",
                                            "align": "left"
                                        }
                                    }, {
                                        "type": "CheckBox",
                                        "props": {
                                            "y": 615,
                                            "x": 36,
                                            "width": 24,
                                            "var": "o_check_agree",
                                            "skin": "comp/radio.png",
                                            "scaleY": 2,
                                            "scaleX": 2,
                                            "mouseEnabled": true,
                                            "layoutEnabled": true,
                                            "hitTestPrior": true,
                                            "height": 24,
                                            "click": "updateArgee"
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 613,
                                            "x": 318,
                                            "width": 240,
                                            "valign": "middle",
                                            "text": "隐私及服务条款",
                                            "padding": "0",
                                            "height": 34,
                                            "fontSize": 24,
                                            "color": "#598ADA",
                                            "align": "left"
                                        }
                                    }, {
                                        "type": "Image",
                                        "props": { "y": 230, "width": 44, "skin": "img/main/Stroke 2@2x.png", "right": 30, "height": 44 }
                                    }]
                            }, {
                                "type": "Box",
                                "props": { "top": 0, "right": 0, "name": "item1", "left": 0, "bottom": 0 },
                                "child": [{
                                        "type": "TextArea",
                                        "props": {
                                            "y": 0,
                                            "wordWrap": true,
                                            "valign": "middle",
                                            "text": "直接复制粘贴以太坊官方钱包keystore文件内容至输入框，或者扫二维码录入。",
                                            "stroke": 0,
                                            "right": 30,
                                            "padding": "5",
                                            "left": 30,
                                            "leading": 5,
                                            "layoutEnabled": true,
                                            "height": 88,
                                            "fontSize": 24,
                                            "editable": false,
                                            "disabled": true,
                                            "color": "#687076",
                                            "align": "left"
                                        }
                                    }, {
                                        "type": "TextArea",
                                        "props": {
                                            "y": 120,
                                            "wordWrap": true,
                                            "var": "text_keystore",
                                            "right": 30,
                                            "promptColor": "#687076",
                                            "prompt": "keystore文本内容",
                                            "padding": "10",
                                            "left": 30,
                                            "layoutEnabled": true,
                                            "height": 152,
                                            "fontSize": 28,
                                            "borderColor": "#b5b5b5"
                                        }
                                    }, {
                                        "type": "TextInput",
                                        "props": {
                                            "y": 331,
                                            "var": "keystore_pass",
                                            "type": "password",
                                            "right": 30,
                                            "promptColor": "#8E979F",
                                            "prompt": "keystore密码",
                                            "maxChars": 30,
                                            "left": 30,
                                            "height": 44,
                                            "fontSize": 28
                                        }
                                    }, {
                                        "type": "Image",
                                        "props": { "y": 375, "skin": "img/main/itemSepar.png", "right": 30, "left": 30 }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 455,
                                            "x": 80,
                                            "width": 240,
                                            "valign": "middle",
                                            "text": "我已经仔细阅读并同意",
                                            "padding": "0",
                                            "name": "隐私及服务条款",
                                            "height": 34,
                                            "fontSize": 24,
                                            "color": "#8E979F",
                                            "align": "left"
                                        }
                                    }, {
                                        "type": "CheckBox",
                                        "props": {
                                            "y": 457,
                                            "x": 40,
                                            "width": 24,
                                            "var": "ks_agree",
                                            "skin": "comp/radio.png",
                                            "scaleY": 2,
                                            "scaleX": 2,
                                            "mouseEnabled": true,
                                            "layoutEnabled": true,
                                            "hitTestPrior": true,
                                            "height": 24,
                                            "click": "updateArgee"
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 455,
                                            "x": 322,
                                            "width": 240,
                                            "valign": "middle",
                                            "text": "隐私及服务条款",
                                            "padding": "0",
                                            "height": 34,
                                            "fontSize": 24,
                                            "color": "#598ADA",
                                            "align": "left"
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 848,
                                            "x": 20,
                                            "var": "help_keystore",
                                            "valign": "middle",
                                            "text": "什么是keystore?",
                                            "right": 20,
                                            "left": 20,
                                            "height": 30,
                                            "fontSize": 24,
                                            "color": "#687076",
                                            "bottom": 148,
                                            "align": "center"
                                        }
                                    }, {
                                        "type": "Button",
                                        "props": {
                                            "y": 10,
                                            "x": 10,
                                            "var": "ks_btn_import",
                                            "stateNum": 1,
                                            "skin": "img/main/anliu@2x.png",
                                            "right": 30,
                                            "left": 28,
                                            "labelSize": 32,
                                            "labelColors": "#ffffff",
                                            "label": "开始导入",
                                            "height": 80,
                                            "bottom": 220
                                        }
                                    }]
                            }, {
                                "type": "Box",
                                "props": { "top": 0, "right": 0, "name": "item2", "left": 0, "bottom": 0 },
                                "child": [{
                                        "type": "TextArea",
                                        "props": {
                                            "y": 0,
                                            "wordWrap": true,
                                            "var": "text_privateKey",
                                            "stroke": 0,
                                            "right": 30,
                                            "promptColor": "#687076",
                                            "prompt": "明文私钥",
                                            "padding": "5",
                                            "left": 30,
                                            "leading": 5,
                                            "layoutEnabled": true,
                                            "height": 192,
                                            "fontSize": 28,
                                            "borderColor": "#b5b5b5",
                                            "align": "left"
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 848,
                                            "x": 20,
                                            "var": "help_pk",
                                            "valign": "middle",
                                            "text": "什么是私钥？",
                                            "right": 20,
                                            "left": 20,
                                            "height": 30,
                                            "fontSize": 24,
                                            "color": "#687076",
                                            "bottom": 148,
                                            "align": "center"
                                        }
                                    }, {
                                        "type": "Button",
                                        "props": {
                                            "y": 726,
                                            "x": 28,
                                            "var": "pk_btn_import",
                                            "stateNum": 1,
                                            "skin": "img/main/anliu@2x.png",
                                            "right": 30,
                                            "left": 28,
                                            "labelSize": 32,
                                            "labelColors": "#ffffff",
                                            "label": "开始导入",
                                            "height": 80,
                                            "bottom": 220
                                        }
                                    }, {
                                        "type": "TextInput",
                                        "props": {
                                            "y": 242,
                                            "width": 500,
                                            "var": "pk_text_pass",
                                            "type": "password",
                                            "promptColor": "#8E979F",
                                            "prompt": "密码",
                                            "maxChars": 30,
                                            "left": 30,
                                            "height": 44,
                                            "fontSize": 28
                                        }
                                    }, {
                                        "type": "Image",
                                        "props": { "y": 414, "x": 30, "skin": "img/main/itemSepar.png", "right": 30, "left": 30 }
                                    }, {
                                        "type": "TextInput",
                                        "props": {
                                            "y": 362,
                                            "width": 500,
                                            "var": "pk_text_confPass",
                                            "type": "password",
                                            "promptColor": "#8E979F",
                                            "prompt": "确认密码",
                                            "maxChars": 30,
                                            "left": 30,
                                            "height": 44,
                                            "fontSize": 28
                                        }
                                    }, {
                                        "type": "Image",
                                        "props": { "y": 406, "x": 30, "skin": "img/main/itemSepar.png", "right": 30, "left": 30 }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 487,
                                            "x": 70,
                                            "width": 240,
                                            "valign": "middle",
                                            "text": "我已经仔细阅读并同意",
                                            "padding": "0",
                                            "name": "隐私及服务条款",
                                            "height": 34,
                                            "fontSize": 24,
                                            "color": "#8E979F",
                                            "align": "left"
                                        }
                                    }, {
                                        "type": "CheckBox",
                                        "props": {
                                            "y": 489,
                                            "x": 30,
                                            "width": 24,
                                            "skin": "comp/radio.png",
                                            "scaleY": 2,
                                            "scaleX": 2,
                                            "mouseEnabled": true,
                                            "layoutEnabled": true,
                                            "hitTestPrior": true,
                                            "height": 24,
                                            "click": "updateArgee"
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 487,
                                            "x": 312,
                                            "width": 240,
                                            "valign": "middle",
                                            "text": "隐私及服务条款",
                                            "padding": "0",
                                            "height": 34,
                                            "fontSize": 24,
                                            "color": "#598ADA",
                                            "align": "left"
                                        }
                                    }]
                            }]
                    }]
            };
            return WalletImportUI;
        }(View));
        set.WalletImportUI = WalletImportUI;
    })(set = ui.set || (ui.set = {}));
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
        TransDetailUI.uiView = {
            "type": "View",
            "props": { "width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0 },
            "child": [{
                    "type": "Image",
                    "props": { "skin": "img/blue.png", "right": 0, "left": 0, "height": 60 }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 20,
                        "x": 118,
                        "var": "lab_coin_name",
                        "valign": "middle",
                        "top": 20,
                        "text": "交易明细",
                        "height": 30,
                        "fontSize": 16,
                        "color": "#000000",
                        "centerX": 0,
                        "align": "center"
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 20,
                        "x": 20,
                        "width": 117,
                        "var": "btn_goback",
                        "top": 20,
                        "skin": "template/Navigator/btn_BackButton.png",
                        "left": 20,
                        "height": 30
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 70,
                        "x": 83,
                        "var": "lab_amount",
                        "valign": "middle",
                        "text": "-0.00001 ETH (US$0.05)",
                        "height": 30,
                        "color": "#ff0400",
                        "centerX": 0
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 100,
                        "x": 20,
                        "var": "lab_type",
                        "valign": "middle",
                        "text": "收款账户",
                        "right": 20,
                        "left": 20,
                        "height": 20,
                        "color": "#000000",
                        "bold": true
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 120,
                        "x": 20,
                        "var": "lab_addr",
                        "valign": "middle",
                        "text": "dddddddd*****dddddddd",
                        "right": 20,
                        "overflow": "scroll",
                        "left": 20,
                        "height": 20,
                        "color": "#000000",
                        "align": "left"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 140,
                        "x": 20,
                        "valign": "middle",
                        "text": "交易 ID",
                        "right": 20,
                        "left": 20,
                        "height": 20,
                        "color": "#000000",
                        "bold": true
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 160,
                        "x": 20,
                        "var": "lab_transId",
                        "valign": "middle",
                        "text": "dddddddd*****dddddddd",
                        "right": 20,
                        "overflow": "scroll",
                        "left": 20,
                        "height": 20,
                        "color": "#000000",
                        "align": "left"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 190,
                        "x": 20,
                        "valign": "middle",
                        "text": "Gas 价格",
                        "right": 20,
                        "left": 20,
                        "height": 20,
                        "color": "#000000",
                        "bold": true
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 210,
                        "x": 20,
                        "var": "lab_gas",
                        "valign": "middle",
                        "text": "0.000021 ETH(US$0.01)",
                        "right": 20,
                        "overflow": "scroll",
                        "left": 20,
                        "height": 20,
                        "color": "#000000"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 240,
                        "x": 20,
                        "valign": "middle",
                        "text": "确认",
                        "left": 20,
                        "height": 20,
                        "color": "#000000",
                        "bold": true
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 260,
                        "x": 20,
                        "var": "lab_confirm",
                        "valign": "middle",
                        "text": "5236",
                        "overflow": "scroll",
                        "left": 20,
                        "height": 20,
                        "color": "#000000"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 240,
                        "x": 120,
                        "valign": "middle",
                        "text": "时间",
                        "left": 120,
                        "height": 20,
                        "color": "#000000",
                        "bold": true
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 260,
                        "x": 120,
                        "var": "lab_time",
                        "valign": "middle",
                        "text": "2018-06-22 15:10:10",
                        "overflow": "scroll",
                        "left": 120,
                        "height": 20,
                        "color": "#000000"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 290,
                        "x": 20,
                        "valign": "middle",
                        "text": "Nonce",
                        "right": 20,
                        "left": 20,
                        "height": 20,
                        "color": "#000000",
                        "bold": true
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 310,
                        "x": 20,
                        "var": "lab_nonce",
                        "valign": "middle",
                        "text": "2",
                        "right": 20,
                        "left": 20,
                        "height": 20,
                        "color": "#000000"
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 389,
                        "x": 0,
                        "var": "btn_moreinfo",
                        "right": 0,
                        "left": 0,
                        "label": "查看更多交易详情",
                        "height": 40,
                        "bottom": 0
                    }
                }]
        };
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
        TransHisListUI.uiView = {
            "type": "View",
            "props": { "width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0 },
            "child": [{
                    "type": "Rect",
                    "props": { "y": 0, "x": 0, "width": 375, "lineWidth": 1, "height": 60, "fillColor": "#c6e2ee" }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 10,
                        "x": 108,
                        "valign": "middle",
                        "top": 20,
                        "text": "交易",
                        "height": 30,
                        "fontSize": 16,
                        "color": "#000000",
                        "centerX": 0,
                        "align": "center"
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 10,
                        "x": 10,
                        "width": 117,
                        "var": "btn_goback",
                        "top": 20,
                        "skin": "template/Navigator/btn_BackButton.png",
                        "left": 20,
                        "height": 30
                    }
                }]
        };
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
        WalletBackUpUI.uiView = {
            "type": "View",
            "props": { "width": 750, "height": 1334 },
            "child": [{
                    "type": "Box",
                    "props": { "top": 0, "right": 0, "left": 0, "bottom": 0 },
                    "child": [{
                            "type": "Image",
                            "props": {
                                "y": 54,
                                "x": 20,
                                "width": 60,
                                "var": "btn_back",
                                "skin": "img/main/back@2x.png",
                                "height": 60
                            }
                        }, {
                            "type": "Image",
                            "props": { "y": 266, "width": 124, "skin": "img/main/anquan@2x.png", "height": 144, "centerX": 0 }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 62,
                                "valign": "middle",
                                "text": "备份钱包",
                                "height": 44,
                                "fontSize": 32,
                                "color": "#163853",
                                "centerX": 0,
                                "align": "center"
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 496,
                                "valign": "middle",
                                "text": "立即备份你的钱包！",
                                "height": 56,
                                "fontSize": 40,
                                "color": "#163853",
                                "centerX": 0,
                                "bold": true,
                                "align": "center"
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 636,
                                "x": 30,
                                "valign": "middle",
                                "text": "备份钱包：导出「助记词」并抄写到安全的地方",
                                "height": 44,
                                "fontSize": 24,
                                "color": "#687076",
                                "align": "left"
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 680,
                                "x": 26,
                                "valign": "middle",
                                "text": " 千万不要保存到网络上。然后尝试转入，转出小额资产开始使用。",
                                "height": 44,
                                "fontSize": 24,
                                "color": "#687076",
                                "align": "left"
                            }
                        }, {
                            "type": "Button",
                            "props": {
                                "y": 946,
                                "width": 708,
                                "var": "btn_backup",
                                "stateNum": 1,
                                "skin": "img/main/anliu@2x.png",
                                "sizeGrid": "0,0,0,0",
                                "labelSize": 32,
                                "labelColors": "#ffffff",
                                "label": "备份钱包",
                                "height": 80,
                                "centerX": 0
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 1072,
                                "var": "info_backup",
                                "text": "查看备份详细教程",
                                "height": 34,
                                "fontSize": 32,
                                "color": "#687076",
                                "centerX": 0,
                                "align": "center"
                            }
                        }]
                }]
        };
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
        WalletCreateUI.uiView = {
            "type": "View",
            "props": { "width": 750, "visible": true, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
            "child": [{
                    "type": "Label",
                    "props": {
                        "y": 186,
                        "x": 70,
                        "valign": "middle",
                        "text": "密码用于保护私匙和交易授权，强度非常重要",
                        "height": 34,
                        "fontSize": 24,
                        "color": "#163853",
                        "align": "left"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 234,
                        "x": 70,
                        "valign": "middle",
                        "text": "WWECToken 不储存密码，也无法帮您找回，请务必牢记",
                        "height": 34,
                        "fontSize": 24,
                        "color": "#163853",
                        "align": "left"
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 348,
                        "x": 30,
                        "width": 500,
                        "var": "text_wall_name",
                        "promptColor": "#8e979f",
                        "prompt": "钱包名称",
                        "maxChars": 20,
                        "layoutEnabled": true,
                        "height": 34,
                        "fontSize": 21,
                        "align": "left"
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 464,
                        "x": 30,
                        "width": 500,
                        "var": "text_pass",
                        "type": "password",
                        "promptColor": "#8e979f",
                        "prompt": "密码",
                        "maxChars": 32,
                        "layoutEnabled": true,
                        "height": 34,
                        "fontSize": 24,
                        "align": "left"
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 588,
                        "x": 30,
                        "width": 500,
                        "var": "text_pass_conf",
                        "type": "password",
                        "promptColor": "#8e979f",
                        "prompt": "确认密码",
                        "maxChars": 32,
                        "layoutEnabled": true,
                        "height": 34,
                        "fontSize": 24,
                        "align": "left"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 706,
                        "x": 70,
                        "width": 240,
                        "var": "lab_info",
                        "valign": "middle",
                        "text": "我已经仔细阅读并同意",
                        "padding": "0",
                        "name": "隐私及服务条款",
                        "height": 34,
                        "fontSize": 24,
                        "color": "#8E979F",
                        "align": "left"
                    }
                }, {
                    "type": "CheckBox",
                    "props": {
                        "y": 708,
                        "x": 30,
                        "width": 24,
                        "var": "check_argee",
                        "skin": "comp/radio.png",
                        "scaleY": 2,
                        "scaleX": 2,
                        "mouseEnabled": true,
                        "layoutEnabled": true,
                        "hitTestPrior": true,
                        "height": 24,
                        "click": "updateArgee"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 62,
                        "valign": "middle",
                        "text": "创建钱包",
                        "strokeColor": "#f9f9f9",
                        "skin": "template/Navigator/label.png",
                        "height": 44,
                        "fontSize": 32,
                        "color": "#FF163853",
                        "centerX": 0,
                        "align": "center"
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 54,
                        "x": 20,
                        "width": 60,
                        "var": "btn_back",
                        "stateNum": 1,
                        "skin": "img/main/back@2x.png",
                        "labelSize": 22,
                        "labelColors": "#057AFB,#057AFB,#7EB9FB",
                        "height": 60
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 432,
                        "visible": false,
                        "var": "lab_pass_level",
                        "valign": "middle",
                        "text": "弱",
                        "right": 106,
                        "height": 34,
                        "fontSize": 20,
                        "color": "#5eb0c2",
                        "align": "center"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 386,
                        "width": 294,
                        "visible": false,
                        "var": "lab_warn_wName",
                        "valign": "middle",
                        "text": "钱包已经存在",
                        "right": 70,
                        "height": 34,
                        "fontSize": 20,
                        "color": "#ff0400",
                        "align": "right"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 510,
                        "width": 643,
                        "visible": false,
                        "var": "lab_pass",
                        "valign": "middle",
                        "text": "简单密码",
                        "right": 70,
                        "height": 34,
                        "fontSize": 20,
                        "color": "#ff0400",
                        "align": "right"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 624,
                        "width": 301,
                        "visible": false,
                        "var": "lab_pass_conf",
                        "valign": "middle",
                        "text": "两次密码不一致",
                        "right": 70,
                        "height": 34,
                        "fontSize": 20,
                        "color": "#ff0400",
                        "align": "right"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 984,
                        "var": "btn_import",
                        "valign": "middle",
                        "text": "导入钱包",
                        "height": 44,
                        "fontSize": 32,
                        "color": "#8E979F",
                        "centerX": 0,
                        "align": "center"
                    }
                }, {
                    "type": "Image",
                    "props": { "y": 198, "x": 30, "width": 12, "skin": "img/main/Oval@2x.png", "height": 12 }
                }, {
                    "type": "Image",
                    "props": { "y": 246, "x": 30, "width": 12, "skin": "img/main/Oval@2x.png", "height": 12 }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 470,
                        "var": "lab_words",
                        "valign": "middle",
                        "text": "0字符",
                        "right": 106,
                        "height": 34,
                        "fontSize": 20,
                        "color": "#8e979f",
                        "align": "right"
                    }
                }, {
                    "type": "Box",
                    "props": { "y": 428, "x": 656, "width": 36, "var": "box_pass_level", "height": 76 },
                    "child": [{
                            "type": "Image",
                            "props": { "width": 36, "top": 0, "skin": "img/main/fangkuai@2x.png", "name": "a", "height": 16 }
                        }, {
                            "type": "Image",
                            "props": {
                                "x": 0,
                                "width": 36,
                                "top": 20,
                                "skin": "img/main/fangkuai@2x.png",
                                "name": "b",
                                "height": 16
                            }
                        }, {
                            "type": "Image",
                            "props": {
                                "x": 0,
                                "width": 36,
                                "top": 40,
                                "skin": "img/main/fangkuai@2x.png",
                                "name": "c",
                                "height": 16
                            }
                        }, {
                            "type": "Image",
                            "props": { "width": 36, "skin": "img/main/fangkuai@2x.png", "name": "d", "height": 16, "bottom": 0 }
                        }]
                }, {
                    "type": "Label",
                    "props": {
                        "y": 706,
                        "x": 312,
                        "width": 240,
                        "var": "href_ysfw",
                        "valign": "middle",
                        "text": "隐私及服务条款",
                        "padding": "0",
                        "height": 34,
                        "fontSize": 24,
                        "color": "#598ADA",
                        "align": "left"
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 838,
                        "x": 10,
                        "width": 708,
                        "var": "btn_create",
                        "stateNum": 1,
                        "skin": "img/main/anliu@2x.png",
                        "sizeGrid": "0,0,0,0",
                        "labelSize": 32,
                        "labelColors": "#ffffff",
                        "label": "创建钱包",
                        "height": 80,
                        "disabled": true,
                        "centerX": 0
                    }
                }]
        };
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
        WalletDetailUI.uiView = {
            "type": "View",
            "props": { "width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0 },
            "child": [{
                    "type": "Rect",
                    "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 60 }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 10,
                        "x": 108,
                        "var": "lab_wName",
                        "valign": "middle",
                        "top": 20,
                        "text": "myeth",
                        "height": 30,
                        "fontSize": 16,
                        "color": "#000000",
                        "centerX": 0,
                        "align": "center"
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 20,
                        "x": 20,
                        "width": 117,
                        "var": "btn_back",
                        "top": 20,
                        "skin": "template/Navigator/btn_BackButton.png",
                        "height": 30
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 20,
                        "var": "btn_save",
                        "valign": "middle",
                        "top": 20,
                        "text": "保存",
                        "right": 20,
                        "height": 30,
                        "fontSize": 16,
                        "color": "#218d92",
                        "align": "center"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "width": 67,
                        "var": "lab_total",
                        "valign": "middle",
                        "top": 97,
                        "text": "0.00 $USDT",
                        "height": 19,
                        "fontSize": 12,
                        "color": "#000000",
                        "centerX": 0,
                        "align": "center"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 65,
                        "width": 30,
                        "var": "img_wImg",
                        "skin": "img/main/add.png",
                        "height": 30,
                        "centerX": 0
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "var": "lab_wAddr",
                        "valign": "middle",
                        "top": 115,
                        "text": "52s5c2d6...3625x15d",
                        "height": 20,
                        "fontSize": 12,
                        "color": "#000000",
                        "centerX": 0,
                        "align": "center"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "valign": "middle",
                        "top": 138,
                        "text": "钱包名称",
                        "left": 20,
                        "height": 20,
                        "fontSize": 12,
                        "color": "#000000",
                        "align": "center"
                    }
                }, {
                    "type": "TextInput",
                    "props": { "y": 161, "var": "text_wName", "text": "myeth", "left": 20 }
                }, {
                    "type": "Box",
                    "props": { "y": 186, "var": "box_reverpass", "right": 0, "left": 0, "height": 50 },
                    "child": [{
                            "type": "Label",
                            "props": {
                                "width": 107,
                                "valign": "middle",
                                "text": "修改密码",
                                "left": 20,
                                "height": 22,
                                "centerY": 0,
                                "align": "left"
                            }
                        }, { "type": "Image", "props": { "skin": "template/List/arrow.png", "right": 20, "centerY": 0 } }]
                }, {
                    "type": "Box",
                    "props": { "y": 250, "var": "box_expSeckey", "right": 0, "left": 0, "height": 50 },
                    "child": [{
                            "type": "Label",
                            "props": {
                                "width": 107,
                                "valign": "middle",
                                "text": "导出私钥",
                                "left": 20,
                                "height": 22,
                                "centerY": 0,
                                "align": "left"
                            }
                        }, { "type": "Image", "props": { "skin": "template/List/arrow.png", "right": 20, "centerY": 0 } }]
                }, {
                    "type": "Box",
                    "props": { "y": 300, "x": 0, "var": "box_expKeystore", "right": 0, "left": 0, "height": 50 },
                    "child": [{
                            "type": "Label",
                            "props": {
                                "width": 107,
                                "valign": "middle",
                                "text": "导出Keystore",
                                "left": 20,
                                "height": 22,
                                "centerY": 0,
                                "align": "left"
                            }
                        }, { "type": "Image", "props": { "skin": "template/List/arrow.png", "right": 20, "centerY": 0 } }]
                }, {
                    "type": "Button",
                    "props": {
                        "y": 483,
                        "x": 20,
                        "width": 354,
                        "var": "btn_backup",
                        "stateNum": 1,
                        "skin": "img/main/anliu@2x.png",
                        "sizeGrid": "0,0,0,0",
                        "labelSize": 16,
                        "labelColors": "#ffffff",
                        "label": "备份钱包",
                        "height": 40,
                        "centerX": 0
                    }
                }]
        };
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
        WalletMainUI.uiView = {
            "type": "View",
            "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
            "child": [{
                    "type": "Rect",
                    "props": { "y": 0, "x": 0, "width": 750, "lineWidth": 1, "height": 400, "fillColor": "#c1e2ef" }
                }, {
                    "type": "Image",
                    "props": { "y": 49, "width": 60, "skin": "img/main/add.png", "height": 60, "centerX": 0 }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 124,
                        "var": "lab_wName",
                        "text": "0",
                        "height": 44,
                        "fontSize": 32,
                        "color": "#000000",
                        "centerX": 0
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 174,
                        "var": "lab_wAddr",
                        "valign": "middle",
                        "text": "AAAAAAAA......AAAAAAAA",
                        "overflow": "hidden",
                        "height": 44,
                        "fontSize": 32,
                        "color": "#000000",
                        "centerX": -5,
                        "align": "left"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 347,
                        "x": 34,
                        "width": 565,
                        "valign": "middle",
                        "text": "总资产($)",
                        "height": 44,
                        "fontSize": 28,
                        "color": "#000000"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 306,
                        "var": "lab_total_usd",
                        "text": "≈ 0",
                        "right": 20,
                        "left": 34,
                        "height": 44,
                        "fontSize": 32,
                        "color": "#000000"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 172,
                        "x": 581,
                        "width": 60,
                        "var": "btn_owner_info",
                        "skin": "img/main/add.png",
                        "height": 60
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 295,
                        "width": 60,
                        "var": "btn_addCoin",
                        "skin": "img/main/add.png",
                        "sizeGrid": "0,0,0,0",
                        "right": 30,
                        "height": 60
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "x": 0,
                        "width": 375,
                        "var": "btn_assets",
                        "selected": true,
                        "labelSize": 32,
                        "labelAlign": "center",
                        "label": "资产",
                        "height": 60,
                        "bottom": 0
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "var": "btn_me",
                        "right": 0,
                        "mouseEnabled": true,
                        "left": 375,
                        "layoutEnabled": true,
                        "labelSize": 32,
                        "label": "我",
                        "height": 60,
                        "bottom": 0
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "width": 60,
                        "var": "btn_more",
                        "top": 30,
                        "skin": "img/main/add.png",
                        "right": 30,
                        "height": 60
                    }
                }, {
                    "type": "List",
                    "props": {
                        "var": "list_wallet",
                        "top": 400,
                        "selectEnable": true,
                        "right": 0,
                        "repeatX": 1,
                        "left": 0,
                        "bottom": 60
                    },
                    "child": [{
                            "type": "Box",
                            "props": { "right": 0, "name": "render", "left": 0, "height": 120 },
                            "child": [{
                                    "type": "Image",
                                    "props": {
                                        "top": 0,
                                        "skin": "template/List/SimpleListBoxItemBackground.png",
                                        "right": 0,
                                        "left": 0,
                                        "bottom": 0
                                    }
                                }, {
                                    "type": "Image",
                                    "props": {
                                        "x": 28,
                                        "width": 78,
                                        "var": "cImg",
                                        "skin": "template/List/message icon_57x57.png",
                                        "name": "cImg",
                                        "height": 78,
                                        "centerY": 0
                                    }
                                }, {
                                    "type": "Label",
                                    "props": {
                                        "x": 114,
                                        "width": 445,
                                        "var": "cName",
                                        "text": "label",
                                        "skin": "template/List/label.png",
                                        "name": "cName",
                                        "height": 50,
                                        "fontSize": 36,
                                        "centerY": 0
                                    }
                                }, {
                                    "type": "Label",
                                    "props": {
                                        "var": "cTotal",
                                        "text": "第三方士大夫",
                                        "right": 30,
                                        "name": "cTotal",
                                        "height": 44,
                                        "fontSize": 28,
                                        "centerY": 0
                                    }
                                }, {
                                    "type": "Label",
                                    "props": {
                                        "var": "cValue",
                                        "text": "不晓得官方",
                                        "right": 30,
                                        "name": "cValue",
                                        "height": 44,
                                        "fontSize": 28,
                                        "bottom": 0
                                    }
                                }]
                        }]
                }]
        };
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
        WalletManageUI.uiView = {
            "type": "View",
            "props": { "width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0 },
            "child": [{
                    "type": "Label",
                    "props": {
                        "y": 10,
                        "x": 124,
                        "valign": "middle",
                        "top": 20,
                        "text": "管理钱包",
                        "height": 30,
                        "fontSize": 16,
                        "color": "#000000",
                        "centerX": 0,
                        "align": "center"
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 10,
                        "x": 10,
                        "width": 117,
                        "var": "btn_goback",
                        "top": 20,
                        "skin": "template/Navigator/btn_BackButton.png",
                        "left": 20,
                        "height": 30
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 389,
                        "x": 0,
                        "width": 187,
                        "var": "btn_create",
                        "labelAlign": "center",
                        "label": "创建钱包",
                        "height": 60,
                        "bottom": 0
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 389,
                        "x": 187,
                        "width": 187,
                        "var": "btn_import",
                        "mouseEnabled": true,
                        "layoutEnabled": true,
                        "label": "导入钱包",
                        "height": 60,
                        "bottom": 0
                    }
                }, {
                    "type": "List",
                    "props": {
                        "var": "list_wallet",
                        "top": 60,
                        "selectEnable": true,
                        "right": 0,
                        "repeatX": 1,
                        "left": 0,
                        "bottom": 40
                    },
                    "child": [{
                            "type": "Box",
                            "props": { "right": 0, "renderType": "render", "name": "render", "left": 0, "height": 80 },
                            "child": [{
                                    "type": "Image",
                                    "props": {
                                        "y": 0,
                                        "x": 0,
                                        "width": 300,
                                        "skin": "template/List/SimpleListBoxItemBackground.png",
                                        "height": 80
                                    }
                                }, {
                                    "type": "Image",
                                    "props": {
                                        "y": 20,
                                        "x": 20,
                                        "width": 30,
                                        "var": "img_wallet",
                                        "skin": "template/List/message icon_57x57.png",
                                        "name": "img_wallet",
                                        "height": 30
                                    }
                                }, {
                                    "type": "Label",
                                    "props": {
                                        "y": 9,
                                        "x": 60,
                                        "width": 170,
                                        "var": "lab_wName",
                                        "valign": "middle",
                                        "text": "ETH",
                                        "skin": "template/List/label.png",
                                        "name": "lab_wName",
                                        "height": 20,
                                        "fontSize": 16,
                                        "color": "#000000",
                                        "align": "left"
                                    }
                                }, {
                                    "type": "Label",
                                    "props": {
                                        "y": 31,
                                        "x": 60,
                                        "width": 190,
                                        "var": "lab_wAddr",
                                        "valign": "middle",
                                        "text": "035dx5dx...",
                                        "skin": "template/List/label.png",
                                        "name": "lab_wAddr",
                                        "height": 20,
                                        "fontSize": 12,
                                        "color": "#aaaaaa",
                                        "align": "left"
                                    }
                                }, {
                                    "type": "Image",
                                    "props": { "top": 10, "skin": "template/List/arrow.png", "right": 20 }
                                }, {
                                    "type": "Label",
                                    "props": {
                                        "width": 200,
                                        "var": "lab_wTotal",
                                        "valign": "middle",
                                        "text": "0 ether",
                                        "skin": "template/List/label.png",
                                        "right": 20,
                                        "name": "lab_wTotal",
                                        "height": 20,
                                        "fontSize": 16,
                                        "color": "#aaaaaa",
                                        "bottom": 10,
                                        "align": "right"
                                    }
                                }]
                        }]
                }]
        };
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
        WalletMeUI.uiView = {
            "type": "View",
            "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
            "child": [{
                    "type": "Label",
                    "props": {
                        "y": 20,
                        "x": -6,
                        "top": 20,
                        "text": "我",
                        "name": "item1",
                        "fontSize": 32,
                        "color": "#000000",
                        "centerX": 0
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 146,
                        "x": 146,
                        "width": 30,
                        "var": "btn_manageWal",
                        "skin": "img/main/add.png",
                        "name": "item1",
                        "height": 30
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 140,
                        "x": 520,
                        "width": 30,
                        "var": "btn_dealHistory",
                        "skin": "img/main/add.png",
                        "name": "item1",
                        "height": 30
                    }
                }, {
                    "type": "Label",
                    "props": { "y": 181, "x": 136, "text": "管理钱包", "name": "item1", "color": "#000000" }
                }, {
                    "type": "Label",
                    "props": { "y": 175, "x": 510, "text": "交易记录", "name": "item1", "color": "#000000" }
                }, {
                    "type": "Button",
                    "props": {
                        "width": 375,
                        "var": "btn_assets",
                        "left": 0,
                        "labelSize": 32,
                        "labelAlign": "center",
                        "label": "资产",
                        "height": 60,
                        "bottom": 0
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "var": "btn_me",
                        "selected": true,
                        "right": 0,
                        "mouseEnabled": true,
                        "left": 375,
                        "layoutEnabled": true,
                        "labelSize": 32,
                        "label": "我",
                        "height": 60,
                        "bottom": 0
                    }
                }]
        };
        return WalletMeUI;
    }(View));
    ui.WalletMeUI = WalletMeUI;
})(ui || (ui = {}));
(function (ui) {
    var WalletMexUI = /** @class */ (function (_super) {
        __extends(WalletMexUI, _super);
        function WalletMexUI() {
            return _super.call(this) || this;
        }
        WalletMexUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.WalletMexUI.uiView);
        };
        WalletMexUI.uiView = {
            "type": "View",
            "props": { "width": 300, "top": 0, "right": 0, "left": 0, "height": 429, "bottom": 0 },
            "child": [{
                    "type": "ViewStack",
                    "props": { "y": 0, "x": 0, "var": "viewStack", "selectedIndex": 2 },
                    "child": [{
                            "type": "Rect",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "width": 300,
                                "name": "item0",
                                "lineWidth": 1,
                                "height": 150,
                                "fillColor": "#c1e2ef"
                            }
                        }, {
                            "type": "Image",
                            "props": {
                                "y": 21,
                                "x": 139,
                                "width": 22,
                                "skin": "img/eth.jpg",
                                "name": "item0",
                                "height": 22,
                                "centerX": 0
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 51,
                                "x": 109,
                                "var": "wallet_name",
                                "text": "myWalletName",
                                "name": "item0",
                                "color": "#000000",
                                "centerX": 0
                            }
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 70,
                                "x": 82,
                                "width": 134,
                                "var": "wallet_addr",
                                "text": "0x9c4cce43B94A684D119d6d2E8a047B2De702203a",
                                "overflow": "hidden",
                                "name": "item0",
                                "height": 12,
                                "color": "#000000",
                                "centerX": -1
                            }
                        }, {
                            "type": "Label",
                            "props": { "y": 126, "x": 25, "text": "总资产(¥)", "name": "item0", "color": "#000000" }
                        }, {
                            "type": "Label",
                            "props": { "y": 90, "x": 25, "text": "≈ 0", "name": "item0", "fontSize": 22, "color": "#000000" }
                        }, {
                            "type": "Image",
                            "props": { "y": 70, "x": 220, "width": 10, "skin": "img/ewm.jpg", "name": "item0", "height": 10 }
                        }, {
                            "type": "Image",
                            "props": {
                                "y": 125,
                                "x": 253,
                                "width": 22,
                                "skin": "img/add.png",
                                "sizeGrid": "0,0,0,0",
                                "right": 25,
                                "name": "item0",
                                "height": 22
                            }
                        }, {
                            "type": "List",
                            "props": { "y": 0, "x": 0, "width": 0, "var": "list_coin", "name": "item0", "height": 0 }
                        }, {
                            "type": "Rect",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "width": 300,
                                "name": "item1",
                                "lineWidth": 1,
                                "height": 150,
                                "fillColor": "#57a7c6"
                            }
                        }, {
                            "type": "Label",
                            "props": { "top": 20, "text": "我", "name": "item1", "color": "#ffffff", "centerX": 0 }
                        }, {
                            "type": "Image",
                            "props": { "y": 60, "x": 66, "skin": "img/wallet_manage.png", "name": "item1" }
                        }, {
                            "type": "Image",
                            "props": { "y": 60, "x": 202, "skin": "img/deal_history.png", "name": "item1" }
                        }, {
                            "type": "Label",
                            "props": { "y": 95, "x": 56, "text": "管理钱包", "name": "item1", "color": "#ffffff" }
                        }, { "type": "Label", "props": { "y": 95, "x": 192, "text": "交易记录", "name": "item1", "color": "#ffffff" } }]
                }, {
                    "type": "Tab",
                    "props": { "y": 389, "x": 0, "var": "btn_tab", "selectedIndex": 0 },
                    "child": [{
                            "type": "Button",
                            "props": {
                                "width": 150,
                                "var": "btn_assets",
                                "selected": true,
                                "left": 0,
                                "labelAlign": "center",
                                "label": "资产",
                                "height": 40,
                                "bottom": 0
                            }
                        }, {
                            "type": "Button",
                            "props": {
                                "x": 150,
                                "width": 150,
                                "var": "btn_me",
                                "mouseEnabled": true,
                                "left": 150,
                                "layoutEnabled": true,
                                "label": "我",
                                "height": 40,
                                "bottom": 0
                            }
                        }]
                }, {
                    "type": "CheckBox",
                    "props": {
                        "stateNum": 2,
                        "skin": "template/Switcher/checkbox_switch.png",
                        "scaleY": 0.4,
                        "scaleX": 0.4,
                        "right": 20,
                        "centerY": 0
                    }
                }]
        };
        return WalletMexUI;
    }(View));
    ui.WalletMexUI = WalletMexUI;
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
        WalletQuickUI.uiView = {
            "type": "Dialog",
            "props": { "y": 0, "x": 0, "width": 250, "height": 1334 },
            "child": [{
                    "type": "Image",
                    "props": { "var": "bg", "top": 2, "skin": "img/main/white.jpg", "right": 0, "left": 0, "bottom": 0 }
                }, {
                    "type": "Image",
                    "props": { "y": 450, "x": 30, "width": 30, "skin": "img/main/add.png", "height": 30 }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 450,
                        "x": 70,
                        "var": "lab_sao",
                        "valign": "middle",
                        "text": "扫一扫",
                        "height": 30,
                        "fontSize": 16,
                        "color": "#000000"
                    }
                }, {
                    "type": "Image",
                    "props": { "y": 500, "x": 30, "width": 30, "skin": "img/main/add.png", "height": 30 }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 500,
                        "x": 70,
                        "var": "lab_create",
                        "valign": "middle",
                        "text": "创建钱包",
                        "height": 30,
                        "fontSize": 16,
                        "color": "#000000",
                        "align": "left"
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "var": "img_spe",
                        "top": 430,
                        "skin": "img/main/itemSepar.png",
                        "right": 0,
                        "left": 0,
                        "height": 2
                    }
                }]
        };
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
        WalletReceiveUI.uiView = {
            "type": "View",
            "props": { "width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0 },
            "child": [{
                    "type": "Button",
                    "props": {
                        "y": 20,
                        "x": 10,
                        "width": 117,
                        "var": "btn_goback",
                        "top": 20,
                        "skin": "template/Navigator/btn_BackButton.png",
                        "left": 20,
                        "height": 30
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 20,
                        "x": 20,
                        "valign": "middle",
                        "top": 20,
                        "text": "收款",
                        "height": 30,
                        "fontSize": 16,
                        "color": "#000000",
                        "centerX": 0,
                        "align": "center"
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 80,
                        "x": 10,
                        "right": 20,
                        "prompt": "收款人账户地址",
                        "maxChars": 30,
                        "left": 20,
                        "layoutEnabled": true,
                        "height": 22,
                        "editable": false
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 389,
                        "x": 10,
                        "var": "btn_copy",
                        "skin": "comp/button.png",
                        "sizeGrid": "0,0,0,0",
                        "right": 0,
                        "left": 0,
                        "labelAlign": "center",
                        "label": "复制收款地址",
                        "height": 60,
                        "bottom": 0
                    }
                }, {
                    "type": "Image",
                    "props": {
                        "width": 120,
                        "var": "img_wAddr",
                        "skin": "img/guid_ewm.jpg",
                        "height": 120,
                        "centerY": 0,
                        "centerX": 0
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 102,
                        "wordWrap": true,
                        "var": "lab_wAddr",
                        "text": "0x098373B3863c1ca7862b4786c13611a71e2BB682",
                        "right": 20,
                        "overflow": "visible",
                        "left": 20,
                        "layoutEnabled": true,
                        "height": 36,
                        "editable": false
                    }
                }]
        };
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
        WalletSendUI.uiView = {
            "type": "View",
            "props": { "y": 0, "x": 0, "width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0 },
            "child": [{
                    "type": "Button",
                    "props": {
                        "y": 10,
                        "width": 117,
                        "var": "btn_goback",
                        "top": 20,
                        "skin": "template/Navigator/btn_BackButton.png",
                        "left": 20,
                        "height": 30
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "var": "lab_coin_name",
                        "valign": "middle",
                        "top": 20,
                        "text": "ETH",
                        "right": 149,
                        "height": 30,
                        "fontSize": 16,
                        "color": "#000000",
                        "align": "center"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "valign": "middle",
                        "top": 20,
                        "text": "转账",
                        "left": 151,
                        "height": 30,
                        "fontSize": 16,
                        "color": "#000000",
                        "align": "center"
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 70,
                        "right": 20,
                        "prompt": "收款人账户地址",
                        "maxChars": 30,
                        "left": 20,
                        "layoutEnabled": true,
                        "height": 22
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 100,
                        "type": "number",
                        "right": 20,
                        "prompt": "转账金额ETH",
                        "maxChars": 30,
                        "left": 20,
                        "layoutEnabled": true,
                        "height": 22
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 379,
                        "x": 0,
                        "var": "btn_next",
                        "skin": "comp/button.png",
                        "sizeGrid": "0,0,0,0",
                        "right": 0,
                        "left": 0,
                        "labelAlign": "center",
                        "label": "下一步",
                        "height": 60,
                        "bottom": 0
                    }
                }]
        };
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
        WalletSendSubmitUI.uiView = {
            "type": "View",
            "props": { "y": 0, "x": 0, "width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0 },
            "child": [{
                    "type": "Button",
                    "props": {
                        "y": 10,
                        "width": 117,
                        "var": "btn_goback",
                        "top": 20,
                        "skin": "template/Navigator/btn_BackButton.png",
                        "left": 20,
                        "height": 30
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 10,
                        "x": 10,
                        "valign": "middle",
                        "top": 20,
                        "text": "ETH 转账",
                        "height": 30,
                        "fontSize": 16,
                        "color": "#000000",
                        "centerX": 0,
                        "align": "center"
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 69,
                        "var": "text_addr_to",
                        "right": 20,
                        "prompt": "收款人账户地址",
                        "maxChars": 30,
                        "left": 20,
                        "layoutEnabled": true,
                        "height": 22,
                        "editable": false
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 121,
                        "var": "text_addr_from",
                        "right": 20,
                        "prompt": "发送人账户地址",
                        "maxChars": 30,
                        "left": 20,
                        "layoutEnabled": true,
                        "height": 22,
                        "editable": false
                    }
                }, {
                    "type": "Label",
                    "props": { "y": 182, "x": 24, "text": "转账金额( ETH) :", "color": "#868686" }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 182,
                        "x": 117,
                        "width": 121,
                        "var": "send_amout",
                        "valign": "middle",
                        "text": "0",
                        "height": 12,
                        "color": "#868686"
                    }
                }, {
                    "type": "HSlider",
                    "props": {
                        "y": 229,
                        "var": "sli_gas",
                        "value": 2100,
                        "skin": "template/ScrollBar/BackProgressBar.png",
                        "sizeGrid": "0,15,0,15",
                        "right": 20,
                        "min": 2100,
                        "max": 210000,
                        "left": 23,
                        "height": 45
                    }
                }, {
                    "type": "Label",
                    "props": { "y": 214, "text": "矿工费用(GWEI)", "left": 24, "color": "#868686" }
                }, { "type": "Label", "props": { "y": 275, "text": "慢", "left": 25, "color": "#868686" } }, {
                    "type": "Label",
                    "props": { "y": 275, "text": "快", "right": 20, "color": "#868686" }
                }, {
                    "type": "Label",
                    "props": { "y": 307, "text": "最大交易手续费", "left": 25, "height": 16, "color": "#868686" }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 307,
                        "width": 154,
                        "var": "lab_max_gas",
                        "valign": "top",
                        "text": "0.000021 ETH",
                        "right": 25,
                        "height": 16,
                        "editable": false,
                        "color": "#868686",
                        "align": "right"
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 322,
                        "width": 248,
                        "var": "lab_max_gas_usd",
                        "valign": "top",
                        "text": "0.01 USD",
                        "right": 25,
                        "height": 16,
                        "editable": false,
                        "color": "#868686",
                        "align": "right"
                    }
                }, {
                    "type": "Label",
                    "props": { "y": 357, "text": "总费用", "left": 25, "height": 16, "color": "#868686" }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 357,
                        "width": 194,
                        "var": "lab_max_total",
                        "valign": "top",
                        "text": "1.000021 ETH",
                        "right": 25,
                        "height": 16,
                        "editable": false,
                        "color": "#868686",
                        "align": "right"
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 372,
                        "width": 245,
                        "var": "lab_max_total_usd",
                        "valign": "top",
                        "text": "516.10 USD",
                        "right": 25,
                        "height": 16,
                        "editable": false,
                        "color": "#868686",
                        "align": "right"
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 90,
                        "text": "0x098373B3863c1ca7862b4786c13611a71e2BB682",
                        "right": 20,
                        "overflow": "scroll",
                        "maxChars": 30,
                        "left": 20,
                        "layoutEnabled": true,
                        "height": 22,
                        "editable": false,
                        "align": "left"
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 141,
                        "text": "0x098373B3863c1ca7862b4786c13611a71e2BB682",
                        "right": 20,
                        "prompt": "发送人账户地址",
                        "overflow": "scroll",
                        "maxChars": 30,
                        "left": 20,
                        "layoutEnabled": true,
                        "height": 22,
                        "editable": false,
                        "align": "left"
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 379,
                        "x": 0,
                        "var": "btn_submit",
                        "skin": "comp/button.png",
                        "sizeGrid": "0,0,0,0",
                        "right": 0,
                        "left": 0,
                        "labelAlign": "center",
                        "label": "提交",
                        "height": 60,
                        "bottom": 0
                    }
                }]
        };
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
        WalletTransferUI.uiView = {
            "type": "View",
            "props": { "width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0 },
            "child": [{
                    "type": "Rect",
                    "props": { "y": 0, "x": 0, "width": 375, "lineWidth": 1, "height": 110, "fillColor": "#c6e2ee" }
                }, {
                    "type": "Label",
                    "props": {
                        "var": "lab_coin_name",
                        "valign": "middle",
                        "top": 20,
                        "text": "ETH",
                        "height": 30,
                        "fontSize": 16,
                        "color": "#000000",
                        "centerX": 0,
                        "align": "center"
                    }
                }, {
                    "type": "Label",
                    "props": { "y": 78, "text": "总资产($)", "fontSize": 12, "color": "#000000", "centerX": 0 }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 50,
                        "var": "lab_coin_total",
                        "text": "≈ 0",
                        "fontSize": 22,
                        "color": "#000000",
                        "centerX": 0
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "width": 187,
                        "var": "btn_send",
                        "skin": "comp/button.png",
                        "sizeGrid": "0,0,0,0",
                        "left": 0,
                        "labelAlign": "center",
                        "label": "转账",
                        "height": 60,
                        "bottom": 0
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "var": "btn_receive",
                        "skin": "comp/button.png",
                        "sizeGrid": "0,0,0,0",
                        "right": 0,
                        "left": 187,
                        "labelAlign": "center",
                        "label": "收款",
                        "height": 60,
                        "bottom": 0
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "width": 117,
                        "var": "btn_goback",
                        "top": 20,
                        "skin": "template/Navigator/btn_BackButton.png",
                        "left": 20,
                        "height": 30
                    }
                }]
        };
        return WalletTransferUI;
    }(View));
    ui.WalletTransferUI = WalletTransferUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map