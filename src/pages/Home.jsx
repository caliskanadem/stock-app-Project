import { Typography } from "@mui/material";
import React from "react";
import KpiCards from "../components/KpiCards";
import Charts from "../components/Charts";

const Home = () => {
  return (
    <div>
      <Typography variant="h4" color="error">
        DashBoard
      </Typography>
      <KpiCards />
      <Charts />
    </div>
  );
};

export default Home;
