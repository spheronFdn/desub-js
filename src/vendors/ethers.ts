// NOTE this is currently a shell for where we will encapsulate ethers.js

import { SIGNER_OR_PROVIDER_REQUIRED, SIGNER_REQUIRED } from '../errors'
import { Contract } from '../interfaces'
import Vendor from '../abstracts/vendor'
import { Signer } from '@ethersproject/abstract-signer'
import { Contract as EthersContract } from '@ethersproject/contracts'
import { Provider } from '@ethersproject/providers'
import { Abi } from '../@types'
import { BigNumber, ethers } from 'ethers'
import { DiscountDataClass } from './discount-data'
import { Discount } from '../interfaces/discount'
import { helpers } from '..'

export default class extends Vendor {
  /**
   * @remarks
   * Given an ethers specific provider and optionally a signer return a Vendor.
   *
   * @param p - An Ethers Provider
   * @param s - Optional Ethers Signer
   */
  constructor(p: Provider, s?: Signer) {
    super()
    this.provider = p
    this.signer = s
  }

  /**
   * @remarks
   * The Ethers.js specific implementation of a .contract method.
   *
   * @param address - Address a target contract has been deployed to
   * @param abi - Compiled abi of the deployed target contract
   *
   * @returns Contract
   */
  contract(address: string, abi: Abi): Contract {
    this.requireSignerOrProvider()
    return new EthersContract(address, abi, this.signer)
  }

  /**
   * @remarks
   * Convert array of string to Array of BigNumber
   *
   * @param Array - Array of string to be converted to Array of Big Number

   *
   * @returns Array<BigNumber>
   */
  convertStringArrayToBigNumberArray(array: Array<string>): Array<any> {
    const bnArray = Array<BigNumber>(array.length)
    for (let i = 0; i < array.length; i++) {
      bnArray[i] = BigNumber.from(array[i])
    }
    return bnArray
  }
  /**
   * @remarks
   * Convert wei value(10**18) to eth value
   *
   * @param string - value in eth.

   *
   * @returns Array<BigNumber>
   */
  parseDiscountSlabs(data: Array<any>): Array<Discount> {
    const slabs = data.map((a) => new DiscountDataClass(a.amount, a.percent))
    return slabs.map((a) => a.toString())
  }
  /**
   * @remarks
   * Convert any number to big number.
   *
   * @param string - string of the required big number

   *
   * @returns BigNumber
   */
  convertToBN(amount: string) {
    return helpers.ethers.convertToBN(amount)
  }
  /**
   * @remarks
   * Convert wei value(10**18) to eth value
   *
   * @param string - value in eth.

  *
  * @returns Array<BigNumber>
  */

  convertToWei(amount: string) {
    return helpers.ethers.convertToWei(amount)
  }
  /**
   * @remarks
   * Get 10**18 multiplied number for values in wei.
   *
   * @param string - string of the required non-wei amount

  *
  * @returns BigNumber
  */
  convertWeiToEth(wei: any) {
    return helpers.ethers.convertWeiToEth(wei)
  }

  /**
   * @remarks
   * Sign the message with users private key.
   *
   * @param string - message that is to be signed

  *
  * @returns Signed message
  */
  async signMessage(m: string): Promise<string> {
    this.requireSigner()
    const signedMessage = await this.signer.signMessage(m)
    return signedMessage
  }

  /**
   * @remarks
   * get address from signed message
   * @param string - unsigned message
   * @param string - signed message
   *
   * @returns address
   */
  verifySignedMessage = (m: string, s: string): any => {
    const address = ethers.utils.verifyMessage(m, s)
    return address
  }
  /**
   *
   * @remarks
   * Convenience methods which abstracts repetitive checking for the presence of a signer || provider
   * @private
   */
  private requireSignerOrProvider() {
    if (!this.signer && !this.provider) throw new ReferenceError(SIGNER_OR_PROVIDER_REQUIRED)
  }
  /**
   *
   * @remarks
   * Convenience methods which abstracts repetitive checking for the presence of a signer || provider
   * @private
   */
  private requireSigner() {
    if (!this.signer) throw new ReferenceError(SIGNER_REQUIRED)
  }
}
