"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountDataClass = void 0;
class DiscountDataClass {
    constructor(a, p) {
        this.amount = a;
        this.percent = p;
    }
    toString() {
        return { amount: this.amount.toString(), percent: this.percent.toString() };
    }
}
exports.DiscountDataClass = DiscountDataClass;
