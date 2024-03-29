const hardhat = require("hardhat");

async function main() {
  const Greeter = await hardhat.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello Hardhat!");
  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
})