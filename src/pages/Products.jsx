import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import { flex } from "../styles/GlobalStyle";
import FirmModal from "../components/modals/FirmModal";

const Product = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state?.stock);
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
    getStockData("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error">
        Firm
      </Typography>
      <Button onClick={handleOpen} variant="contained" sx={{ mb: 2 }}>
        New Firm
      </Button>
      <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} setOpen={setOpen} setInfo={setInfo} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Product;
