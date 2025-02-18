import React, { useEffect, useState } from "react";
import { fetchTopAlbums } from "../Api/Apicall";
import Card from "../Card/Card";
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

  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <button className="collapse-button">Collapse</button>
      </div>
      <div className="grid">
        {data.map((album) => (
          <Card key={album.id} image={album.image} follows={album.follows} title={album.title} />
        ))}
      </div>
    </div>
  );
};

export default Section;
