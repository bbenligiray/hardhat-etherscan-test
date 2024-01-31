const hre = require('hardhat');

module.exports = async () => {
  const { deploy, log } = hre.deployments;
  const accounts = await hre.getUnnamedAccounts();

  const myContract = await deploy('MyContract', {
    from: accounts[0],
    log: true,
    deterministicDeployment: hre.ethers.ZeroHash,
  });
  log(`Deployed MyContract at ${myContract.address}`);
};
