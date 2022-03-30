import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import PageComingSoon from "../../components/pageComingSoon";

function ApiAndBackend() {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  return (
    <Box minHeight={"100vh"} display={"flex"} flexDirection={"column"} px={1}>
      <Typography
        variant={
          (matchesMd && `h1`) || (matchesSm && "h2") || (matchesXs && "h3")
        }
        component="h1"
        color={"info.dark"}
        textAlign={"center"}
        gutterBottom
      >
        Build a powerful website
      </Typography>

      <Box
        display={"flex"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box flex={1}>
          <PageComingSoon />
          <Typography variant={"body2"} gutterBottom>
            {`We have over 8 years of experience in delivering quality-driven websites that are fully responsive and SEO friendly. We also pride ourselves in providing a fast turnaround time and competitive prices.`}
          </Typography>
          <Typography variant={"h4"} color={"info.dark"} component={"div"}>
            Features section:
          </Typography>
          <Typography
            variant={
              (matchesMd && `h2`) || (matchesSm && "h3") || (matchesXs && "h4")
            }
            component="h2"
            textAlign={"center"}
            maxWidth={"30ch"}
            color={"info.main"}
            gutterBottom
          >
            Customized solutions for our clients
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            {`We understand that each business is unique, so we offer custom solutions to suit your needs. Our services range from backend web development to full stack websites with interactive data points. You're guaranteed to find something perfect for you right here!`}
          </Typography>
          <Typography
            variant={
              (matchesMd && `h2`) || (matchesSm && "h3") || (matchesXs && "h4")
            }
            component="h2"
            textAlign={"center"}
            maxWidth={"30ch"}
            color={"info.main"}
            gutterBottom
          >
            The power to manipulate your data
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            {`Want to display statistical data and allow the user to select their own preferences? Our intuitive data-driven websites can do just that. We provide front end development and backend development services if you need both. Interested in using our services? We have several packages and a number of add-ons for your project, we offer full service development, or even just a consultation.`}
          </Typography>
          <Typography
            variant={
              (matchesMd && `h2`) || (matchesSm && "h3") || (matchesXs && "h4")
            }
            component="h2"
            textAlign={"center"}
            maxWidth={"30ch"}
            color={"info.main"}
            gutterBottom
          >
            A team of professional developers
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            {`We work hard and we work fast, delivering high-quality work within a project's timeframe so you always get the best value for your time and money. We're able to get to work on your project right away. Contact us today for a free estimate and let's discuss your project!`}
          </Typography>
        </Box>
        <Box flex={1}></Box>
      </Box>
    </Box>
  );
}

export default ApiAndBackend;
