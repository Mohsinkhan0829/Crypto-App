import React from "react";
import { Grid , Card , CardContent , Typography ,
   CardActions , Button , Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const CardItem = ({coin}) => {
  return (
    <>
        <Grid item xs={12} sm={6} lg={4}>
          <Card>

            <CardContent sx={{display : 'flex', alignItems:"center",justifyContent:"space-between"}}>

              <Typography variant="h2">{coin.symbol}</Typography>

              <Avatar alt="Remy Sharp" src={coin.large}
              sx={{ width: 56, height: 60 }} />
            </CardContent>

            <CardActions>
              <Link to={`/coin/${coin.id}`}>
              <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
    </>
  );
};

export default CardItem;
