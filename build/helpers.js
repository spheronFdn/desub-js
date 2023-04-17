"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneWithWriteAccess = void 0;
function defineWriteOnly(object, name, value) {
    Object.defineProperty(object, name, {
        value,
        writable: true,
        enumerable: false,
    });
}
function cloneWithWriteAccess(obj) {
    if (Array.isArray(obj)) {
        return obj.map((item) => cloneWithWriteAccess(item));
    }
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    const result = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            if (value === undefined) {
                continue;
            }
            defineWriteOnly(result, key, cloneWithWriteAccess(value));
        }
    }
    return result;
}
exports.cloneWithWriteAccess = cloneWithWriteAccess;
