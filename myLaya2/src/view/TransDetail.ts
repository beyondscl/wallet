/**Created by the LayaAirIDE*/
module view {


    export class TransDetail extends ui.TransDetailUI {
        private comp: ui.TransDetailUI;
        private parentUI: view.WalletTransfer

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        /**
         * @param data
         * @param parent ui only
         */
        public initData(data: mod.dealtemMod, parent: any) {
            this.parentUI = parent;

            let lab_type = data.getDealType();
            this.comp.lab_type.text = lab_type;
            this.comp.lab_amount.text = data.getDealAmount();
            this.comp.lab_amount.color = data.getDealColor();
            this.comp.lab_addr.text = data.getDealAddr();
            this.comp.lab_transId.text = data.dealTransId;
            this.comp.lab_gas.text = data.getDealGas();
            this.comp.lab_time.text = data.dealTime;
            this.comp.lab_nonce.text = data.dealNonce ? data.dealNonce + "" : '-';

            service.transService.getTxdetail(data.dealTransId, function (ret, args) {
                ret = JSON.parse(ret)
                if (ret.retCode == 0 && ret.data) {
                    let v: view.TransDetail = args[0];
                    let status = ret.data.status;
                    if (status) {
                        status = parseInt(status);
                    }
                    if (1 == status) {
                        v.comp.lab_confirm.text = config.msg.SUCCESS;
                        v.comp.lab_confirm.color = "green";
                    } else if (0 == status) {
                        v.comp.lab_confirm.text = config.msg.SUCCESS;
                        v.comp.lab_confirm.color = "green";
                    } else {
                        v.comp.lab_confirm.text = config.msg.FAIL;
                    }
                } else {
                    new view.alert.info(ret.reason ? ret.reason : config.msg.OPERATOR_ERROR).popup();
                }
            }, [this]);
        }

        private init() {
            this.comp = new ui.TransDetailUI();
            Laya.stage.addChild(this.comp);
            native.native.setCurrView(this, 2);
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_moreinfo.on(Laya.Event.CLICK, this, this.moreinfo);
            this.comp.btn_copy_tx.on(Laya.Event.CLICK, this, this.copyTx);
        }

        private goBack() {
            this.comp.removeSelf();
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI, 2);
        }

        private moreinfo() {
        }

        private copyTx() {
            util.getCopyValue(this.comp.lab_transId.text, function (btn: Laya.Button) {
                btn.label = '已复制'
            }, this.comp.btn_copy_tx);
        }
    }
}