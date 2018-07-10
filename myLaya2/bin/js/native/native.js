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
var native;
(function (native_1) {
    var native = /** @class */ (function (_super) {
        __extends(native, _super);
        function native() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        native.startCamara = function (fun, args) {
            this.camaraCbArg = args;
            this.camaraCb = fun;
            var json = {
                "type": 2,
                "data": "",
            };
            this.jsCallapp(json);
        };
        native.startCopy = function () {
            var json = {
                "type": 1,
                "data": "",
            };
            this.jsCallapp(json);
        };
        native.appCalljs = function (data) {
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
            }
            catch (error) {
                console.log("appCalljs", error);
            }
            return "OK";
        };
        native.jsCallapp = function (json) {
            try {
                Laya.Browser.window.Bridge.callApp(JSON.stringify(json));
            }
            catch (error) {
                console.log("jsCallapp 只能在app环境中调用");
            }
        };
        return native;
    }(Object));
    native_1.native = native;
})(native || (native = {}));
//# sourceMappingURL=native.js.map