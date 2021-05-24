import Deployed from './abstracts/deployed';
import Vendor from './abstracts/vendor';
import { TxResponse } from './interfaces';
export default class extends Deployed {
    key?: string;
    constructor(vendor: Vendor, key?: string);
    paymentWithFee(u: string, b: string, d: string, providerQuote: any, providerCharged: any, provider: string): Promise<TxResponse>;
    paymentWithoutFee(a: string, b: string): Promise<TxResponse>;
    updateEscrow(a: string): Promise<TxResponse>;
    updateToken(a: string): Promise<TxResponse>;
    updateDiscountSlabs(d: Array<string>, p: Array<string>): Promise<TxResponse>;
    changeBuildTimeRate(p: string): Promise<TxResponse>;
    enableDiscounts(h: string): Promise<TxResponse>;
    disableDiscounts(): Promise<TxResponse>;
    setGovernanceAddress(h: string): Promise<TxResponse>;
    setManagers(h: Array<string>): Promise<TxResponse>;
    setNewApprovals(a: string): Promise<TxResponse>;
    getApprovalAmount(a: string): Promise<any>;
    getUserBalance(a: string): Promise<any>;
    getManagers(): Promise<Array<string>>;
    getGovernanceAddress(): Promise<string>;
    getToken(): Promise<string>;
    getEscrow(): Promise<string>;
    checkIfDiscountsEnabled(): Promise<boolean>;
    getStakingManagerAddress(): Promise<string>;
    getDiscountSlabs(): Promise<any>;
    getArweaveConvertedUsd(a: string): Promise<number>;
    getArweaveQuote(): Promise<number>;
}
