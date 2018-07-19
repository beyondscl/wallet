/**Created by the LayaAirIDE*/
module view {


    export class TransDetail extends ui.TransDetailUI {
        private comp: ui.TransDetailUI;
        private parentUI: ui.WalletTransferUI;

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

            let lab_type = data.dealType.toUpperCase() == config.msg.deal_transfer_in ? 'Sender' : 'Recipient';//入|出
            let trans_type = data.dealType.toUpperCase() == config.msg.deal_transfer_in ? '+' : '-';//
            if (util.isContain(config.prod.expCoins, data.dealCoinType.toUpperCase())) {//无法计算价格
                this.comp.lab_amount.text = trans_type + data.dealAmount + ' ' + data.dealCoinType.toUpperCase() + " (RMB¥ - )";
            } else {//折算人民币
                this.comp.lab_amount.text = trans_type + data.dealAmount + ' ' + data.dealCoinType.toUpperCase() + " (RMB¥" + (data.dealAmount * mod.userMod.ethToUsd * mod.userMod.usdToRmb).toFixed(2) + ")";//-0.00001 ETH (US$0.05)
            }
            this.comp.lab_type.text = lab_type;
            this.comp.lab_addr.text = util.getAddr(data.getDealAddr());
            this.comp.lab_transId.text = data.dealTransId;
            this.comp.lab_gas.text = data.dealGas / 1e9 + '';
            this.comp.lab_confirm.text = data.dealConfirm ? data.dealConfirm + "" : '-';
            this.comp.lab_time.text = data.dealTime;
            this.comp.lab_nonce.text = data.dealNonce ? data.dealNonce + "" : '-';
        }

        private init() {
            this.comp = new ui.TransDetailUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_moreinfo.on(Laya.Event.CLICK, this, this.moreinfo);
        }

        private goBack() {
            this.comp.removeSelf();
            this.parentUI.visible = true;
        }

        private moreinfo() {
        }
    }
}