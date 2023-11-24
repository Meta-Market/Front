import "./App.css";
import Card from "./Components/Card";
import shelfSpace from "./assets/space.jpg";

function App() {
	return (
		<Card
			image={shelfSpace} // Provide the image source
			rentalPeriod="RSVP for 3 days"
			bidderName="John Doe"
			highestBid={250000}
			progress={50}
		/>
	);
}

export default App;
