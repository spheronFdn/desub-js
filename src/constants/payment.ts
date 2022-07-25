export const PAYMENT_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'u',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'e',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'slabAmounts_',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'slabPercents_',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256',
        name: 'b',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'p',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 's',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'ChangeOwner',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'feeCharged',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'feeWithoutDiscount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'escrow',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'providerQuote',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'providerCharged',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'provider',
        type: 'string',
      },
    ],
    name: 'ChargeWithProvider',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'feeCharged',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'feeWithoutDiscount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'escrow',
        type: 'address',
      },
    ],
    name: 'ChargeWithoutProvider',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'managers',
        type: 'address[]',
      },
    ],
    name: 'RemoveManagers',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'managers',
        type: 'address[]',
      },
    ],
    name: 'SetManagers',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    inputs: [],
    name: 'buildTimeRate',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'r',
        type: 'uint256',
      },
    ],
    name: 'changeBuildTimeRate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'o',
        type: 'address',
      },
    ],
    name: 'changeOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'u',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'b',
        type: 'uint256',
      },
    ],
    name: 'charge',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'u',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'b',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'd',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'providerQuote',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'providerCharged',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'provider',
        type: 'string',
      },
    ],
    name: 'chargeWithProvider',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'disableDiscounts',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'discountSlabs',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'percent',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'discountsEnabled',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 's',
        type: 'address',
      },
    ],
    name: 'enableDiscounts',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'escrow',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getManagers',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getUnderlyingPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'governanceAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'managerByAddress',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'managers',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'm',
        type: 'address[]',
      },
    ],
    name: 'removeManagers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'g',
        type: 'address',
      },
    ],
    name: 'setGovernanceAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'm',
        type: 'address[]',
      },
    ],
    name: 'setManagers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakedToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakingManager',
    outputs: [
      {
        internalType: 'contract IStaking',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'underlying',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'slabAmounts_',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'slabPercents_',
        type: 'uint256[]',
      },
    ],
    name: 'updateDiscountSlabs',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'e',
        type: 'address',
      },
    ],
    name: 'updateEscrow',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'o',
        type: 'address',
      },
    ],
    name: 'updateFeederAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 's',
        type: 'address',
      },
    ],
    name: 'updateStakedToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'u',
        type: 'address',
      },
    ],
    name: 'updateToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'u',
        type: 'address',
      },
    ],
    name: 'updateUnderlyingToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 't',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'a',
        type: 'uint256',
      },
    ],
    name: 'withdrawERC20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
