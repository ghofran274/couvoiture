import React, { useState } from "react";

const TravelSearchBar = () => {
  const [source, setSource] = useState("monastir");
  const [destination, setDestination] = useState("Eniso, sousse");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [passengers, setPassengers] = useState(1);
  /*mostfa sahbi */
  const swapLocations = () => {
    setSource(destination);
    setDestination(source);
  };

  return (
    <div style={styles.container}>
      {/* Source Location */}
      <div style={styles.container}>
        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          style={styles.input}
          placeholder="source"
        />
      </div>

      {/* Swap Button */}
      <button onClick={swapLocations} style={styles.swapButton}>
        🔁
      </button>

      {/* Destination Location */}
      <div style={styles.container}>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={styles.input}
          placeholder="Destination"
        />
      </div>

      {/* Date Picker */}
      <div style={styles.inputGroup}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* Passengers Selector */}
      <div style={styles.inputGroup}>
        <input
          type="number"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          style={styles.input}
          min="1"
          placeholder="nombre de places"
        />
      </div>

      {/* Search Button */}
      <button style={styles.searchButton}>Search</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    gap: "10px",
  },
  inputGroup: {
    flex: 1,
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  swapButton: {
    padding: "8px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
  },
  searchButton: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default TravelSearchBar;
