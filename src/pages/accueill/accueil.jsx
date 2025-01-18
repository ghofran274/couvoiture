import React, { useEffect, useState } from "react";
import "./Accueill.css"; // Ensure this matches the exact file name


//import TravelSearchBar from "../../Components/TravelSearchBar";
import Left from "./left/left";
import Mid from "./mid/mid";
import Right from "./right/right";


const Accueil = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  

  return (
  <section className="ConTainer">
    
    <Left/>
    <Mid onSelectTrip={setSelectedTrip}/>
    <Right trip={selectedTrip}/>

  </section>
    );
};

export default Accueil;
