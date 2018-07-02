var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var Browser = Laya.Browser;
    var CreateWallet = /** @class */ (function (_super) {
        __extends(CreateWallet, _super);

        function CreateWallet() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.initEvent();
            return _this;
        }

        CreateWallet.prototype.init = function () {
            this.comp = new ui.WalletCreateUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
        };
        CreateWallet.prototype.initEvent = function () {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.check_argee.on(Laya.Event.CLICK, this, this.updateArgee);
            this.comp.btn_create.on(Laya.Event.CLICK, this, this.createWallet);
            this.comp.btn_import.on(Laya.Event.CLICK, this, this.importWallet);
            this.comp.href_ysfw.on(Laya.Event.CLICK, this, this.infoYsfw);
            this.comp.text_wall_name.on(Laya.Event.KEY_UP, this, this.checkWname);
            this.comp.text_pass.on(Laya.Event.KEY_UP, this, this.checkPass);
            this.comp.text_pass_conf.on(Laya.Event.KEY_UP, this, this.checkPassConf);
        };
        CreateWallet.prototype.setParentUI = function (parentUI) {
            this.parentUI = parentUI;
        };
        CreateWallet.prototype.goBack = function () {
            Laya.stage.removeChild(this.comp);
            this.parentUI == null ? new view.EnterApp() : this.parentUI.visible = true;
        };
        CreateWallet.prototype.updateArgee = function () {
            this.comp.btn_create.disabled = !this.comp.check_argee.selected;
            this.comp.btn_create.mouseEnabled = this.comp.check_argee.selected;
        };
        CreateWallet.prototype.createWallet = function () {
            if (this.checkArgs()) {
                Laya.stage.removeChild(this.comp);
                var wallet = service.walletServcie.creatWallet(this.comp.text_wall_name.text, this.comp.text_pass.text);
                new view.WalletMain().initQueryData(wallet);
            }
        };
        CreateWallet.prototype.checkArgs = function () {
            if (this.checkWname() && this.checkPass() && this.checkPassConf()) {
                return true;
            }
            return false;
        };
        CreateWallet.prototype.checkWname = function () {
            if (this.comp.text_wall_name.text.length < 3 || this.comp.text_wall_name.text.length > 20) {
                this.comp.lab_warn_wName.text = "钱包名称长度3-20";
                this.comp.lab_warn_wName.visible = true;
                return false;
            }
            if (service.walletServcie.checkDupWal(this.comp.text_wall_name.text)) {
                this.comp.lab_warn_wName.text = "该钱包名称已经存在";
                this.comp.lab_warn_wName.visible = true;
                return false;
            }
            this.comp.lab_warn_wName.visible = false;
            return true;
        };
        CreateWallet.prototype.checkPass = function () {
            this.infoPassStrong();
            if (this.comp.text_pass.text.length < 8 || this.comp.text_pass.text.length > 32) {
                this.comp.lab_pass.text = "不少于8个字符,建议混合大小写字母，数字，特殊字符";
                this.comp.lab_pass.visible = true;
                return false;
            }
            return true;
        };
        CreateWallet.prototype.checkPassConf = function () {
            if (this.comp.text_pass_conf.text != this.comp.text_pass.text) {
                this.comp.lab_pass_conf.text = "两次密码不一致";
                this.comp.lab_pass_conf.visible = true;
                return false;
            }
            this.comp.lab_pass_conf.visible = false;
            return true;
        };
        CreateWallet.prototype.infoPassStrong = function () {
            this.comp.lab_words.text = this.comp.text_pass.text.trim().length + '个字符';
            var pass = this.comp.text_pass.text.trim();
            this.comp.lab_pass_level.visible = true;
            var middle = '(?=^.{8,20}$)(?=(?:.*?\d))(?=.*[a-z])(?=.*[A-Z])'; //字母数字大小写:中
            var strong = '(?=^.{8,20}$)(?=(?:.*?\d))(?=.*[a-z])(?=.*[A-Z])(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})'; //字母数字大小写特殊符号
            if (pass.length == 0) {
                util.getPassLevel(this.comp.box_pass_level, -1);
                return;
            }
            if (new RegExp(strong).test(pass)) {
                this.comp.lab_pass_level.text = '强';
                util.getPassLevel(this.comp.box_pass_level, 2);
                if (pass.length > 12) {
                    this.comp.lab_pass_level.text = '极强';
                    util.getPassLevel(this.comp.box_pass_level, 3);
                }
                this.comp.lab_pass_level.color = 'green';
                this.comp.lab_pass.visible = false;
                return;
            }
            if (new RegExp(middle).test(pass)) {
                util.getPassLevel(this.comp.box_pass_level, 1);
                this.comp.lab_pass_level.text = '一般';
                this.comp.lab_pass_level.color = '#5eb0c2';
                this.comp.lab_pass.visible = true;
                return;
            }
            util.getPassLevel(this.comp.box_pass_level, 0);
            this.comp.lab_pass_level.text = '弱';
            this.comp.lab_pass_level.color = 'red';
            this.comp.lab_pass.visible = true;
        };
        CreateWallet.prototype.importWallet = function () {
            this.comp.visible = false;
            new view.set.WalletImport().setParetUI(this.comp);
        };
        CreateWallet.prototype.infoYsfw = function () {
            new view.alert.Iframe("https://zhidao.baidu.com/question/433551549918009724.html");
        };
        CreateWallet.prototype.webViewHref = function () {
            Browser.window['conch'] && Browser.window['conch'].showAssistantTouch(false);
            var ctx = Browser.window.document.createElement('canvas').getContext('2d');

            function render() {
                ctx.fillStyle = 'black';
                ctx.fillRect(0, 0, Browser.window.innerWidth, Browser.window.innerHeight);
                Laya.Browser.window.requestAnimationFrame(render);
            }
            ;
            Browser.window.requestAnimationFrame(render);
            Browser.window.document.addEventListener('touchstart', function () {
                if (Laya.Browser.window['conch']) {
                    var l = 500;
                    var t = 500;
                    var w = Browser.window.innerWidth - l * 2;
                    var h = Browser.window.innerHeight - t * 2;
                    Laya.Browser.window['conch'].setExternalLinkEx('http://www.layabox.com', l, t, w, h, true);
                }
            });
        };
        return CreateWallet;
    }(ui.WalletCreateUI));
    view.CreateWallet = CreateWallet;
})(view || (view = {}));
//# sourceMappingURL=CreateWallet.js.map