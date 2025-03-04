import React, { useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import "./Section.css";

const Section = ({ title, data, type }) => {
  const [showAll, setShowAll] = useState(false);

  const handleCollapse = () => {
    setShowAll(!showAll);
  };

  const renderCard = (item) => (
    <Card
      key={item.id}
      image={item.image}
      follows={type === "albums" ? item.follows : undefined}
      likes={type === "songs" ? item.likes : undefined}
      title={item.title}
    />
  );

  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        {type === "albums" && (
          <button className="collapse-button" onClick={handleCollapse}>
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>
      {showAll && type === "albums" ? (
        <div className="grid">{data.map((item) => renderCard(item))}</div>
      ) : (
        <Carousel items={data} renderItem={renderCard} />
      )}
    </div>

  );
};

export default Section;