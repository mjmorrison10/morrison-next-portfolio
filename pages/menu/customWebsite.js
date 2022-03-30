import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import PageComingSoon from "../../components/pageComingSoon";

function CustomWebsite() {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  return (
    <Box minHeight={"100vh"} px={1}>
      <Typography
        variant={
          (matchesMd && `h1`) || (matchesSm && "h2") || (matchesXs && "h3")
        }
        component="h1"
        color={"info.dark"}
        textAlign={"center"}
        gutterBottom
      >
        Quality, you can trust
      </Typography>
      <Box
        display={"flex"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box flex={1}>
          <Typography variant={"body2"} gutterBottom>
            We offer all the benefits of a high quality, custom website without
            the high price tag. We are a small team with big ambitions, so we
            take the time to make sure everything is perfect in order to provide
            you with the best quality service.
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
            Complete website for your business
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            We build complete webpages for your business that include all
            necessary pages and features, from a homepage to a blog and an
            e-commerce shop. No need to hire multiple professionals for each
            task when we can do it all for you!
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
            A complete package at an affordable price
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            Don't waste money on individual small websites or services when you
            can get them all in one package with us. We offer unbeatable prices
            that will save you tons of money if not hundreds of hours.
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
            Your perfect web partner
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            We thrive on the idea of working with you to provide a personalized
            experience. This means that not only will we be there for you every
            step of the way, but we'll be there to listen and make your vision
            come true. We work hard to have an open line of communication with
            every client.
          </Typography>
          <PageComingSoon />
        </Box>
        <Box flex={1}></Box>
      </Box>
    </Box>
  );
}

export default CustomWebsite;
