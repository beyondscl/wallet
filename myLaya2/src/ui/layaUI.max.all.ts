import View=laya.ui.View;
import Dialog=laya.ui.Dialog;

module ui.alert {
    export class EnterPassUI extends Dialog {
        public text_pass: Laya.TextInput;
        public btn_cancel: Laya.Button;
        public btn_submit: Laya.Button;

        public static uiView: any = {
            "type": "Dialog",
            "props": {"width": 200, "layoutEnabled": true, "height": 120},
            "child": [{
                "type": "Box",
                "props": {"top": 0, "right": 0, "left": 0, "layoutEnabled": true, "bottom": 0},
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.alert.EnterPassUI.uiView);

        }

    }
}

module ui.alert {
    export class ExportPriKeyUI extends Dialog {
        public text_pKey: Laya.TextArea;
        public btn_copy: Laya.Button;

        public static uiView: any = {
            "type": "Dialog",
            "props": {"y": 0, "x": 0, "width": 200, "height": 120},
            "child": [{
                "type": "Box",
                "props": {"top": 0, "right": 0, "left": 0, "layoutEnabled": true, "bottom": 0},
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.alert.ExportPriKeyUI.uiView);

        }

    }
}

module ui.alert {
    export class IframeUI extends Dialog {

        public static uiView: any = {
            "type": "Dialog",
            "props": {"width": 375, "height": 667},
            "child": [{
                "type": "Image",
                "props": {"top": 0, "skin": "img/main/white.jpg", "right": 0, "left": 0, "bottom": 0}
            }]
        };

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.alert.IframeUI.uiView);

        }

    }
}

module ui.alert {
    export class WarnZjcUI extends Dialog {
        public btn_know: Laya.Button;

        public static uiView: any = {
            "type": "Dialog",
            "props": {"width": 345, "height": 314},
            "child": [{
                "type": "Box",
                "props": {"top": 0, "right": 0, "left": 0, "bottom": 0},
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
                    "props": {
                        "y": 22,
                        "x": 145,
                        "width": 56,
                        "skin": "img/main/camera@2x.png",
                        "height": 56,
                        "centerX": 0
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 91,
                        "x": 132,
                        "text": "请勿截图",
                        "height": 28,
                        "fontSize": 20,
                        "color": "#163853",
                        "centerX": 0,
                        "bold": true
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 139,
                        "x": 30,
                        "valign": "middle",
                        "text": "如果有人获取你的助记词将直接获取你的资产",
                        "height": 22,
                        "fontSize": 12,
                        "color": "#687076",
                        "align": "left"
                    }
                }, {
                    "type": "Label",
                    "props": {
                        "y": 161,
                        "x": 28,
                        "valign": "middle",
                        "text": "请抄写下来助记词并存放在安全的地方。",
                        "height": 22,
                        "fontSize": 12,
                        "color": "#687076",
                        "align": "left"
                    }
                }, {
                    "type": "Button",
                    "props": {
                        "y": 229,
                        "x": 71,
                        "width": 204,
                        "var": "btn_know",
                        "stateNum": 1,
                        "skin": "img/main/anliu@2x.png",
                        "label": "我知道了",
                        "height": 40,
                        "centerX": 0
                    }
                }]
            }]
        };

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.alert.WarnZjcUI.uiView);

        }

    }
}

module ui.backup {
    export class BackUpZjcUI extends View {
        public btn_back: Laya.Image;
        public btn_backup: Laya.Button;
        public text_zjc: Laya.TextArea;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 375, "height": 667},
            "child": [{
                "type": "Image",
                "props": {
                    "y": 27,
                    "x": 10,
                    "width": 30,
                    "var": "btn_back",
                    "skin": "img/main/back@2x.png",
                    "height": 30
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 31,
                    "valign": "middle",
                    "text": "备份助记词",
                    "height": 22,
                    "fontSize": 16,
                    "color": "#163853",
                    "centerX": 0,
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 99,
                    "x": 15,
                    "valign": "middle",
                    "text": "抄写下你的钱包助记词",
                    "height": 28,
                    "fontSize": 20,
                    "color": "#163853",
                    "bold": true,
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 137,
                    "x": 15,
                    "valign": "middle",
                    "text": "助记词用于恢复钱包和充值钱包密码，将它准确的抄写到纸上，",
                    "height": 22,
                    "fontSize": 12,
                    "color": "#687076",
                    "align": "left"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 159,
                    "x": 13,
                    "valign": "middle",
                    "text": " 并存放在只有你知道的安全的地方。",
                    "height": 22,
                    "fontSize": 12,
                    "color": "#687076",
                    "align": "left"
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 437,
                    "width": 354,
                    "var": "btn_backup",
                    "stateNum": 1,
                    "skin": "img/main/anliu@2x.png",
                    "sizeGrid": "0,0,0,0",
                    "labelSize": 16,
                    "labelColors": "#ffffff",
                    "label": "下一步",
                    "height": 40,
                    "centerX": 0
                }
            }, {
                "type": "TextArea",
                "props": {
                    "y": 209,
                    "wordWrap": true,
                    "width": 344,
                    "var": "text_zjc",
                    "text": "wing wing wing wing wing wing wing wing wing wing wing wing",
                    "padding": "15",
                    "leading": 15,
                    "height": 76,
                    "fontSize": 14,
                    "editable": false,
                    "color": "#163853",
                    "centerX": 0,
                    "bgColor": "#ECECEC",
                    "align": "left"
                }
            }]
        };

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.backup.BackUpZjcUI.uiView);

        }

    }
}

