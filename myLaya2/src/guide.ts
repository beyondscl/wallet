import EnterApp = view.EnterApp;

class guide {
    private guideUI: ui.GuideUI;
    private index: number = 0;
    private mouseStart = 0;

    constructor() {
        this.init();
    }

    protected init(): void {
        this.guideUI = new ui.GuideUI();
        Laya.stage.addChild(this.guideUI);

        this.guideUI.on(Laya.Event.MOUSE_DOWN, this, this.mouseHandler);
        this.guideUI.on(Laya.Event.MOUSE_UP, this, this.mouseHandler);
        this.guideUI.on(Laya.Event.CLICK, this, this.mouseHandler);
        this.guideUI.on(Laya.Event.MOUSE_MOVE, this, this.mouseHandler);
        this.guideUI.img_enter.on(Laya.Event.CLICK, this, function () {
            Laya.stage.removeChild(this.guideUI);
            new EnterApp();
        });
    }

    //functions
    private touchEvent(next: number) {
        next = next <= 0 ? 0 : next;
        next = next >= 4 ? 3 : next;
        this.index = next;
        let childs: Array<View> = this.guideUI._childs;
        for (let i = 0; i < childs.length; i++) {
            if (childs[i].name && childs[i].name == ('item' + next)) {
                childs[i].visible = true;
            }
            if (childs[i].name && childs[i].name != ('item' + next)) {
                childs[i].visible = false;
            }
        }
    }

    private mouseHandler(e: Event): void {
        switch (e.type) {
            case Laya.Event.MOUSE_DOWN:
                this.mouseStart = Laya.stage.mouseX;
                break;
            case Laya.Event.MOUSE_UP:
                if (Laya.stage.mouseX - this.mouseStart > 0)
                    this.touchEvent(this.index - 1);
                else
                    this.touchEvent(this.index + 1);
                break;
            case Laya.Event.CLICK:
                break;
            case Laya.Event.MOUSE_OVER:
                break;
        }
    }
}

//程序入口
console.log("start init stage!!!!!!!!!!!")
Laya.init(config.prod.appWidth, config.prod.appHeight, Laya.WebGL);
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
//设置适配模式
Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;//SCALE_EXACTFIT
//设置横竖屏
Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
//设置水平对齐
Laya.stage.alignH = "center";
//设置垂直对齐
Laya.stage.alignV = "middle";
//激活资源版本控制,太费时间
// Laya.ResourceVersion.enable("version.json", Laya.Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
beginLoad();

function beginLoad() {
    //加载完成就直接进入，后面的异步加载
    let res: Array<any> =
        ["res/atlas/img/main.atlas",
            "res/atlas/img/coins.atlas",
            "res/atlas/template/ScrollBar.atlas",
            "res/atlas/img/guide.atlas",
            "res/atlas/comp.atlas"]
    Laya.loader.load(res, Laya.Handler.create(null, enter));
    // Laya.loader.load("res/atlas/template/Warn.atlas");
    // Laya.loader.load("res/atlas/template/Navigator.atlas");
    // Laya.loader.load("res/atlas/template/ToolBar.atlas");
    // Laya.loader.load("res/atlas/template/Switcher.atlas");
    // Laya.loader.load("res/atlas/template/List.atlas");
    // Laya.loader.load("res/atlas/template/Search.atlas");
    // Laya.loader.load(""res/atlas/comp.atlas"]");
}

function enter() {
    //有些测试遗留数据会出错
    // laya.net.LocalStorage.clear();
    let accept = util.getItem(config.prod.appAccept);
    if (accept) {
        let walletNames = util.getItem(config.prod.appKey);
        if (!walletNames) {
            new guide();
            return;
        }
        let wallet = util.getItem(walletNames[0]);
        let walletMod = new mod.walletMod();
        walletMod.setWallet(wallet);
        mod.userMod.defWallet = walletMod;
        new view.WalletMain().initQueryData(walletMod);
        console.log("end loading!")
    } else {
        new view.info.Service();
    }

}