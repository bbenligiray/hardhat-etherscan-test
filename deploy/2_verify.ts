const hre = require('hardhat');

module.exports = async () => {
  const MyContract = await hre.deployments.get('MyContract');
  await hre.run('verify:verify', {
    address: MyContract.address,
    constructorArguments: [],
  });
};
