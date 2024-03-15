import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import CoinInfo from "../components/CoinInfo";
import axios from "axios";
import { SingleCoin } from "../config/api";
import { Typography, LinearProgress } from "@mui/material";
import Parser from "html-react-parser";
import { numberWithCommas } from "../components/CoinsTable";

const CoinPage = () => {
  const [coin, setCoin] = useState();
  const { id } = useParams();
  const { currency, symbol } = CryptoState();

  const fetchCoins = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-[30%] w-[100%] flex flex-col items-center mt-6 border-r-2 ">
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200px"
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant="h3"
          style={{
            fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "Montserrat",
          }}
        >
          {coin?.name}
        </Typography>
        <Typography
          variant="subtitle"
          style={{
            width: "100%",
            fontFamily: "Montserrat",
            padding: 25,
            paddingBottom: 15,
            paddingTop: 0,
            textAlign: "justify",
          }}
        >
          {Parser(`${coin?.description.en.split(". ")[0]}.`)}
        </Typography>

        <div
          style={{
            alignSelf: "start",
            padding: 25,
            paddingTop: 10,
            width: "100%",
          }}
        >
          <span
            style={{
              display: "flex",
            }}
          >
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontFamily: "Montserrat",
              }}
            >
              Rank:{" "}
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontFamily: "Montserrat",
              }} >
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span
            style={{
              display: "flex",
            }}
          >
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontFamily: "Montserrat",
              }}
            >
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              &nbsp;M
            </Typography>
          </span>
        </div>
      </div>

      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
