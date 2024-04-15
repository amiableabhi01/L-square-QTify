import React from "react";
import "./Hero.css";
import heroImage from "../../assets/heroImage.png";
import heroWords from "../../assets/heroWords.png";

export default function HeroOne() {
  return (
    <>
      <div className="hero">
        <img src={heroWords} alt="heroLines" className="heroWords"></img>
        <img src={heroImage} alt="heroImage"></img>
      </div>
    </>
  );
}
