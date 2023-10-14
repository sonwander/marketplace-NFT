require("@nomiclabs/hardhat-waffle");

const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim();

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  //defaultNetwork: "ganache",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/fd34ebc85f360b6534793b1e667f92cba15d05eb365b947b2e6518110713b7ff",
      accounts: [privateKey]
    },
    ganache: {
      url: "http://127.0.0.1:7545"
    },
    // polygon: {
    //   url: "https://rpc-mumbai.maticvigil.com/v1/99a99d15ac2ad3b526aa97401fdbe30ee724ba38",
    //   accounts: [privateKey]
    // },
    hardhat: {
    },
  },
};