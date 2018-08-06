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

        public static appCalljs(data: any): string {
            try {
                this.camaraCb(data, this.camaraCbArg);
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