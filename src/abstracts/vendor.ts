/**
 * @remarks
 * Base class of all Vendors for ArGo Payment HOCs. This abstraction should only
 * contain the Methods and properties needed by ArGo Payment HOCs to function.
 * Note that we are referring to third party libs such as Ethers and Web3 as
 * The Vendor, in turn, keeps a reference to it's own .provider specific to that lib.
 * While this is natural to me, it may be worth discussing different terms if confusing.
 */

import { Keyed, Contract, TransactOpts, SignatureParams } from '../interfaces'
import { Abi } from '../@types'

export default abstract class implements Keyed {
  [key: string]: any
  public provider: any // TODO
  public signer: any // TODO
  public biconomy: any

  /**
   * @remarks
   * Method which instantiates and returns the vendor specific contract abstraction. Must be
   * implemented in a child class
   *
   * @param address - Deployed address of the target contract
   * @param abi - Compiled abi of the target contract
   * @param o - Optional transaction options
   *
   */
  abstract contract(address: string, abi: Abi, o?: TransactOpts): Contract
  abstract convertToBN(amount: string): any
  abstract convertToWei(amount: string): any
  abstract convertStringArrayToBigNumberArray(array: Array<string>): Array<any>
  abstract convertWeiToEth(wei: any): any
  abstract verifySignedMessage(m: string, s: string): any
  abstract signMessage(m: string): Promise<string>
  abstract getSignatureParameters(signature: string): SignatureParams
  abstract abiEncodeErc20Functions(f: string, p: Array<any>): string
  abstract signedMessageForTx(u: string, n: number, f: string, a: string, c: number): Promise<string>
}
