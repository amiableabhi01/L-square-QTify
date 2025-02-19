import React from "react";
import { ReactComponent as LeftArrow } from "../../assets/LeftNavigation.svg";
import "./NavigationButton.css";

const LeftNavigationButton = ({ onClick }) => {
  return (
    <div className="navigation-button left" onClick={onClick}>
      <LeftArrow />
    </div>
  );
};

export default LeftNavigationButton;
