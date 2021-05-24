import 'mocha'
import { stub } from 'sinon'
import { assert, expect } from 'chai'
import Vendor from '../vendors/ethers'
import Payment from '../payment'
import { JsonRpcProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'
import { cloneWithWriteAccess } from '../helpers'
import { Contract, TxResponse } from '../interfaces'
import { INVALID_API_KEY } from '../errors'

describe('Payments methods', () => {
  let payment: Payment
  let vendor: Vendor
  const invalidKey = 'api-key'
  const correctKey = '0c5b25a6-4d37-4836-8b43-a6c575667cdd'

  beforeEach(async () => {
    const url = 'https://rinkeby.infura.io/v3/0e4ce57afbd04131b6842f08265b4d4b'
    const httpProvider = new JsonRpcProvider(url)
    const signer = Wallet.fromMnemonic(
      'company loud estate century olive gun tribe pulse bread play addict amount',
    ).connect(httpProvider)
    vendor = new Vendor(httpProvider, signer)
    payment = new Payment(vendor, invalidKey)
    payment.at('0x6fE31B1B05715Cb52C6348f25eA5b02d700323ea', '0x02f95e68f345dfbfc69e1ed662bafacb8749e5ab')
  })

  it('it should pay with fee', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'chargeWithProvider')
    fake.resolves({ hash: '0xhash' })
    const address = '0x123'
    const buildTime = '12'
    const uploadFee = '123'
    const deploymentQuote = '123'
    const deploymentCharge = '123'
    const provider = 'abc'
    const result: TxResponse = await payment.paymentWithFee(
      address,
      buildTime,
      uploadFee,
      deploymentQuote,
      deploymentCharge,
      provider,
    )
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.deepEqual(args[0], address)
    assert.deepEqual(args[1], vendor.convertToBN(buildTime))
    assert.deepEqual(args[2], vendor.convertToWei(uploadFee))
    assert.deepEqual(args[3], vendor.convertToWei(deploymentQuote))
    assert.deepEqual(args[4], vendor.convertToWei(deploymentCharge))
    assert.deepEqual(args[5], provider)
  })
  it('it should pay without fee', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)
    const fake = stub(contract.functions, 'charge')
    fake.resolves({ hash: '0xhash' })
    const address = '0x123'
    const buildTime = '12'
    const result: TxResponse = await payment.paymentWithoutFee(address, buildTime)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.deepEqual(args[0], address)
    assert.deepEqual(args[1], vendor.convertToBN(buildTime))
  })
  it('it should pass correct escrow address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'updateEscrow')
    fake.resolves({ hash: '0xhash' })
    const addr = '0x1abc'
    const result: TxResponse = await payment.updateEscrow(addr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.equal(args[0], addr)
  })
  it('it should pass correct token address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'updateToken')
    fake.resolves({ hash: '0xhash' })
    const addr = '0x1abc'
    const result: TxResponse = await payment.updateToken(addr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.equal(args[0], addr)
  })
  it('it should pass correct slabs array', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'updateDiscountSlabs')
    fake.resolves({ hash: '0xhash' })
    const discountSlabs = ['1200', '1300', '1400']
    const percents = ['12', '13', '14']
    const result: TxResponse = await payment.updateDiscountSlabs(discountSlabs, percents)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.deepEqual(args[0], vendor.convertStringArrayToBigNumberArray(discountSlabs))
    assert.deepEqual(args[1], vendor.convertStringArrayToBigNumberArray(percents))
  })
  it('it should pass correct price', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'changeBuildTimeRate')
    fake.resolves({ hash: '0xhash' })
    const price = '12'
    const result: TxResponse = await payment.changeBuildTimeRate(price)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.deepEqual(args[0], vendor.convertToWei(price))
  })
  it('it should pass correct staking address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'enableDiscounts')
    fake.resolves({ hash: '0xhash' })
    const stakingAddr = '0xabc'
    const result: TxResponse = await payment.enableDiscounts(stakingAddr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.equal(args[0], stakingAddr)
  })
  it('it should return hash', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'disableDiscounts')
    fake.resolves({ hash: '0xhash' })

    const result: TxResponse = await payment.disableDiscounts()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')
  })
  it('it should pass correct address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'setGovernanceAddress')
    fake.resolves({ hash: '0xhash' })
    const addr = '0xabc'
    const result: TxResponse = await payment.setGovernanceAddress(addr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.equal(args[0], addr)
  })
  it('it should pass correct array of address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'setManagers')
    fake.resolves({ hash: '0xhash' })
    const arr = ['0x1bw', '0xasb']
    const result: TxResponse = await payment.setManagers(arr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.deepEqual(args[0], arr)
  })
  it('it should pass correct array of address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)
    payment.erc20Contract = cloneWithWriteAccess(payment.erc20Contract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.erc20Contract ? payment.erc20Contract : invalidContract
    const paymentsContract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract

    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'approve')
    fake.resolves({ hash: '0xhash' })
    const amount = '12'
    const result: TxResponse = await payment.setNewApprovals(amount)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)

    assert.equal(args[0], paymentsContract.address)
    assert.deepEqual(args[1], vendor.convertToWei(amount))
  })
  it('it should get correct approval amount', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)
    payment.erc20Contract = cloneWithWriteAccess(payment.erc20Contract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.erc20Contract ? payment.erc20Contract : invalidContract
    const paymentsContract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract

    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'allowance')
    fake.resolves(vendor.convertToBN('1000000000000000000000000'))
    const arg1 = '0x123'
    const result: any = await payment.getApprovalAmount(arg1)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.deepEqual(result, vendor.convertWeiToEth(vendor.convertToBN('1000000000000000000000000')))

    const { args } = fake.getCall(0)
    assert.equal(args[0], arg1)
    assert.equal(args[1], paymentsContract.address)
  })
  it('it should get correct balance of user', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)
    payment.erc20Contract = cloneWithWriteAccess(payment.erc20Contract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.erc20Contract ? payment.erc20Contract : invalidContract

    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'balanceOf')
    fake.resolves(vendor.convertToBN('1000000000000000000000000'))
    const arg1 = '0x123'
    const result: any = await payment.getUserBalance(arg1)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.deepEqual(result, vendor.convertWeiToEth(vendor.convertToBN('1000000000000000000000000')))

    const { args } = fake.getCall(0)
    assert.equal(args[0], arg1)
  })

  it('it should give correct address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'getManagers')
    fake.resolves('0x123')
    const result = await payment.getManagers()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result, ['0x123'])
  })
  it('it should give correct governance address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'governanceAddress')
    fake.resolves('0x123')
    const result = await payment.getGovernanceAddress()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result, '0x123')
  })
  it('it should give correct token address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'underlying')
    fake.resolves('0x123')
    const result = await payment.getToken()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result, '0x123')
  })
  it('it should give correct escrow address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'escrow')
    fake.resolves('0x123')
    const result = await payment.getEscrow()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result, '0x123')
  })
  it('it should give correct discount status', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'discountsEnabled')
    fake.resolves(true)
    const result = await payment.checkIfDiscountsEnabled()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result, true)
  })
  it('it should give correct staking manager address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'stakingManager')
    fake.resolves('0x123')
    const result = await payment.getStakingManagerAddress()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result, '0x123')
  })
  it('it should give correct discount slabs', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'discountSlabs')
    fake.resolves([
      { amount: vendor.convertToBN('10'), percent: vendor.convertToBN('10') },
      { amount: vendor.convertToBN('11'), percent: vendor.convertToBN('11') },
    ])
    const result = await payment.getDiscountSlabs()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.deepEqual(
      result,
      vendor.parseDiscountSlabs([
        { amount: vendor.convertToBN('10'), percent: vendor.convertToBN('10') },
        { amount: vendor.convertToBN('11'), percent: vendor.convertToBN('11') },
      ]),
    )
  })
  it('should throw with invalid api key', async () => {
    try {
      await payment.getArweaveConvertedUsd('2')
    } catch (err) {
      expect(err.toString()).deep.equal(new Error(INVALID_API_KEY).toString())
    }
  })
  it('It should return arweave usd quote', async () => {
    payment = new Payment(vendor, correctKey)
    const result = await payment.getArweaveConvertedUsd('2')
    assert.notEqual(result, 0)
  })
  it('should throw with invalid api key', async () => {
    try {
      await payment.getArweaveQuote()
    } catch (err) {
      expect(err.toString()).deep.equal(new Error(INVALID_API_KEY).toString())
    }
  })
  it('It should return arweave usd quote', async () => {
    payment = new Payment(vendor, correctKey)
    const result = await payment.getArweaveQuote()
    assert.notEqual(result, 0)
  })
})
