import { PAYMENT_ABI } from './constants'
import Deployed from './abstracts/deployed'
import Vendor from './abstracts/vendor'
import { TxResponse } from './interfaces'

export default class extends Deployed {
  /**
   * @param vendor - Instance of a Vendor class
   */
  constructor(vendor: Vendor) {
    super(vendor, PAYMENT_ABI)
  }

  /**
   * @remarks
   * This method only care about the order and take care of signing the order with specific vendor's signer.
   *
   * @param b - built time (in sec) after deployment completed
   * @param a - network uploading amount (in underlying token)
   */
  async payment(b: string, a: string): Promise<TxResponse> {
    const co = this.vendor.convertToBN('1000000')
    return await this.contract?.functions.payArgo(co, a)
  }
}
