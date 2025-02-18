import React, { useState, useEffect } from "react";
import "./App.css";
//import Apicall from "./components/Api/Apicall";
import HeroOne from "./components/Hero/HeroOne";
import Navbar from "./components/Navbar/Navbar";
import AlbumCard from "./components/AlbumCard/AlbumCard";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";
import {
  fetchFilters,
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums,
} from "./components/Api/Apicall";

function App() {
  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => {
        return { ...prevData, [key]: data };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);

  const {topAlbums=[], newAlbums=[], songs=[]}= data;
  
  // console.log(data)
  return (
    <div className="App">
      <Navbar />
      <HeroOne />
      {/* <Card /> */}
      {/* <AlbumCard data={topAlbums}/> */}
      <Section title="Top Albums" data = {[...topAlbums]} type="albums"/>
    </div>
  );
}

export default App;
