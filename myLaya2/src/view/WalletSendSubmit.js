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
    var Handler = Laya.Handler;
    var WalletSendSubmit = /** @class */ (function (_super) {
        __extends(WalletSendSubmit, _super);
        function WalletSendSubmit() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.initEvent();
            return _this;
        }
        WalletSendSubmit.prototype.init = function () {
            this.comp = new ui.WalletSendSubmitUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        };
        WalletSendSubmit.prototype.initEvent = function () {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_submit.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.sli_gas.changeHandler = new Handler(this, this.sliChange);
        };
        WalletSendSubmit.prototype.setData = function (data) {
            this.comp.text_from.text = mod.userMod.defWallet.wAddr;
            this.comp.text_to.text = data.text_addr.text;
            this.comp.send_amout.text = data.text_amount.text;
            this.comp.coin_type.text = data.lab_coin_name.text.toUpperCase();
            //初始化gasprice
            new net.HttpRequest().sendSimpleReq(config.prod.getGasPrice, function (ret, args) {
                if (ret && ret.retCode == 0) {
                    var comp = args[0];
                    comp.sli_gas.value = ret.gasPrice / 1e9; // gwei
                    comp.sli_gas.min = comp.sli_gas.value;
                    comp.sli_gas.max = comp.sli_gas.value * 10;
                }
            }, [this.comp]);
        };
        WalletSendSubmit.prototype.setParenUI = function (parent) {
            this.parentUI = parent;
            this.setData(parent);
        };
        WalletSendSubmit.prototype.goBack = function () {
            Laya.stage.removeChild(this.comp);
            new view.WalletSend();
        };
        WalletSendSubmit.prototype.btnClick = function (type) {
            switch (type) {
                case (1):
                    //需要重新输入密码
                    var enterpass = new view.alert.EnterPass();
                    enterpass.setParentUI(this.comp);
                    enterpass.setCallBack(this.enterPassCb);
                    enterpass.popup();
                    break;
                default:
                    console.log("error type");
                    break;
            }
        };
        WalletSendSubmit.prototype.enterPassCb = function (pass, comp) {
            var defaultW = mod.userMod.defWallet;
            var fromAdd = comp.text_from.text;
            var toAddr = comp.text_to.text;
            var value = comp.send_amout.text;
            var gasPrice = comp.sli_gas.value;
            var pom = new view.alert.waiting("正在处理交易，请稍后");
            pom.popup();
            service.walletServcie.transfer(pass, fromAdd, toAddr, Number(value), gasPrice * 1e9, config.prod.gasLimit, function (ret, args) {
                var pom = args[1];
                pom.stop();
                if (ret && ret.retCode == 0) {
                    new view.alert.Warn("交易已发送请等待确认", "").popup();
                    var comp_1 = args[0];
                    var comParent = args[2];
                    // comp.removeSelf();
                    // comParent.visible = true;//
                    //记录交易!!!
                    // constructor(dealType, dealFromAddr, dealToAddr, dealAmount, dealCoinType, dealTransId, dealGas, dealTime, dealConfirm, dealNonce) {
                    var deal = new mod.dealtemMod(config.msg.deal_transfer_out, comp_1.text_from.text, comp_1.text_to.text, comp_1.send_amout.text, comp_1.coin_type.text, ret.txhash, //可以根据这个去查询更新
                    gasPrice * 1e9 * config.prod.gasLimit, util.getFormatTime(), "", "");
                    service.walletServcie.addDealItem(deal);
                }
                else {
                    new view.alert.Warn("交易失败,请调大矿工费用", "").popup();
                }
            }, [comp, pom, this.parentUI]); //this.parentUI 没有传过去
        };
        WalletSendSubmit.prototype.transferCb = function (ret, args) {
            var pom = args[1];
            pom.stop();
            if (ret && ret.retCode == 0) {
                var comp = args[0];
                var comParent = args[2];
                comp.removeSelf();
                comParent.visible = true;
                //记录交易!!!
            }
            else {
                new view.alert.Warn("交易失败", "").popup();
            }
        };
        WalletSendSubmit.prototype.sliChange = function (value) {
            var lab_max_gas = value * 1e9 / 1e18 * config.prod.gasLimit; //矿工费用eth
            var lab_max_gas_usd = Number(lab_max_gas * mod.userMod.ethToUsd).toFixed(6); //矿工费用 usd
            var lab_max_total = Number(this.comp.send_amout.text) + Number(lab_max_gas); //总量eth
            var lab_max_total_usd = Number(lab_max_total * mod.userMod.ethToUsd).toFixed(6); //总量usd
            this.comp.lab_max_gas.text = lab_max_gas + " ETH";
            this.comp.lab_max_gas_usd.text = lab_max_gas_usd + " USD";
            this.comp.lab_max_total.text = lab_max_total + " ETH";
            this.comp.lab_max_total_usd.text = lab_max_total_usd + " USD";
        };
        return WalletSendSubmit;
    }(ui.WalletSendSubmitUI));
    view.WalletSendSubmit = WalletSendSubmit;
})(view || (view = {}));
//# sourceMappingURL=WalletSendSubmit.js.map