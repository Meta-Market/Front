import React from "react";
import "./Card.css"; // Make sure to create a Card.css file for styling

// Define a type for the props
type CardProps = {
	image: string;
	rentalPeriod: string;
	bidderName: string;
	highestBid: number;
	progress: number;
};

const Card: React.FC<CardProps> = ({ image, rentalPeriod, bidderName, highestBid, progress }) => {
	return (
		<div className="card">
			<img src={image} alt="Rental Space" className="card-image" />
			<div className="card-content">
				<div className="rental-period">{rentalPeriod}</div>
				<div className="progress-bar">
					<div className="progress" style={{ width: `${progress}%` }}></div>
				</div>
				<div className="bid-details">
					<div className="bid-info">
						<div className="label">bidder</div>
						<div className="name">{bidderName}</div>
					</div>
					<div className="bid-info">
						<div className="label">highest</div>
						<div className="price">{highestBid}</div>
					</div>
				</div>
				<button className="buy-now-btn">BUY NOW</button>
			</div>
		</div>
	);
};

export default Card;
