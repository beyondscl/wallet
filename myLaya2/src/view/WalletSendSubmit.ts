/**Created by the LayaAirIDE*/
module view {
    import Handler = Laya.Handler;

    export class WalletSendSubmit extends ui.WalletSendSubmitUI {
        private comp: ui.WalletSendSubmitUI;

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        private init() {
            this.comp = new ui.WalletSendSubmitUI();
            Laya.stage.addChild(this.comp);
            Laya.stage.bgColor = 'white';
            Laya.stage.scaleMode = config.prod.appAdapterType;
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_submit.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.sli_gas.changeHandler = new Handler(this, this.sliChange);
        }

        public setData(data: any) {

        }

        private goBack() {
            Laya.stage.removeChild(this.comp);
            new view.WalletSend();
        }

        private btnClick(type: number) {
            switch (type) {
                case (1):
                    Laya.stage.removeChild(this.comp);
                    Laya.stage.removeSelf();
                    new view.WalletTransfer();
                    let defaultW = mod.userMod.defWallet;
                    let fromAdd = this.comp.text_from.text;
                    let toAddr = this.comp.text_to.text;
                    let value = this.comp.send_amout.text;
                    let gasT = this.comp.sli_gas.value;
                    let gasPrice = 2100;
                    let gas = gasT / gasPrice;
                    service.walletServcie.transfer(defaultW.wPassword, defaultW.wAddr, toAddr, value, gasPrice, gas);
                    break;
                default:
                    console.log("error type");
                    break;
            }
        }

        private sliChange(value: number) {
            //gasLimit=21000
            let lab_max_gas = value / Math.pow(10, 9);
            let lab_max_gas_usd = Number(lab_max_gas * 516).toFixed(2);
            let lab_max_total = Number(this.comp.send_amout.text + lab_max_gas);
            var lab_max_total_usd = Number(lab_max_total * 516).toFixed(2);
            this.comp.lab_max_gas.text = lab_max_gas + " ETH";
            this.comp.lab_max_gas_usd.text = lab_max_gas_usd + " USD";
            this.comp.lab_max_total.text = lab_max_total + " ETH";
            this.comp.lab_max_total_usd.text = lab_max_total_usd + " USD";
        }
    }
}