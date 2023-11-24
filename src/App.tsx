import "./App.css";
import Card from "./Components/Card";
import shelfSpace from "./assets/space.jpg";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import TileMap from "./Components/Tilemap";
import TileMapImage from "./assets/tilemapimage.png";

const { chains, publicClient } = configureChains(
	[mainnet, polygon, optimism, arbitrum, base, zora],
	[alchemyProvider({ apiKey: "JCc5AElyDSIX0FdDABzhhDqRrPYJelUu" }), publicProvider()]
);

const { connectors } = getDefaultWallets({
	appName: "MetaMarket",
	projectId: "metamarketID",
	chains,
});

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
});

function App() {
	const [isOnCard, setIsOnCard] = useState(false);
	return (
		<WagmiConfig config={wagmiConfig}>
			<RainbowKitProvider chains={chains}>
				<nav className="navbar">
					<ConnectButton />
				</nav>
				{isOnCard ? (
					<Card
						image={shelfSpace} // Provide the image source
						rentalPeriod="RSVP for 3 days"
						bidderName="John Doe"
						highestBid={250000}
						progress={50}
						countdownStart={60}
					/>
				) : (
					<TileMap
						backgroundImage={TileMapImage}
						onTileClick={(id) => {
							console.log(id);
							setIsOnCard(true);
						}}
					></TileMap>
				)}
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default App;
