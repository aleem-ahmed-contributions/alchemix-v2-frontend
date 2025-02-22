import { VaultTypes } from '@stores/v2/types';

export const VaultConstants = {
  [VaultTypes.alUSD]: {
    alchemistContractSelector: 'AlchemistV2_alUSD',
    gatewayContractSelector: {
      ATokenGateway_alUSD: [
        {
          aToken: '0x028171bCA77440897B824Ca71D1c56caC55b68A3',
          staticToken: '0xcE4a49d7ed99C7c8746B713EE2f0C9aA631688d8',
        },
        {
          aToken: '0xBcca60bB61934080951369a648Fb03DF4F96263C',
          staticToken: '0xf591D878608e2e5c7D4f1E499330f4AB9BbaE37a',
        },
        {
          aToken: '0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811',
          staticToken: '0xBC11De1F20e83F0a6889B8c7A7868E722694E315',
        },
        {
          aToken: '0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE',
          staticToken: '0x43A502D7e947c8A2eBBaf7627E104Ddcc253aBc6',
        },
        {
          aToken: '0x625E7708f30cA75bfd92586e17077590C60eb4cD',
          staticToken: '0x4186Eb285b1efdf372AC5896a08C346c7E373cC4',
        },
        {
          aToken: '0x6ab707Aca953eDAeFBc4fD23bA73294241490620',
          staticToken: '0x2680b58945A31602E4B6122C965c2849Eb76Dd3B',
        },
      ],
    },
    alToken: 'AlToken',
    legacy: 'Alchemist',
  },
  [VaultTypes.alETH]: {
    alchemistContractSelector: 'AlchemistV2_alETH',
    gatewayContractSelector: {
      WETHGateway: ['eth'],
      ATokenGateway_alETH: [
        {
          aToken: '0x030bA81f1c18d280636F32af80b9AAd02Cf0854e',
          staticToken: '0x61134511187a9a2DF38D10DBe07Ba2e8E5563967',
        },
        {
          aToken: '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8',
          staticToken: '0x337B4B933d60F40CB57DD19AE834Af103F049810',
        },
      ],
    },
    alToken: 'AlEth',
    legacy: 'AlchemistEth',
  },
};

export const TransmuterConstants = {
  [VaultTypes.alUSD]: {
    transmuterContractSelectors: ['TransmuterV2_DAI', 'TransmuterV2_USDC', 'TransmuterV2_USDT'],
  },
  [VaultTypes.alETH]: {
    transmuterContractSelectors: ['TransmuterV2_ETH'],
  },
};

export const AdapterConstants = {
  [VaultTypes.alUSD]: {
    adapterContractSelectors: ['YearnAdapter_DAI', 'YearnAdapter_USDC', 'YearnAdapter_USDT'],
  },
  [VaultTypes.alETH]: {
    adapterContractSelectors: ['YearnAdapter_WETH'],
  },
};

export const TransmuterNameAliases = {
  dai: 'Zosimos',
  usdc: 'Ge Hong',
  usdt: 'Paracelsus',
  weth: 'Van Helmont',
  fusdt: 'de Rais',
};

export const AllowedVaultTypes = [VaultTypes.alUSD, VaultTypes.alETH];
export const AllowedTransmuterTypes = [VaultTypes.alUSD, VaultTypes.alETH];
export const AllowedAdapterTypes = [VaultTypes.alUSD, VaultTypes.alETH];

