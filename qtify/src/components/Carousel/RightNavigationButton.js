import React from "react";
import { ReactComponent as RightArrow } from "../../assets/RightNavigation.svg";
import "./NavigationButton.css";

const RightNavigationButton = ({ onClick }) => {
  return (
    <div className="navigation-button right" onClick={onClick}>
      <RightArrow />
    </div>
  );
};

export default RightNavigationButton;
