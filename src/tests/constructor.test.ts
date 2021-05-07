import 'mocha'
import { assert } from 'chai'
import { ERC20_ABI, PAYMENT_ABI } from '../constants'
import Vendor from '../vendors/ethers'
import Payment from '../payment'
import { getDefaultProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'

describe('Payment constructor', () => {
  let vendor: Vendor

  before(() => {
    const ethersProvider = getDefaultProvider()
    const signer = Wallet.createRandom().connect(ethersProvider)
    vendor = new Vendor(ethersProvider, signer)
  })

  it('constructs', () => {
    const payment: Payment = new Payment(vendor)
    assert.equal(payment.paymentsAbi, PAYMENT_ABI)
    assert.equal(payment.erc20Abi, ERC20_ABI)
  })
})
