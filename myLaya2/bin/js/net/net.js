var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//网络模块
var net;
(function (net) {
    var HttpRequest = /** @class */ (function (_super) {
        __extends(HttpRequest, _super);
        function HttpRequest() {
            var _this = _super.call(this) || this;
            _this.method = 'get';
            _this.resp = 'json';
            _this.headers = ['Access-Control-Allow-Origin', '*'];
            _this.post = "POST";
            _this.xhr = new Laya.HttpRequest();
            _this.xhr.http.headers = _this.headers;
            _this.xhr.http.timeout = 10000;
            _this.xhr.on(Laya.Event.COMPLETE, _this, _this.completeHandler);
            _this.xhr.on(Laya.Event.ERROR, _this, _this.errorHandler);
            _this.xhr.on(Laya.Event.PROGRESS, _this, _this.processHandler);
            return _this;
        }
        HttpRequest.prototype.sendReq = function (url, data, method, resp, headers, callback) {
            if (headers === void 0) { headers = null; }
            if (method)
                this.method = method;
            if (resp)
                this.resp = resp;
            if (callback)
                this.callback = callback;
            if (headers)
                this.headers = headers;
            this.xhr.send(url, data, this.method, this.resp, this.headers);
        };
        HttpRequest.prototype.sendPost = function (url, data, callback, args) {
            if (callback)
                this.callback = callback;
            if (args)
                this.callBackArgs = args;
            this.xhr.send(url, data, this.post, this.resp, ['Content-Type', 'application/x-www-form-urlencoded', "Access-Control-Allow-Origin", "*"]);
        };
        HttpRequest.prototype.sendSimpleReq = function (url, callback, args) {
            if (args)
                this.callBackArgs = args;
            if (callback)
                this.callback = callback;
            this.xhr.send(url, null, this.method, this.resp, this.headers);
        };
        HttpRequest.prototype.processHandler = function (data) {
            console.log(data);
        };
        HttpRequest.prototype.errorHandler = function (data) {
            console.log("send request error:" + data);
        };
        HttpRequest.prototype.completeHandler = function (data) {
            if (this.callback) {
                if (this.callBackArgs) {
                    this.callback(data, this.callBackArgs); //回传参数
                }
                else {
                    this.callback(data);
                }
            }
        };
        return HttpRequest;
    }(Laya.HttpRequest));
    net.HttpRequest = HttpRequest;
})(net || (net = {}));
//# sourceMappingURL=net.js.map