import { BigNumber } from 'ethers';
export declare const convertToBN: (amount: string) => any;
export declare const convertToWei: (amount: string, precision: number) => BigNumber;
export declare const convertWeiToEth: (wei: BigNumber, precision: number) => number;
