import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Chip,
} from "@mui/material";

const Section = ({ item }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardMedia
          sx={{ height: 140 }}
          image={item.image}
          title="Album"
          className="card-media"
        />
        <CardContent>
          <Chip label={`follows: ${item.follows}`} />
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
        </CardContent>
      </Card>
      {/* <Card>
        <div className="tiles">
          <img
            src={item.image}
            alt="Album"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              zIndex: "1",
              position: "relative",
              width: "100%",
              height: "100%",
              bottom: "100px"
            }}
          >
            <h5>{item.title}</h5>
            <div className="chip">
              <Chip label={`follows: ${item.follows}`} />
            </div>
          </div>
        </div> */}
        {/* <CardMedia
          sx={{ height: 140 }}
          image={item.image}
          title="AlbumImage"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Chip label={`Follows: ${item.follows}`}   />
        </CardContent> */}
      {/* </Card> */}
    </>
  );
};

export default Section;
