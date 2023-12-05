module.exports = async ({ getNamedAccounts, deployments }) => {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.parseEther("0.001");

  const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
  });
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