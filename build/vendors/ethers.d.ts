import { Contract } from '../interfaces';
import Vendor from '../abstracts/vendor';
import { Signer } from '@ethersproject/abstract-signer';
import { Provider } from '@ethersproject/providers';
import { Abi } from '../@types';
import { BigNumber } from 'ethers';
import { Discount } from '../interfaces/discount';
export default class extends Vendor {
    constructor(p: Provider, s?: Signer);
    contract(address: string, abi: Abi): Contract;
    convertStringArrayToBigNumberArray(array: Array<string>): Array<any>;
    parseDiscountSlabs(data: Array<any>): Array<Discount>;
    convertToBN(amount: string): any;
    convertToWei(amount: string): BigNumber;
    convertWeiToEth(wei: any): number;
    signMessage(m: string): Promise<string>;
    verifySignedMessage: (m: string, s: string) => any;
    private requireSignerOrProvider;
    private requireSigner;
}