module ui.coin {
    export class AddCoinsUI extends View {
        public btn_goback: Laya.Button;
        public btn_query: Laya.Button;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 375, "visible": true, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0},
            "child": [{
                "type": "Rect",
                "props": {"y": 0, "x": 0, "width": 375, "lineWidth": 1, "height": 60, "fillColor": "#c6e2ee"}
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.coin.AddCoinsUI.uiView);

        }

    }
}

module ui.coin {
    export class queryCoinsUI extends View {

        public static uiView: any = {"type": "View", "props": {"width": 300, "height": 429}};

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.coin.queryCoinsUI.uiView);

        }

    }
}

module ui {
    export class EnterAppUI extends View {
        public btn_create: Laya.Button;
        public btn_import: Laya.Button;

        public static uiView: any = {
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
                "props": {"top": 0, "right": 0, "left": 0, "bottom": 0},
                "child": [{
                    "type": "Image",
                    "props": {"visible": false, "top": 0, "right": 0, "left": 0, "bottom": 0}
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
                        "skin": "img/main/anliu-@2x.png",
                        "labelSize": 36,
                        "labelColors": "#ffffff",
                        "label": "导入钱包",
                        "height": 80,
                        "centerX": 0
                    }
                }]
            }]
        };

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.EnterAppUI.uiView);

        }

    }
}

module ui {
    export class GuideUI extends View {
        public item0: Laya.Box;
        public item1: Laya.Box;
        public item2: Laya.Box;
        public item3: Laya.Box;
        public img_enter: Laya.Image;

