import { ethers, BigNumber } from 'ethers';
import { Discount } from '../interfaces/discount';
import { DiscountData } from './interfaces/discount-data';
export declare class DiscountDataClass implements DiscountData {
    amount: ethers.BigNumber;
    percent: ethers.BigNumber;
    constructor(a: BigNumber, p: BigNumber);
    toString(): Discount;
}
