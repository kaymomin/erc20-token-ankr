require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');

require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks:{
    goerli:{
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
      
    }
  }
};
