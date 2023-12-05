// require("@nomicfoundation/hardhat-toolbox");
// require("hardhat-deploy");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.19",
// };

require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")
const pkg = require("./utils/network")
const { node_url, accounts } = pkg

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    arbitrum_goerli: {
      url: node_url('arbitrum_goerli'),
      accounts: accounts('arbitrum_goerli'),
    }
  },
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
    }
  },
};
