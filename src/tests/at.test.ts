import 'mocha'
import { assert } from 'chai'
import Vendor from '../vendors/ethers'
import Payment from '../payment'
import { getDefaultProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'
import Subscription from '../subscription'

describe('Payment and subscripton at method', () => {
  let payment: Payment
  let subscription: Subscription

  before(() => {
    const ethersProvider = getDefaultProvider()
    const signer = Wallet.createRandom().connect(ethersProvider)
    const vendor: Vendor = new Vendor(ethersProvider, signer)
    payment = new Payment(vendor)
    subscription = new Subscription(vendor)
  })

  it('Wraps a deployed contract', async () => {
    const wrapped = await payment.at('0x123', '0xabc')
    const subscriptionWrapped = await subscription.subscriptionAt('0x123', '0xabc', '0x456')
    assert.isTrue(wrapped)
    assert.isNotNull(payment.paymentsContract)
    assert.isNotNull(payment.erc20Contract)
    assert.equal(payment.paymentsContract?.address, '0x123')
    assert.equal(payment.erc20Contract?.address, '0xabc')
    assert.isTrue(subscriptionWrapped)
    assert.isNotNull(subscription.subscriptionDataContract)
    assert.isNotNull(subscription.erc20Contract)
    assert.isNotNull(subscription.subscriptionPaymentContract)
    assert.equal(subscription.subscriptionDataContract?.address, '0xabc')
    assert.equal(subscription.erc20Contract?.address, '0x456')
    assert.equal(subscription.subscriptionPaymentContract?.address, '0x123')
  })
})
