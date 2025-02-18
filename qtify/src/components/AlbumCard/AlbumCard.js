import React from "react";
import { Grid, Accordion, Button, Chip, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Section from "../Section/Section";

export default function AlbumCard({ data, type }) {
  console.log(data);
  const getCard = (type) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top">
            <Link to={`/album/${slug}`}>
              <div className=".wrapper">
                <div className=".card">
                  <img src={image} alt="album" loading="lazy" />
                  <div className="banner">
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className="chip"
                    />
                  </div>
                </div>
                <div className="wrapper">
                  <p>{title}</p>
                </div>
              </div>
            </Link>
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <div className="wrapper">
            <div className="card">
              <img src={image} alt="song" loading="lazy" />
              <div className="banner">
                <div className="pill">
                  <p>{likes}</p>
                </div>
              </div>
            </div>
            <div className="titleWrapper">
              <p>{title}</p>
            </div>
          </div>
        );
      }
    }
  };
}

// <>
//   <Accordion>
//   <AccordionSummary
//       expandIcon={<AccordionActions>
//         <Button>Show All</Button>
//       </AccordionActions>}
//       // aria-controls="panel1-content"
//       // id="panel1-header"
//     >
//       Top Albums
//     </AccordionSummary>
//     <Grid
//       container
//       className="container"
//       rowSpacing={1}
//       columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//       gap={2}
//     >
//       {data.map((item) => (
//         <Grid item xs={8} lg={2} key={item.id}>
//           <Section item={item} />
//         </Grid>
//       ))}
//     </Grid>
//   </Accordion>
// </>