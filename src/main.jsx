import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global styles
import Card from './Card'; // Import the Card component
import rentalSpaceImage from './su.jpg'; // Import the image if it's local

ReactDOM.render(
  <React.StrictMode>
    <Card
      image={rentalSpaceImage} // Provide the image source
      rentalPeriod="renter for 3 days"
      bidderName="sami kamoun"
      highestBid="$25"
      progress={50}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
