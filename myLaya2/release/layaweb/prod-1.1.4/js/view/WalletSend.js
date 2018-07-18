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
    var WalletSend = /** @class */ (function (_super) {
        __extends(WalletSend, _super);
        function WalletSend() {
            var _this = _super.call(this) || this;
            _this.total = 0;
            _this.init();
            _this.initEvent();
            return _this;
        }
        //data:coin type total:number,amount:转账金额,addr:地址
        WalletSend.prototype.setData = function (data, total, amount, addr) {
            this.comp.lab_coin_name.text = data.toUpperCase();
            this.comp.text_amount.text = amount + '';
            this.comp.text_addr.text = addr;
            this.total = total;
        };
        //parentUI 传入的是this,不再是comp
        WalletSend.prototype.setParentUI = function (parentUI) {
            this.parentUI = parentUI;
        };
        WalletSend.prototype.init = function () {
            this.comp = new ui.WalletSendUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        };
        WalletSend.prototype.initEvent = function () {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_next.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_sys.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        };
        //1来自主页
        //2来自转账页面
        // 设置总金额
        WalletSend.prototype.goBack = function () {
            Laya.stage.removeChild(this.comp);
            if (this.parentUI && this.parentUI.comp) {
                this.parentUI.comp.visible = true;
            }
            else {
                new view.WalletMain().initQueryData(mod.userMod.defWallet);
            }
        };
        WalletSend.prototype.btnClick = function (type) {
            switch (type) {
                case (1):
                    if (this.checkArg()) {
                        this.comp.visible = false;
                        var sub = new view.WalletSendSubmit();
                        sub.setParenUI(this.comp);
                        util.putView(this);
                    }
                    break;
                case (2):
                    native.native.startCamara(this.startCamaraCb, [this]);
                    break;
                default:
                    console.log("error type");
                    break;
            }
        };
        WalletSend.prototype.checkArg = function () {
            var addr = this.comp.text_addr.text;
            if (!addr || addr.length != 42) {
                this.comp.warn_Addr.visible = true;
                return false;
            }
            else {
                this.comp.warn_Addr.visible = false;
            }
            var amount = this.comp.text_amount.text;
            if (!util.isNumber(amount)) {
                this.comp.warn_amount.visible = true;
                return false;
            }
            if (Number(amount) > this.total) {
                this.comp.warn_amount.text = "超出钱包余额:" + this.total;
                this.comp.warn_amount.visible = true;
                return false;
            }
            if (Number(amount) <= 0) {
                this.comp.warn_amount.text = "转账金额必须大于0";
                this.comp.warn_amount.visible = true;
                return false;
            }
            this.comp.warn_amount.visible = false;
            return true;
        };
        WalletSend.prototype.startCamaraCb = function (ret, args) {
            var comp = args[0].comp;
            try {
                var resp = JSON.parse(ret);
                if (resp.type == 2 && resp.vender == 'WWEC') {
                    var addr = resp.address;
                    var amount = resp.amount;
                    comp.text_addr.text = addr;
                    comp.text_amount.text = amount;
                }
                else {
                    comp.text_addr.text = ret;
                    comp.text_amount.text = '0';
                }
            }
            catch (error) {
                comp.text_addr.text = ret;
                comp.text_amount.text = '0';
            }
        };
        return WalletSend;
    }(ui.WalletSendUI));
    view.WalletSend = WalletSend;
})(view || (view = {}));
//# sourceMappingURL=WalletSend.js.map