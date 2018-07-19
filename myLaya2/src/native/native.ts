module native {
    export class native extends Object {
        private static camaraCb: any;
        private static camaraCbArg: any;

        public static startCamara(fun: any, args) {
            this.camaraCbArg = args;
            this.camaraCb = fun;
            var json = {
                "type": 2,
                "data": "",
            }
            this.jsCallapp(json);
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

        public static appCalljs(data: any): string {

            console.log("appcalljs return :", data);
            console.log("data return :", data);
            console.log("this.camaraCbArg :", this.camaraCbArg);

            try {
                //这里需要优化与判断是返回的具体什么数据
                this.camaraCb(data, this.camaraCbArg);
                //1.识别别人的二维码，格式我们不能确定，全部数据显示为addr
                //可以可能是json字符串可能是字符串等
                //判断是否是我们的二维码
                //1.主页切换到转账界面,默认ETH转账
                //2.本身就在转账界面 addr=x&amount=x&type=x
            } catch (error) {
                console.log("appCalljs", error)
            }
            return "OK";
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