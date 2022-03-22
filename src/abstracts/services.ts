/**
 * @remarks
 * Base calss for all the services we will be needing.
 */
import { Keyed } from '../interfaces'

export default abstract class implements Keyed {
  [key: string]: any

  abstract tokenToUSD(a: string, t: number, k: string): Promise<number>
  abstract tokenQuote(t: number, k: string): Promise<number>
}
