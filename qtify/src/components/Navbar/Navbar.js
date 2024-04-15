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
        <div>
          <input
            className="input-search"
            placeholder="Search a album of your choice"
          />
          <button>
            <img src={searchIcon} alt="searchIcon"></img>
          </button>
        </div>
        <button className="feedback-button">Give Feedback</button>
      </div>
    </>
  );
}

export default Navbar;
