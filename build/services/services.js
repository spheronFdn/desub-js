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
const services_1 = __importDefault(require("../abstracts/services"));
const axios_1 = __importDefault(require("axios"));
const price_feed_1 = require("../constants/price-feed");
const errors_1 = require("../errors");
class default_1 extends services_1.default {
    tokenToUSD(a, t, k) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const options = {
                    headers: {
                        Accept: 'application/json',
                        'X-CMC_PRO_API_KEY': k,
                    },
                };
                const response = yield axios_1.default.get(price_feed_1.baseUrl + '/cryptocurrency/quotes/latest?id=' + t, options);
                const qoute = response.data.data[t].quote.USD.price;
                return qoute * parseFloat(a);
            }
            catch (error) {
                if (error.response.status == 401) {
                    throw new Error(errors_1.INVALID_API_KEY);
                }
                return 0;
            }
        });
    }
    tokenQuote(t, k) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const options = {
                    headers: {
                        Accept: 'application/json',
                        'X-CMC_PRO_API_KEY': k,
                    },
                };
                const response = yield axios_1.default.get(price_feed_1.baseUrl + '/cryptocurrency/quotes/latest?id=' + t, options);
                const qoute = response.data.data[t].quote.USD.price;
                return qoute;
            }
            catch (error) {
                if (error.response.status == 401) {
                    throw new Error(errors_1.INVALID_API_KEY);
                }
                return 0;
            }
        });
    }
}
exports.default = default_1;
