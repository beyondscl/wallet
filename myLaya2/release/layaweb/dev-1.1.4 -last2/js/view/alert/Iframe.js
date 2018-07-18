/**Created by the LayaAirIDE*/
//看能不能加入到tab中
var view;
(function (view) {
    var alert;
    (function (alert) {
        var Iframe = /** @class */ (function () {
            function Iframe(url) {
                var iframe = Laya.Browser.document.createElement("iframe");
                iframe.style.position = "absolute"; //设置布局定位。这个不能少。
                iframe.style.top = "40";
                iframe.width = '100%';
                iframe.height = '100%';
                iframe.frameborder = 'no';
                iframe.border = '0px';
                iframe.scrolling = 'yes';
                iframe.allowtransparency = 'no';
                iframe.src = url;
                Laya.Browser.document.body.appendChild(iframe);
                var close = Laya.Browser.document.createElement("div");
                close.style.position = "absolute"; //设置布局定位。这个不能少。
                close.style.top = "0";
                close.style.backgroundColor = 'black';
                close.innerHTML = '删除';
                close.width = '100%';
                close.height = 40;
                close.onclick = function () {
                    console.log(close);
                    Laya.Browser.document.body.removeChild(close);
                    console.log(iframe);
                    Laya.Browser.document.body.removeChild(iframe);
                };
                Laya.Browser.document.body.appendChild(close);
            }
            return Iframe;
        }());
        alert.Iframe = Iframe;
    })(alert = view.alert || (view.alert = {}));
})(view || (view = {}));
//# sourceMappingURL=Iframe.js.map