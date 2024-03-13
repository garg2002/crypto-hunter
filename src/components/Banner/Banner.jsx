import { Container, Typography } from "@mui/material";
import React from "react";
import BannerImage from "../../assets/banner.jpg";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        
      }}
    >
      <Container className="flex flex-col pt-6  justify-around h-[400px]">
      <div style = {{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        height:"40%",
        textAlign:"center"
      }}>
        <Typography
        variant="h2"
        style={{
          fontWeight:"bold",
          marginBottom:15,
          fontFamily:"Montserrat"
        }}
        >
          Crypto Hunter
        </Typography>
        <Typography
        variant="subtitle2"
        style={{
          color:"darkgray",
          textTransform:"capitalize",
          fontFamily:"Montserrat"
        }}
        >
          Get all the info regarding your favorite crypto currency...
        </Typography>
      </div>
      <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
Banner;
