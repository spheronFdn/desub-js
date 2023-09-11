/**
 * @remarks
 * Base class of all Higher Order Contracts (HOCs).
 * Note that we do not want to couple this class to any specific Vendor.
 */

import { Keyed, Contract, TransactOpts } from '../interfaces'
import Vendor from './vendor'
import { Abi } from '../@types'
import Services from '../services/services'

export default abstract class implements Keyed {
  [key: string]: any
  public paymentsAbi: Abi
  public erc20Abi: Abi
  public vendor: Vendor
  public paymentsContract?: Contract
  public erc20Contract?: Contract
  public biconomyERC20Contract?: Contract
  public services: Services
  public subscriptionPaymentAbi: Abi
  public subscriptionPaymentContract?: Contract
  public subscriptionNativePaymentAbi: Abi
  public subscriptionNativePaymentContract?: Contract
  public subscriptionMantlePaymentAbi: Abi
  public subscriptionMantlePaymentContract?: Contract
  public subscriptionDataAbi: Abi
  public subscriptionDataContract?: Contract
  public tokenPrecision?: number

  /**
   * @param v - Optional Vendor the HOC will use
   * @param a - Compiled abi of the payments smart contract this HOC wraps
   * @param e - Compiled abi of ERC20 smart contract this HOC wraps
   */
  protected constructor(
    v: Vendor,
    a: Abi,
    e: Abi,
    subscriptionPayments: Abi,
    subscriptionData: Abi,
    subscriptionNativePayments: Abi,
    subscriptionMantlePayments: Abi,
  ) {
    this.vendor = v
    this.paymentsAbi = a
    this.erc20Abi = e
    this.subscriptionPaymentAbi = subscriptionPayments
    this.subscriptionDataAbi = subscriptionData
    this.subscriptionNativePaymentAbi = subscriptionNativePayments
    this.subscriptionMantlePaymentAbi = subscriptionMantlePayments
    this.services = new Services()
  }

  /**
   * @param a - ETH address of an already deployed smart contract
   * @param e - ETH address of an already deployed ERC20 ArGo Token.
   * @param o - Optional specified transaction options
   *
   * @returns boolean indicating a successful wrapping of the target deployed contract
   */
  async at(a: string, e: string, o?: TransactOpts): Promise<boolean> {
    this.paymentsContract = this.vendor.contract(a, this.paymentsAbi, o)
    this.erc20Contract = this.vendor.contract(e, this.erc20Abi)
    this.tokenPrecision = 18
    this.services = new Services()
    if (this.vendor.biconomy !== undefined) {
      this.biconomyERC20Contract = this.vendor.contract(
        e,
        this.erc20Abi,
        this.vendor.biconomy.getSignerByAddress(await this.vendor.signer.getAddress()),
      )
    }
    return !!this.paymentsContract && !!this.erc20Contract
  }
  /**
   * @param subscriptionPayments - ETH address of an already deployed subscription contract
   * @param subscriptionData - ETH address of an already deployed subscription param contract
   * @param e - ETH address of an already deployed ERC20 ArGo Token.
   * @param p - token precision
   * @param o - Optional specified transaction options
   *
   * @returns boolean indicating a successful wrapping of the target deployed contract
   */
  async subscriptionAt(
    subscriptionPayments: string,
    subscriptionData: string,
    e: string,
    p: number,
    o?: TransactOpts,
  ): Promise<boolean> {
    this.subscriptionPaymentContract = this.vendor.contract(subscriptionPayments, this.subscriptionPaymentAbi, o)
    this.subscriptionNativePaymentContract = this.vendor.contract(
      subscriptionPayments,
      this.subscriptionNativePaymentAbi,
      o,
    )
    this.subscriptionMantlePaymentContract = this.vendor.contract(
      subscriptionPayments,
      this.subscriptionMantlePaymentAbi,
      o,
    )
    this.subscriptionDataContract = this.vendor.contract(subscriptionData, this.subscriptionDataAbi, o)
    this.tokenPrecision = p
    this.erc20Contract = this.vendor.contract(e, this.erc20Abi)

    this.services = new Services()
    if (this.vendor.biconomy !== undefined) {
      this.biconomyERC20Contract = this.vendor.contract(
        e,
        this.erc20Abi,
        this.vendor.biconomy.getSignerByAddress(await this.vendor.signer.getAddress()),
      )
    }
    return !!this.subscriptionPaymentContract && !!this.subscriptionPaymentContract && !!this.erc20Contract
  }
}
