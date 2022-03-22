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
export const convertToWei = (amount: string, precision: number) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return BigNumber.from(ethers.utils.parseUnits(toFixed(parseFloat(amount), precision)!, precision))
}

/**
 * @remarks
 * Convert wei value(10**18) to eth value
 *
 * @param string - value in eth.

 *
 * @returns Array<BigNumber>
 */
export const convertWeiToEth = (wei: BigNumber, precision: number) => {
  const eth: number = parseFloat(ethers.utils.formatUnits(wei.toString(), BigNumber.from(precision)))
  return eth
}
/**
 * @remarks
 * convert a given number to fixed precision
 *
 * @param number - value with high precision.
 * @param fixed - required precision
 * @returns Array<BigNumber>
 */
function toFixed(num: number, fixed: number) {
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?')
  return num.toString().match(re)?.[0]
}
