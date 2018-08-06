/**
 * 日志记录
 */
module service {
    export class sysLog {
        constructor() {
        }
        public static log(cName:string,method:string,params:Array<any>,exceptions:string){
            let uid = mod.userMod.userId;
            let log = {
                url: config.prod.apiPostLog,
                token: mod.userMod.token,
                data: {
                        user_id: mod.userMod.userId,
                        class_name: cName.toUpperCase(),
                        method: method.toUpperCase(),
                        params: this.getParams(params.toString()),
                        exceptions: this.getException(exceptions)
                },
                async: true,
                callbackArgs: [],
                success: function (ret, args) {
                    console.log("service.syslog.log success",ret,args);
                },
                complete: function () {
                },
                error: function (ret, args) {
                    console.log("service.syslog.log error",ret,args);
                }
            }
            Laya.Browser.window.Ajax.post(log);
        }
        private static getParams(r){
            r = r.length>225?r.substring(0,224):r;
            return r;
        }
        private static getException(exceptions){
            if(typeof exceptions == 'string'){
                return exceptions.length>225?exceptions.substring(0,224):exceptions;
            }
            if(typeof exceptions == 'object'){
                try {
                    let r = JSON.stringify(exceptions);
                    r = r.length>225?r.substring(0,224):r;
                    return r;
                } catch (error) {
                    return exceptions;
                }
            }
        }
    }
}