        public static uiView: any = {
            "type": "View",
            "props": {"y": 0, "x": 0, "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0},
            "child": [{
                "type": "Box",
                "props": {"var": "item0", "top": 0, "right": 0, "name": "item0", "left": 0, "bottom": 0},
                "child": [{
                    "type": "Image",
                    "props": {"top": 0, "skin": "img/guide/bg.png", "right": 0, "left": 0, "bottom": 0}
                }, {
                    "type": "Image",
                    "props": {"width": 708, "top": 0, "skin": "img/guide/ydy_1.png", "left": 0, "height": 1254}
                }, {
                    "type": "Image",
                    "props": {"y": 1025, "skin": "img/guide/ydy_1_word.png", "right": 0, "left": 0, "height": 164}
                }, {
                    "type": "Box",
                    "props": {"y": 10, "x": 10, "right": 0, "left": 0, "height": 16, "bottom": 42},
                    "child": [{
                        "type": "Image",
                        "props": {"x": 306, "width": 16, "skin": "img/guide/ty16_1.png", "height": 16}
                    }, {
                        "type": "Image",
                        "props": {"x": 348, "width": 16, "skin": "img/guide/tu16.png", "height": 16}
                    }, {
                        "type": "Image",
                        "props": {"x": 388, "width": 16, "skin": "img/guide/tu16.png", "height": 16}
                    }, {"type": "Image", "props": {"x": 430, "width": 16, "skin": "img/guide/tu16.png", "height": 16}}]
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
                    "props": {"y": 0, "x": 0, "top": 0, "skin": "img/guide/bg.png", "right": 0, "left": 0, "bottom": 0}
                }, {
                    "type": "Image",
                    "props": {"y": 0, "x": 0, "width": 710, "skin": "img/guide/ydy_2.png", "height": 1314}
                }, {
                    "type": "Image",
                    "props": {"y": 1000, "width": 749, "skin": "img/guide/ydy_2_word.png", "left": 0, "height": 164}
                }, {
                    "type": "Box",
                    "props": {"y": 1276, "x": 0, "right": 0, "left": 0, "height": 16, "bottom": 42},
                    "child": [{
                        "type": "Image",
                        "props": {"x": 306, "width": 16, "skin": "img/guide/tu16.png", "height": 16}
                    }, {
                        "type": "Image",
                        "props": {"x": 348, "width": 16, "skin": "img/guide/ty16_1.png", "height": 16}
                    }, {
                        "type": "Image",
                        "props": {"x": 388, "width": 16, "skin": "img/guide/tu16.png", "height": 16}
                    }, {"type": "Image", "props": {"x": 430, "width": 16, "skin": "img/guide/tu16.png", "height": 16}}]
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
                    "props": {"y": 0, "x": 0, "top": 0, "skin": "img/guide/bg.png", "right": 0, "left": 0, "bottom": 0}
                }, {
                    "type": "Image",
                    "props": {"y": 0, "skin": "img/guide/ydy_3.png", "right": 0, "left": 0, "height": 1194}
                }, {
                    "type": "Image",
                    "props": {"y": 1000, "skin": "img/guide/ydy_3_word.png", "right": 0, "left": 0, "height": 164}
                }, {
                    "type": "Box",
                    "props": {"y": 1276, "x": 0, "right": 0, "left": 0, "height": 16, "bottom": 42},
                    "child": [{
                        "type": "Image",
                        "props": {"x": 306, "width": 16, "skin": "img/guide/tu16.png", "height": 16}
                    }, {
                        "type": "Image",
                        "props": {"x": 348, "width": 16, "skin": "img/guide/tu16.png", "height": 16}
                    }, {
                        "type": "Image",
                        "props": {"x": 388, "width": 16, "skin": "img/guide/ty16_1.png", "height": 16}
                    }, {"type": "Image", "props": {"x": 430, "width": 16, "skin": "img/guide/tu16.png", "height": 16}}]
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
                    "props": {"y": 0, "x": 0, "top": 0, "skin": "img/guide/bg.png", "right": 0, "left": 0, "bottom": 0}
                }, {
                    "type": "Image",
                    "props": {"y": 0, "x": 0, "width": 748, "skin": "img/guide/ydy_4.png", "height": 1252}
                }, {
                    "type": "Image",
                    "props": {"y": 1000, "skin": "img/guide/ydy_4_word.png", "right": 0, "left": 0, "height": 164}
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.GuideUI.uiView);

        }

    }
}

module ui {
    export class LoginUI extends View {
        public lab_title: Laya.Label;
        public lab_quit: Laya.Label;
        public lab_contury: Laya.Label;
        public lab_sele_contury: Laya.Label;
        public text_phoneNum: Laya.TextInput;
        public text_password: Laya.TextInput;

        public static uiView: any = {
            "type": "View",
            "props": {"y": 0, "x": 0, "width": 600, "height": 800},
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
                "props": {"y": 60, "x": 300, "toY": 1, "toX": 0, "lineWidth": 600, "lineColor": "#9f9f9f"}
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
                "props": {"y": 115, "x": 300, "toY": 1, "toX": 0, "lineWidth": 500, "lineColor": "#9f9f9f"}
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
                "props": {"y": 165, "x": 300, "toY": 1, "toX": 0, "lineWidth": 500, "lineColor": "#9f9f9f"}
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
                "props": {"y": 209, "x": 300, "toY": 1, "toX": 0, "lineWidth": 500, "lineColor": "#9f9f9f"}
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.LoginUI.uiView);

        }

    }
}

module ui {
    export class MsgUI extends Dialog {
        public lab_title: Laya.Label;
        public lab_msg: laya.display.Text;

        public static uiView: any = {
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
                "props": {"y": 135, "x": 30, "width": 240, "lineWidth": 1, "height": 180, "fillColor": "#ffffff"}
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
                "props": {"y": 185, "x": 30, "toY": 0, "toX": 240, "lineWidth": 1, "lineColor": "#b9b9b9"}
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
            }, {"type": "Label", "props": {"text": "label"}}]
        };

        constructor() {
            super()
        }

        createChildren(): void {
            View.regComponent("Text", laya.display.Text);

            super.createChildren();
            this.createView(ui.MsgUI.uiView);

        }

    }
}

module ui.set {
    export class ExpKeystoreUI extends View {
        public btn_back: Laya.Button;
        public btn_tab: Laya.Tab;
        public viewStack: Laya.ViewStack;
        public text_keystore: Laya.TextArea;
        public btn_copy: Laya.Button;
        public item1: Laya.Box;
        public img_keystore: Laya.Image;

