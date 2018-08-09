module view {
    import Handler = Laya.Handler;

    export class WalletTransfer extends ui.WalletTransferUI {
        public claName = "view.WalletTransfer";
        public comp: ui.WalletTransferUI;
        private parentUI: view.WalletMain;
        private total: number = 0;

        private originData: Array<mod.dealtemMod> = [];
        private scrollGate = false;

        private refData: mod.walItemMod;
        private refCell: Box;

        private page = 1;
        private pageSize = 10;

         /**
         *  copy
         */
        private times = [];
        private yearNow: string = new Date().getFullYear().toString();
        private monthNow: string = (new Date().getMonth() + 1).toString();
        private OneDayTime: number = 86400000;
        private realData = [];

        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setParentUI(parentUI: view.WalletMain) {
            this.parentUI = parentUI;
        }

        public setData(data: mod.walItemMod, cell: Box) {
            this.refData = data;
            this.refCell = cell;

            this.comp.lab_coin_name.text = data.itemName;
            let cValue = cell.getChildByName('cValue') as Label;
            let cTotal = cell.getChildByName('cTotal') as Label;
            this.total = Number(cTotal.text);
            this.comp.lab_coin_total.text = cValue.text.split("¥")[1];
            this.loadData(this.page, this.pageSize);

        }

        private loadData(page, pageSize) {
            let wait = new view.alert.info(config.msg.WAIT_OPERATOR);
            wait.popup();
            service.transService.GetTransactionsList(mod.userMod.defWallet.wAddr, page, pageSize, this.refData.itemName == 'ETH' ? 4 : 3, service.walletServcie.getCoinInfo(this.refData.itemName).coinAddr, function (ret, args) {
                let v: view.WalletTransfer = args[0];
                ret = JSON.parse(ret);
                if (ret.retCode == 0 && ret.data.list.length != 0) {
                    // v.setListUp(service.transService.getTransListItem(ret.data));
                     /**
                     *  copy
                     */
                    v.realData = v.realData.concat(v.getNewData(service.transService.getTransListItem(ret.data),v.yearNow, v.monthNow));
                    v.setListUp(v.realData);
                } else {
                    new view.alert.info(ret.reason ? ret.reason : config.msg.OPERATOR_ERROR).popup();
                    v.setListUp([]);
                }
                args[1].stop();
            }, [this, wait]);
        }

        public refresh() {
            this.setData(this.refData, this.refCell);
        }

        private init() {
            this.comp = new ui.WalletTransferUI();
            this.name = config.resource.WALLET_TRANSFER;
            Laya.stage.addChild(this.comp);
            this.comp.list.array = [];
            native.native.setCurrView(this,2);
             /**
             *  copy
             */
            this.comp.year.text = this.yearNow;
            this.comp.month.text = this.monthNow;
            // this.loadData(this.page, this.pageSize);
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.btn_send.on(Laya.Event.CLICK, this, this.btnClick, [1]);
            this.comp.btn_receive.on(Laya.Event.CLICK, this, this.btnClick, [2]);
             /**
             *  copy
             */
            this.comp.pre_btn.on(Laya.Event.CLICK, this, this.changeMonth, [0]);
            this.comp.aft_btn.on(Laya.Event.CLICK, this, this.changeMonth, [1]);
        }

        /**
         *  copy
         */
        private changeMonth(index: number){
            let NumYear = Number(this.yearNow);
            let NumMonth = Number(this.monthNow);
            if (0 == index) {
                if (NumMonth == 1) {
                    NumYear -= 1;
                    NumMonth = 12;
                } else {
                    NumMonth -=1;
                }
            } else {
                if (NumMonth == 12) {
                    NumYear += 1;
                    NumMonth = 1;
                } else {
                    NumMonth +=1;
                }
            }
                this.page = 1;
                this.comp.year.text = NumYear.toString();
                this.comp.month.text = NumMonth.toString();
                this.yearNow = NumYear.toString();
                this.monthNow = NumMonth.toString();
                this.originData = [];
                this.realData = [];
                this.loadData(this.page, this.pageSize);
                // this.realData
        }

        private goBack() {
            util.clearView();
            this.comp.removeSelf();
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI, 1);
        }

        private btnClick(type: number) {
            if (type == 1) {
                this.comp.visible = false;
                let send = new view.WalletSend();
                send.setData(this.comp.lab_coin_name.text, this.total, 0, '');
                send.setParentUI(this);
                util.clearView();
                util.putView(this);
            } else if (type == 2) {
                this.comp.visible = false;
                new view.WalletReceive(this.parentUI.comp.lab_wName.text).setParentUI(this);
            }
        }

        private setListUp(data: Array<mod.dealtemMod>): void {
            for (let i = 0; i < data.length; i++) {
                this.originData.push(data[i]);
            }
            if (this.originData.length == 0) {
                this.comp.lab_nodata.visible = true;
                this.comp.list.array = [];
            } else {
                this.comp.lab_nodata.visible = false;
            }
            let allMount: number = 0;
            for (var i = 0; i< this.originData.length; i++) {
               if(this.originData[i].dealAmount && this.originData[i].dealType == 'RECEIVE'){
                    allMount += Number(this.originData[i].dealAmount);
               } else if (this.originData[i].dealAmount && this.originData[i].dealType == 'SEND') {
                    allMount -= Number(this.originData[i].dealAmount);
               }
            }
            this.comp.allMount.text = allMount.toString();
            // if () {

            // }
            /**
             * itemImgSrc:""
                itemMonType:"0"
                itemName:"ETH"
                itemTotal:"0"
             */
            if (this.refData.itemName == 'ETH') {
                    let rmb: number = allMount * mod.userMod.ethToUsd * mod.userMod.usdToRmb
                    this.comp.lab_coin_total.text =Number(rmb.toFixed(2)).toString();
                } else {
                    // let rmb: number = allMount * mod.userMod.wwecToRmb
                    // this.comp.lab_coin_total.text =Number(rmb.toFixed(2)).toString();
                    this.comp.lab_coin_total.text = '-'
            }
            this.comp.list.vScrollBarSkin = "";
            this.comp.list.renderHandler = new Handler(this, this.onListRender, null, false);
            this.comp.list.array = this.originData;
            if (data.length != 0) {
                this.scrollGate = true;
                this.comp.list.scrollBar.on(Laya.Event.CHANGE, this, this.loadMore)
                this.comp.list.scrollTo((this.page - 1) * this.pageSize);
            }
        }

        private loadMore() {
            if (this.scrollGate && this.comp.list.scrollBar.max == this.comp.list.scrollBar.value) {
                this.scrollGate = false;
                this.page += 1;
                this.loadData(this.page, this.pageSize);
            }
        }

         private getNewData(data:Array<any>, year: string, month: string) {
            var dataAll = data;
            for (var i = 0;i<dataAll.length;i++) {
                this.times[i] = {
                    list: [],
                    timeNumMax: 0,
                    timeNumMin: 0
                };
                let DeTime = new Date(dataAll[i].dealTime).valueOf(); // 每条记录的时间时间戳
                let NoTime = new Date(new Date().toLocaleDateString()).getTime(); // 当天的零点时间戳
                console.log(Math.abs(DeTime - NoTime) - this.OneDayTime)
                if ((DeTime - NoTime) > 0){
                     this.times[i].list[0] = "今天";
                     this.times[i].timeNumMax = 0 * this.OneDayTime;
                     this.times[i].timeNumMin = (-1) * this.OneDayTime;
                } else if ((NoTime - DeTime) <  this.OneDayTime) {
                     this.times[i].list[0] = "昨天";
                     this.times[i].timeNumMax = this.OneDayTime;
                     this.times[i].timeNumMin = 0;
                } else if ((NoTime - DeTime) >  this.OneDayTime && (NoTime - DeTime) < 2 * this.OneDayTime) {
                        this.times[i].list[0] = "前天";
                        this.times[i].timeNumMax = NoTime - new Date(dataAll[i].dealTime.split(' ')[0]).valueOf();
                        this.times[i].timeNumMin = NoTime - new Date(dataAll[i].dealTime.split(' ')[0]).valueOf() - this.OneDayTime;;
                    } else {
                        this.times[i].list[0] = dataAll[i].dealTime.split(' ')[0];
                        this.times[i].timeNumMax = NoTime - new Date(dataAll[i].dealTime.split(' ')[0]).valueOf();
                        this.times[i].timeNumMin = NoTime - new Date(dataAll[i].dealTime.split(' ')[0]).valueOf() - this.OneDayTime;
                    }
                    for (var j = 0; j < this.times.length;j++) {
                        if ((NoTime - DeTime) <= Number(this.times[j].timeNumMax) && (NoTime - DeTime) >= Number(this.times[j].timeNumMin)) {
                            this.times[j].list.push(dataAll[i])
                        }
                    }
                }
            /**
             * 去除数组重复值
             */
            for (var i = 0;i<this.times.length;i++) {
                for (var j = i + 1; j< this.times.length; j++) {
                    if (this.times[i].timeNumMax == this.times[j].timeNumMax) {
                        this.times.splice(j, 1);
                    }
                }
            }
            var dataRest = []; // 统一为一个数组
            for (var m = 0; m<this.times.length;m++) {
                for (var n = 0; n<this.times[m].list.length; n++) {
                    dataRest.push(this.times[m].list[n]);
                }
            }
            var timeData = [];
            let TimeStart = new Date(year + "-" + month + "-" + "1").valueOf(); // 取当月第一天的时间戳
            let TimeEnd = new Date(year + "-" + (Number(month) + 1) + "-" + "1").valueOf(); // 取下个月第一天的时间戳
            for (var i = 0; i < dataRest.length;i++) { // 返回符合日期的数据
                if (dataRest[i].dealTime) {
                    var dealTime = new Date(dataRest[i].dealTime).valueOf();
                    if (dealTime > TimeStart && dealTime < TimeEnd) {
                        timeData.push(dataRest[i]);
                    }
                } else {
                    timeData.push(dataRest[i]);
                }

            }
            for (var i = 0; i<timeData.length;) {
                if (typeof timeData[i] == 'string' && typeof timeData[i + 1] == 'string') {
                    timeData.splice(i, 1);
                    i = i
                    timeData
                    // return
                } else {
                    i++;
                }
            }
            // timeData.splice(timeData.length - 1, 1);
            if (typeof timeData[timeData.length - 1] == 'string') {
                timeData.splice(timeData.length - 1, 1); // 去除最后一个日期标题
            }
            return timeData;
        }

        private onListRender(cell: Box, index: number) {
            cell.on(Laya.Event.CLICK, this, this.onSelect, [index]);
            var data: mod.dealtemMod = this.comp.list.array[index];

            if (typeof this.comp.list.array[index] == 'string'){
                let time = cell.getChildByName('time') as Laya.Label;
                time.text =this.comp.list.array[index];
                let cImg = cell.getChildByName('img') as Laya.Image;
                // cImg.skin = data.getDealImgSrc();
                cImg.visible = false;
                let cName = cell.getChildByName('lab_deal_name') as Label;
                 // cName.text = data.getDealChName();
                cName.visible = false;
                let addr = cell.getChildByName('lab_addr') as Label;
                // addr.text = data.getDealType() + ": " + util.getAddr(data.getDealAddr());
                addr.visible = false;
                let amount = cell.getChildByName('lab_amount') as Label;
                amount.visible = false;
            } else {
                cell.on(Laya.Event.CLICK, this, this.onSelect, [index]);
                let time = cell.getChildByName('time') as Laya.Label;
                time.visible = false;
                let cImg = cell.getChildByName('img') as Laya.Image;
                cImg.skin = data.getDealImgSrc();

                let cName = cell.getChildByName('lab_deal_name') as Label;
                cName.text = data.getDealChName();

                let addr = cell.getChildByName('lab_addr') as Label;
                addr.text = data.getDealType() + ": " + util.getAddr(data.getDealAddr());

                let amount = cell.getChildByName('lab_amount') as Label;
                amount.text = data.getDealSymbol() + data.dealAmount + " " + this.comp.lab_coin_name.text;
                amount.color = data.getDealColor()
            }
        }

        private onSelect(index: number): void {
            this.comp.visible = false;
            new view.TransDetail().initData(this.comp.list.array[index], this);
        }
    }
}