import React, { useState } from "react";
import { ethers, BigNumber } from "ethers";
import myPunksNFT from "../MyPunksNFT.json";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const myPunksNFTAddress = "0x5824f151ceD7aC99312082653FE945dFA0f29B5c";

function MainMint({ accounts, setAccounts }) {
	const [mintAmount, setMintAmount] = useState(1);
	const isConnected = Boolean(accounts[0]);

	async function handleMint() {
		if (window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(
				myPunksNFTAddress,
				myPunksNFT.abi,
				signer
			);
			try {
				const response = await contract.mint(
					BigNumber.from(mintAmount),
					{
						value: ethers.utils.parseEther(
							(0.02 * mintAmount).toString()
						),
					}
				);
				console.log("response:", response);
			} catch (error) {
				console.log("error: ", error);
			}
		}
	}

	const handleDecrement = () => {
		if (mintAmount <= 1) return;
		setMintAmount(mintAmount - 1);
	};

	const handleIncrement = () => {
		if (mintAmount >= 3) return;
		setMintAmount(mintAmount + 1);
	};

	return (
		<Flex
			justify="center"
			align="center"
			height="100vh"
			paddingBottom="250px">
			<Box width="520px">
				<div>
					<Text fontSize="48px" textShadow="0 5px #000000">
						My Punks NFT's
					</Text>
					<Text
						fontSize="30px"
						textShadow="0 2px 2px #000000"
						fontFamily="VT323"
						letterSpacing="-5.5%">
						It's a clone to show a sample NFT webpage with Minting.
						You can mint one for FREE now on the Ethereum blockchain
						(Rinkeby). Created by -- Adelaja Ayomide.
					</Text>
				</div>
				{isConnected ? (
					<div>
						<Flex align="center" justify="center">
							<Button
								backgroundColor="#D6517D"
								borderRadius="5px"
								boxShadow="0 2px 2px 1px #0F0F0F"
								color="#FFFFFF"
								cursor="pointer"
								fontFamily="Inherit"
								padding="15px"
								marginTop="10px"
								onClick={handleDecrement}>
								-
							</Button>
							<Input
								readOnly
								fontFamily="Inherit"
								width="100px"
								height="40px"
								textAlign="center"
								paddingLeft="19px"
								marginTop="10px"
								type="number"
								value={mintAmount}
							/>
							<Button
								backgroundColor="#D6517D"
								borderRadius="5px"
								boxShadow="0 2px 2px 1px #0F0F0F"
								color="#FFFFFF"
								cursor="pointer"
								fontFamily="Inherit"
								padding="15px"
								marginTop="10px"
								onClick={handleIncrement}>
								+
							</Button>
						</Flex>
						<Button
							backgroundColor="#D6517D"
							borderRadius="5px"
							boxShadow="0 2px 2px 1px #0F0F0F"
							color="#FFFFFF"
							cursor="pointer"
							fontFamily="Inherit"
							padding="15px"
							margin="10px"
							onClick={handleMint}>
							Mint Now
						</Button>
					</div>
				) : (
					<Text
						marginTop="70px"
						fontSize="30px"
						letterSpacing="-5.5%"
						color="#D6517D"
						textShadow="0 3px #000000"
						fontFamily="VT323">
						Please connect your Ethereum wallet to Mint!
					</Text>
				)}
			</Box>
		</Flex>
	);
}

export default MainMint;
