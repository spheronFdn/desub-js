import { Keyed } from '.'

/**
 * @remarks
 * Interfaces for, supporting or generally having-to-do-with a Contracts
 */

export interface Contract {
  address: string
  functions: Keyed
}
