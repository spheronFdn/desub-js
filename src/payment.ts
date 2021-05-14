import { ERC20_ABI, PAYMENT_ABI } from './constants'
import Deployed from './abstracts/deployed'
import Vendor from './abstracts/vendor'
import { TxResponse } from './interfaces'

export default class extends Deployed {
  /**
   * @param vendor - Instance of a Vendor class
   */
  constructor(vendor: Vendor) {
    super(vendor, PAYMENT_ABI, ERC20_ABI)
  }

  /**
   * @remarks
   * This method is when we do not want to charge user with the fee for deployment, but only for build time.
   *
   * @param b - built time (in sec) after deployment completed
   * @param a - network uploading amount (in ArGo Token after all the Conversions)
   */
  async paymentWithFee(b: string, a: string): Promise<TxResponse> {
    const wei = this.vendor.convertToWei(a)
    const buildTime = this.vendor.convertToBN(b)
    return await this.paymentsContract?.functions.chargeUserWithFee(buildTime, wei)
  }
  /**
   * @remarks
   * This method is when we want to charge user for the fee for deployment as well as for the build time.
   *
   * @param b - built time (in sec) after deployment completed
   */
  async paymentWithoutFee(b: string): Promise<TxResponse> {
    const buildTime = this.vendor.convertToBN(b)
    return await this.paymentsContract?.functions.chargeUser(buildTime)
  }
  /**
   * @remarks
   * This method can be used to updated address of vault/escrow account
   *
   * @param a - address of escrow contract(vault)
   */
  async updateEscrowAddress(a: string): Promise<TxResponse> {
    return await this.paymentsContract?.functions.updateEscrowAddress(a)
  }
  /**
   * @remarks
   * This method can be called by owner to change the token address if for some reason token in changed
   *
   * @param a - address of escrow ArGo token, if for some reason new one needs to be passed
   */
  async updateTokenAddress(a: string): Promise<TxResponse> {
    return await this.paymentsContract?.functions.updateTokenAddress(a)
  }

  /**
   * @remarks
   * This method can only be called by governance account and can be called to updated discount slabs.
   *
   * @param d - array of prices for discount slabs
   * @param p - array of percent of each slab
   */
  async updateDiscountSlabs(d: Array<string>, p: Array<string>): Promise<TxResponse> {
    const discountSlabs = this.vendor.convertStringArrayToBigNumberArray(d)
    const percents = this.vendor.convertStringArrayToBigNumberArray(p)
    return await this.paymentsContract?.functions.updateDiscountSlabs(discountSlabs, percents)
  }

  /**
   * @remarks
   * This method can only be called by governance to change price we charge per microsecond for build.
   *
   * @param p - updated price per microsecond.

   */
  async changePricePerMicroSecond(p: string): Promise<TxResponse> {
    const wei = this.vendor.convertToWei(p)
    return await this.paymentsContract?.functions.changePricePerMicroSecond(wei)
  }
  /**
   * @remarks
   * This method can only be called by owner, to give enable discount.
   *
   * @param h - address of staking manager.
   */
  async enableDiscounts(h: string): Promise<TxResponse> {
    return await this.paymentsContract?.functions.enableDiscounts(h)
  }

  /**
   * @remarks
   * This method can only be called by owner, to give disable discount.
   *
   */
  async disableDiscounts(): Promise<TxResponse> {
    return await this.paymentsContract?.functions.disableDiscounts()
  }

  /**
   * @remarks
   * This method can only be called by owner, to update governance contract address.
   *
   * @param h - address of governance contract.
   */
  async setGovernanceAddress(h: string): Promise<TxResponse> {
    return await this.paymentsContract?.functions.setGovernanceAddress(h)
  }

  /**
   * @remarks
   * This method can only be called by owner, to set new  owners.
   *
   * @param h - array of addresses of new oweners.
   */
  async setOwners(h: Array<string>): Promise<TxResponse> {
    return await this.paymentsContract?.functions.setOwners(h)
  }

  /**
   * @remarks
   * Update approval for ArGo token
   * Dont use this function without frontend
   *
   * @param a - new approval amount.
   */
  async setNewApprovals(a: string): Promise<TxResponse> {
    const wei = this.vendor.convertToWei(a)
    return await this.erc20Contract?.functions.approve(this.paymentsContract?.address, wei)
  }

  /**
   * @remarks
   * Get given Allowance amount.
   *
   */
  async getApprovalAmount(a: string): Promise<any> {
    const wei = (await this.erc20Contract?.functions.allowance(a, this.paymentsContract?.address))[0]
    return this.vendor.convertWeiToEth(wei)
  }

  /**
   * @remarks
   * Get given Allowance amount.
   *
   */
   async getUserBalance(a: string): Promise<any> {
    const wei = (await this.erc20Contract?.functions.balanceOf(a))[0]
    return this.vendor.convertWeiToEth(wei)
  }

  /**
   * @remarks
   * Get owners list.
   *
   */
  async getOwners(): Promise<Array<string>> {
    return (await this.paymentsContract?.functions.getOwners())[0]
  }

  /**
   * @remarks
   * Get govornance address.
   *
   */
  async getGovernanceAddress(): Promise<string> {
    return (await this.paymentsContract?.functions.governanceAddress())[0]
  }

  /**
   * @remarks
   * Get token address.
   *
   */
  async getTokenAddress(): Promise<string> {
    return (await this.paymentsContract?.functions.token())[0]
  }

  /**
   * @remarks
   * Get escrow address.
   *
   */
  async getEscrowAddress(): Promise<string> {
    return (await this.paymentsContract?.functions.escrowAddress())[0]
  }

  /**
   * @remarks
   * Get discount status.
   *
   */
  async checkIfDiscountsEnabled(): Promise<boolean> {
    return (await this.paymentsContract?.functions.discountsEnabled())[0]
  }

  /**
   * @remarks
   * Get staking manager  address.
   *
   */
  async getStakingManagerAddress(): Promise<string> {
    return (await this.paymentsContract?.functions.stakingManager())[0]
  }
  /**
   * @remarks
   * Get discount slabs.
   *
   */
  async getDiscountSlabs(): Promise<any> {
    const slabs = (await this.paymentsContract?.functions.discountSlabs())[0]
    return this.vendor.parseDiscountSlabs(slabs)
  }
}
