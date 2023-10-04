import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetCoinsDetails } from "../context/Coinsaction";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {
  Typography,
  LinearProgress,
  Box,
  Container,
  CardContent,
  Card,
  Button,
} from "@mui/material";
import CoinContext from "../context/coin/CoinContext";

const CoinPage = () => {
  const params = useParams();

  const { dispatch, coinData } = useContext(CoinContext);

  const FetchCoinsData = async () => {
    const data = await GetCoinsDetails(params.coinId);
    console.log(data);
    dispatch({
      type: "COIN_DETAILS",
      payload: data,
    });
  };

  useEffect(() => {
    FetchCoinsData();
  }, []);

  if (!coinData || coinData.length === 0) {
    return (
      <Box>
        <LinearProgress />
      </Box>
    );
  }
  return (
    <>
      <Container sx={{ padding: "80px" }}>
        <Card>
          <CardContent>
            <Box sx={{padding:'20px' , display:'flex',alignItems:'center'}}>
            <Typography>
              <img src={coinData.image.large} />
              <Typography variant="h3">{coinData.name}</Typography>
            <Typography variant="h4">{coinData.symbol}</Typography>
           <Button variant="outlined" sx={{margin:'10px'}} startIcon={<AttachMoneyIcon/>} >{coinData.market_data.current_price.usd}</Button>
           <Button variant="outlined" startIcon={<CurrencyRupeeIcon/>} >{coinData.market_data.current_price.inr}</Button>
            </Typography>
           

           </Box>
            <Typography variant="body1">{coinData.description.en}</Typography>
            
            <a href={coinData.links.repos_url.github[0]} target="_blank">
            <Button variant="contained" color="warning">Github</Button></a>
           
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default CoinPage;
