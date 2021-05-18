import 'mocha'
import { assert } from 'chai'
import Vendor from '../vendors/ethers'
import { Contract } from '../interfaces'
import { Provider, getDefaultProvider } from '@ethersproject/providers'
import { Signer } from '@ethersproject/abstract-signer'
import { Wallet } from '@ethersproject/wallet'
import { BigNumber } from '@ethersproject/bignumber'
import { DiscountDataClass } from '../vendors/discount-data'

describe('Ethers Provider abstraction', () => {
  let vendor: Vendor

  let signer: Signer
  let provider: Provider

  before(() => {
    provider = getDefaultProvider()
    signer = Wallet.createRandom().connect(provider)
    vendor = new Vendor(provider, signer)
  })

  it('constructs', () => {
    assert.equal(vendor.provider, provider)
    assert.equal(vendor.signer, signer)
  })

  it('returns a low level contract', () => {
    const abi = ['function balanceOf(address owner) view returns (uint256)']
    const contract: Contract = vendor.contract('0x123', abi)
    assert.isNotNull(contract)
    assert.equal(contract.address, '0x123')
  })

  it('returns a big number from string', () => {
    const number = '10'
    const result = vendor.convertToBN(number)
    assert.isNotNull(result)
    assert.deepEqual(result, BigNumber.from(number))
  })
  it('returns eth value converted to wei', () => {
    const number = '10.040'
    const wei = BigNumber.from(1004).mul(BigNumber.from(`10`).pow(16))
    const result = vendor.convertToWei(number)
    console.log(wei.toString())
    console.log(result.toString())
    assert.isNotNull(result)
    assert.deepEqual(result, wei)
  })
  it('returns a wei value to eth', () => {
    const number = '10'
    const eth = BigNumber.from(10).div(BigNumber.from(`10`).pow(18))
    const result = vendor.convertWeiToEth(vendor.convertToBN(number))
    assert.isNotNull(result)
    assert.deepEqual(result, eth)
  })
  it('returns an array of numbers to big numbers', () => {
    const number = ['10', '20']
    const array = [vendor.convertToBN('10'), vendor.convertToBN('20')]
    const result = vendor.convertStringArrayToBigNumberArray(number)
    assert.isNotNull(result)
    assert.deepEqual(result, array)
  })
  it('returns a Discount data object', () => {
    const data = [
      { amount: vendor.convertToBN('10'), percent: vendor.convertToBN('10') },
      { amount: vendor.convertToBN('20'), percent: vendor.convertToBN('20') },
    ]
    const convertedData = data.map((a) => new DiscountDataClass(a.amount, a.percent))
    const stringifiedData = convertedData.map((a) => a.toString())
    const result = vendor.parseDiscountSlabs(data)
    assert.isNotNull(result)
    assert.deepEqual(result, stringifiedData)
  })
})
