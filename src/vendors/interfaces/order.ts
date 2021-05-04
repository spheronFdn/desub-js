import { ethers } from 'ethers'

export interface ValidOrder {
  key: Uint8Array
  maker: string
  underlying: string
  floating: boolean
  principal: ethers.BigNumber
  interest: ethers.BigNumber
  duration: ethers.BigNumber
  expiry: ethers.BigNumber
}
