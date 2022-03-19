import Header from "../components/header";
import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, blueGrey, grey, orange } from "@mui/material/colors";
import Footer from "../components/footer";
import { Box, Container, Fab, Fade, Tooltip } from "@mui/material";
import ActionTooltip from "../components/actionTooltip";
import { ArrowDropUp } from "@mui/icons-material";
import { useState } from "react";
import TypewriterComponent from "typewriter-effect";

const theme = createTheme({
  palette: {
    primary: {
      light: blueGrey[50],
      main: blueGrey[100],
      dark: blueGrey[200],
    },
    secondary: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
      contrastText: grey[50],
    },
    info: {
      main: blue[500],
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [welcome, setWelcome] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box
        backgroundColor={welcome ? blue[50] : grey[900]}
        minHeight={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        // Disable once website is finished
        justifyContent={welcome ? "flex-end" : "center"}
        alignItems={!welcome && "center"}
      >
        {!welcome && (
          <Box sx={{ fontSize: 50, maxWidth: "65ch", color: grey[50], padding: 2 }}>
            <TypewriterComponent
              // options={{
              //   strings: [
              //     "Welcome to MorrisonDevOps,",
              //     "We specialize in developing sales funnel pages",
              //     "Click here to enter.",
              //   ],
              //   autoStart: true,
              //   loop: false,
              // }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome to MorrisonDevOps!")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(
                    "We specialize in developing sales funnel pages for businesses!"
                  )
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Please wait while our servers load. :)")
                  .pauseFor(2000)
                  .callFunction(() => {
                    setWelcome(true);
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </Box>
        )}
        {welcome && (
          <Container
            maxWidth={"xl"}
            sx={{
              opacity: welcome ? 100 : 0,
            }}
          >
            <Header />
            <Component {...pageProps} />
            <Fab
              color="info"
              size="small"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              sx={{
                position: "sticky",
                bottom: "1rem",
                display: "flex",
                // display: { xs: "none", sm: "flex" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Scroll to Top"
                placement="top"
              >
                <ArrowDropUp fontSize="large" />
              </Tooltip>
            </Fab>
            <Footer />
          </Container>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
