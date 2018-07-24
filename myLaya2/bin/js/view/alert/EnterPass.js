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
    var alert;
    (function (alert) {
        var EnterPass = /** @class */ (function (_super) {
            __extends(EnterPass, _super);
            function EnterPass() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }
            EnterPass.prototype.setParentUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            EnterPass.prototype.setCallBack = function (func) {
                this.callBack = func;
            };
            //转账需要显示地址与金额
            EnterPass.prototype.setData = function (addr, amount) {
                this.addr.text = addr;
                this.addr.visible = true;
                this.amount.text = amount;
                this.amount.visible = true;
            };
            //必须设置
            EnterPass.prototype.setWalName = function (wName) {
                this.wName = wName;
            };
            EnterPass.prototype.init = function () {
                Laya.stage.bgColor = 'white';
                Laya.stage.scaleMode = config.prod.appAdapterType;
            };
            EnterPass.prototype.initEvent = function () {
                this.btn_submit.on(Laya.Event.CLICK, this, this.btnClick, [2]);
                this.btn_cancel.on(Laya.Event.CLICK, this, this.btnClick, [3]);
            };
            EnterPass.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.close();
                }
                if (2 == index) {
                    //统一验证密码,至于是否加密暂定,是否添加验证次数
                    var wallet = void 0;
                    if (this.wName) {
                        wallet = service.walletServcie.getWallet(this.wName);
                    }
                    else {
                        wallet = mod.userMod.defWallet;
                    }
                    if (!wallet.wPassword) {
                        console.error("wallet.wPassword is null");
                    }
                    var pass = this.text_pass.text;
                    if (util.md5WithSalt(pass) != wallet.wPassword) {
                        this.warn.visible = true;
                        return;
                    }
                    else {
                        this.warn.visible = false;
                    }
                    this.btn_submit.disabled = true;
                    this.callBack(pass, this.parentUI);
                    this.close();
                }
                if (3 == index) {
                    this.close();
                }
            };
            return EnterPass;
        }(ui.alert.EnterPassUI));
        alert.EnterPass = EnterPass;
    })(alert = view.alert || (view.alert = {}));
})(view || (view = {}));
//# sourceMappingURL=EnterPass.js.map