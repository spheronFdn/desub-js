import 'mocha'
import { assert } from 'chai'
import Vendor from '../vendors/ethers'
import Payment from '../payment'
import { getDefaultProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'

describe('Payment at method', () => {
  let payment: Payment

  before(() => {
    const ethersProvider = getDefaultProvider()
    const signer = Wallet.createRandom().connect(ethersProvider)
    const vendor: Vendor = new Vendor(ethersProvider, signer)
    payment = new Payment(vendor)
  })

  it('Wraps a deployed contract', () => {
    const wrapped = payment.at('0x123')
    assert.isTrue(wrapped)
    assert.isNotNull(payment.contract)
    assert.equal(payment.contract?.address, '0x123')
  })
})
