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
    var WalletQuick = /** @class */ (function (_super) {
        __extends(WalletQuick, _super);
        function WalletQuick() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.initEvent();
            return _this;
        }
        WalletQuick.prototype.setParentUI = function (parentUI) {
            this.parentUI = parentUI;
        };
        WalletQuick.prototype.initData = function (walletNames) {
            var lines = walletNames.length + 1;
            var height = lines * 80;
            height = height > 600 ? 600 : height;
            this.list_wallet.height = height;
            this.list_wallet.vScrollBarSkin = '';
            this.list_wallet.repeatY = walletNames.length;
            this.list_wallet.array = walletNames;
            this.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
            this.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
            this.box_btns.top = this.list_wallet.y + this.list_wallet.height + 5;
        };
        WalletQuick.prototype.init = function () {
        };
        WalletQuick.prototype.initEvent = function () {
            this.lab_sao.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.lab_create.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        };
        WalletQuick.prototype.btnClick = function (index) {
            if (index == 1) {
                native.native.startCamara(this.startCamaraCb, [this.parentUI, this]);
            }
            if (index == 2) {
                this.close();
                this.parentUI.comp.visible = false;
                new view.CreateWallet().setParentUI(this.parentUI);
            }
        };
        WalletQuick.prototype.onListRender = function (cell, index) {
            var data = this.list_wallet.array[index];
            var cImg = cell.getChildByName('img_wallet');
            var wallet = service.walletServcie.getWallet(data);
            cImg.skin = wallet.wSkin;
            var cName = cell.getChildByName('lab_wName');
            cName.text = data.replace(/([^]{8})([^]+)/, "$1...");
            var cImgBg = cell.getChildByName('img_bg');
            if (data == mod.userMod.defWallet.wName) {
                cImgBg.skin = 'img/main/list_bg.png';
            }
        };
        WalletQuick.prototype.onSelect = function (index) {
            var item = this.list_wallet.array[index];
            this.parentUI.initQueryData(service.walletServcie.getWallet(item));
            this.close();
        };
        //跳转到转账界面,是否针对特殊的二维码识别 比如imtoken,trust
        WalletQuick.prototype.startCamaraCb = function (resp, args) {
            var wait = new view.alert.waiting(config.msg.WAIT_OPERATOR);
            wait.popup();
            var parentUI = args[0];
            var quick = args[1];
            try { //trust
                var resp1 = resp;
                if (resp1 && resp1.length == 42) {
                    var addr = resp1;
                    var amount = 0;
                    wait.stop();
                    this.showSendOk(parentUI, quick, amount, addr);
                    return;
                }
            }
            catch (error) {
                console.error("尝试解析trust二维码失败");
            }
            try {
                var resp1 = JSON.parse(resp);
                if (resp1.type == 2 && resp1.vender == 'WWEC') {
                    var addr = resp1.address;
                    var amount = resp1.amount;
                    wait.stop();
                    this.showSendOk(parentUI, quick, amount, addr);
                    return;
                }
            }
            catch (error) {
                console.error("尝试解析wwec二维码失败");
            }
            try { //imtoken iban:XE04P02MNI75D9LSZ8XJ8Z68Q7KYFEW5UWF?amount=0&token=ETH
                var resp1 = resp;
                if (resp1.indexOf("iban:") == 0 && resp1.indexOf("amount") != -1 && resp1.indexOf("token") != -1) {
                    var resp2 = resp1.split("?");
                    var iban = resp2[0].replace("iban:", "");
                    var amount = resp2[1].split("&")[0].replace("amount=", "");
                    service.userServcie.ibanOrAddr(true, iban, function (ret, args) {
                        wait.stop();
                        ret = JSON.parse(ret);
                        if (ret.retCode == 0) {
                            var addr = ret.data.address;
                            var send = new view.WalletSend();
                            send.setParentUI(parentUI);
                            send.setData('ETH', Number(parentUI.getEthTotal()), args[0], addr);
                            parentUI.comp.visible = false;
                            quick.close();
                        }
                        else {
                            //请求失败或者转换失败
                            var send = new view.WalletSend();
                            send.setParentUI(parentUI);
                            send.setData('ETH', Number(parentUI.getEthTotal()), 0, resp); //不识别的数据
                            console.log('else ETH', 0, resp);
                            parentUI.comp.visible = false;
                            quick.close();
                        }
                    }, [amount]);
                }
                return;
            }
            catch (error) {
                console.error("尝试解析imtoken二维码失败");
            }
            wait.stop();
            this.showSend(parentUI, quick, resp);
        };
        WalletQuick.prototype.showSend = function (parentUI, quick, resp) {
            var send = new view.WalletSend();
            send.setParentUI(parentUI);
            send.setData('ETH', Number(parentUI.getEthTotal()), 0, resp); //不识别的数据
            console.log('else ETH', 0, resp);
            parentUI.comp.visible = false;
            quick.close();
        };
        WalletQuick.prototype.showSendOk = function (parentUI, quick, amount, addr) {
            var send = new view.WalletSend();
            send.setParentUI(parentUI);
            send.setData('ETH', Number(parentUI.getEthTotal()), amount, addr);
            parentUI.comp.visible = false;
            quick.close();
        };
        return WalletQuick;
    }(ui.WalletQuickUI));
    view.WalletQuick = WalletQuick;
})(view || (view = {}));
//# sourceMappingURL=WalletQuick.js.map