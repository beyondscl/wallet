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
    var WalletDetail = /** @class */ (function (_super) {
        __extends(WalletDetail, _super);
        function WalletDetail() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.initEvent();
            return _this;
        }
        WalletDetail.prototype.deleteCb = function (pass, comp) {
            //比较复杂
            // service.walletServcie.deleteWallet(comp.lab_wAddr.text);
        };
        WalletDetail.prototype.setData = function (data) {
            this.data = data;
            this.comp.lab_wName.text = data.wName;
            this.comp.lab_wAddr.text = util.getAddr(data.wAddr);
            this.comp.lab_total.text = '0.00 ¥';
            this.comp.img_wImg.skin = config.resource.walletImg;
            this.comp.text_wName.text = data.wName;
            if (!data.wZjc) {
                this.comp.btn_backup.visible = false;
            }
        };
        WalletDetail.prototype.setParetUI = function (parentUI) {
            this.parentUI = parentUI;
        };
        WalletDetail.prototype.init = function () {
            this.comp = new ui.WalletDetailUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        };
        WalletDetail.prototype.initEvent = function () {
            this.comp.btn_back.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_save.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.box_reverpass.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            this.comp.box_expSeckey.on(Laya.Event.CLICK, this, this.btnClick, [3]);
            this.comp.box_expKeystore.on(Laya.Event.CLICK, this, this.btnClick, [4]);
            this.comp.btn_delete.on(Laya.Event.CLICK, this, this.btnClick, [6]);
            this.comp.btn_backup.on(Laya.Event.CLICK, this, this.btnClick, [5]);
        };
        WalletDetail.prototype.goBack = function () {
            this.stage.removeChild(this.comp);
            this.stage.removeChild(this.parentUI);
            var wm = new view.WalletManage();
            wm.setData(service.walletServcie.getWallets());
        };
        WalletDetail.prototype.btnClick = function (index) {
            if (1 == index) {
                service.walletServcie.walletUpdateName(this.data.wName, this.comp.text_wName.text);
                this.stage.removeChild(this.comp);
                this.stage.removeChild(this.parentUI);
                var wm = new view.WalletManage();
                wm.setData(service.walletServcie.getWallets());
                return;
            }
            if (2 == index) {
                var updatePassUI = new view.set.UpdatePass();
                updatePassUI.setParentUI(this.comp);
                this.comp.visible = false;
                return;
            }
            if (3 == index) {
                var enterPass = new view.alert.EnterPass();
                enterPass.setParentUI(this.comp);
                enterPass.setCallBack(this.exportPriKeyCb);
                enterPass.popup(true, true);
                return;
            }
            if (4 == index) {
                var enterPass = new view.alert.EnterPass();
                enterPass.setParentUI(this.comp);
                enterPass.setCallBack(this.exportKeystoreCb);
                enterPass.popup(true, true);
                return;
            }
            if (5 == index) {
                var p = new view.alert.EnterPass();
                p.setParentUI(this.comp);
                p.setCallBack(this.enterPassCb);
                p.setWalName(this.comp.lab_wName.text);
                p.popup();
                return;
            }
            if (6 == index) {
                var p = new view.alert.EnterPass();
                p.setParentUI(this.comp);
                p.setCallBack(this.deleteCb);
                p.popup();
                return;
            }
        };
        WalletDetail.prototype.enterPassCb = function (pass, comp) {
            comp.visible = false;
            var backupw = new view.WalletBackUp();
            backupw.setData(comp.lab_wName.text);
            backupw.setParetUI(comp);
            util.compClear();
            util.putCompStack(comp);
        };
        //这里的comp需要重新传值回来
        WalletDetail.prototype.exportPriKeyCb = function (pass, comp) {
            if (service.walletServcie.checkPassword(pass)) {
                var wallet = service.walletServcie.getWallet(comp.lab_wName.text);
                var epk = new view.alert.ExportPriKey();
                epk.setData(wallet.wPrivateKey);
                epk.popup(true, true);
            }
        };
        WalletDetail.prototype.exportKeystoreCb = function (pass, comp) {
            if (service.walletServcie.checkPassword(pass)) {
                //生成二维码
                var wallet = service.walletServcie.getWallet(comp.lab_wName.text);
                var epk = new view.set.ExpKeystore();
                epk.setData(wallet.wKeyStore);
                epk.setParetUI(comp);
                comp.visible = false;
            }
        };
        return WalletDetail;
    }(ui.WalletDetailUI));
    view.WalletDetail = WalletDetail;
})(view || (view = {}));
//# sourceMappingURL=WalletDetail.js.map