import 'mocha'
import Vendor from '../vendors/ethers'
import { JsonRpcProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'
import { SubscriptionParameters } from '../interfaces'
import * as dotenv from 'dotenv'
import { Subscription } from '..'

describe('Payments methods', () => {
  let subscription: Subscription
  let vendor: Vendor
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
    subscription = new Subscription(vendor, correctKey)
    await subscription.subscriptionAt(
      '0x07A07C4a107B8Bd2fCeC6B595AAA0F20296a8fD1',
      '0x069ca3a23bc4B75E9700E34657370A6A1178E1F3',
      '0x6794a9E5411f8f9B3E5Dc7457162728544A443E0',
    )
  })
  it('it should pass correct price', async () => {
    const params: Array<SubscriptionParameters> = [
      { param: 'PRICE_PER_DEPLOYMENT', value: 100 },
      { param: 'PRICE_PER_WEBHOOK', value: 30 },
      { param: 'PRICE_BUILDING_TIME', value: 100 },
    ]
    let tx = await subscription.chargeUser('0x2Ee331840018465bD7Fe74aA4E442b9EA407fBBE', params)
    tx = await tx.wait()
    console.log(tx)
  }).timeout(50000)
})
