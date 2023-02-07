# Desub.JS

#### Typescript library for working with the decentralised subscription contracts in Spheron

## About Spheron

Spheron is a marketplace to access all your web3 infrasructures.

## Build desub-js

Follow below steps to build desub-js in local

> Note: Our current latest stable branch is Master. After clone make sure you are on master branch

- Clone desub-js code into your local by using `git clone https://github.com/spheron/desub-js.git`
- Install packages using either yarn or npm from root folder `yarn` or `npm install`
- Run `yarn build` or `npm run build`

## Run desub-js tests

- Clone desub-js code into your local by using `git clone https://github.com/spheron/desub-js.git`
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
