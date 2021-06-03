import { Keyed, Contract, TransactOpts } from '../interfaces';
import { Abi } from '../@types';
export default abstract class implements Keyed {
    [key: string]: any;
    provider: any;
    signer: any;
    abstract contract(address: string, abi: Abi, o?: TransactOpts): Contract;
    abstract convertToBN(amount: string): any;
    abstract convertToWei(amount: string): any;
    abstract convertStringArrayToBigNumberArray(array: Array<string>): Array<any>;
    abstract convertWeiToEth(wei: any): any;
    abstract verifySignedMessage(m: string, s: string): any;
    abstract signMessage(m: string): Promise<string>;
}