        public static uiView: any = {
            "type": "View",
            "props": {"y": 0, "x": 0, "width": 375, "layoutEnabled": true, "height": 667},
            "child": [{
                "type": "Rect",
                "props": {"y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 60}
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
                "props": {"y": 60, "x": 10, "skin": "img/itemSepar.png", "right": 0, "left": 0}
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.set.ExpKeystoreUI.uiView);

        }

    }
}

module ui.set {
    export class UpdatePassUI extends View {
        public btn_back: Laya.Button;
        public lab_save: Laya.Label;
        public lab_oldPass: Laya.TextInput;
        public lab_newPass: Laya.TextInput;
        public lab_confPass: Laya.TextInput;
        public lab_import: Laya.Label;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 375, "height": 667},
            "child": [{
                "type": "Rect",
                "props": {"y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 60}
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
                "props": {"top": 60, "skin": "img/itemSepar.png", "right": 0, "left": 0}
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
                "props": {"y": 130, "x": 0, "skin": "img/itemSepar.png", "right": 0, "left": 0}
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
                "props": {"y": 180, "x": 0, "skin": "img/itemSepar.png", "right": 0, "left": 0}
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.set.UpdatePassUI.uiView);

        }

    }
}

module ui.set {
    export class WalletImportUI extends View {
        public btn_back: Laya.Button;
        public btn_sao: Laya.Image;
        public tab: Laya.Tab;
        public stack: Laya.ViewStack;
        public o_text_zjc: Laya.TextArea;
        public o_sel_dir: Laya.ComboBox;
        public o_text_pass: Laya.TextInput;
        public o_text_confpass: Laya.TextInput;
        public o_check_agree: Laya.CheckBox;
        public o_btn_import: Laya.Button;
        public hetp_zjc: Laya.Label;
        public text_keystore: Laya.TextArea;
        public keystore_pass: Laya.TextInput;
        public ks_agree: Laya.CheckBox;
        public ks_btn_import: Laya.Button;
        public help_keystore: Laya.Label;
        public text_privateKey: Laya.TextArea;
        public pk_text_pass: Laya.TextInput;
        public pk_text_confPass: Laya.TextInput;
        public pk_agree: Laya.CheckBox;
        public pk_btn_import: Laya.Button;
        public help_pk: Laya.Label;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 375, "top": 0, "right": 0, "left": 0, "layoutEnabled": true, "height": 667, "bottom": 0},
            "child": [{
                "type": "Label",
                "props": {
                    "y": 20,
                    "x": 90,
                    "valign": "middle",
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
                    "y": 20,
                    "x": 20,
                    "width": 117,
                    "var": "btn_back",
                    "skin": "template/Navigator/btn_BackButton.png",
                    "height": 30
                }
            }, {
                "type": "Image",
                "props": {"width": 30, "var": "btn_sao", "top": 20, "skin": "img/sao.png", "right": 20, "height": 30}
            }, {
                "type": "Image",
                "props": {"top": 60, "skin": "img/itemSepar.png", "right": 0, "left": 0}
            }, {
                "type": "Tab",
                "props": {"y": 60, "x": 10, "var": "tab", "selectedIndex": 0, "right": 0, "left": 0, "height": 40},
                "child": [{
                    "type": "Button",
                    "props": {
                        "width": 125,
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
                        "x": 125,
                        "width": 125,
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
                        "width": 125,
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
                "props": {"var": "stack", "top": 100, "selectedIndex": 0, "right": 0, "left": 0, "bottom": 0},
                "child": [{
                    "type": "Box",
                    "props": {"top": 0, "right": 0, "name": "item0", "left": 0, "bottom": 0},
                    "child": [{
                        "type": "TextArea",
                        "props": {
                            "width": 335,
                            "var": "o_text_zjc",
                            "top": 0,
                            "right": 20,
                            "prompt": "助记词，用空格分开",
                            "padding": "10",
                            "left": 20,
                            "layoutEnabled": true,
                            "height": 120,
                            "borderColor": "#b5b5b5"
                        }
                    }, {
                        "type": "ComboBox",
                        "props": {
                            "y": 130,
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
                            "y": 195,
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
                        "props": {"y": 225, "skin": "img/itemSepar.png", "right": 20, "left": 20}
                    }, {
                        "type": "TextInput",
                        "props": {
                            "y": 230,
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
                        "props": {"y": 260, "x": 10, "skin": "img/itemSepar.png", "right": 20, "left": 20}
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 280,
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
                            "y": 284,
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
                            "y": 315,
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
                    "props": {"top": 0, "right": 0, "name": "item1", "left": 0, "bottom": 0},
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
                            "wordWrap": true,
                            "width": 334,
                            "var": "text_keystore",
                            "top": 51,
                            "right": 20,
                            "prompt": "keystore文本内容",
                            "padding": "10",
                            "left": 21,
                            "layoutEnabled": true,
                            "height": 114,
                            "borderColor": "#b5b5b5"
                        }
                    }, {
                        "type": "TextInput",
                        "props": {
                            "y": 185,
                            "x": 20,
                            "var": "keystore_pass",
                            "type": "password",
                            "right": 20,
                            "prompt": "keystore密码",
                            "maxChars": 30,
                            "left": 21,
                            "height": 30
                        }
                    }, {
                        "type": "Image",
                        "props": {"y": 215, "x": 20, "skin": "img/itemSepar.png", "right": 20, "left": 21}
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 230,
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
                            "y": 234,
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
                            "y": 265,
                            "x": 20,
                            "var": "ks_btn_import",
                            "skin": "img/blue.png",
                            "right": 20,
                            "left": 21,
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
                    "props": {"top": 0, "right": 0, "name": "item2", "left": 0, "bottom": 0},
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
                            "y": 125,
                            "x": 20,
                            "var": "pk_text_pass",
                            "type": "password",
                            "right": 20,
                            "prompt": "keystore密码",
                            "maxChars": 30,
                            "left": 21,
                            "height": 30
                        }
                    }, {
                        "type": "Image",
                        "props": {"y": 155, "x": 20, "skin": "img/itemSepar.png", "right": 20, "left": 21}
                    }, {
                        "type": "TextInput",
                        "props": {
                            "y": 165,
                            "x": 20,
                            "var": "pk_text_confPass",
                            "type": "password",
                            "right": 20,
                            "prompt": "keystore密码",
                            "maxChars": 30,
                            "left": 21,
                            "height": 30
                        }
                    }, {
                        "type": "Image",
                        "props": {"y": 195, "x": 20, "skin": "img/itemSepar.png", "right": 20, "left": 21}
                    }, {
                        "type": "Label",
                        "props": {
                            "y": 205,
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
                            "y": 209,
                            "x": 20,
                            "width": 16,
                            "var": "pk_agree",
                            "skin": "comp/radio.png",
                            "mouseEnabled": true,
                            "left": 21,
                            "layoutEnabled": true,
                            "hitTestPrior": true,
                            "height": 16,
                            "click": "updateArgee"
                        }
                    }, {
                        "type": "Button",
                        "props": {
                            "y": 265,
                            "x": 20,
                            "var": "pk_btn_import",
                            "skin": "img/blue.png",
                            "right": 20,
                            "left": 21,
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.set.WalletImportUI.uiView);

        }

    }
}

module ui {
    export class TransDetailUI extends View {
        public lab_coin_name: Laya.Label;
        public btn_goback: Laya.Button;
        public lab_amount: Laya.Label;
        public lab_type: Laya.Label;
        public lab_addr: Laya.Label;
        public lab_transId: Laya.Label;
        public lab_gas: Laya.Label;
        public lab_confirm: Laya.Label;
        public lab_time: Laya.Label;
        public lab_nonce: Laya.Label;
        public btn_moreinfo: Laya.Button;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0},
            "child": [{
                "type": "Image",
                "props": {"skin": "img/blue.png", "right": 0, "left": 0, "height": 60}
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.TransDetailUI.uiView);

        }

    }
}

module ui {
    export class TransHisListUI extends View {
        public btn_goback: Laya.Button;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0},
            "child": [{
                "type": "Rect",
                "props": {"y": 0, "x": 0, "width": 375, "lineWidth": 1, "height": 60, "fillColor": "#c6e2ee"}
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.TransHisListUI.uiView);

        }

    }
}

module ui {
    export class WalletBackUpUI extends View {
        public btn_back: Laya.Image;
        public btn_backup: Laya.Button;
        public info_backup: Laya.Label;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 375, "height": 667},
            "child": [{
                "type": "Image",
                "props": {
                    "y": 27,
                    "x": 10,
                    "width": 30,
                    "var": "btn_back",
                    "skin": "img/main/back@2x.png",
                    "height": 30
                }
            }, {
                "type": "Image",
                "props": {"y": 133, "width": 62, "skin": "img/main/anquan@2x.png", "height": 72, "centerX": 0}
            }, {
                "type": "Label",
                "props": {
                    "y": 31,
                    "valign": "middle",
                    "text": "备份钱包",
                    "height": 22,
                    "fontSize": 16,
                    "color": "#163853",
                    "centerX": 0,
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 248,
                    "valign": "middle",
                    "text": "立即备份你的钱包！",
                    "height": 28,
                    "fontSize": 20,
                    "color": "#163853",
                    "centerX": 0,
                    "bold": true,
                    "align": "center"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 318,
                    "valign": "middle",
                    "text": "备份钱包：导出「助记词」并抄写到安全的地方",
                    "left": 15,
                    "height": 22,
                    "fontSize": 12,
                    "color": "#687076",
                    "align": "left"
                }
            }, {
                "type": "Label",
                "props": {
                    "y": 340,
                    "valign": "middle",
                    "text": " 千万不要保存到网络上。然后尝试转入，转出小额资产开始使用。",
                    "left": 13,
                    "height": 22,
                    "fontSize": 12,
                    "color": "#687076",
                    "align": "left"
                }
            }, {
                "type": "Button",
                "props": {
                    "y": 473,
                    "x": 10,
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
            }, {
                "type": "Label",
                "props": {
                    "y": 536,
                    "x": 10,
                    "var": "info_backup",
                    "text": "查看备份详细教程",
                    "height": 17,
                    "fontSize": 16,
                    "color": "#687076",
                    "centerX": 0,
                    "align": "center"
                }
            }]
        };

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.WalletBackUpUI.uiView);

        }

    }
}

module ui {
    export class WalletCreateUI extends View {
        public text_wall_name: Laya.TextInput;
        public text_pass: Laya.TextInput;
        public text_pass_conf: Laya.TextInput;
        public lab_info: Laya.Label;
        public check_argee: Laya.CheckBox;
        public btn_back: Laya.Button;
        public lab_pass_level: Laya.Label;
        public lab_warn_wName: Laya.Label;
        public lab_pass: Laya.Label;
        public lab_pass_conf: Laya.Label;
        public btn_create: Laya.Button;
        public btn_import: Laya.Label;
        public lab_words: Laya.Label;
        public box_pass_level: Laya.Box;
        public href_ysfw: Laya.Label;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 750, "visible": true, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0},
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
                    "width": 301,
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
                "type": "Button",
                "props": {
                    "y": 828,
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
                "props": {"y": 198, "x": 30, "width": 12, "skin": "img/main/Oval@2x.png", "height": 12}
            }, {
                "type": "Image",
                "props": {"y": 246, "x": 30, "width": 12, "skin": "img/main/Oval@2x.png", "height": 12}
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
                "props": {"y": 428, "x": 656, "width": 36, "var": "box_pass_level", "height": 76},
                "child": [{
                    "type": "Image",
                    "props": {"width": 36, "top": 0, "skin": "img/main/fangkuai@2x.png", "name": "a", "height": 16}
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
                    "props": {"width": 36, "skin": "img/main/fangkuai@2x.png", "name": "d", "height": 16, "bottom": 0}
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
            }]
        };

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.WalletCreateUI.uiView);

        }

    }
}

module ui {
    export class WalletDetailUI extends View {
        public lab_wName: Laya.Label;
        public btn_back: Laya.Button;
        public btn_save: Laya.Label;
        public lab_total: Laya.Label;
        public img_wImg: Laya.Image;
        public lab_wAddr: Laya.Label;
        public text_wName: Laya.TextInput;
        public box_reverpass: Laya.Box;
        public box_expSeckey: Laya.Box;
        public box_expKeystore: Laya.Box;
        public btn_backup: Laya.Button;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0},
            "child": [{
                "type": "Rect",
                "props": {"y": 0, "x": 0, "width": 300, "lineWidth": 1, "height": 60}
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
                "props": {"y": 161, "var": "text_wName", "text": "myeth", "left": 20}
            }, {
                "type": "Box",
                "props": {"y": 186, "var": "box_reverpass", "right": 0, "left": 0, "height": 50},
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
                }, {"type": "Image", "props": {"skin": "template/List/arrow.png", "right": 20, "centerY": 0}}]
            }, {
                "type": "Box",
                "props": {"y": 250, "var": "box_expSeckey", "right": 0, "left": 0, "height": 50},
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
                }, {"type": "Image", "props": {"skin": "template/List/arrow.png", "right": 20, "centerY": 0}}]
            }, {
                "type": "Box",
                "props": {"y": 300, "x": 0, "var": "box_expKeystore", "right": 0, "left": 0, "height": 50},
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
                }, {"type": "Image", "props": {"skin": "template/List/arrow.png", "right": 20, "centerY": 0}}]
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.WalletDetailUI.uiView);

        }

    }
}

