import type { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'hardhat-deploy';

const config: HardhatUserConfig = {
  etherscan: {
    apiKey: {
      'oev-network-sepolia-testnet': 'DUMMY_VALUE',
    },
    customChains: [
      {
        network: 'oev-network-sepolia-testnet',
        chainId: 736160594,
        urls: {
          apiURL: 'https://oev-network-sepolia-testnet-blockscout.eu-north-2.gateway.fm/api',
          browserURL: 'https://oev-network-sepolia-testnet-blockscout.eu-north-2.gateway.fm/',
        },
      },
    ],
  },
  networks: {
    'oev-network-sepolia-testnet': {
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk',
      },
      chainId: 736160594,
      url: 'https://oev-network-sepolia-testnet-rpc.eu-north-2.gateway.fm',
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
