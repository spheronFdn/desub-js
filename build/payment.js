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
const constants_1 = require("./constants");
const deployed_1 = __importDefault(require("./abstracts/deployed"));
const errors_1 = require("./errors");
class default_1 extends deployed_1.default {
    constructor(vendor, key) {
        super(vendor, constants_1.PAYMENT_ABI, constants_1.ERC20_ABI);
        this.key = key;
    }
    paymentWithFee(u, b, d, providerQuote, providerCharged, provider) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const wei = this.vendor.convertToWei(d);
            const buildTime = this.vendor.convertToBN(b);
            const quote = this.vendor.convertToWei(providerQuote);
            const charge = this.vendor.convertToWei(providerCharged);
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.chargeWithProvider(u, buildTime, wei, quote, charge, provider));
        });
    }
    paymentWithoutFee(a, b) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const buildTime = this.vendor.convertToBN(b);
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.charge(a, buildTime));
        });
    }
    updateEscrow(a) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.updateEscrow(a));
        });
    }
    updateToken(a) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.updateToken(a));
        });
    }
    updateDiscountSlabs(d, p) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const discountSlabs = this.vendor.convertStringArrayToBigNumberArray(d);
            const percents = this.vendor.convertStringArrayToBigNumberArray(p);
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.updateDiscountSlabs(discountSlabs, percents));
        });
    }
    changeBuildTimeRate(p) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const wei = this.vendor.convertToWei(p);
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.changeBuildTimeRate(wei));
        });
    }
    enableDiscounts(h) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.enableDiscounts(h));
        });
    }
    disableDiscounts() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.disableDiscounts());
        });
    }
    setGovernanceAddress(h) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.setGovernanceAddress(h));
        });
    }
    setManagers(h) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.setManagers(h));
        });
    }
    setNewApprovals(a) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const wei = this.vendor.convertToWei(a);
            return yield ((_a = this.erc20Contract) === null || _a === void 0 ? void 0 : _a.functions.approve((_b = this.paymentsContract) === null || _b === void 0 ? void 0 : _b.address, wei));
        });
    }
    getApprovalAmount(a) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const wei = yield ((_a = this.erc20Contract) === null || _a === void 0 ? void 0 : _a.functions.allowance(a, (_b = this.paymentsContract) === null || _b === void 0 ? void 0 : _b.address));
            return this.vendor.convertWeiToEth(wei);
        });
    }
    getUserBalance(a) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const wei = yield ((_a = this.erc20Contract) === null || _a === void 0 ? void 0 : _a.functions.balanceOf(a));
            return this.vendor.convertWeiToEth(wei);
        });
    }
    getManagers() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.getManagers());
        });
    }
    getGovernanceAddress() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.governanceAddress());
        });
    }
    getToken() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.underlying());
        });
    }
    getEscrow() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.escrow());
        });
    }
    checkIfDiscountsEnabled() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.discountsEnabled());
        });
    }
    getStakingManagerAddress() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.stakingManager());
        });
    }
    getDiscountSlabs() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const slabs = yield ((_a = this.paymentsContract) === null || _a === void 0 ? void 0 : _a.functions.discountSlabs());
            return this.vendor.parseDiscountSlabs(slabs);
        });
    }
    getArweaveConvertedUsd(a) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.key)
                throw new Error(errors_1.API_KEY_REQUIRED);
            const qoute = yield this.services.arweaveToUsd(a, this.key);
            return qoute;
        });
    }
    getArweaveQuote() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.key)
                throw new Error(errors_1.API_KEY_REQUIRED);
            const qoute = yield this.services.arweaveQuote(this.key);
            return qoute;
        });
    }
}
exports.default = default_1;
