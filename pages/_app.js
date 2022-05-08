import "../styles/globals.css";
// import React, { useState } from "react";
import Header from "../components/header";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { blue, blueGrey, grey, orange } from "@mui/material/colors";
import Footer from "../components/footer";
import { Box, Fab, Fade, responsiveFontSizes, Tooltip } from "@mui/material";
import { ArrowDropUp } from "@mui/icons-material";

import * as React from "react";
import IconButton from "@mui/material/IconButton";
// import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp({ styles }) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Fab
      size={styles.fabIcon(true).size}
      color={styles.fabIcon(true).color}
      onClick={colorMode.toggleColorMode}
      // onClick={() => {
      //   console.log("mode");
      //   // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      // }}
      sx={styles.fabIcon(true)}
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
      {/* <ArrowDropUp fontSize="large" /> */}
    </Fab>
  );
}

export default function ToggleColorMode({ Component, pageProps }) {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = React.useMemo(
    () =>
      createTheme({
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
          fontFamily: [
            "'Roboto",
            "Bangers",
            "Montserrat",
            "Share Tech Mono'",
          ].join("', '"),
          primary: {
            fontFamily: "Bangers",
          },
          h1: {
            fontFamily: "Bangers",
          },
          secondary: {
            fontFamily: "Montserrat",
          },
          h2: {
            fontFamily: "Montserrat",
          },
          accent: {
            fontFamily: "Share Tech Mono",
          },
          h3: {
            fontFamily: "Share Tech Mono",
          },
        },

        palette: {
          mode,
          ...(mode === "light"
            ? {
                customPrimary: {
                  light: `hsl(239, 85%, 61%)`,
                  main: `hsl(239, 85%, 46%)`,
                  dark: `hsl(239, 90%, 31%)`,
                  contrastText: `hsl(239, 90%, 91%)`,
                  bgcolor: `hsl(239, 90%, 91%)`,
                },
                customPrimaryReversed: {
                  light: `hsl(239, 85%, 6%)`,
                  main: `hsl(239, 85%, 11%)`,
                  dark: `hsl(239, 90%, 16%)`,
                  contrastText: `hsl(239, 90%, 90%)`,
                },
                customPrimaryDark: {
                  light: `hsl(239, 85%, 20%)`,
                  main: `hsl(239, 85%, 15%)`,
                  dark: `hsl(239, 85%, 10%)`,
                  contrastText: `hsl(239, 90%, 90%)`,
                },
                customSecondary: {
                  light: `hsl(59, 85%, 61%)`,
                  main: `hsl(59, 85%, 46%)`,
                  dark: `hsl(59, 90%, 31%)`,
                  contrastText: `hsl(59, 90%, 15%)`,
                },
                customAccent: {
                  light: `hsl(209, 85%, 61%)`,
                  main: `hsl(209, 85%, 46%)`,
                  dark: `hsl(209, 90%, 31%)`,
                  contrastText: `hsl(209, 90%, 95%)`,
                },
              }
            : {
                customPrimary: {
                  light: `hsl(239, 85%, 76%)`,
                  main: `hsl(239, 85%, 86%)`,
                  dark: `hsl(239, 90%, 96%)`,
                  contrastText: `hsl(239, 90%, 11%)`,
                  bgcolor: `hsl(239, 90%, 6%)`,
                },
                customPrimaryReversed: {
                  light: `hsl(239, 85%, 85%)`,
                  main: `hsl(239, 85%, 90%)`,
                  dark: `hsl(239, 90%, 95%)`,
                  contrastText: `hsl(239, 90%, 11%)`,
                },
                customPrimaryDark: {
                  light: `hsl(239, 85%, 20%)`,
                  main: `hsl(239, 85%, 15%)`,
                  dark: `hsl(239, 85%, 10%)`,
                  contrastText: `hsl(239, 90%, 90%)`,
                },
                customSecondary: {
                  light: `hsl(59, 85%, 61%)`,
                  main: `hsl(59, 85%, 46%)`,
                  dark: `hsl(59, 90%, 31%)`,
                  contrastText: `hsl(59, 90%, 15%)`,
                },
                customAccent: {
                  light: `hsl(209, 85%, 21%)`,
                  main: `hsl(209, 85%, 16%)`,
                  dark: `hsl(209, 90%, 11%)`,
                  contrastText: `hsl(209, 90%, 95%)`,
                },
              }),
        },

        // palette: {
        //   mode,
        // },
      }),
    [mode]
  );

  const styles = {
    container: {
      backgroundColor: theme.palette.customPrimary.bgcolor,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    fabIcon(fab) {
      return {
        size: "small",
        color: fab ? "customPrimaryReversed" : "customPrimary",
        position: "sticky",
        display: "flex",
        bottom: "1rem",
        alignItems: "center",
        alignSelf: fab ? "flex-start" : "flex-end",
        mr: !fab && 4,
        ml: fab && 4,
        justifyContent: "center",
        zIndex: fab && 100000,
      };
    },
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={styles.container}>
          <Header />
          <Component {...pageProps} mode={mode} theme={theme} />
          <Fab
            size={styles.fabIcon().size}
            color={styles.fabIcon().color}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            sx={styles.fabIcon()}
          >
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Scroll to Top"
              placement="left"
            >
              <ArrowDropUp fontSize="large" />
            </Tooltip>
          </Fab>

          <MyApp styles={styles} />

          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
