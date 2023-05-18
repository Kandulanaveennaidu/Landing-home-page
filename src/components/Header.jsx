import React from "react";
import { Box, styled, Typography } from "@mui/material";
import headerImg from "../assets/banner.png";
import group1 from "../assets/1.png";
import group2 from "../assets/2.png";
import group3 from "../assets/3.png";

const Header = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    background: "drak",
    color: "red",
    // tamanhos
    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),
    // cor de fundo
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  return (
    <CustomBox component="header">
      {/*  Box text  */}
      <BoxText component="section">
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "black",
          }}
        >
          Take Your graphics Protection to The Next level With DOL Max
          Overlamination
        </Typography>

        <Typography
          variant="p"
          component="p"
          sx={{
            py: 3,
            lineHeight: 1.6,
            color: "black",
          }}
        >
          Pair With MPI 1105 Wrapping film for ramped up protection
          <span style={{ display: "inline-block" }}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <img
                src={group1}
                alt="group1"
                style={{
                  width: "30px",
                  marginRight: "10px",
                  filter:
                    "brightness(0%) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                }}
              />
              Maximum Durability
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <img
                src={group2}
                alt="group2"
                style={{
                  width: "30px",
                  marginRight: "10px",
                  filter:
                    "brightness(0%) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                }}
              />
              Enhanced Appearance
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <img
                src={group3}
                alt="group3"
                style={{
                  width: "30px",
                  marginRight: "10px",
                  filter:
                    "brightness(0%) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                }}
              />
              High Gloss Finish
            </p>
          </span>
        </Typography>
      </BoxText>

      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            flex: "1",
            paddingTop: "30px",
            alignSelf: "center",
          },
          [theme.breakpoints.up("md")]: {
            flex: "2",
            alignSelf: "flex-end",
          },
        })}
      >
        <img
          src={headerImg}
          alt="headerImg"
          style={{
            width: "100%",
          }}
        />
      </Box>
    </CustomBox>
  );
};

export default Header;
