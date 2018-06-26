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
                "props": { "width": 300, "visible": true, "height": 429 },
                "child": [{
                        "type": "Rect",
                        "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 60, "fillColor": "#c6e2ee" }
                    }, {
                        "type": "Button",
                        "props": {
                            "width": 119,
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
                            "x": 110,
                            "valign": "middle",
                            "top": 20,
                            "text": "添加新资产",
                            "height": 30,
                            "fontSize": 16,
                            "color": "#000000",
                            "centerX": 0,
                            "align": "center"
                        }
                    }, {
                        "type": "Button",
                        "props": {
                            "width": 30,
                            "var": "btn_query",
                            "top": 20,
                            "skin": "template/Search/btn_search_icon.png",
                            "right": 20,
                            "height": 30
                        }
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
            queryCoinsUI.uiView = { "type": "View", "props": { "width": 300, "height": 429 } };
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
            "props": { "width": 300, "height": 429 },
            "child": [{ "type": "Sprite", "props": { "var": "spr_bg" } }, {
                    "type": "Image",
                    "props": { "top": 0, "skin": "guide/timg.jpg", "right": 0, "left": 0, "bottom": 0 }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 30,
                        "var": "lab_title",
                        "valign": "middle",
                        "text": "万微钱包",
                        "padding": "2",
                        "height": 40,
                        "fontSize": 32,
                        "color": "#c8c8c8",
                        "centerX": 0
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 75,
                        "x": 68,
                        "width": 164,
                        "var": "lab_subTitle",
                        "valign": "middle",
                        "text": "您的第一个智能轻钱包",
                        "padding": "2",
                        "height": 32,
                        "fontSize": 16,
                        "color": "#898989",
                        "centerX": 0
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 134,
                        "x": 60,
                        "width": 180,
                        "var": "btn_create",
                        "skin": "comp/button.png",
                        "sizeGrid": "0,0,0,0",
                        "label": "创建钱包",
                        "height": 40,
                        "centerX": 0
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 196,
                        "x": 60,
                        "width": 180,
                        "var": "btn_import",
                        "skin": "comp/button.png",
                        "sizeGrid": "0,0,0,0",
                        "label": "导入钱包",
                        "height": 40,
                        "centerX": 0
                    }
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
        GuideUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 300, "height": 429 } };
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
                "props": { "width": 300, "layoutEnabled": true, "height": 429 },
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
                                            "width": 260,
                                            "var": "text_keystore",
                                            "top": 180,
                                            "right": 20,
                                            "overflow": "scroll",
                                            "left": 20,
                                            "height": 69,
                                            "bottom": 60
                                        }
                                    }, {
                                        "type": "Button",
                                        "props": {
                                            "x": 20,
                                            "var": "btn_copy",
                                            "skin": "img/blue.png",
                                            "right": 20,
                                            "left": 20,
                                            "layoutEnabled": true,
                                            "label": "复制",
                                            "height": 40,
                                            "bottom": 10
                                        }
                                    }]
                            }, {
                                "type": "Box",
                                "props": {
                                    "x": 0,
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
                                            "y": 140,
                                            "x": 75,
                                            "width": 150,
                                            "lineWidth": 1,
                                            "height": 150,
                                            "fillColor": "#a1a0a0"
                                        }
                                    }, {
                                        "type": "Image",
                                        "props": {
                                            "y": 145,
                                            "x": 80,
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
                "props": { "width": 300, "height": 429 },
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
                            "right": 20,
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
                "props": { "width": 300, "height": 429 },
                "child": [{
                        "type": "Rect",
                        "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 60 }
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 10,
                            "x": 90,
                            "valign": "middle",
                            "top": 20,
                            "text": "导入钱包",
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
                        "props": { "width": 30, "var": "btn_sao", "top": 20, "skin": "img/sao.png", "right": 20, "height": 30 }
                    }, {
                        "type": "Image",
                        "props": { "top": 60, "skin": "img/itemSepar.png", "right": 0, "left": 0 }
                    }, {
                        "type": "Tab",
                        "props": {
                            "y": 60,
                            "x": 10,
                            "var": "tab",
                            "selectedIndex": 0,
                            "right": 0,
                            "left": 0,
                            "layoutEnabled": true,
                            "height": 40
                        },
                        "child": [{
                                "type": "Button",
                                "props": {
                                    "width": 100,
                                    "top": 0,
                                    "name": "item0",
                                    "left": 0,
                                    "labelSize": 16,
                                    "label": "助记词",
                                    "bottom": 0
                                }
                            }, {
                                "type": "Button",
                                "props": {
                                    "x": 100,
                                    "width": 100,
                                    "top": 0,
                                    "name": "item1",
                                    "labelSize": 16,
                                    "label": "官方钱包",
                                    "bottom": 0
                                }
                            }, {
                                "type": "Button",
                                "props": {
                                    "y": 10,
                                    "width": 100,
                                    "top": 0,
                                    "right": 0,
                                    "name": "item2",
                                    "labelSize": 16,
                                    "label": "私钥",
                                    "bottom": 0
                                }
                            }]
                    }, {
                        "type": "ViewStack",
                        "props": { "var": "stack", "top": 100, "selectedIndex": 0, "right": 0, "left": 0, "bottom": 0 },
                        "child": [{
                                "type": "Box",
                                "props": { "top": 0, "right": 0, "name": "item0", "left": 0, "bottom": 0 },
                                "child": [{
                                        "type": "TextArea",
                                        "props": {
                                            "var": "o_text_zjc",
                                            "top": 0,
                                            "right": 20,
                                            "prompt": "助记词，用空格分开",
                                            "padding": "10",
                                            "left": 20,
                                            "layoutEnabled": true,
                                            "height": 80,
                                            "borderColor": "#b5b5b5"
                                        }
                                    }, {
                                        "type": "ComboBox",
                                        "props": {
                                            "y": 85,
                                            "var": "o_sel_dir",
                                            "skin": "comp/combobox.png",
                                            "sizeGrid": "0,0,0,0",
                                            "selectedIndex": 0,
                                            "right": 20,
                                            "left": 20,
                                            "labels": "m/44’/60’/0’/0/0 Jaxx Metamask(ETH), m/44’/60’/0’/0 Ledger(ETH), m/44’/60’/1’/0/0 自定义路径",
                                            "height": 30
                                        }
                                    }, {
                                        "type": "TextInput",
                                        "props": {
                                            "y": 115,
                                            "var": "o_text_pass",
                                            "type": "password",
                                            "right": 20,
                                            "prompt": "密码",
                                            "maxChars": 30,
                                            "left": 20,
                                            "height": 30
                                        }
                                    }, {
                                        "type": "Image",
                                        "props": { "y": 145, "skin": "img/itemSepar.png", "right": 20, "left": 20 }
                                    }, {
                                        "type": "TextInput",
                                        "props": {
                                            "y": 145,
                                            "x": 20,
                                            "var": "o_text_confpass",
                                            "type": "password",
                                            "right": 20,
                                            "prompt": "确认密码",
                                            "maxChars": 30,
                                            "left": 20,
                                            "height": 30
                                        }
                                    }, {
                                        "type": "Image",
                                        "props": { "y": 175, "x": 10, "skin": "img/itemSepar.png", "right": 20, "left": 20 }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 185,
                                            "x": 40,
                                            "width": 212,
                                            "valign": "middle",
                                            "text": "我已经仔细阅读并同意(隐私及服务条款)",
                                            "height": 20,
                                            "color": "#ff0400"
                                        }
                                    }, {
                                        "type": "CheckBox",
                                        "props": {
                                            "y": 189,
                                            "x": 20,
                                            "width": 16,
                                            "var": "o_check_agree",
                                            "skin": "comp/radio.png",
                                            "mouseEnabled": true,
                                            "layoutEnabled": true,
                                            "hitTestPrior": true,
                                            "height": 16,
                                            "click": "updateArgee"
                                        }
                                    }, {
                                        "type": "Button",
                                        "props": {
                                            "y": 220,
                                            "var": "o_btn_import",
                                            "skin": "img/blue.png",
                                            "right": 20,
                                            "left": 20,
                                            "label": "开始导入",
                                            "height": 40
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "var": "hetp_zjc",
                                            "valign": "middle",
                                            "text": "什么是助记词?",
                                            "right": 20,
                                            "left": 20,
                                            "height": 30,
                                            "color": "#0d7fa3",
                                            "bottom": 20,
                                            "align": "center"
                                        }
                                    }]
                            }, {
                                "type": "Box",
                                "props": { "top": 0, "right": 0, "name": "item1", "left": 0, "bottom": 0 },
                                "child": [{
                                        "type": "TextArea",
                                        "props": {
                                            "y": -120,
                                            "x": -10,
                                            "wordWrap": true,
                                            "valign": "middle",
                                            "top": 0,
                                            "text": "直接复制粘贴以太坊官方钱包keystore文件内容至输入框，或者扫二维码录入。",
                                            "stroke": 0,
                                            "right": 20,
                                            "padding": "5",
                                            "left": 20,
                                            "leading": 5,
                                            "layoutEnabled": true,
                                            "height": 40,
                                            "editable": false,
                                            "disabled": true,
                                            "color": "#8e8e8e",
                                            "align": "left"
                                        }
                                    }, {
                                        "type": "TextArea",
                                        "props": {
                                            "y": 45,
                                            "x": 40,
                                            "wordWrap": true,
                                            "width": 260,
                                            "var": "text_keystore",
                                            "top": 45,
                                            "right": 20,
                                            "prompt": "keystore文本内容",
                                            "padding": "10",
                                            "left": 20,
                                            "layoutEnabled": true,
                                            "height": 80,
                                            "borderColor": "#b5b5b5"
                                        }
                                    }, {
                                        "type": "TextInput",
                                        "props": {
                                            "y": 140,
                                            "var": "keystore_pass",
                                            "type": "password",
                                            "right": 20,
                                            "prompt": "keystore密码",
                                            "maxChars": 30,
                                            "left": 20,
                                            "height": 30
                                        }
                                    }, {
                                        "type": "Image",
                                        "props": { "y": 170, "x": 20, "skin": "img/itemSepar.png", "right": 20, "left": 20 }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 185,
                                            "x": 40,
                                            "width": 212,
                                            "valign": "middle",
                                            "text": "我已经仔细阅读并同意(隐私及服务条款)",
                                            "height": 20,
                                            "color": "#ff0400"
                                        }
                                    }, {
                                        "type": "CheckBox",
                                        "props": {
                                            "y": 189,
                                            "x": 20,
                                            "width": 16,
                                            "var": "ks_agree",
                                            "skin": "comp/radio.png",
                                            "mouseEnabled": true,
                                            "layoutEnabled": true,
                                            "hitTestPrior": true,
                                            "height": 16,
                                            "click": "updateArgee"
                                        }
                                    }, {
                                        "type": "Button",
                                        "props": {
                                            "y": 220,
                                            "x": 20,
                                            "var": "ks_btn_import",
                                            "skin": "img/blue.png",
                                            "right": 20,
                                            "left": 20,
                                            "label": "开始导入",
                                            "height": 40
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 279,
                                            "x": 20,
                                            "var": "help_keystore",
                                            "valign": "middle",
                                            "text": "什么是keystore?",
                                            "right": 20,
                                            "left": 20,
                                            "height": 30,
                                            "color": "#0d7fa3",
                                            "bottom": 20,
                                            "align": "center"
                                        }
                                    }]
                            }, {
                                "type": "Box",
                                "props": { "top": 0, "right": 0, "name": "item2", "left": 0, "bottom": 0 },
                                "child": [{
                                        "type": "TextArea",
                                        "props": {
                                            "wordWrap": true,
                                            "var": "text_privateKey",
                                            "top": 0,
                                            "stroke": 0,
                                            "right": 20,
                                            "prompt": "明文私钥",
                                            "padding": "5",
                                            "left": 20,
                                            "leading": 5,
                                            "layoutEnabled": true,
                                            "height": 80,
                                            "color": "#8e8e8e",
                                            "borderColor": "#b5b5b5",
                                            "align": "left"
                                        }
                                    }, {
                                        "type": "TextInput",
                                        "props": {
                                            "y": 80,
                                            "x": 40,
                                            "var": "pk_text_pass",
                                            "type": "password",
                                            "right": 20,
                                            "prompt": "keystore密码",
                                            "maxChars": 30,
                                            "left": 20,
                                            "height": 30
                                        }
                                    }, {
                                        "type": "Image",
                                        "props": { "y": 110, "x": 20, "skin": "img/itemSepar.png", "right": 20, "left": 20 }
                                    }, {
                                        "type": "TextInput",
                                        "props": {
                                            "y": 120,
                                            "x": 20,
                                            "var": "pk_text_confPass",
                                            "type": "password",
                                            "right": 20,
                                            "prompt": "keystore密码",
                                            "maxChars": 30,
                                            "left": 20,
                                            "height": 30
                                        }
                                    }, {
                                        "type": "Image",
                                        "props": { "y": 150, "x": 40, "skin": "img/itemSepar.png", "right": 20, "left": 20 }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 160,
                                            "x": 40,
                                            "width": 212,
                                            "valign": "middle",
                                            "text": "我已经仔细阅读并同意(隐私及服务条款)",
                                            "height": 20,
                                            "color": "#ff0400"
                                        }
                                    }, {
                                        "type": "CheckBox",
                                        "props": {
                                            "y": 164,
                                            "width": 16,
                                            "var": "pk_agree",
                                            "skin": "comp/radio.png",
                                            "mouseEnabled": true,
                                            "left": 20,
                                            "layoutEnabled": true,
                                            "hitTestPrior": true,
                                            "height": 16,
                                            "click": "updateArgee"
                                        }
                                    }, {
                                        "type": "Button",
                                        "props": {
                                            "y": 220,
                                            "x": 40,
                                            "var": "pk_btn_import",
                                            "skin": "img/blue.png",
                                            "right": 20,
                                            "left": 20,
                                            "label": "开始导入",
                                            "height": 40
                                        }
                                    }, {
                                        "type": "Label",
                                        "props": {
                                            "y": 209,
                                            "x": 40,
                                            "var": "help_pk",
                                            "valign": "middle",
                                            "text": "什么是私钥?",
                                            "right": 20,
                                            "left": 20,
                                            "height": 30,
                                            "color": "#0d7fa3",
                                            "bottom": 20,
                                            "align": "center"
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
            "props": { "width": 300, "height": 429 },
            "child": [{
                    "type": "Rect",
                    "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 60, "fillColor": "#c6e2ee" }
                }, {
                    "type": "Label",
                    "props": {
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
                        "height": 20,
                        "color": "#000000",
                        "bold": true
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 120,
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
                        "height": 20,
                        "color": "#000000",
                        "bold": true
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 160,
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
                        "overflow": "scroll",
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
                        "height": 20,
                        "color": "#000000"
                    }
                }, {
                    "type": "Button",
                    "props": { "var": "btn_moreinfo", "right": 0, "left": 0, "label": "查看更多交易详情", "height": 40, "bottom": 0 }
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
            "props": { "width": 300, "height": 429 },
            "child": [{
                    "type": "Rect",
                    "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 60, "fillColor": "#c6e2ee" }
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
            "props": { "width": 300, "height": 429 },
            "child": [{
                    "type": "Rect",
                    "props": { "y": 55, "x": 0, "width": 301, "lineWidth": 1, "height": 40, "fillColor": "#737dea" }
                }, {
                    "type": "Label",
                    "props": { "y": 60, "x": 0, "text": " 。 密码用于保护私钥和交易授权，强度非常重要", "fontSize": 12, "color": "#ffffff" }
                }, {
                    "type": "Label",
                    "props": { "y": 76, "x": 0, "text": " 。WWWallet不存储密码，也无法帮您找回，请务必牢记", "fontSize": 12, "color": "#ffffff" }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 107,
                        "x": 20,
                        "width": 260,
                        "var": "text_wall_name",
                        "prompt": "钱包名称",
                        "maxChars": 20,
                        "layoutEnabled": true,
                        "height": 22
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 140,
                        "x": 20,
                        "width": 132,
                        "var": "text_pass",
                        "type": "password",
                        "prompt": "密码",
                        "maxChars": 30,
                        "layoutEnabled": true,
                        "height": 22
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 171,
                        "x": 20,
                        "width": 260,
                        "var": "text_pass_conf",
                        "type": "password",
                        "prompt": "确认密码",
                        "maxChars": 30,
                        "layoutEnabled": true
                    }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 202,
                        "x": 20,
                        "width": 260,
                        "visible": false,
                        "var": "text_pass_prompt",
                        "prompt": "密码提示信息(可不填)",
                        "maxChars": 30,
                        "layoutEnabled": true
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 214,
                        "x": 40,
                        "width": 212,
                        "var": "lab_info",
                        "valign": "middle",
                        "text": "我已经仔细阅读并同意(隐私及服务条款)",
                        "height": 20,
                        "color": "#ff0400"
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 244,
                        "x": 20,
                        "width": 250,
                        "var": "btn_create",
                        "skin": "comp/button.png",
                        "sizeGrid": "0,0,0,0",
                        "mouseEnabled": false,
                        "label": "创建钱包",
                        "height": 40,
                        "disabled": true
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 293,
                        "x": 20,
                        "width": 250,
                        "var": "btn_import",
                        "skin": "comp/button.png",
                        "sizeGrid": "0,0,0,0",
                        "label": "导入钱包",
                        "height": 40
                    }
                }, {
                    "type": "CheckBox",
                    "props": {
                        "y": 218,
                        "x": 20,
                        "width": 16,
                        "var": "check_argee",
                        "skin": "comp/radio.png",
                        "mouseEnabled": true,
                        "layoutEnabled": true,
                        "hitTestPrior": true,
                        "height": 16,
                        "click": "updateArgee"
                    }
                }, {
                    "type": "Image",
                    "props": { "y": 20, "skin": "template/Navigator/bar bottom.png", "right": 0, "left": 0, "height": 30 }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 20,
                        "valign": "middle",
                        "text": "创建钱包",
                        "strokeColor": "#f9f9f9",
                        "skin": "template/Navigator/label.png",
                        "height": 30,
                        "fontSize": 16,
                        "font": "SimHei",
                        "centerX": 0,
                        "align": "center"
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 20,
                        "var": "btn_back",
                        "skin": "template/Navigator/btn_BackButton.png",
                        "left": 20,
                        "labelSize": 22,
                        "labelColors": "#057AFB,#057AFB,#7EB9FB",
                        "height": 30
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 145,
                        "visible": false,
                        "var": "lab_pass_level",
                        "text": "密码强度：强",
                        "right": 20,
                        "color": "#32ff00"
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
            "props": { "width": 300, "height": 429 },
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
                        "skin": "img/wallet_manage.png",
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
                            "type": "Rect",
                            "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 50, "fillColor": "#efe6e6" }
                        }, {
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
                            "type": "Rect",
                            "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 50, "fillColor": "#efe6e6" }
                        }, {
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
                            "type": "Rect",
                            "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 50, "fillColor": "#efe6e6" }
                        }, {
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
            "props": { "width": 300, "height": 429 },
            "child": [{
                    "type": "Rect",
                    "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 150, "fillColor": "#c1e2ef" }
                }, {
                    "type": "Image",
                    "props": { "y": 20, "width": 22, "skin": "img/eth.jpg", "height": 22, "centerX": 0 }
                }, {
                    "type": "Label",
                    "props": { "y": 51, "var": "lab_wName", "text": "0", "color": "#000000", "centerX": 0 }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 70,
                        "width": 134,
                        "var": "lab_wAddr",
                        "text": ".",
                        "overflow": "hidden",
                        "height": 12,
                        "color": "#000000",
                        "centerX": -1
                    }
                }, {
                    "type": "Label",
                    "props": { "y": 125, "x": 25, "valign": "middle", "text": "总资产($)", "height": 20, "color": "#000000" }
                }, {
                    "type": "Label",
                    "props": { "y": 90, "x": 25, "var": "lab_total_usd", "text": "≈ 0", "fontSize": 22, "color": "#000000" }
                }, {
                    "type": "Image",
                    "props": { "y": 70, "x": 220, "width": 10, "var": "btn_owner_info", "skin": "img/ewm.jpg", "height": 10 }
                }, {
                    "type": "Image",
                    "props": {
                        "y": 125,
                        "width": 20,
                        "var": "btn_addCoin",
                        "skin": "img/add.png",
                        "sizeGrid": "0,0,0,0",
                        "right": 25,
                        "height": 20
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "width": 150,
                        "var": "btn_assets",
                        "selected": true,
                        "labelAlign": "center",
                        "label": "资产",
                        "height": 40,
                        "bottom": 0
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "x": 160,
                        "width": 150,
                        "var": "btn_me",
                        "mouseEnabled": true,
                        "left": 150,
                        "layoutEnabled": true,
                        "label": "我",
                        "height": 40,
                        "bottom": 0
                    }
                }, {
                    "type": "Image",
                    "props": { "width": 30, "var": "btn_more", "top": 20, "skin": "img/more.png", "right": 20, "height": 30 }
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
            "props": { "width": 300, "height": 429 },
            "child": [{
                    "type": "Rect",
                    "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 60, "fillColor": "#c6e2ee" }
                }, {
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
                        "width": 150,
                        "var": "btn_create",
                        "labelAlign": "center",
                        "label": "创建钱包",
                        "height": 40,
                        "bottom": 0
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 389,
                        "x": 150,
                        "width": 150,
                        "var": "btn_import",
                        "mouseEnabled": true,
                        "left": 150,
                        "layoutEnabled": true,
                        "label": "导入钱包",
                        "height": 40,
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
            "props": { "width": 300, "height": 429 },
            "child": [{
                    "type": "Rect",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 300,
                        "name": "item1",
                        "lineWidth": 1,
                        "height": 150,
                        "fillColor": "#8596ee"
                    }
                }, {
                    "type": "Label",
                    "props": { "y": 20, "x": -6, "top": 20, "text": "我", "name": "item1", "color": "#ffffff", "centerX": 0 }
                }, {
                    "type": "Image",
                    "props": { "y": 60, "x": 66, "var": "btn_manageWal", "skin": "img/wallet_manage.png", "name": "item1" }
                }, {
                    "type": "Image",
                    "props": { "y": 60, "x": 202, "var": "btn_dealHistory", "skin": "img/deal_history.png", "name": "item1" }
                }, {
                    "type": "Label",
                    "props": { "y": 95, "x": 56, "text": "管理钱包", "name": "item1", "color": "#ffffff" }
                }, {
                    "type": "Label",
                    "props": { "y": 95, "x": 192, "text": "交易记录", "name": "item1", "color": "#ffffff" }
                }, {
                    "type": "Button",
                    "props": {
                        "width": 150,
                        "var": "btn_assets",
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
                        "selected": true,
                        "mouseEnabled": true,
                        "left": 150,
                        "layoutEnabled": true,
                        "label": "我",
                        "height": 40,
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
            "props": { "width": 300, "height": 429 },
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
            "props": { "width": 105, "height": 429 },
            "child": [{
                    "type": "Image",
                    "props": { "var": "bg", "top": 0, "skin": "img/white.jpg", "right": 0, "left": 0, "bottom": 0 }
                }, {
                    "type": "Image",
                    "props": { "y": 40, "x": 10, "width": 15, "skin": "img/wallet_manage.png", "height": 15 }
                }, {
                    "type": "Label",
                    "props": { "y": 40, "x": 40, "var": "lab_sao", "text": "扫一扫", "height": 15, "color": "#000000" }
                }, {
                    "type": "Image",
                    "props": { "y": 65, "x": 10, "width": 15, "skin": "img/wallet_manage.png", "height": 15 }
                }, {
                    "type": "Label",
                    "props": { "y": 65, "x": 40, "var": "lab_create", "text": "创建钱包", "color": "#000000" }
                }, { "type": "Image", "props": { "y": 100, "x": 0, "skin": "img/itemSepar.png", "right": 0, "left": 0 } }]
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
            "props": { "width": 300, "height": 429 },
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
                        "height": 40,
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
            "props": { "y": 0, "x": 0, "width": 300, "height": 429 },
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
                        "height": 40,
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
            "props": { "y": 0, "x": 0, "width": 300, "height": 429 },
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
                        "y": 65,
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
                        "y": 106,
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
                    "props": { "y": 159, "x": 24, "text": "转账金额( ETH) :", "color": "#868686" }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 159,
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
                        "y": 201,
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
                    "props": { "y": 186, "text": "矿工费用(GWEI)", "left": 24, "color": "#868686" }
                }, { "type": "Label", "props": { "y": 247, "text": "慢", "left": 25, "color": "#868686" } }, {
                    "type": "Label",
                    "props": { "y": 247, "text": "快", "right": 20, "color": "#868686" }
                }, {
                    "type": "Label",
                    "props": { "y": 277, "text": "最大交易手续费", "left": 25, "height": 16, "color": "#868686" }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 277,
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
                        "y": 292,
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
                    "props": { "y": 324, "text": "总费用", "left": 25, "height": 16, "color": "#868686" }
                }, {
                    "type": "TextInput",
                    "props": {
                        "y": 324,
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
                        "y": 339,
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
                        "y": 86,
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
                        "y": 126,
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
                        "height": 40,
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
            "props": { "width": 300, "height": 429 },
            "child": [{
                    "type": "Rect",
                    "props": { "y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 110, "fillColor": "#c6e2ee" }
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
                        "var": "btn_send",
                        "skin": "comp/button.png",
                        "sizeGrid": "0,0,0,0",
                        "right": 150,
                        "left": 0,
                        "labelAlign": "center",
                        "label": "转账",
                        "height": 40,
                        "bottom": 0
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "var": "btn_receive",
                        "skin": "comp/button.png",
                        "sizeGrid": "0,0,0,0",
                        "right": 0,
                        "left": 150,
                        "labelAlign": "center",
                        "label": "收款",
                        "height": 40,
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