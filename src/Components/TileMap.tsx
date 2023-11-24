import React from "react";
import "./TileMap.css"; // Assuming you have a CSS file for styling

type TileMapProps = {
	backgroundImage: string;
	onTileClick: (id: number) => void;
};

const TileMap: React.FC<TileMapProps> = ({ backgroundImage, onTileClick }) => {
	const tiles = [];
	const rows = 15; // Adjust the number of rows and columns as needed
	const columns = 20;

	for (let i = 0; i < rows * columns; i++) {
		tiles.push(
			<button
				key={i}
				className="tile"
				onClick={() => onTileClick(i)}
				// Add styles or classes to make the tiles visible
			/>
		);
	}

	return (
		<div
			className="tilemap"
			style={{
				width: "751px",
				height: "530px",
				backgroundImage: `url(${backgroundImage})`,
				display: "grid",
				gridTemplateRows: `repeat(${rows}, 1fr)`,
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
			}}
		>
			{tiles}
		</div>
	);
};

export default TileMap;
