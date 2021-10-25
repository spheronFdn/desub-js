import Services from '../abstracts/services'
import axios from 'axios'
import { baseUrl } from '../constants/price-feed'
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
  async tokenToUSD(a: string, t: number, k: string): Promise<number> {
    try {
      const options = {
        headers: {
          Accept: 'application/json',
          'X-CMC_PRO_API_KEY': k,
        },
      }
      const response = await axios.get(baseUrl + '/cryptocurrency/quotes/latest?id=' + t, options)
      const qoute: number = response.data.data[t].quote.USD.price
      return qoute * parseFloat(a)
    } catch (error: any) {
      if (error.response.status == 401) {
        throw new Error(INVALID_API_KEY)
      }
      return 0
    }
  }
  /**
   * @remarks
   * returns areweave quote.
   *
   * @param k - api key for coinmarket cap
   *
   * @returns Usd qoute of given amount
   */
  async tokenQuote(t: number, k: string): Promise<number> {
    try {
      const options = {
        headers: {
          Accept: 'application/json',
          'X-CMC_PRO_API_KEY': k,
        },
      }
      const response = await axios.get(baseUrl + '/cryptocurrency/quotes/latest?id=' + t, options)
      const qoute: number = response.data.data[t].quote.USD.price
      return qoute
    } catch (error: any) {
      if (error.response.status == 401) {
        throw new Error(INVALID_API_KEY)
      }
      return 0
    }
  }
}
