import React, { useState } from "react";
import "./searchbar.css";

const SearchBar = ({ onSearch }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    onSearch({ from, to, date });
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <select
          className="search-input"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          <option value="">Select a location</option>
          <option value="Sousse">Sousse</option>
          <option value="Tunis">Tunis</option>
          <option value="Monastir">Monastir</option>
          <option value="beja">beja</option>
          <option value="tabarka">beja</option>
          <option value="MESTIR">MESTIR</option>
        </select>
        <span className="search-arrow">↔</span>
        <select
          className="search-input"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          <option value="">Select a location</option>
          <option value="Gabes">Gabes</option>
          <option value="Sfax">Sfax</option>
          <option value="Nabeul">Nabeul</option>
          <option value="Sousse">Sousse</option>
          <option value="beja">beja</option>
          <option value="Monastir">Monastir</option>
          <option value="MESTIR">MESTIR</option>
        </select>
        <input
          type="date"
          className="search-input date-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Rechercher
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
