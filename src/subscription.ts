import { Vendor } from '.'
import { ethers } from 'ethers'
import Deployed from './abstracts/deployed'
import {
  PAYMENT_ABI,
  ERC20_ABI,
  SUBSCRIPTION_PAYMENT_ABI,
  SUBSCRIPTION_DATA_ABI,
  SUBSCRIPTION_NATIVE_PAYMENT_ABI,
  SUBSCRIPTION_MANTLE_PAYMENT_ABI,
} from './constants'
import { INVALID_BICONOMY_KEY, TRANSACTION_FAILED } from './errors'
import { SubscriptionParameters, TokenData, TxResponse } from './interfaces'

export default class SubscriptionContract extends Deployed {
  /**
   * Creates an instance of SubscriptionContract.
   * @param vendor - Instance of a Vendor class
   */
  constructor(vendor: Vendor) {
    super(
      vendor,
      PAYMENT_ABI,
      ERC20_ABI,
      SUBSCRIPTION_PAYMENT_ABI,
      SUBSCRIPTION_DATA_ABI,
      SUBSCRIPTION_NATIVE_PAYMENT_ABI,
      SUBSCRIPTION_MANTLE_PAYMENT_ABI,
    )
  }

  /**
   * Updates the address of the vault/escrow account.
   * @param escrowAddress - Address of the escrow contract (vault)
   * @returns A promise that resolves to a transaction response.
   */
  async updateEscrow(escrowAddress: string): Promise<TxResponse> {
    return await this.paymentsContract?.functions.updateEscrow(escrowAddress)
  }

  /**
   * Updates the address of the staked token.
   * @param stakedTokenAddress - Address of the staked token.
   * @returns A promise that resolves to a transaction response.
   */
  async updateStakedToken(stakedTokenAddress: string): Promise<TxResponse> {
    return await this.subscriptionDataContract?.functions.updateStakedToken(stakedTokenAddress)
  }

  /**
   * Update the discount slabs, which can only be called by the governance account.
   * @param discountSlabs - An array of prices for discount slabs
   * @param percents - An array of percentage of each slab
   * @returns A Promise that resolves with the transaction response
   */
  async updateDiscountSlabs(discountSlabs: string[], percents: string[]): Promise<TxResponse> {
    const vendor = this.vendor
    const convertedDiscountSlabs = vendor.convertStringArrayToBigNumberArray(discountSlabs)
    const convertedPercents = vendor.convertStringArrayToBigNumberArray(percents)
    return this.subscriptionDataContract?.functions.updateDiscountSlabs(convertedDiscountSlabs, convertedPercents)
  }

  /**
   * Enable discounts, which can only be called by the owner.
   * @param stakingManagerAddress - The address of the staking manager
   * @returns A Promise that resolves with the transaction response
   */
  async enableDiscounts(stakingManagerAddress: string): Promise<TxResponse> {
    return this.subscriptionDataContract?.functions.enableDiscounts(stakingManagerAddress)
  }

  /**
   * Disable discounts, which can only be called by the owner.
   * @returns A Promise that resolves with the transaction response
   */
  async disableDiscounts(): Promise<TxResponse> {
    return this.subscriptionDataContract?.functions.disableDiscounts()
  }

  /**
   * Update the governance contract address, which can only be called by the owner.
   * @param governanceAddress - The address of the governance contract
   * @returns A Promise that resolves with the transaction response
   */
  async setGovernanceAddress(governanceAddress: string): Promise<TxResponse> {
    return this.subscriptionDataContract?.functions.setGovernanceAddress(governanceAddress)
  }

  /**
   * This method can only be called by the contract owner to update the data contract address.
   *
   * @param dataContractAddress - Address of the data contract.
   */
  async setDataContract(dataContractAddress: string): Promise<TxResponse> {
    return await this.subscriptionPaymentContract?.functions.updateDataContract(dataContractAddress)
  }

  /**
   * This method can only be called by the contract owner to set new owners.
   *
   * @param newOwners - Array of addresses of new owners.
   */
  async setManagers(newOwners: string[]): Promise<TxResponse> {
    return await this.subscriptionDataContract?.functions.setManagers(newOwners)
  }

  /**
   * Update approval for ERC-20 token.
   * Do not use this function without frontend.
   *
   * @param approvalAmount - New approval amount.
   */
  async setNewApprovals(approvalAmount: string): Promise<TxResponse> {
    const weiAmount = this.vendor.convertToWei(approvalAmount, this.tokenPrecision || 18)
    return await this.erc20Contract?.functions.approve(this.subscriptionPaymentContract?.address, weiAmount)
  }

