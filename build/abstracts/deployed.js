"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("../services/services"));
class default_1 {
    constructor(v, a, e) {
        this.vendor = v;
        this.paymentsAbi = a;
        this.erc20Abi = e;
        this.services = new services_1.default();
    }
    at(a, e, o) {
        this.paymentsContract = this.vendor.contract(a, this.paymentsAbi, o);
        this.erc20Contract = this.vendor.contract(e, this.erc20Abi);
        this.services = new services_1.default();
        return !!this.paymentsContract;
    }
}
exports.default = default_1;
