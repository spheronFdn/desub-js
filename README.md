<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/letech-digital-solutions/image/upload/v1676660656/logo_wbzt7w.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/letech-digital-solutions/image/upload/v1676660649/logo-dark_llnlr2.svg">
    <img alt="Spheron" src="https://res.cloudinary.com/letech-digital-solutions/image/upload/v1676660656/logo_wbzt7w.svg" width="250">
  </picture>
</p>

<p align="center">
  🧰 Desub Js is the ultimate solution for working with the Decentralized Subscription Contracts. Powered by Spheron. 
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=npm&message=v14.0.0&color=green" />
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=green" />
  <a href="https://discord.com/invite/ahxuCtm" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/static/v1?label=community&message=discord&color=blue" />
  </a>
  <a href="https://twitter.com/SpheronFdn" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40SpheronFdn" />
  </a>
</p>


# Desub.JS

#### Typescript library for working with the decentralised subscription contracts in Spheron

## About Spheron

Spheron is a marketplace to access all your web3 infrasructures.

## Build desub-js

Follow below steps to build desub-js in local

> Note: Our current latest stable branch is Master. After clone make sure you are on master branch

- Clone desub-js code into your local by using `git clone https://github.com/spheronFdn/desub-js.git`
- Install packages using either yarn or npm from root folder `yarn` or `npm install`
- Run `yarn build` or `npm run build`

## Run desub-js tests

- Clone desub-js code into your local by using `git clone https://github.com/spheronFdn/desub-js.git`
- Install packages using either yarn or npm from root folder `yarn` or `npm install`
- Make sure you add all the values in `.env` file before running tests.
- Run `yarn test` or `npm test`.
- A sample env file would look like

```
   COINMARKETCAP_KEY="COINMARKET_CAP_API_KEY"
   BICONOMY_KEY="BICONOMY_API_KEY"
   MNEMONIC_TEST="MNEMONIC_FOR_ACCOUNT"
   RPC_ENDPOINT="JSON_RPC_ENDPOINT_FOR_ETHEREUM_NETWORK"
```

> Note: you can ping us on discord and we will be happy to share our .env file with you
