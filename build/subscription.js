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
const ethers_1 = require("ethers");
const deployed_1 = __importDefault(require("./abstracts/deployed"));
const constants_1 = require("./constants");
const errors_1 = require("./errors");
class SubscriptionContract extends deployed_1.default {
    constructor(vendor) {
        super(vendor, constants_1.PAYMENT_ABI, constants_1.ERC20_ABI, constants_1.SUBSCRIPTION_PAYMENT_ABI, constants_1.SUBSCRIPTION_DATA_ABI, constants_1.SUBSCRIPTION_NATIVE_PAYMENT_ABI, constants_1.SUBSCRIPTION_MANTLE_PAYMENT_ABI);
    }
    updateEscrow(escrowAddress) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.updateEscrow(escrowAddress));
        });
    }
    updateStakedToken(stakedTokenAddress) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.updateStakedToken(stakedTokenAddress));
        });
    }
    updateDiscountSlabs(discountSlabs, percents) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const vendor = this.vendor;
            const convertedDiscountSlabs = vendor.convertStringArrayToBigNumberArray(discountSlabs);
            const convertedPercents = vendor.convertStringArrayToBigNumberArray(percents);
            return (_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.updateDiscountSlabs(convertedDiscountSlabs, convertedPercents);
        });
    }
    enableDiscounts(stakingManagerAddress) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.enableDiscounts(stakingManagerAddress);
        });
    }
    disableDiscounts() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.disableDiscounts();
        });
    }
    setGovernanceAddress(governanceAddress) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.setGovernanceAddress(governanceAddress);
        });
    }
    setDataContract(dataContractAddress) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.subscriptionPaymentContract) === null || _a === void 0 ? void 0 : _a.functions.updateDataContract(dataContractAddress));
        });
    }
    setManagers(newOwners) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.setManagers(newOwners));
        });
    }
    setNewApprovals(approvalAmount) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const weiAmount = this.vendor.convertToWei(approvalAmount, this.tokenPrecision || 18);
            return yield ((_a = this.erc20Contract) === null || _a === void 0 ? void 0 : _a.functions.approve((_b = this.subscriptionPaymentContract) === null || _b === void 0 ? void 0 : _b.address, weiAmount));
        });
    }
    approveAndDeposit(approvalAmount) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const weiAmount = this.vendor.convertToWei(approvalAmount, this.tokenPrecision || 18);
                yield ((_a = this.erc20Contract) === null || _a === void 0 ? void 0 : _a.functions.approve((_b = this.subscriptionPaymentContract) === null || _b === void 0 ? void 0 : _b.address, weiAmount));
                return (_c = this.subscriptionPaymentContract) === null || _c === void 0 ? void 0 : _c.functions.userDeposit((_e = (_d = this.erc20Contract) === null || _d === void 0 ? void 0 : _d.address) !== null && _e !== void 0 ? _e : '', weiAmount);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Transaction failed: ${error.message}`);
                }
                else {
                    throw new Error(errors_1.TRANSACTION_FAILED);
                }
            }
        });
    }
    approveAndDepositMantle(approvalAmount) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const weiAmount = this.vendor.convertToWei(approvalAmount, this.tokenPrecision || 18);
                yield ((_a = this.erc20Contract) === null || _a === void 0 ? void 0 : _a.functions.approve((_b = this.subscriptionPaymentContract) === null || _b === void 0 ? void 0 : _b.address, weiAmount, {
                    gasLimit: 100000,
                }));
                return yield ((_c = this.subscriptionPaymentContract) === null || _c === void 0 ? void 0 : _c.functions.userDeposit((_e = (_d = this.erc20Contract) === null || _d === void 0 ? void 0 : _d.address) !== null && _e !== void 0 ? _e : '', weiAmount, {
                    gasLimit: 100000,
                }));
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Transaction failed: ${error.message}`);
                }
                else {
                    throw new Error(errors_1.TRANSACTION_FAILED);
                }
            }
        });
    }
    gasslessApproval(approvalAmount, chainId) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.vendor.biconomy) {
                throw new Error(errors_1.INVALID_BICONOMY_KEY);
            }
            const weiAmount = this.vendor.convertToWei(approvalAmount, this.tokenPrecision || 18);
            const abiEncodedApprove = this.vendor.abiEncodeErc20Functions('approve', [
                (_a = this.subscriptionPaymentContract) === null || _a === void 0 ? void 0 : _a.address,
                weiAmount,
            ]);
            const userAddress = yield this.vendor.signer.getAddress();
            const nonce = yield this.getNonceForGaslessERC20(userAddress);
            const signedMessage = yield this.vendor.signedMessageForTx(userAddress, nonce, abiEncodedApprove, ((_b = this.erc20Contract) === null || _b === void 0 ? void 0 : _b.address) || '', chainId);
            const rsv = this.vendor.getSignatureParameters(signedMessage);
            return yield this.sendRawBiconomyERC20Transaction(userAddress, abiEncodedApprove, rsv);
        });
    }
    gaslessUserAction(a, contract, erc20, biconomy) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!biconomy)
                throw new Error(errors_1.INVALID_BICONOMY_KEY);
            const wei = this.vendor.convertToWei(a, this.tokenPrecision || 18);
            const ethersProvider = new ethers_1.ethers.providers.Web3Provider(biconomy);
            const userAddress = yield this.vendor.signer.getAddress();
            const { data } = yield contract.populateTransaction.userDeposit((erc20 === null || erc20 === void 0 ? void 0 : erc20.address) || '', wei);
            const txParams = {
                data,
                to: (contract === null || contract === void 0 ? void 0 : contract.address) || '',
                from: userAddress,
                signatureType: 'EIP712_SIGN',
            };
            return yield ethersProvider.send('eth_sendTransaction', [txParams]);
        });
    }
    gaslessUserDeposit(a, contract, erc20, biconomy) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.gaslessUserAction(a, contract, erc20, biconomy);
        });
    }
    gaslessUserWithdraw(a, contract, erc20, biconomy) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.gaslessUserAction(a, contract, erc20, biconomy);
        });
    }
    gasslessMultiTokenApproval(approvalAmount, tokenName, chainId) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.vendor.biconomy) {
                throw new Error(errors_1.INVALID_BICONOMY_KEY);
            }
            const wei = this.vendor.convertToWei(approvalAmount, this.tokenPrecision || 18);
            const abiEncodedApprove = this.vendor.abiEncodeErc20Functions('approve', [
                (_a = this.subscriptionPaymentContract) === null || _a === void 0 ? void 0 : _a.address,
                wei,
            ]);
            const userAddress = yield this.vendor.signer.getAddress();
            const nonce = yield this.getNonceForGaslessERC20(userAddress);
            const signedMessage = yield this.vendor.signedMessageForMultiTokenTx(userAddress, nonce, abiEncodedApprove, ((_b = this.erc20Contract) === null || _b === void 0 ? void 0 : _b.address) || '', tokenName, chainId);
            const { r, s, v } = this.vendor.getSignatureParameters(signedMessage);
            const tx = yield this.sendRawBiconomyERC20Transaction(userAddress, abiEncodedApprove, { r, s, v });
            return tx;
        });
    }
    sendRawBiconomyERC20Transaction(userAddress, abiEncodedFunction, rsv) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.vendor.biconomy.status === this.vendor.biconomy.READY) {
                const tx = yield ((_a = this.biconomyERC20Contract) === null || _a === void 0 ? void 0 : _a.functions.executeMetaTransaction(userAddress, abiEncodedFunction, rsv.r, rsv.s, rsv.v));
                return tx;
            }
            else {
                return new Promise((resolve, reject) => {
                    this.vendor.biconomy
                        .onEvent(this.vendor.biconomy.READY, () => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        const tx = yield ((_a = this.biconomyERC20Contract) === null || _a === void 0 ? void 0 : _a.functions.executeMetaTransaction(userAddress, abiEncodedFunction, rsv.r, rsv.s, rsv.v));
                        resolve(tx);
                    }))
                        .onEvent(this.vendor.biconomy.ERROR, (error) => {
                        reject(error);
                    });
                });
            }
        });
    }
    getNonceForGaslessERC20(userAddress) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const nonce = yield ((_a = this.erc20Contract) === null || _a === void 0 ? void 0 : _a.functions.getNonce(userAddress));
            return nonce[0].toNumber();
        });
    }
    getUserBalance(userAddress) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const wei = yield ((_a = this.erc20Contract) === null || _a === void 0 ? void 0 : _a.functions.balanceOf(userAddress));
            return this.vendor.convertWeiToEth(wei, (_b = this.tokenPrecision) !== null && _b !== void 0 ? _b : 18);
        });
    }
    getUserTokenBalance(userAddress) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const userData = yield ((_a = this.subscriptionPaymentContract) === null || _a === void 0 ? void 0 : _a.functions.getUserData(userAddress, (_c = (_b = this.erc20Contract) === null || _b === void 0 ? void 0 : _b.address) !== null && _c !== void 0 ? _c : ''));
            return this.vendor.convertWeiToEth(userData[0].balance, (_d = this.tokenPrecision) !== null && _d !== void 0 ? _d : 18);
        });
    }
    userDeposit(amount) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const wei = this.vendor.convertToWei(amount, (_a = this.tokenPrecision) !== null && _a !== void 0 ? _a : 18);
            return (_b = this.subscriptionPaymentContract) === null || _b === void 0 ? void 0 : _b.functions.userDeposit((_d = (_c = this.erc20Contract) === null || _c === void 0 ? void 0 : _c.address) !== null && _d !== void 0 ? _d : '', wei);
        });
    }
    userDepositNative(amount) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const wei = this.vendor.convertToWei(amount, (_a = this.tokenPrecision) !== null && _a !== void 0 ? _a : 18);
            return (_b = this.subscriptionNativePaymentContract) === null || _b === void 0 ? void 0 : _b.functions.userDeposit((_d = (_c = this.erc20Contract) === null || _c === void 0 ? void 0 : _c.address) !== null && _d !== void 0 ? _d : '', wei, {
                value: wei,
            });
        });
    }
    userWithdraw(amount) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const wei = this.vendor.convertToWei(amount, (_a = this.tokenPrecision) !== null && _a !== void 0 ? _a : 18);
            return (_b = this.subscriptionPaymentContract) === null || _b === void 0 ? void 0 : _b.functions.userWithdraw((_d = (_c = this.erc20Contract) === null || _c === void 0 ? void 0 : _c.address) !== null && _d !== void 0 ? _d : '', wei);
        });
    }
    getUsdPricePrecision() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const bn = yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.usdPricePrecision());
            return bn;
        });
    }
    getManagers() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.getManagers());
        });
    }
    getGovernanceAddress() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.governanceAddress());
        });
    }
    getEscrow() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.escrow());
        });
    }
    checkIfDiscountsEnabled() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.discountsEnabled());
        });
    }
    getStakingManagerAddress() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.stakingManager());
        });
    }
    getStakedTokenAddress() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.stakedToken());
        });
    }
    getDiscountSlabs() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const slabs = yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.discountSlabs());
            return this.vendor.parseDiscountSlabs(slabs);
        });
    }
    getDataContract() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const slabs = yield ((_a = this.subscriptionPaymentContract) === null || _a === void 0 ? void 0 : _a.functions.subscriptionData());
            return this.vendor.parseDiscountSlabs(slabs);
        });
    }
    makeCharge(u, d, gp) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const paramArray = [];
            const paramValue = [];
            for (let i = 0; i < d.length; i++) {
                paramArray.push(d[i].param);
                paramValue.push(this.vendor.convertToBN(d[i].value.toString()));
            }
            if (gp) {
                return yield ((_a = this.subscriptionPaymentContract) === null || _a === void 0 ? void 0 : _a.functions.chargeUser(u, paramArray, paramValue, ((_b = this.erc20Contract) === null || _b === void 0 ? void 0 : _b.address) || '', {
                    gasPrice: this.vendor.convertToBN(gp),
                }));
            }
            else {
                return yield ((_c = this.subscriptionPaymentContract) === null || _c === void 0 ? void 0 : _c.functions.chargeUser(u, paramArray, paramValue, ((_d = this.erc20Contract) === null || _d === void 0 ? void 0 : _d.address) || ''));
            }
        });
    }
    makeChargeMantle(u, d, priceUpdateData) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const paramArray = [];
            const paramValue = [];
            for (let i = 0; i < d.length; i++) {
                paramArray.push(d[i].param);
                paramValue.push(this.vendor.convertToBN(d[i].value.toString()));
            }
            return yield ((_a = this.subscriptionMantlePaymentContract) === null || _a === void 0 ? void 0 : _a.functions.chargeUser(u, paramArray, paramValue, ((_b = this.erc20Contract) === null || _b === void 0 ? void 0 : _b.address) || '', priceUpdateData, {
                gasLimit: 100000,
            }));
        });
    }
    addTokens(d) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const symbols = [];
            const tokenAddresses = [];
            const tokenDecimals = [];
            const chainLinkBools = [];
            const priceFeedAddresses = [];
            const priceFeedPrecisions = [];
            for (let i = 0; i < d.length; i++) {
                symbols.push(d[i].symobl);
                tokenAddresses.push(d[i].address);
                priceFeedAddresses.push(d[i].priceFeedAddress);
                chainLinkBools.push(d[i].isChainLinkFeed);
                tokenDecimals.push(this.vendor.convertToBN(d[i].decimals.toString()));
                priceFeedPrecisions.push(this.vendor.convertToBN(d[i].priceFeedPrecision.toString()));
            }
            return yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.addNewTokens(symbols, tokenAddresses, tokenDecimals, chainLinkBools, priceFeedAddresses, priceFeedPrecisions));
        });
    }
    removeTokens(d) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.removeTokens(d));
        });
    }
    changeUsdPrecision(n) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const bn = this.vendor.convertToBN(n.toString());
            return yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.changeUsdPrecision(bn));
        });
    }
    updateParams(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const paramArray = [];
            const paramValue = [];
            for (const param of params) {
                paramArray.push(param.param);
                paramValue.push(this.vendor.convertToBN(param.value.toString()));
            }
            return yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.updateParams(paramArray, paramValue));
        });
    }
    deleteParams(paramsToDelete) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.subscriptionDataContract) === null || _a === void 0 ? void 0 : _a.functions.deleteParams(paramsToDelete));
        });
    }
    getTotalTokenBalance() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const wei = yield ((_a = this.subscriptionPaymentContract) === null || _a === void 0 ? void 0 : _a.functions.getTotalDeposit(((_b = this.erc20Contract) === null || _b === void 0 ? void 0 : _b.address) || ''));
            return this.vendor.convertWeiToEth(wei, (_c = this.tokenPrecision) !== null && _c !== void 0 ? _c : 18);
        });
    }
    getTotalTokenCharges() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const wei = yield ((_a = this.subscriptionPaymentContract) === null || _a === void 0 ? void 0 : _a.functions.getTotalCharges(((_b = this.erc20Contract) === null || _b === void 0 ? void 0 : _b.address) || ''));
            return this.vendor.convertWeiToEth(wei, (_c = this.tokenPrecision) !== null && _c !== void 0 ? _c : 18);
        });
    }
    getTotalTokenWithdraws() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const wei = yield ((_a = this.subscriptionPaymentContract) === null || _a === void 0 ? void 0 : _a.functions.getTotalWithdraws(((_b = this.erc20Contract) === null || _b === void 0 ? void 0 : _b.address) || ''));
            return this.vendor.convertWeiToEth(wei, (_c = this.tokenPrecision) !== null && _c !== void 0 ? _c : 18);
        });
    }
    setTreasury(treasuryAddress) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.subscriptionPaymentContract) === null || _a === void 0 ? void 0 : _a.functions.setTreasury(treasuryAddress));
        });
    }
    setCompany(companyAddress) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.subscriptionPaymentContract) === null || _a === void 0 ? void 0 : _a.functions.setCompany(companyAddress));
        });
    }
    companyWithdraw(amount) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const wei = this.vendor.convertToWei(amount, (_a = this.tokenPrecision) !== null && _a !== void 0 ? _a : 18);
            return yield ((_b = this.subscriptionPaymentContract) === null || _b === void 0 ? void 0 : _b.functions.companyWithdraw(((_c = this.erc20Contract) === null || _c === void 0 ? void 0 : _c.address) || '', wei));
        });
    }
}
exports.default = SubscriptionContract;