export const HiddenVaults = [
  '0x59417c1b2085e086f1EEB1AF0F40eE1dFD9c097f',
  '0xf350C6B7fbe5F6CB53c7D638Dfba9173A5722236',
  '0xC5c0D3e20DF4CA855281B4b5Bcf3bEf8D8068c75',
  '0x400509D00888c46903CF01495BB2eeAfD24F0f80',
];
export const VaultTypesInfos = {
  [VaultTypes.alUSD]: {
    name: 'alUSD',
    icon: 'images/icons/alusd_med.svg',
    useGateway: false,
    metaConfig: {
      '0xdA816459F1AB5631232FE5e97a05BBBb94970c95': {
        rewardAdapter: '',
        rewardType: 'APY',
        customTokenName: true,
        token: 'yvDAI',
        customAddress: '',
        vaultName: 'Yearn',
        beta: false,
        acceptGateway: false,
        acceptWETH: false,
        multicall: true,
        gateway: '',
        strategy: 'https://yearn.finance/#/vault/0xdA816459F1AB5631232FE5e97a05BBBb94970c95',
        bonusType: '',
      },
      '0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE': {
        rewardAdapter: '',
        rewardType: 'APY',
        customTokenName: true,
        token: 'yvUSDC',
        customAddress: '',
        vaultName: 'Yearn',
        beta: false,
        acceptGateway: false,
        acceptWETH: false,
        multicall: true,
        gateway: '',
        strategy: 'https://yearn.finance/#/vault/0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE',
        bonusType: '',
      },
      '0x7Da96a3891Add058AdA2E826306D812C638D87a7': {
        rewardAdapter: '',
        rewardType: 'APY',
        customTokenName: true,
        token: 'yvUSDT',
        customAddress: '',
        vaultName: 'Yearn',
        beta: false,
        acceptGateway: false,
        acceptWETH: false,
        multicall: true,
        gateway: '',
        strategy: 'https://yearn.finance/#/vault/0x7Da96a3891Add058AdA2E826306D812C638D87a7',
        bonusType: '',
      },
      '0x3B27F92C0e212C671EA351827EDF93DB27cc0c65': {
        rewardAdapter: '',
        rewardType: 'APY',
        customTokenName: true,
        token: 'yvUSDT',
        customAddress: '',
        vaultName: 'Yearn',
        beta: true,
        acceptGateway: false,
        acceptWETH: false,
        multicall: true,
        gateway: '',
        strategy: 'https://yearn.finance/#/vault/0x3B27F92C0e212C671EA351827EDF93DB27cc0c65',
        bonusType: '',
      },
      '0x028171bCA77440897B824Ca71D1c56caC55b68A3': {
        gateway: 'ATokenGateway_alUSD',
      },
      '0xBcca60bB61934080951369a648Fb03DF4F96263C': {
        gateway: 'ATokenGateway_alUSD',
      },
      '0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811': {
        gateway: 'ATokenGateway_alUSD',
      },
      '0xcE4a49d7ed99C7c8746B713EE2f0C9aA631688d8': {
        rewardAdapter: 'aave',
        rewardType: 'APR',
        customTokenName: true,
        token: 'aDAI',
        customAddress: '0x028171bCA77440897B824Ca71D1c56caC55b68A3',
        vaultName: 'AAVE',
        beta: true,
        acceptGateway: true,
        acceptWETH: false,
        multicall: false,
        gateway: 'ATokenGateway_alUSD',
        strategy:
          'https://app.aave.com/reserve-overview/?underlyingAsset=0x6b175474e89094c44da98b954eedeac495271d0f&marketName=proto_mainnet',
        bonusType: '',
      },
      '0xf591D878608e2e5c7D4f1E499330f4AB9BbaE37a': {
        rewardAdapter: 'aave',
        rewardType: 'APR',
        customTokenName: true,
        token: 'aUSDC',
        customAddress: '0xBcca60bB61934080951369a648Fb03DF4F96263C',
        vaultName: 'AAVE',
        beta: true,
        acceptGateway: true,
        acceptWETH: false,
        multicall: false,
        gateway: 'ATokenGateway_alUSD',
        strategy:
          'https://app.aave.com/reserve-overview/?underlyingAsset=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&marketName=proto_mainnet',
        bonusType: '',
      },
      '0xBC11De1F20e83F0a6889B8c7A7868E722694E315': {
        rewardAdapter: 'aave',
        rewardType: 'APR',
        customTokenName: true,
        token: 'aUSDT',
        customAddress: '0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811',
        vaultName: 'AAVE',
        beta: true,
        acceptGateway: true,
        acceptWETH: false,
        multicall: false,
        gateway: 'ATokenGateway_alUSD',
        strategy:
          'https://app.aave.com/reserve-overview/?underlyingAsset=0xdac17f958d2ee523a2206206994597c13d831ec7&marketName=proto_mainnet',
        bonusType: '',
      },
      '0x43A502D7e947c8A2eBBaf7627E104Ddcc253aBc6': {
        rewardAdapter: 'aave',
        rewardType: 'APR',
        customTokenName: true,
        token: 'aDAI',
        customAddress: '0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE',
        vaultName: 'AAVE',
        beta: true,
        acceptGateway: true,
        acceptWETH: false,
        multicall: false,
        gateway: 'ATokenGateway_alUSD',
        strategy:
          'https://app.aave.com/reserve-overview/?underlyingAsset=0xda10009cbd5d07dd0cecc66161fc93d7c9000da1&marketName=proto_optimism_v3',
        bonusType: 'aaveOptimism',
      },
      '0x4186Eb285b1efdf372AC5896a08C346c7E373cC4': {
        rewardAdapter: 'aave',
        rewardType: 'APR',
        customTokenName: true,
        token: 'aUSDC',
        customAddress: '0x625E7708f30cA75bfd92586e17077590C60eb4cD',
        vaultName: 'AAVE',
        beta: true,
        acceptGateway: true,
        acceptWETH: false,
        multicall: false,
        gateway: 'ATokenGateway_alUSD',
        strategy:
          'https://app.aave.com/reserve-overview/?underlyingAsset=0x7f5c764cbc14f9669b88837ca1490cca17c31607&marketName=proto_optimism_v3',
        bonusType: 'aaveOptimism',
      },
      '0x2680b58945A31602E4B6122C965c2849Eb76Dd3B': {
        rewardAdapter: 'aave',
        rewardType: 'APR',
        customTokenName: true,
        token: 'aUSDT',
        customAddress: '0x6ab707Aca953eDAeFBc4fD23bA73294241490620',
        vaultName: 'AAVE',
        beta: true,
        acceptGateway: true,
        acceptWETH: false,
        multicall: false,
        gateway: 'ATokenGateway_alUSD',
        strategy:
          'https://app.aave.com/reserve-overview/?underlyingAsset=0x94b008aa00579c1307b0ef2c499ad98a8ce58e58&marketName=proto_optimism_v3',
        bonusType: 'aaveOptimism',
      },
    },
  },
  [VaultTypes.alETH]: {
    name: 'alETH',
    icon: 'images/icons/aleth_med.svg',
    useGateway: true,
    metaConfig: {
      '0xa258C4606Ca8206D8aA700cE2143D7db854D168c': {
        rewardAdapter: '',
        rewardType: 'APY',
        customTokenName: true,
        token: 'yvWETH',
        customAddress: '',
        vaultName: 'Yearn',
        beta: false,
        acceptGateway: true,
        acceptWETH: true,
        multicall: true,
        gateway: 'WETHGateway',
        strategy: 'https://yearn.finance/#/vault/0xa258C4606Ca8206D8aA700cE2143D7db854D168c',
        bonusType: '',
      },
      '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0': {
        rewardAdapter: 'lido',
        rewardType: 'APR',
        customTokenName: false,
        token: '',
        customAddress: '',
        vaultName: 'Lido',
        beta: false,
        acceptGateway: true,
        acceptWETH: true,
        multicall: true,
        gateway: 'WETHGateway',
        strategy: 'https://etherscan.io/token/0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
        bonusType: '',
      },
      '0xae78736Cd615f374D3085123A210448E74Fc6393': {
        rewardAdapter: 'rocketPool',
        rewardType: 'APR',
        customTokenName: false,
        token: '',
        customAddress: '',
        vaultName: 'Rocket',
        beta: false,
        acceptGateway: false,
        acceptWETH: false,
        multicall: false,
        gateway: '',
        strategy: 'https://stake.rocketpool.net/',
        bonusType: '',
      },
      '0x80Ca99D65A8855Cb20e44A5e9B6C6AbF71E3739d': {
        rewardAdapter: 'rocketPool',
        rewardType: 'APR',
        customTokenName: false,
        token: '',
        customAddress: '',
        vaultName: 'Rocket',
        beta: false,
        acceptGateway: false,
        acceptWETH: false,
        multicall: false,
        gateway: '',
        strategy: 'https://stake.rocketpool.net/',
        bonusType: '',
      },
      '0x030bA81f1c18d280636F32af80b9AAd02Cf0854e': {
        gateway: 'ATokenGateway_alETH',
      },
      '0x61134511187a9a2DF38D10DBe07Ba2e8E5563967': {
        rewardAdapter: 'aave',
        rewardType: 'APR',
        customTokenName: true,
        token: 'aWETH',
        customAddress: '0x030bA81f1c18d280636F32af80b9AAd02Cf0854e',
        vaultName: 'AAVE',
        beta: true,
        acceptGateway: true,
        acceptWETH: true,
        multicall: false,
        gateway: 'ATokenGateway_alETH',
        strategy:
          'https://app.aave.com/reserve-overview/?underlyingAsset=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&marketName=proto_mainnet',
        bonusType: '',
      },
      '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8': {
        gateway: 'ATokenGateway_alETH',
      },
      '0x337B4B933d60F40CB57DD19AE834Af103F049810': {
        rewardAdapter: 'aave',
        rewardType: 'APR',
        customTokenName: true,
        token: 'aWETH',
        customAddress: '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8',
        vaultName: 'AAVE',
        beta: true,
        acceptGateway: true,
        acceptWETH: true,
        multicall: false,
        gateway: 'ATokenGateway_alETH',
        strategy:
          'https://app.aave.com/reserve-overview/?underlyingAsset=0x4200000000000000000000000000000000000006&marketName=proto_optimism_v3',
        bonusType: 'aaveOptimism',
      },
    },
  },
};

