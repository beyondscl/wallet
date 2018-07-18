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
    var user;
    (function (user) {
        var UseInvite = /** @class */ (function (_super) {
            __extends(UseInvite, _super);
            function UseInvite() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }
            UseInvite.prototype.setData = function (key) {
            };
            UseInvite.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            UseInvite.prototype.setSelectedWaddr = function (wName) {
                this.comp.lab_selectw.visible = false;
                this.comp.box_wal.visible = true;
                var wal = service.walletServcie.getWallet(wName);
                mod.userMod.addr = wal.wAddr;
                this.comp.lab_addr.text = util.getAddr(wal.wAddr);
                this.comp.lab_wname.text = wal.wName;
                service.userServcie.setMainAddr(wal.wAddr, function (ret, a) {
                    ret = JSON.parse(ret);
                    if (ret && ret.retCode == 0) {
                        new view.alert.info(ret.retMsg.msg).popup();
                    }
                    else {
                        console.error("setSelectedWaddr error:", ret.reason);
                        new view.alert.info(ret.reason).popup();
                    }
                }, []);
            };
            UseInvite.prototype.init = function () {
                this.comp = new ui.user.UseInviteUI();
                Laya.stage.addChild(this.comp);
                this.comp.lab_invid_count.text = mod.userMod.invitedNum;
                this.comp.lab_invid_code.text = mod.userMod.code;
                this.comp.box_wal.visible = false;
                this.comp.lab_selectw.visible = false;
                var wallets = util.getItem(config.prod.getAppKey());
                //如果已经设置了，反显
                if (mod.userMod.addr) {
                    var wName = '钱包被删除，请重新导入或重新选择钱包';
                    var wals = service.walletServcie.getWallets();
                    for (var i = 0; i < wals.length; i++) {
                        if (wals[i].wAddr == mod.userMod.addr) {
                            wName = wals[i].wName;
                        }
                    }
                    this.comp.lab_addr.text = util.getAddr(mod.userMod.addr);
                    this.comp.lab_wname.text = wName;
                    var url = config.prod.downLoadUrl + "?code=" + mod.userMod.code;
                    util.createEwm(this.comp.img_ewm.width, this.comp.img_ewm.height, url, this, this.getImgSrc);
                    this.comp.box_wal.visible = true;
                    // }else if(wallets&&wallets.length==1){//只有一个默认选择
                    //     let wal = mod.userMod.defWallet;//必定是当前钱包
                    //     let name = wal.wName;
                    //     let addr = wal.wAddr;
                    //     this.comp.lab_addr.text = util.getAddr(addr);
                    //     this.comp.lab_wname.text = name;
                    //     let url = config.prod.downLoadUrl + "?code="+mod.userMod.code;
                    //     util.createEwm(this.comp.img_ewm.width, this.comp.img_ewm.height, url, this, this.getImgSrc);
                    //     this.comp.box_wal.visible = true;
                }
                else { //未设置
                    this.comp.lab_selectw.visible = true;
                    util.createEwm(this.comp.img_ewm.width, this.comp.img_ewm.height, config.prod.downLoadUrl, this, this.getImgSrc);
                }
            };
            UseInvite.prototype.getImgSrc = function (qrcode) {
                if (qrcode && qrcode._oDrawing._elImage.src) {
                    Laya.timer.clearAll(this);
                    this.comp.img_ewm.skin = qrcode._oDrawing._elImage.src;
                }
            };
            UseInvite.prototype.initEvent = function () {
                this.comp.lab_selectw.on(Laya.Event.CLICK, this, this.btnClick, [1]);
                this.comp.box_wal.on(Laya.Event.CLICK, this, this.btnClick, [1]);
                this.comp.btn_copy.on(Laya.Event.CLICK, this, this.btnClick, [2]);
                this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [3]);
            };
            UseInvite.prototype.btnClick = function (index) {
                if (3 == index) {
                    this.comp.removeSelf();
                    this.parentUI.comp.visible = true;
                }
                if (2 == index) {
                    util.getCopyValue(config.prod.downLoadUrl, function (a) {
                    }, []);
                    this.comp.btn_copy.label = '已复制';
                }
                if (1 == index) {
                    this.comp.visible = false;
                    var select = new view.info.SelectWallet();
                    select.setParetUI(this);
                    select.setData(service.walletServcie.getWallets(), mod.userMod.addr);
                }
            };
            return UseInvite;
        }(ui.user.UseInviteUI));
        user.UseInvite = UseInvite;
    })(user = view.user || (view.user = {}));
})(view || (view = {}));
//# sourceMappingURL=UseInvite.js.map