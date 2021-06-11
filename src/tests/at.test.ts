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

  it('Wraps a deployed contract', async () => {
    const wrapped = await payment.at('0x123', '0xabc')
    assert.isTrue(wrapped)
    assert.isNotNull(payment.paymentsContract)
    assert.isNotNull(payment.erc20Contract)
    assert.equal(payment.paymentsContract?.address, '0x123')
    assert.equal(payment.erc20Contract?.address, '0xabc')
  })
})
