import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const AdTheaterList = () => {
  const [theaters, setTheaters] = useState([]);
  const [error, setError] = useState(null);

  // Centralize API URL using environment variable or fallback to localhost
  const apiUrl = import.meta.env.VITE_API_URL;

  // Fetch theaters
  useEffect(() => {
    const fetchTheaters = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/theaters/list-theaters`);
        setTheaters(response.data);
      } catch (error) {
        setError('Error fetching theaters: ' + (error.response?.data?.message || error.message));
      }
    };

    fetchTheaters();
  }, []);

  const handleApprove = async (theaterId) => {
    const token = localStorage.getItem('token'); // Get token from localStorage
    if (!token) {
      setError('No authentication token found.');
      return;
    }

    const decoded = jwt_decode(token);
    console.log('Decoded token:', decoded); // Log decoded token for debugging

    // Check if token is expired
    if (decoded.exp * 1000 < Date.now()) {
      setError('Session expired. Please log in again.');
      return;
    }

    try {
      const response = await axios.put(
        `${apiUrl}/api/theaters/approve/${theaterId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}` // Attach token in the headers
          }
        }
      );

      console.log('Approval response:', response.data); // Log the response for approval

      // Update theater list to reflect approval status
      setTheaters((prevTheaters) =>
        prevTheaters.map((theater) =>
          theater._id === theaterId ? { ...theater, isApproved: true } : theater
        )
      );
    } catch (error) {
      if (error.response) {
        console.error('Error approving theater:', error.response.data || error.message); // Log error response
        setError('Error approving theater: ' + (error.response.data?.message || error.message));
      } else {
        console.error('Error approving theater:', error.message); // If no response, log the message
        setError('Error approving theater: ' + error.message);
      }
    }
  };

  return (
    <div>
    

      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Theater List</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div className="theater-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {theaters.length === 0 ? (
            <p>No theaters available.</p>
          ) : (
            theaters.map((theater) => (
              <div key={theater._id} className="theater-card p-4 border rounded shadow-md bg-white">
                <h2 className="text-xl font-semibold">{theater.theaterName}</h2>
                <p className="text-gray-700">Location: {theater.location}</p>
                <p className="text-gray-700">Owner: {theater.owner ? theater.owner.name : 'Unknown'}</p>
                <p className="text-green-700 font-semibold">
                  Status: {theater.isApproved ? 'Approved' : 'Pending Approval'}
                </p>

                {/* Approve Button */}
                {!theater.isApproved && (
                  <button
                    onClick={() => handleApprove(theater._id)}
                    className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                  >
                    Approve
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdTheaterList;
