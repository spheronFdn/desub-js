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
const deployed_1 = __importDefault(require("./abstracts/deployed"));
const constants_1 = require("./constants");
class default_1 extends deployed_1.default {
    constructor(vendor, coinMarketCapKey) {
        super(vendor, constants_1.PAYMENT_ABI, constants_1.ERC20_ABI, constants_1.SUBSCRIPTION_PAYMENT_ABI, constants_1.SUBSCRIPTION_DATA_ABI);
        this.coinMarketCapKey = coinMarketCapKey;
    }
    chargeUser(u, d) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const paramArray = [];
            const paramValue = [];
            for (let i = 0; i < d.length; i++) {
                paramArray.push(d[i].param);
                paramValue.push(this.vendor.convertToBN(d[i].value.toString()));
            }
            console.log(paramValue);
            console.log(paramArray);
            return yield ((_a = this.subscriptionPaymentContract) === null || _a === void 0 ? void 0 : _a.functions.chargeUser(u, paramArray, paramValue));
        });
    }
}
exports.default = default_1;
