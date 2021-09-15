export declare const PAYMENT_ABI: ({
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
    anonymous?: undefined;
    name?: undefined;
    outputs?: undefined;
} | {
    anonymous: boolean;
    inputs: {
        indexed: boolean;
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    type: string;
    stateMutability?: undefined;
    outputs?: undefined;
} | {
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
    anonymous?: undefined;
})[];
export declare const ERC20_ABI: ({
    type: string;
    stateMutability: string;
    inputs: never[];
    name?: undefined;
    anonymous?: undefined;
    outputs?: undefined;
} | {
    type: string;
    name: string;
    inputs: {
        type: string;
        name: string;
        internalType: string;
        indexed: boolean;
    }[];
    anonymous: boolean;
    stateMutability?: undefined;
    outputs?: undefined;
} | {
    type: string;
    stateMutability: string;
    outputs: {
        type: string;
        name: string;
        internalType: string;
    }[];
    name: string;
    inputs: {
        type: string;
        name: string;
        internalType: string;
    }[];
    anonymous?: undefined;
})[];
export declare const SUBSCRIPTION_PAYMENT_ABI: ({
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
    anonymous?: undefined;
    name?: undefined;
    outputs?: undefined;
} | {
    anonymous: boolean;
    inputs: {
        indexed: boolean;
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    type: string;
    stateMutability?: undefined;
    outputs?: undefined;
} | {
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: never[];
    stateMutability: string;
    type: string;
    anonymous?: undefined;
} | {
    inputs: never[];
    name: string;
    outputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
    anonymous?: undefined;
})[];
export declare const SUBSCRIPTION_DATA_ABI: ({
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
    anonymous?: undefined;
    name?: undefined;
    outputs?: undefined;
} | {
    anonymous: boolean;
    inputs: {
        indexed: boolean;
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    type: string;
    stateMutability?: undefined;
    outputs?: undefined;
} | {
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
    anonymous?: undefined;
})[];
export declare const metaTransactionType: {
    name: string;
    type: string;
}[];
export declare const domainType: {
    name: string;
    type: string;
}[];
export declare const ERC20Interface: string[];
