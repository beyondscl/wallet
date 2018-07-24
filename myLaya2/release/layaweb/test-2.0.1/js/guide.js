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
if (Laya.Browser.window.env != "prod") {
    //Laya.Stat.show(0, 0);
}
Laya.stage.alpha = 0;
//激活资源版本控制,数据太大加载耗时
// Laya.ResourceVersion.enable("version.json", Laya.Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
// laya.net.LocalStorage.clear();
loadProcess();
//基本数据
var acc = util.getItem(config.prod.appAccept);
var gui = util.getItem(config.prod.appGuide);
var app = util.getItem(config.prod.getAppKey());
function loadProcess() {
    beginLoad();
}
function beginLoad() {
    Laya.stage.bgColor = 'white';
    var res = ["res/atlas/img/main.atlas",
        "res/atlas/img/coins.atlas"];
    if (!acc || !gui) {
        res.push("res/atlas/img/guide.atlas");
    }
    Laya.loader.load(res, Laya.Handler.create(this, onComplete));
}
function onComplete() {
    Laya.stage.alpha = 1;
    native.native.colseAppbg();
    var userLogin = new view.user.UserLogin();
    userLogin.checkAutoLogin();
}
function enter() {
    new config.init.initData('');
    var walletNames = util.getItem(config.prod.getAppKey()); //重新获取
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
}
function enterMain() {
    var walletNames = util.getItem(config.prod.getAppKey()); //重新获取
    var wallet = util.getItem(walletNames[0]);
    var walletMod = new mod.walletMod();
    walletMod.setWallet(wallet);
    mod.userMod.defWallet = walletMod;
    new view.WalletMain().initQueryData(walletMod);
}
//# sourceMappingURL=guide.js.map