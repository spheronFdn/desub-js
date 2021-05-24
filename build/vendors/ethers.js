"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const vendor_1 = __importDefault(require("../abstracts/vendor"));
const contracts_1 = require("@ethersproject/contracts");
const ethers_1 = require("ethers");
const discount_data_1 = require("./discount-data");
const __1 = require("..");
class default_1 extends vendor_1.default {
    constructor(p, s) {
        super();
        this.provider = p;
        this.signer = s;
    }
    contract(address, abi) {
        this.requireSignerOrProvider();
        return new contracts_1.Contract(address, abi, this.signer);
    }
    convertStringArrayToBigNumberArray(array) {
        const bnArray = Array(array.length);
        for (let i = 0; i < array.length; i++) {
            bnArray[i] = ethers_1.BigNumber.from(array[i]);
        }
        return bnArray;
    }
    parseDiscountSlabs(data) {
        const slabs = data.map((a) => new discount_data_1.DiscountDataClass(a.amount, a.percent));
        return slabs.map((a) => a.toString());
    }
    convertToBN(amount) {
        return __1.helpers.ethers.convertToBN(amount);
    }
    convertToWei(amount) {
        return __1.helpers.ethers.convertToWei(amount);
    }
    convertWeiToEth(wei) {
        return __1.helpers.ethers.convertWeiToEth(wei);
    }
    requireSignerOrProvider() {
        if (!this.signer && !this.provider)
            throw new ReferenceError(errors_1.SIGNER_OR_PROVIDER_REQUIRED);
    }
}
exports.default = default_1;
