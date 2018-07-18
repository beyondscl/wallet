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
    var TransDetail = /** @class */ (function (_super) {
        __extends(TransDetail, _super);
        function TransDetail() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.initEvent();
            return _this;
        }
        /**
         * @param data
         * @param parent ui only
         */
        TransDetail.prototype.initData = function (data, parent) {
            this.parentUI = parent;
            var lab_type = data.dealType.toUpperCase() == config.msg.deal_transfer_in ? 'Sender' : 'Recipient'; //入|出
            var trans_type = data.dealType.toUpperCase() == config.msg.deal_transfer_in ? '+' : '-'; //
            if (util.isContain(config.prod.expCoins, data.dealCoinType.toUpperCase())) { //无法计算价格
                this.comp.lab_amount.text = trans_type + data.dealAmount + ' ' + data.dealCoinType.toUpperCase() + " (RMB¥ - )";
            }
            else { //折算人民币
                this.comp.lab_amount.text = trans_type + data.dealAmount + ' ' + data.dealCoinType.toUpperCase() + " (RMB¥" + (data.dealAmount * mod.userMod.ethToUsd * mod.userMod.usdToRmb).toFixed(2) + ")"; //-0.00001 ETH (US$0.05)
            }
            this.comp.lab_type.text = lab_type;
            this.comp.lab_addr.text = util.getAddr(data.getDealAddr());
            this.comp.lab_transId.text = data.dealTransId;
            this.comp.lab_gas.text = data.dealGas / 1e9 + '';
            this.comp.lab_confirm.text = data.dealConfirm ? data.dealConfirm + "" : '-';
            this.comp.lab_time.text = data.dealTime;
            this.comp.lab_nonce.text = data.dealNonce ? data.dealNonce + "" : '-';
        };
        TransDetail.prototype.init = function () {
            this.comp = new ui.TransDetailUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        };
        TransDetail.prototype.initEvent = function () {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_moreinfo.on(Laya.Event.CLICK, this, this.moreinfo);
        };
        TransDetail.prototype.goBack = function () {
            this.comp.removeSelf();
            this.parentUI.visible = true;
        };
        TransDetail.prototype.moreinfo = function () {
        };
        return TransDetail;
    }(ui.TransDetailUI));
    view.TransDetail = TransDetail;
})(view || (view = {}));
//# sourceMappingURL=TransDetail.js.map