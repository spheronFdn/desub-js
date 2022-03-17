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
    gasslessMultiTokenApproval(a: string, n: string, c: number): Promise<TxResponse>;
    sendRawBiconomyERC20Transaction(u: string, f: string, rsv: any): Promise<any>;
    getApprovalAmount(a: string): Promise<any>;
    getNonceForGaslessERC20(u: string): Promise<number>;
    getUserBalance(a: string): Promise<any>;
    getUsdPricePrecision(): Promise<any>;
    getManagers(): Promise<Array<string>>;
    getGovernanceAddress(): Promise<string>;
    getEscrow(): Promise<string>;
    checkIfDiscountsEnabled(): Promise<boolean>;
    getStakingManagerAddress(): Promise<string>;
    getStakedTokenAddress(): Promise<string>;
    getDiscountSlabs(): Promise<any>;
    getDataContract(): Promise<any>;
    chargeUser(u: string, d: Array<SubscriptionParameters>, t: string): Promise<TxResponse>;
    addTokens(d: Array<TokenData>): Promise<TxResponse>;
    removeTokens(d: Array<string>): Promise<TxResponse>;
    changeUsdPrecision(n: number): Promise<TxResponse>;
    upadteParams(p: Array<SubscriptionParameters>): Promise<TxResponse>;
    deleteParams(d: Array<string>): Promise<TxResponse>;
}
