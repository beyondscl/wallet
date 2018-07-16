var EnterApp = view.EnterApp;
var guide = /** @class */ (function () {
    function guide() {
        this.index = 0;
        this.mouseStart = 0;
        this.init();
    }
    guide.prototype.setParentUI = function (p) {
        this.parentUI = p;
    };
    guide.prototype.init = function () {
        this.guideUI = new ui.GuideUI();
        Laya.stage.addChild(this.guideUI);
        this.guideUI.on(Laya.Event.MOUSE_DOWN, this, this.mouseHandler);
        this.guideUI.on(Laya.Event.MOUSE_UP, this, this.mouseHandler);
        this.guideUI.on(Laya.Event.CLICK, this, this.mouseHandler);
        this.guideUI.on(Laya.Event.MOUSE_MOVE, this, this.mouseHandler);
        this.guideUI.img_enter.on(Laya.Event.CLICK, this, this.go);
    };
    guide.prototype.go = function () {
        this.guideUI.removeSelf();
        util.setItemJson(config.prod.appGuide, []);
        if (this.parentUI) {
            this.parentUI.comp.visible = true;
        }
        else {
            new EnterApp();
        }
    };
    //functions
    guide.prototype.touchEvent = function (next) {
        next = next <= 0 ? 0 : next;
        next = next >= 4 ? 3 : next;
        this.index = next;
        var childs = this.guideUI._childs;
        for (var i = 0; i < childs.length; i++) {
            if (childs[i].name && childs[i].name == ('item' + next)) {
                childs[i].visible = true;
            }
            if (childs[i].name && childs[i].name != ('item' + next)) {
                childs[i].visible = false;
            }
        }
    };
    guide.prototype.mouseHandler = function (e) {
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
    };
    return guide;
}());
//程序入口
console.log("start init stage!!!!!!!!!!!", new Date().getTime());
Laya.init(config.prod.appWidth, config.prod.appHeight, Laya.WebGL);
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
//设置适配模式
Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT; //SCALE_EXACTFIT
//设置横竖屏
Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
//设置水平对齐
Laya.stage.alignH = "center";
//设置垂直对齐
Laya.stage.alignV = "middle";
//打开性能面板
if (Laya.Browser.window.env == "dev") {
    // Laya.Stat.show(0,0);
}
//激活资源版本控制,太费时间
// Laya.ResourceVersion.enable("version.json", Laya.Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
loadProcess();
//进度条
var progressBar;
var tip;
var loadBg;
//基本数据
var acc = util.getItem(config.prod.appAccept);
var gui = util.getItem(config.prod.appGuide);
var app = util.getItem(config.prod.appKey);
function loadProcess() {
    Laya.loader.load(["res/atlas/load.atlas"], Laya.Handler.create(this, beginLoad));
}
function beginLoad() {
    Laya.stage.bgColor = 'white';
    loadBg = new Laya.Image().loadImage("load/start.png");
    loadBg.x = 0;
    loadBg.y = 0;
    loadBg.width = config.prod.appWidth;
    loadBg.height = config.prod.appHeight;
    Laya.stage.addChild(loadBg);
    tip = new Laya.Label();
    tip.bottom = 40;
    tip.left = 0;
    tip.right = 0;
    tip.centerX = 0;
    tip.height = 40;
    tip.fontSize = 32;
    tip.text = "正在检查更新:0%";
    tip.color = '#163853';
    Laya.stage.addChild(tip);
    progressBar = new Laya.ProgressBar("load/progress.png");
    progressBar.width = 500;
    progressBar.height = 40;
    progressBar.centerX = 0;
    progressBar.bottom = 85;
    progressBar.sizeGrid = "5,5,5,5";
    var res = ["res/atlas/img/main.atlas",
        "res/atlas/img/coins.atlas"];
    if (!acc || !gui) {
        res.push("res/atlas/img/guide.atlas");
    }
    Laya.loader.load(res, null, Laya.Handler.create(this, onProcess, null, false));
    progressBar.changeHandler = new Laya.Handler(this, onChange);
    Laya.stage.addChild(progressBar);
}
function onProcess(p) {
    progressBar.value = p;
}
function onChange(process) {
    tip.text = "正在检查更新:" + (process * 100).toFixed(0) + "%";
    if (process == 1) {
        new view.alert.info().popup();
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
    new config.init.initData('');
    //有些测试遗留数据会出错
    // laya.net.LocalStorage.clear();
    if (acc) { //已同意服务协议
        var walletNames = util.getItem(config.prod.appKey);
        if (!walletNames || walletNames.length == 0) { //没有钱包数据
            if (gui) { //非第一次进入
                new EnterApp();
            }
            else {
                new guide();
            }
        }
        else {
            enterMain();
        }
        console.log("end loading!");
    }
    else {
        new view.info.Service();
    }
}
function enterMain() {
    var walletNames = util.getItem(config.prod.appKey);
    var wallet = util.getItem(walletNames[0]);
    var walletMod = new mod.walletMod();
    walletMod.setWallet(wallet);
    mod.userMod.defWallet = walletMod;
    new view.WalletMain().initQueryData(walletMod);
}
//# sourceMappingURL=guide.js.map