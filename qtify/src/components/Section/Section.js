import React, { useEffect, useState } from "react";
import { fetchTopAlbums } from "../Api/Apicall";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import "./Section.css";

const Section = ({title,data,type}) => {
  // const [albums, setAlbums] = useState([]);

  // useEffect(() => {
  //   const fetchAlbums = async () => {
  //     try {
  //       const data = await fetchTopAlbums();
  //       setAlbums(data);
  //     } catch (error) {
  //       console.error("Error fetching albums:", error);
  //     }
  //   };

  //   fetchAlbums();
  // }, []);

  const[showAll,setShowAll]=useState(false);

  const handleCollapse = () => {
    setShowAll(!showAll);
  }

  const renderCard = (item) => (
    <Card key={item.id} image={item.image} follows={item.follows} title={item.title} />
  );

  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <button className="collapse-button" onClick={handleCollapse}>{showAll?"Show All":"Collapse"}</button>
      </div>
      {
        showAll ? (
          <Carousel items={data} renderItem={renderCard} />
        ) : (
          <div className="grid">
            {data.map((album) => renderCard(album))}
          </div>
        )
      }
           
    </div>
  );
};

export default Section;
