var EnterApp = view.EnterApp;
var guide = /** @class */ (function () {
    function guide() {
        this.guidesImg = ["guide/timg.jpg", "guide/timg1.jpg", "guide/timg2.jpg"];
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
Laya.init(375, 667, Laya.WebGL);
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
//设置适配模式
Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
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
    Laya.loader.load("res/atlas/template/Warn.atlas");
    Laya.loader.load("res/atlas/template/Navigator.atlas");
    Laya.loader.load("res/atlas/template/ToolBar.atlas");
    Laya.loader.load("res/atlas/template/Switcher.atlas");
    Laya.loader.load("res/atlas/template/List.atlas");
    Laya.loader.load("res/atlas/template/Search.atlas");
    Laya.loader.load("res/atlas/template/ScrollBar.atlas");
    Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(null, enter));
}

function enter() {
    // laya.net.LocalStorage.clear();
    var walletNames = util.getItem(config.prod.appKey);
    if (!walletNames) {
        new guide();
        return;
    }
    var wallet = util.getItem(walletNames[0]);
    var walletMod = new mod.walletMod(wallet.wName, null, null, null, wallet.wAddr, wallet.wCoins);
    mod.userMod.defWallet = walletMod;
    new view.WalletMain().initQueryData(walletMod);
}

// function windowTest(){
//     let conch = Laya.Browser.window.conch;
//     console.log("=================>"+conch);
//     conch && conch.showAssistantTouch(false);
//     var ctx = document.createElement('canvas').getContext('2d');
//     function render(){
//         ctx.fillStyle='#99d9ea';
//         ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
//         window.requestAnimationFrame(render);
//     }
//     window.requestAnimationFrame(render);
//     document.addEventListener('touchstart',()=>{
//         if(conch){
//             var l = 50;
//             var t = 50;
//             var w = window.innerWidth-l*2;
//             var h = window.innerHeight-t*2;
//             // conch.setExternalLinkEx('http://www.layabox.com',l,t,w,h,true);
//             conch.setExternalLink('http://www.baidu.com');
//         }
//     });
// }
//# sourceMappingURL=guide.js.map