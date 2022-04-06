import "../styles/globals.css";
import Header from "../components/header";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { blue, blueGrey, grey, lightGreen, orange } from "@mui/material/colors";
import Footer from "../components/footer";
import {
  Box,
  Button,
  Container,
  Fab,
  Fade,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ActionTooltip from "../components/actionTooltip";
import { ArrowDropUp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import { companyFullName, companyName } from "../public/Settings/baseSettings";

console.log();

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Share Tech Mono",
          letterSpacing: "0.05rem",
        },
      },
    },
  },

  typography: {
    // fontFamily: ["Roboto", "Bangers", "Montserrat", "Share Tech Mono"].join(
    //   ", "
    // ),

    fontFamily: ["'Roboto", "Bangers", "Montserrat", "Share Tech Mono'"].join(
      "', '"
    ),

    primary: {
      fontFamily: "Bangers",
    },
    secondary: {
      fontFamily: "Montserrat",
    },
    accent: {
      fontFamily: "Share Tech Mono",
    },
  },

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
      light: `hsl(239, 85%, 61%)`,
      main: `hsl(239, 85%, 46%)`,
      dark: `hsl(239, 90%, 31%)`,
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
    infoRev: {
      light: blue[50],
      main: blue[100],
      dark: blue[200],
    },
  },
});

// fontSize: '1.2rem',
// '@media (min-width:600px)': {
//   fontSize: '1.5rem',
// },
theme.typography.h1 = {
  fontFamily: "Bangers !important",
  letterSpacing: "0.185rem",
  [theme.breakpoints.up("xs")]: {
    fontSize: "2.5rem",
    fontWeight: 600,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "4rem",
    fontWeight: 600,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "6rem",
    fontWeight: 600,
  },
};

theme.typography.h2 = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3rem",
  },
};

theme.typography.h3 = {
  fontFamily: "Share Tech Mono",
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.5rem",
  },
};

theme.typography.body1 = {
  fontFamily: "Montserrat",
  fontWeight: 600,
};

theme.typography.body2 = {
  fontFamily: "Montserrat",
  fontSize: "0.85rem",
};

// theme.typography.h4 = {
//   fontFamily: "Montserrat",
// };

// theme.typography.h5 = {
//   fontFamily: "Montserrat",
// };

// theme.typography.h6 = {
//   fontFamily: "Montserrat",
// };

function MyApp({ Component, pageProps }) {
  // const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  // const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  // const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  // const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  // const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  // const matches =

  // function matches(screenSize) {
  //   useMediaQuery((theme) => theme.breakpoints.up(screenSize));
  // }

  // const [opa, setOpa] = useState(0);
  const [welcome, setWelcome] = useState(false);

  const [opa, setOpa] = useState(0);

  useEffect(() => {
    if (!welcome) return;
    setOpa(100);
  }, [welcome]);

  const liteGrnColor = lightGreen["A400"];
  const liteBluColor = blue[50];
  const bgColor = grey[900];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          // backgroundColor: welcome ?

          //   blue[50]?
          //   radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(1,106,146,1) 90%, rgba(2,0,36,1) 100%)

          //   : grey[900]
          // }}
          // backgroundPosition: "50% -50%",
          // // backgroundAttachment: 'fixed',
          // backgroundRepeat: "no-repeat",
          // backgroundImage: `url('/Images/royalBlueBanner.jpg')`,
          // backgroundSize: "100%",

          // // fixed, url('/Images/royalBlueBanner.jpg'), 50% -100%, no-repeat,
          background: welcome
            ? // blue[50]?
              `radial-gradient(circle, ${blue[50]} 0%, ${blue[200]} 75%, ${blue[900]} 100%)`
            : grey[900],
        }}
        minHeight={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        Disable
        once
        website
        is
        finished
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
              minHeight: "100vh",
              width: "100vw",
              fontFamily: "Share Tech Mono",
            }}
            onClick={() => {
              !welcome && setWelcome(true);
            }}
          >
            <Button
              color="matrix"
              variant="contained"
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

            <Typography
              component={"div"}
              sx={{
                fontFamily: "Share Tech Mono",
              }}
            >
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
                options={{
                  delay: 25,
                  deleteSpeed: 25,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`Welcome to ${companyFullName}!`)
                    .deleteChars(`${companyFullName.length + 1}`)
                    .typeString(`${companyName}`)
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "We specialize in developing sales funnel pages for businesses!"
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Please wait while our servers load. :)")
                    .pauseFor(1000)
                    .callFunction(() => {
                      setWelcome(true);
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
              />
            </Typography>
          </Box>
        )}
        {welcome && (
          <Container
            maxWidth="xl"
            disableGutters={true}
            sx={{
              flexGrow: 1,
              opacity: opa,
              transition: "all 5000ms ease",
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
                display: "flex",
                bottom: "1rem",
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
