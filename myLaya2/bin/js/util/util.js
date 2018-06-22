var util = /** @class */ (function () {
    function util() {
    }
    util.getAddr = function (addr) {
        return addr.replace(/([^]{8})([^]{20})([^]*)/, "$1......$2");
    };
    util.getStorageItem = function (itemName) {
        var data = Laya.LocalStorage.getItem(itemName);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    };
    util.setStorageItem = function (itemName, data) {
        Laya.LocalStorage.setItem(itemName, data);
    };
    return util;
}());
//# sourceMappingURL=util.js.map