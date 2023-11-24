import React, { useState, useEffect } from "react";
import "./Card.css"; // Make sure to create a Card.css file for styling

type CardProps = {
	image: string;
	rentalPeriod: string;
	bidderName: string;
	highestBid: number;
	progress: number;
	countdownStart: number; // in seconds
};

const Card: React.FC<CardProps> = ({ image, rentalPeriod, bidderName, highestBid, progress, countdownStart }) => {
	const [timer, setTimer] = useState(countdownStart);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((prevTime) => prevTime - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (timer <= 0) {
			clearInterval(timer);
			// Handle expiration logic here
		}
	}, [timer]);

	// Function to format the time
	const formatTime = (totalSeconds: number) => {
		const days = Math.floor(totalSeconds / (3600 * 24));
		const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
		const minutes = Math.floor((totalSeconds % 3600) / 60);
		const seconds = totalSeconds % 60;

		return `${days}d ${hours}h ${minutes}m ${seconds}s`;
	};

	return (
		<div className="card">
			<img src={image} alt="Rental Space" className="card-image" />
			<div className="card-content">
				<div className="rental-period">{rentalPeriod}</div>
				<div className="progress-bar">
					<div className="progress" style={{ width: `${progress}%` }}></div>
					{/* Display the formatted countdown timer */}
					<div className="countdown-timer">Time left: {formatTime(timer)}</div>
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
				<button className="buy-now-btn">Place Your Bid</button>
			</div>
		</div>
	);
};

export default Card;
