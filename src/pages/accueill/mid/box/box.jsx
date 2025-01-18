import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db , auth } from "../../../firebase"; // Import Firestore instance

import "./box.css";

const Box = ({ onSelectTrip }) => {
  const [trips, setTrips] = useState([]);

  // Fetch trips from Firestore
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "trips"));
        const tripsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setTrips(tripsData);
      } catch (error) {
        console.error("Error fetching trips: ", error);
      }
    };

    fetchTrips();
  }, []);

  const handleClick = (trip) => {
    onSelectTrip(trip);
  };

  return (
    <div className="trip-list-centered">
      {trips.length > 0 ? (
        trips.map((trip) => (
          <div
            key={trip.id}
            className="trip-card-styled-trip-card"
            onClick={() => handleClick(trip) }
          >
            <div className="trip-card-header">
              <div className="trip-time">
                <span>{trip.departureTime}</span>
                <span className="trip-duration"> {trip.duration} AM </span>
                <span>{trip.arrivalTime}</span>
              </div>
              
              <div className="place">
                <span> nbre de places {trip.places}</span>
                
              </div>
              <div className="trip-route">
                <span>{trip.from}</span>
                <span className="trip-arrow">→</span>
                <span>{trip.to}</span>
              </div>
            </div>
            <div className="trip-card-body">
              <div className="trip-driver">
                <img
                  src={trip.profileImage}
                  alt={`Driver ${trip.driver}`}
                  className="driver-avatar"
                />
                <div className="driver-info">
                  <span className="driver-name">{trip.name}</span>
                  <span className="driver-rating">★ {trip.rating}</span>
                </div>
              </div>
              <div className="trip-price">
                {trip.price ? (
                  <span className="price">{trip.price} dt</span>
                ) : (
                  <span className="status">{trip.status}</span>
                )}
                <br></br>
                <span className="status">{trip.date}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No trips available</p>
      )}
    </div>
  );
};

export default Box;
