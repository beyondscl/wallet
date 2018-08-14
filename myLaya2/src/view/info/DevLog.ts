module view {
    export class dev_log extends ui.info.DevLogUI {
        public comp: ui.info.DevLogUI;
        private parentUI: view.info.about;

        constructor () {
            super();
            this.init();
            this.initEvent();
        }

        private init () {
            this.comp = new ui.info.DevLogUI;
            Laya.stage.addChild(this.comp);
            this.setList();
        }

        private initEvent () {
            this.comp.back_btn.on(Laya.Event.CLICK,this,this.goBack);
        }

        private setList () {
            this.comp.list.array = this.dataFrom();
            this.comp.list.repeatY = this.dataFrom().length;
            this.comp.list.vScrollBarSkin = '';
            this.comp.list.renderHandler = new Laya.Handler(this, this.onListRender);
        }

        private onListRender(cell: Laya.Box, index: number) {
            let data = this.comp.list.array[index];
            let number = cell.getChildByName('number') as Laya.Label;
            number.text = data.version;
            let content = cell.getChildByName('content') as Laya.Label;
            content.text =  data.log;
        }

        public setParentUI (v: view.info.about) {
            this.parentUI = v;
        }

        private goBack(){
            this.comp.visible = false;
            this.parentUI.comp.visible = true;
        }



        private dataFrom () {
            let j = [];
            j = [
                {
                    "version": "1.1.0",
                    "time": "2018年7月7日",
                    "log": "产品基本功能"
                },
                {
                    "version": "1.1.2",
                    "time": "2018年7月11日",
                    "log": "添加扫描二维码功能,完善节点点击区域,优化字体,修复已知bug"
                },
                {
                    "version": "1.1.3",
                    "time": "2018年7月13日",
                    "log": "优化弹出框,获取管理钱包总金额,添加删除钱包功能,修复已知bug"
                },
                {
                    "version": "1.1.4",
                    "time": "2018年7月19日",
                    "log": "添加用户模块,优化启动页,修复已知bug"
                },
                {
                    "version": "2.0.1",
                    "time": "2018年7月24日",
                    "log": "优化启动,优化界面,添加修改钱包密码功能,修复已知bug"
                },
                {
                    "version": "2.1.0",
                    "time": "2018年7月30日",
                    "log": "扫码互通,添加交易历史记录,添加修改钱包密码功能,修复已知bug"
                },
                {
                    "version": "2.1.1",
                    "time": "2018年8月1日",
                    "log": "修复转账失败"
                },
                {
                    "version": "2.1.2",
                    "time": "2018年8月10日",
                    "log": "添加公告功能,更新主页刷新数据时间,优化交易列表和明细界面,修复已知bug"
                },
                {
                    "version": "2.2.0",
                    "time": "2018年8月10日",
                    "log": "修复已知bug,添加逐级回退,交易记录分月显示"
                },
            ]
            return j;
        }
    }
}