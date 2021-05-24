"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertWeiToEth = exports.convertToWei = exports.convertToBN = void 0;
const ethers_1 = require("ethers");
const convertToBN = (amount) => {
    return ethers_1.BigNumber.from(amount);
};
exports.convertToBN = convertToBN;
const convertToWei = (amount) => {
    return ethers_1.BigNumber.from(ethers_1.ethers.utils.parseUnits(amount, 18));
};
exports.convertToWei = convertToWei;
const convertWeiToEth = (wei) => {
    const eth = parseFloat(ethers_1.ethers.utils.formatEther(wei.toString()));
    return eth;
};
exports.convertWeiToEth = convertWeiToEth;
