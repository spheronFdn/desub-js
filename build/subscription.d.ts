import { Vendor } from '.';
import Deployed from './abstracts/deployed';
import { SubscriptionParameters, TokenData, TxResponse } from './interfaces';
export default class extends Deployed {
    constructor(vendor: Vendor);
    updateEscrow(a: string): Promise<TxResponse>;
    updateStakedToken(a: string): Promise<TxResponse>;
    updateDiscountSlabs(d: Array<string>, p: Array<string>): Promise<TxResponse>;
    enableDiscounts(h: string): Promise<TxResponse>;
    disableDiscounts(): Promise<TxResponse>;
    setGovernanceAddress(h: string): Promise<TxResponse>;
    setDataContract(h: string): Promise<TxResponse>;
    setManagers(h: Array<string>): Promise<TxResponse>;
    setNewApprovals(a: string): Promise<TxResponse>;
    gasslessApproval(a: string, c: number): Promise<TxResponse>;
    gasLessUserDeposit(a: string, k: string, u: string): Promise<TxResponse>;
    gasLessUserWithdraw(a: string, k: string, u: string): Promise<TxResponse>;
    gasslessMultiTokenApproval(a: string, n: string, c: number): Promise<TxResponse>;
    sendRawBiconomyERC20Transaction(u: string, f: string, rsv: any): Promise<any>;
    getNonceForGaslessERC20(u: string): Promise<number>;
    getUserBalance(a: string): Promise<any>;
    getUserTokenBalance(u: string): Promise<any>;
    userDeposit(a: string): Promise<TxResponse>;
    userWithdraw(a: string): Promise<TxResponse>;
    getUsdPricePrecision(): Promise<any>;
    getManagers(): Promise<Array<string>>;
    getGovernanceAddress(): Promise<string>;
    getEscrow(): Promise<string>;
    checkIfDiscountsEnabled(): Promise<boolean>;
    getStakingManagerAddress(): Promise<string>;
    getStakedTokenAddress(): Promise<string>;
    getDiscountSlabs(): Promise<any>;
    getDataContract(): Promise<any>;
    makeCharge(u: string, d: Array<SubscriptionParameters>): Promise<TxResponse>;
    addTokens(d: Array<TokenData>): Promise<TxResponse>;
    removeTokens(d: Array<string>): Promise<TxResponse>;
    changeUsdPrecision(n: number): Promise<TxResponse>;
    upadteParams(p: Array<SubscriptionParameters>): Promise<TxResponse>;
    deleteParams(d: Array<string>): Promise<TxResponse>;
    getTotalTokenBalance(): Promise<any>;
    getTotalTokenCharges(): Promise<any>;
    getTotalTokenWithdraws(): Promise<any>;
    setTreasury(t: string): Promise<TxResponse>;
    setCompany(c: string): Promise<TxResponse>;
    companyWithdraw(a: string): Promise<TxResponse>;
}
export declare type ExternalProvider = {
    isMetaMask?: boolean;
    isStatus?: boolean;
    host?: string;
    path?: string;
    sendAsync?: (request: {
        method: string;
        params?: Array<any>;
    }, callback: (error: any, response: any) => void) => void;
    send?: (request: {
        method: string;
        params?: Array<any>;
    }, callback: (error: any, response: any) => void) => void;
    request?: (request: {
        method: string;
        params?: Array<any>;
    }) => Promise<any>;
};
