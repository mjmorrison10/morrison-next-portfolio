import {
  alpha,
  Box,
  Paper,
  Slide,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import Hyphenated from "react-hyphen";
import { Flip } from "react-reveal";
import TypewriterComponent from "typewriter-effect";
import {
  getStartedBtn,
  transitionDelay,
} from "../../public/Settings/baseSettings";

function Heading({ mode, theme }) {
  const custMode = mode === "dark";

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
    h1: `React Web Development`,
    h2: `Websites for Small Business`,
    h3: `Our services include:`,
    servicesWeOffer: [
      "High-Converting Sales Funnel page",
      "Lead Generating Landing Page",
      "Customized Web Application",
      "Content Management System",
      "SEO Optimization",
      "Alpha / Beta Testing Websites",
      "Debugging Software",
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

  const styles = {
    container: {
      component: "section",
      minHeight: "calc(100vh + 5rem)",
      width: "100%",
      flex: 1,
      display: "flex",
      justifyContent: "flex-star  t",
      alignItems: "center",
      gap: 2,
      flexDirection: "column",
      transition: transitionDelay,
      backgroundColor: theme.palette.customPrimaryReversed.main,
      backgroundImage: `url("/Images/three-computers-coding-lg.jpg")`,
      backgroundBlendMode: `multiply`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: { xs: "center" },
      // boxShadow: `inset 100vh 100vw hsla(239, 85%, 15%, 85%)`,
      pt: { xs: 10 },
      pb: { xs: 2, md: 0 },
      clipPath: `polygon(0 0, 100% 0, 100% calc(100% - 5rem), 50% 100%, 0 calc(100% - 5rem))`,
    },
    mainContainer: {
      display: "flex",
      width: "100%",
      placeItems: "center",
      flexDirection: { xs: "column", md: "row" },
    },
    leftContainer: {
      flex: 1,
      height: "100%",
      display: "flex",
      placeItems: "center",
      // alignItems: "center",
      // justifyContent: "center",
      flexDirection: "column",
      gap: 5,
    },
    paper: {
      minHeight: "250px",
      // flex: 1,
      px: 2,
      py: 1,
      m: 2,
      transition: transitionDelay,
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      alignItems: "center",
      color: custMode ? "customPrimary.main" : "customPrimary.contrastText",
      transition: "all 250ms ease",
      width: "fit-content",
      height: "fit-content",
      "&:hover": {
        transition: transitionDelay,
        color: "customAccent.contrastText",
        backgroundColor: "customAccent.main",
        // borderRadius: `40% 5% 5% 50%`,
        minHeight: "calc(250px + 2rem)",
        clipPath: `polygon(0 0, 100% 0, 100% calc(100% - 2rem), 50% 100%, 0 calc(100% - 2rem))`,
        // pl: 10,
      },
    },
    rightContainer: {
      flex: 1,
      height: "100%",
      display: "flex",
      img: {
        img: "/Images/laptop.png",
        alt: `Personal Fitness Website displayed on a Laptop`,
        height: "100%",
        width: "100%",
        objectFit: "contain",
      },
    },
    h1: {
      variant: "primary",
      component: `h1`,
      fontSize: 20,
      textAlign: "flex-start",
      width: "100%",
      // maxWidth: "45ch",
      letterSpacing: 2.25,
    },
    h2: {
      variant: "secondary",
      component: "h2",
      textAlign: "center",
      maxWidth: "30ch",
      fontSize: "1.5rem !important",
    },
    h3: {
      variant: "h2",
      component: "div",
      textAlign: "center",
      maxWidth: "25ch",
      fontSize: "1.5rem !important",
    },
    btnContainer: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    // <Hyphenated>
    <Box
      //   ref={ref}
      sx={styles.container}
    >
      <Box sx={styles.mainContainer}>
        <Box sx={styles.leftContainer}>
          <Paper elevation={10} sx={styles.paper}>
            <Typography
              variant={styles.h1.variant}
              component={styles.h1.component}
              color={styles.h1.color}
              gutterBottom
              sx={styles.h1}
            >
              {content.h1}
            </Typography>

            <Typography
              variant={styles.h2.variant}
              component={styles.h2.component}
              gutterBottom
              sx={styles.h2}
            >
              {content.h2}
            </Typography>

            <Typography
              variant="secondary"
              component="div"
              gutterBottom
              sx={styles.h3}
            >
              {content.h3}
              <TypewriterComponent options={typeWriterOptions} />
            </Typography>
          </Paper>
          <Slide direction="left" in={triggerRequestFreeQuoteBtn}>
            {getStartedBtn("Request a Free Quote")}
          </Slide>
        </Box>
        <Box sx={styles.rightContainer}>
          <Box
            component="img"
            sx={styles.rightContainer.img}
            src={styles.rightContainer.img.img}
            alt={styles.rightContainer.img.alt}
          />
        </Box>
      </Box>

      <Box sx={styles.btnContainer}></Box>
    </Box>
    // </Hyphenated>
  );
}

export default Heading;
