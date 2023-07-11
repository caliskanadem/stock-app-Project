import { Grid } from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { amber, deepPurple, pink } from "@mui/material/colors";

const KpiCards = () => {
  const data = [
    {
      id: 1,
      title: "sales",
      value: 40000,
      icon: <MonetizationOnIcon />,
      color: deepPurple[600],
      bgColor: deepPurple[100],
    },
    {
      id: 2,
      title: "profit",
      value: 30000,
      icon: <PaymentsIcon />,
      color: pink[600],
      bgColor: pink[100],
    },
    {
      id: 3,
      title: "purchases",
      value: 10000,
      icon: <ShoppingCartIcon />,
      color: amber[600],
      bgColor: amber[100],
    },
  ];
  return (
    <Grid container>
      {data.map((item, id) => (
        <Grid item>{item.icon}</Grid>
      ))}
    </Grid>
  );
};

export default KpiCards;
