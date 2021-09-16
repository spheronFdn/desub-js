import 'mocha'
import Vendor from '../vendors/ethers'
import { JsonRpcProvider, TransactionReceipt } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'
import { Contract, SubscriptionParameters, TxResponse } from '../interfaces'
import * as dotenv from 'dotenv'
import { Subscription } from '..'
import { cloneWithWriteAccess } from '../helpers'
import { assert, expect } from 'chai'
import { stub } from 'sinon'
import { BigNumber } from 'ethers'
import _ from 'lodash'
import { INVALID_API_KEY } from '../errors'

describe('subscriptions methods', () => {
  let subscription: Subscription
  let vendor: Vendor
  let biconomyKey: any

  beforeEach(async () => {
    dotenv.config()
    biconomyKey = process.env.BICONOMY_KEY
    const url = process.env.RPC_ENDPOINT
    const httpProvider = new JsonRpcProvider(url)
    const mnemonic: any = process.env.MNEMONIC_TEST
    const signer = Wallet.fromMnemonic(mnemonic).connect(httpProvider)
    vendor = new Vendor(httpProvider, signer, biconomyKey)
    subscription = new Subscription(vendor)
    await subscription.subscriptionAt(
      '0x07A07C4a107B8Bd2fCeC6B595AAA0F20296a8fD1',
      '0x069ca3a23bc4B75E9700E34657370A6A1178E1F3',
      '0x6794a9E5411f8f9B3E5Dc7457162728544A443E0',
    )
  })

  it('it should charege user', async () => {
    // allow stubbing contract properties
    subscription.subscriptionPaymentContract = cloneWithWriteAccess(subscription.subscriptionPaymentContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionPaymentContract
      ? subscription.subscriptionPaymentContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'chargeUser')
    fake.resolves({ hash: '0xhash' })
    const address = '0x123'
    const params: Array<SubscriptionParameters> = [{ param: 'ABC', value: 10 }]
    const result: TxResponse = await subscription.chargeUser(address, params)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')
    const paramArray: Array<string> = []
    const paramValue: Array<number> = []
    for (let i = 0; i < params.length; i++) {
      paramArray.push(params[i].param)
      paramValue.push(vendor.convertToBN(params[i].value.toString()))
    }
    const { args } = fake.getCall(0)
    assert.deepEqual(args[0], address)
    assert.deepEqual(args[1], paramArray)
    assert.deepEqual(args[2], paramValue)
  })

  it('it should update params', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)
    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }
    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)
    const fake = stub(contract.functions, 'updateParams')
    fake.resolves({ hash: '0xhash' })
    const params: Array<SubscriptionParameters> = [{ param: 'ABC', value: 10 }]
    const result: TxResponse = await subscription.upadteParams(params)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')
    const paramArray: Array<string> = []
    const paramValue: Array<number> = []
    for (let i = 0; i < params.length; i++) {
      paramArray.push(params[i].param)
      paramValue.push(vendor.convertToBN(params[i].value.toString()))
    }
    const { args } = fake.getCall(0)
    assert.deepEqual(args[0], paramArray)
    assert.deepEqual(args[1], paramValue)
  })
  it('it should delete params', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)
    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }
    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)
    const fake = stub(contract.functions, 'deleteParams')
    fake.resolves({ hash: '0xhash' })
    const params: Array<string> = ['ABC']
    const result: TxResponse = await subscription.deleteParams(params)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')
    const { args } = fake.getCall(0)
    assert.deepEqual(args[0], params)
  })
  it('it should pass correct escrow address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'updateEscrow')
    fake.resolves({ hash: '0xhash' })
    const addr = '0x1abc'
    const result: TxResponse = await subscription.updateEscrow(addr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.equal(args[0], addr)
  })
  it('it should pass correct token address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'updateUnderlyingToken')
    fake.resolves({ hash: '0xhash' })
    const addr = '0x1abc'
    const result: TxResponse = await subscription.updateToken(addr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.equal(args[0], addr)
  })
  it('it should pass underlying token address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'updateUnderlyingToken')
    fake.resolves({ hash: '0xhash' })
    const addr = '0x1abc'
    const result: TxResponse = await subscription.updateUnderlyingToken(addr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.equal(args[0], addr)
  })
  it('it should pass correct feeder address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'updateFeederAddress')
    fake.resolves({ hash: '0xhash' })
    const addr = '0x1abc'
    const result: TxResponse = await subscription.updateFeederAddress(addr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.equal(args[0], addr)
  })
  it('it should pass correct staked token address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'updateStakedToken')
    fake.resolves({ hash: '0xhash' })
    const addr = '0x1abc'
    const result: TxResponse = await subscription.updateStakedToken(addr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.equal(args[0], addr)
  })
  it('it should pass correct slabs array', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'updateDiscountSlabs')
    fake.resolves({ hash: '0xhash' })
    const discountSlabs = ['1200', '1300', '1400']
    const percents = ['12', '13', '14']
    const result: TxResponse = await subscription.updateDiscountSlabs(discountSlabs, percents)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.deepEqual(args[0], vendor.convertStringArrayToBigNumberArray(discountSlabs))
    assert.deepEqual(args[1], vendor.convertStringArrayToBigNumberArray(percents))
  })

  it('it should pass correct staking address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'enableDiscounts')
    fake.resolves({ hash: '0xhash' })
    const stakingAddr = '0xabc'
    const result: TxResponse = await subscription.enableDiscounts(stakingAddr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.equal(args[0], stakingAddr)
  })
  it('it should return hash', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'disableDiscounts')
    fake.resolves({ hash: '0xhash' })

    const result: TxResponse = await subscription.disableDiscounts()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')
  })
  it('it should pass correct address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'setGovernanceAddress')
    fake.resolves({ hash: '0xhash' })
    const addr = '0xabc'
    const result: TxResponse = await subscription.setGovernanceAddress(addr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)
    assert.equal(args[0], addr)
  })
  it('it should pass correct array of address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'setManagers')
    fake.resolves({ hash: '0xhash' })
    const arr = ['0x1bw', '0xasb']
    const result: TxResponse = await subscription.setManagers(arr)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)

    assert.deepEqual(args[0], arr)
  })
  it('it should pass correct array of address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)
    subscription.erc20Contract = cloneWithWriteAccess(subscription.erc20Contract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.erc20Contract ? subscription.erc20Contract : invalidContract
    const subscriptionDataContract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract

    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'approve')
    fake.resolves({ hash: '0xhash' })
    const amount = '12'
    const result: TxResponse = await subscription.setNewApprovals(amount)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0xhash')

    const { args } = fake.getCall(0)

    assert.equal(args[0], subscription.subscriptionPaymentContract?.address)
    assert.deepEqual(args[1], vendor.convertToWei(amount))
  })
  it('it should get correct approval amount', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)
    subscription.erc20Contract = cloneWithWriteAccess(subscription.erc20Contract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.erc20Contract ? subscription.erc20Contract : invalidContract
    const subscriptionDataContract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract

    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'allowance')
    fake.resolves(vendor.convertToBN('1000000000000000000000000'))
    const arg1 = '0x123'
    const result: any = await subscription.getApprovalAmount(arg1)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.deepEqual(result, vendor.convertWeiToEth(vendor.convertToBN('1000000000000000000000000')))

    const { args } = fake.getCall(0)
    assert.equal(args[0], arg1)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    assert.equal(args[1], subscription.subscriptionPaymentContract!.address)
  })
  it('it should get correct balance of user', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)
    subscription.erc20Contract = cloneWithWriteAccess(subscription.erc20Contract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.erc20Contract ? subscription.erc20Contract : invalidContract

    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'balanceOf')
    fake.resolves(vendor.convertToBN('1000000000000000000000000'))
    const arg1 = '0x123'
    const result: any = await subscription.getUserBalance(arg1)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.deepEqual(result, vendor.convertWeiToEth(vendor.convertToBN('1000000000000000000000000')))

    const { args } = fake.getCall(0)
    assert.equal(args[0], arg1)
  })

  it('it should give correct address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'getManagers')
    fake.resolves('0x123')
    const result = await subscription.getManagers()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result, ['0x123'])
  })
  it('it should give correct governance address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'governanceAddress')
    fake.resolves('0x123')
    const result = await subscription.getGovernanceAddress()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result, '0x123')
  })
  it('it should give correct token address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'underlying')
    fake.resolves('0x123')
    const result = await subscription.getToken()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result, '0x123')
  })
  it('it should give correct escrow address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'escrow')
    fake.resolves('0x123')
    const result = await subscription.getEscrow()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result, '0x123')
  })
  it('it should give correct discount status', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'discountsEnabled')
    fake.resolves(true)
    const result = await subscription.checkIfDiscountsEnabled()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result, true)
  })
  it('it should give correct staking manager address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'stakingManager')
    fake.resolves('0x123')
    const result = await subscription.getStakingManagerAddress()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result, '0x123')
  })
  it('it should give correct staked token address', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'stakedToken')
    fake.resolves('0x123')
    const result = await subscription.getStakedTokenAddress()
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result, '0x123')
  })
  it('it should give correct staking manager address', async () => {
    // allow stubbing contract properties
    subscription.erc20Contract = cloneWithWriteAccess(subscription.erc20Contract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.erc20Contract ? subscription.erc20Contract : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)
    const user = '0x123'
    const fake = stub(contract.functions, 'getNonce')
    fake.resolves([BigNumber.from(0)])
    const result = await subscription.getNonceForGaslessERC20(user)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    const { args } = fake.getCall(0)
    assert.equal(args[0], user)
    assert.equal(result, [BigNumber.from(0)][0].toNumber())
  })
  it('it should give correct discount slabs', async () => {
    // allow stubbing contract properties
    subscription.subscriptionDataContract = cloneWithWriteAccess(subscription.subscriptionDataContract)

    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.subscriptionDataContract
      ? subscription.subscriptionDataContract
      : invalidContract
    assert.isNotNull(contract)
    assert.notDeepEqual(contract, invalidContract)

    const fake = stub(contract.functions, 'discountSlabs')
    fake.resolves([
      { amount: vendor.convertToBN('10'), percent: vendor.convertToBN('10') },
      { amount: vendor.convertToBN('11'), percent: vendor.convertToBN('11') },
    ])
    const result = await subscription.getDiscountSlabs()
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

  it('it should pass correct values for gassless transaction', async () => {
    subscription.erc20Contract = cloneWithWriteAccess(subscription.erc20Contract)
    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }

    const contract: Contract = subscription.erc20Contract ? subscription.erc20Contract : invalidContract
    const fakeNonce = stub(contract.functions, 'getNonce')
    fakeNonce.resolves([BigNumber.from(0)])

    const fake = stub(subscription, 'sendRawBiconomyERC20Transaction')
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
    const abiEncodedApprove = vendor.abiEncodeErc20Functions('approve', [
      subscription.subscriptionPaymentContract?.address,
      wei,
    ])
    const userAddress = await vendor.signer.getAddress()
    const nonce = await subscription.getNonceForGaslessERC20(userAddress)
    const signedMessage = await vendor.signedMessageForTx(
      userAddress,
      nonce,
      abiEncodedApprove,
      subscription.erc20Contract!.address,
      chainID,
    )
    const rsv = vendor.getSignatureParameters(signedMessage)
    const result: TxResponse = await subscription.gasslessApproval('10', chainID)
    assert(fake.calledOnce)
    assert.isNotNull(result)
    assert.equal(result.hash, '0x123')

    const { args } = fake.getCall(0)
    assert.deepEqual(args[0], userAddress)
    assert.deepEqual(args[1], abiEncodedApprove)
    assert.deepEqual(args[2], rsv)
  })
  it('it should pass correct values for meta transaction', async () => {
    subscription.erc20Contract = cloneWithWriteAccess(subscription.erc20Contract)
    subscription.biconomyERC20Contract = _.cloneDeep(subscription.biconomyERC20Contract)
    const invalidContract = {
      address: '0xinvalid',
      functions: {},
    }
    const erc20: Contract = subscription.erc20Contract ? subscription.erc20Contract : invalidContract

    const contract: Contract = subscription.biconomyERC20Contract ? subscription.biconomyERC20Contract : invalidContract
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
    const abiEncodedApprove = vendor.abiEncodeErc20Functions('approve', [
      subscription.subscriptionPaymentContract?.address,
      wei,
    ])
    const userAddress = await vendor.signer.getAddress()
    const nonce = await subscription.getNonceForGaslessERC20(userAddress)
    const signedMessage = await vendor.signedMessageForTx(
      userAddress,
      nonce,
      abiEncodedApprove,
      subscription.biconomyERC20Contract!.address,
      chainID,
    )
    const rsv = vendor.getSignatureParameters(signedMessage)
    const result: TxResponse = await subscription.gasslessApproval('10', chainID)
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
