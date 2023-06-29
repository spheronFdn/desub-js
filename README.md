<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/spheronFdn/fns/blob/main/.github/assets/spheron-logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/spheronFdn/fns/blob/main/.github/assets/spheron-logo.svg">
    <img alt="Spheron" src="https://github.com/spheronFdn/fns/blob/main/.github/assets/spheron-logo.svg" width="250">
  </picture>
</p>
  

<p  align="center">

🧰 Desub Js is the ultimate solution for working with the Decentralized Subscription Contracts. Powered by Spheron.

</p>

  

<p  align="center">

<img  src="https://img.shields.io/static/v1?label=npm&message=v2.4.0&color=green" />

<img  src="https://img.shields.io/static/v1?label=license&message=Apache-2&color=green" />

<a  href="https://discord.com/invite/ahxuCtm"  target="_blank"  rel="noreferrer">

<img  src="https://img.shields.io/static/v1?label=community&message=discord&color=blue" />

</a>

<a  href="https://twitter.com/SpheronFdn"  target="_blank"  rel="noreferrer">

<img  src="https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40SpheronFdn" />

</a>

</p>

  
  

# Desub.JS

  

#### Typescript Lib for working with the Spheron Decentralized Subscription Contracts.

  

## About Spheron

  

Spheron is a marketplace to access all your web3 infrasructures.

  

## Getting Started

  
A simple guide for using the desub package to interacts with your contract. The smart contract can be found [here](https://github.com/spheronFdn/subscriptions-contract). If you make any significant change to the contracts, then you'll have to make some some changes to the package and  copy the ABIs to the constants/subscription.ts file. Contracts can be deployed on any EVM chain with support for solidity. If you are adopting the spheron contract without significant change, you can proceed to follow this quick guide. 
_Note: [ethers](https://docs.ethers.org/v5/) is a peer dependency of this library, so it is mandatory to install ethers separately along with the `@spheron/desub-js` library._

## Installation
Using NPM
```
npm install @spheron/desub-js ethers
```

Using Yarn
```
yarn add @spheron/desub-js ethers
```
## Usage

# How to use desub-js functions

To use the desub-js functions, you will need to follow the steps outlined below:

## Using the getUserTokenBalance function

1.  Import the required packages:

```
import * as paymentSmartContract from "@spheron/desub-js";
import { Wallet } from "@ethersproject/wallet";
``` 

2.  Provide the necessary input parameters to the function:

-   `subContractData`: an object with `paymentContractAddress`, `dataContractAddress`, `tokenAddress`, and `tokenPrecision` properties.
-   `tokenAddress`: the address of the token contract.
-   `tokenPrecision`: the number of decimals the token has.
-   `walletAddress`: the address of the wallet to check the balance for.

3.  Set the HTTP provider URL:

```
const httpProvider = "<insert  provider  URL>";
```

This URL should point to a node that can communicate with the EVM chain.

4.  Connect to the wallet using a signer:

```
const signer = Wallet.fromMnemonic("<Inser  wallet  mnemonic>").connect(httpProvider);
``` 

This step requires a mnemonic phrase that corresponds to the wallet being used.

5.  Create an instance of the Vendor class:

```
const vendor = new paymentSmartContract.Vendor(httpProvider, signer);
``` 

This class is used to interact with the payment contract.

6.  Create an instance of the Subscription class:

```
const subscription = new paymentSmartContract.Subscription(vendor);
``` 

This class is used to interact with the data contract.

7.  Call the `subscriptionAt` method to set the subscription data:

```
await subscription.subscriptionAt(paymentContractAddress, dataContractAddress, tokenAddress, tokenPrecision);
```

8.  Finally, call the `getUserTokenBalance` method on the `subscription` object, passing in the `walletAddress` parameter. This method retrieves the available balance of the user's token in the payment smart contract. The available balance is then returned by the function.
```
const  availableBalance  =  await subscription.getUserTokenBalance(walletAddress);
```

Following these steps will allow you to use the `getUserTokenBalance` function in desub-js.

## Build desub-js
  
If you would like to build the Desub.JS package locally, follow the steps below. Please note that our current latest stable branch is Master. After cloning, make sure you are on the Master branch.

1.  Clone the Desub.JS code into your local repository by using `git clone https://github.com/spheronFdn/desub-js.git`.
2.  Install packages using either yarn or npm from the root folder. You can use `yarn` or `npm install`.
3.  Run `yarn build` or `npm run build`.

  

## Run desub-js tests

If you would like to test the Desub.JS package, follow the steps below. Please note that you need to have all the necessary values in the `.env` file before running tests. You can ping us on Discord, and we will be happy to share our `.env` file with you.

1.  Clone the Desub.JS code into your local repository by using `git clone https://github.com/spheronFdn/desub-js.git`.
2.  Install packages using either yarn or npm from the root folder. You can use `yarn` or `npm install`.
3.  Make sure you add all the values in the `.env` file before running tests.
4.  Run `yarn test` or `npm test`.

A sample `.env` file would look like:
  

```

COINMARKETCAP_KEY="COINMARKET_CAP_API_KEY"

BICONOMY_KEY="BICONOMY_API_KEY"

MNEMONIC_TEST="MNEMONIC_FOR_ACCOUNT"

RPC_ENDPOINT="JSON_RPC_ENDPOINT_FOR_ETHEREUM_NETWORK"

```

> Note: you can ping us on discord and we will be happy to share our .env file with you
## Contribution

We encourage you to read the [contribution guidelines](https://github.com/spheronFdn/fns/blob/main/.github/contribution-guidelines.md) to learn about our development process and how to propose bug fixes and improvements before submitting a pull request.

  

The Spheron community extends beyond issues and pull requests! You can support Spheron [in many other ways](https://github.com/spheronFdn/fns/blob/main/.github/support.md) as well.

  

## Community

For help, discussions or any other queries: [Join us on Discord](https://discord.com/invite/ahxuCtm)
