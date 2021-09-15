import { Vendor } from '.';
import Deployed from './abstracts/deployed';
import { SubscriptionParameters, TxResponse } from './interfaces';
export default class extends Deployed {
    constructor(vendor: Vendor, coinMarketCapKey?: string);
    chargeUser(u: string, d: Array<SubscriptionParameters>): Promise<TxResponse>;
}
