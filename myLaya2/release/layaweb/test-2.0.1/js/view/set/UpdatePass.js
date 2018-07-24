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
    var set;
    (function (set) {
        var UpdatePass = /** @class */ (function (_super) {
            __extends(UpdatePass, _super);
            function UpdatePass() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }
            UpdatePass.prototype.setParentUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            UpdatePass.prototype.init = function () {
                this.comp = new ui.set.UpdatePassUI();
                Laya.stage.addChild(this.comp);
            };
            UpdatePass.prototype.initEvent = function () {
                this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
                this.comp.lab_save.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            };
            UpdatePass.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.stage.removeChild(this.comp);
                    this.parentUI.visible = true;
                }
                if (2 == index) {
                    var opass = this.comp.lab_oldPass.text;
                    var newPass = this.comp.lab_newPass.text;
                    var passConf = this.comp.lab_confPass.text;
                    this.updatePass(opass, newPass, passConf);
                }
                if (3 == index) {
                }
            };
            UpdatePass.prototype.updatePass = function (oldPass, pass, passconfi) {
                if (oldPass.length < 8) {
                    new view.alert.info(config.msg.PASS_ERROR).popup();
                    return;
                }
                var wal = service.walletServcie.getWallet(this.parentUI.lab_wName.text);
                if (util.md5WithSalt(oldPass) != wal.wPassword) {
                    new view.alert.info(config.msg.PASS_ERROR).popup();
                    return;
                }
                if (pass.length < 8) {
                    new view.alert.info(config.msg.NEW_PASS_ERROR).popup();
                    return;
                }
                if (passconfi != pass) {
                    new view.alert.info(config.msg.PASS_CONF_ERROR).popup();
                    return;
                }
                wal.wPassword = util.md5WithSalt(pass);
                util.setItemJson(this.parentUI.lab_wName.text, wal.toJson());
                if (wal.wName == this.parentUI.lab_wName.text) {
                    mod.userMod.defWallet.wPassword = wal.wPassword;
                }
                new view.alert.info(config.msg.REVER_PASS_SUCCESS).popup();
                this.comp.removeSelf();
                this.parentUI.visible = true;
            };
            return UpdatePass;
        }(ui.set.UpdatePassUI));
        set.UpdatePass = UpdatePass;
    })(set = view.set || (view.set = {}));
})(view || (view = {}));
//# sourceMappingURL=UpdatePass.js.map