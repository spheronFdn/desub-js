import { Provider } from "@ethersproject/providers";
import Web3 from "web3";
import { domainType, metaTransactionType } from "../constants";
/**
*
* @remarks
* returns abi enocoded erc20 function
* @param string - contract
* @param number - chain id
* @param number - nonce 
* @param string - user address 
* @param string - abi encoded function
* @param Provider - web3Provider

*/
export const getTypeSignedData = (a: string, c: number, n: number, u: string, f: string, p: any) => {
    const domainData = {
        name: 'ArGo Token',
        version: '1',
        verifyingContract: a,
        salt: '0x' + (c).toString(16).padStart(64, '0'),
    }
    let message = {
        nonce: 0,
        from: "",
        functionSignature: ""
    };
    message.nonce = n;
    message.from = u;
    message.functionSignature = f;
    const dataToSign = JSON.stringify({
        types: {
            EIP712Domain: domainType,
            MetaTransaction: metaTransactionType
        },
        domain: domainData,
        primaryType: "MetaTransaction",
        message: message
    });
    console.log("in signed")
    const web3 = new Web3(p);
    web3.currentProvider.send(
        {
            jsonrpc: "2.0",
            id: 999999999999,
            method: "eth_signTypedData_v4",
            params: [userAddress, dataToSign]
        }, console.log(signature)
    return signature;
}