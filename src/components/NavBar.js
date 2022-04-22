import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Facebook from "../assets/social-media-icons/facebook_32x32.png";
import Email from "../assets/social-media-icons/email_32x32.png";
import Twitter from "../assets/social-media-icons/twitter_32x32.png";

function NavBar({ accounts, setAccounts }) {
	const isConnected = Boolean(accounts[0]);

	async function connectAccount() {
		if (window.ethereum) {
			const accounts = await window.ethereum.enable({
				method: "eth_requestAccounts",
			});
			setAccounts(accounts);
		}
	}

	return (
		<Flex justify="space-between" align="center" padding="30px">
			{/* Left Side */}
			<Flex justify="space-around" width="40%" padding="0 75px">
				<Link href="https://www.facebook.com">
					<Image
						src={Facebook}
						alt="logo"
						boxSize="42px"
						margin="0 15px"
					/>
				</Link>
				<Link href="https://www.twitter.com">
					<Image
						src={Twitter}
						alt="logo"
						boxSize="42px"
						margin="0 15px"
					/>
				</Link>
				<Link href="https://www.gmail.com">
					<Image
						src={Email}
						alt="logo"
						boxSize="42px"
						margin="0 15px"
					/>
				</Link>
			</Flex>

			{/* Right Side */}
			<Flex
				justify="space-between"
				width="40%"
				align="center"
				padding="30px">
				<Box margin="0 15px">About</Box>
				<Spacer />
				<Box margin="0 15px">Mint</Box>
				<Spacer />
				<Box margin="0 15px">Team</Box>
				<Spacer />
				{/* Connect Account */}
				{isConnected ? (
					<Box margin="0 15px">Connected</Box>
				) : (
					<Button
						backgroundColor="#D6517D"
						borderRadius="5px"
						boxShadow="0 2px 2px 1px #0F0F0F"
						color="#FFFFFF"
						cursor="pointer"
						fontFamily="Inherit"
						padding="15px"
						margin="0 15px"
						onClick={connectAccount}>
						Connect Account
					</Button>
				)}
			</Flex>
		</Flex>
	);
}

export default NavBar;
