import 'mocha'
import { assert, expect } from 'chai'
import Services from '../services/services'
import { INVALID_API_KEY } from '../errors'

describe('Services tests', () => {
  let services: Services
  const apikey = '0c5b25a6-4d37-4836-8b43-a6c575667cdd'

  before(() => {
    services = new Services()
  })

  it('calls api', async () => {
    const result = await services.arweaveToUsd('2', apikey)
    assert.notEqual(result, 0)
  })

  it('should throw with invalid api key', async () => {
    const invalidKey = 'apikey'
    try {
      await services.arweaveToUsd('2', invalidKey)
    } catch (err) {
      expect(err.toString()).deep.equal(new Error(INVALID_API_KEY).toString())
    }
  })
 
})
