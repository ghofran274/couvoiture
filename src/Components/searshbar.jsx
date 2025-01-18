import React from 'react'
import "./searshbar.css";

const Searshbar = () => {
  return (
    <div className="search-bar search-bar-full">
      <select
            id="from"
            name="from"
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
      <span className="icon">↔</span>
      <select
            id="from"
            name="from"
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
      <input type="date" className="search-input date-picker" />
      <select className="search-input passenger-selector">
        <option>1 passager</option>
        <option>2 passagers</option>
        <option>3 passagers</option>
      </select>
      <button className="search-button">Rechercher</button>
    </div>
  )
}

export default Searshbar