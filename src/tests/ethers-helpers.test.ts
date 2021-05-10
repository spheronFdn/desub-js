import 'mocha'
import { assert } from 'chai'
import { helpers } from '..'
import { BigNumber } from '@ethersproject/bignumber'

describe('helper functions', () => {
  it('Converts string to bigNumber to ', () => {
    const str = '10'
    const result = helpers.ethers.convertToBN(str)
    assert.isNotNull(result)
    assert.deepEqual(result, BigNumber.from(str))
  })
  it('Converts string to wei', () => {
    const str = '10'
    const result = helpers.ethers.convertToWei(str)
    assert.isNotNull(result)
    assert.deepEqual(result, BigNumber.from(10).mul(BigNumber.from(10).pow(18)))
  })
  it('Converts string to bigNumber to ', () => {
    const str = '10'
    const result = helpers.ethers.convertWeiToEth(BigNumber.from(str).mul(BigNumber.from('10').pow(18)))
    assert.isNotNull(result)
    assert.deepEqual(result, BigNumber.from(str).mul(BigNumber.from('10').pow(18)).div(BigNumber.from(10).pow(18)))
  })
})
