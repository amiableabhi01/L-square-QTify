import React from "react";
import { Grid } from "@mui/material";
import Section from "../Section/Section";

export default function AlbumCard({ data }) {
  return (
    <>
      <Grid
        container
        className="container"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        gap={2}
      >
        {data.map((item) => (
          <Grid item 
          xs={8} lg={2} key={item.id}>
            <Section item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
