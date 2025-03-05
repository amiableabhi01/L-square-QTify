import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import Section from "../Section/Section";
import { fetchSongs, fetchFilters } from "../Api/Apicall";
import "./SongsSection.css";

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    fetchSongs().then((data) => setSongs(data));
    fetch("https://qtify-backend-labs.crio.do/genres")
      .then((response) => response.json())
      .then((data) => setGenres(["All", ...data.data.map((genre) => genre.label)]));
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs = selectedGenre === "All" ? songs : songs.filter((song) => song.genre === selectedGenre);

  return (
    <div className="songs-section">
      <Tabs value={selectedGenre} onChange={handleTabChange} className="tabs">
        {genres.map((genre) => (
          <Tab key={genre} label={genre} value={genre} />
        ))}
      </Tabs>
      <Section title="Songs" data={filteredSongs} type="songs" showAllButton={false} />
    </div>
  );
};

export default SongsSection;
