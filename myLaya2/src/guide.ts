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
loadProcess();
let progressBar;
let tip;
let loadBg;

function loadProcess() {
    Laya.loader.load(["res/atlas/load.atlas"], Laya.Handler.create(this, beginLoad));
}

function beginLoad() {
    Laya.stage.bgColor = 'white';

    loadBg = new Laya.Image().loadImage("load/start.png");
    loadBg.left = 0;
    loadBg.right = 0;
    loadBg.top = 0;
    loadBg.bottom = 0;
    Laya.stage.addChild(loadBg);


    tip = new Laya.Label();
    tip.bottom = 90;
    tip.left = 0;
    tip.right = 0;
    tip.centerX = 0;
    tip.height = 50;
    tip.fontSize = 32;
    tip.text = "正在检查更新:0%";
    tip.color = '#163853';
    Laya.stage.addChild(tip);

    progressBar = new Laya.ProgressBar("load/progress.png")
    progressBar.width = 500;
    progressBar.height = 40;
    progressBar.centerX = 0;
    progressBar.bottom = 140;
    progressBar.sizeGrid = "5,5,5,5";

    let res: Array<any> =
        ["res/atlas/img/main.atlas",
            "res/atlas/img/coins.atlas",
            "res/atlas/img/guide.atlas"]
    Laya.loader.load(res, null, Laya.Handler.create(this, onProcess, null, false));
    progressBar.changeHandler = new Laya.Handler(this, onChange);
    Laya.stage.addChild(progressBar);
    // "res/atlas/template/ScrollBar.atlas",
    // Laya.loader.load("res/atlas/template/Warn.atlas");
    // Laya.loader.load("res/atlas/template/Navigator.atlas");
    // Laya.loader.load("res/atlas/template/ToolBar.atlas");
    // Laya.loader.load("res/atlas/template/Switcher.atlas");
    // Laya.loader.load("res/atlas/template/List.atlas");
    // Laya.loader.load("res/atlas/template/Search.atlas");
    // Laya.loader.load(""res/atlas/comp.atlas"]");
}

function onProcess(p: number) {
    progressBar.value = p;
}

function onChange(process: number) {
    tip.text = "正在检查更新:" + (process * 100).toFixed(0) + "%";
    if (process == 1) {
        loadBg.visible = false;
        tip.visible = false;
        progressBar.visible = false;
        Laya.stage.removeChild(loadBg);
        Laya.stage.removeChild(tip);
        Laya.stage.removeChild(progressBar);
        Laya.timer.once(1, this, enter);
    }
}

function enter() {
    //有些测试遗留数据会出错
    laya.net.LocalStorage.clear();
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
