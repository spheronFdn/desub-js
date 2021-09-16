import { Vendor } from '.'
import Deployed from './abstracts/deployed'
import { PAYMENT_ABI, ERC20_ABI, SUBSCRIPTION_PAYMENT_ABI, SUBSCRIPTION_DATA_ABI } from './constants'
import { INVALID_BICONOMY_KEY } from './errors'
import { SubscriptionParameters, TxResponse } from './interfaces'

export default class extends Deployed {
  /**
   * @param vendor - Instance of a Vendor class
   */
  constructor(vendor: Vendor) {
    super(vendor, PAYMENT_ABI, ERC20_ABI, SUBSCRIPTION_PAYMENT_ABI, SUBSCRIPTION_DATA_ABI)
  }
  /**
   * @remarks
   * This method can be used to updated address of underlying token.
   *
   * @param a - address of token to use for charging users
   */
  async updateUnderlyingToken(a: string): Promise<TxResponse> {
    return await this.subscriptionDataContract?.functions.updateUnderlyingToken(a)
  }
  /**
   * @remarks
   * This method can be used to updated address of vault/escrow account
   *
   * @param a - address of escrow contract(vault)
   */
  async updateEscrow(a: string): Promise<TxResponse> {
    return await this.subscriptionDataContract?.functions.updateEscrow(a)
  }
  /**
   * @remarks
   * This method can be used to updated address of oracle price feed.
   *
   * @param a - address of escrow contract(vault)
   */
  async updateFeederAddress(a: string): Promise<TxResponse> {
    return await this.subscriptionDataContract?.functions.updateFeederAddress(a)
  }
  /**
   * @remarks
   * This method can be used to updated address of staked token
   *
   * @param a - address of escrow contract(vault)
   */
  async updateStakedToken(a: string): Promise<TxResponse> {
    return await this.subscriptionDataContract?.functions.updateStakedToken(a)
  }
  /**
   * @remarks
   * This method can be called by owner to change the token address if for some reason token in changed
   *
   * @param a - address of escrow ArGo token, if for some reason new one needs to be passed
   */
  async updateToken(a: string): Promise<TxResponse> {
    return await this.subscriptionDataContract?.functions.updateUnderlyingToken(a)
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
    return await this.subscriptionDataContract?.functions.updateDiscountSlabs(discountSlabs, percents)
  }
  /**
   * @remarks
   * This method can only be called by owner, to give enable discount.
   *
   * @param h - address of staking manager.
   */
  async enableDiscounts(h: string): Promise<TxResponse> {
    return await this.subscriptionDataContract?.functions.enableDiscounts(h)
  }

  /**
   * @remarks
   * This method can only be called by owner, to give disable discount.
   *
   */
  async disableDiscounts(): Promise<TxResponse> {
    return await this.subscriptionDataContract?.functions.disableDiscounts()
  }

  /**
   * @remarks
   * This method can only be called by owner, to update governance contract address.
   *
   * @param h - address of governance contract.
   */
  async setGovernanceAddress(h: string): Promise<TxResponse> {
    return await this.subscriptionDataContract?.functions.setGovernanceAddress(h)
  }

  /**
   * @remarks
   * This method can only be called by owner, to set new  owners.
   *
   * @param h - array of addresses of new oweners.
   */
  async setManagers(h: Array<string>): Promise<TxResponse> {
    return await this.subscriptionDataContract?.functions.setManagers(h)
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
    return await this.erc20Contract?.functions.approve(this.subscriptionPaymentContract?.address, wei)
  }
  /**
   * @remarks
   * Update approval for ArGo token
   * Dont use this function without frontend
   *
   * @param a - new approval amount.
   * @param c - chain Id
   */
  async gasslessApproval(a: string, c: number): Promise<TxResponse> {
    if (!this.vendor.biconomy) throw new Error(INVALID_BICONOMY_KEY)

    const wei = this.vendor.convertToWei(a)
    const abiEncodedApprove = this.vendor.abiEncodeErc20Functions('approve', [
      this.subscriptionPaymentContract?.address,
      wei,
    ])
    const userAddress = await this.vendor.signer.getAddress()
    const nonce = await this.getNonceForGaslessERC20(userAddress)
    const signedMessage = await this.vendor.signedMessageForTx(
      userAddress,
      nonce,
      abiEncodedApprove,
      this.erc20Contract!.address,
      c,
    )
    const rsv = this.vendor.getSignatureParameters(signedMessage)
    return await this.sendRawBiconomyERC20Transaction(userAddress, abiEncodedApprove, rsv)
  }
  /**
   *
   * @remarks
   * returns abi enocoded erc20 function
   * @param string - user address
   * @param string - abi encoded function
   * @param SignatureParams - rsv values
   */
  async sendRawBiconomyERC20Transaction(u: string, f: string, rsv: any): Promise<any> {
    if (this.vendor.biconomy.status === this.vendor.biconomy.READY) {
      const tx = await this.biconomyERC20Contract?.functions.executeMetaTransaction(u, f, rsv.r, rsv.s, rsv.v)
      return tx
    } else {
      return new Promise((resolve, reject) => {
        this.vendor.biconomy
          .onEvent(this.vendor.biconomy.READY, async () => {
            const tx = await this.biconomyERC20Contract?.functions.executeMetaTransaction(u, f, rsv.r, rsv.s, rsv.v)
            resolve(tx)
          })
          .onEvent(this.vendor.biconomy.ERROR, (error: string) => {
            console.log(error)
            reject(error)
          })
      })
    }
  }

