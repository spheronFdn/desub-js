import { ERC20_ABI, PAYMENT_ABI } from './constants'
import Deployed from './abstracts/deployed'
import Vendor from './abstracts/vendor'
import { TxResponse } from './interfaces'
import { API_KEY_REQUIRED, INVALID_BICONOMY_KEY } from './errors'

export default class extends Deployed {
  coinMarketCapKey?: string
  /**
   * @param vendor - Instance of a Vendor class
   */
  constructor(vendor: Vendor, coinMarketCapKey?: string) {
    super(vendor, PAYMENT_ABI, ERC20_ABI)
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
  async paymentWithFee(
    u: string,
    b: string,
    d: string,
    providerQuote: any,
    providerCharged: any,
    provider: string,
  ): Promise<TxResponse> {
    const wei = this.vendor.convertToWei(d)
    const buildTime = this.vendor.convertToBN(b)
    const quote = this.vendor.convertToWei(providerQuote)
    const charge = this.vendor.convertToWei(providerCharged)
    return await this.paymentsContract?.functions.chargeWithProvider(u, buildTime, wei, quote, charge, provider)
  }
  /**
   * @remarks
   * This method is when we want to charge user for the fee for deployment as well as for the build time.
   * @param a - address that is to be charged
   * @param b - built time (in sec) after deployment completed
   */
  async paymentWithoutFee(a: string, b: string): Promise<TxResponse> {
    const buildTime = this.vendor.convertToBN(b)
    return await this.paymentsContract?.functions.charge(a, buildTime)
  }
  /**
   * @remarks
   * This method can be used to updated address of underlying token.
   *
   * @param a - address of token to use for charging users
   */
  async updateUnderlyingToken(a: string): Promise<TxResponse> {
    return await this.paymentsContract?.functions.updateUnderlyingToken(a)
  }
  /**
   * @remarks
   * This method can be used to updated address of vault/escrow account
   *
   * @param a - address of escrow contract(vault)
   */
  async updateEscrow(a: string): Promise<TxResponse> {
    return await this.paymentsContract?.functions.updateEscrow(a)
  }
  /**
   * @remarks
   * This method can be used to updated address of oracle price feed.
   *
   * @param a - address of escrow contract(vault)
   */
  async updateFeederAddress(a: string): Promise<TxResponse> {
    return await this.paymentsContract?.functions.updateFeederAddress(a)
  }
  /**
   * @remarks
   * This method can be used to updated address of staked token
   *
   * @param a - address of escrow contract(vault)
   */
  async updateStakedToken(a: string): Promise<TxResponse> {
    return await this.paymentsContract?.functions.updateStakedToken(a)
  }
  /**
   * @remarks
   * This method can be called by owner to change the token address if for some reason token in changed
   *
   * @param a - address of escrow ArGo token, if for some reason new one needs to be passed
   */
  async updateToken(a: string): Promise<TxResponse> {
    return await this.paymentsContract?.functions.updateToken(a)
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
  async changeBuildTimeRate(p: string): Promise<TxResponse> {
    const wei = this.vendor.convertToWei(p)
    return await this.paymentsContract?.functions.changeBuildTimeRate(wei)
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
  async setManagers(h: Array<string>): Promise<TxResponse> {
    return await this.paymentsContract?.functions.setManagers(h)
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
   * Update approval for ArGo token
   * Dont use this function without frontend
   *
   * @param a - new approval amount.
   * @param c - chain Id
   */
  async gasslessApproval(a: string, c: number): Promise<TxResponse> {
    if (!this.vendor.biconomy) throw new Error(INVALID_BICONOMY_KEY)

    const wei = this.vendor.convertToWei(a)
    const abiEncodedApprove = this.vendor.abiEncodeErc20Functions('approve', [this.paymentsContract?.address, wei])
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
    const wei = await this.erc20Contract?.functions.allowance(a, this.paymentsContract?.address)
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
    return await this.paymentsContract?.functions.getManagers()
  }

  /**
   * @remarks
   * Get govornance address.
   *
   */
  async getGovernanceAddress(): Promise<string> {
    return await this.paymentsContract?.functions.governanceAddress()
  }

  /**
   * @remarks
   * Get underlying token address (Argo).
   *
   */
  async getToken(): Promise<string> {
    return await this.paymentsContract?.functions.underlying()
  }

  /**
   * @remarks
   * Get escrow address.
   *
   */
  async getEscrow(): Promise<string> {
    return await this.paymentsContract?.functions.escrow()
  }

  /**
   * @remarks
   * Get discount status.
   *
   */
  async checkIfDiscountsEnabled(): Promise<boolean> {
    return await this.paymentsContract?.functions.discountsEnabled()
  }

  /**
   * @remarks
   * Get staking manager  address.
   *
   */
  async getStakingManagerAddress(): Promise<string> {
    return await this.paymentsContract?.functions.stakingManager()
  }
  /**
   * @remarks
   * Get staking manager  address.
   *
   */
  async getStakedTokenAddress(): Promise<string> {
    return await this.paymentsContract?.functions.stakedToken()
  }
  /**
   * @remarks
   * Get discount slabs.
   *
   */
  async getDiscountSlabs(): Promise<any> {
    const slabs = await this.paymentsContract?.functions.discountSlabs()
    return this.vendor.parseDiscountSlabs(slabs)
  }
  /**
   * @remarks
   * Get areweave converted to usd
   *
   * @param a amount of areweave
   */
  async getArweaveConvertedUsd(a: string): Promise<number> {
    if (!this.coinMarketCapKey) throw new Error(API_KEY_REQUIRED)
    const qoute = await this.services.arweaveToUsd(a, this.coinMarketCapKey)
    return qoute
  }
  /**
   * @remarks
   * Get areweave converted to usd
   *
   * @param a amount of areweave
   */
  async getArweaveQuote(): Promise<number> {
    if (!this.coinMarketCapKey) throw new Error(API_KEY_REQUIRED)
    const qoute = await this.services.arweaveQuote(this.coinMarketCapKey)
    return qoute
  }
}
