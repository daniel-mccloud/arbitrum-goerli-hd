# How to deploy

## Dependencies install
To install dependencies in your terminal run:

```terminal
npm install
```

# Deployment of smart contracts
## Configuring your .env file
Copy .env.sample and rename to .env. Then edit it inserting the mnemonic phrase of your wallet and the rpc url of your choice.

## Deployment to Hardhat test network
To deploy the contracts to hardhat test network, run:
```terminal
hardhat deploy
```

## Deployment to Arbitrum Goerli Testnet
To deploy the contracts to Goerli in the Arbitrum chain, make sure your wallet has enough AGOR for the gas fees and run:
```terminal
hardhat deploy --network arbitrum_goerli
```

## Verification
To verify the contracts just deployed, run:
```terminal
hardhat --network arbitrum_goerli sourcify
```