export const ERC20_ABI = [
  {
    type: 'constructor',
    stateMutability: 'nonpayable',
    inputs: [],
  },
  {
    type: 'event',
    name: 'Approval',
    inputs: [
      {
        type: 'address',
        name: 'owner',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'address',
        name: 'spender',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'uint256',
        name: 'value',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'MetaTransactionExecuted',
    inputs: [
      {
        type: 'address',
        name: 'userAddress',
        internalType: 'address',
        indexed: false,
      },
      {
        type: 'address',
        name: 'relayerAddress',
        internalType: 'address payable',
        indexed: false,
      },
      {
        type: 'bytes',
        name: 'functionSignature',
        internalType: 'bytes',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RoleAdminChanged',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
        indexed: true,
      },
      {
        type: 'bytes32',
        name: 'previousAdminRole',
        internalType: 'bytes32',
        indexed: true,
      },
      {
        type: 'bytes32',
        name: 'newAdminRole',
        internalType: 'bytes32',
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RoleGranted',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
        indexed: true,
      },
      {
        type: 'address',
        name: 'account',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'address',
        name: 'sender',
        internalType: 'address',
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RoleRevoked',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
        indexed: true,
      },
      {
        type: 'address',
        name: 'account',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'address',
        name: 'sender',
        internalType: 'address',
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Transfer',
    inputs: [
      {
        type: 'address',
        name: 'from',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'address',
        name: 'to',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'uint256',
        name: 'value',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'CHILD_CHAIN_ID',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'bytes',
        name: '',
        internalType: 'bytes',
      },
    ],
    name: 'CHILD_CHAIN_ID_BYTES',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'bytes32',
        name: '',
        internalType: 'bytes32',
      },
    ],
    name: 'DEFAULT_ADMIN_ROLE',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'bytes32',
        name: '',
        internalType: 'bytes32',
      },
    ],
    name: 'DEPOSITOR_ROLE',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'string',
        name: '',
        internalType: 'string',
      },
    ],
    name: 'ERC712_VERSION',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'ROOT_CHAIN_ID',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'bytes',
        name: '',
        internalType: 'bytes',
      },
    ],
    name: 'ROOT_CHAIN_ID_BYTES',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'allowance',
    inputs: [
      {
        type: 'address',
        name: 'owner',
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'spender',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    name: 'approve',
    inputs: [
      {
        type: 'address',
        name: 'spender',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'balanceOf',
    inputs: [
      {
        type: 'address',
        name: 'account',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint8',
        name: '',
        internalType: 'uint8',
      },
    ],
    name: 'decimals',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    name: 'decreaseAllowance',
    inputs: [
      {
        type: 'address',
        name: 'spender',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'subtractedValue',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'deposit',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
      },
      {
        type: 'bytes',
        name: 'depositData',
        internalType: 'bytes',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'payable',
    outputs: [
      {
        type: 'bytes',
        name: '',
        internalType: 'bytes',
      },
    ],
    name: 'executeMetaTransaction',
    inputs: [
      {
        type: 'address',
        name: 'userAddress',
        internalType: 'address',
      },
      {
        type: 'bytes',
        name: 'functionSignature',
        internalType: 'bytes',
      },
      {
        type: 'bytes32',
        name: 'sigR',
        internalType: 'bytes32',
      },
      {
        type: 'bytes32',
        name: 'sigS',
        internalType: 'bytes32',
      },
      {
        type: 'uint8',
        name: 'sigV',
        internalType: 'uint8',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'pure',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'getChainId',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'bytes32',
        name: '',
        internalType: 'bytes32',
      },
    ],
    name: 'getDomainSeperator',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: 'nonce',
        internalType: 'uint256',
      },
    ],
    name: 'getNonce',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'bytes32',
        name: '',
        internalType: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    name: 'getRoleMember',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
      },
      {
        type: 'uint256',
        name: 'index',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'getRoleMemberCount',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'grantRole',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
      },
      {
        type: 'address',
        name: 'account',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    name: 'hasRole',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
      },
      {
        type: 'address',
        name: 'account',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    name: 'increaseAllowance',
    inputs: [
      {
        type: 'address',
        name: 'spender',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'addedValue',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'initialize',
    inputs: [
      {
        type: 'string',
        name: 'name_',
        internalType: 'string',
      },
      {
        type: 'string',
        name: 'symbol_',
        internalType: 'string',
      },
      {
        type: 'uint8',
        name: 'decimals_',
        internalType: 'uint8',
      },
      {
        type: 'address',
        name: 'childChainManager',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'string',
        name: '',
        internalType: 'string',
      },
    ],
    name: 'name',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'renounceRole',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
      },
      {
        type: 'address',
        name: 'account',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'revokeRole',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
      },
      {
        type: 'address',
        name: 'account',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'string',
        name: '',
        internalType: 'string',
      },
    ],
    name: 'symbol',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'totalSupply',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    name: 'transfer',
    inputs: [
      {
        type: 'address',
        name: 'recipient',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    name: 'transferFrom',
    inputs: [
      {
        type: 'address',
        name: 'sender',
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'recipient',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'withdraw',
    inputs: [
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
    ],
  },
]
export const SUBSCRIPTION_PAYMENT_ABI = [
  {
    "_format": "hh-sol-artifact-1",
    "contractName": "SubscriptionDePay",
    "sourceName": "contracts/SubscriptionDePay.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_treasury",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_company",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_data",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_trustedForwarder",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "name": "CompanyWithdraw",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "fee",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "name": "UserCharged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "deposit",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "name": "UserDeposit",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "name": "UserWithdraw",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "changeDepositStatus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "u",
            "type": "address"
          },
          {
            "internalType": "string[]",
            "name": "p",
            "type": "string[]"
          },
          {
            "internalType": "uint256[]",
            "name": "v",
            "type": "uint256[]"
          },
          {
            "internalType": "address",
            "name": "t",
            "type": "address"
          }
        ],
        "name": "chargeUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "companyRevenue",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "companyWithdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "t",
            "type": "address"
          }
        ],
        "name": "getTotalCharges",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "t",
            "type": "address"
          }
        ],
        "name": "getTotalDeposit",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "t",
            "type": "address"
          }
        ],
        "name": "getTotalWithdraws",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          }
        ],
        "name": "getUserData",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "deposit",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
              },
              {
                "internalType": "uint256[]",
                "name": "charges",
                "type": "uint256[]"
              }
            ],
            "internalType": "struct SubscriptionDePay.UserData",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "forwarder",
            "type": "address"
          }
        ],
        "name": "isTrustedForwarder",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "pauseDeposit",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "pauseWithdrawal",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_company",
            "type": "address"
          }
        ],
        "name": "setCompany",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_treasury",
            "type": "address"
          }
        ],
        "name": "setTreasury",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_forwarder",
            "type": "address"
          }
        ],
        "name": "setTrustedForwarder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "subscriptionData",
        "outputs": [
          {
            "internalType": "contract ISubscriptionData",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "totalCharges",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "totalDeposit",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "totalWithdraws",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "d",
            "type": "address"
          }
        ],
        "name": "updateDataContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "userData",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "deposit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "userDeposit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "userWithdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x60806040523480156200001157600080fd5b50604051620057893803806200578983398181016040528101906200003791906200046a565b80620000586200004c620002c760201b60201c565b620002e360201b60201c565b6001808190555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141562000114576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200010b906200058f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141562000187576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200017e906200054b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620001fa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001f1906200056d565b60405180910390fd5b81600660026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505062000723565b6000620002de620003a760201b620028a71760201c565b905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000620003ba33620003f160201b60201c565b15620003d057601436033560601c9050620003ed565b620003e56200044b60201b620028d91760201c565b9050620003ee565b5b90565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b600033905090565b600081519050620004648162000709565b92915050565b600080600080608085870312156200048157600080fd5b6000620004918782880162000453565b9450506020620004a48782880162000453565b9350506040620004b78782880162000453565b9250506060620004ca8782880162000453565b91505092959194509250565b6000620004e5603883620005b1565b9150620004f282620005f6565b604082019050919050565b60006200050c604a83620005b1565b9150620005198262000645565b606082019050919050565b600062000533603983620005b1565b91506200054082620006ba565b604082019050919050565b600060208201905081810360008301526200056681620004d6565b9050919050565b600060208201905081810360008301526200058881620004fd565b9050919050565b60006020820190508181036000830152620005aa8162000524565b9050919050565b600082825260208201905092915050565b6000620005cf82620005d6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20496e7660008201527f616c6964206164647265737320666f7220636f6d70616e790000000000000000602082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20496e7660008201527f616c69642061646472657373206f6620737562736372697074696f6e2064617460208201527f6120636f6e747261637400000000000000000000000000000000000000000000604082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20496e7660008201527f616c6964206164647265737320666f7220747265617375727900000000000000602082015250565b6200071481620005c2565b81146200072057600080fd5b50565b61505680620007336000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80639c69c782116100de578063d2abc39311610097578063e8a0006a11610071578063e8a0006a1461045b578063f0f4426014610479578063f2fde38b14610495578063f4eeefe9146104b157610173565b8063d2abc393146103f3578063d4e036c314610423578063da7422281461043f57610173565b80639c69c78214610347578063a8db244514610365578063b46610dd14610381578063b52d73431461038b578063b896a2a0146103a7578063c79fd184146103c357610173565b806369026e881161013057806369026e8814610270578063715018a61461028e578063768e5b2714610298578063850a460b146102c9578063857184d1146102f95780638da5cb5b1461032957610173565b80631084e8121461017857806323b46798146101a85780632f6c7499146101c45780633e458a8e146101f4578063572b6c051461021057806358ae65df14610240575b600080fd5b610192600480360381019061018d919061380a565b6104e1565b60405161019f919061429c565b60405180910390f35b6101c260048036038101906101bd9190613898565b6104f9565b005b6101de60048036038101906101d9919061380a565b610c8d565b6040516101eb919061429c565b60405180910390f35b61020e6004803603810190610209919061392b565b610cd6565b005b61022a6004803603810190610225919061380a565b6112ab565b6040516102379190613fa2565b60405180910390f35b61025a6004803603810190610255919061380a565b611305565b604051610267919061429c565b60405180910390f35b61027861131d565b6040516102859190613fa2565b60405180910390f35b610296611330565b005b6102b260048036038101906102ad919061385c565b6113b8565b6040516102c09291906142b7565b60405180910390f35b6102e360048036038101906102de919061380a565b6113e9565b6040516102f0919061429c565b60405180910390f35b610313600480360381019061030e919061380a565b611401565b604051610320919061429c565b60405180910390f35b61033161144a565b60405161033e9190613f27565b60405180910390f35b61034f611473565b60405161035c9190613fa2565b60405180910390f35b61037f600480360381019061037a919061380a565b611486565b005b61038961160b565b005b6103a560048036038101906103a0919061392b565b611778565b005b6103c160048036038101906103bc919061380a565b611cb1565b005b6103dd60048036038101906103d8919061380a565b611ea6565b6040516103ea919061429c565b60405180910390f35b61040d6004803603810190610408919061380a565b611eef565b60405161041a919061429c565b60405180910390f35b61043d6004803603810190610438919061392b565b611f07565b005b6104596004803603810190610454919061380a565b6123b4565b005b610463612501565b6040516104709190613fbd565b60405180910390f35b610493600480360381019061048e919061380a565b612527565b005b6104af60048036038101906104aa919061380a565b6126ac565b005b6104cb60048036038101906104c6919061385c565b6127a4565b6040516104d8919061427a565b60405180910390f35b60076020528060005260406000206000915090505481565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da6105416128e1565b6040518263ffffffff1660e01b815260040161055d9190613f27565b60206040518083038186803b15801561057557600080fd5b505afa158015610589573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ad91906139a8565b905060006105b961144a565b905081806105f957508073ffffffffffffffffffffffffffffffffffffffff166105e16128e1565b73ffffffffffffffffffffffffffffffffffffffff16145b610638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062f9061411a565b60405180910390fd5b835185511461067c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106739061409a565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f846040518263ffffffff1660e01b81526004016106d79190613f27565b602060405180830381600087803b1580156106f157600080fd5b505af1158015610705573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072991906139a8565b610768576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075f9061425a565b60405180910390fd5b6000805b86518110156108c857600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166314de7a248883815181106107ec577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040518263ffffffff1660e01b81526004016108109190613fd8565b60206040518083038186803b15801561082857600080fd5b505afa15801561083c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108609190613ab0565b868281518110610899577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516108ab919061471f565b826108b69190614430565b91506108c1816128f0565b905061076c565b5060006108d588836128fd565b826108e091906147fd565b905060006108ee8287612dda565b9050600560008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548111156109b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a99061405a565b60405180910390fd5b80600560008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254610a4191906147fd565b92505081905550600560008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181908060018154018082558091505060019003906000526020600020016000909190919091505580600860008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b3d9190614430565b9250508190555080600a60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b939190614430565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff167f3ff1b63ceb7893702efd8bc1c62ed51d1ae1e3818055fff02b7051e9b5dadfb88342600560008f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154604051610c7a939291906142e0565b60405180910390a3505050505050505050565b6000600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60026001541415610d1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d139061423a565b60405180910390fd5b6002600181905550600660019054906101000a900460ff1615610d74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6b9061421a565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f836040518263ffffffff1660e01b8152600401610dcf9190613f27565b602060405180830381600087803b158015610de957600080fd5b505af1158015610dfd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2191906139a8565b610e60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e579061425a565b60405180910390fd5b60008111610ea3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9a90613ffa565b60405180910390fd5b60056000610eaf6128e1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154811115610f6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f639061407a565b60405180910390fd5b6000829050818173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff1660e01b8152600401610fcf929190613f42565b60206040518083038186803b158015610fe757600080fd5b505afa158015610ffb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101f9190613ab0565b1015611060576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611057906140fa565b60405180910390fd5b816005600061106d6128e1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282546110f691906147fd565b9250508190555081600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461114c9190614430565b925050819055506111a9600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166111816128e1565b848473ffffffffffffffffffffffffffffffffffffffff16613027909392919063ffffffff16565b8273ffffffffffffffffffffffffffffffffffffffff166111c86128e1565b73ffffffffffffffffffffffffffffffffffffffff167f37c44099063b557f274cbbe8d16f0be5e98e5766f58fa209aefe92fbdc3a486584426005600061120d6128e1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154604051611297939291906142e0565b60405180910390a350600180819055505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b600a6020528060005260406000206000915090505481565b600660009054906101000a900460ff1681565b6113386128e1565b73ffffffffffffffffffffffffffffffffffffffff1661135661144a565b73ffffffffffffffffffffffffffffffffffffffff16146113ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a39061415a565b60405180910390fd5b6113b660006130b0565b565b6005602052816000526040600020602052806000526040600020600091509150508060000154908060010154905082565b60086020528060005260406000206000915090505481565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600660019054906101000a900460ff1681565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da6114ce6128e1565b6040518263ffffffff1660e01b81526004016114ea9190613f27565b60206040518083038186803b15801561150257600080fd5b505afa158015611516573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061153a91906139a8565b9050600061154661144a565b9050818061158657508073ffffffffffffffffffffffffffffffffffffffff1661156e6128e1565b73ffffffffffffffffffffffffffffffffffffffff16145b6115c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115bc9061411a565b60405180910390fd5b82600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da6116536128e1565b6040518263ffffffff1660e01b815260040161166f9190613f27565b60206040518083038186803b15801561168757600080fd5b505afa15801561169b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116bf91906139a8565b905060006116cb61144a565b9050818061170b57508073ffffffffffffffffffffffffffffffffffffffff166116f36128e1565b73ffffffffffffffffffffffffffffffffffffffff16145b61174a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117419061411a565b60405180910390fd5b600660009054906101000a900460ff1615600660006101000a81548160ff0219169083151502179055505050565b600660009054906101000a900460ff16156117c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117bf906141fa565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f836040518263ffffffff1660e01b81526004016118239190613f27565b602060405180830381600087803b15801561183d57600080fd5b505af1158015611851573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061187591906139a8565b6118b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ab9061425a565b60405180910390fd5b600081116118f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ee906141ba565b60405180910390fd5b6000829050818173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e6119216128e1565b306040518363ffffffff1660e01b815260040161193f929190613f42565b60206040518083038186803b15801561195757600080fd5b505afa15801561196b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198f9190613ab0565b10156119d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119c7906140fa565b60405180910390fd5b611a266119db6128e1565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848473ffffffffffffffffffffffffffffffffffffffff16613027909392919063ffffffff16565b81600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611a759190614430565b925050819055508160056000611a896128e1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254611b129190614430565b925050819055508160056000611b266128e1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254611baf9190614430565b925050819055508273ffffffffffffffffffffffffffffffffffffffff16611bd56128e1565b73ffffffffffffffffffffffffffffffffffffffff167f5bd6fa89c0f1c24722e2912bb922f863301d0de84eb3e143e932c6c96d70cef8844260056000611c1a6128e1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154604051611ca4939291906142e0565b60405180910390a3505050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da611cf96128e1565b6040518263ffffffff1660e01b8152600401611d159190613f27565b60206040518083038186803b158015611d2d57600080fd5b505afa158015611d41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d6591906139a8565b90506000611d7161144a565b90508180611db157508073ffffffffffffffffffffffffffffffffffffffff16611d996128e1565b73ffffffffffffffffffffffffffffffffffffffff16145b611df0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611de79061411a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611e60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e579061413a565b60405180910390fd5b82600660026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60096020528060005260406000206000915090505481565b60026001541415611f4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f449061423a565b60405180910390fd5b6002600181905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611f966128e1565b73ffffffffffffffffffffffffffffffffffffffff1614611fec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fe39061401a565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f836040518263ffffffff1660e01b81526004016120479190613f27565b602060405180830381600087803b15801561206157600080fd5b505af1158015612075573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061209991906139a8565b6120d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120cf9061425a565b60405180910390fd5b6000811161211b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612112906140ba565b60405180910390fd5b600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481111561219d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121949061417a565b60405180910390fd5b6000829050818173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff1660e01b8152600401612200929190613f42565b60206040518083038186803b15801561221857600080fd5b505afa15801561222c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122509190613ab0565b1015612291576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612288906140fa565b60405180910390fd5b81600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546122e091906147fd565b92505081905550612358600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848473ffffffffffffffffffffffffffffffffffffffff16613027909392919063ffffffff16565b8273ffffffffffffffffffffffffffffffffffffffff167f7e59a6447b0e9f5c07c4722567993a64e2c9edf87ae19ce5d9bbab1659312f0383426040516123a09291906142b7565b60405180910390a250600180819055505050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da6123fc6128e1565b6040518263ffffffff1660e01b81526004016124189190613f27565b60206040518083038186803b15801561243057600080fd5b505afa158015612444573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061246891906139a8565b9050600061247461144a565b905081806124b457508073ffffffffffffffffffffffffffffffffffffffff1661249c6128e1565b73ffffffffffffffffffffffffffffffffffffffff16145b6124f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124ea9061411a565b60405180910390fd5b6124fc83613174565b505050565b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da61256f6128e1565b6040518263ffffffff1660e01b815260040161258b9190613f27565b60206040518083038186803b1580156125a357600080fd5b505afa1580156125b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125db91906139a8565b905060006125e761144a565b9050818061262757508073ffffffffffffffffffffffffffffffffffffffff1661260f6128e1565b73ffffffffffffffffffffffffffffffffffffffff16145b612666576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161265d9061411a565b60405180910390fd5b82600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6126b46128e1565b73ffffffffffffffffffffffffffffffffffffffff166126d261144a565b73ffffffffffffffffffffffffffffffffffffffff1614612728576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161271f9061415a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161278f9061403a565b60405180910390fd5b6127a1816130b0565b50565b6127ac6134bf565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820180548060200260200160405190810160405280929190818152602001828054801561289657602002820191906000526020600020905b815481526020019060010190808311612882575b505050505081525050905092915050565b60006128b2336112ab565b156128c657601436033560601c90506128d5565b6128ce6128d9565b90506128d6565b5b90565b600033905090565b60006128eb6128a7565b905090565b6000600182019050919050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633648572d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561296757600080fd5b505afa15801561297b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061299f91906139a8565b6129ac5760009050612dd4565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166322828cc26040518163ffffffff1660e01b815260040160206040518083038186803b158015612a1657600080fd5b505afa158015612a2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a4e9190613833565b905060008173ffffffffffffffffffffffffffffffffffffffff1663f7888aec86600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cc7a262e6040518163ffffffff1660e01b815260040160206040518083038186803b158015612ad757600080fd5b505afa158015612aeb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b0f9190613833565b6040518363ffffffff1660e01b8152600401612b2c929190613f42565b60206040518083038186803b158015612b4457600080fd5b505afa158015612b58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b7c9190613ab0565b90506000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637aa781226040518163ffffffff1660e01b815260040160006040518083038186803b158015612be857600080fd5b505afa158015612bfc573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190612c259190613967565b90506000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663eb5762fd6040518163ffffffff1660e01b815260040160006040518083038186803b158015612c9157600080fd5b505afa158015612ca5573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190612cce9190613967565b90506000825190506000805b82811015612d8657848181518110612d1b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518610612d7157838181518110612d62577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519150612d76565b612d86565b612d7f816128f0565b9050612cda565b506a084595161401484a0000006064612d9f919061471f565b6a084595161401484a000000828a612db7919061471f565b612dc1919061471f565b612dcb9190614486565b96505050505050505b92915050565b600080600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166382dc4a05846040518263ffffffff1660e01b8152600401612e389190613f27565b600060405180830381600087803b158015612e5257600080fd5b505af1158015612e66573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190612e8f91906139d1565b5050505050915050600081600a612ea6919061450a565b9050612f5485600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634dfeeaad6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015612f1657600080fd5b505af1158015612f2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f4e9190613a87565b846131b8565b94506000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc57d4df866040518263ffffffff1660e01b8152600401612fb39190613f27565b60206040518083038186803b158015612fcb57600080fd5b505afa158015612fdf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130039190613ab0565b9050808287613012919061471f565b61301c9190614486565b935050505092915050565b6130aa846323b872dd60e01b85858560405160240161304893929190613f6b565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613252565b50505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008082846131c79190614779565b9050600081600f0b13156131f45780600a6131e2919061450a565b856131ed9190614486565b9450613247565b600081600f0b121561324657807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61322c9190614628565b600a613238919061450a565b85613243919061471f565b94505b5b849150509392505050565b60006132b4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166133199092919063ffffffff16565b905060008151111561331457808060200190518101906132d491906139a8565b613313576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161330a906141da565b60405180910390fd5b5b505050565b60606133288484600085613331565b90509392505050565b606082471015613376576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161336d906140da565b60405180910390fd5b61337f85613445565b6133be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016133b59061419a565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516133e79190613f10565b60006040518083038185875af1925050503d8060008114613424576040519150601f19603f3d011682016040523d82523d6000602084013e613429565b606091505b5091509150613439828286613458565b92505050949350505050565b600080823b905060008111915050919050565b60608315613468578290506134b8565b60008351111561347b5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016134af9190613fd8565b60405180910390fd5b9392505050565b60405180606001604052806000815260200160008152602001606081525090565b60006134f36134ee8461433c565b614317565b9050808382526020820190508285602086028201111561351257600080fd5b60005b8581101561355c57813567ffffffffffffffff81111561353457600080fd5b8086016135418982613777565b85526020850194506020840193505050600181019050613515565b5050509392505050565b600061357961357484614368565b614317565b9050808382526020820190508285602086028201111561359857600080fd5b60005b858110156135c857816135ae88826137e0565b84526020840193506020830192505060018101905061359b565b5050509392505050565b60006135e56135e084614368565b614317565b9050808382526020820190508285602086028201111561360457600080fd5b60005b85811015613634578161361a88826137f5565b845260208401935060208301925050600181019050613607565b5050509392505050565b600061365161364c84614394565b614317565b90508281526020810184848401111561366957600080fd5b6136748482856148c6565b509392505050565b600061368f61368a84614394565b614317565b9050828152602081018484840111156136a757600080fd5b6136b28482856148d5565b509392505050565b6000813590506136c981614fc4565b92915050565b6000815190506136de81614fc4565b92915050565b600082601f8301126136f557600080fd5b81356137058482602086016134e0565b91505092915050565b600082601f83011261371f57600080fd5b813561372f848260208601613566565b91505092915050565b600082601f83011261374957600080fd5b81516137598482602086016135d2565b91505092915050565b60008151905061377181614fdb565b92915050565b600082601f83011261378857600080fd5b813561379884826020860161363e565b91505092915050565b600082601f8301126137b257600080fd5b81516137c284826020860161367c565b91505092915050565b6000815190506137da81614ff2565b92915050565b6000813590506137ef81615009565b92915050565b60008151905061380481615009565b92915050565b60006020828403121561381c57600080fd5b600061382a848285016136ba565b91505092915050565b60006020828403121561384557600080fd5b6000613853848285016136cf565b91505092915050565b6000806040838503121561386f57600080fd5b600061387d858286016136ba565b925050602061388e858286016136ba565b9150509250929050565b600080600080608085870312156138ae57600080fd5b60006138bc878288016136ba565b945050602085013567ffffffffffffffff8111156138d957600080fd5b6138e5878288016136e4565b935050604085013567ffffffffffffffff81111561390257600080fd5b61390e8782880161370e565b925050606061391f878288016136ba565b91505092959194509250565b6000806040838503121561393e57600080fd5b600061394c858286016136ba565b925050602061395d858286016137e0565b9150509250929050565b60006020828403121561397957600080fd5b600082015167ffffffffffffffff81111561399357600080fd5b61399f84828501613738565b91505092915050565b6000602082840312156139ba57600080fd5b60006139c884828501613762565b91505092915050565b600080600080600080600060e0888a0312156139ec57600080fd5b600088015167ffffffffffffffff811115613a0657600080fd5b613a128a828b016137a1565b9750506020613a238a828b016137cb565b9650506040613a348a828b016136cf565b9550506060613a458a828b01613762565b9450506080613a568a828b01613762565b93505060a0613a678a828b016136cf565b92505060c0613a788a828b016137cb565b91505092959891949750929550565b600060208284031215613a9957600080fd5b6000613aa7848285016137cb565b91505092915050565b600060208284031215613ac257600080fd5b6000613ad0848285016137f5565b91505092915050565b6000613ae58383613ef2565b60208301905092915050565b613afa81614831565b82525050565b6000613b0b826143d5565b613b158185614403565b9350613b20836143c5565b8060005b83811015613b51578151613b388882613ad9565b9750613b43836143f6565b925050600181019050613b24565b5085935050505092915050565b613b6781614843565b82525050565b6000613b78826143e0565b613b828185614414565b9350613b928185602086016148d5565b80840191505092915050565b613ba7816148a2565b82525050565b6000613bb8826143eb565b613bc2818561441f565b9350613bd28185602086016148d5565b613bdb816149c6565b840191505092915050565b6000613bf3603d8361441f565b9150613bfe826149e4565b604082019050919050565b6000613c1660188361441f565b9150613c2182614a33565b602082019050919050565b6000613c3960268361441f565b9150613c4482614a5c565b604082019050919050565b6000613c5c60518361441f565b9150613c6782614aab565b606082019050919050565b6000613c7f604e8361441f565b9150613c8a82614b20565b606082019050919050565b6000613ca260348361441f565b9150613cad82614b95565b604082019050919050565b6000613cc560318361441f565b9150613cd082614be4565b604082019050919050565b6000613ce860268361441f565b9150613cf382614c33565b604082019050919050565b6000613d0b60278361441f565b9150613d1682614c82565b604082019050919050565b6000613d2e602d8361441f565b9150613d3982614cd1565b604082019050919050565b6000613d51604a8361441f565b9150613d5c82614d20565b606082019050919050565b6000613d7460208361441f565b9150613d7f82614d95565b602082019050919050565b6000613d97604f8361441f565b9150613da282614dbe565b606082019050919050565b6000613dba601d8361441f565b9150613dc582614e33565b602082019050919050565b6000613ddd603e8361441f565b9150613de882614e5c565b604082019050919050565b6000613e00602a8361441f565b9150613e0b82614eab565b604082019050919050565b6000613e2360118361441f565b9150613e2e82614efa565b602082019050919050565b6000613e4660148361441f565b9150613e5182614f23565b602082019050919050565b6000613e69601f8361441f565b9150613e7482614f4c565b602082019050919050565b6000613e8c602f8361441f565b9150613e9782614f75565b604082019050919050565b6000606083016000830151613eba6000860182613ef2565b506020830151613ecd6020860182613ef2565b5060408301518482036040860152613ee58282613b00565b9150508091505092915050565b613efb81614898565b82525050565b613f0a81614898565b82525050565b6000613f1c8284613b6d565b915081905092915050565b6000602082019050613f3c6000830184613af1565b92915050565b6000604082019050613f576000830185613af1565b613f646020830184613af1565b9392505050565b6000606082019050613f806000830186613af1565b613f8d6020830185613af1565b613f9a6040830184613f01565b949350505050565b6000602082019050613fb76000830184613b5e565b92915050565b6000602082019050613fd26000830184613b9e565b92915050565b60006020820190508181036000830152613ff28184613bad565b905092915050565b6000602082019050818103600083015261401381613be6565b9050919050565b6000602082019050818103600083015261403381613c09565b9050919050565b6000602082019050818103600083015261405381613c2c565b9050919050565b6000602082019050818103600083015261407381613c4f565b9050919050565b6000602082019050818103600083015261409381613c72565b9050919050565b600060208201905081810360008301526140b381613c95565b9050919050565b600060208201905081810360008301526140d381613cb8565b9050919050565b600060208201905081810360008301526140f381613cdb565b9050919050565b6000602082019050818103600083015261411381613cfe565b9050919050565b6000602082019050818103600083015261413381613d21565b9050919050565b6000602082019050818103600083015261415381613d44565b9050919050565b6000602082019050818103600083015261417381613d67565b9050919050565b6000602082019050818103600083015261419381613d8a565b9050919050565b600060208201905081810360008301526141b381613dad565b9050919050565b600060208201905081810360008301526141d381613dd0565b9050919050565b600060208201905081810360008301526141f381613df3565b9050919050565b6000602082019050818103600083015261421381613e16565b9050919050565b6000602082019050818103600083015261423381613e39565b9050919050565b6000602082019050818103600083015261425381613e5c565b9050919050565b6000602082019050818103600083015261427381613e7f565b9050919050565b600060208201905081810360008301526142948184613ea2565b905092915050565b60006020820190506142b16000830184613f01565b92915050565b60006040820190506142cc6000830185613f01565b6142d96020830184613f01565b9392505050565b60006060820190506142f56000830186613f01565b6143026020830185613f01565b61430f6040830184613f01565b949350505050565b6000614321614332565b905061432d8282614908565b919050565b6000604051905090565b600067ffffffffffffffff82111561435757614356614997565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561438357614382614997565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156143af576143ae614997565b5b6143b8826149c6565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061443b82614898565b915061444683614898565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561447b5761447a614939565b5b828201905092915050565b600061449182614898565b915061449c83614898565b9250826144ac576144ab614968565b5b828204905092915050565b6000808291508390505b6001851115614501578086048111156144dd576144dc614939565b5b60018516156144ec5780820291505b80810290506144fa856149d7565b94506144c1565b94509492505050565b600061451582614898565b91506145208361485c565b925061454d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484614555565b905092915050565b6000826145655760019050614621565b816145735760009050614621565b81600181146145895760028114614593576145c2565b6001915050614621565b60ff8411156145a5576145a4614939565b5b8360020a9150848211156145bc576145bb614939565b5b50614621565b5060208310610133831016604e8410600b84101617156145f75782820a9050838111156145f2576145f1614939565b5b614621565b61460484848460016144b7565b9250905081840481111561461b5761461a614939565b5b81810290505b9392505050565b60006146338261484f565b915061463e8361484f565b9250826f7fffffffffffffffffffffffffffffff048211600084136000841316161561466d5761466c614939565b5b817fffffffffffffffffffffffffffffffff8000000000000000000000000000000005831260008412600084131616156146aa576146a9614939565b5b827fffffffffffffffffffffffffffffffff8000000000000000000000000000000005821260008413600084121616156146e7576146e6614939565b5b826f7fffffffffffffffffffffffffffffff058212600084126000841216161561471457614713614939565b5b828202905092915050565b600061472a82614898565b915061473583614898565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561476e5761476d614939565b5b828202905092915050565b60006147848261484f565b915061478f8361484f565b9250827fffffffffffffffffffffffffffffffff80000000000000000000000000000000018212600084121516156147ca576147c9614939565b5b826f7fffffffffffffffffffffffffffffff0182136000841216156147f2576147f1614939565b5b828203905092915050565b600061480882614898565b915061481383614898565b92508282101561482657614825614939565b5b828203905092915050565b600061483c82614878565b9050919050565b60008115159050919050565b600081600f0b9050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006148ad826148b4565b9050919050565b60006148bf82614878565b9050919050565b82818337600083830152505050565b60005b838110156148f35780820151818401526020810190506148d8565b83811115614902576000848401525b50505050565b614911826149c6565b810181811067ffffffffffffffff821117156149305761492f614997565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20416d6f60008201527f756e74206d7573742062652067726561746572207468616e207a65726f000000602082015250565b7f4f6e6c792063616c6c61626c6520627920636f6d70616e790000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2042616c60008201527f616e6365206d757374206265206c657373207468616e206f7220657175616c2060208201527f746f20616d6f756e742063686172676564000000000000000000000000000000604082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20416d6f60008201527f756e74206d757374206265206c657373207468616e206f7220657175616c207460208201527f6f20757365722062616c616e6365000000000000000000000000000000000000604082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20756e6560008201527f7175616c206c656e677468206f66206172726179000000000000000000000000602082015250565b7f53706865726f6e5061796d656e74733a20416d6f756e74206d7573742062652060008201527f67726561746572207468616e207a65726f000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f53706865726f6e5061796d656e74733a20496e73756666696369656e7420616c60008201527f6c6f77616e636500000000000000000000000000000000000000000000000000602082015250565b7f4f6e6c79206d616e6167657220616e64206f776e65722063616e2063616c6c2060008201527f746869732066756e6374696f6e00000000000000000000000000000000000000602082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2064617460008201527f6120636f6e747261637420616464726573732063616e206e6f74206265207a6560208201527f726f206164647265737300000000000000000000000000000000000000000000604082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2042616c60008201527f616e6365206d757374206265206c657373207468616e206f7220657175616c2060208201527f746f20757365722062616c616e63650000000000000000000000000000000000604082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2044657060008201527f6f736974206d7573742062652067726561746572207468616e207a65726f0000602082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f4465706f73697420697320706175736564000000000000000000000000000000600082015250565b7f5769746864726177616c20697320706175736564000000000000000000000000600082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20546f6b60008201527f656e206e6f742061636365707465640000000000000000000000000000000000602082015250565b614fcd81614831565b8114614fd857600080fd5b50565b614fe481614843565b8114614fef57600080fd5b50565b614ffb8161485c565b811461500657600080fd5b50565b61501281614898565b811461501d57600080fd5b5056fea2646970667358221220250adc4a3d573364ed7c857e975ad6f9cb5aae48882cba30b29f30b1aeadea9464736f6c63430008040033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101735760003560e01c80639c69c782116100de578063d2abc39311610097578063e8a0006a11610071578063e8a0006a1461045b578063f0f4426014610479578063f2fde38b14610495578063f4eeefe9146104b157610173565b8063d2abc393146103f3578063d4e036c314610423578063da7422281461043f57610173565b80639c69c78214610347578063a8db244514610365578063b46610dd14610381578063b52d73431461038b578063b896a2a0146103a7578063c79fd184146103c357610173565b806369026e881161013057806369026e8814610270578063715018a61461028e578063768e5b2714610298578063850a460b146102c9578063857184d1146102f95780638da5cb5b1461032957610173565b80631084e8121461017857806323b46798146101a85780632f6c7499146101c45780633e458a8e146101f4578063572b6c051461021057806358ae65df14610240575b600080fd5b610192600480360381019061018d919061380a565b6104e1565b60405161019f919061429c565b60405180910390f35b6101c260048036038101906101bd9190613898565b6104f9565b005b6101de60048036038101906101d9919061380a565b610c8d565b6040516101eb919061429c565b60405180910390f35b61020e6004803603810190610209919061392b565b610cd6565b005b61022a6004803603810190610225919061380a565b6112ab565b6040516102379190613fa2565b60405180910390f35b61025a6004803603810190610255919061380a565b611305565b604051610267919061429c565b60405180910390f35b61027861131d565b6040516102859190613fa2565b60405180910390f35b610296611330565b005b6102b260048036038101906102ad919061385c565b6113b8565b6040516102c09291906142b7565b60405180910390f35b6102e360048036038101906102de919061380a565b6113e9565b6040516102f0919061429c565b60405180910390f35b610313600480360381019061030e919061380a565b611401565b604051610320919061429c565b60405180910390f35b61033161144a565b60405161033e9190613f27565b60405180910390f35b61034f611473565b60405161035c9190613fa2565b60405180910390f35b61037f600480360381019061037a919061380a565b611486565b005b61038961160b565b005b6103a560048036038101906103a0919061392b565b611778565b005b6103c160048036038101906103bc919061380a565b611cb1565b005b6103dd60048036038101906103d8919061380a565b611ea6565b6040516103ea919061429c565b60405180910390f35b61040d6004803603810190610408919061380a565b611eef565b60405161041a919061429c565b60405180910390f35b61043d6004803603810190610438919061392b565b611f07565b005b6104596004803603810190610454919061380a565b6123b4565b005b610463612501565b6040516104709190613fbd565b60405180910390f35b610493600480360381019061048e919061380a565b612527565b005b6104af60048036038101906104aa919061380a565b6126ac565b005b6104cb60048036038101906104c6919061385c565b6127a4565b6040516104d8919061427a565b60405180910390f35b60076020528060005260406000206000915090505481565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da6105416128e1565b6040518263ffffffff1660e01b815260040161055d9190613f27565b60206040518083038186803b15801561057557600080fd5b505afa158015610589573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ad91906139a8565b905060006105b961144a565b905081806105f957508073ffffffffffffffffffffffffffffffffffffffff166105e16128e1565b73ffffffffffffffffffffffffffffffffffffffff16145b610638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062f9061411a565b60405180910390fd5b835185511461067c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106739061409a565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f846040518263ffffffff1660e01b81526004016106d79190613f27565b602060405180830381600087803b1580156106f157600080fd5b505af1158015610705573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072991906139a8565b610768576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075f9061425a565b60405180910390fd5b6000805b86518110156108c857600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166314de7a248883815181106107ec577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040518263ffffffff1660e01b81526004016108109190613fd8565b60206040518083038186803b15801561082857600080fd5b505afa15801561083c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108609190613ab0565b868281518110610899577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516108ab919061471f565b826108b69190614430565b91506108c1816128f0565b905061076c565b5060006108d588836128fd565b826108e091906147fd565b905060006108ee8287612dda565b9050600560008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548111156109b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a99061405a565b60405180910390fd5b80600560008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254610a4191906147fd565b92505081905550600560008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181908060018154018082558091505060019003906000526020600020016000909190919091505580600860008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b3d9190614430565b9250508190555080600a60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b939190614430565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff167f3ff1b63ceb7893702efd8bc1c62ed51d1ae1e3818055fff02b7051e9b5dadfb88342600560008f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154604051610c7a939291906142e0565b60405180910390a3505050505050505050565b6000600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60026001541415610d1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d139061423a565b60405180910390fd5b6002600181905550600660019054906101000a900460ff1615610d74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6b9061421a565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f836040518263ffffffff1660e01b8152600401610dcf9190613f27565b602060405180830381600087803b158015610de957600080fd5b505af1158015610dfd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2191906139a8565b610e60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e579061425a565b60405180910390fd5b60008111610ea3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9a90613ffa565b60405180910390fd5b60056000610eaf6128e1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154811115610f6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f639061407a565b60405180910390fd5b6000829050818173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff1660e01b8152600401610fcf929190613f42565b60206040518083038186803b158015610fe757600080fd5b505afa158015610ffb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101f9190613ab0565b1015611060576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611057906140fa565b60405180910390fd5b816005600061106d6128e1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282546110f691906147fd565b9250508190555081600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461114c9190614430565b925050819055506111a9600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166111816128e1565b848473ffffffffffffffffffffffffffffffffffffffff16613027909392919063ffffffff16565b8273ffffffffffffffffffffffffffffffffffffffff166111c86128e1565b73ffffffffffffffffffffffffffffffffffffffff167f37c44099063b557f274cbbe8d16f0be5e98e5766f58fa209aefe92fbdc3a486584426005600061120d6128e1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154604051611297939291906142e0565b60405180910390a350600180819055505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b600a6020528060005260406000206000915090505481565b600660009054906101000a900460ff1681565b6113386128e1565b73ffffffffffffffffffffffffffffffffffffffff1661135661144a565b73ffffffffffffffffffffffffffffffffffffffff16146113ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a39061415a565b60405180910390fd5b6113b660006130b0565b565b6005602052816000526040600020602052806000526040600020600091509150508060000154908060010154905082565b60086020528060005260406000206000915090505481565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600660019054906101000a900460ff1681565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da6114ce6128e1565b6040518263ffffffff1660e01b81526004016114ea9190613f27565b60206040518083038186803b15801561150257600080fd5b505afa158015611516573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061153a91906139a8565b9050600061154661144a565b9050818061158657508073ffffffffffffffffffffffffffffffffffffffff1661156e6128e1565b73ffffffffffffffffffffffffffffffffffffffff16145b6115c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115bc9061411a565b60405180910390fd5b82600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da6116536128e1565b6040518263ffffffff1660e01b815260040161166f9190613f27565b60206040518083038186803b15801561168757600080fd5b505afa15801561169b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116bf91906139a8565b905060006116cb61144a565b9050818061170b57508073ffffffffffffffffffffffffffffffffffffffff166116f36128e1565b73ffffffffffffffffffffffffffffffffffffffff16145b61174a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117419061411a565b60405180910390fd5b600660009054906101000a900460ff1615600660006101000a81548160ff0219169083151502179055505050565b600660009054906101000a900460ff16156117c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117bf906141fa565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f836040518263ffffffff1660e01b81526004016118239190613f27565b602060405180830381600087803b15801561183d57600080fd5b505af1158015611851573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061187591906139a8565b6118b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ab9061425a565b60405180910390fd5b600081116118f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ee906141ba565b60405180910390fd5b6000829050818173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e6119216128e1565b306040518363ffffffff1660e01b815260040161193f929190613f42565b60206040518083038186803b15801561195757600080fd5b505afa15801561196b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198f9190613ab0565b10156119d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119c7906140fa565b60405180910390fd5b611a266119db6128e1565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848473ffffffffffffffffffffffffffffffffffffffff16613027909392919063ffffffff16565b81600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611a759190614430565b925050819055508160056000611a896128e1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254611b129190614430565b925050819055508160056000611b266128e1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254611baf9190614430565b925050819055508273ffffffffffffffffffffffffffffffffffffffff16611bd56128e1565b73ffffffffffffffffffffffffffffffffffffffff167f5bd6fa89c0f1c24722e2912bb922f863301d0de84eb3e143e932c6c96d70cef8844260056000611c1a6128e1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154604051611ca4939291906142e0565b60405180910390a3505050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da611cf96128e1565b6040518263ffffffff1660e01b8152600401611d159190613f27565b60206040518083038186803b158015611d2d57600080fd5b505afa158015611d41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d6591906139a8565b90506000611d7161144a565b90508180611db157508073ffffffffffffffffffffffffffffffffffffffff16611d996128e1565b73ffffffffffffffffffffffffffffffffffffffff16145b611df0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611de79061411a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611e60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e579061413a565b60405180910390fd5b82600660026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60096020528060005260406000206000915090505481565b60026001541415611f4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f449061423a565b60405180910390fd5b6002600181905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611f966128e1565b73ffffffffffffffffffffffffffffffffffffffff1614611fec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fe39061401a565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f836040518263ffffffff1660e01b81526004016120479190613f27565b602060405180830381600087803b15801561206157600080fd5b505af1158015612075573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061209991906139a8565b6120d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120cf9061425a565b60405180910390fd5b6000811161211b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612112906140ba565b60405180910390fd5b600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481111561219d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121949061417a565b60405180910390fd5b6000829050818173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff1660e01b8152600401612200929190613f42565b60206040518083038186803b15801561221857600080fd5b505afa15801561222c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122509190613ab0565b1015612291576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612288906140fa565b60405180910390fd5b81600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546122e091906147fd565b92505081905550612358600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848473ffffffffffffffffffffffffffffffffffffffff16613027909392919063ffffffff16565b8273ffffffffffffffffffffffffffffffffffffffff167f7e59a6447b0e9f5c07c4722567993a64e2c9edf87ae19ce5d9bbab1659312f0383426040516123a09291906142b7565b60405180910390a250600180819055505050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da6123fc6128e1565b6040518263ffffffff1660e01b81526004016124189190613f27565b60206040518083038186803b15801561243057600080fd5b505afa158015612444573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061246891906139a8565b9050600061247461144a565b905081806124b457508073ffffffffffffffffffffffffffffffffffffffff1661249c6128e1565b73ffffffffffffffffffffffffffffffffffffffff16145b6124f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124ea9061411a565b60405180910390fd5b6124fc83613174565b505050565b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da61256f6128e1565b6040518263ffffffff1660e01b815260040161258b9190613f27565b60206040518083038186803b1580156125a357600080fd5b505afa1580156125b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125db91906139a8565b905060006125e761144a565b9050818061262757508073ffffffffffffffffffffffffffffffffffffffff1661260f6128e1565b73ffffffffffffffffffffffffffffffffffffffff16145b612666576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161265d9061411a565b60405180910390fd5b82600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6126b46128e1565b73ffffffffffffffffffffffffffffffffffffffff166126d261144a565b73ffffffffffffffffffffffffffffffffffffffff1614612728576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161271f9061415a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161278f9061403a565b60405180910390fd5b6127a1816130b0565b50565b6127ac6134bf565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820180548060200260200160405190810160405280929190818152602001828054801561289657602002820191906000526020600020905b815481526020019060010190808311612882575b505050505081525050905092915050565b60006128b2336112ab565b156128c657601436033560601c90506128d5565b6128ce6128d9565b90506128d6565b5b90565b600033905090565b60006128eb6128a7565b905090565b6000600182019050919050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633648572d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561296757600080fd5b505afa15801561297b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061299f91906139a8565b6129ac5760009050612dd4565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166322828cc26040518163ffffffff1660e01b815260040160206040518083038186803b158015612a1657600080fd5b505afa158015612a2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a4e9190613833565b905060008173ffffffffffffffffffffffffffffffffffffffff1663f7888aec86600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cc7a262e6040518163ffffffff1660e01b815260040160206040518083038186803b158015612ad757600080fd5b505afa158015612aeb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b0f9190613833565b6040518363ffffffff1660e01b8152600401612b2c929190613f42565b60206040518083038186803b158015612b4457600080fd5b505afa158015612b58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b7c9190613ab0565b90506000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637aa781226040518163ffffffff1660e01b815260040160006040518083038186803b158015612be857600080fd5b505afa158015612bfc573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190612c259190613967565b90506000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663eb5762fd6040518163ffffffff1660e01b815260040160006040518083038186803b158015612c9157600080fd5b505afa158015612ca5573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190612cce9190613967565b90506000825190506000805b82811015612d8657848181518110612d1b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518610612d7157838181518110612d62577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519150612d76565b612d86565b612d7f816128f0565b9050612cda565b506a084595161401484a0000006064612d9f919061471f565b6a084595161401484a000000828a612db7919061471f565b612dc1919061471f565b612dcb9190614486565b96505050505050505b92915050565b600080600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166382dc4a05846040518263ffffffff1660e01b8152600401612e389190613f27565b600060405180830381600087803b158015612e5257600080fd5b505af1158015612e66573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190612e8f91906139d1565b5050505050915050600081600a612ea6919061450a565b9050612f5485600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634dfeeaad6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015612f1657600080fd5b505af1158015612f2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f4e9190613a87565b846131b8565b94506000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc57d4df866040518263ffffffff1660e01b8152600401612fb39190613f27565b60206040518083038186803b158015612fcb57600080fd5b505afa158015612fdf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130039190613ab0565b9050808287613012919061471f565b61301c9190614486565b935050505092915050565b6130aa846323b872dd60e01b85858560405160240161304893929190613f6b565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613252565b50505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008082846131c79190614779565b9050600081600f0b13156131f45780600a6131e2919061450a565b856131ed9190614486565b9450613247565b600081600f0b121561324657807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61322c9190614628565b600a613238919061450a565b85613243919061471f565b94505b5b849150509392505050565b60006132b4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166133199092919063ffffffff16565b905060008151111561331457808060200190518101906132d491906139a8565b613313576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161330a906141da565b60405180910390fd5b5b505050565b60606133288484600085613331565b90509392505050565b606082471015613376576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161336d906140da565b60405180910390fd5b61337f85613445565b6133be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016133b59061419a565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516133e79190613f10565b60006040518083038185875af1925050503d8060008114613424576040519150601f19603f3d011682016040523d82523d6000602084013e613429565b606091505b5091509150613439828286613458565b92505050949350505050565b600080823b905060008111915050919050565b60608315613468578290506134b8565b60008351111561347b5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016134af9190613fd8565b60405180910390fd5b9392505050565b60405180606001604052806000815260200160008152602001606081525090565b60006134f36134ee8461433c565b614317565b9050808382526020820190508285602086028201111561351257600080fd5b60005b8581101561355c57813567ffffffffffffffff81111561353457600080fd5b8086016135418982613777565b85526020850194506020840193505050600181019050613515565b5050509392505050565b600061357961357484614368565b614317565b9050808382526020820190508285602086028201111561359857600080fd5b60005b858110156135c857816135ae88826137e0565b84526020840193506020830192505060018101905061359b565b5050509392505050565b60006135e56135e084614368565b614317565b9050808382526020820190508285602086028201111561360457600080fd5b60005b85811015613634578161361a88826137f5565b845260208401935060208301925050600181019050613607565b5050509392505050565b600061365161364c84614394565b614317565b90508281526020810184848401111561366957600080fd5b6136748482856148c6565b509392505050565b600061368f61368a84614394565b614317565b9050828152602081018484840111156136a757600080fd5b6136b28482856148d5565b509392505050565b6000813590506136c981614fc4565b92915050565b6000815190506136de81614fc4565b92915050565b600082601f8301126136f557600080fd5b81356137058482602086016134e0565b91505092915050565b600082601f83011261371f57600080fd5b813561372f848260208601613566565b91505092915050565b600082601f83011261374957600080fd5b81516137598482602086016135d2565b91505092915050565b60008151905061377181614fdb565b92915050565b600082601f83011261378857600080fd5b813561379884826020860161363e565b91505092915050565b600082601f8301126137b257600080fd5b81516137c284826020860161367c565b91505092915050565b6000815190506137da81614ff2565b92915050565b6000813590506137ef81615009565b92915050565b60008151905061380481615009565b92915050565b60006020828403121561381c57600080fd5b600061382a848285016136ba565b91505092915050565b60006020828403121561384557600080fd5b6000613853848285016136cf565b91505092915050565b6000806040838503121561386f57600080fd5b600061387d858286016136ba565b925050602061388e858286016136ba565b9150509250929050565b600080600080608085870312156138ae57600080fd5b60006138bc878288016136ba565b945050602085013567ffffffffffffffff8111156138d957600080fd5b6138e5878288016136e4565b935050604085013567ffffffffffffffff81111561390257600080fd5b61390e8782880161370e565b925050606061391f878288016136ba565b91505092959194509250565b6000806040838503121561393e57600080fd5b600061394c858286016136ba565b925050602061395d858286016137e0565b9150509250929050565b60006020828403121561397957600080fd5b600082015167ffffffffffffffff81111561399357600080fd5b61399f84828501613738565b91505092915050565b6000602082840312156139ba57600080fd5b60006139c884828501613762565b91505092915050565b600080600080600080600060e0888a0312156139ec57600080fd5b600088015167ffffffffffffffff811115613a0657600080fd5b613a128a828b016137a1565b9750506020613a238a828b016137cb565b9650506040613a348a828b016136cf565b9550506060613a458a828b01613762565b9450506080613a568a828b01613762565b93505060a0613a678a828b016136cf565b92505060c0613a788a828b016137cb565b91505092959891949750929550565b600060208284031215613a9957600080fd5b6000613aa7848285016137cb565b91505092915050565b600060208284031215613ac257600080fd5b6000613ad0848285016137f5565b91505092915050565b6000613ae58383613ef2565b60208301905092915050565b613afa81614831565b82525050565b6000613b0b826143d5565b613b158185614403565b9350613b20836143c5565b8060005b83811015613b51578151613b388882613ad9565b9750613b43836143f6565b925050600181019050613b24565b5085935050505092915050565b613b6781614843565b82525050565b6000613b78826143e0565b613b828185614414565b9350613b928185602086016148d5565b80840191505092915050565b613ba7816148a2565b82525050565b6000613bb8826143eb565b613bc2818561441f565b9350613bd28185602086016148d5565b613bdb816149c6565b840191505092915050565b6000613bf3603d8361441f565b9150613bfe826149e4565b604082019050919050565b6000613c1660188361441f565b9150613c2182614a33565b602082019050919050565b6000613c3960268361441f565b9150613c4482614a5c565b604082019050919050565b6000613c5c60518361441f565b9150613c6782614aab565b606082019050919050565b6000613c7f604e8361441f565b9150613c8a82614b20565b606082019050919050565b6000613ca260348361441f565b9150613cad82614b95565b604082019050919050565b6000613cc560318361441f565b9150613cd082614be4565b604082019050919050565b6000613ce860268361441f565b9150613cf382614c33565b604082019050919050565b6000613d0b60278361441f565b9150613d1682614c82565b604082019050919050565b6000613d2e602d8361441f565b9150613d3982614cd1565b604082019050919050565b6000613d51604a8361441f565b9150613d5c82614d20565b606082019050919050565b6000613d7460208361441f565b9150613d7f82614d95565b602082019050919050565b6000613d97604f8361441f565b9150613da282614dbe565b606082019050919050565b6000613dba601d8361441f565b9150613dc582614e33565b602082019050919050565b6000613ddd603e8361441f565b9150613de882614e5c565b604082019050919050565b6000613e00602a8361441f565b9150613e0b82614eab565b604082019050919050565b6000613e2360118361441f565b9150613e2e82614efa565b602082019050919050565b6000613e4660148361441f565b9150613e5182614f23565b602082019050919050565b6000613e69601f8361441f565b9150613e7482614f4c565b602082019050919050565b6000613e8c602f8361441f565b9150613e9782614f75565b604082019050919050565b6000606083016000830151613eba6000860182613ef2565b506020830151613ecd6020860182613ef2565b5060408301518482036040860152613ee58282613b00565b9150508091505092915050565b613efb81614898565b82525050565b613f0a81614898565b82525050565b6000613f1c8284613b6d565b915081905092915050565b6000602082019050613f3c6000830184613af1565b92915050565b6000604082019050613f576000830185613af1565b613f646020830184613af1565b9392505050565b6000606082019050613f806000830186613af1565b613f8d6020830185613af1565b613f9a6040830184613f01565b949350505050565b6000602082019050613fb76000830184613b5e565b92915050565b6000602082019050613fd26000830184613b9e565b92915050565b60006020820190508181036000830152613ff28184613bad565b905092915050565b6000602082019050818103600083015261401381613be6565b9050919050565b6000602082019050818103600083015261403381613c09565b9050919050565b6000602082019050818103600083015261405381613c2c565b9050919050565b6000602082019050818103600083015261407381613c4f565b9050919050565b6000602082019050818103600083015261409381613c72565b9050919050565b600060208201905081810360008301526140b381613c95565b9050919050565b600060208201905081810360008301526140d381613cb8565b9050919050565b600060208201905081810360008301526140f381613cdb565b9050919050565b6000602082019050818103600083015261411381613cfe565b9050919050565b6000602082019050818103600083015261413381613d21565b9050919050565b6000602082019050818103600083015261415381613d44565b9050919050565b6000602082019050818103600083015261417381613d67565b9050919050565b6000602082019050818103600083015261419381613d8a565b9050919050565b600060208201905081810360008301526141b381613dad565b9050919050565b600060208201905081810360008301526141d381613dd0565b9050919050565b600060208201905081810360008301526141f381613df3565b9050919050565b6000602082019050818103600083015261421381613e16565b9050919050565b6000602082019050818103600083015261423381613e39565b9050919050565b6000602082019050818103600083015261425381613e5c565b9050919050565b6000602082019050818103600083015261427381613e7f565b9050919050565b600060208201905081810360008301526142948184613ea2565b905092915050565b60006020820190506142b16000830184613f01565b92915050565b60006040820190506142cc6000830185613f01565b6142d96020830184613f01565b9392505050565b60006060820190506142f56000830186613f01565b6143026020830185613f01565b61430f6040830184613f01565b949350505050565b6000614321614332565b905061432d8282614908565b919050565b6000604051905090565b600067ffffffffffffffff82111561435757614356614997565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561438357614382614997565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156143af576143ae614997565b5b6143b8826149c6565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061443b82614898565b915061444683614898565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561447b5761447a614939565b5b828201905092915050565b600061449182614898565b915061449c83614898565b9250826144ac576144ab614968565b5b828204905092915050565b6000808291508390505b6001851115614501578086048111156144dd576144dc614939565b5b60018516156144ec5780820291505b80810290506144fa856149d7565b94506144c1565b94509492505050565b600061451582614898565b91506145208361485c565b925061454d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484614555565b905092915050565b6000826145655760019050614621565b816145735760009050614621565b81600181146145895760028114614593576145c2565b6001915050614621565b60ff8411156145a5576145a4614939565b5b8360020a9150848211156145bc576145bb614939565b5b50614621565b5060208310610133831016604e8410600b84101617156145f75782820a9050838111156145f2576145f1614939565b5b614621565b61460484848460016144b7565b9250905081840481111561461b5761461a614939565b5b81810290505b9392505050565b60006146338261484f565b915061463e8361484f565b9250826f7fffffffffffffffffffffffffffffff048211600084136000841316161561466d5761466c614939565b5b817fffffffffffffffffffffffffffffffff8000000000000000000000000000000005831260008412600084131616156146aa576146a9614939565b5b827fffffffffffffffffffffffffffffffff8000000000000000000000000000000005821260008413600084121616156146e7576146e6614939565b5b826f7fffffffffffffffffffffffffffffff058212600084126000841216161561471457614713614939565b5b828202905092915050565b600061472a82614898565b915061473583614898565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561476e5761476d614939565b5b828202905092915050565b60006147848261484f565b915061478f8361484f565b9250827fffffffffffffffffffffffffffffffff80000000000000000000000000000000018212600084121516156147ca576147c9614939565b5b826f7fffffffffffffffffffffffffffffff0182136000841216156147f2576147f1614939565b5b828203905092915050565b600061480882614898565b915061481383614898565b92508282101561482657614825614939565b5b828203905092915050565b600061483c82614878565b9050919050565b60008115159050919050565b600081600f0b9050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006148ad826148b4565b9050919050565b60006148bf82614878565b9050919050565b82818337600083830152505050565b60005b838110156148f35780820151818401526020810190506148d8565b83811115614902576000848401525b50505050565b614911826149c6565b810181811067ffffffffffffffff821117156149305761492f614997565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20416d6f60008201527f756e74206d7573742062652067726561746572207468616e207a65726f000000602082015250565b7f4f6e6c792063616c6c61626c6520627920636f6d70616e790000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2042616c60008201527f616e6365206d757374206265206c657373207468616e206f7220657175616c2060208201527f746f20616d6f756e742063686172676564000000000000000000000000000000604082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20416d6f60008201527f756e74206d757374206265206c657373207468616e206f7220657175616c207460208201527f6f20757365722062616c616e6365000000000000000000000000000000000000604082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20756e6560008201527f7175616c206c656e677468206f66206172726179000000000000000000000000602082015250565b7f53706865726f6e5061796d656e74733a20416d6f756e74206d7573742062652060008201527f67726561746572207468616e207a65726f000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f53706865726f6e5061796d656e74733a20496e73756666696369656e7420616c60008201527f6c6f77616e636500000000000000000000000000000000000000000000000000602082015250565b7f4f6e6c79206d616e6167657220616e64206f776e65722063616e2063616c6c2060008201527f746869732066756e6374696f6e00000000000000000000000000000000000000602082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2064617460008201527f6120636f6e747261637420616464726573732063616e206e6f74206265207a6560208201527f726f206164647265737300000000000000000000000000000000000000000000604082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2042616c60008201527f616e6365206d757374206265206c657373207468616e206f7220657175616c2060208201527f746f20757365722062616c616e63650000000000000000000000000000000000604082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2044657060008201527f6f736974206d7573742062652067726561746572207468616e207a65726f0000602082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f4465706f73697420697320706175736564000000000000000000000000000000600082015250565b7f5769746864726177616c20697320706175736564000000000000000000000000600082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20546f6b60008201527f656e206e6f742061636365707465640000000000000000000000000000000000602082015250565b614fcd81614831565b8114614fd857600080fd5b50565b614fe481614843565b8114614fef57600080fd5b50565b614ffb8161485c565b811461500657600080fd5b50565b61501281614898565b811461501d57600080fd5b5056fea2646970667358221220250adc4a3d573364ed7c857e975ad6f9cb5aae48882cba30b29f30b1aeadea9464736f6c63430008040033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
]
export const SUBSCRIPTION_DATA_ABI = [
  {
    inputs: [
      {
        internalType: 'string[]',
        name: '_params',
        type: 'string[]',
      },
      {
        internalType: 'uint256[]',
        name: '_prices',
        type: 'uint256[]',
      },
      {
        internalType: 'address',
        name: 'e',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'slabAmounts_',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'slabPercents_',
        type: 'uint256[]',
      },
      {
        internalType: 'address',
        name: 's',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'ChangeOwner',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'param',
        type: 'string',
      },
    ],
    name: 'DeletedParameter',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'managers',
        type: 'address[]',
      },
    ],
    name: 'RemoveManagers',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'managers',
        type: 'address[]',
      },
    ],
    name: 'SetManagers',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'param',
        type: 'string',
      },
    ],
    name: 'SubscriptionParameter',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint128',
        name: 'decimals',
        type: 'uint128',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'priceFeedAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isChainLinkFeed',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'priceFeedPrecision',
        type: 'uint128',
      },
    ],
    name: 'TokenAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
    ],
    name: 'TokenRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'acceptedTokens',
    outputs: [
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint128',
        name: 'decimals',
        type: 'uint128',
      },
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'accepted',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'isChainLinkFeed',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: 'priceFeedAddress',
        type: 'address',
      },
      {
        internalType: 'uint128',
        name: 'priceFeedPrecision',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string[]',
        name: 's',
        type: 'string[]',
      },
      {
        internalType: 'address[]',
        name: 't',
        type: 'address[]',
      },
      {
        internalType: 'uint128[]',
        name: 'd',
        type: 'uint128[]',
      },
      {
        internalType: 'bool[]',
        name: 'isChainLinkFeed_',
        type: 'bool[]',
      },
      {
        internalType: 'address[]',
        name: 'priceFeedAddress_',
        type: 'address[]',
      },
      {
        internalType: 'uint128[]',
        name: 'priceFeedPrecision_',
        type: 'uint128[]',
      },
    ],
    name: 'addNewTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'availableParams',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'o',
        type: 'address',
      },
    ],
    name: 'changeOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'p',
        type: 'uint128',
      },
    ],
    name: 'changeUsdPrecision',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string[]',
        name: '_params',
        type: 'string[]',
      },
    ],
    name: 'deleteParams',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'disableDiscounts',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'discountPercents',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'discountSlabs',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'percent',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'discountsEnabled',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 's',
        type: 'address',
      },
    ],
    name: 'enableDiscounts',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'escrow',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getManagers',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 't',
        type: 'address',
      },
    ],
    name: 'getUnderlyingPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'governanceAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isAcceptedToken',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'managerByAddress',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'managers',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'params',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'priceData',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'm',
        type: 'address[]',
      },
    ],
    name: 'removeManagers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 't',
        type: 'address[]',
      },
    ],
    name: 'removeTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'g',
        type: 'address',
      },
    ],
    name: 'setGovernanceAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'm',
        type: 'address[]',
      },
    ],
    name: 'setManagers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'slabs',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakedToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakingManager',
    outputs: [
      {
        internalType: 'contract IStaking',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'tokens',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'slabAmounts_',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'slabPercents_',
        type: 'uint256[]',
      },
    ],
    name: 'updateDiscountSlabs',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'e',
        type: 'address',
      },
    ],
    name: 'updateEscrow',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string[]',
        name: '_params',
        type: 'string[]',
      },
      {
        internalType: 'uint256[]',
        name: '_prices',
        type: 'uint256[]',
      },
    ],
    name: 'updateParams',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 's',
        type: 'address',
      },
    ],
    name: 'updateStakedToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'usdPricePrecision',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 't',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'a',
        type: 'uint256',
      },
    ],
    name: 'withdrawERC20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
export const metaTransactionType = [
  { name: 'nonce', type: 'uint256' },
  { name: 'from', type: 'address' },
  { name: 'functionSignature', type: 'bytes' },
]
export const domainType = [
  {
    name: 'name',
    type: 'string',
  },
  {
    name: 'version',
    type: 'string',
  },
  {
    name: 'verifyingContract',
    type: 'address',
  },
  {
    name: 'salt',
    type: 'bytes32',
  },
]
export const ERC20Interface = [
  'function totalSupply() external view returns (uint256)',

  'function balanceOf(address account) external view returns (uint256)',

  'function transfer(address recipient, uint256 amount) external returns (bool)',

  'function allowance(address owner, address spender) external view returns (uint256)',

  'function approve(address spender, uint256 amount) external returns (bool)',

  'function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)',
]
export const SubscriptionDePayInterface = [
  'function userDeposit(address _token, uint _amount) external',

  'function userWithdraw(address _token, uint _amount) external',
]