module ui {
    export class WalletMainUI extends View {
        public lab_wName: Laya.Label;
        public lab_wAddr: Laya.Label;
        public lab_total_usd: Laya.Label;
        public btn_owner_info: Laya.Image;
        public btn_addCoin: Laya.Image;
        public btn_assets: Laya.Button;
        public btn_me: Laya.Button;
        public btn_more: Laya.Image;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0},
            "child": [{
                "type": "Rect",
                "props": {"y": 0, "x": 0, "width": 375, "lineWidth": 1, "height": 240, "fillColor": "#c1e2ef"}
            }, {
                "type": "Image",
                "props": {"y": 50, "width": 30, "skin": "img/eth.jpg", "height": 30, "centerX": 0}
            }, {
                "type": "Label",
                "props": {"y": 81, "var": "lab_wName", "text": "0", "height": 30, "color": "#000000", "centerX": 0}
            }, {
                "type": "Label",
                "props": {
                    "y": 100,
                    "var": "lab_wAddr",
                    "valign": "middle",
                    "text": "AAAAAAAA......AAAAAAAA",
                    "overflow": "hidden",
                    "height": 30,
                    "color": "#000000",
                    "centerX": -5,
                    "align": "left"
                }
            }, {
                "type": "Label",
                "props": {"y": 190, "x": 25, "valign": "middle", "text": "总资产($)", "height": 30, "color": "#000000"}
            }, {
                "type": "Label",
                "props": {
                    "y": 155,
                    "var": "lab_total_usd",
                    "text": "≈ 0",
                    "right": 20,
                    "left": 20,
                    "height": 35,
                    "fontSize": 32,
                    "color": "#000000"
                }
            }, {
                "type": "Image",
                "props": {"y": 102, "x": 260, "width": 30, "var": "btn_owner_info", "skin": "img/ewm.jpg", "height": 30}
            }, {
                "type": "Image",
                "props": {
                    "y": 190,
                    "width": 40,
                    "var": "btn_addCoin",
                    "skin": "img/add.png",
                    "sizeGrid": "0,0,0,0",
                    "right": 20,
                    "height": 40
                }
            }, {
                "type": "Button",
                "props": {
                    "x": 0,
                    "width": 187,
                    "var": "btn_assets",
                    "selected": true,
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
                    "left": 187,
                    "layoutEnabled": true,
                    "label": "我",
                    "height": 60,
                    "bottom": 0
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 50,
                    "width": 30,
                    "var": "btn_more",
                    "top": 20,
                    "skin": "img/more.png",
                    "right": 20,
                    "height": 30
                }
            }]
        };

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.WalletMainUI.uiView);

        }

    }
}

