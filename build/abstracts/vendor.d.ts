import { Keyed, Contract, TransactOpts, SignatureParams } from '../interfaces';
import { Abi } from '../@types';
export default abstract class implements Keyed {
    [key: string]: any;
    provider: any;
    signer: any;
    biconomy: any;
    abstract contract(address: string, abi: Abi, o?: TransactOpts): Contract;
    abstract convertToBN(amount: string): any;
    abstract convertToWei(amount: string): any;
    abstract convertStringArrayToBigNumberArray(array: Array<string>): Array<any>;
    abstract convertWeiToEth(wei: any): any;
    abstract verifySignedMessage(m: string, s: string): any;
    abstract signMessage(m: string): Promise<string>;
    abstract getSignatureParameters(signature: string): SignatureParams;
    abstract abiEncodeErc20Functions(f: string, p: Array<any>): string;
    abstract signedMessageForTx(u: string, n: number, f: string, a: string, c: number): Promise<string>;
}
