var EnterApp = view.EnterApp;
var guide = /** @class */ (function () {
    function guide() {
        this.guidesImg = ["guide/timg.jpg", "guide/timg1.jpg", "guide/timg2.jpg"];
        this.index = 0;
        this.mouseStart = 0;
        this.init();
    }
    ;
    guide.prototype.init = function () {
        this.guideUI = new ui.GuideUI();
        Laya.stage.addChild(this.guideUI);
        this.guideImg = new Laya.Sprite();
        this.guideImg.loadImage(this.guidesImg[this.index], 0, 0, Laya.stage.width, Laya.stage.height);
        Laya.stage.addChild(this.guideImg);
        // this.guideImg.on(Laya.Event.CLICK, this, this.touchEvent);
        this.guideImg.on(Laya.Event.MOUSE_DOWN, this, this.mouseHandler);
        this.guideImg.on(Laya.Event.MOUSE_UP, this, this.mouseHandler);
        this.guideImg.on(Laya.Event.CLICK, this, this.mouseHandler);
        this.guideImg.on(Laya.Event.MOUSE_MOVE, this, this.mouseHandler);
    };
    //functions
    guide.prototype.touchEvent = function (next) {
        next = next <= 0 ? 0 : next;
        this.index = next;
        if (this.index >= this.guidesImg.length) {
            Laya.stage.removeChild(this.guideImg);
            Laya.stage.removeChild(this.guideUI);
            new EnterApp();
            return;
        }
        this.guideImg.loadImage(this.guidesImg[next], 0, 0, Laya.stage.width, Laya.stage.height);
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
Laya.init(Laya.Browser.width, Laya.Browser.height, Laya.WebGL);
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
//设置适配模式
Laya.stage.scaleMode = "exactfit";
//设置横竖屏
Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
//设置水平对齐
Laya.stage.alignH = "center";
//设置垂直对齐
Laya.stage.alignV = "middle";
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Laya.Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
function beginLoad() {
    Laya.loader.load("res/atlas/img.atlas");
    Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(null, enter));
    Laya.loader.load("res/atlas/template/Navigator.atlas");
    Laya.loader.load("res/atlas/template/ToolBar.atlas");
    Laya.loader.load("res/atlas/template/Switcher.atlas");
    Laya.loader.load("res/atlas/template/List.atlas");
    Laya.loader.load("res/atlas/template/Search.atlas");
}
function enter() {
    // laya.net.LocalStorage.clear();
    var walletNames = laya.net.LocalStorage.getItem(config.prod.appKey);
    if (!walletNames) {
        new guide();
        return;
    }
    var wallet = JSON.parse(laya.net.LocalStorage.getItem(JSON.parse(walletNames)[0]));
    var walletMod = new mod.walletMod(wallet.wName, null, null, null, wallet.wAddr, wallet.wCoins);
    mod.userMod.defWallet = walletMod;
    new view.WalletMain().initQueryData(walletMod);
}
//# sourceMappingURL=guide.js.map