export const vaultMessages = [
  {
    vault: '0x7Da96a3891Add058AdA2E826306D812C638D87a7',
    level: 0,
    message:
      'Deposit on this vault is paused. Yearn is deprecating this Vault in favor of their new yvUSDT vault. Please migrate your position.',
  },
  {
    vault: '0xae78736Cd615f374D3085123A210448E74Fc6393',
    level: 1,
    message:
      'The updated vault uses Uniswap, so will be subject to the rETH/ETH spread when the rETH buffer does not contain enough ETH for a direct withdrawal.',
  },
];

// @ts-ignore
export const chainIds = [
  {
    id: '0x1',
    legacyId: 1,
    name: 'Ethereum Mainnet',
    icon: 'ethereum',
    abiPath: 'ethereum',
    rpcUrl: 'https://rpc.ankr.com/eth',
    // @ts-ignore
    apiUrl: `https://mainnet.infura.io/v3/${import.meta.env.VITE_INFURA_KEY}`,
    explorer: 'https://etherscan.io/',
    token: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
    },
    vaultTypes: [VaultTypes.alUSD, VaultTypes.alETH],
  },
  {
    id: '0xfa',
    legacyId: 250,
    name: 'Fantom Opera',
    icon: 'fantom',
    abiPath: 'fantom',
    rpcUrl: 'https://rpc.ankr.com/fantom',
    apiUrl: '',
    explorer: 'https://ftmscan.com/',
    token: {
      symbol: 'FTM',
      name: 'Fantom',
      decimals: 18,
    },
    vaultTypes: [VaultTypes.alUSD],
  },
  {
    id: '0xa4b1',
    legacyId: 42161,
    name: 'Arbitrum One',
    icon: 'arbitrum',
    abiPath: 'arbitrum',
    rpcUrl: 'https://rpc.ankr.com/arbitrum',
    // @ts-ignore
    apiUrl: `https://arbitrum-mainnet.infura.io/v3/${import.meta.env.VITE_INFURA_KEY}`,
    explorer: 'https://arbiscan.io/',
    token: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
    },
    vaultTypes: [],
  },
  {
    id: '0xa',
    legacyId: 10,
    name: 'Optimism',
    icon: 'optimism',
    abiPath: 'optimism',
    rpcUrl: 'https://rpc.ankr.com/optimism',
    // @ts-ignore
    apiUrl: `https://optimism-mainnet.infura.io/v3/${import.meta.env.VITE_INFURA_KEY}`,
    explorer: 'https://optimistic.etherscan.io/',
    token: {
      symbol: 'ETH',
      name: 'Optimism ETH',
      decimals: 18,
    },
    vaultTypes: [VaultTypes.alUSD, VaultTypes.alETH],
  },
];
