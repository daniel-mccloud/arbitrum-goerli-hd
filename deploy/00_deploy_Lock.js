/**
 * @param {import('hardhat/types').HardhatRuntimeEnvironment} hre - Hardhat Runtime Environment
 */
module.exports = async ({ getNamedAccounts, deployments, ethers }) => {
  const { parseEther } = ethers
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = parseEther("0.001");

  const { deploy } = deployments
  const { deployer } = await getNamedAccounts();
  await deploy('Lock', {
    from: deployer,
    args: [
      unlockTime
    ],
    value: lockedAmount,
    log: true
  })

}
module.exports.tags = ['Lock']