  /**
   * @remarks
   * Get given Allowance amount.
   *
   */
  async getApprovalAmount(a: string): Promise<any> {
    const wei = await this.erc20Contract?.functions.allowance(a, this.subscriptionPaymentContract?.address)
    return this.vendor.convertWeiToEth(wei)
  }

  /**
   * @remarks
   * Get nonce for gassless transaction on erc20
   *
   * @param u user address
   */
  async getNonceForGaslessERC20(u: string): Promise<number> {
    const nonce = (await this.erc20Contract?.functions.getNonce(u))[0].toNumber()
    return nonce
  }

  /**
   * @remarks
   * Get given Allowance amount.
   *
   */
  async getUserBalance(a: string): Promise<any> {
    const wei = await this.erc20Contract?.functions.balanceOf(a)
    return this.vendor.convertWeiToEth(wei)
  }

  /**
   * @remarks
   * Get owners list.
   *
   */
  async getManagers(): Promise<Array<string>> {
    return await this.subscriptionDataContract?.functions.getManagers()
  }

  /**
   * @remarks
   * Get govornance address.
   *
   */
  async getGovernanceAddress(): Promise<string> {
    return await this.subscriptionDataContract?.functions.governanceAddress()
  }

  /**
   * @remarks
   * Get underlying token address (Argo).
   *
   */
  async getToken(): Promise<string> {
    return await this.subscriptionDataContract?.functions.underlying()
  }

  /**
   * @remarks
   * Get escrow address.
   *
   */
  async getEscrow(): Promise<string> {
    return await this.subscriptionDataContract?.functions.escrow()
  }

  /**
   * @remarks
   * Get discount status.
   *
   */
  async checkIfDiscountsEnabled(): Promise<boolean> {
    return await this.subscriptionDataContract?.functions.discountsEnabled()
  }

  /**
   * @remarks
   * Get staking manager  address.
   *
   */
  async getStakingManagerAddress(): Promise<string> {
    return await this.subscriptionDataContract?.functions.stakingManager()
  }
  /**
   * @remarks
   * Get staking manager  address.
   *
   */
  async getStakedTokenAddress(): Promise<string> {
    return await this.subscriptionDataContract?.functions.stakedToken()
  }
  /**
   * @remarks
   * Get discount slabs.
   *
   */
  async getDiscountSlabs(): Promise<any> {
    const slabs = await this.subscriptionDataContract?.functions.discountSlabs()
    return this.vendor.parseDiscountSlabs(slabs)
  }

  /**
   * @remarks
   * this method is used when we want to charge user for the subscrption he will be buying.
   * @param u - address of user
   * @param d - array of parameters and their values
   */
  async chargeUser(u: string, d: Array<SubscriptionParameters>): Promise<TxResponse> {
    const paramArray: Array<string> = []
    const paramValue: Array<number> = []
    for (let i = 0; i < d.length; i++) {
      paramArray.push(d[i].param)
      paramValue.push(this.vendor.convertToBN(d[i].value.toString()))
    }
    return await this.subscriptionPaymentContract?.functions.chargeUser(u, paramArray, paramValue)
  }
  /**
   * @remarks
   * This method is used when we want to update contract parameters
   * @param p - array of parameters and their values

   */
  async upadteParams(p: Array<SubscriptionParameters>): Promise<TxResponse> {
    const paramArray: Array<string> = []
    const paramValue: Array<number> = []
    for (let i = 0; i < p.length; i++) {
      paramArray.push(p[i].param)
      paramValue.push(this.vendor.convertToBN(p[i].value.toString()))
    }
    return await this.subscriptionDataContract?.functions.updateParams(paramArray, paramValue)
  }
  /**
   * @remarks
   * This method is when we want to delete some parameter
   * @param d - array of params to delete
   */
  async deleteParams(d: Array<string>): Promise<TxResponse> {
    return await this.subscriptionDataContract?.functions.deleteParams(d)
  }
}
