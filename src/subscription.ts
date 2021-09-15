import { values } from 'lodash'
import { Vendor } from '.'
import Deployed from './abstracts/deployed'
import { PAYMENT_ABI, ERC20_ABI, SUBSCRIPTION_PAYMENT_ABI, SUBSCRIPTION_DATA_ABI } from './constants'
import { SubscriptionParameters, TxResponse } from './interfaces'

export default class extends Deployed {
  /**
   * @param vendor - Instance of a Vendor class
   */
  constructor(vendor: Vendor, coinMarketCapKey?: string) {
    super(vendor, PAYMENT_ABI, ERC20_ABI, SUBSCRIPTION_PAYMENT_ABI, SUBSCRIPTION_DATA_ABI)
    this.coinMarketCapKey = coinMarketCapKey
  }
  /**
   * @remarks
   * This method is when we do not want to charge user with the fee for deployment, but only for build time.
   * @param u - address of user
   * @param b - built time (in sec) after deployment completed
   * @param d - depployment cost by provider  USD
   * @param providerQuote price of storage provider's token
   * @param providerCharged tokens of storage provider charged for deploying
   * @param  provider name of storage provider
   */
  async chargeUser(u: string, d: Array<SubscriptionParameters>): Promise<TxResponse> {
    const paramArray: Array<string> = []
    const paramValue: Array<number> = []
    for (let i = 0; i < d.length; i++) {
      paramArray.push(d[i].param)
      paramValue.push(this.vendor.convertToBN(d[i].value.toString()))
    }
    console.log(paramValue)
    console.log(paramArray)
    return await this.subscriptionPaymentContract?.functions.chargeUser(u, paramArray, paramValue)
  }
}
