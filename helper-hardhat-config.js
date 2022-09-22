const { ethers } = require('hardhat')

const networkConfig = {
  31337: {
    name: 'hardhat',
    entranceFee: ethers.utils.parseEther('0.01'),
    gasLane:
      '0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15',
    callbackGasLimit: '500000',
    interval: '30',
  },
  5: {
    name: 'goerli',
    subscriptionId: '10015',
    gasLane:
      '0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15', // 30 gwei aka Key hash
    interval: '30',
    entranceFee: ethers.utils.parseEther('0.01'), // 0.1 ETH
    callbackGasLimit: '500000', // 500,000 gas
    vrfCoordinatorV2: '0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D',
  },
}

const developmentChains = ['hardhat', 'localhost']
module.exports = { networkConfig, developmentChains }
