export interface SubscriptionParameters {
    param: string;
    value: number;
}
export interface TokenData {
    symobl: string;
    address: string;
    decimals: number;
    isChainLinkFeed: boolean;
    priceFeedAddress: string;
    priceFeedPrecision: number;
}
