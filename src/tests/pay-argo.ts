import 'mocha'
import { stub } from 'sinon'
import { assert } from 'chai'
import Vendor from '../vendors/ethers'
import Payment from '../payment'
import { getDefaultProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'
import { cloneWithWriteAccess } from '../helpers'
import { Contract, TxResponse } from '../interfaces'

describe('Payment fillFixed method', () => {
  let payment: Payment
  let vendor: Vendor

  before(() => {
    const ethersProvider = getDefaultProvider()
    const signer = Wallet.createRandom().connect(ethersProvider)
    vendor = new Vendor(ethersProvider, signer)
    payment = new Payment(vendor)
    payment.at('0xabc')
  })

  it('has a delegated fillFixed method', () => {
    assert.equal(typeof payment.contract?.functions.fillFixed, 'function')
  })

  it('passes the call thru to the meta contract', async () => {
    // allow stubbing contract properties
    payment.contract = cloneWithWriteAccess(payment.contract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.contract ? payment.contract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'payArgo')
    fake.resolves({ hash: '0xhash' })

    const result: TxResponse = await payment.payment(order, filling, agreementKey, signature)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.deepEqual(args[0], vendor.prepareOrder(order))
    assert.isFalse(args[0].floating)
    assert.deepEqual(args[1], validFilling)
    assert.equal(args[2], agreementKey)
    assert.deepEqual(args[3], components)
  })
})
