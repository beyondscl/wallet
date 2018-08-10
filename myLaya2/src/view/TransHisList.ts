/**Created by the LayaAirIDE*/
module view {
    import Handler = Laya.Handler;

    export class TransHisList extends ui.TransHisListUI {
        private comp: ui.TransHisListUI;
        private parentUI;
        private page = 1;
        private pageSize = 10;
        private originData: Array<mod.dealtemMod> = [];
        private scrollGate = false;
        private times = [];
        private yearNow: string = new Date().getFullYear().toString();
        private monthNow: string = (new Date().getMonth() + 1).toString();
        private OneDayTime: number = 86400000;
        private realData= [];
        constructor() {
            super();
            this.init();
            this.initEvent();
        }

        public setData(data: Array<mod.dealtemMod>, parent: any) {
            this.parentUI = parent;
            // this.loadData(this.page, this.pageSize);

        }

        private loadData(page, pageSize) {
            let wait = new view.alert.info(config.msg.WAIT_OPERATOR);
            wait.popup();
            service.transService.GetTransactionsList(mod.userMod.defWallet.wAddr, page, pageSize, 1, "", function (ret, args) {
                let v: view.TransHisList = args[0];
                ret = JSON.parse(ret);
                if (ret.retCode == 0 && ret.data.list.length != 0) {
                    // if (v.yearNow != new Date().getFullYear().toString() || v.monthNow != Number(new Date().getMonth() + 1).toString()) {
                    //     v.realData = [];
                    //     v.originData = [];
                    // }
                    // let dataNew2 = service.transService.getTransListItem(ret.data)
                    // let dataNew = v.getNewData(service.transService.getTransListItem(ret.data),v.yearNow, v.monthNow)
                    v.realData = v.realData.concat(v.getNewData(service.transService.getTransListItem(ret.data),v.yearNow, v.monthNow));
                    v.setListUp(v.realData);
                } else if(ret.retCode != 0){
                    new view.alert.info(ret.reason ? ret.reason : config.msg.OPERATOR_ERROR).popup();
                    // v.originData = [];
                    v.setListUp([]);
                }else{
                    v.setListUp([]);
                }
                args[1].stop();
            }, [this, wait]);
        }

        private init() {
            this.comp = new ui.TransHisListUI();
            Laya.stage.addChild(this.comp);
            this.comp.list.array = [];
            this.comp.year.text = this.yearNow;
            this.comp.month.text = this.monthNow;
            this.loadData(this.page, this.pageSize);
            native.native.setCurrView(this,2);
        }

        private initEvent() {
            this.comp.btn_goback.on(Laya.Event.CLICK, this, this.goBack);
            this.comp.pre_btn.on(Laya.Event.CLICK, this, this.changeMonth, [0]);
            this.comp.aft_btn.on(Laya.Event.CLICK, this, this.changeMonth, [1]);
        }

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
                } else if(NumMonth + 1 > Number(new Date().getMonth()+1) && NumYear == Number(new Date().getFullYear())) {
                    return
                } else {
                    NumMonth +=1;
                }
            }
                this.page = 1
                this.comp.year.text = NumYear.toString();
                this.comp.month.text = NumMonth.toString();
                this.yearNow = NumYear.toString();
                this.monthNow = NumMonth.toString();
                this.realData = [];
                this.loadData(this.page, this.pageSize);
        }

        private goBack() {
            Laya.stage.removeChild(this.comp);
            this.parentUI.comp.visible = true;
            native.native.setCurrView(this.parentUI,1);
        }

        //init deal history list
        private setListUp(data: Array<mod.dealtemMod>): void {
            this.originData = [];
            for (let i = 0; i < data.length; i++) {
                this.originData.push(data[i]);
            }
            if (this.originData.length == 0 && this.realData.length == 0) {
                this.comp.lab_nodata.visible = true;
                this.comp.list.array = [];
            } else {
                this.comp.lab_nodata.visible = false;
            }

            this.comp.list.vScrollBarSkin = "";
            this.comp.list.renderHandler = new Handler(this, this.onListRender, null, false);
            this.comp.list.array = this.realData;
            if (this.originData.length != 0) {
                this.scrollGate = true;
                this.comp.list.scrollBar.on(Laya.Event.CHANGE, this, this.loadMore)
                if(this.page * this.pageSize>this.comp.list.array.length){
                    this.scrollGate = false;
                }
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
            for (var i = 0;i<this.times.length - 1;) {
                if (this.times[i].timeNumMax == this.times[i+1].timeNumMax) {
                    this.times.splice(i + 1, 1);
                    i = i;
                } else {
                    i++;
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
                } else {
                    i++;
                }
            }
            // timeData.splice(timeData.length - 1, 1);
            if (typeof timeData[timeData.length - 1] == 'string') {
                timeData.splice(timeData.length - 1, 1); // 去除最后一个日期标题
            }
            for (var i = 0; i< this.realData.length; i++) { // 去掉相同日期标题
               for (var j =0; j<timeData.length; j++) {
                    if (this.realData[i] == timeData[j] && (typeof this.realData[i] == 'string')) {
                        timeData.splice(j, 1);
                    }
               }
            }
            return timeData; 
        }
        // 渲染会循环两次
        private onListRender(cell: Box, index: number) {
            var data: mod.dealtemMod = this.comp.list.array[index]
            if (typeof this.comp.list.array[index] == 'string'){
                let cImg = cell.getChildByName('img') as Laya.Image;
                cImg.visible = false;
                let cName = cell.getChildByName('lab_deal_name') as Label;
                cName.visible = false;
                let addr = cell.getChildByName('lab_addr') as Label;
                addr.visible = false;
                let amount = cell.getChildByName('lab_amount') as Label;
                amount.visible = false;
                let time = cell.getChildByName('time') as Label;
                time.text = this.comp.list.array[index];
                time.visible = true;
                let timeBg = cell.getChildByName('timeBg') as Label;
                timeBg.visible = true;
                // cell.height = 20;
                // this.comp.list.cell[index].height = 20;
                // cell[index].height = 20;
            }else{
                cell.on(Laya.Event.CLICK, this, this.onSelect, [index]);
                let cImg = cell.getChildByName('img') as Laya.Image;
                cImg.skin = data.getDealImgSrc();
                cImg.visible = true;
                let cName = cell.getChildByName('lab_deal_name') as Label;
                cName.text = data.getDealChName();
                cName.visible = true;
                let addr = cell.getChildByName('lab_addr') as Label;
                addr.text = data.getDealType() + ": " + util.getAddr(data.getDealAddr());
                addr.visible = true;
                let amount = cell.getChildByName('lab_amount') as Label;
                amount.text = data.getDealSymbol() + data.dealAmount + " " + data.dealCoinType;
                amount.color = data.getDealColor()
                amount.visible = true;
                let time = cell.getChildByName('time') as Label;
                time.visible = false;
            }
        }

        private onSelect(index: number): void {
            this.comp.visible = false;
            new view.TransDetail().initData(this.comp.list.array[index], this);
        }
    }
}