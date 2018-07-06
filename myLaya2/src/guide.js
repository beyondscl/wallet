var EnterApp = view.EnterApp;
var ProgressBar = Laya.ProgressBar;
var guide = /** @class */ (function () {
    function guide() {
        this.index = 0;
        this.mouseStart = 0;
        this.init();
    }
    guide.prototype.init = function () {
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
console.log("start init stage!!!!!!!!!!!");
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
//激活资源版本控制,太费时间
// Laya.ResourceVersion.enable("version.json", Laya.Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
// loadProcess();
// function loadProcess() {
//     Laya.loader.load(["load/progressBar$bar.png"], null);
// }
// function onLoadComplete() {
// }
beginLoad();
function beginLoad() {
    //加载完成就直接进入，后面的异步加载
    var res = ["res/atlas/img/main.atlas",
        "res/atlas/img/coins.atlas",
        "res/atlas/img/guide.atlas"];
    Laya.loader.load(res, null, Laya.Handler.create(this, onChange, null, false));
    // "res/atlas/template/ScrollBar.atlas",
    // Laya.loader.load("res/atlas/template/Warn.atlas");
    // Laya.loader.load("res/atlas/template/Navigator.atlas");
    // Laya.loader.load("res/atlas/template/ToolBar.atlas");
    // Laya.loader.load("res/atlas/template/Switcher.atlas");
    // Laya.loader.load("res/atlas/template/List.atlas");
    // Laya.loader.load("res/atlas/template/Search.atlas");
    // Laya.loader.load(""res/atlas/comp.atlas"]");
}
function onChange(process) {
    console.log("进度：" + Math.floor(process * 100) + "%");
    if (process == 1) {
        Laya.timer.once(1, this, enter);
    }
}
function enter() {
    //有些测试遗留数据会出错
    laya.net.LocalStorage.clear();
    var accept = util.getItem(config.prod.appAccept);
    if (accept) {
        var walletNames = util.getItem(config.prod.appKey);
        if (!walletNames) {
            new guide();
            return;
        }
        var wallet = util.getItem(walletNames[0]);
        var walletMod = new mod.walletMod();
        walletMod.setWallet(wallet);
        mod.userMod.defWallet = walletMod;
        new view.WalletMain().initQueryData(walletMod);
        console.log("end loading!");
    }
    else {
        new view.info.Service();
    }
}
//# sourceMappingURL=guide.js.map