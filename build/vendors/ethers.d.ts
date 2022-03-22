import { Contract } from '../interfaces';
import Vendor from '../abstracts/vendor';
import { Signer } from '@ethersproject/abstract-signer';
import { Provider } from '@ethersproject/providers';
import { Abi } from '../@types';
import { BigNumber } from 'ethers';
import { Discount } from '../interfaces/discount';
import { SignatureParams } from '../interfaces';
export default class extends Vendor {
    constructor(p: Provider, s?: Signer, b?: string);
    contract(address: string, abi: Abi, p?: any): Contract;
    convertStringArrayToBigNumberArray(array: Array<string>): Array<any>;
    parseDiscountSlabs(data: Array<any>): Array<Discount>;
    convertToBN(amount: string): any;
    convertToWei(amount: string, precision: number): BigNumber;
    convertWeiToEth(wei: any, precision: number): number;
    signMessage(m: string): Promise<string>;
    verifySignedMessage(m: string, s: string): string;
    abiEncodeErc20Functions(f: string, p: Array<any>): string;
    signedMessageForTx(u: string, n: number, f: string, a: string, c: number): Promise<string>;
    signedMessageForMultiTokenTx(u: string, n: number, f: string, tokenAddress: string, tokenName: string, c: number): Promise<string>;
    getSignatureParameters(signature: string): SignatureParams;
    private requireSignerOrProvider;
    private requireSigner;
}
