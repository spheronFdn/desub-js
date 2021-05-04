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
  public abi: Abi
  public vendor: Vendor
  public contract?: Contract

  /**
   * @param v - Optional Vendor the HOC will use
   * @param a - Compiled abi of the smart contract this HOC wraps
   */
  protected constructor(v: Vendor, a: Abi) {
    this.vendor = v
    this.abi = a
  }

  /**
   * @param a - ETH address of an already deployed smart contract
   * @param o - Optional specified transaction options
   *
   * @returns boolean indicating a successful wrapping of the target deployed contract
   */
  at(a: string, o?: TransactOpts): boolean {
    this.contract = this.vendor.contract(a, this.abi, o)
    return !!this.contract
  }
}
