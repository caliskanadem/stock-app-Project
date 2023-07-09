import React, { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { flex } from "../styles/GlobalStyle";
import BrandCard from "../components/BrandCard";
import { Button, Grid, Typography } from "@mui/material";
import BrandModal from "../components/modals/BrandModal";

const Brands = () => {
  const { getStockData } = useStockCall();
  const { brands } = useSelector((state) => state?.stock);
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
    // getFirms();
    getStockData("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error">
        Brand
      </Typography>
      <Button onClick={handleOpen} variant="contained" sx={{ mb: 2 }}>
        New Brand
      </Button>
      <BrandModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container sx={flex}>
        {brands?.map((brand) => (
          <Grid item key={brand.id}>
            <BrandCard brand={brand} setOpen={setOpen} setInfo={setInfo} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Brands;
