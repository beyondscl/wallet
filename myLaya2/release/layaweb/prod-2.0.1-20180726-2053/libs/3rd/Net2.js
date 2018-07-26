var Ajax = {
    //ajax模块
    init: function (obj) {
        //初始化数据
        var objAdapter = {
            url: '',
            method: 'get',
            data: {},
            success: function () {
            },
            complete: function () {
            },
            error: function (error) {
                console.log('ajax init error:', error);
            },
            async: true,
            timeoutMsg: {
                "retCode": -1,
                "reason": "请求超时"
            }
        }
        //通过使用JS随机字符串解决IE浏览器第二次默认获取缓存的问题
        objAdapter.url = obj.url + '?rand=' + Math.random();
        objAdapter.method = obj.method || objAdapter.method;
        objAdapter.data = Ajax.params(obj.data) || Ajax.params(objAdapter.data);
        objAdapter.async = obj.async || objAdapter.async;
        //自定义回调函数传入的回调函数及其参数列表
        objAdapter.complete = obj.complete || objAdapter.complete;
        objAdapter.success = obj.success || objAdapter.success;
        objAdapter.error = obj.error || objAdapter.error;
        objAdapter.callbackArgs = obj.callbackArgs || [];//列表数组[]

        objAdapter.token = obj.token || '';// token,或者headers
        objAdapter.timer = null;//超时设置，callback中统一回调

        return objAdapter;
    },
    //创建XMLHttpRequest对象
    createXHR: function () {
        if (window.XMLHttpRequest) { //IE7+、Firefox、Opera、Chrome 和Safari
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) { //IE6 及以下
            var versions = ['MSXML2.XMLHttp', 'Microsoft.XMLHTTP'];
            for (var i = 0, len = versions.length; i < len; i++) {
                try {
                    return new ActiveXObject(version[i]);
                    break;
                } catch (e) {
                    console.log('createXHR error:', createXHR);
                }
            }
        } else {
            throw new Error('浏览器不支持XHR对象！');
            console.log('浏览器不支持XHR对象！:');
        }
    },
    params: function (data) {
        var arr = [];
        for (var i in data) {
            //特殊字符传参产生的问题可以使用encodeURIComponent()进行编码处理
            arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
        }
        return arr.join('&');
    },
    callback: function (obj, xhr) {
        if (obj.timer) {
            clearTimeout(obj.timer);
        }
        if (obj.isTimeout == true) {
            console.log("timeout", obj)
            obj.error(obj.timeoutMsg, obj.callbackArgs);
            return;
        }
        if (xhr.status == 200) { //判断http的交互是否成功，200表示成功
            obj.success(xhr.responseText, obj.callbackArgs); //回调传递参数,及其自己传入过来的参数
        } else {
            console.log('net2.js 获取数据错误！错误代号：' + xhr.status + '，错误信息：' + xhr.statusText, "url:" + obj.url);
            obj.error(xhr.responseText, obj.callbackArgs); //回调传递参数,及其自己传入过来的参数
        }
    },
    ajax: function (obj) {
        if (obj.method === 'post') {
            Ajax.post(obj);
        } else {
            Ajax.get(obj);
        }
    },
    //post方法
    post: function (obj) {
        var xhr = Ajax.createXHR(); //创建XHR对象
        var opt = Ajax.init(obj);
        opt.method = 'post';
        opt = Ajax.startTimecheck(xhr, opt);
        //在使用XHR对象时，必须先调用open()方法，
        //它接受三个参数：请求类型(get、post)、请求的URL和表示是否异步。
        xhr.open(opt.method, opt.url, opt.async);
        if (opt.async === true) { //true表示异步，false表示同步
            //使用异步调用的时候，需要触发readystatechange 事件
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) { //判断对象的状态是否交互完成
                    Ajax.callback(opt, xhr); //回调
                }
            };
        }
        //post方式需要自己设置http的请求头，来模仿表单提交。
        //放在open方法之后，send方法之前。
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        if (opt.token) {
            xhr.setRequestHeader('x-access-token', opt.token);
        }
        xhr.send(opt.data); //post方式将数据放在send()方法里
        if (opt.async === false) { //同步
            Ajax.callback(obj, xhr); //回调
        }
    },
    //get方法
    get: function (obj) {
        var xhr = Ajax.createXHR(); //创建XHR对象
        var opt = Ajax.init(obj);
        opt = Ajax.startTimecheck(xhr, opt);
        //若是GET请求，则将数据加到url后面
        opt.url += opt.url.indexOf('?') == -1 ? '?' + opt.data : '&' + opt.data;
        //在使用XHR对象时，必须先调用open()方法，
        //它接受三个参数：请求类型(get、post)、请求的URL和表示是否异步。
        xhr.open(opt.method, opt.url, opt.async);
        if (opt.async === true) { //true表示异步，false表示同步
            //使用异步调用的时候，需要触发readystatechange 事件
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) { //判断对象的状态是否交互完成
                    Ajax.callback(obj, xhr); //回调
                }
            };
        }
        if (opt.token) {
            xhr.setRequestHeader('x-access-token', opt.token);
        }
        xhr.send(null); //get方式则填null
        if (opt.async === false) { //同步
            Ajax.callback(obj, xhr); //回调
        }
    },
    //默认20秒超时
    startTimecheck: function (xhr, opt) {
        try {
            // var timer = setTimeout(function () {
            //     clearTimeout(opt.timer)
            //     opt.isTimeout = true;
            //     Ajax.callback(opt, xhr);
            // }, 20 * 1000);
            // opt.timer = timer;
            return opt;
        } catch (error) {
            console.log("e",error)
        }
    }
}