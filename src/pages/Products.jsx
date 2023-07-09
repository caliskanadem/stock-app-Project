import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { flex } from "../styles/GlobalStyle";
import ProductModal from "../components/modals/ProductModal.jsx";
import ProductCard from "../components/ProductCard";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Product = () => {
  const { getStockData } = useStockCall();
  const { products } = useSelector((state) => state?.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    getStockData("products");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error">
        Products
      </Typography>
      <Button onClick={handleOpen} variant="contained" sx={{ mb: 2 }}>
        New Products
      </Button>
      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Operation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((pro, index) => (
              <TableRow
                key={pro?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{pro.category}</TableCell>
                <TableCell align="right">{pro.brand}</TableCell>
                <TableCell align="right">{pro.name}</TableCell>
                <TableCell align="right">{pro.stock}</TableCell>
                <TableCell align="right">#</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Grid container sx={flex}>
        {products?.map((product) => (
          <Grid item key={product.id}>
            <ProductCard
              product={product}
              setOpen={setOpen}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
};

export default Product;
