var util = /** @class */ (function () {
    function util() {
    }
    util.getAddr = function (addr) {
        return addr.replace(/([^]{8})([^]{20})([^]*)/, "$1******$2");
    };
    return util;
}());
//# sourceMappingURL=util.js.map