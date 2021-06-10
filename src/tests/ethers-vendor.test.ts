import 'mocha'
import { assert } from 'chai'
import Vendor from '../vendors/ethers'
import { Contract } from '../interfaces'
import { Provider, getDefaultProvider } from '@ethersproject/providers'
import { Signer } from '@ethersproject/abstract-signer'
import { Wallet } from '@ethersproject/wallet'
import { BigNumber } from '@ethersproject/bignumber'
import { DiscountDataClass } from '../vendors/discount-data'
import { ethers } from 'ethers'
import { metaTransactionType } from '../constants/payment'

describe('Ethers Provider abstraction', async () => {
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
    const number = '10.04'
    const result = vendor.convertToWei(number)
    const wei = BigNumber.from(1004).mul(BigNumber.from(`10`).pow(16))

    assert.isNotNull(result)
    assert.deepEqual(result, wei)
  })
  it('returns a wei value to eth', () => {
    const number = '10'
    const eth = parseFloat(
      ethers.utils.formatEther(BigNumber.from(number).mul(BigNumber.from('10').pow(18)).toString()),
    )
    const result = vendor.convertWeiToEth(BigNumber.from(number).mul(BigNumber.from('10').pow(18)).toString())
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
  it('should sign and verify message', async () => {
    const message = 'raw message'
    const signedMessage = await vendor.signMessage(message)
    const signedDirect = await signer.signMessage(message)
    assert.deepEqual(signedMessage, signedDirect)
    const recoveredAddress = vendor.verifySignedMessage(message, signedMessage)
    assert.deepEqual(await signer.getAddress(), recoveredAddress)
  })
  it('should should abi encode params', async () => {
    const abi = ['function approve(address spender, uint256 amount) external returns (bool)']
    const iface = new ethers.utils.Interface(abi)
    const func = 'approve'
    const addr = '0x0B59779C5320B384c9D72457fcd92ABA299ef360'
    const params = [addr, BigNumber.from(1)]
    const data = iface.encodeFunctionData(func, params)
    const encoded = vendor.abiEncodeErc20Functions(func, params)
    assert.deepEqual(encoded, data)
  })
  it('it should return signed message', async () => {
    const address = '0x0B59779C5320B384c9D72457fcd92ABA299ef360'
    const chainId = 1
    const nonce = 0
    const params = [address, BigNumber.from(1)]
    const func = 'approve'
    const abiEncoded = vendor.abiEncodeErc20Functions(func, params)

    const domainData = {
      name: 'ArGo Token',
      version: '1',
      verifyingContract: address,
      salt: '0x' + chainId.toString(16).padStart(64, '0'),
    }
    const message = {
      nonce: nonce,
      from: address,
      functionSignature: abiEncoded,
    }
    const types = {
      MetaTransaction: metaTransactionType,
    }
    const signature = await vendor.signer._signTypedData(domainData, types, message)
    const data = await vendor.signedMessageForTx(address, nonce, abiEncoded, address, chainId)
    assert.deepEqual(signature, data)
  })
  it('it should return signature params', async () => {
    const address = '0x0B59779C5320B384c9D72457fcd92ABA299ef360'
    const chainId = 1
    const nonce = 0
    const params = [address, BigNumber.from(1)]
    const func = 'approve'
    const abiEncoded = vendor.abiEncodeErc20Functions(func, params)
    const signature = await vendor.signedMessageForTx(address, nonce, abiEncoded, address, chainId)
    if (!ethers.utils.isHexString(signature)) {
      throw new Error('Given value "'.concat(signature, '" is not a valid hex string.'))
    }
    const r = signature.slice(0, 66)
    const s = '0x'.concat(signature.slice(66, 130))
    const v = '0x'.concat(signature.slice(130, 132))
    let _v = BigNumber.from(v).toNumber()
    if (![27, 28].includes(_v)) _v += 27
    const rsv = {
      r: r,
      s: s,
      v: _v,
    }
    const data = vendor.getSignatureParameters(signature)
    assert.deepEqual(rsv, data)
  })
})
