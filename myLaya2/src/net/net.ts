//网络模块
module net {
    export class HttpRequest extends Laya.HttpRequest {
        private callback: any;
        private xhr: Laya.HttpRequest;
        private method: string = 'get';
        private resp: string = 'json';
        private headers: Array<string> = ['Access-Control-Allow-Origin', '*'];
        private callBackArgs: Array<any>;
        private post = "POST";

        constructor() {
            super();
            this.xhr = new Laya.HttpRequest();
            this.xhr.http.headers = this.headers;
            this.xhr.http.timeout = 10000;
            this.xhr.on(Laya.Event.COMPLETE, this, this.completeHandler);
            this.xhr.on(Laya.Event.ERROR, this, this.errorHandler);
            this.xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
        }

        public sendReq(url: string, data: any, method: string, resp: string, headers: any = null, callback: any) {
            if (method) this.method = method;
            if (resp) this.resp = resp;
            if (callback) this.callback = callback;
            if (headers) this.headers = headers;
            this.xhr.send(url, data, this.method, this.resp, this.headers);
        }

        public sendPost(url: string, data: any, callback: any, args: Array<any>) {
            if (callback) this.callback = callback;
            if (args) this.callBackArgs = args;
            this.xhr.send(url, data, this.post, this.resp, ['Content-Type', 'application/x-www-form-urlencoded']);
        }

        public sendSimpleReq(url: string, callback: any, args: Array<any>) {
            if (args) this.callBackArgs = args;
            if (callback) this.callback = callback;
            this.xhr.send(url, null, this.method, this.resp, this.headers);
        }

        private processHandler(data: any): void {
            console.log("processHandler", data);
        }

        private errorHandler(data: any): void {
            console.log("send request error:" + data);
        }

        private completeHandler(data: any): void {
            if (this.callback) {
                if (this.callBackArgs) {
                    this.callback(data, this.callBackArgs);//回传参数
                } else {
                    this.callback(data);
                }
            }

        }
    }
}