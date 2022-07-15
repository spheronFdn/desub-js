import { ERC20_ABI, PAYMENT_ABI, SUBSCRIPTION_DATA_ABI, SUBSCRIPTION_PAYMENT_ABI } from './constants'
import Deployed from './abstracts/deployed'
import Vendor from './abstracts/vendor'
import { TxResponse } from './interfaces'
import { API_KEY_REQUIRED, INVALID_BICONOMY_KEY } from './errors'
import { akashTokenId, arweaveTokenId } from './constants/price-feed'

export default class extends Deployed {
  coinMarketCapKey?: string
  /**
   * @param vendor - Instance of a Vendor class
   */
  constructor(vendor: Vendor, coinMarketCapKey?: string) {
    super(vendor, PAYMENT_ABI, ERC20_ABI, SUBSCRIPTION_PAYMENT_ABI, SUBSCRIPTION_DATA_ABI)
    this.coinMarketCapKey = coinMarketCapKey
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
   * This method can be used to updated address of staked token
   *
   * @param a - address of escrow contract(vault)
   */
  async updateStakedToken(a: string): Promise<TxResponse> {
    return await this.paymentsContract?.functions.updateStakedToken(a)
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
    const wei = this.vendor.convertToWei(a, this.tokenPrecision || 18)
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

    const wei = this.vendor.convertToWei(a, this.tokenPrecision || 18)
    const abiEncodedApprove = this.vendor.abiEncodeErc20Functions('approve', [this.paymentsContract?.address, wei])
    const userAddress = await this.vendor.signer.getAddress()
    const nonce = await this.getNonceForGaslessERC20(userAddress)
    const signedMessage = await this.vendor.signedMessageForTx(
      userAddress,
      nonce,
      abiEncodedApprove,
      this.erc20Contract?.address || '',
      c,
    )
    const rsv = this.vendor.getSignatureParameters(signedMessage)
    return await this.sendRawBiconomyERC20Transaction(userAddress, abiEncodedApprove, rsv)
  }
  /**
   * @remarks
   * Gaslles user deposit 
   * Dont use this function without frontend
   *
   * @param a - deposit amount.
   * @param t - token address.
   * @param c - chain Id
   */
   async gasLessUserDeposit(a: string, t: string, c: number): Promise<TxResponse> {
    if (!this.vendor.biconomy) throw new Error(INVALID_BICONOMY_KEY)

    const wei = this.vendor.convertToWei(a, this.tokenPrecision || 18)
    const abiEncodedDeposit = this.vendor.abiEncodeSubDepayFunctions('userDeposit', [
      t,
      wei,
    ])
    const userAddress = await this.vendor.signer.getAddress()
    const nonce = await this.getNonceForGaslessERC20(userAddress)
    const signedMessage = await this.vendor.signedMessageForTx(
      userAddress,
      nonce,
      abiEncodedDeposit,
      this.paymentsContract?.address || '',
      c,
    )
    const rsv = this.vendor.getSignatureParameters(signedMessage)
    return await this.sendRawBiconomyERC20Transaction(userAddress, abiEncodedDeposit, rsv)
  }
  /**
   * @remarks
   * Gaslles user deposit 
   * Dont use this function without frontend
   *
   * @param a - withdrawal amount.
   * @param t - token address.
   * @param c - chain Id
   */
   async gasLessUserWithdraw(a: string, t: string, c: number): Promise<TxResponse> {
    if (!this.vendor.biconomy) throw new Error(INVALID_BICONOMY_KEY)

    const wei = this.vendor.convertToWei(a, this.tokenPrecision || 18)
    const abiEncodedWithdraw = this.vendor.abiEncodeSubDepayFunctions('userWithdraw', [
      t,
      wei,
    ])
    const userAddress = await this.vendor.signer.getAddress()
    const nonce = await this.getNonceForGaslessERC20(userAddress)
    const signedMessage = await this.vendor.signedMessageForTx(
      userAddress,
      nonce,
      abiEncodedWithdraw,
      this.paymentsContract?.address || '',
      c,
    )
    const rsv = this.vendor.getSignatureParameters(signedMessage)
    return await this.sendRawBiconomyERC20Transaction(userAddress, abiEncodedWithdraw, rsv)
  }
  /**
   *
   * @remarks
   * returns abi enocoded erc20 function
   * @param u - user address
   * @param f - abi encoded function
   * @param rsv - rsv values
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
   * @param a - user address
   */
  async getApprovalAmount(a: string): Promise<any> {
    const wei = await this.erc20Contract?.functions.allowance(a, this.paymentsContract?.address)
    return this.vendor.convertWeiToEth(wei, this.tokenPrecision || 18)
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
    const qoute = await this.services.tokenToUSD(a, arweaveTokenId, this.coinMarketCapKey)
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
    const qoute = await this.services.tokenQuote(arweaveTokenId, this.coinMarketCapKey)
    return qoute
  }
  /**
   * @remarks
   * Get areweave converted to usd
   *
   * @param a amount of areweave
   */
  async getAkashConvertedUsd(a: string): Promise<number> {
    if (!this.coinMarketCapKey) throw new Error(API_KEY_REQUIRED)
    const qoute = await this.services.tokenToUSD(a, akashTokenId, this.coinMarketCapKey)
    return qoute
  }
  /**
   * @remarks
   * Get areweave converted to usd
   *
   * @param a amount of areweave
   */
  async getAkashQuote(): Promise<number> {
    if (!this.coinMarketCapKey) throw new Error(API_KEY_REQUIRED)
    const qoute = await this.services.tokenQuote(akashTokenId, this.coinMarketCapKey)
    return qoute
  }
}
