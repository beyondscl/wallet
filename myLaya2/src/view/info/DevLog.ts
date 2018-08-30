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
            native.native.setCurrView(this,2);
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
            if (typeof data == 'string') {
                let number = cell.getChildByName('number') as Laya.Label;
                number.text = data;
                let content = cell.getChildByName('content') as Laya.Label;
                content.visible = false;
            } else {
                let content = cell.getChildByName('content') as Laya.Label;
                content.text =  data[0];
                let number = cell.getChildByName('number') as Laya.Label;
                number.visible = false;
            }
        }

        public setParentUI (v: view.info.about) {
            this.parentUI = v;
        }

        private goBack(){
            this.comp.removeSelf();
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI,2);
        }



        private dataFrom () {
            let j = [];
            j = [
                "2.2.2",
                [" • 修复了查询不到部分转入记录的BUG"],
                [" • 新增了热更新功能"],
                "2.2.1",
                [" • 修复了备份助记词时钱包密码失效的BUG"],
                [" • 修复了一些手机回退操作时导致界面重叠的BUG"],
                "2.2.0",
                [" • 修复已知bug"],
                [" • 添加逐级回退"],
                [" • 交易记录分月显示"],
                "2.1.2",
                [" • 添加公告功能"],
                [" • 更新主页刷新数据时间"],
                [" • 优化交易列表和明细界面"],
                [" • 修复已知bug"],
                "2.1.1",
                [" • 修复转账失败"],
                "2.1.0",
                [" • 扫码互通"],
                [" • 添加交易历史记录"],
                [" • 添加修改钱包密码功能"],
                [" • 修复已知bug"],
                "2.0.1",
                [" • 优化启动"],
                [" • 优化界面"],
                [" • 添加修改钱包密码功能"],
                [" • 修复已知bug"],
                "1.1.4",
                [" • 添加用户模块"],
                [" • 优化启动页"],
                [" • 修复已知bug"],
                "1.1.3",
                [" • 优化弹出框"],
                [" • 获取管理钱包总金额"],
                [" • 添加删除钱包功能"],
                [" • 修复已知bug"],
                "1.1.2",
                [" • 添加扫描二维码功能"],
                [" • 完善节点点击区域"],
                [" • 优化字体"],
                [" • 修复已知bug"],
                "1.1.0",
                [" • 产品基本功能"]
            ]
            return j;
        }
    }
}