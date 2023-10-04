import React, { useContext, useState } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { fetchCoins } from "../context/Coinsaction";
import CoinContext from "../context/coin/CoinContext";

const Form = () => {
  const [text, setText] = useState("");

  const { dispatch } = useContext(CoinContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchCoins(text);
    dispatch({
      type: "GET_COINS",
      payload: data,
    });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ padding: "80px" }} align="center">
        <TextField
          label="Search coin Here"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant="contained"
          color="success"
          fullWidth
          type="submit"
          sx={{ marginTop: "20px" }}
        >
          <Typography>Save</Typography>
        </Button>
      </Box>
    </form>
  );
};

export default Form;
