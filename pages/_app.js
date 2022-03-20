import Header from "../components/header";
import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, blueGrey, grey, lightGreen, orange } from "@mui/material/colors";
import Footer from "../components/footer";
import { Box, Button, Container, Fab, Fade, Tooltip } from "@mui/material";
import ActionTooltip from "../components/actionTooltip";
import { ArrowDropUp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import { companyName } from "../public/Settings/baseSettings";

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

    // primary: {
    //   main: '#0971f1',
    //   darker: '#053e85',
    // },
    // neutral: {
    //   main: '#64748B',
    //   contrastText: '#fff',
    // },
    matrix: {
      light: lightGreen["A200"],
      main: lightGreen["A400"],
      dark: lightGreen["A700"],
      contrastText: grey[900],
    },
  },
});



function MyApp({ Component, pageProps }) {
  // const [opa, setOpa] = useState(0);
  const [welcome, setWelcome] = useState(false);

  const [opa, setOpa] = useState(0);

  // useEffect(() => {
  //   console.log(welcome, '- Welcome has changed');
  // }, [welcome])

  useEffect(() => {
    console.log("before", opa);
    if (!welcome) return;
    setOpa(100);
    // setTimeout(() => {
    //   console.log("set Timeout");
    //   setOpa(100);
    // }, 2500);
    console.log("after", opa);
  }, [welcome]);

  // useEffect(() => {
  //   console.log("before", opa);
  //   const timer = setInterval(() => {
  //     console.log("after", opa);
  //     setOpa(100);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };

  // const timer = window.setInterval(() => {
  //   console.log("test");
  //   setOpa((prevOpa) => prevOpa + 1); // <-- Change this line!
  // }, 10000);
  // return () => {
  //   window.clearInterval(timer);
  // };
  // }, []);

  const liteGrnColor = lightGreen["A400"];
  const liteBluColor = blue[50];
  const bgColor = grey[900];

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
          <Box
            sx={{
              fontSize: { xs: 40, md: 50 },
              maxWidth: "65ch",
              color: lightGreen["A400"],
              padding: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Button
              color="matrix"
              variant="contained"
              onClick={() => {
                setWelcome(true);
              }}
              sx={{
                position: "absolute",
                bottom: 10,
                right: 20,
                borderRadius: 100,
                opacity: 0.5,
              }}
            >
              Skip
            </Button>
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
                  .typeString(`Welcome to ${companyName}!`)
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
                    // setWelcome(true);
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
              opacity: opa,
              // opacity: welcome ? opa : 0,
              transition: "all 2500ms",
              // opacity: welcome ? 100 : 0,
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
