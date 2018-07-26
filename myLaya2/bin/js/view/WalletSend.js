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
            var wait = new view.alert.waiting(config.msg.WAIT_OPERATOR);
            wait.popup();
            var comp = args[0].comp;
            try { //trust
                var resp1 = ret;
                if (resp1 && resp1.length == 42) {
                    var addr_1 = resp1;
                    var amount_1 = "0";
                    comp.text_addr.text = addr_1;
                    comp.text_amount.text = amount_1;
                    wait.stop();
                    return;
                }
            }
            catch (error) {
                console.error("尝试解析trust二维码失败");
            }
            try {
                var resp = JSON.parse(ret);
                if (resp.type == 2 && resp.vender == 'WWEC') {
                    var addr_2 = resp.address;
                    var amount_2 = resp.amount;
                    comp.text_addr.text = addr_2;
                    comp.text_amount.text = amount_2;
                    wait.stop();
                    return;
                }
            }
            catch (error) {
                console.error("尝试解析wwec二维码失败");
            }
            try { //imtoken iban:XE04P02MNI75D9LSZ8XJ8Z68Q7KYFEW5UWF?amount=0&token=ETH
                var resp1 = ret;
                if (resp1.indexOf("iban:") == 0 && resp1.indexOf("amount") != -1 && resp1.indexOf("token") != -1) {
                    var resp2 = resp1.split("?");
                    var iban = resp2[0].replace("iban:", "");
                    var amount_3 = resp2[1].split("&")[0].replace("amount=", "");
                    service.userServcie.ibanOrAddr(true, iban, function (ret, args) {
                        wait.stop();
                        ret = JSON.parse(ret);
                        if (ret.retCode == 0) {
                            var addr_3 = ret.data.address;
                            var amount_4 = args[0];
                            comp.text_addr.text = addr_3;
                            comp.text_amount.text = amount_4;
                        }
                        else {
                            //请求失败或者转换失败
                            var addr_4 = ret;
                            var amount_5 = '0';
                            comp.text_addr.text = addr_4;
                            comp.text_amount.text = amount_5;
                        }
                    }, [amount_3]);
                }
                return;
            }
            catch (error) {
                console.error("尝试解析imtoken二维码失败");
            }
            wait.stop();
            var addr = ret;
            var amount = '0';
            comp.text_addr.text = addr;
            comp.text_amount.text = amount;
        };
        return WalletSend;
    }(ui.WalletSendUI));
    view.WalletSend = WalletSend;
})(view || (view = {}));
//# sourceMappingURL=WalletSend.js.map