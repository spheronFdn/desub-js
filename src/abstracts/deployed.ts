/**
 * @remarks
 * Base class of all Higher Order Contracts (HOCs).
 * Note that we do not want to couple this class to any specific Vendor.
 */

import { Keyed, Contract, TransactOpts } from '../interfaces'
import Vendor from './vendor'
import { Abi } from '../@types'

export default abstract class implements Keyed {
  [key: string]: any
  public paymentsAbi: Abi
  public erc20Abi: Abi
  public vendor: Vendor
  public paymentsContract?: Contract
  public erc20Contract?: Contract

  /**
   * @param v - Optional Vendor the HOC will use
   * @param a - Compiled abi of the payments smart contract this HOC wraps
   * @param e - Compiled abi of ERC20 smart contract this HOC wraps
   */
  protected constructor(v: Vendor, a: Abi, e: Abi) {
    this.vendor = v
    this.paymentsAbi = a
    this.erc20Abi = e
  }

  /**
   * @param a - ETH address of an already deployed smart contract
   * @param e - ETH address of an already deployed ERC20 ArGo Token.
   * @param o - Optional specified transaction options
   *
   * @returns boolean indicating a successful wrapping of the target deployed contract
   */
  at(a: string, e: string, o?: TransactOpts): boolean {
    this.paymentsContract = this.vendor.contract(a, this.paymentsAbi, o)
    this.erc20Contract = this.vendor.contract(e, this.erc20Abi)
    return !!this.paymentsContract
  }
}
