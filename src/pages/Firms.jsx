import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import { flex } from "../styles/GlobalStyle";
import FirmModal from "../components/modals/FirmModal";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchStart, fetchFail, getSuccess } from "../features/stockSlice";

const Firms = () => {
  // const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.auth);
  // const getFirms = async () => {
  //   const BASE_URL = "http://12165.fullstack.clarusway.com/";
  //   dispatch(fetchStart());
  //   const url = "firms";
  //   try {
  //     const { data } = await axios(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     dispatch(getSuccess({ data, url }));
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(fetchFail());
  //   }
  // };
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
    // getFirms();
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

export default Firms;
