"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return __awaiter(this, void 0, void 0, function* () {
            this.paymentsContract = this.vendor.contract(a, this.paymentsAbi, o);
            this.erc20Contract = this.vendor.contract(e, this.erc20Abi);
            this.services = new services_1.default();
            if (this.vendor.biconomy !== undefined) {
                this.biconomyERC20Contract = this.vendor.contract(e, this.erc20Abi, this.vendor.biconomy.getSignerByAddress(yield this.vendor.signer.getAddress()));
            }
            return !!this.paymentsContract && !!this.erc20Contract;
        });
    }
}
exports.default = default_1;
