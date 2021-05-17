import Services from '../abstracts/services'
import axios from 'axios'
import { baseUrl, tokenId } from '../errors/price-feed'
import { INVALID_API_KEY } from '../errors'
export default class extends Services {
  /**
   * @remarks
   * returns areweave amount converted to usd.
   *
   * @param a - amount of areweave
   * @param k - api key for coinmarket cap
   *
   * @returns Usd qoute of given amount
   */
  async arweaveToUsd(a: string, k: string): Promise<number> {
    try {
      const options = {
        headers: {
          Accept: 'application/json',
          'X-CMC_PRO_API_KEY': k,
        },
      }
      const response = await axios.get(baseUrl + '/cryptocurrency/quotes/latest?id=' + tokenId, options)
      const qoute: number = response.data.data[tokenId].quote.USD.price
      return qoute * parseFloat(a)
    } catch (error) {
      if (error.response.status == 401) {
        throw new Error(INVALID_API_KEY)
      }
      return 0
    }
  }
}
