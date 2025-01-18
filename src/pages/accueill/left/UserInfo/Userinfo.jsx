import React, { useEffect, useState } from "react";
import "./userInfo.css";
import avatar from "./avatar.png";
import edit from "./edit.png";
import { auth, db } from "../../../firebase";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

export const Userinfo = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [averageRating, setAverageRating] = useState(null);
  const [loading, setLoading] = useState(true); // Indicateur de chargement
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUserDetails(userData);

            // Fetch the trip ratings after fetching user details
            if (userData.fullName) {
              fetchTripRatings(userData.fullName);
            }
          } else {
            console.log("No user data found");
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  const fetchTripRatings = async (fullName) => {
    try {
      // Query trips with a name matching the user's full name
      const tripsQuery = query(
        collection(db, "trips"),
        where("name", "==", fullName) // Match the trip name with the user's full name
      );

      const querySnapshot = await getDocs(tripsQuery);

      // Collect and calculate average ratings from all matching trips
      let totalRatings = 0;
      let ratingsCount = 0;

      querySnapshot.docs.forEach((docSnapshot) => {
        const tripData = docSnapshot.data();
        if (tripData.ratings && tripData.ratings.length > 0) {
          totalRatings += tripData.ratings.reduce((sum, rating) => sum + rating, 0);
          ratingsCount += tripData.ratings.length;
        }
      });

      if (ratingsCount > 0) {
        const avg = (totalRatings / ratingsCount).toFixed(1);
        setAverageRating(avg);
      } else {
        setAverageRating("No ratings yet");
      }
    } catch (error) {
      console.error("Error fetching trip ratings:", error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div>
      {userDetails ? (
        <div className="Userinfo">
          <div className="User">
          <img
          src={userDetails.profileImage || defaultAvatar} // Utiliser l'avatar enregistré ou une image par défaut
          alt="Avatar utilisateur"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
            <h2>{userDetails.fullName}</h2>
            <p>{averageRating || "Loading..."}★</p>
          </div>
          <div className="Icons">
            <img src={edit} alt="Edit Icon" onClick={handleLogout} />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Userinfo;