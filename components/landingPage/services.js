import { MiscellaneousServices } from "@mui/icons-material";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { getStartedBtn, transitionDelay } from "../../public/Settings/baseSettings";
import ListOfServicesComp from "../index/listOfServicesComp";
import Skelebar from "../SkeleBar";

function Services() {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  const content = {
    h2: `List of Services`,
  };
  const styles = {
    container: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    h2: {
      variant: "h2",
      transition: transitionDelay,

      color: "customPrimary.main",
      fontSize: "1rem !important",
      textDecoration: "underline",
      textUnderlineOffset: 3,
      textDecorationThickness: 2,
      fontWeight: "bolder",
      position: { xs: null, md: "absolute" },
      left: "10%",
      top: "0%",
      zIndex: 10,
      textAlign: "center",
      display: "flex",
      placeItems: "center",
      gap: 1,

      // transform: { xs: null, md: "rotateY(0deg) rotate(-45deg)" },
    },
    innerContainer: {
      display: "flex",
      gap: 1,
      // minHeight: "100vh",
      px: 1,
      flexDirection: { xs: "column", md: "row" },
      // flexDirection: (matchesMd && `row`) || (matchesXs && "column"),
    },
    image: {
      flex: 0.75,
      minHeight: 300,
      // background: `url('/Images/websiteOnMobileAndDesktopWithBackgroundRemoved.png') no-repeat contain`,
      backgroundSize: `contain`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('/Images/websiteOnMobileAndDesktopWithBackgroundRemoved.png')`,
    },
    service: {
      flex: 1.25,
      display: "flex",
      // flexDirection:"column",
      flexWrap: "wrap",
      alignItems: (matchesMd && `flex-end`) || (matchesXs && "center"),
      justifyContent: "center",
      width: "100%",
      gap: 1,
      // bgcolor: 'blue',
    },
    getStarted: {
      display: "flex",
      justifyContent: "center",
      mt: 4,
      mb: 8,
    },
  };

  return (
    <Container maxWidth="xl" sx={styles.container}>
      <Typography
        variant={styles.h2.variant}
        color={styles.h2.color}
        sx={styles.h2}
      >
        {content.h2} <MiscellaneousServices />
      </Typography>

      <Box sx={styles.innerContainer}>
        <Box sx={styles.image}></Box>
        {!matchesMd && <Skelebar />}

        <Box sx={styles.service}>
          <ListOfServicesComp />

          {/* {listOfServicesComp()} */}
        </Box>
      </Box>
      <Box sx={styles.getStarted}>{getStartedBtn()}</Box>
    </Container>
  );
}

export default Services;
