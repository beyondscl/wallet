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
var view;
(function (view) {
    var Handler = Laya.Handler;
    var WalletTransfer = /** @class */ (function (_super) {
        __extends(WalletTransfer, _super);
        function WalletTransfer() {
            var _this = _super.call(this) || this;
            _this.total = 0;
            _this.init();
            _this.initEvent();
            return _this;
        }
        WalletTransfer.prototype.setParentUI = function (parentUI) {
            this.parentUI = parentUI;
        };
        WalletTransfer.prototype.setData = function (data, cell) {
            this.comp.lab_coin_name.text = data.itemName;
            var cValue = cell.getChildByName('cValue');
            var cTotal = cell.getChildByName('cTotal');
            this.total = Number(cTotal.text);
            this.comp.lab_coin_total.text = cValue.text.split("¥")[1];
            this.setListUp(service.walletServcie.getDealListByWName(data.itemName));
        };
        WalletTransfer.prototype.init = function () {
            this.comp = new ui.WalletTransferUI();
            this.name = config.resource.WALLET_TRANSFER;
            Laya.stage.addChild(this.comp);
            Laya.stage.scaleMode = config.prod.appAdapterType;
        };
        WalletTransfer.prototype.initEvent = function () {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_send.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_receive.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        };
        WalletTransfer.prototype.goBack = function () {
            Laya.stage.removeChild(this.comp);
            this.parentUI.comp.visible = true;
        };
        WalletTransfer.prototype.btnClick = function (type) {
            if (type == 1) {
                this.comp.visible = false;
                var send = new view.WalletSend();
                send.setData(this.comp.lab_coin_name.text, this.total, 0, '');
                send.setParentUI(this);
            }
            else if (type == 2) {
                Laya.stage.removeChild(this.comp);
                new view.WalletReceive(this.parentUI.comp.lab_wName.text);
            }
        };
        //init deal history list
        WalletTransfer.prototype.setListUp = function (data) {
            this.comp.list.repeatX = 1;
            this.comp.list.repeatY = data.length;
            // 使用但隐藏滚动条
            this.comp.list.vScrollBarSkin = "";
            this.comp.list.selectHandler = new Handler(this, this.onSelect, null, false);
            this.comp.list.renderHandler = new Handler(this, this.onListRender, null, false);
            this.comp.list.array = data;
        };
        WalletTransfer.prototype.onListRender = function (cell, index) {
            var data = this.comp.list.array[index];
            var cImg = cell.getChildByName('img');
            cImg.skin = data.getDealImgSrc();
            var cName = cell.getChildByName('lab_deal_name');
            cName.text = data.getDealChName();
            var addr = cell.getChildByName('lab_addr');
            var trans_type1 = data.dealType.toUpperCase() == config.msg.deal_transfer_in ? 'From' : 'To'; //from | to
            addr.text = trans_type1 + ": " + util.getAddr(data.getDealAddr());
            var amount = cell.getChildByName('lab_amount');
            var trans_type = data.dealType.toUpperCase() == config.msg.deal_transfer_in ? '+' : '-'; //+ | -
            amount.text = trans_type + data.dealAmount + " " + data.dealCoinType.toUpperCase();
            amount.color = data.dealType.toUpperCase() == config.msg.deal_transfer_out ? 'red' : 'green';
        };
        WalletTransfer.prototype.onSelect = function (index) {
            this.comp.visible = false;
            new view.TransDetail().initData(this.comp.list.array[index], this.comp);
        };
        return WalletTransfer;
    }(ui.WalletTransferUI));
    view.WalletTransfer = WalletTransfer;
})(view || (view = {}));
//# sourceMappingURL=WalletTransfer.js.map