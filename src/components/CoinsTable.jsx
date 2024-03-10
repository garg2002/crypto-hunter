import React, { useEffect, useState } from 'react'
import { CoinList  } from '../config/api';
import { CryptoState } from "../CryptoContext"
import { createTheme, TextField, ThemeProvider, Typography } from '@mui/material';
import { Container } from 'postcss';

const CoinsTable = () => {
const [coins, setCoins] = useState([]);
const [loading, setLoading] = useState(false);

const { currency } =CryptoState();

const fetchCoins = async () =>{
  setLoading(true)
  const { data } = await axios.get(CoinList(currency));
  setCoins(data);
  setLoading(false);
}

useEffect(()=>{
  fetchCoins();
},[currency]);

const darkTheme = createTheme({
  palette: {
    primary : {
      main: "#fff",
    },
    mode: "dark",
  },
});

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center"}}>
      <Typography
      variant='h4'
      style={{
        margin: 18, 
        fontFamily:"Montserrat",
      }}
      >
        CryptoCurrency Prices by Market Cap
      </Typography>
      <TextField
      label="Search for a Crypto Currency.."
      variant='outlined'
      style={{
        marginBottom: 20,
        width: "100%"
      }}
   />
      </Container>
    </ThemeProvider>
  )
}

export default CoinsTable;
