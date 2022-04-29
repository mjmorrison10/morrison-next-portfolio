import { alpha, Box, Paper, Slide, styled, Typography } from "@mui/material";
import React from "react";
import Hyphenated from "react-hyphen";
import TypewriterComponent from "typewriter-effect";
import {
  getStartedBtn,
  servicesWeOffer,
} from "../../public/Settings/baseSettings";

function Heading() {
  const [triggerRequestFreeQuoteBtn, setTriggerRequestFreeQuoteBtn] =
    React.useState(false);

  const handleRequestFreeQuoteBtn = () => {
    setTimeout(() => {
      setTriggerRequestFreeQuoteBtn(true);
    }, 2000);
  };

  React.useEffect(() => {
    handleRequestFreeQuoteBtn();
  }, []);

  const content = {
    h1: `Professional Web Development`,
    h2: `We specialize in developing:`,
    servicesWeOffer: [
      "High-Converting Sales Funnel page for Fitness Influencers",
      "Lead Generation Landing Page to Build your Fitness Email List",
      "Complete Website for your Personal Coaching Services",
      "Content Management System",
      "SEO Optimization suited for Personal Trainers",
      "Alpha / Beta Testing and Debugging software",
    ],
  };

  const typeWriterOptions = {
    strings: content.servicesWeOffer,
    autoStart: true,
    loop: true,
    delay: 30,
    deleteSpeed: 30,
    pauseFor: "2000ms",
    skipAddStyles: true,
  };

  const containerStyles = {
    component: "section",
    minHeight: "calc(100vh + 5rem)",
    width: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 2,

    flexDirection: "column",
    // flexDirection: { xs: "column", md: "row" },
    backgroundImage: `url("/Images/three-computers-coding-lg.jpg")`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: { xs: "center" },

    boxShadow: `inset 100vh 100vw hsla(239, 85%, 15%, 85%)`,

    pt: { xs: 10 },
    pb: { xs: 2, md: 0 },

    clipPath: `polygon(0 0, 100% 0, 100% calc(100% - 5rem), 50% 100%, 0 calc(100% - 5rem))`,
  };
  
  const paperStyles = {
    minHeight: "400px",
    // flex: 1,
    px: 2,
    py: 1,
    m: 2,
    backgroundColor: "transparent",
    // backgroundColor: "rgba(245, 245, 255, 0.75)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "customPrimaryReversed.light",
    transition: "all 250ms ease",
    "&:hover": {
      color: "customAccent.contrastText",
      backgroundColor: "customAccent.main",
      // borderRadius: `40% 5% 5% 50%`,
      minHeight: "calc(400px + 6rem)",
      clipPath: `polygon(0 0, 100% 0, 100% calc(100% - 5rem), 50% 100%, 0 calc(100% - 5rem))`,
      // pl: 10,
    },
  };

  const h1Styles = {
    variant: "h1",
    textAlign: "center",
    maxWidth: "13ch",
  };

  const h2Styles = {
    variant: "h2",
    component: "div",
    textAlign: "center",
    maxWidth: "30ch",
    // color: "customPrimaryReversed.main",
    fontSize: "1.5rem !important",
  };

  const btnContainer = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    // <Hyphenated>
    <Box
      //   ref={ref}
      sx={containerStyles}
    >
      <Paper elevation={10} sx={paperStyles}>
        <Typography
          variant={h1Styles.variant}
          color={h1Styles.color}
          gutterBottom
          sx={h1Styles}
        >
          {content.h1}
        </Typography>

        <Typography
          variant="secondary"
          component="div"
          gutterBottom
          sx={h2Styles}
        >
          {content.h2}
          <TypewriterComponent options={typeWriterOptions} />
        </Typography>
      </Paper>

      <Box sx={btnContainer}>
        <Slide direction="left" in={triggerRequestFreeQuoteBtn}>
          {getStartedBtn("Request a Free Quote")}
        </Slide>
      </Box>
    </Box>
    // </Hyphenated>
  );
}

export default Heading;
