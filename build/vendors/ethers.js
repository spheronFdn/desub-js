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
const errors_1 = require("../errors");
const vendor_1 = __importDefault(require("../abstracts/vendor"));
const contracts_1 = require("@ethersproject/contracts");
const ethers_1 = require("ethers");
const discount_data_1 = require("./discount-data");
const mexa_1 = require("@biconomy/mexa");
const __1 = require("..");
const payment_1 = require("../constants/payment");
class default_1 extends vendor_1.default {
    constructor(p, s, b) {
        super();
        this.provider = p;
        this.signer = s;
        if (b) {
            this.biconomy = new mexa_1.Biconomy(p, { apiKey: b, debug: false });
        }
    }
    contract(address, abi, p) {
        this.requireSignerOrProvider();
        if (p) {
            return new contracts_1.Contract(address, abi, p);
        }
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
    convertToWei(amount, precision) {
        return __1.helpers.ethers.convertToWei(amount, precision);
    }
    convertWeiToEth(wei, precision) {
        return __1.helpers.ethers.convertWeiToEth(wei, precision);
    }
    signMessage(m) {
        return __awaiter(this, void 0, void 0, function* () {
            this.requireSigner();
            const signedMessage = yield this.signer.signMessage(m);
            return signedMessage;
        });
    }
    verifySignedMessage(m, s) {
        const address = ethers_1.ethers.utils.verifyMessage(m, s);
        return address;
    }
    abiEncodeErc20Functions(f, p) {
        const iface = new ethers_1.ethers.utils.Interface(payment_1.ERC20Interface);
        const data = iface.encodeFunctionData(f, p);
        return data;
    }
    signedMessageForTx(u, n, f, a, c) {
        return __awaiter(this, void 0, void 0, function* () {
            const domainData = {
                name: 'Test ArGo',
                version: '1',
                verifyingContract: a,
                salt: '0x' + c.toString(16).padStart(64, '0'),
            };
            const message = {
                nonce: n,
                from: u,
                functionSignature: f,
            };
            const types = {
                MetaTransaction: payment_1.metaTransactionType,
            };
            const signature = yield this.signer._signTypedData(domainData, types, message);
            return signature;
        });
    }
    getSignatureParameters(signature) {
        if (!ethers_1.ethers.utils.isHexString(signature)) {
            throw new Error('Given value "'.concat(signature, '" is not a valid hex string.'));
        }
        const r = signature.slice(0, 66);
        const s = '0x'.concat(signature.slice(66, 130));
        const v = '0x'.concat(signature.slice(130, 132));
        let _v = ethers_1.BigNumber.from(v).toNumber();
        if (![27, 28].includes(_v))
            _v += 27;
        return {
            r: r,
            s: s,
            v: _v,
        };
    }
    requireSignerOrProvider() {
        if (!this.signer && !this.provider)
            throw new ReferenceError(errors_1.SIGNER_OR_PROVIDER_REQUIRED);
    }
    requireSigner() {
        if (!this.signer)
            throw new ReferenceError(errors_1.SIGNER_REQUIRED);
    }
}
exports.default = default_1;
