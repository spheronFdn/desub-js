/**
 * @remarks
 * Base calss for all the services we will be needing.
 */
import { Keyed } from '../interfaces'

export default abstract class implements Keyed {
  [key: string]: any

  /**
   * @remarks
   * Method which instantiates and returns the vendor specific contract abstraction. Must be
   * implemented in a child class
   *
   * @param amount - Deployed address of the target contract
   *
   */
  abstract arweaveToUsd(a: string, k: string): Promise<number>
  abstract arweaveQuote(k: string): Promise<number>
}
