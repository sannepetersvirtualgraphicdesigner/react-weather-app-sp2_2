import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching ${city}`);
  }
  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="col-4">
      <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Which place?"
            className="form-control"
            autoComplete="off"
            spellCheck="false"
            onChange={handleCityChange}
          />
          <button className="button">
            <i className="fas fa-search search-icon"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
