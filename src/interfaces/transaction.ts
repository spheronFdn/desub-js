/**
 * @remarks
 * Interfaces for, supporting or generally having-to-do-with a Transactions
 */

import { Nos } from '../@types'

export interface TransactOpts {
  to?: string
  from?: string
  gasPrice?: Nos
  gasLimit?: Nos
  value?: Nos
  data?: any
}

// TODO flush this out...
export interface TxResponse {
  hash: string
  wait: (confirmations?: number) => Promise<any>
}

export interface Uint256Response {
  hash: string
}

export interface SignatureParams {
  r: string
  s: string
  v: number
}