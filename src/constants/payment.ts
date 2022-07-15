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
    "bytecode": "0x60806040523480156200001157600080fd5b50604051620055d7380380620055d783398181016040528101906200003791906200046a565b80620000586200004c620002c760201b60201c565b620002e360201b60201c565b6001808190555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141562000114576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200010b906200058f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141562000187576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200017e906200054b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620001fa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001f1906200056d565b60405180910390fd5b81600660026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505062000723565b6000620002de620003a760201b6200272c1760201c565b905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000620003ba33620003f160201b60201c565b15620003d057601436033560601c9050620003ed565b620003e56200044b60201b6200275e1760201c565b9050620003ee565b5b90565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b600033905090565b600081519050620004648162000709565b92915050565b600080600080608085870312156200048157600080fd5b6000620004918782880162000453565b9450506020620004a48782880162000453565b9350506040620004b78782880162000453565b9250506060620004ca8782880162000453565b91505092959194509250565b6000620004e5603883620005b1565b9150620004f282620005f6565b604082019050919050565b60006200050c604a83620005b1565b9150620005198262000645565b606082019050919050565b600062000533603983620005b1565b91506200054082620006ba565b604082019050919050565b600060208201905081810360008301526200056681620004d6565b9050919050565b600060208201905081810360008301526200058881620004fd565b9050919050565b60006020820190508181036000830152620005aa8162000524565b9050919050565b600082825260208201905092915050565b6000620005cf82620005d6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20496e7660008201527f616c6964206164647265737320666f7220636f6d70616e790000000000000000602082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20496e7660008201527f616c69642061646472657373206f6620737562736372697074696f6e2064617460208201527f6120636f6e747261637400000000000000000000000000000000000000000000604082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20496e7660008201527f616c6964206164647265737320666f7220747265617375727900000000000000602082015250565b6200071481620005c2565b81146200072057600080fd5b50565b614ea480620007336000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80639c69c782116100de578063d2abc39311610097578063e8a0006a11610071578063e8a0006a1461045b578063f0f4426014610479578063f2fde38b14610495578063f4eeefe9146104b157610173565b8063d2abc393146103f3578063d4e036c314610423578063da7422281461043f57610173565b80639c69c78214610347578063a8db244514610365578063b46610dd14610381578063b52d73431461038b578063b896a2a0146103a7578063c79fd184146103c357610173565b806369026e881161013057806369026e8814610270578063715018a61461028e578063768e5b2714610298578063850a460b146102c9578063857184d1146102f95780638da5cb5b1461032957610173565b80631084e8121461017857806323b46798146101a85780632f6c7499146101c45780633e458a8e146101f4578063572b6c051461021057806358ae65df14610240575b600080fd5b610192600480360381019061018d919061368f565b6104e1565b60405161019f9190614121565b60405180910390f35b6101c260048036038101906101bd919061371d565b6104f9565b005b6101de60048036038101906101d9919061368f565b610c0a565b6040516101eb9190614121565b60405180910390f35b61020e600480360381019061020991906137b0565b610c53565b005b61022a6004803603810190610225919061368f565b61119e565b6040516102379190613e27565b60405180910390f35b61025a6004803603810190610255919061368f565b6111f8565b6040516102679190614121565b60405180910390f35b610278611210565b6040516102859190613e27565b60405180910390f35b610296611223565b005b6102b260048036038101906102ad91906136e1565b6112ab565b6040516102c092919061413c565b60405180910390f35b6102e360048036038101906102de919061368f565b6112dc565b6040516102f09190614121565b60405180910390f35b610313600480360381019061030e919061368f565b6112f4565b6040516103209190614121565b60405180910390f35b61033161133d565b60405161033e9190613dac565b60405180910390f35b61034f611366565b60405161035c9190613e27565b60405180910390f35b61037f600480360381019061037a919061368f565b611379565b005b6103896114fe565b005b6103a560048036038101906103a091906137b0565b61166b565b005b6103c160048036038101906103bc919061368f565b611b1a565b005b6103dd60048036038101906103d8919061368f565b611d0f565b6040516103ea9190614121565b60405180910390f35b61040d6004803603810190610408919061368f565b611d58565b60405161041a9190614121565b60405180910390f35b61043d600480360381019061043891906137b0565b611d70565b005b6104596004803603810190610454919061368f565b612239565b005b610463612386565b6040516104709190613e42565b60405180910390f35b610493600480360381019061048e919061368f565b6123ac565b005b6104af60048036038101906104aa919061368f565b612531565b005b6104cb60048036038101906104c691906136e1565b612629565b6040516104d891906140ff565b60405180910390f35b60076020528060005260406000206000915090505481565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da610541612766565b6040518263ffffffff1660e01b815260040161055d9190613dac565b60206040518083038186803b15801561057557600080fd5b505afa158015610589573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ad919061382d565b905060006105b961133d565b905081806105f957508073ffffffffffffffffffffffffffffffffffffffff166105e1612766565b73ffffffffffffffffffffffffffffffffffffffff16145b610638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062f90613f9f565b60405180910390fd5b835185511461067c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067390613f1f565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f846040518263ffffffff1660e01b81526004016106d79190613dac565b602060405180830381600087803b1580156106f157600080fd5b505af1158015610705573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610729919061382d565b610768576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075f906140df565b60405180910390fd5b6000805b86518110156108c857600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166314de7a248883815181106107ec577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040518263ffffffff1660e01b81526004016108109190613e5d565b60206040518083038186803b15801561082857600080fd5b505afa15801561083c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108609190613935565b868281518110610899577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516108ab919061456d565b826108b6919061427e565b91506108c181612775565b905061076c565b5060006108d58883612782565b826108e0919061464b565b905060006108ee8287612c5f565b9050600560008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548111156109b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a990613edf565b60405180910390fd5b80600560008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254610a41919061464b565b92505081905550600560008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181908060018154018082558091505060019003906000526020600020016000909190919091505580600860008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b3d919061427e565b9250508190555080600a60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b93919061427e565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff167faf7dca4b3e9228b9779dd10926b90dae78964927a1f9d2bce660a5f87d5c772083604051610bf79190614121565b60405180910390a3505050505050505050565b6000600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60026001541415610c99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c90906140bf565b60405180910390fd5b6002600181905550600660019054906101000a900460ff1615610cf1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce89061409f565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f836040518263ffffffff1660e01b8152600401610d4c9190613dac565b602060405180830381600087803b158015610d6657600080fd5b505af1158015610d7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9e919061382d565b610ddd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd4906140df565b60405180910390fd5b60008111610e20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1790613e7f565b60405180910390fd5b60056000610e2c612766565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154811115610ee9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee090613eff565b60405180910390fd5b6000829050818173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff1660e01b8152600401610f4c929190613dc7565b60206040518083038186803b158015610f6457600080fd5b505afa158015610f78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9c9190613935565b1015610fdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd490613f7f565b60405180910390fd5b8160056000610fea612766565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254611073919061464b565b9250508190555081600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110c9919061427e565b92505081905550611126600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166110fe612766565b848473ffffffffffffffffffffffffffffffffffffffff16612eac909392919063ffffffff16565b8273ffffffffffffffffffffffffffffffffffffffff16611145612766565b73ffffffffffffffffffffffffffffffffffffffff167f6985a6dd52aeb8194df40b7af2f362f362440affc39c1314649abc28dbf6b6288460405161118a9190614121565b60405180910390a350600180819055505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b600a6020528060005260406000206000915090505481565b600660009054906101000a900460ff1681565b61122b612766565b73ffffffffffffffffffffffffffffffffffffffff1661124961133d565b73ffffffffffffffffffffffffffffffffffffffff161461129f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129690613fdf565b60405180910390fd5b6112a96000612f35565b565b6005602052816000526040600020602052806000526040600020600091509150508060000154908060010154905082565b60086020528060005260406000206000915090505481565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600660019054906101000a900460ff1681565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da6113c1612766565b6040518263ffffffff1660e01b81526004016113dd9190613dac565b60206040518083038186803b1580156113f557600080fd5b505afa158015611409573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142d919061382d565b9050600061143961133d565b9050818061147957508073ffffffffffffffffffffffffffffffffffffffff16611461612766565b73ffffffffffffffffffffffffffffffffffffffff16145b6114b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114af90613f9f565b60405180910390fd5b82600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da611546612766565b6040518263ffffffff1660e01b81526004016115629190613dac565b60206040518083038186803b15801561157a57600080fd5b505afa15801561158e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b2919061382d565b905060006115be61133d565b905081806115fe57508073ffffffffffffffffffffffffffffffffffffffff166115e6612766565b73ffffffffffffffffffffffffffffffffffffffff16145b61163d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161163490613f9f565b60405180910390fd5b600660009054906101000a900460ff1615600660006101000a81548160ff0219169083151502179055505050565b600660009054906101000a900460ff16156116bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116b29061407f565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f836040518263ffffffff1660e01b81526004016117169190613dac565b602060405180830381600087803b15801561173057600080fd5b505af1158015611744573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611768919061382d565b6117a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161179e906140df565b60405180910390fd5b600081116117ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117e19061403f565b60405180910390fd5b6000829050818173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e611814612766565b306040518363ffffffff1660e01b8152600401611832929190613dc7565b60206040518083038186803b15801561184a57600080fd5b505afa15801561185e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118829190613935565b10156118c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ba90613f7f565b60405180910390fd5b6119196118ce612766565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848473ffffffffffffffffffffffffffffffffffffffff16612eac909392919063ffffffff16565b81600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611968919061427e565b92505081905550816005600061197c612766565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254611a05919061427e565b925050819055508160056000611a19612766565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254611aa2919061427e565b925050819055508273ffffffffffffffffffffffffffffffffffffffff16611ac8612766565b73ffffffffffffffffffffffffffffffffffffffff167f3bc57f469ad6d10d7723ea226cd22bd2b9e527def2b529f6ab44645a1668958284604051611b0d9190614121565b60405180910390a3505050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da611b62612766565b6040518263ffffffff1660e01b8152600401611b7e9190613dac565b60206040518083038186803b158015611b9657600080fd5b505afa158015611baa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bce919061382d565b90506000611bda61133d565b90508180611c1a57508073ffffffffffffffffffffffffffffffffffffffff16611c02612766565b73ffffffffffffffffffffffffffffffffffffffff16145b611c59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c5090613f9f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611cc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cc090613fbf565b60405180910390fd5b82600660026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60096020528060005260406000206000915090505481565b60026001541415611db6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dad906140bf565b60405180910390fd5b6002600181905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611dff612766565b73ffffffffffffffffffffffffffffffffffffffff1614611e55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e4c90613e9f565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f836040518263ffffffff1660e01b8152600401611eb09190613dac565b602060405180830381600087803b158015611eca57600080fd5b505af1158015611ede573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f02919061382d565b611f41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f38906140df565b60405180910390fd5b60008111611f84576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f7b90613f3f565b60405180910390fd5b600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811115612006576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ffd90613fff565b60405180910390fd5b6000829050818173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff1660e01b8152600401612069929190613dc7565b60206040518083038186803b15801561208157600080fd5b505afa158015612095573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120b99190613935565b10156120fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120f190613f7f565b60405180910390fd5b81600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612149919061464b565b925050819055506121c1600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848473ffffffffffffffffffffffffffffffffffffffff16612eac909392919063ffffffff16565b8273ffffffffffffffffffffffffffffffffffffffff166121e0612766565b73ffffffffffffffffffffffffffffffffffffffff167f6985a6dd52aeb8194df40b7af2f362f362440affc39c1314649abc28dbf6b628846040516122259190614121565b60405180910390a350600180819055505050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da612281612766565b6040518263ffffffff1660e01b815260040161229d9190613dac565b60206040518083038186803b1580156122b557600080fd5b505afa1580156122c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122ed919061382d565b905060006122f961133d565b9050818061233957508073ffffffffffffffffffffffffffffffffffffffff16612321612766565b73ffffffffffffffffffffffffffffffffffffffff16145b612378576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161236f90613f9f565b60405180910390fd5b61238183612ff9565b505050565b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da6123f4612766565b6040518263ffffffff1660e01b81526004016124109190613dac565b60206040518083038186803b15801561242857600080fd5b505afa15801561243c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612460919061382d565b9050600061246c61133d565b905081806124ac57508073ffffffffffffffffffffffffffffffffffffffff16612494612766565b73ffffffffffffffffffffffffffffffffffffffff16145b6124eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124e290613f9f565b60405180910390fd5b82600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b612539612766565b73ffffffffffffffffffffffffffffffffffffffff1661255761133d565b73ffffffffffffffffffffffffffffffffffffffff16146125ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125a490613fdf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561261d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161261490613ebf565b60405180910390fd5b61262681612f35565b50565b612631613344565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820180548060200260200160405190810160405280929190818152602001828054801561271b57602002820191906000526020600020905b815481526020019060010190808311612707575b505050505081525050905092915050565b60006127373361119e565b1561274b57601436033560601c905061275a565b61275361275e565b905061275b565b5b90565b600033905090565b600061277061272c565b905090565b6000600182019050919050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633648572d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156127ec57600080fd5b505afa158015612800573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612824919061382d565b6128315760009050612c59565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166322828cc26040518163ffffffff1660e01b815260040160206040518083038186803b15801561289b57600080fd5b505afa1580156128af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128d391906136b8565b905060008173ffffffffffffffffffffffffffffffffffffffff1663f7888aec86600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cc7a262e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561295c57600080fd5b505afa158015612970573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061299491906136b8565b6040518363ffffffff1660e01b81526004016129b1929190613dc7565b60206040518083038186803b1580156129c957600080fd5b505afa1580156129dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a019190613935565b90506000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637aa781226040518163ffffffff1660e01b815260040160006040518083038186803b158015612a6d57600080fd5b505afa158015612a81573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190612aaa91906137ec565b90506000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663eb5762fd6040518163ffffffff1660e01b815260040160006040518083038186803b158015612b1657600080fd5b505afa158015612b2a573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190612b5391906137ec565b90506000825190506000805b82811015612c0b57848181518110612ba0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518610612bf657838181518110612be7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519150612bfb565b612c0b565b612c0481612775565b9050612b5f565b506a084595161401484a0000006064612c24919061456d565b6a084595161401484a000000828a612c3c919061456d565b612c46919061456d565b612c5091906142d4565b96505050505050505b92915050565b600080600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166382dc4a05846040518263ffffffff1660e01b8152600401612cbd9190613dac565b600060405180830381600087803b158015612cd757600080fd5b505af1158015612ceb573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190612d149190613856565b5050505050915050600081600a612d2b9190614358565b9050612dd985600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634dfeeaad6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015612d9b57600080fd5b505af1158015612daf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dd3919061390c565b8461303d565b94506000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc57d4df866040518263ffffffff1660e01b8152600401612e389190613dac565b60206040518083038186803b158015612e5057600080fd5b505afa158015612e64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e889190613935565b9050808287612e97919061456d565b612ea191906142d4565b935050505092915050565b612f2f846323b872dd60e01b858585604051602401612ecd93929190613df0565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506130d7565b50505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080828461304c91906145c7565b9050600081600f0b13156130795780600a6130679190614358565b8561307291906142d4565b94506130cc565b600081600f0b12156130cb57807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6130b19190614476565b600a6130bd9190614358565b856130c8919061456d565b94505b5b849150509392505050565b6000613139826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661319e9092919063ffffffff16565b90506000815111156131995780806020019051810190613159919061382d565b613198576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161318f9061405f565b60405180910390fd5b5b505050565b60606131ad84846000856131b6565b90509392505050565b6060824710156131fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016131f290613f5f565b60405180910390fd5b613204856132ca565b613243576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161323a9061401f565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161326c9190613d95565b60006040518083038185875af1925050503d80600081146132a9576040519150601f19603f3d011682016040523d82523d6000602084013e6132ae565b606091505b50915091506132be8282866132dd565b92505050949350505050565b600080823b905060008111915050919050565b606083156132ed5782905061333d565b6000835111156133005782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016133349190613e5d565b60405180910390fd5b9392505050565b60405180606001604052806000815260200160008152602001606081525090565b60006133786133738461418a565b614165565b9050808382526020820190508285602086028201111561339757600080fd5b60005b858110156133e157813567ffffffffffffffff8111156133b957600080fd5b8086016133c689826135fc565b8552602085019450602084019350505060018101905061339a565b5050509392505050565b60006133fe6133f9846141b6565b614165565b9050808382526020820190508285602086028201111561341d57600080fd5b60005b8581101561344d57816134338882613665565b845260208401935060208301925050600181019050613420565b5050509392505050565b600061346a613465846141b6565b614165565b9050808382526020820190508285602086028201111561348957600080fd5b60005b858110156134b9578161349f888261367a565b84526020840193506020830192505060018101905061348c565b5050509392505050565b60006134d66134d1846141e2565b614165565b9050828152602081018484840111156134ee57600080fd5b6134f9848285614714565b509392505050565b600061351461350f846141e2565b614165565b90508281526020810184848401111561352c57600080fd5b613537848285614723565b509392505050565b60008135905061354e81614e12565b92915050565b60008151905061356381614e12565b92915050565b600082601f83011261357a57600080fd5b813561358a848260208601613365565b91505092915050565b600082601f8301126135a457600080fd5b81356135b48482602086016133eb565b91505092915050565b600082601f8301126135ce57600080fd5b81516135de848260208601613457565b91505092915050565b6000815190506135f681614e29565b92915050565b600082601f83011261360d57600080fd5b813561361d8482602086016134c3565b91505092915050565b600082601f83011261363757600080fd5b8151613647848260208601613501565b91505092915050565b60008151905061365f81614e40565b92915050565b60008135905061367481614e57565b92915050565b60008151905061368981614e57565b92915050565b6000602082840312156136a157600080fd5b60006136af8482850161353f565b91505092915050565b6000602082840312156136ca57600080fd5b60006136d884828501613554565b91505092915050565b600080604083850312156136f457600080fd5b60006137028582860161353f565b92505060206137138582860161353f565b9150509250929050565b6000806000806080858703121561373357600080fd5b60006137418782880161353f565b945050602085013567ffffffffffffffff81111561375e57600080fd5b61376a87828801613569565b935050604085013567ffffffffffffffff81111561378757600080fd5b61379387828801613593565b92505060606137a48782880161353f565b91505092959194509250565b600080604083850312156137c357600080fd5b60006137d18582860161353f565b92505060206137e285828601613665565b9150509250929050565b6000602082840312156137fe57600080fd5b600082015167ffffffffffffffff81111561381857600080fd5b613824848285016135bd565b91505092915050565b60006020828403121561383f57600080fd5b600061384d848285016135e7565b91505092915050565b600080600080600080600060e0888a03121561387157600080fd5b600088015167ffffffffffffffff81111561388b57600080fd5b6138978a828b01613626565b97505060206138a88a828b01613650565b96505060406138b98a828b01613554565b95505060606138ca8a828b016135e7565b94505060806138db8a828b016135e7565b93505060a06138ec8a828b01613554565b92505060c06138fd8a828b01613650565b91505092959891949750929550565b60006020828403121561391e57600080fd5b600061392c84828501613650565b91505092915050565b60006020828403121561394757600080fd5b60006139558482850161367a565b91505092915050565b600061396a8383613d77565b60208301905092915050565b61397f8161467f565b82525050565b600061399082614223565b61399a8185614251565b93506139a583614213565b8060005b838110156139d65781516139bd888261395e565b97506139c883614244565b9250506001810190506139a9565b5085935050505092915050565b6139ec81614691565b82525050565b60006139fd8261422e565b613a078185614262565b9350613a17818560208601614723565b80840191505092915050565b613a2c816146f0565b82525050565b6000613a3d82614239565b613a47818561426d565b9350613a57818560208601614723565b613a6081614814565b840191505092915050565b6000613a78603d8361426d565b9150613a8382614832565b604082019050919050565b6000613a9b60188361426d565b9150613aa682614881565b602082019050919050565b6000613abe60268361426d565b9150613ac9826148aa565b604082019050919050565b6000613ae160518361426d565b9150613aec826148f9565b606082019050919050565b6000613b04604e8361426d565b9150613b0f8261496e565b606082019050919050565b6000613b2760348361426d565b9150613b32826149e3565b604082019050919050565b6000613b4a60318361426d565b9150613b5582614a32565b604082019050919050565b6000613b6d60268361426d565b9150613b7882614a81565b604082019050919050565b6000613b9060278361426d565b9150613b9b82614ad0565b604082019050919050565b6000613bb3602d8361426d565b9150613bbe82614b1f565b604082019050919050565b6000613bd6604a8361426d565b9150613be182614b6e565b606082019050919050565b6000613bf960208361426d565b9150613c0482614be3565b602082019050919050565b6000613c1c604f8361426d565b9150613c2782614c0c565b606082019050919050565b6000613c3f601d8361426d565b9150613c4a82614c81565b602082019050919050565b6000613c62603e8361426d565b9150613c6d82614caa565b604082019050919050565b6000613c85602a8361426d565b9150613c9082614cf9565b604082019050919050565b6000613ca860118361426d565b9150613cb382614d48565b602082019050919050565b6000613ccb60148361426d565b9150613cd682614d71565b602082019050919050565b6000613cee601f8361426d565b9150613cf982614d9a565b602082019050919050565b6000613d11602f8361426d565b9150613d1c82614dc3565b604082019050919050565b6000606083016000830151613d3f6000860182613d77565b506020830151613d526020860182613d77565b5060408301518482036040860152613d6a8282613985565b9150508091505092915050565b613d80816146e6565b82525050565b613d8f816146e6565b82525050565b6000613da182846139f2565b915081905092915050565b6000602082019050613dc16000830184613976565b92915050565b6000604082019050613ddc6000830185613976565b613de96020830184613976565b9392505050565b6000606082019050613e056000830186613976565b613e126020830185613976565b613e1f6040830184613d86565b949350505050565b6000602082019050613e3c60008301846139e3565b92915050565b6000602082019050613e576000830184613a23565b92915050565b60006020820190508181036000830152613e778184613a32565b905092915050565b60006020820190508181036000830152613e9881613a6b565b9050919050565b60006020820190508181036000830152613eb881613a8e565b9050919050565b60006020820190508181036000830152613ed881613ab1565b9050919050565b60006020820190508181036000830152613ef881613ad4565b9050919050565b60006020820190508181036000830152613f1881613af7565b9050919050565b60006020820190508181036000830152613f3881613b1a565b9050919050565b60006020820190508181036000830152613f5881613b3d565b9050919050565b60006020820190508181036000830152613f7881613b60565b9050919050565b60006020820190508181036000830152613f9881613b83565b9050919050565b60006020820190508181036000830152613fb881613ba6565b9050919050565b60006020820190508181036000830152613fd881613bc9565b9050919050565b60006020820190508181036000830152613ff881613bec565b9050919050565b6000602082019050818103600083015261401881613c0f565b9050919050565b6000602082019050818103600083015261403881613c32565b9050919050565b6000602082019050818103600083015261405881613c55565b9050919050565b6000602082019050818103600083015261407881613c78565b9050919050565b6000602082019050818103600083015261409881613c9b565b9050919050565b600060208201905081810360008301526140b881613cbe565b9050919050565b600060208201905081810360008301526140d881613ce1565b9050919050565b600060208201905081810360008301526140f881613d04565b9050919050565b600060208201905081810360008301526141198184613d27565b905092915050565b60006020820190506141366000830184613d86565b92915050565b60006040820190506141516000830185613d86565b61415e6020830184613d86565b9392505050565b600061416f614180565b905061417b8282614756565b919050565b6000604051905090565b600067ffffffffffffffff8211156141a5576141a46147e5565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156141d1576141d06147e5565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156141fd576141fc6147e5565b5b61420682614814565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000614289826146e6565b9150614294836146e6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156142c9576142c8614787565b5b828201905092915050565b60006142df826146e6565b91506142ea836146e6565b9250826142fa576142f96147b6565b5b828204905092915050565b6000808291508390505b600185111561434f5780860481111561432b5761432a614787565b5b600185161561433a5780820291505b808102905061434885614825565b945061430f565b94509492505050565b6000614363826146e6565b915061436e836146aa565b925061439b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846143a3565b905092915050565b6000826143b3576001905061446f565b816143c1576000905061446f565b81600181146143d757600281146143e157614410565b600191505061446f565b60ff8411156143f3576143f2614787565b5b8360020a91508482111561440a57614409614787565b5b5061446f565b5060208310610133831016604e8410600b84101617156144455782820a9050838111156144405761443f614787565b5b61446f565b6144528484846001614305565b9250905081840481111561446957614468614787565b5b81810290505b9392505050565b60006144818261469d565b915061448c8361469d565b9250826f7fffffffffffffffffffffffffffffff04821160008413600084131616156144bb576144ba614787565b5b817fffffffffffffffffffffffffffffffff8000000000000000000000000000000005831260008412600084131616156144f8576144f7614787565b5b827fffffffffffffffffffffffffffffffff80000000000000000000000000000000058212600084136000841216161561453557614534614787565b5b826f7fffffffffffffffffffffffffffffff058212600084126000841216161561456257614561614787565b5b828202905092915050565b6000614578826146e6565b9150614583836146e6565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156145bc576145bb614787565b5b828202905092915050565b60006145d28261469d565b91506145dd8361469d565b9250827fffffffffffffffffffffffffffffffff800000000000000000000000000000000182126000841215161561461857614617614787565b5b826f7fffffffffffffffffffffffffffffff0182136000841216156146405761463f614787565b5b828203905092915050565b6000614656826146e6565b9150614661836146e6565b92508282101561467457614673614787565b5b828203905092915050565b600061468a826146c6565b9050919050565b60008115159050919050565b600081600f0b9050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006146fb82614702565b9050919050565b600061470d826146c6565b9050919050565b82818337600083830152505050565b60005b83811015614741578082015181840152602081019050614726565b83811115614750576000848401525b50505050565b61475f82614814565b810181811067ffffffffffffffff8211171561477e5761477d6147e5565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20416d6f60008201527f756e74206d7573742062652067726561746572207468616e207a65726f000000602082015250565b7f4f6e6c792063616c6c61626c6520627920636f6d70616e790000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2042616c60008201527f616e6365206d757374206265206c657373207468616e206f7220657175616c2060208201527f746f20616d6f756e742063686172676564000000000000000000000000000000604082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20416d6f60008201527f756e74206d757374206265206c657373207468616e206f7220657175616c207460208201527f6f20757365722062616c616e6365000000000000000000000000000000000000604082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20756e6560008201527f7175616c206c656e677468206f66206172726179000000000000000000000000602082015250565b7f53706865726f6e5061796d656e74733a20416d6f756e74206d7573742062652060008201527f67726561746572207468616e207a65726f000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f53706865726f6e5061796d656e74733a20496e73756666696369656e7420616c60008201527f6c6f77616e636500000000000000000000000000000000000000000000000000602082015250565b7f4f6e6c79206d616e6167657220616e64206f776e65722063616e2063616c6c2060008201527f746869732066756e6374696f6e00000000000000000000000000000000000000602082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2064617460008201527f6120636f6e747261637420616464726573732063616e206e6f74206265207a6560208201527f726f206164647265737300000000000000000000000000000000000000000000604082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2042616c60008201527f616e6365206d757374206265206c657373207468616e206f7220657175616c2060208201527f746f20757365722062616c616e63650000000000000000000000000000000000604082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2044657060008201527f6f736974206d7573742062652067726561746572207468616e207a65726f0000602082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f4465706f73697420697320706175736564000000000000000000000000000000600082015250565b7f5769746864726177616c20697320706175736564000000000000000000000000600082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20546f6b60008201527f656e206e6f742061636365707465640000000000000000000000000000000000602082015250565b614e1b8161467f565b8114614e2657600080fd5b50565b614e3281614691565b8114614e3d57600080fd5b50565b614e49816146aa565b8114614e5457600080fd5b50565b614e60816146e6565b8114614e6b57600080fd5b5056fea264697066735822122095d3faa041c7f7f91c6921708f2193dc78259f998db22e2726777120e5ac8dd964736f6c63430008040033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101735760003560e01c80639c69c782116100de578063d2abc39311610097578063e8a0006a11610071578063e8a0006a1461045b578063f0f4426014610479578063f2fde38b14610495578063f4eeefe9146104b157610173565b8063d2abc393146103f3578063d4e036c314610423578063da7422281461043f57610173565b80639c69c78214610347578063a8db244514610365578063b46610dd14610381578063b52d73431461038b578063b896a2a0146103a7578063c79fd184146103c357610173565b806369026e881161013057806369026e8814610270578063715018a61461028e578063768e5b2714610298578063850a460b146102c9578063857184d1146102f95780638da5cb5b1461032957610173565b80631084e8121461017857806323b46798146101a85780632f6c7499146101c45780633e458a8e146101f4578063572b6c051461021057806358ae65df14610240575b600080fd5b610192600480360381019061018d919061368f565b6104e1565b60405161019f9190614121565b60405180910390f35b6101c260048036038101906101bd919061371d565b6104f9565b005b6101de60048036038101906101d9919061368f565b610c0a565b6040516101eb9190614121565b60405180910390f35b61020e600480360381019061020991906137b0565b610c53565b005b61022a6004803603810190610225919061368f565b61119e565b6040516102379190613e27565b60405180910390f35b61025a6004803603810190610255919061368f565b6111f8565b6040516102679190614121565b60405180910390f35b610278611210565b6040516102859190613e27565b60405180910390f35b610296611223565b005b6102b260048036038101906102ad91906136e1565b6112ab565b6040516102c092919061413c565b60405180910390f35b6102e360048036038101906102de919061368f565b6112dc565b6040516102f09190614121565b60405180910390f35b610313600480360381019061030e919061368f565b6112f4565b6040516103209190614121565b60405180910390f35b61033161133d565b60405161033e9190613dac565b60405180910390f35b61034f611366565b60405161035c9190613e27565b60405180910390f35b61037f600480360381019061037a919061368f565b611379565b005b6103896114fe565b005b6103a560048036038101906103a091906137b0565b61166b565b005b6103c160048036038101906103bc919061368f565b611b1a565b005b6103dd60048036038101906103d8919061368f565b611d0f565b6040516103ea9190614121565b60405180910390f35b61040d6004803603810190610408919061368f565b611d58565b60405161041a9190614121565b60405180910390f35b61043d600480360381019061043891906137b0565b611d70565b005b6104596004803603810190610454919061368f565b612239565b005b610463612386565b6040516104709190613e42565b60405180910390f35b610493600480360381019061048e919061368f565b6123ac565b005b6104af60048036038101906104aa919061368f565b612531565b005b6104cb60048036038101906104c691906136e1565b612629565b6040516104d891906140ff565b60405180910390f35b60076020528060005260406000206000915090505481565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da610541612766565b6040518263ffffffff1660e01b815260040161055d9190613dac565b60206040518083038186803b15801561057557600080fd5b505afa158015610589573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ad919061382d565b905060006105b961133d565b905081806105f957508073ffffffffffffffffffffffffffffffffffffffff166105e1612766565b73ffffffffffffffffffffffffffffffffffffffff16145b610638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062f90613f9f565b60405180910390fd5b835185511461067c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067390613f1f565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f846040518263ffffffff1660e01b81526004016106d79190613dac565b602060405180830381600087803b1580156106f157600080fd5b505af1158015610705573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610729919061382d565b610768576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075f906140df565b60405180910390fd5b6000805b86518110156108c857600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166314de7a248883815181106107ec577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040518263ffffffff1660e01b81526004016108109190613e5d565b60206040518083038186803b15801561082857600080fd5b505afa15801561083c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108609190613935565b868281518110610899577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516108ab919061456d565b826108b6919061427e565b91506108c181612775565b905061076c565b5060006108d58883612782565b826108e0919061464b565b905060006108ee8287612c5f565b9050600560008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548111156109b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a990613edf565b60405180910390fd5b80600560008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254610a41919061464b565b92505081905550600560008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181908060018154018082558091505060019003906000526020600020016000909190919091505580600860008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b3d919061427e565b9250508190555080600a60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b93919061427e565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff167faf7dca4b3e9228b9779dd10926b90dae78964927a1f9d2bce660a5f87d5c772083604051610bf79190614121565b60405180910390a3505050505050505050565b6000600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60026001541415610c99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c90906140bf565b60405180910390fd5b6002600181905550600660019054906101000a900460ff1615610cf1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce89061409f565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f836040518263ffffffff1660e01b8152600401610d4c9190613dac565b602060405180830381600087803b158015610d6657600080fd5b505af1158015610d7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9e919061382d565b610ddd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd4906140df565b60405180910390fd5b60008111610e20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1790613e7f565b60405180910390fd5b60056000610e2c612766565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154811115610ee9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee090613eff565b60405180910390fd5b6000829050818173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff1660e01b8152600401610f4c929190613dc7565b60206040518083038186803b158015610f6457600080fd5b505afa158015610f78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9c9190613935565b1015610fdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd490613f7f565b60405180910390fd5b8160056000610fea612766565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254611073919061464b565b9250508190555081600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110c9919061427e565b92505081905550611126600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166110fe612766565b848473ffffffffffffffffffffffffffffffffffffffff16612eac909392919063ffffffff16565b8273ffffffffffffffffffffffffffffffffffffffff16611145612766565b73ffffffffffffffffffffffffffffffffffffffff167f6985a6dd52aeb8194df40b7af2f362f362440affc39c1314649abc28dbf6b6288460405161118a9190614121565b60405180910390a350600180819055505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b600a6020528060005260406000206000915090505481565b600660009054906101000a900460ff1681565b61122b612766565b73ffffffffffffffffffffffffffffffffffffffff1661124961133d565b73ffffffffffffffffffffffffffffffffffffffff161461129f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129690613fdf565b60405180910390fd5b6112a96000612f35565b565b6005602052816000526040600020602052806000526040600020600091509150508060000154908060010154905082565b60086020528060005260406000206000915090505481565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600660019054906101000a900460ff1681565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da6113c1612766565b6040518263ffffffff1660e01b81526004016113dd9190613dac565b60206040518083038186803b1580156113f557600080fd5b505afa158015611409573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142d919061382d565b9050600061143961133d565b9050818061147957508073ffffffffffffffffffffffffffffffffffffffff16611461612766565b73ffffffffffffffffffffffffffffffffffffffff16145b6114b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114af90613f9f565b60405180910390fd5b82600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da611546612766565b6040518263ffffffff1660e01b81526004016115629190613dac565b60206040518083038186803b15801561157a57600080fd5b505afa15801561158e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b2919061382d565b905060006115be61133d565b905081806115fe57508073ffffffffffffffffffffffffffffffffffffffff166115e6612766565b73ffffffffffffffffffffffffffffffffffffffff16145b61163d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161163490613f9f565b60405180910390fd5b600660009054906101000a900460ff1615600660006101000a81548160ff0219169083151502179055505050565b600660009054906101000a900460ff16156116bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116b29061407f565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f836040518263ffffffff1660e01b81526004016117169190613dac565b602060405180830381600087803b15801561173057600080fd5b505af1158015611744573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611768919061382d565b6117a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161179e906140df565b60405180910390fd5b600081116117ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117e19061403f565b60405180910390fd5b6000829050818173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e611814612766565b306040518363ffffffff1660e01b8152600401611832929190613dc7565b60206040518083038186803b15801561184a57600080fd5b505afa15801561185e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118829190613935565b10156118c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ba90613f7f565b60405180910390fd5b6119196118ce612766565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848473ffffffffffffffffffffffffffffffffffffffff16612eac909392919063ffffffff16565b81600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611968919061427e565b92505081905550816005600061197c612766565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254611a05919061427e565b925050819055508160056000611a19612766565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254611aa2919061427e565b925050819055508273ffffffffffffffffffffffffffffffffffffffff16611ac8612766565b73ffffffffffffffffffffffffffffffffffffffff167f3bc57f469ad6d10d7723ea226cd22bd2b9e527def2b529f6ab44645a1668958284604051611b0d9190614121565b60405180910390a3505050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da611b62612766565b6040518263ffffffff1660e01b8152600401611b7e9190613dac565b60206040518083038186803b158015611b9657600080fd5b505afa158015611baa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bce919061382d565b90506000611bda61133d565b90508180611c1a57508073ffffffffffffffffffffffffffffffffffffffff16611c02612766565b73ffffffffffffffffffffffffffffffffffffffff16145b611c59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c5090613f9f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611cc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cc090613fbf565b60405180910390fd5b82600660026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60096020528060005260406000206000915090505481565b60026001541415611db6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dad906140bf565b60405180910390fd5b6002600181905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611dff612766565b73ffffffffffffffffffffffffffffffffffffffff1614611e55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e4c90613e9f565b60405180910390fd5b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b6e750f836040518263ffffffff1660e01b8152600401611eb09190613dac565b602060405180830381600087803b158015611eca57600080fd5b505af1158015611ede573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f02919061382d565b611f41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f38906140df565b60405180910390fd5b60008111611f84576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f7b90613f3f565b60405180910390fd5b600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811115612006576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ffd90613fff565b60405180910390fd5b6000829050818173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff1660e01b8152600401612069929190613dc7565b60206040518083038186803b15801561208157600080fd5b505afa158015612095573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120b99190613935565b10156120fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120f190613f7f565b60405180910390fd5b81600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612149919061464b565b925050819055506121c1600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848473ffffffffffffffffffffffffffffffffffffffff16612eac909392919063ffffffff16565b8273ffffffffffffffffffffffffffffffffffffffff166121e0612766565b73ffffffffffffffffffffffffffffffffffffffff167f6985a6dd52aeb8194df40b7af2f362f362440affc39c1314649abc28dbf6b628846040516122259190614121565b60405180910390a350600180819055505050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da612281612766565b6040518263ffffffff1660e01b815260040161229d9190613dac565b60206040518083038186803b1580156122b557600080fd5b505afa1580156122c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122ed919061382d565b905060006122f961133d565b9050818061233957508073ffffffffffffffffffffffffffffffffffffffff16612321612766565b73ffffffffffffffffffffffffffffffffffffffff16145b612378576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161236f90613f9f565b60405180910390fd5b61238183612ff9565b505050565b600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663086f99da6123f4612766565b6040518263ffffffff1660e01b81526004016124109190613dac565b60206040518083038186803b15801561242857600080fd5b505afa15801561243c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612460919061382d565b9050600061246c61133d565b905081806124ac57508073ffffffffffffffffffffffffffffffffffffffff16612494612766565b73ffffffffffffffffffffffffffffffffffffffff16145b6124eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124e290613f9f565b60405180910390fd5b82600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b612539612766565b73ffffffffffffffffffffffffffffffffffffffff1661255761133d565b73ffffffffffffffffffffffffffffffffffffffff16146125ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125a490613fdf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561261d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161261490613ebf565b60405180910390fd5b61262681612f35565b50565b612631613344565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820180548060200260200160405190810160405280929190818152602001828054801561271b57602002820191906000526020600020905b815481526020019060010190808311612707575b505050505081525050905092915050565b60006127373361119e565b1561274b57601436033560601c905061275a565b61275361275e565b905061275b565b5b90565b600033905090565b600061277061272c565b905090565b6000600182019050919050565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633648572d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156127ec57600080fd5b505afa158015612800573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612824919061382d565b6128315760009050612c59565b6000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166322828cc26040518163ffffffff1660e01b815260040160206040518083038186803b15801561289b57600080fd5b505afa1580156128af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128d391906136b8565b905060008173ffffffffffffffffffffffffffffffffffffffff1663f7888aec86600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cc7a262e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561295c57600080fd5b505afa158015612970573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061299491906136b8565b6040518363ffffffff1660e01b81526004016129b1929190613dc7565b60206040518083038186803b1580156129c957600080fd5b505afa1580156129dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a019190613935565b90506000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637aa781226040518163ffffffff1660e01b815260040160006040518083038186803b158015612a6d57600080fd5b505afa158015612a81573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190612aaa91906137ec565b90506000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663eb5762fd6040518163ffffffff1660e01b815260040160006040518083038186803b158015612b1657600080fd5b505afa158015612b2a573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190612b5391906137ec565b90506000825190506000805b82811015612c0b57848181518110612ba0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518610612bf657838181518110612be7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519150612bfb565b612c0b565b612c0481612775565b9050612b5f565b506a084595161401484a0000006064612c24919061456d565b6a084595161401484a000000828a612c3c919061456d565b612c46919061456d565b612c5091906142d4565b96505050505050505b92915050565b600080600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166382dc4a05846040518263ffffffff1660e01b8152600401612cbd9190613dac565b600060405180830381600087803b158015612cd757600080fd5b505af1158015612ceb573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190612d149190613856565b5050505050915050600081600a612d2b9190614358565b9050612dd985600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634dfeeaad6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015612d9b57600080fd5b505af1158015612daf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dd3919061390c565b8461303d565b94506000600660029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc57d4df866040518263ffffffff1660e01b8152600401612e389190613dac565b60206040518083038186803b158015612e5057600080fd5b505afa158015612e64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e889190613935565b9050808287612e97919061456d565b612ea191906142d4565b935050505092915050565b612f2f846323b872dd60e01b858585604051602401612ecd93929190613df0565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506130d7565b50505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080828461304c91906145c7565b9050600081600f0b13156130795780600a6130679190614358565b8561307291906142d4565b94506130cc565b600081600f0b12156130cb57807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6130b19190614476565b600a6130bd9190614358565b856130c8919061456d565b94505b5b849150509392505050565b6000613139826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661319e9092919063ffffffff16565b90506000815111156131995780806020019051810190613159919061382d565b613198576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161318f9061405f565b60405180910390fd5b5b505050565b60606131ad84846000856131b6565b90509392505050565b6060824710156131fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016131f290613f5f565b60405180910390fd5b613204856132ca565b613243576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161323a9061401f565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161326c9190613d95565b60006040518083038185875af1925050503d80600081146132a9576040519150601f19603f3d011682016040523d82523d6000602084013e6132ae565b606091505b50915091506132be8282866132dd565b92505050949350505050565b600080823b905060008111915050919050565b606083156132ed5782905061333d565b6000835111156133005782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016133349190613e5d565b60405180910390fd5b9392505050565b60405180606001604052806000815260200160008152602001606081525090565b60006133786133738461418a565b614165565b9050808382526020820190508285602086028201111561339757600080fd5b60005b858110156133e157813567ffffffffffffffff8111156133b957600080fd5b8086016133c689826135fc565b8552602085019450602084019350505060018101905061339a565b5050509392505050565b60006133fe6133f9846141b6565b614165565b9050808382526020820190508285602086028201111561341d57600080fd5b60005b8581101561344d57816134338882613665565b845260208401935060208301925050600181019050613420565b5050509392505050565b600061346a613465846141b6565b614165565b9050808382526020820190508285602086028201111561348957600080fd5b60005b858110156134b9578161349f888261367a565b84526020840193506020830192505060018101905061348c565b5050509392505050565b60006134d66134d1846141e2565b614165565b9050828152602081018484840111156134ee57600080fd5b6134f9848285614714565b509392505050565b600061351461350f846141e2565b614165565b90508281526020810184848401111561352c57600080fd5b613537848285614723565b509392505050565b60008135905061354e81614e12565b92915050565b60008151905061356381614e12565b92915050565b600082601f83011261357a57600080fd5b813561358a848260208601613365565b91505092915050565b600082601f8301126135a457600080fd5b81356135b48482602086016133eb565b91505092915050565b600082601f8301126135ce57600080fd5b81516135de848260208601613457565b91505092915050565b6000815190506135f681614e29565b92915050565b600082601f83011261360d57600080fd5b813561361d8482602086016134c3565b91505092915050565b600082601f83011261363757600080fd5b8151613647848260208601613501565b91505092915050565b60008151905061365f81614e40565b92915050565b60008135905061367481614e57565b92915050565b60008151905061368981614e57565b92915050565b6000602082840312156136a157600080fd5b60006136af8482850161353f565b91505092915050565b6000602082840312156136ca57600080fd5b60006136d884828501613554565b91505092915050565b600080604083850312156136f457600080fd5b60006137028582860161353f565b92505060206137138582860161353f565b9150509250929050565b6000806000806080858703121561373357600080fd5b60006137418782880161353f565b945050602085013567ffffffffffffffff81111561375e57600080fd5b61376a87828801613569565b935050604085013567ffffffffffffffff81111561378757600080fd5b61379387828801613593565b92505060606137a48782880161353f565b91505092959194509250565b600080604083850312156137c357600080fd5b60006137d18582860161353f565b92505060206137e285828601613665565b9150509250929050565b6000602082840312156137fe57600080fd5b600082015167ffffffffffffffff81111561381857600080fd5b613824848285016135bd565b91505092915050565b60006020828403121561383f57600080fd5b600061384d848285016135e7565b91505092915050565b600080600080600080600060e0888a03121561387157600080fd5b600088015167ffffffffffffffff81111561388b57600080fd5b6138978a828b01613626565b97505060206138a88a828b01613650565b96505060406138b98a828b01613554565b95505060606138ca8a828b016135e7565b94505060806138db8a828b016135e7565b93505060a06138ec8a828b01613554565b92505060c06138fd8a828b01613650565b91505092959891949750929550565b60006020828403121561391e57600080fd5b600061392c84828501613650565b91505092915050565b60006020828403121561394757600080fd5b60006139558482850161367a565b91505092915050565b600061396a8383613d77565b60208301905092915050565b61397f8161467f565b82525050565b600061399082614223565b61399a8185614251565b93506139a583614213565b8060005b838110156139d65781516139bd888261395e565b97506139c883614244565b9250506001810190506139a9565b5085935050505092915050565b6139ec81614691565b82525050565b60006139fd8261422e565b613a078185614262565b9350613a17818560208601614723565b80840191505092915050565b613a2c816146f0565b82525050565b6000613a3d82614239565b613a47818561426d565b9350613a57818560208601614723565b613a6081614814565b840191505092915050565b6000613a78603d8361426d565b9150613a8382614832565b604082019050919050565b6000613a9b60188361426d565b9150613aa682614881565b602082019050919050565b6000613abe60268361426d565b9150613ac9826148aa565b604082019050919050565b6000613ae160518361426d565b9150613aec826148f9565b606082019050919050565b6000613b04604e8361426d565b9150613b0f8261496e565b606082019050919050565b6000613b2760348361426d565b9150613b32826149e3565b604082019050919050565b6000613b4a60318361426d565b9150613b5582614a32565b604082019050919050565b6000613b6d60268361426d565b9150613b7882614a81565b604082019050919050565b6000613b9060278361426d565b9150613b9b82614ad0565b604082019050919050565b6000613bb3602d8361426d565b9150613bbe82614b1f565b604082019050919050565b6000613bd6604a8361426d565b9150613be182614b6e565b606082019050919050565b6000613bf960208361426d565b9150613c0482614be3565b602082019050919050565b6000613c1c604f8361426d565b9150613c2782614c0c565b606082019050919050565b6000613c3f601d8361426d565b9150613c4a82614c81565b602082019050919050565b6000613c62603e8361426d565b9150613c6d82614caa565b604082019050919050565b6000613c85602a8361426d565b9150613c9082614cf9565b604082019050919050565b6000613ca860118361426d565b9150613cb382614d48565b602082019050919050565b6000613ccb60148361426d565b9150613cd682614d71565b602082019050919050565b6000613cee601f8361426d565b9150613cf982614d9a565b602082019050919050565b6000613d11602f8361426d565b9150613d1c82614dc3565b604082019050919050565b6000606083016000830151613d3f6000860182613d77565b506020830151613d526020860182613d77565b5060408301518482036040860152613d6a8282613985565b9150508091505092915050565b613d80816146e6565b82525050565b613d8f816146e6565b82525050565b6000613da182846139f2565b915081905092915050565b6000602082019050613dc16000830184613976565b92915050565b6000604082019050613ddc6000830185613976565b613de96020830184613976565b9392505050565b6000606082019050613e056000830186613976565b613e126020830185613976565b613e1f6040830184613d86565b949350505050565b6000602082019050613e3c60008301846139e3565b92915050565b6000602082019050613e576000830184613a23565b92915050565b60006020820190508181036000830152613e778184613a32565b905092915050565b60006020820190508181036000830152613e9881613a6b565b9050919050565b60006020820190508181036000830152613eb881613a8e565b9050919050565b60006020820190508181036000830152613ed881613ab1565b9050919050565b60006020820190508181036000830152613ef881613ad4565b9050919050565b60006020820190508181036000830152613f1881613af7565b9050919050565b60006020820190508181036000830152613f3881613b1a565b9050919050565b60006020820190508181036000830152613f5881613b3d565b9050919050565b60006020820190508181036000830152613f7881613b60565b9050919050565b60006020820190508181036000830152613f9881613b83565b9050919050565b60006020820190508181036000830152613fb881613ba6565b9050919050565b60006020820190508181036000830152613fd881613bc9565b9050919050565b60006020820190508181036000830152613ff881613bec565b9050919050565b6000602082019050818103600083015261401881613c0f565b9050919050565b6000602082019050818103600083015261403881613c32565b9050919050565b6000602082019050818103600083015261405881613c55565b9050919050565b6000602082019050818103600083015261407881613c78565b9050919050565b6000602082019050818103600083015261409881613c9b565b9050919050565b600060208201905081810360008301526140b881613cbe565b9050919050565b600060208201905081810360008301526140d881613ce1565b9050919050565b600060208201905081810360008301526140f881613d04565b9050919050565b600060208201905081810360008301526141198184613d27565b905092915050565b60006020820190506141366000830184613d86565b92915050565b60006040820190506141516000830185613d86565b61415e6020830184613d86565b9392505050565b600061416f614180565b905061417b8282614756565b919050565b6000604051905090565b600067ffffffffffffffff8211156141a5576141a46147e5565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156141d1576141d06147e5565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156141fd576141fc6147e5565b5b61420682614814565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000614289826146e6565b9150614294836146e6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156142c9576142c8614787565b5b828201905092915050565b60006142df826146e6565b91506142ea836146e6565b9250826142fa576142f96147b6565b5b828204905092915050565b6000808291508390505b600185111561434f5780860481111561432b5761432a614787565b5b600185161561433a5780820291505b808102905061434885614825565b945061430f565b94509492505050565b6000614363826146e6565b915061436e836146aa565b925061439b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846143a3565b905092915050565b6000826143b3576001905061446f565b816143c1576000905061446f565b81600181146143d757600281146143e157614410565b600191505061446f565b60ff8411156143f3576143f2614787565b5b8360020a91508482111561440a57614409614787565b5b5061446f565b5060208310610133831016604e8410600b84101617156144455782820a9050838111156144405761443f614787565b5b61446f565b6144528484846001614305565b9250905081840481111561446957614468614787565b5b81810290505b9392505050565b60006144818261469d565b915061448c8361469d565b9250826f7fffffffffffffffffffffffffffffff04821160008413600084131616156144bb576144ba614787565b5b817fffffffffffffffffffffffffffffffff8000000000000000000000000000000005831260008412600084131616156144f8576144f7614787565b5b827fffffffffffffffffffffffffffffffff80000000000000000000000000000000058212600084136000841216161561453557614534614787565b5b826f7fffffffffffffffffffffffffffffff058212600084126000841216161561456257614561614787565b5b828202905092915050565b6000614578826146e6565b9150614583836146e6565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156145bc576145bb614787565b5b828202905092915050565b60006145d28261469d565b91506145dd8361469d565b9250827fffffffffffffffffffffffffffffffff800000000000000000000000000000000182126000841215161561461857614617614787565b5b826f7fffffffffffffffffffffffffffffff0182136000841216156146405761463f614787565b5b828203905092915050565b6000614656826146e6565b9150614661836146e6565b92508282101561467457614673614787565b5b828203905092915050565b600061468a826146c6565b9050919050565b60008115159050919050565b600081600f0b9050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006146fb82614702565b9050919050565b600061470d826146c6565b9050919050565b82818337600083830152505050565b60005b83811015614741578082015181840152602081019050614726565b83811115614750576000848401525b50505050565b61475f82614814565b810181811067ffffffffffffffff8211171561477e5761477d6147e5565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20416d6f60008201527f756e74206d7573742062652067726561746572207468616e207a65726f000000602082015250565b7f4f6e6c792063616c6c61626c6520627920636f6d70616e790000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2042616c60008201527f616e6365206d757374206265206c657373207468616e206f7220657175616c2060208201527f746f20616d6f756e742063686172676564000000000000000000000000000000604082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20416d6f60008201527f756e74206d757374206265206c657373207468616e206f7220657175616c207460208201527f6f20757365722062616c616e6365000000000000000000000000000000000000604082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20756e6560008201527f7175616c206c656e677468206f66206172726179000000000000000000000000602082015250565b7f53706865726f6e5061796d656e74733a20416d6f756e74206d7573742062652060008201527f67726561746572207468616e207a65726f000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f53706865726f6e5061796d656e74733a20496e73756666696369656e7420616c60008201527f6c6f77616e636500000000000000000000000000000000000000000000000000602082015250565b7f4f6e6c79206d616e6167657220616e64206f776e65722063616e2063616c6c2060008201527f746869732066756e6374696f6e00000000000000000000000000000000000000602082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2064617460008201527f6120636f6e747261637420616464726573732063616e206e6f74206265207a6560208201527f726f206164647265737300000000000000000000000000000000000000000000604082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2042616c60008201527f616e6365206d757374206265206c657373207468616e206f7220657175616c2060208201527f746f20757365722062616c616e63650000000000000000000000000000000000604082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a2044657060008201527f6f736974206d7573742062652067726561746572207468616e207a65726f0000602082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f4465706f73697420697320706175736564000000000000000000000000000000600082015250565b7f5769746864726177616c20697320706175736564000000000000000000000000600082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f53706865726f6e537562736372697074696f6e5061796d656e74733a20546f6b60008201527f656e206e6f742061636365707465640000000000000000000000000000000000602082015250565b614e1b8161467f565b8114614e2657600080fd5b50565b614e3281614691565b8114614e3d57600080fd5b50565b614e49816146aa565b8114614e5457600080fd5b50565b614e60816146e6565b8114614e6b57600080fd5b5056fea264697066735822122095d3faa041c7f7f91c6921708f2193dc78259f998db22e2726777120e5ac8dd964736f6c63430008040033",
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
