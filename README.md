```
                                                                  __                                      
                                                                 |  \                                     
  ______    ______   __    __  ______ ____    ______   _______  _| $$_     _______           __   _______ 
 /      \  |      \ |  \  |  \|      \    \  /      \ |       \|   $$ \   /       \         |  \ /       \
|  $$$$$$\  \$$$$$$\| $$  | $$| $$$$$$\$$$$\|  $$$$$$\| $$$$$$$\\$$$$$$  |  $$$$$$$          \$$|  $$$$$$$
| $$  | $$ /      $$| $$  | $$| $$ | $$ | $$| $$    $$| $$  | $$ | $$ __  \$$    \          |  \ \$$    \ 
| $$__/ $$|  $$$$$$$| $$__/ $$| $$ | $$ | $$| $$$$$$$$| $$  | $$ | $$|  \ _\$$$$$$\ __      | $$ _\$$$$$$\
| $$    $$ \$$    $$ \$$    $$| $$ | $$ | $$ \$$     \| $$  | $$  \$$  $$|       $$|  \     | $$|       $$
| $$$$$$$   \$$$$$$$ _\$$$$$$$ \$$  \$$  \$$  \$$$$$$$ \$$   \$$   \$$$$  \$$$$$$$  \$$__   | $$ \$$$$$$$ 
| $$                |  \__| $$                                                        |  \__/ $$          
| $$                 \$$    $$                                                         \$$    $$          
 \$$                  \$$$$$$                                                           \$$$$$$             
```
#### Typescript library for working with the Payment Contracts in ArGo

> Important Notice: ArGo is in its Beta stage. If you have a suggestion, idea, or find a bug, please report it! The ArGo team will not be held accountable for any funds lost.

## About ArGo
ArGo is a simple & powerful platform to deploy your frontend app to Decentralised Storage Protocols where your app will live for eternity.

## Build argo-payments-js 
Follow below steps to build argo-payments-js in local

> Note: Our current latest stable branch is Master. After clone make sure you are on master branch
 - Clone argo-payments-js code into your local by using `git clone https://github.com/argoapp-live/argo-payments-js.git`
 - Install packages using either yarn or npm from root folder `yarn` or `npm install`
 - Run `yarn build` or `npm run dev`


## Run argo-payments-js tests
 - Clone argo-payments-js code into your local by using `git clone https://github.com/argoapp-live/argo-payments-js.git`
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
 

