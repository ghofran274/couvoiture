import React, { useState, useEffect } from "react";
import { db } from "../../../firebase"; // Your Firebase configuration file
import { collection, addDoc,doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Authentication
import "./chatList.css";



const Formtraje = () => {
  const [formData, setFormData] = useState({
    name: "",
    from: "",
    to: "",
    date: "",
    places: "",
    departureTime: "",
    arrivalTime: "",
    description: "",
    price: "",
    tel: "",
  });

  // Set the user's name automatically on component mount
  useEffect(() => {
    const auth = getAuth();

    // Use onAuthStateChanged to listen for authentication state changes
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch user data from Firestore based on user email or other identifier
        const docRef = doc(db, "Users", user.uid); // Assuming user.uid is used for Firestore doc ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const fullName = data.fullName || "Anonymous"; // Default to "Anonymous" if fullName is missing
          
          // Set formData with the name from Firestore
          setFormData((prev) => ({
            ...prev,
            name: fullName,
          }));

          console.log("User Full Name from Firestore:", fullName);
        } else {
          console.log("No such document!");
        }
      } else {
        // If no user is logged in, fallback to Anonymous
        setFormData((prev) => ({
          ...prev,
          name: "Anonymous",
        }));
        console.log("No user logged in");
      }
    });
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add form data to Firestore
      const docRef = await addDoc(collection(db, "trips"), formData);
      console.log("Document written with ID: ", docRef.id);
      alert("Trip added successfully!");
    } catch (err) {
      console.error("Error adding document: ", err);
      alert("Failed to add trip. Please try again.");
    }
  };

  return (
    <div className="BOX">
    <div className="colored-section">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Form Trajet</legend>
          <table className="custom-table">
            <tr>
              <td className="Form-cell">
                <div className="Form-group">
                  <label htmlFor="from">From:</label>
                  <select
                    id="from"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a location</option>
                    <option value="ENISo">ENISo</option>
                    <option value="SAHLOUL">SAHLOUL</option>
                    <option value="KALLA KEBIRA">KALLA KEBIRA</option>
                    <option value="MESTIR">MESTIR</option>
                    <option value="SOUSSE">SOUSSE</option>
                    <option value="MEHDIA">MEHDIA</option>
                  </select>
                </div>
              </td>
              <td className="Form-cell">
                <div className="Form-group">
                  <label htmlFor="to">To:</label>
                  <select
                    id="to"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a destination</option>
                    <option value="ENISo">ENISo</option>
                    <option value="SAHLOUL">SAHLOUL</option>
                    <option value="KALLA KEBIRA">KALLA KEBIRA</option>
                    <option value="MESTIR">MESTIR</option>
                    <option value="SOUSSE">SOUSSE</option>
                    <option value="MEHDIA">MEHDIA</option>
                  </select>
                </div>
            </td>
            </tr>
            <tr>
              <td className="Form-cell">
                <div className="Form-group">
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </td></tr>
              <tr>
              <td className="Form-cell">
                <div className="Form-group">
                  <label htmlFor="places">Nombre de Places:</label>
                  <input
                    type="number"
                    id="places"
                    name="places"
                    value={formData.places}
                    min="1"
                    max="4"
                    onChange={handleChange}
                    required
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="Form-cell">
                <div className="Form-group">
                  <label htmlFor="departureTime">Heure de Départ:</label>
                  <input
                    type="time"
                    id="departureTime"
                    name="departureTime"
                    value={formData.departureTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </td>
              <td className="Form-cell"></td>
            </tr>
            <tr>
              <td className="Form-cell">
                <div className="Form-group">
                  <label htmlFor="price">Price:</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
              </td>
              <td className="Form-cell">
                <div className="Form-group">
                  <label htmlFor="tel">Tel:</label>
                  <input
                    type="text"
                    id="tel"
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                    required
                  />
                </div>
              </td>
            </tr>
          </table>
          <div className="ghof">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Add a short description..."
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="Btn-submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
    </div>
  );
};
export default Formtraje;
