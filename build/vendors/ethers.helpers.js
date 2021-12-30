"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertWeiToEth = exports.convertToWei = exports.convertToBN = void 0;
const ethers_1 = require("ethers");
const convertToBN = (amount) => {
    return ethers_1.BigNumber.from(amount);
};
exports.convertToBN = convertToBN;
const convertToWei = (amount, precision) => {
    return ethers_1.BigNumber.from(ethers_1.ethers.utils.parseUnits(toFixed(parseFloat(amount), precision), precision));
};
exports.convertToWei = convertToWei;
const convertWeiToEth = (wei, precision) => {
    const eth = parseFloat(ethers_1.ethers.utils.formatUnits(wei.toString(), ethers_1.BigNumber.from(precision)));
    return eth;
};
exports.convertWeiToEth = convertWeiToEth;
function toFixed(num, fixed) {
    var _a;
    const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
    return (_a = num.toString().match(re)) === null || _a === void 0 ? void 0 : _a[0];
}
