// NOTE this is currently a shell for where we will encapsulate ethers.js

import { SIGNER_OR_PROVIDER_REQUIRED } from '../errors'
import { Contract } from '../interfaces'
import Vendor from '../abstracts/vendor'
import { Signer } from '@ethersproject/abstract-signer'
import { Contract as EthersContract } from '@ethersproject/contracts'
import { Provider } from '@ethersproject/providers'
import { Abi } from '../@types'

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
   *
   * @remarks
   * Convenience methods which abstracts repetitive checking for the presence of a signer || provider
   * @private
   */
  private requireSignerOrProvider() {
    if (!this.signer && !this.provider) throw new ReferenceError(SIGNER_OR_PROVIDER_REQUIRED)
  }
}
