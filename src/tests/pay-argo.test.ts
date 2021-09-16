import 'mocha'
import { stub } from 'sinon'
import { assert, expect } from 'chai'
import Vendor from '../vendors/ethers'
import Payment from '../payment'
import { JsonRpcProvider, TransactionReceipt } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'
import { cloneWithWriteAccess } from '../helpers'
import { Contract, TxResponse } from '../interfaces'
import { INVALID_API_KEY } from '../errors'
import * as dotenv from 'dotenv'
import { BigNumber } from 'ethers'
import _ from 'lodash'

describe('Payments methods', () => {
  let payment: Payment
  let vendor: Vendor
  const invalidKey = 'api-key'
  let correctKey: any
  let biconomyKey: any

  beforeEach(async () => {
    dotenv.config()
    correctKey = process.env.COINMARKETCAP_KEY
    biconomyKey = process.env.BICONOMY_KEY
    const url = process.env.RPC_ENDPOINT
    const httpProvider = new JsonRpcProvider(url)
    const mnemonic: any = process.env.MNEMONIC_TEST
    const signer = Wallet.fromMnemonic(mnemonic).connect(httpProvider)
    vendor = new Vendor(httpProvider, signer, biconomyKey)
    payment = new Payment(vendor, invalidKey)
    await payment.at('0x113bcF2d1DeB08D295291dA8Bce33ACAD9c9A726', '0xE044842Ce0A54dF5Dc11dbB962B462B28331728e')
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
  }).timeout(500000)
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
  it('it should pass underlying token address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'updateUnderlyingToken')
    fake.resolves({ hash: '0xhash' })
    const addr = '0x1abc'
    const result: TxResponse = await payment.updateUnderlyingToken(addr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.equal(args[0], addr)
  })
  it('it should pass correct feeder address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'updateFeederAddress')
    fake.resolves({ hash: '0xhash' })
    const addr = '0x1abc'
    const result: TxResponse = await payment.updateFeederAddress(addr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.equal(args[0], addr)
  })
  it('it should pass correct staked token address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'updateStakedToken')
    fake.resolves({ hash: '0xhash' })
    const addr = '0x1abc'
    const result: TxResponse = await payment.updateStakedToken(addr)
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
  it('it should give correct staked token address', async () => {
    // allow stubbing contract properties
    payment.paymentsContract = cloneWithWriteAccess(payment.paymentsContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.paymentsContract ? payment.paymentsContract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'stakedToken')
    fake.resolves('0x123')
    const result = await payment.getStakedTokenAddress()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result, '0x123')
  })
  it('it should give correct staking manager address', async () => {
    // allow stubbing contract properties
    payment.erc20Contract = cloneWithWriteAccess(payment.erc20Contract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.erc20Contract ? payment.erc20Contract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)
    const user = '0x123'
    const fake = stub(contract.functions, 'getNonce')
    fake.resolves([BigNumber.from(0)])
    const result = await payment.getNonceForGaslessERC20(user)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    const { args } = fake.getCall(0)
    assert.equal(args[0], user)
    assert.equal(result, [BigNumber.from(0)][0].toNumber())
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
  it('it should pass correct values for gassless transaction', async () => {
    payment.erc20Contract = cloneWithWriteAccess(payment.erc20Contract)
    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = payment.erc20Contract ? payment.erc20Contract : invalidContract
    const fakeNonce = stub(contract.functions, 'getNonce')
    fakeNonce.resolves([BigNumber.from(0)])

    const fake = stub(payment, 'sendRawBiconomyERC20Transaction')
    fake.resolves({
      hash: '0x123',
      confirmations: 0,
      from: '0x123',
      to: '0x123',
      gasLimit: BigNumber.from(0),
      gasPrice: BigNumber.from(0),
      nonce: 0,
      data: 'Ad',
      value: BigNumber.from(0),
      chainId: 0,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      wait: () => new Promise<TransactionReceipt>(() => {}),
    })

    const chainID = 80001
    const wei = vendor.convertToWei('10')
    const abiEncodedApprove = vendor.abiEncodeErc20Functions('approve', [payment.paymentsContract?.address, wei])
    const userAddress = await vendor.signer.getAddress()
    const nonce = await payment.getNonceForGaslessERC20(userAddress)
    const signedMessage = await vendor.signedMessageForTx(
      userAddress,
      nonce,
      abiEncodedApprove,
      payment.erc20Contract!.address,
      chainID,
    )
    const rsv = vendor.getSignatureParameters(signedMessage)
    const result: TxResponse = await payment.gasslessApproval('10', chainID)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0x123')

    const { args } = fake.getCall(0)
    assert.deepEqual(args[0], userAddress)
    assert.deepEqual(args[1], abiEncodedApprove)
    assert.deepEqual(args[2], rsv)
  })
  it('it should pass correct values for meta transaction', async () => {
    payment.erc20Contract = cloneWithWriteAccess(payment.erc20Contract)
    payment.biconomyERC20Contract = _.cloneDeep(payment.biconomyERC20Contract)
    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }
    const erc20: Contract = payment.erc20Contract ? payment.erc20Contract : invalidContract

    const contract: Contract = payment.biconomyERC20Contract ? payment.biconomyERC20Contract : invalidContract
    const fakeNonce = stub(erc20.functions, 'getNonce')

    fakeNonce.resolves([BigNumber.from(0)])

    const fake = stub(contract.functions, 'executeMetaTransaction')
    fake.resolves({
      hash: '0x123',
      confirmations: 0,
      from: '0x123',
      to: '0x123',
      gasLimit: BigNumber.from(0),
      gasPrice: BigNumber.from(0),
      nonce: 0,
      data: 'Ad',
      value: BigNumber.from(0),
      chainId: 0,
      wait: () =>
        new Promise<TransactionReceipt>(() => {
          return undefined
        }),
    })

    const chainID = 80001
    const wei = vendor.convertToWei('10')
    const abiEncodedApprove = vendor.abiEncodeErc20Functions('approve', [payment.paymentsContract?.address, wei])
    const userAddress = await vendor.signer.getAddress()
    const nonce = await payment.getNonceForGaslessERC20(userAddress)
    const signedMessage = await vendor.signedMessageForTx(
      userAddress,
      nonce,
      abiEncodedApprove,
      payment.biconomyERC20Contract!.address,
      chainID,
    )
    const rsv = vendor.getSignatureParameters(signedMessage)
    const result: TxResponse = await payment.gasslessApproval('10', chainID)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0x123')

    const { args } = fake.getCall(0)
    assert.deepEqual(args[0], userAddress)
    assert.deepEqual(args[1], abiEncodedApprove)
    assert.deepEqual(args[2], rsv.r)
    assert.deepEqual(args[3], rsv.s)
    assert.deepEqual(args[4], rsv.v)
  }).timeout(50000)
})
