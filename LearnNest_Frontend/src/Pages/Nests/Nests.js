import React, { useEffect, useState } from 'react';
import './Nests.css';
import axios from 'axios';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importing an icon for location

const Nests = () => {
  const [nests, setNests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllNests();
  }, []);

  const fetchAllNests = async () => {
    try {
      const response = await axios.get('https://localhost:7209/api/Nest');
      setNests(response.data);
    } catch (error) {
      console.error('Error fetching nests:', error);
      setError('Failed to fetch nests. Please try again later.');
    }
  };

  return (
    <div className='nests-section'>
      <h1 className='section-title'>Explore Our Branches</h1>

      {/* Display an error message if there's an error */}
      {error && <div className="error-message">{error}</div>}

      <div className="nests-container">
        {/* Render nests if available */}
        {nests.length > 0 ? (
          nests.map(nest => (
            <div key={nest.nestId} className='nest-card'>
              <div className="nest-content">
                <h2>{nest.nestName}</h2>
                <p className="location">
                  <FaMapMarkerAlt className="location-icon" /> {nest.nestLocation}
                </p>
                <p className="description">{nest.nestDescription}</p>
              </div>
            </div>
          ))
        ) : (
          // Show a loading message or a "No nests available" message
          !error && <div className="loading-message">Loading branches...</div>
        )}
      </div>
    </div>
  );
};

export default Nests;
