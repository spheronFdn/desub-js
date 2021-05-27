import { BigNumber, ethers } from 'ethers'

/**
   * @remarks
   * Convert any number to big number.
   *
   * @param string - string of the required big number

   *
   * @returns BigNumber
   */
export const convertToBN = (amount: string): any => {
  return BigNumber.from(amount)
}
/**
 * @remarks
 * Get 10**18 multiplied number for values in wei.
 *
 * @param string - string of the required non-wei amount

 *
 * @returns BigNumber
 */
export const convertToWei = (amount: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return BigNumber.from(ethers.utils.parseUnits(toFixed(parseFloat(amount), 18)!, 18))
}

/**
 * @remarks
 * Convert wei value(10**18) to eth value
 *
 * @param string - value in eth.

 *
 * @returns Array<BigNumber>
 */
export const convertWeiToEth = (wei: BigNumber) => {
  const eth: number = parseFloat(ethers.utils.formatEther(wei.toString()))
  return eth
}
function toFixed(num: number, fixed: number) {
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?')
  return num.toString().match(re)?.[0]
}
