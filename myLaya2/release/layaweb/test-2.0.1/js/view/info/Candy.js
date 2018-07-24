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
    var info;
    (function (info) {
        var Candy = /** @class */ (function (_super) {
            __extends(Candy, _super);
            function Candy() {
                var _this = _super.call(this) || this;
                _this._timeInter = config.prod.smsTimeInterval;
                _this.init();
                _this.initEvent();
                return _this;
            }
            Candy.prototype.setData = function (data) {
                this.comp.list_wallet.array = data;
                this.comp.list_wallet.x = 1;
                this.comp.list_wallet.y = data.length;
                this.comp.list_wallet.vScrollBarSkin = "";
                this.comp.list_wallet.renderHandler = new Laya.Handler(this, this.onListRender);
                this.comp.list_wallet.selectHandler = new Laya.Handler(this, this.onSelect);
            };
            Candy.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            Candy.prototype.changTime = function (btn) {
                btn.disabled = true;
                var text = config.msg.SENDED_CODE + "(" + this._timeInter + ")";
                btn.label = text;
                this._timeInter--;
                if (this._timeInter < 0) {
                    Laya.timer.clear(this, this.changTime);
                    btn.label = config.msg.SEND_CODE;
                    btn.disabled = false;
                    this._timeInter = this._timeInter;
                }
            };
            Candy.prototype.init = function () {
                this.comp = new ui.info.CandyUI();
                Laya.stage.addChild(this.comp);
                this.comp.text_phone.text = mod.userMod.userName;
            };
            Candy.prototype.initEvent = function () {
                this.comp.btn_back.on(Laya.Event.CLICK, this, this.btnClick, [1]);
                this.comp.btn_apply.on(Laya.Event.CLICK, this, this.btnClick, [2]);
                this.comp.btn_getcode.on(Laya.Event.CLICK, this, this.btnClick, [3]);
            };
            Candy.prototype.onListRender = function (cell, index) {
                var data = this.comp.list_wallet.array[index];
                var wImg = cell.getChildByName('img_wallet');
                wImg.skin = data.wSkin;
                var wName = cell.getChildByName('lab_wName');
                wName.text = data.wName;
                var wAddr = cell.getChildByName('lab_wAddr');
                wAddr.text = util.getAddr(data.wAddr);
                var radio = cell.getChildByName('radio');
            };
            Candy.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.comp.removeSelf();
                    this.parentUI.visible = true;
                    return;
                }
                if (2 == index) { //发送获取糖果请求
                    if (this.checkArgs()) {
                        this.waiting = new view.alert.waiting(config.msg.GET_CANDY);
                        this.waiting.popup();
                        var phone = this.comp.text_phone.text;
                        var code = this.comp.text_code.text;
                        var wName = this.getSelectedItem();
                        var wallet = service.walletServcie.getWallet(wName);
                        var wAddr = wallet.wAddr;
                        service.userServcie.getCandy(phone, wAddr, code, this.callBack, this);
                    }
                    return;
                }
                if (3 == index) {
                    if (util.vilPhoneNumber(this.comp.text_phone.text)) {
                        this.comp.warn_phone.visible = false;
                        var phone = this.comp.text_phone.text;
                        service.userServcie.sendCandySms(phone, this.callBack, this);
                        Laya.timer.loop(1000, this, this.changTime, [this.comp.btn_getcode]);
                    }
                    else {
                        new view.alert.info(config.msg.PHONE_ERROR).popup();
                    }
                    return;
                }
            };
            Candy.prototype.callBack = function (ret, v) {
                if (v && v.waiting) {
                    v.waiting.stop();
                }
                ret = JSON.parse(ret);
                if (ret && ret.retCode == 0) {
                    new view.alert.info(ret.retMsg.msg).popup();
                }
                else {
                    new view.alert.info(ret.reason).popup();
                }
            };
            Candy.prototype.onSelect = function (index) {
                var childs = this.comp.list_wallet.cells;
                for (var i = 0; i < childs.length; i++) {
                    var radio = childs[i].getChildByName('radio');
                    if (i != index) {
                        radio.selected = false;
                    }
                    else {
                        radio.selected = true;
                    }
                }
            };
            Candy.prototype.getSelectedItem = function () {
                var childs = this.comp.list_wallet.cells;
                for (var i = 0; i < childs.length; i++) {
                    var radio = childs[i].getChildByName('radio');
                    if (radio.selected) {
                        return childs[i].getChildByName('lab_wName').text;
                    }
                }
                return null;
            };
            Candy.prototype.checkArgs = function () {
                var phone = this.comp.text_phone.text;
                var warn_phone = this.comp.warn_phone;
                var code = this.comp.text_code.text;
                var warn_code = this.comp.warn_code;
                var warn_list = this.comp.warn_list;
                if (!phone || !util.vilPhoneNumber(phone)) {
                    // new view.alert.info(config.msg.PHONE_ERROR).popup();
                    // return false;
                }
                warn_phone.visible = false;
                if (!code || code.length != 6) {
                    // new view.alert.info(config.msg.VCODE_ERROR).popup();
                    // return false;
                }
                warn_code.visible = false;
                if (!this.getSelectedItem()) {
                    new view.alert.info(config.msg.SELECT_ERROR).popup();
                    return false;
                }
                warn_list.visible = false;
                return true;
            };
            return Candy;
        }(ui.info.CandyUI));
        info.Candy = Candy;
    })(info = view.info || (view.info = {}));
})(view || (view = {}));
//# sourceMappingURL=Candy.js.map