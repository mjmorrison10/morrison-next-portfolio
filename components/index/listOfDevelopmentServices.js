import { Box, Grow, Slide, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import InView, { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Zoom } from "react-reveal";

function ListOfDevelopmentServices() {
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const listOfDevelopmentServices = [
    {
      src: "/Images/huddleLandingPage.png",
      alt: "Huddle Landing Page",
      height: "auto",
      width: matchesMd ? 300 : "50%",
      title: "Website App Development",
    },
    {
      src: "/Images/copyLandingPage.png",
      alt: "Huddle Landing Page",
      height: 250,
      width: "auto",
      title: "Responsive App Development",
    },
    {
      src: "/Images/websiteOnMobileAndDesktopWithBackgroundRemoved.png",
      alt: "Huddle Landing Page",
      height: "auto",
      width: matchesMd ? 300 : "50%",
      title: "Web App Development",
    },
  ];

  const styles = {
    container: {
      display: "flex",
      flexDirection: { md: "row", xs: "column" },
      gap: { md: null, xs: 6 },
      justifyContent: "space-around",
      width: "100%",
    },
    innerContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
    },
    text: {
      variant: "accent",
      component: "div",
      textAlign: "center",
      fontFamily: "Share Tech Mono",
    },
  };

  return (
    <Box sx={styles.container}>
      {listOfDevelopmentServices.map((dev, i) => (
        <Zoom>
          <Box sx={styles.innerContainer}>
            <LazyLoadImage
              src={dev.src}
              alt={dev.alt}
              height={dev.height}
              width={dev.width}
            />
            <Typography
              variant={styles.text.variant}
              component={styles.text.component}
              gutterBottom
              sx={styles.text}
            >
              {dev.title}
            </Typography>
          </Box>
        </Zoom>
      ))}
    </Box>
  );
}

export default ListOfDevelopmentServices;
