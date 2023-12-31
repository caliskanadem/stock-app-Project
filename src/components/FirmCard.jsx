import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnStyle, flex } from "../styles/GlobalStyle";
import useStockCall from "../hooks/useStockCall";

export default function FirmCard({ firm, setOpen, setInfo }) {
  const { deleteStockData } = useStockCall();
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
        {firm?.name}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {firm?.address}
      </Typography>

      <CardMedia
        sx={{ p: 1, objectFit: "contain", height: "130px" }}
        image={firm?.image}
        title="firm-image"
      />

      <Typography variant="body2" color="text.secondary">
        {firm?.phone}
      </Typography>

      <CardActions sx={flex}>
        <EditIcon
          sx={btnStyle}
          onClick={() => {
            setInfo(firm);
            setOpen(true);
          }}
        />
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStockData("firms", firm.id)}
        />
      </CardActions>
    </Card>
  );
}
