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
    biconomyERC20Contract?: Contract;
    services: Services;
    subscriptionPaymentAbi: Abi;
    subscriptionPaymentContract?: Contract;
    subscriptionDataAbi: Abi;
    subscriptionDataContract?: Contract;
    tokenPrecision?: number;
    protected constructor(v: Vendor, a: Abi, e: Abi, subscriptionPayments: Abi, subscriptionData: Abi);
    at(a: string, e: string, o?: TransactOpts): Promise<boolean>;
    subscriptionAt(subscriptionPayments: string, subscriptionData: string, e: string, p: number, o?: TransactOpts): Promise<boolean>;
}
