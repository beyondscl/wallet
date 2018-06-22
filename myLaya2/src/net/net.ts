//网络模块
module net {
    export class HttpRequest extends Laya.HttpRequest {
        private callback: any;
        private xhr: Laya.HttpRequest;
        private method: string = 'get';
        private resp: string = 'json';

        constructor() {
            super();
            this.xhr = new Laya.HttpRequest();
            this.xhr.http.timeout = 10000;
            this.xhr.on(Laya.Event.COMPLETE, this, this.completeHandler);
            this.xhr.on(Laya.Event.ERROR, this, this.errorHandler);
            this.xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
        }

        public sendReq(url: string, data: any, method: string, resp: string, headers: any = null, callback: any) {
            if (method) this.method = method;
            if (resp) this.resp = resp;
            if (callback) this.callback = callback;
            this.xhr.send(url, data, this.method, this.resp, headers);
        }

        private processHandler(data: any): void {
            console.log(data);
        }

        private errorHandler(data: any): void {
            console.log("send request error:" + data);
        }

        private completeHandler(data: any): void {
            if (this.callback)
                this.callback(data);
        }
    }
}