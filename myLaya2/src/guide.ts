import EnterApp = view.EnterApp;

class guide {

    private guideUI: ui.GuideUI;
    private index: number = 0;
    private mouseStart = 0;
    private parentUI: view.info.about;

    constructor() {
        this.init();
    }

    public setParentUI(p: view.info.about) {
        this.parentUI = p;
    }

    private init(): void {
        this.guideUI = new ui.GuideUI();
        Laya.stage.addChild(this.guideUI);

        this.guideUI.on(Laya.Event.MOUSE_DOWN, this, this.mouseHandler);
        this.guideUI.on(Laya.Event.MOUSE_UP, this, this.mouseHandler);
        this.guideUI.on(Laya.Event.CLICK, this, this.mouseHandler);
        this.guideUI.on(Laya.Event.MOUSE_MOVE, this, this.mouseHandler);
        this.guideUI.img_enter.on(Laya.Event.CLICK, this, this.go);
        native.native.setCurrView(this,1)
    }

    private go() {
        this.guideUI.removeSelf();
        util.setItemJson(config.prod.appGuide, []);
        if (this.parentUI) {
            this.parentUI.comp.visible = true;
        } else {
            new EnterApp();
        }
    }

    private goBack(){
        if(this.parentUI){
            native.native.setCurrView(this,2)
        }else{
            native.native.setCurrView(this,1)
        }
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
console.log("start init stage!!!!!!!!!!!", new Date().getTime())
Laya.init(config.prod.appWidth, config.prod.appHeight, Laya.WebGL);
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
//设置适配模式
Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;//SCALE_EXACTFIT
//fps
Laya.stage.frameRate = Laya.Stage.FRAME_MOUSE;
//设置横竖屏
Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
//设置水平对齐
Laya.stage.alignH = "center";
//设置垂直对齐
Laya.stage.alignV = "middle";
//打开性能面板
if (Laya.Browser.window.env != "prod") {
    Laya.Stat.show(0, 0);
}
Laya.stage.alpha = 0;
//激活资源版本控制,数据太大加载耗时
// Laya.ResourceVersion.enable("version.json", Laya.Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
// laya.net.LocalStorage.clear();
loadProcess();
//基本数据
let acc = util.getItem(config.prod.appAccept)
let gui = util.getItem(config.prod.appGuide)
let app = util.getItem(config.prod.getAppKey())

function loadProcess() {
    config.init.initData('');
    beginLoad();
}

function beginLoad() {
    Laya.stage.bgColor = 'white';
    var res: Array<string> =
        ["res/atlas/img/main.atlas",
            "res/atlas/img/coins.atlas",
            "res/atlas/img/smartcat.atlas"]
    if (!acc || !gui) {
        res.push("res/atlas/img/guide.atlas");
    }
    Laya.loader.load(res, Laya.Handler.create(this, onComplete));
}

function onComplete() {
    Laya.stage.alpha = 1;
    //native.native.colseAppbg();
    let userLogin = new view.user.UserLogin();
    userLogin.checkAutoLogin()
}

function enter() {    
    let walletNames = util.getItem(config.prod.getAppKey());//重新获取
    if (!walletNames || walletNames.length == 0) {//没有钱包数据
        if (gui) {//非第一次进入
            new EnterApp();
        } else {
            new guide();
        }
    } else {
        enterMain();
    }
}

function enterMain() {
    let walletNames = util.getItem(config.prod.getAppKey());//重新获取
    let wallet = util.getItem(walletNames[0]);
    let walletMod = new mod.walletMod();
    walletMod.setWallet(wallet);
    mod.userMod.defWallet = walletMod;
    new view.WalletMain().initQueryData(walletMod);
}
