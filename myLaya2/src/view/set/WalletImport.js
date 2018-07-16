var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var set;
    (function (set) {
        var WalletImport = /** @class */ (function (_super) {
            __extends(WalletImport, _super);

            function WalletImport() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }

            WalletImport.prototype.setData = function (key) {
            };
            WalletImport.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            WalletImport.prototype.init = function () {
                this.comp = new ui.set.WalletImportUI();
                Laya.stage.addChild(this.comp);
                Laya.stage.bgColor = 'white';
            };
            WalletImport.prototype.initEvent = function () {
                this.comp.tab.selectHandler = new Laya.Handler(this, this.onSelect);
                this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
                this.comp.btn_sao.on(Laya.Event.CLICK, this, this.btnClick, [2]);
                this.comp.o_btn_import.on(Laya.Event.CLICK, this, this.btnClick, [3]);
                this.comp.o_check_agree.on(Laya.Event.CLICK, this, this.btnClick, [4]);
                this.comp.lab_service.on(Laya.Event.CLICK, this, this.btnClick, [5]);
            };
            WalletImport.prototype.onSelect = function (index) {
                this.comp.stack.selectedIndex = index;
            };
            WalletImport.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.comp.removeSelf();
                    this.parentUI.visible = true;
                }
                if (3 == index) { //助记词导入
                    var zjc = this.comp.o_text_zjc.text;
                    var pass = this.comp.o_text_pass.text;
                    var passConf = this.comp.o_text_confpass.text;
                    if (this.checkArgs(zjc, pass, passConf)) {
                        this.importWallet();
                    }
                }
                if (4 == index) {
                    this.comp.o_btn_import.disabled = !this.comp.o_check_agree.selected;
                }
                if (5 == index) {
                    this.comp.visible = false;
                    var s = new view.info.Service();
                    s.setParetUI(this.comp);
                    s.setData("1");
                    return;
                }
            };
            WalletImport.prototype.importWallet = function () {
                var load = new view.alert.waiting(config.msg.WAIT_IMPORT_WALLET);
                load.popup();
                var walletName = 'import_' + util.randomString(6);
                var zjc = this.comp.o_text_zjc.text;
                var pass = this.comp.o_text_pass.text;
                service.walletServcie.importWallet(zjc, walletName, pass, this.creatWalletCb, [this.comp, load]); //异步
            };
            WalletImport.prototype.checkArgs = function (zjc, pass, passConf) {
                if (!zjc || zjc.trim().split(" ").length != 12) {
                    this.comp.warn_zjc.visible = true;
                    this.comp.warn_zjc.text = "请输入12个助记词用空格分开";
                    return false;
                }
                if (!service.walletServcie.vilMemoryWork(zjc)) {
                    this.comp.warn_zjc.visible = true;
                    this.comp.warn_zjc.text = "您输入助记词不正确";
                    return false;
                }
                this.comp.warn_zjc.visible = false;
                if (!pass || pass.length < 8) {
                    this.comp.warn_pass.visible = true;
                    return false;
                }
                this.comp.warn_pass.visible = false;
                if (pass != passConf) {
                    this.comp.warn_passconf.visible = true;
                    return false;
                }
                this.comp.warn_passconf.visible = false;
                return true;
            };
            //args[0]:comp args[1]:loadingui
            WalletImport.prototype.creatWalletCb = function (wName, wPass, mnemonicWord, ret, args) {
                var dialog = args[1];
                dialog.stop();
                if (ret && ret.retCode == 0) {
                    var keystore = Laya.Browser.window.serialize();
                    var wallet = new mod.walletMod();
                    wallet.init(wName, wPass, "", keystore, ret.addresses[0], ['ETH', 'WWEC'], mnemonicWord);
                    var allWallets = service.walletServcie.getWallets();
                    if (allWallets) { //判断是否存在
                        for (var i = 0; i < allWallets.length; i++) {
                            var w = allWallets[i];
                            if (w.wAddr && w.wAddr == wallet.wAddr) { //一定要在初始化数据mod后再判断 0x
                                // new view.alert.Warn("导入钱包失败", "钱包 " + w.wName + " 已经存在").popup();
                                var info_1 = new view.alert.confirm("钱包已存在是否重置密码?", "");
                                w.wPassword = wPass;
                                info_1.setData(w.wName);
                                info_1.setCallback(function confirmCb(ret, args) {
                                    if (ret == 2) { //已经覆盖密码
                                        var wallet_1 = args[0]; //密码已经被更新
                                        var walletJson_1 = wallet_1.toJson();
                                        util.setItemJson(wallet_1.wName, walletJson_1);
                                        var com_1 = args[1];
                                        com_1.removeSelf();
                                        new view.WalletMain().initQueryData(wallet_1);
                                        return;
                                    }
                                }, [w, args[0]]);
                                info_1.popup();
                                return;
                            }
                        }
                    }
                    //记录数据
                    var walletJson = wallet.toJson();
                    util.setItemJson(wallet.wName, walletJson);
                    var appStore = util.getItem(config.prod.appKey);
                    if (appStore) {
                        appStore[appStore.length] = wallet.wName;
                        util.setItemJson(config.prod.appKey, appStore);
                    }
                    else {
                        util.setItemJson(config.prod.appKey, [wallet.wName]);
                    }
                    var com = args[0];
                    com.removeSelf(); //删除之前父类的comp
                    new view.WalletMain().initQueryData(wallet);
                    return;
                }
                else {
                    new view.alert.Warn("导入钱包失败", "").popup();
                    console.log("create wallet error!");
                }
            };
            return WalletImport;
        }(ui.set.WalletImportUI));
        set.WalletImport = WalletImport;
    })(set = view.set || (view.set = {}));
})(view || (view = {}));
//# sourceMappingURL=WalletImport.js.map