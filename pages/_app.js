import Header from "../components/header";
import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, blueGrey } from "@mui/material/colors";
import Footer from "../components/footer";
import { Box, Container, Fab, Fade, Tooltip } from "@mui/material";
import ActionTooltip from "../components/actionTooltip";
import { ArrowDropUp } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      light: blueGrey[50],
      main: blueGrey[100],
      dark: blueGrey[200],
    },
    // secondary: {
    //   main: blue[500],
    // },
    info: {
      main: blue[500],
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        backgroundColor={blue[50]}
        minHeight={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        // Disable once website is finished
        justifyContent={"flex-end"}
      >
        <Container maxWidth={"xl"}>
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
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
