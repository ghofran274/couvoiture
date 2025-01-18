import React, { useState, useEffect } from 'react';
import './details.css';

import { db, auth } from "../../../firebase"; // Ensure auth is imported for user details
import { query, collection, where, getDocs, updateDoc } from "firebase/firestore";

const Detail = ({ trip }) => {
  const [userRating, setUserRating] = useState(0); // Selected rating by the user
  const [loading, setLoading] = useState(false); // Loading state
  const [currentUserName, setCurrentUserName] = useState(null); // Current user's name
  const [error, setError] = useState(""); // Error message state

  // Fetch the logged-in user's name
  useEffect(() => {
    const fetchCurrentUserName = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDocs(
          query(collection(db, "Users"), where("uid", "==", user.uid))
        );
        const userData = userDoc.docs[0]?.data();

        // Log the current user's info in the console
        console.log("Current User Info:", userData);

        setCurrentUserName(userData?.fullName || null);
      }
    };

    fetchCurrentUserName();
  }, []);

  if (!trip) {
    return (
      <div className="detail-container">
        <p>Select a trip to see the details here.</p>
      </div>
    );
  }

  const averageRating =
    trip.ratings && trip.ratings.length > 0
      ? (trip.ratings.reduce((a, b) => a + b, 0) / trip.ratings.length).toFixed(1)
      : "No ratings yet";

  const handleRatingSubmit = async () => {
    setLoading(true);
    try {
      const tripsQuery = query(
        collection(db, "trips"),
        where("name", "==", trip.name)
      );

      const querySnapshot = await getDocs(tripsQuery);

      // Fetch the current ratings from the first document (they should be the same for all trips with the same name)
      let ratingsArray = [];
      querySnapshot.forEach((docSnapshot) => {
        const tripData = docSnapshot.data();
        ratingsArray = [...(tripData.ratings || []), userRating];
      });

      // Update all matching trips with the new ratings array
      for (const docSnapshot of querySnapshot.docs) {
        const tripRef = docSnapshot.ref;
        await updateDoc(tripRef, {
          ratings: ratingsArray,
        });
      }

      alert("Thank you for your rating!");
    } catch (err) {
      console.error("Error saving ratings:", err);
      alert("Failed to submit your rating. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="detail-container">
      <h2>Trip Details</h2>
      <img
        src={trip.image}
        alt={`Driver ${trip.driver}`}
        className="detail-avatar"
      />
      <p><strong>Driver:</strong> {trip.name}</p>
      <p><strong>Phone:</strong> {trip.tel}</p>
      <p><strong>Rating:</strong> ★ {averageRating}</p>
      <p><strong>From:</strong> {trip.from}</p>
      <p><strong>To:</strong> {trip.to}</p>
      <p><strong>Date:</strong> {trip.date}</p>
      <p><strong>Departure Time:</strong> {trip.departureTime}</p>
      <p><strong>Description:</strong> {trip.description}</p>
      <p><strong>Price:</strong> {trip.price ? `${trip.price} DT` : trip.status}</p>

      <div className="rating-section">
        <h3>Rate the Driver</h3>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= userRating ? "selected" : ""}`}
              onClick={() => setUserRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button
          className="rate-button"
          disabled={loading || userRating === 0}
          onClick={handleRatingSubmit}
        >
          {loading ? "Submitting..." : "Submit Rating"}
        </button>
      </div>

      <form className="message-form">
        <textarea
          className="message-input"
          placeholder="Type your message here..."
        ></textarea>
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Detail;
