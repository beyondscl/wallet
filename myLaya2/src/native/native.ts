module native {
    export class native extends Object {
        private static camaraCb: any;
        private static camaraCbArg: any;

        private static view;
        private static viewOrder;
        public static setCurrView(view:any,order:number){
            this.view = view;
            this.viewOrder = order;
        }

        public static startCamara(fun: any, args) {
            this.camaraCbArg = args;
            this.camaraCb = fun;
            var json = {
                "type": 2,
                "data": "",
            }
            this.jsCallapp(json);
            // test
            // let data = "iban:XE04P02MNI75D9LSZ8XJ8Z68Q7KYFEW5UWF?amount=10&token=ETH";
            // let data = "https://www.baidu.com";
            // this.appCalljs(data);
        }

        public static startCopy() {
            var json = {
                "type": 1,
                "data": "",
            }
            this.jsCallapp(json);
        }

        public static colseAppbg() {
            var json = {
                "type": 3,
                "data": "",
            }
            this.jsCallapp(json);
        }

        /**
         * type = 1 :复制，不需要回调
         * type = 2 :相机回调
         * type = 3 :回退键回调
         * @param data 返回的数据
         * @return 3 : 再次询问回退返回
         */
        public static appCalljs(data: any): number {
            console.log(data);
            try {
                let ret = JSON.parse(data);
                if(ret.type==2){
                    this.camaraCb(ret.data, this.camaraCbArg);
                }
                /**
                 * 每个页面必须调用setCurrView方法
                 * 1.一级页面必须提供viewOrder==1,可以不提供goback方法
                 * 2.非一级页面必须并提供goBack方法，并提供view (view = this)
                 */
                if(ret.type==3){
                    if(this.viewOrder==1){
                        return 3;
                    }else if(this.view){
                        this.view.goBack();
                    }else{
                        console.log("回退键没有响应事件",this.view,this.viewOrder);
                    }
                }
            } catch (error) {
                console.log("appCalljs", error)
            }
            return 0;
        }

        private static jsCallapp(json: any) {
            try {
                Laya.Browser.window.Bridge.callApp(JSON.stringify(json));
            } catch (error) {
                console.log("jsCallapp 只能在app环境中调用")
            }

        }

    }
}