  /**
   * Token approval and user deposit in one transaction.
   * Do not use this function without frontend.
   * @param approvalAmount - Amount of tokens to approve and deposit.
   */
  async approveAndDeposit(approvalAmount: string): Promise<TxResponse> {
    try {
      const weiAmount = this.vendor.convertToWei(approvalAmount, this.tokenPrecision || 18)
      await this.erc20Contract?.functions.approve(this.subscriptionPaymentContract?.address, weiAmount)
      return this.subscriptionPaymentContract?.functions.userDeposit(this.erc20Contract?.address ?? '', weiAmount)
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Transaction failed: ${error.message}`)
      } else {
        throw new Error(TRANSACTION_FAILED)
      }
    }
  }

  async approveAndDepositWithGasLimit(approvalAmount: string): Promise<TxResponse> {
    try {
      const weiAmount = this.vendor.convertToWei(approvalAmount, this.tokenPrecision || 18)

      await this.erc20Contract?.functions.approve(this.subscriptionPaymentContract?.address, weiAmount, {
        gasLimit: 300000,
      })

      return await this.subscriptionPaymentContract?.functions.userDeposit(
        this.erc20Contract?.address ?? '',
        weiAmount,
        {
          gasLimit: 300000,
        },
      )
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Transaction failed: ${error.message}`)
      } else {
        throw new Error(TRANSACTION_FAILED)
      }
    }
  }

  /**
   * Update approval for ERC-20 token.
   * Do not use this function without frontend.
   *
   * @param approvalAmount - New approval amount.
   * @param chainId - Chain ID.
   */
  async gasslessApproval(approvalAmount: string, chainId: number): Promise<TxResponse> {
    if (!this.vendor.biconomy) {
      throw new Error(INVALID_BICONOMY_KEY)
    }

    const weiAmount = this.vendor.convertToWei(approvalAmount, this.tokenPrecision || 18)
    const abiEncodedApprove = this.vendor.abiEncodeErc20Functions('approve', [
      this.subscriptionPaymentContract?.address,
      weiAmount,
    ])
    const userAddress = await this.vendor.signer.getAddress()
    const nonce = await this.getNonceForGaslessERC20(userAddress)
    const signedMessage = await this.vendor.signedMessageForTx(
      userAddress,
      nonce,
      abiEncodedApprove,
      this.erc20Contract?.address || '',
      chainId,
    )
    const rsv = this.vendor.getSignatureParameters(signedMessage)
    return await this.sendRawBiconomyERC20Transaction(userAddress, abiEncodedApprove, rsv)
  }
  /**
   * @remarks
   * Gasless user deposit/withdrawal
   * Do not use this function without a frontend
   *
   * @param a - amount of deposit/withdrawal
   * @param contract - subscription payment contract instance
   * @param erc20 - ERC20 contract instance
   * @param biconomy - Biconomy instance
   */
  async gaslessUserAction(
    a: string,
    contract: ethers.Contract,
    erc20: ethers.Contract,
    biconomy: any,
  ): Promise<TxResponse> {
    if (!biconomy) throw new Error(INVALID_BICONOMY_KEY)
    const wei = this.vendor.convertToWei(a, this.tokenPrecision || 18)
    const ethersProvider = new ethers.providers.Web3Provider(biconomy)
    const userAddress = await this.vendor.signer.getAddress()
    const { data } = await contract.populateTransaction.userDeposit(erc20?.address || '', wei)
    const txParams = {
      data,
      to: contract?.address || '',
      from: userAddress,
      signatureType: 'EIP712_SIGN',
    }
    return await ethersProvider.send('eth_sendTransaction', [txParams])
  }

  /**
   * @remarks
   * Gasless user deposit
   * Do not use this function without a frontend
   *
   * @param a - deposit amount.
   * @param contract - subscription payment contract instance
   * @param erc20 - ERC20 contract instance
   * @param biconomy - Biconomy instance
   */
  async gaslessUserDeposit(
    a: string,
    contract: ethers.Contract,
    erc20: ethers.Contract,
    biconomy: any,
  ): Promise<TxResponse> {
    return await this.gaslessUserAction(a, contract, erc20, biconomy)
  }

  /**
   * @remarks
   * Gasless user withdrawal
   * Do not use this function without a frontend
   *
   * @param a - withdrawal amount.
   * @param contract - subscription payment contract instance
   * @param erc20 - ERC20 contract instance
   * @param biconomy - Biconomy instance
   */
  async gaslessUserWithdraw(
    a: string,
    contract: ethers.Contract,
    erc20: ethers.Contract,
    biconomy: any,
  ): Promise<TxResponse> {
    return await this.gaslessUserAction(a, contract, erc20, biconomy)
  }
  /**
   * Update approval for ERC-20 token.
   * This function requires a frontend to be used.
   *
   * @param approvalAmount - New approval amount in string format.
   * @param tokenName - ERC-20 token name.
   * @param chainId - Chain ID.
   */
  async gasslessMultiTokenApproval(approvalAmount: string, tokenName: string, chainId: number): Promise<TxResponse> {
    if (!this.vendor.biconomy) {
      throw new Error(INVALID_BICONOMY_KEY)
    }

    const wei = this.vendor.convertToWei(approvalAmount, this.tokenPrecision || 18)
    const abiEncodedApprove = this.vendor.abiEncodeErc20Functions('approve', [
      this.subscriptionPaymentContract?.address,
      wei,
    ])
    const userAddress = await this.vendor.signer.getAddress()
    const nonce = await this.getNonceForGaslessERC20(userAddress)
    const signedMessage = await this.vendor.signedMessageForMultiTokenTx(
      userAddress,
      nonce,
      abiEncodedApprove,
      this.erc20Contract?.address || '',
      tokenName,
      chainId,
    )
    const { r, s, v } = this.vendor.getSignatureParameters(signedMessage)
    const tx = await this.sendRawBiconomyERC20Transaction(userAddress, abiEncodedApprove, { r, s, v })
    return tx
  }

  /**
   * Sends a raw Biconomy ERC-20 transaction.
   *
   * @param userAddress - User address.
   * @param abiEncodedFunction - ABI encoded function.
   * @param rsv - RSV values.
   */
  async sendRawBiconomyERC20Transaction(
    userAddress: string,
    abiEncodedFunction: string,
    rsv: { r: string; s: string; v: number },
  ): Promise<any> {
    if (this.vendor.biconomy.status === this.vendor.biconomy.READY) {
      const tx = await this.biconomyERC20Contract?.functions.executeMetaTransaction(
        userAddress,
        abiEncodedFunction,
        rsv.r,
        rsv.s,
        rsv.v,
      )
      return tx
    } else {
      return new Promise((resolve, reject) => {
        this.vendor.biconomy
          .onEvent(this.vendor.biconomy.READY, async () => {
            const tx = await this.biconomyERC20Contract?.functions.executeMetaTransaction(
              userAddress,
              abiEncodedFunction,
              rsv.r,
              rsv.s,
              rsv.v,
            )
            resolve(tx)
          })
          .onEvent(this.vendor.biconomy.ERROR, (error: string) => {
            reject(error)
          })
      })
    }
  }
  /**
   * @remarks
   * Get nonce for gasless transaction on erc20
   *
   * @param userAddress - user address
   */
  async getNonceForGaslessERC20(userAddress: string): Promise<number> {
    const nonce = await this.erc20Contract?.functions.getNonce(userAddress)
    return nonce[0].toNumber()
  }

  /**
   * @remarks
   * Get user balance of the ERC20 token.
   *
   * @param userAddress - user address
   */
  async getUserBalance(userAddress: string): Promise<number> {
    const wei = await this.erc20Contract?.functions.balanceOf(userAddress)
    return this.vendor.convertWeiToEth(wei, this.tokenPrecision ?? 18)
  }

  /**
   * @remarks
   * Get user token balance.
   *
   * @param userAddress - user address
   */
  async getUserTokenBalance(userAddress: string): Promise<number> {
    const userData = await this.subscriptionPaymentContract?.functions.getUserData(
      userAddress,
      this.erc20Contract?.address ?? '',
    )
    return this.vendor.convertWeiToEth(userData[0].balance, this.tokenPrecision ?? 18)
  }

  /**
   * @remarks
   * User deposit to Spheron.
   *
   * @param amount - amount to deposit
   */
  async userDeposit(amount: string): Promise<TxResponse> {
    const wei = this.vendor.convertToWei(amount, this.tokenPrecision ?? 18)
    return this.subscriptionPaymentContract?.functions.userDeposit(this.erc20Contract?.address ?? '', wei)
  }
  async userDepositNative(amount: string): Promise<TxResponse> {
    const wei = this.vendor.convertToWei(amount, this.tokenPrecision ?? 18)
    return this.subscriptionNativePaymentContract?.functions.userDeposit(this.erc20Contract?.address ?? '', wei, {
      value: wei,
    })
  }

  /**
   * @remarks
   * User withdraw from Spheron.
   *
   * @param amount - amount to withdraw
   */
  async userWithdraw(amount: string): Promise<TxResponse> {
    const wei = this.vendor.convertToWei(amount, this.tokenPrecision ?? 18)
    return this.subscriptionPaymentContract?.functions.userWithdraw(this.erc20Contract?.address ?? '', wei)
  }
  /**
   * @remarks
   * Get given Allowance amount.
   *
   */
  async getUsdPricePrecision(): Promise<any> {
    const bn = await this.subscriptionDataContract?.functions.usdPricePrecision()
    return bn
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
   * Get discount slabs.
   *
   */
  async getDataContract(): Promise<any> {
    const slabs = await this.subscriptionPaymentContract?.functions.subscriptionData()
    return this.vendor.parseDiscountSlabs(slabs)
  }

  /**
   * @remarks
   * this method is used when we want to charge user for the subscrption he will be buying.
   * @param u - address of user
   * @param d - array of parameters and their values
   * @param mf - max gas fee
   * @param m - max priority fee
   */
  async makeCharge(u: string, d: Array<SubscriptionParameters>, gp?: string): Promise<TxResponse> {
    const paramArray: Array<string> = []
    const paramValue: Array<number> = []
    for (let i = 0; i < d.length; i++) {
      paramArray.push(d[i].param)
      paramValue.push(this.vendor.convertToBN(d[i].value.toString()))
    }
    if (gp) {
      return await this.subscriptionPaymentContract?.functions.chargeUser(
        u,
        paramArray,
        paramValue,
        this.erc20Contract?.address || '',
        {
          gasPrice: this.vendor.convertToBN(gp),
        },
      )
    } else {
      return await this.subscriptionPaymentContract?.functions.chargeUser(
        u,
        paramArray,
        paramValue,
        this.erc20Contract?.address || '',
      )
    }
  }
  /**
   * @remarks
   * this method is used when we want to charge user for the subscrption he will be buying with gas limit
   * @param u - address of user
   * @param d - array of parameters and their values
   * @param mf - max gas fee
   * @param m - max priority fee
   */
  async makeChargeWithGasLimit(u: string, d: Array<SubscriptionParameters>): Promise<TxResponse> {
    const paramArray: Array<string> = []
    const paramValue: Array<number> = []
    for (let i = 0; i < d.length; i++) {
      paramArray.push(d[i].param)
      paramValue.push(this.vendor.convertToBN(d[i].value.toString()))
    }
    return await this.subscriptionPaymentContract?.functions.chargeUser(
      u,
      paramArray,
      paramValue,
      this.erc20Contract?.address || '',
      {
        gasLimit: 300000,
      },
    )
  }
  /**
   * @remarks
   * this method is used when we want to charge user for the subscrption he will be buying on mantle chain
   * @param u - address of user
   * @param d - array of parameters and their values
   * @param priceId - price id of the token
   */
  async makeChargeMantle(u: string, d: Array<SubscriptionParameters>, priceUpdateData: string[]): Promise<TxResponse> {
    const paramArray: Array<string> = []
    const paramValue: Array<number> = []
    for (let i = 0; i < d.length; i++) {
      paramArray.push(d[i].param)
      paramValue.push(this.vendor.convertToBN(d[i].value.toString()))
    }
    return await this.subscriptionMantlePaymentContract?.functions.chargeUser(
      u,
      paramArray,
      paramValue,
      this.erc20Contract?.address || '',
      priceUpdateData,
      {
        gasLimit: 300000,
      },
    )
  }
  /**
   * @remarks
   * this method is used to add new tokens to the subscription contract
   * @param d - array of token data
   */
  async addTokens(d: Array<TokenData>): Promise<TxResponse> {
    const symbols: Array<string> = []
    const tokenAddresses: Array<string> = []
    const tokenDecimals: Array<any> = []
    const chainLinkBools: Array<boolean> = []
    const priceFeedAddresses: Array<string> = []
    const priceFeedPrecisions: Array<any> = []

    for (let i = 0; i < d.length; i++) {
      symbols.push(d[i].symobl)
      tokenAddresses.push(d[i].address)
      priceFeedAddresses.push(d[i].priceFeedAddress)
      chainLinkBools.push(d[i].isChainLinkFeed)
      tokenDecimals.push(this.vendor.convertToBN(d[i].decimals.toString()))
      priceFeedPrecisions.push(this.vendor.convertToBN(d[i].priceFeedPrecision.toString()))
    }
    return await this.subscriptionDataContract?.functions.addNewTokens(
      symbols,
      tokenAddresses,
      tokenDecimals,
      chainLinkBools,
      priceFeedAddresses,
      priceFeedPrecisions,
    )
  }
  /**
   * @remarks
   * this method is used to remove tokens from accepted tokens list
   * @param d - array of tokens to remove
   */
  async removeTokens(d: Array<string>): Promise<TxResponse> {
    return await this.subscriptionDataContract?.functions.removeTokens(d)
  }
  /**
   * @remarks
   * change precision of all the USD values being passed
   * @param n - prcision number
   */
  async changeUsdPrecision(n: number): Promise<TxResponse> {
    const bn = this.vendor.convertToBN(n.toString())
    return await this.subscriptionDataContract?.functions.changeUsdPrecision(bn)
  }

  /**
   * @remarks
   * This method is used when we want to update contract parameters
   * @param params - array of parameters and their values
   */
  async updateParams(params: SubscriptionParameters[]): Promise<TxResponse> {
    const paramArray: string[] = []
    const paramValue: Array<number> = []
    for (const param of params) {
      paramArray.push(param.param)
      paramValue.push(this.vendor.convertToBN(param.value.toString()))
    }
    return await this.subscriptionDataContract?.functions.updateParams(paramArray, paramValue)
  }

  /**
   * @remarks
   * This method is when we want to delete some parameter
   * @param paramsToDelete - array of params to delete
   */
  async deleteParams(paramsToDelete: string[]): Promise<TxResponse> {
    return await this.subscriptionDataContract?.functions.deleteParams(paramsToDelete)
  }

  // Admin Functions
  /**
   * @remarks
   * Admin function to get total balances of a particular token
   */
  async getTotalTokenBalance(): Promise<any> {
    const wei = await this.subscriptionPaymentContract?.functions.getTotalDeposit(this.erc20Contract?.address || '')
    return this.vendor.convertWeiToEth(wei, this.tokenPrecision ?? 18)
  }

  /**
   * @remarks
   * Admin function to get the cummulative total of all charges
   */
  async getTotalTokenCharges(): Promise<any> {
    const wei = await this.subscriptionPaymentContract?.functions.getTotalCharges(this.erc20Contract?.address || '')
    return this.vendor.convertWeiToEth(wei, this.tokenPrecision ?? 18)
  }

  /**
   * @remarks
   * Admin function to get the cummulative total of all withdraws made by users
   */
  async getTotalTokenWithdraws(): Promise<any> {
    const wei = await this.subscriptionPaymentContract?.functions.getTotalWithdraws(this.erc20Contract?.address || '')
    return this.vendor.convertWeiToEth(wei, this.tokenPrecision ?? 18)
  }

  /**
   * @remarks
   * Set treasury address to SubscriptionDepay Contract which receives all deposits to the contract
   * @param treasuryAddress - treasury address
   */
  async setTreasury(treasuryAddress: string): Promise<TxResponse> {
    return await this.subscriptionPaymentContract?.functions.setTreasury(treasuryAddress)
  }

  /**
   * @remarks
   * Set company address to SubscriptionDepay Contract which receives company earnings from user charges
   * Limited to Admin
   * @param companyAddress - company address
   */
  async setCompany(companyAddress: string): Promise<TxResponse> {
    return await this.subscriptionPaymentContract?.functions.setCompany(companyAddress)
  }

  /**
   * @remarks
   * Move company earnings from Treasury to company address
   * @param amount - amount
   */
  async companyWithdraw(amount: string): Promise<TxResponse> {
    const wei = this.vendor.convertToWei(amount, this.tokenPrecision ?? 18)
    return await this.subscriptionPaymentContract?.functions.companyWithdraw(this.erc20Contract?.address || '', wei)
  }
}
