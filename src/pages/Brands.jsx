import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { flex } from "../styles/GlobalStyle";
import BrandCard from "../components/BrandCard";
import { Button, Grid, Typography } from "@mui/material";

const Brands = () => {
  const { brands } = useSelector((state) => state?.stock);
  const { getStockData } = useStockCall();
  useEffect(() => {
    getStockData("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error">
        Brand
      </Typography>
      <Button variant="contained" sx={{ mb: 2 }}>
        New Brand
      </Button>
      <Grid container sx={flex}>
        {brands?.map((brand) => (
          <Grid item key={brand.id}>
            <BrandCard brand={brand} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Brands;
