import { ethers, BigNumber } from 'ethers'
import { Discount } from '../interfaces/discount'
import { DiscountData } from './interfaces/discount-data'

export class DiscountDataClass implements DiscountData {
  amount: ethers.BigNumber
  percent: ethers.BigNumber

  constructor(a: BigNumber, p: BigNumber) {
    this.amount = a
    this.percent = p
  }
  toString(): Discount {
    return { amount: this.amount.toString(), percent: this.percent.toString() }
  }
}
