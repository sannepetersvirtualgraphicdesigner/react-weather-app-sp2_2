import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Searching");
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
          />
          <button className="button">
            <i className="fas fa-search search-icon"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
