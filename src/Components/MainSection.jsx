import React, { useContext } from "react";
import CardItem from "./CardsItem";
import { Grid, Typography } from "@mui/material";
import CoinContext from "../context/coin/CoinContext";

const MainSection = () => {
  const { coins } = useContext(CoinContext);

  if (!coins || coins.length === 0) {
    return (
      <Typography variant="h2" align="center" color={"secondary"}>
        No coin found yet...
      </Typography>
    );
  }

  return (
    <Grid container spacing={4} sx={{ marginTop: "80px" }}>
      {coins.map((coin) => (
        <CardItem key={coin.id} coin={coin} />
      ))}
    </Grid>
  );
};

export default MainSection;
