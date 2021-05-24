import { Keyed, Contract, TransactOpts } from '../interfaces';
import Vendor from './vendor';
import { Abi } from '../@types';
import Services from '../services/services';
export default abstract class implements Keyed {
    [key: string]: any;
    paymentsAbi: Abi;
    erc20Abi: Abi;
    vendor: Vendor;
    paymentsContract?: Contract;
    erc20Contract?: Contract;
    services: Services;
    protected constructor(v: Vendor, a: Abi, e: Abi);
    at(a: string, e: string, o?: TransactOpts): boolean;
}
