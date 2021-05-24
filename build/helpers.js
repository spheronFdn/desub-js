"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneWithWriteAccess = void 0;
function defineWriteOnly(object, name, value) {
    Object.defineProperty(object, name, {
        enumerable: false,
        value: value,
        writable: true,
    });
}
function cloneWithWriteAccess(o) {
    if (Array.isArray(o))
        return o.map((item) => cloneWithWriteAccess(item));
    if (typeof o === 'object') {
        const result = {};
        for (const key in o) {
            if (o.hasOwnProperty(key)) {
                const value = o[key];
                if (value === undefined)
                    continue;
                defineWriteOnly(result, key, cloneWithWriteAccess(value));
            }
        }
        return result;
    }
    return o;
}
exports.cloneWithWriteAccess = cloneWithWriteAccess;
