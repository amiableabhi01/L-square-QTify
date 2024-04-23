import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";


export default function Apicall() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://qtify-backend-labs.crio.do/albums/top`
    );
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <>
    <AlbumCard data={data}/>
  </>);
}
