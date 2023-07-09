import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnStyle, flex } from "../styles/GlobalStyle";
import useStockCall from "../hooks/useStockCall";

export default function ProductCard({ product, setOpen, setInfo }) {
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
        {product?.name}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {product?.address}
      </Typography>

      {/* <CardMedia
        sx={{ p: 1, objectFit: "contain", height: "130px" }}
        image={product?.image}
        title="firm-image"
      /> */}

      <Typography variant="body2" color="text.secondary">
        {product?.phone}
      </Typography>

      <CardActions sx={flex}>
        <EditIcon
          sx={btnStyle}
          onClick={() => {
            setInfo(product);
            setOpen(true);
          }}
        />
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStockData("products", product.id)}
        />
      </CardActions>
    </Card>
  );
}