module ui {
    export class WalletManageUI extends View {
        public btn_goback: Laya.Button;
        public btn_create: Laya.Button;
        public btn_import: Laya.Button;
        public list_wallet: Laya.List;
        public img_wallet: Laya.Image;
        public lab_wName: Laya.Label;
        public lab_wAddr: Laya.Label;
        public lab_wTotal: Laya.Label;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0},
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
                    "props": {"right": 0, "renderType": "render", "name": "render", "left": 0, "height": 80},
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
                        "props": {"top": 10, "skin": "template/List/arrow.png", "right": 20}
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.WalletManageUI.uiView);

        }

    }
}

module ui {
    export class WalletMeUI extends View {
        public btn_manageWal: Laya.Image;
        public btn_dealHistory: Laya.Image;
        public btn_assets: Laya.Button;
        public btn_me: Laya.Button;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0},
            "child": [{
                "type": "Rect",
                "props": {
                    "y": 0,
                    "x": 0,
                    "width": 375,
                    "name": "item1",
                    "lineWidth": 1,
                    "height": 150,
                    "fillColor": "#8596ee"
                }
            }, {
                "type": "Label",
                "props": {"y": 20, "x": -6, "top": 20, "text": "我", "name": "item1", "color": "#ffffff", "centerX": 0}
            }, {
                "type": "Image",
                "props": {
                    "y": 60,
                    "x": 66,
                    "width": 30,
                    "var": "btn_manageWal",
                    "skin": "img/main/add.png",
                    "name": "item1",
                    "height": 30
                }
            }, {
                "type": "Image",
                "props": {
                    "y": 60,
                    "x": 259,
                    "width": 30,
                    "var": "btn_dealHistory",
                    "skin": "img/main/add.png",
                    "name": "item1",
                    "height": 30
                }
            }, {
                "type": "Label",
                "props": {"y": 95, "x": 56, "text": "管理钱包", "name": "item1", "color": "#ffffff"}
            }, {
                "type": "Label",
                "props": {"y": 95, "x": 249, "text": "交易记录", "name": "item1", "color": "#ffffff"}
            }, {
                "type": "Button",
                "props": {
                    "width": 187,
                    "var": "btn_assets",
                    "left": 0,
                    "labelAlign": "center",
                    "label": "资产",
                    "height": 60,
                    "bottom": 0
                }
            }, {
                "type": "Button",
                "props": {
                    "width": 187,
                    "var": "btn_me",
                    "selected": true,
                    "mouseEnabled": true,
                    "left": 187,
                    "layoutEnabled": true,
                    "label": "我",
                    "height": 60,
                    "bottom": 0
                }
            }]
        };

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.WalletMeUI.uiView);

        }

    }
}

