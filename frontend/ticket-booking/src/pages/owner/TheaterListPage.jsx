// src/pages/owner/TheaterList.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTheaterList } from '../../services/theaterApi';


const TheaterList = () => {
  const [theaters, setTheaters] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getTheaters = async () => {
      try {
        const data = await fetchTheaterList();
        setTheaters(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getTheaters();
  }, []);

  const handleAddShow = (theater) => {
    navigate('/owner/addshows', {
      state: {
        theaterId: theater._id,
        theaterName: theater.theaterName,
      },
    });
  };

  return (
    <div>
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Theater List</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {theaters.length === 0 ? (
            <p>No theaters available.</p>
          ) : (
            theaters.map((theater) => (
              <div key={theater._id} className="p-4 border rounded shadow-md bg-white">
                <h2 className="text-xl font-semibold">Theater: {theater.theaterName}</h2>
                <p className="text-gray-700">Location: {theater.location}</p>
                <p className="text-gray-700">
                  Owner: {theater.owner ? theater.owner.name : 'Unknown'}
                </p>
                <p className="text-green-700 font-semibold">
                  Status: {theater.isApproved ? 'Approved' : 'Pending Approval'}
                </p>
                {theater.isApproved && (
                  <button
                    onClick={() => handleAddShow(theater)}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                  >
                    Add Show
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

export default TheaterList;
