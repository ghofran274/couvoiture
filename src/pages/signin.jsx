import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Avatar from "./avatar"; // Composant dropdown d'avatars

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const docRef = doc(db, "Avatars", "default");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAvatars(docSnap.data().urls || []);
        } else {
          console.error("Aucun avatar trouvé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des avatars :", error);
      }
    };

    fetchAvatars();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          fullName: fname,
          profileImage: selectedAvatar || "",
        });
        toast.success("Utilisateur enregistré avec succès !");
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleRegister}>
        <h2>Sign Up</h2>
        <label>
          Full Name:
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="New password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        {/* Liste déroulante pour choisir un avatar */}
        <div>
          <h3>Choose an Avatar:</h3>
          <Avatar
            avatars={avatars}
            selectedAvatar={selectedAvatar}
            setSelectedAvatar={setSelectedAvatar}
          />
        </div>

        <button>Sign Up</button>

        <p style={{ marginTop: "10px" }}>
          Already Registered? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
