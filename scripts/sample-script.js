const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const CodeNFT = await hre.ethers.getContractFactory("CodeNFT");
  const code = await CodeNFT.deploy();

  await code.deployed();
  console.log("CodeNFT deployed to:", code.address);
  
  let txn = await code.mintNFT();
  await txn.wait();
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  
  