import React, { useState, useEffect } from "react";
import "./App.css";
import HeroOne from "./components/Hero/HeroOne";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import SongsSection from "./components/SongsSection/SongsSection";
import {
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

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <div className="App">
      <Navbar />
      <HeroOne />
      <Section title="Top Albums" data={topAlbums} type="albums" />
      <Section title="New Albums" data={newAlbums} type="albums" />
      <SongsSection />
    </div>
  );
}

export default App;
