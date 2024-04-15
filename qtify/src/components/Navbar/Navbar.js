import React from "react";
import "./Navbar.css";
import qtifyLogo from "../../assets/qtifyLogo.png";
import searchIcon from "../../assets/search-icon.png";
// import { Box } from "@mui/system";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={qtifyLogo} alt="qtify-logo"></img>
        <div className="search-bar">
          <input
            className="input-search"
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Search a song of your choice"
          />
          <button className="search-btn">
            <img
              src={searchIcon}
              alt="searchIcon"
              className="search-image"
            ></img>
          </button>
        </div>
        <button className="feedback-button">Give Feedback</button>
      </div>
    </>
  );
}

export default Navbar;
