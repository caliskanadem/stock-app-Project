import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnStyle, flex } from "../styles/GlobalStyle";

export default function BrandCard({ brand }) {
  return (
    <Card
      sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography gutterBottom variant="h5" component="div">
        {brand.name}
      </Typography>

      <CardMedia
        sx={{ p: 1, objectFit: "contain", height: "250px" }}
        image={brand?.image}
        title="brand-image"
      />

      <CardActions sx={flex}>
        <EditIcon sx={btnStyle} />
        <DeleteOutlineIcon sx={btnStyle} />
      </CardActions>
    </Card>
  );
}