module ui {
    export class WalletMexUI extends View {
        public viewStack: Laya.ViewStack;
        public wallet_name: Laya.Label;
        public wallet_addr: Laya.Label;
        public list_coin: Laya.List;
        public btn_tab: Laya.Tab;
        public btn_assets: Laya.Button;
        public btn_me: Laya.Button;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 300, "top": 0, "right": 0, "left": 0, "height": 429, "bottom": 0},
            "child": [{
                "type": "ViewStack",
                "props": {"y": 0, "x": 0, "var": "viewStack", "selectedIndex": 2},
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
                    "props": {"y": 126, "x": 25, "text": "总资产(¥)", "name": "item0", "color": "#000000"}
                }, {
                    "type": "Label",
                    "props": {"y": 90, "x": 25, "text": "≈ 0", "name": "item0", "fontSize": 22, "color": "#000000"}
                }, {
                    "type": "Image",
                    "props": {"y": 70, "x": 220, "width": 10, "skin": "img/ewm.jpg", "name": "item0", "height": 10}
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
                    "props": {"y": 0, "x": 0, "width": 0, "var": "list_coin", "name": "item0", "height": 0}
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
                    "props": {"top": 20, "text": "我", "name": "item1", "color": "#ffffff", "centerX": 0}
                }, {
                    "type": "Image",
                    "props": {"y": 60, "x": 66, "skin": "img/wallet_manage.png", "name": "item1"}
                }, {
                    "type": "Image",
                    "props": {"y": 60, "x": 202, "skin": "img/deal_history.png", "name": "item1"}
                }, {
                    "type": "Label",
                    "props": {"y": 95, "x": 56, "text": "管理钱包", "name": "item1", "color": "#ffffff"}
                }, {"type": "Label", "props": {"y": 95, "x": 192, "text": "交易记录", "name": "item1", "color": "#ffffff"}}]
            }, {
                "type": "Tab",
                "props": {"y": 389, "x": 0, "var": "btn_tab", "selectedIndex": 0},
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.WalletMexUI.uiView);

        }

    }
}

