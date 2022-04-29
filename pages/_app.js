import "../styles/globals.css";
import Header from "../components/header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, blueGrey, grey, orange } from "@mui/material/colors";
import Footer from "../components/footer";
import { Box, Fab, Fade, responsiveFontSizes, Tooltip } from "@mui/material";
import { ArrowDropUp } from "@mui/icons-material";

console.log();

let theme = createTheme({
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
    fontFamily: ["'Roboto", "Bangers", "Montserrat", "Share Tech Mono'"].join(
      "', '"
    ),
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
    infoRev: {
      light: blue[50],
      main: blue[100],
      dark: blue[200],
    },

    customPrimary: {
      light: `hsl(239, 85%, 61%)`,
      main: `hsl(239, 85%, 46%)`,
      dark: `hsl(239, 90%, 31%)`,
      opacity85: `hsla(239, 90%, 31%, 85%)`,
      contrastText: `hsl(239, 90%, 91%)`,
    },
    customPrimaryReversed: {
      light: `hsl(239, 85%, 91%)`,
      main: `hsl(239, 85%, 86%)`,
      dark: `hsl(239, 90%, 81%)`,
      contrastText: `hsl(239, 90%, 14%)`,
    },
    customSecondary: {
      light: `hsl(59, 85%, 61%)`,
      main: `hsl(59, 85%, 46%)`,
      dark: `hsl(59, 90%, 31%)`,
      contrastText: `hsl(59, 90%, 15%)`,
    },
    customSecondaryReversed: {
      light: `hsl(59, 85%, 91%)`,
      main: `hsl(59, 85%, 86%)`,
      dark: `hsl(59, 90%, 81%)`,
      contrastText: `hsl(59, 90%, 15%)`,
    },
    customAccent: {
      light: `hsl(209, 85%, 61%)`,
      main: `hsl(209, 85%, 46%)`,
      dark: `hsl(209, 90%, 31%)`,
      contrastText: `hsl(209, 90%, 95%)`,
    },
    customAccentReversed: {
      light: `hsl(209, 85%, 95%)`,
      main: `hsl(209, 85%, 90%)`,
      dark: `hsl(209, 90%, 85%)`,
      contrastText: `hsl(209, 90%, 10%)`,
    },
  },
});

theme = responsiveFontSizes(theme);

function MyApp({ Component, pageProps }) {
  const containerStyles = {
    background: `radial-gradient(circle, ${blue[50]} 0%, ${blue[200]} 75%, ${blue[900]} 100%)`,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  };

  const fabIconStyles = {
    size: "small",
    color: "info",
    position: "sticky",
    display: "flex",
    bottom: "1rem",
    alignItems: "center",
    alignSelf: "flex-end",
    mr: 4,
    justifyContent: "center",
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={containerStyles}>
        <Header />
        <Component {...pageProps} />
        <Fab
          size={fabIconStyles.size}
          color={fabIconStyles.color}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          sx={fabIconStyles}
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
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
