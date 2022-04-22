const hre = require("hardhat");

async function main() {
	const MyPunksNFT = await hre.ethers.getContractFactory("MyPunksNFT");
	const myPunksNft = await MyPunksNFT.deploy();

	await myPunksNft.deployed();

	console.log("MyPunksNFT deployed to:", myPunksNft.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
