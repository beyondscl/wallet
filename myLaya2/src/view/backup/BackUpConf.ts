/**Created by the LayaAirIDE*/
module view.backup {
    export class BackUpConf extends ui.backup.BackUpConfUI {
        private comp: ui.backup.BackUpConfUI;
        private parentUI: View;
        private rightKey: Array<string>;
    ;
        private key: Array<string>;
        private clickedKey: Array<string> = [];

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(key: string) {
            this.rightKey = key.trim().split(" ");
            ;//用于验证
            this.key = key.trim().split(" ");
            this.key = this.key.sort(function (a, b) {
                return Math.random() > 0.5 ? 1 : -1;
            });
            //选择
            let labels = this.comp.box_label._childs;
            for (let i = 0; i < labels.length; i++) {
                let label: Label = labels[i];
                label.on(Laya.Event.CLICK, this, this.btnClick, [3, labels[i]]);
                label.text = this.key[i];
            }
            //取消选择
            let labels2 = this.comp.box_zjc._childs;
            for (let i = 0; i < labels2.length; i++) {
                let label: Label = labels2[i];
                label.on(Laya.Event.CLICK, this, this.btnClick, [4, labels2[i]]);
                label.text = '';
            }

        }

        public setParetUI(parentUI: any) {
            this.parentUI = parentUI;
        }

        private init() {
            this.comp = new ui.backup.BackUpConfUI();
            Laya.stage.addChild(this.comp);
        }

        private initEvent() {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1, null]);
            this.comp.btn_conf.on(Laya.Event.CLICK, this, this.btnClick, [2, null]);
        }

        private btnClick(index: number, v: Label) {
            if (1 == index) {
                this.comp.removeSelf();
                this.parentUI.visible = true;
                return;
            }
            if (2 == index) {
                let lables = this.comp.box_zjc._childs;
                for (let i = 0; i < this.rightKey.length; i++) {
                    if (lables[i] && lables[i].text.trim() != this.rightKey[i]) {
                        new view.alert.Warn("备份失败", "请检查你的助记词").popup();
                        return;
                    }
                }
                new view.alert.Warn("备份成功", "").popup();//删除或,提示成功,然后颜色变灰
                this.comp.removeSelf();
                this.parentUI.visible = true;
                return;
            }
            if (3 == index) {
                if (v.bgColor == '#598ADA') {
                    return;
                }
                v.bgColor = '#598ADA';
                let lables = this.comp.box_zjc._childs;
                for (let i = 0; i < lables.length; i++) {
                    let t: Label = lables[i]
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
                let lables = this.comp.box_zjc._childs;
                let temp: Array<string> = [];
                for (let i = 0; i < this.clickedKey.length; i++) {//删除反选的值，并设置label颜色
                    if (this.clickedKey[i].trim() != v.text.trim()) {
                        temp[temp.length] = this.clickedKey[i];
                    } else {
                        let lables2 = this.comp.box_label._childs;
                        for (let j = 0; j < lables2.length; j++) {
                            if (lables2[j].text == v.text) {
                                lables2[j].bgColor = null;
                                break;
                            }
                        }
                    }
                }
                this.clickedKey = temp;
                for (let i = 0; i < lables.length; i++) {//反选box清空
                    let t: Label = lables[i]
                    t.text = '';
                }
                for (let i = 0; i < lables.length; i++) {//反选box赋值
                    let t: Label = lables[i];
                    t.text = this.clickedKey[i] ? this.clickedKey[i] : '';
                    t.bgColor = this.clickedKey[i] ? 'white' : null;
                }
            }
        }
    }
}


