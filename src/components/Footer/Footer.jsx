import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../assets/logo.png";
const Footer = () => {
  const StackColumn = styled(Stack)(() => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    gap: 8,
    textAlign: "center",
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "black",
    color: "white",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: 30,
    },
  }));

  return (
    <BoxRow
      component="footer"
      sx={{
        py: 4,
        px: 2,
      }}
    >
      <StackColumn>
        <FooterTitle text={"Best Solution From"} />
        <img
          src={logo} // Update the image path accordingly
          alt="Logo"
          style={{
            width: "90px",
            height: "90px",
            filter: "brightness(0) invert(1)",
          }} // Inline styling for the logo image
        />
      </StackColumn>

      <StackColumn>
        <FooterLink text={"DOL Max Overlaminate Films"} />
        <FooterLink text={"Why us"} />
        <FooterLink text={"Enquire now"} />
      </StackColumn>
      <StackColumn>
        <FooterLink text={"Avery Dennison Overlaminate"} />
        <FooterLink text={"Avery Dennison Overlaminate Films"} />
        <FooterLink text={"Avery Dennison Digital Overlaminate Films  "} />
        <FooterLink text="Avery Dennison DOL Max" />
      </StackColumn>

      <StackColumn>
        <FooterLink text={"Overlaminate"} />
        <FooterLink text={"Overlaminate Films"} />
        <FooterLink text={"Digital Overlaminate Films"} />
      </StackColumn>
      <StackColumn>
        <Stack
          direction="row"
          width="70px"
          maxWidth="100%"
          justifyContent="space-between"
        >
          <Link
            href="#"
            variant="body2"
            sx={{
              color: "#414141",
              "&:hover": {
                color: "#1c2859",
              },
            }}
          >
            <InstagramIcon />
          </Link>
          <Link
            href="#"
            variant="body2"
            sx={{
              color: "#414141",
              "&:hover": {
                color: "#1c2859",
              },
            }}
          >
            <FacebookIcon />
          </Link>
        </Stack>
        <Typography variant="caption" component="p">
          &copy; 2022 HBSales Inc.
        </Typography>
      </StackColumn>
    </BoxRow>
  );
};

export default Footer;
