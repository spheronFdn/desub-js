import 'mocha'
import { assert, expect } from 'chai'
import Services from '../services/services'
import { INVALID_API_KEY } from '../errors'
import { arweaveTokenId } from '../constants/price-feed'

describe('Services tests', () => {
  let services: Services
  const apikey = '0c5b25a6-4d37-4836-8b43-a6c575667cdd'

  before(() => {
    services = new Services()
  })

  it('calls api', async () => {
    const result = await services.tokenToUSD('2', arweaveTokenId, apikey)
    assert.notEqual(result, 0)
  }).timeout(5000)
  it('should throw with invalid api key', async () => {
    const invalidKey = 'apikey'
    try {
      await services.tokenToUSD('2', arweaveTokenId, invalidKey)
    } catch (err: any) {
      expect(err.toString()).deep.equal(new Error(INVALID_API_KEY).toString())
    }
  }).timeout(5000)
  it('calls api for quote', async () => {
    const result = await services.tokenQuote(arweaveTokenId, apikey)
    assert.notEqual(result, 0)
  }).timeout(5000)

  it('should throw with invalid api key for quote', async () => {
    const invalidKey = 'apikey'
    try {
      await services.tokenQuote(arweaveTokenId, invalidKey)
    } catch (err: any) {
      expect(err.toString()).deep.equal(new Error(INVALID_API_KEY).toString())
    }
  }).timeout(5000)
})
