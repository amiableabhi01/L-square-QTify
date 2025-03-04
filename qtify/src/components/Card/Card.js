import React from "react";
import { Chip } from "@mui/material";
import "./Card.css";

const Card = ({ image, follows, likes, title }) => {
  return (
    <div className="card">
      <img src={image} alt="album" className="card-image" />
      <div className="card-content">
        {follows !== undefined && <Chip label={`${follows} Follows`} size="small" className="chip" />}
        {likes !== undefined && <Chip label={`${likes} Likes`} size="small" className="chip" />}
        <p className="card-title">{title}</p>
      </div>
    </div>
  );
};

export default Card;
