/*
 * index file which allows declaration of small, utility interfaces
 * as well as the re-export (barrel pattern) of interfaces within this dir
 */

export * from './contract'
export * from './transaction'

export interface Keyed {
  [key: string]: any
}
