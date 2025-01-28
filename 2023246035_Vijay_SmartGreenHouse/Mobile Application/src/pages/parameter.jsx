import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './parameter.css';

const Parameter = () => {
  const [soilMoisture, setSoilMoisture] = useState(null);
  const [phValue, setPhValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = 'Z2R24GEM0BVVHSUN';
    const channelId = '2767540';

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${apiKey}&results=1`
        );
        const data = await response.json();
        const latestFeed = data.feeds[0];
        setSoilMoisture(latestFeed.field1);
        setPhValue(latestFeed.field2);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const analyzeSoilMoisture = () => {
    if (soilMoisture === null) return '';
    return soilMoisture > 60 ? 'Optimal moisture level.' : 'Soil is too dry, consider irrigation.';
  };

  const analyzePhValue = () => {
    if (phValue === null) return '';
    return phValue >= 6 && phValue <= 7 ? 'Optimal pH level for plant growth.' : 'pH level is out of optimal range.';
  };

  // Navigate to the User page with pH value
  const goToUserPage = () => {
    navigate('/user', { state: { phValue, soilMoisture } });
  };

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="containerparameter">
      <div className="charts">
        <div className="frame">
          <h2>Soil Moisture</h2>
          <iframe
            src="https://thingspeak.mathworks.com/channels/2767540/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line"
            title="Soil Moisture"
          />
          <p className="soil-calc">
            {analyzeSoilMoisture()}
            <br />
            Current Soil Moisture: {soilMoisture} %
          </p>
        </div>

        <div className="frame">
          <h2>pH Value</h2>
          <iframe
            src="https://thingspeak.mathworks.com/channels/2767540/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
            title="pH Value"
          />
          <p className="ph-calc">
            {analyzePhValue()}
            <br />
            Current pH Value: {phValue}
          </p>
        </div>
      </div>
      <button onClick={goToUserPage} className="go-to-user-btn">
        Go to User Page
      </button>
    </div>
  );
};

export default Parameter;
