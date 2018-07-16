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
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var backup;
    (function (backup) {
        var BackUpConf = /** @class */ (function (_super) {
            __extends(BackUpConf, _super);

            function BackUpConf() {
                var _this = _super.call(this) || this;
                _this.clickedKey = [];
                _this.init();
                _this.initEvent();
                return _this;
            }

            BackUpConf.prototype.setData = function (key, wName) {
                this.walletName = wName;
                this.rightKey = key.trim().split(" ");
                //用于验证
                this.key = key.trim().split(" ");
                this.key = this.key.sort(function (a, b) {
                    return Math.random() > 0.5 ? 1 : -1;
                });
                //选择
                var labels = this.comp.box_label._childs;
                for (var i = 0; i < labels.length; i++) {
                    var label = labels[i];
                    label.on(Laya.Event.CLICK, this, this.btnClick, [3, labels[i]]);
                    label.text = this.key[i];
                }
                //取消选择
                var labels2 = this.comp.box_zjc._childs;
                for (var i = 0; i < labels2.length; i++) {
                    var label = labels2[i];
                    label.on(Laya.Event.CLICK, this, this.btnClick, [4, labels2[i]]);
                    label.text = '';
                }
            };
            BackUpConf.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            BackUpConf.prototype.init = function () {
                this.comp = new ui.backup.BackUpConfUI();
                Laya.stage.addChild(this.comp);
            };
            BackUpConf.prototype.initEvent = function () {
                this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1, null]);
                this.comp.btn_conf.on(Laya.Event.CLICK, this, this.btnClick, [2, null]);
            };
            BackUpConf.prototype.btnClick = function (index, v) {
                if (1 == index) {
                    this.comp.removeSelf();
                    util.compShow([]);
                    return;
                }
                if (2 == index) {
                    var lables = this.comp.box_zjc._childs;
                    for (var i = 0; i < this.rightKey.length; i++) {
                        if (lables[i] && lables[i].text.trim() != this.rightKey[i]) {
                            new view.alert.Warn("备份失败", "请检查你的助记词").popup();
                            return;
                        }
                    }
                    var conf = new view.alert.confirm("备份成功", "你备份的助记词顺序验证正确，是否从WWEC Wallet中移除该助记词？");
                    conf.setData(this.walletName);
                    conf.popup();
                    // this.comp.removeSelf();//不删除
                    this.parentUI.visible = false;
                    util.putCompStack(this.comp);
                    return;
                }
                if (3 == index) {
                    if (v.bgColor == '#598ADA') {
                        return;
                    }
                    v.bgColor = '#598ADA';
                    var lables = this.comp.box_zjc._childs;
                    for (var i = 0; i < lables.length; i++) {
                        var t = lables[i];
                        if (!t.text) {
                            t.text = v.text;
                            t.bgColor = 'white';
                            this.clickedKey[this.clickedKey.length] = v.text;
                            break;
                        }
                    }
                    return;
                }
                if (4 == index) {
                    var lables = this.comp.box_zjc._childs;
                    var temp = [];
                    for (var i = 0; i < this.clickedKey.length; i++) { //删除反选的值，并设置label颜色
                        if (this.clickedKey[i].trim() != v.text.trim()) {
                            temp[temp.length] = this.clickedKey[i];
                        }
                        else {
                            var lables2 = this.comp.box_label._childs;
                            for (var j = 0; j < lables2.length; j++) {
                                if (lables2[j].text == v.text) {
                                    lables2[j].bgColor = null;
                                    break;
                                }
                            }
                        }
                    }
                    this.clickedKey = temp;
                    for (var i = 0; i < lables.length; i++) { //反选box清空
                        var t = lables[i];
                        t.text = '';
                    }
                    for (var i = 0; i < lables.length; i++) { //反选box赋值
                        var t = lables[i];
                        t.text = this.clickedKey[i] ? this.clickedKey[i] : '';
                        t.bgColor = this.clickedKey[i] ? 'white' : null;
                    }
                }
            };
            return BackUpConf;
        }(ui.backup.BackUpConfUI));
        backup.BackUpConf = BackUpConf;
    })(backup = view.backup || (view.backup = {}));
})(view || (view = {}));
//# sourceMappingURL=BackUpConf.js.map