module ui {
    export class WalletQuickUI extends Dialog {
        public bg: Laya.Image;
        public lab_sao: Laya.Label;
        public lab_create: Laya.Label;
        public img_spe: Laya.Image;

        public static uiView: any = {
            "type": "Dialog",
            "props": {"y": 0, "x": 0, "width": 150, "height": 667},
            "child": [{
                "type": "Image",
                "props": {"y": 0, "x": 0, "width": 150, "var": "bg", "skin": "img/main/white.jpg", "height": 667}
            }, {
                "type": "Image",
                "props": {"y": 60, "x": 10, "width": 30, "skin": "img/main/add.png", "height": 30}
            }, {
                "type": "Label",
                "props": {
                    "y": 60,
                    "x": 50,
                    "var": "lab_sao",
                    "valign": "middle",
                    "text": "扫一扫",
                    "height": 30,
                    "fontSize": 16,
                    "color": "#000000"
                }
            }, {
                "type": "Image",
                "props": {"y": 110, "x": 10, "width": 30, "skin": "img/main/add.png", "height": 30}
            }, {
                "type": "Label",
                "props": {
                    "y": 110,
                    "x": 50,
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
                    "top": 180,
                    "skin": "img/main/itemSepar.png",
                    "right": 0,
                    "left": 0,
                    "height": 2
                }
            }]
        };

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.WalletQuickUI.uiView);

        }

    }
}

module ui {
    export class WalletReceiveUI extends View {
        public btn_goback: Laya.Button;
        public btn_copy: Laya.Button;
        public img_wAddr: Laya.Image;
        public lab_wAddr: Laya.TextInput;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0},
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.WalletReceiveUI.uiView);

        }

    }
}

module ui {
    export class WalletSendUI extends View {
        public btn_goback: Laya.Button;
        public lab_coin_name: Laya.Label;
        public btn_next: Laya.Button;

        public static uiView: any = {
            "type": "View",
            "props": {"y": 0, "x": 0, "width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0},
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.WalletSendUI.uiView);

        }

    }
}

module ui {
    export class WalletSendSubmitUI extends View {
        public btn_goback: Laya.Button;
        public text_addr_to: Laya.TextInput;
        public text_addr_from: Laya.TextInput;
        public send_amout: Laya.Label;
        public sli_gas: Laya.HSlider;
        public lab_max_gas: Laya.TextInput;
        public lab_max_gas_usd: Laya.TextInput;
        public lab_max_total: Laya.TextInput;
        public lab_max_total_usd: Laya.TextInput;
        public btn_submit: Laya.Button;

        public static uiView: any = {
            "type": "View",
            "props": {"y": 0, "x": 0, "width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0},
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
                "props": {"y": 182, "x": 24, "text": "转账金额( ETH) :", "color": "#868686"}
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
                "props": {"y": 214, "text": "矿工费用(GWEI)", "left": 24, "color": "#868686"}
            }, {"type": "Label", "props": {"y": 275, "text": "慢", "left": 25, "color": "#868686"}}, {
                "type": "Label",
                "props": {"y": 275, "text": "快", "right": 20, "color": "#868686"}
            }, {
                "type": "Label",
                "props": {"y": 307, "text": "最大交易手续费", "left": 25, "height": 16, "color": "#868686"}
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
                "props": {"y": 357, "text": "总费用", "left": 25, "height": 16, "color": "#868686"}
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.WalletSendSubmitUI.uiView);

        }

    }
}

module ui {
    export class WalletTransferUI extends View {
        public lab_coin_name: Laya.Label;
        public lab_coin_total: Laya.Label;
        public btn_send: Laya.Button;
        public btn_receive: Laya.Button;
        public btn_goback: Laya.Button;

        public static uiView: any = {
            "type": "View",
            "props": {"width": 375, "top": 0, "right": 0, "left": 0, "height": 667, "bottom": 0},
            "child": [{
                "type": "Rect",
                "props": {"y": 0, "x": 0, "width": 375, "lineWidth": 1, "height": 110, "fillColor": "#c6e2ee"}
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
                "props": {"y": 78, "text": "总资产($)", "fontSize": 12, "color": "#000000", "centerX": 0}
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

        constructor() {
            super()
        }

        createChildren(): void {

            super.createChildren();
            this.createView(ui.WalletTransferUI.uiView);

        }

    }
}
