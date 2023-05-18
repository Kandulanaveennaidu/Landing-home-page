import React from "react";
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import Title from "./Title";
import imgDetail from "../assets/image.png";
import imgDetail2 from "../assets/al.png";
import { ArrowForward, SportsGymnastics } from "@mui/icons-material";
import group5 from "../assets/5.png";
import group6 from "../assets/6.png";
import group7 from "../assets/7.png";
import group8 from "../assets/8.png";

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  const EnquireButton = styled(Button)({
    marginTop: "1.5rem",
    color: "#fff",
    backgroundColor: "#3f51b5",
    "&:hover": {
      backgroundColor: "#2c3e8c",
    },
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title text={"DOL MAX Overlaminate Films"} textAlign={"start"} />
          <CustomTypography>
            Printed graphics deserve maximum protection, Dol Max is the Solution
            <br />
            Features & Benefits
            <br />
            . Premium gloss vertical durability of up to 7 years and up to 2
            years horizontal
            <br />
            . The high gloss finish enhances the appearance of graphics and adds
            a special touch to help your graphics stand out.
            <br />. Our Digital overlaminates can be used on a variety of
            substrates, including banners, vehicle graphics, outdoor signage,
            and more.
          </CustomTypography>
          <EnquireButton variant="contained" endIcon={<ArrowForward />}>
            Enquire Now
          </EnquireButton>
        </Box>
      </CustomGridItem>
      <br />
      <Grid item xs={12} sm={4} md={6}>
        <img
          src={imgDetail}
          alt="iamge"
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
      >
        <br />
        <img
          src={imgDetail2}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title text={"Why us?"} textAlign={"start"} />

          <CustomTypography>
            <img src={group5} alt="group5" />
            <span style={{ color: "black" }}>
              {" "}
              <h1> Quality Products </h1>{" "}
            </span>
            <br />
            Our digital overlaminate films are made from the highest quality
            materials and are designed to provide superior protection and
            appearance to your digital prints.
            <br />
            <img src={group6} alt="group5" />
            <span style={{ color: "black" }}>
              {" "}
              <h1> Multiple Options: </h1>{" "}
            </span>
            <br />
            We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically
            clear, gloss finish. This allows you to choose the perfect film
            thickness level for your specific application, ensuring your
            graphics look the best and stand out from the competition.
            <br />
            <img src={group7} alt="group5" />
            <span style={{ color: "black" }}>
              {" "}
              <h1> Expertise and Support: </h1>{" "}
            </span>
            <br />
            Our team of experts is available to provide guidance and support
            throughout the entire process, from selecting the right product for
            your needs to installation and beyond.
            <br />
            <img src={group8} alt="group5" />
            <span style={{ color: "black" }}>
              {" "}
              <h1> Durability Assurance: </h1>{" "}
            </span>
            <br />
            Trust our products with confidence, as we offer industry-leading
            durability assurance for our overlaminate films.
          </CustomTypography>
          <EnquireButton
            variant="contained"
            endIcon={<ArrowForward />}
            size="large"
          >
            Request a call back
          </EnquireButton>
        </Box>
      </CustomGridItem>
    </Grid>
  );
};

export default GetStarted;
