"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRANSACTION_FAILED = exports.INVALID_BICONOMY_KEY = exports.INVALID_API_KEY = exports.API_KEY_REQUIRED = exports.PROVIDER_REQUIRED = exports.OWNER_REQUIRED = void 0;
__exportStar(require("./vendor"), exports);
exports.OWNER_REQUIRED = 'owner required';
exports.PROVIDER_REQUIRED = 'provider required';
exports.API_KEY_REQUIRED = 'Api key required';
exports.INVALID_API_KEY = 'Api key is invalid';
exports.INVALID_BICONOMY_KEY = 'Biconomy key is invalid';
exports.TRANSACTION_FAILED = 'Transaction failed';
