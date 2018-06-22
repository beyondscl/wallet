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
        };
        WalletSendSubmit.prototype.initEvent = function () {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_submit.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.sli_gas.changeHandler = new Handler(this, this.sliChange);
        };
        WalletSendSubmit.prototype.setData = function (data) {
        };
        WalletSendSubmit.prototype.goBack = function () {
            Laya.stage.removeChild(this.comp);
            new view.WalletSend();
        };
        WalletSendSubmit.prototype.btnClick = function (type) {
            switch (type) {
                case (1):
                    Laya.stage.removeChild(this.comp);
                    Laya.stage.removeSelf();
                    new view.WalletTransfer();
                    break;
                default:
                    console.log("error type");
                    break;
            }
        };
        WalletSendSubmit.prototype.sliChange = function (value) {
            //gasLimit=21000
            var lab_max_gas = value / Math.pow(10, 9);
            var lab_max_gas_usd = Number(lab_max_gas * 516).toFixed(2);
            var lab_max_total = Number(this.comp.send_amout.text + lab_max_gas);
            var lab_max_total_usd = Number(lab_max_total * 516).toFixed(2);
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