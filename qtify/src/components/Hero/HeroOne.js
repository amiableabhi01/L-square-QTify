import React from "react";
import "./Hero.css";
import heroImage from "../../assets/heroImage.png";
//import heroWords from "../../assets/heroWords.png";

export default function HeroOne() {
  return (
    <>
      <div className="hero">
        <div className="hero-words">
          <h3 style={{marginLeft:"2rem"}}>100 Thousand Songs, ad-free</h3>
          <h3>Over thousands podcast episodes</h3>
        </div>
        <img src={heroImage} className="hero-image" alt="heroImage"></img>
      </div>
    </>
  );
}
