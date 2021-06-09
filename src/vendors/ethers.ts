// NOTE this is currently a shell for where we will encapsulate ethers.js

import { SIGNER_OR_PROVIDER_REQUIRED, SIGNER_REQUIRED } from '../errors'
import { Contract } from '../interfaces'
import Vendor from '../abstracts/vendor'
import { Signer } from '@ethersproject/abstract-signer'
import { Contract as EthersContract } from '@ethersproject/contracts'
import { JsonRpcProvider, JsonRpcSigner, Provider, TransactionResponse } from '@ethersproject/providers'
import { Abi } from '../@types'
import { BigNumber, ethers } from 'ethers'
import { DiscountDataClass } from './discount-data'
import { Discount } from '../interfaces/discount'
import { SignatureParams } from '../interfaces'
// @ts-ignore
import { Biconomy } from "@biconomy/mexa";

import { helpers } from '..'
import { domainType, ERC20Interface, metaTransactionType } from '../constants/payment'

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
   * Parse discount slabs data to DiscountDataClass
   *
   * @param Array - data coming from contract.

   *
   * @returns Discount slabs
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

  convertToWei(amount: string): BigNumber {
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
  convertWeiToEth(wei: any): number {
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
  verifySignedMessage(m: string, s: string): string {
    const address = ethers.utils.verifyMessage(m, s)
    return address
  }
  /**
  *
  * @remarks
  * returns abi enocoded erc20 function
  * @param string - name of function
  * @param Array - function parameters
  */
  abiEncodeErc20Functions(f: string, p: Array<any>): string {
    let iface = new ethers.utils.Interface(ERC20Interface);
    var data = iface.encodeFunctionData(f, p)
    return data;
  }
  /**
  *
  * @remarks
  * returns abi enocoded erc20 function
  * @param string - user address
  * @param number - nonce
  * @param string - abi encoded function data  
  * @param string - token address  
  * @param number - chain id
  */
  async signedMessageForTx(u: string, n: number, f: string, a: string, c: number): Promise<string> {
    console.log(u)
    console.log(a)
    const domainData = {
      name: 'ArGo Token',
      version: '1',
      verifyingContract: a,
      salt: '0x' + (c).toString(16).padStart(64, '0'),
    }
    let message = {
      nonce: n,
      from: u,
      functionSignature: f
    };
    const types = {
      MetaTransaction: metaTransactionType
    }

    const signature = await this.signer._signTypedData(domainData, types, message);
    console.log(signature)
    return signature;

  }
  /**
   *
   * @remarks
   * returns abi enocoded erc20 function
   * @param string - user address
   * @param string - abi encoded function
   * @param SignatureParams - rsv values
   * @param string - abi encoded function data  
   * @param string - token address  
   * @param number - chain id
   */
  async sendRawBiconomyTransaction(u: string, f: string, rsv: SignatureParams, contractAddress: string, abi: any): Promise<TransactionResponse> {

    const biconomy = new Biconomy(this.provider, { apiKey: "K97155Ti7.fb32dac1-77df-404b-9e63-621d64ad6718", debug: true });
    return new Promise((resolve, reject) => {
      biconomy.onEvent(biconomy.READY, async () => {
        const contract: EthersContract = new ethers.Contract(contractAddress, abi, biconomy.getSignerByAddress(this.signer.address));
        const tx = await contract.functions.executeMetaTransaction(u, f, rsv.r, rsv.s, rsv.v);
        resolve(tx);
      }).onEvent(biconomy.ERROR, (error: string, message: string) => {
        console.log(error)
        reject(error)
      });
    })

  }

  /**
  *
  * @remarks
  * Returns signature parameters when provided with valid signature hex
  * @param string - signature hex
  */
  getSignatureParameters(signature: string): SignatureParams {
    if (!ethers.utils.isHexString(signature)) {
      throw new Error(
        'Given value "'.concat(signature, '" is not a valid hex string.')
      );
    }
    var r = signature.slice(0, 66);
    var s = "0x".concat(signature.slice(66, 130));
    var v = "0x".concat(signature.slice(130, 132));
    let _v = BigNumber.from(v).toNumber();
    if (![27, 28].includes(_v)) _v += 27;
    return {
      r: r,
      s: s,
      v: _v
    };
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
