var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var CreateWallet = /** @class */ (function (_super) {
        __extends(CreateWallet, _super);
        function CreateWallet() {
            var _this = _super.call(this) || this;
            _this.isAgreeImgs = ["img/icon_box-empty.png", "img/icon_box-checked.png"];
            _this.init();
            Laya.loader.load(_this.isAgreeImgs, Laya.Handler.create(_this, _this.initEvent));
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
            this.comp.text_pass.on(Laya.Event.KEY_UP, this, this.infoPassStrong);
            this.comp.text_pass_conf.on(Laya.Event.KEY_UP, this, this.confPass);
        };
        CreateWallet.prototype.setParentUI = function (parentUI) {
            this.parentUI = parentUI;
        };
        CreateWallet.prototype.goBack = function () {
            Laya.stage.removeChild(this.comp);
            this.parentUI == null ? new view.EnterApp() : this.parentUI.visible = true;
        };
        CreateWallet.prototype.updateArgee = function () {
            this.comp.btn_create.disabled = this.comp.check_argee.selected;
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
            var warnColor = '#c82624';
            if (this.comp.text_wall_name.text.length < 3 || this.comp.text_wall_name.text.length > 20) {
                this.comp.lab_warn_wName.text = "钱包名称:长度2-20";
                this.comp.lab_warn_wName.color = warnColor;
                this.comp.lab_warn_wName.visible = true;
                return false;
            }
            if (service.walletServcie.checkDupWal(this.comp.text_wall_name.text)) {
                this.comp.lab_warn_wName.text = "该钱包名称已经存在";
                this.comp.lab_warn_wName.color = warnColor;
                this.comp.lab_warn_wName.visible = true;
                return false;
            }
            this.comp.lab_warn_wName.visible = false;
            if (this.comp.text_pass.text.length < 8 || this.comp.text_pass.text.length > 20) {
                this.comp.lab_pass.text = "密码:长度8-20";
                this.comp.lab_pass.color = warnColor;
                this.comp.lab_pass.visible = true;
                return false;
            }
            this.comp.lab_pass.visible = false;
            if (this.comp.text_pass_conf.text != this.comp.text_pass.text) {
                this.comp.lab_pass_conf.text = "两次密码不一致";
                this.comp.lab_pass_conf.color = warnColor;
                this.comp.lab_pass_conf.visible = true;
                return false;
            }
            this.comp.lab_pass_conf.visible = false;
            return true;
        };
        CreateWallet.prototype.confPass = function () {
            var warnColor = '#c82624';
            if (this.comp.text_pass_conf.text != this.comp.text_pass.text) {
                this.comp.lab_pass_conf.text = "两次密码不一致";
                this.comp.lab_pass_conf.color = warnColor;
                this.comp.lab_pass_conf.visible = true;
                return;
            }
            this.comp.lab_pass_conf.visible = false;
        };
        CreateWallet.prototype.infoPassStrong = function () {
            var pass = this.comp.text_pass.text;
            this.comp.lab_pass_level.visible = true;
            // let week = '^[a-zA-Z]*$';//字母/数字:弱
            // let week2 = '^[0-9]*$';//字母/数字:弱
            var middle = '(?=^.{8,20}$)(?=(?:.*?\d))(?=.*[a-z])(?=.*[A-Z])'; //字母数字大小写:中
            var strong = '(?=^.{8,20}$)(?=(?:.*?\d))(?=.*[a-z])(?=.*[A-Z])(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})';
            ; //字母数字大小写特殊符号
            if (new RegExp(strong).test(pass)) {
                this.comp.lab_pass_level.text = '密码强度：强';
                this.comp.lab_pass_level.color = 'green';
                this.comp.lab_pass.visible = false;
                return;
            }
            if (new RegExp(middle).test(pass)) {
                this.comp.lab_pass_level.text = '密码强度：中';
                this.comp.lab_pass_level.color = 'yellow';
                this.comp.lab_pass.visible = true;
                return;
            }
            var warnColor = '#c82624';
            this.comp.lab_pass.text = "建议使用大小写字母，数字，特殊字符混合";
            this.comp.lab_pass.color = warnColor;
            this.comp.lab_pass.visible = true;
            this.comp.lab_pass_level.text = '密码强度：弱';
            this.comp.lab_pass_level.color = 'red';
        };
        CreateWallet.prototype.importWallet = function () {
            this.comp.visible = false;
            new view.set.WalletImport().setParetUI(this.comp);
        };
        return CreateWallet;
    }(ui.WalletCreateUI));
    view.CreateWallet = CreateWallet;
})(view || (view = {}));
//# sourceMappingURL=CreateWallet.js.map