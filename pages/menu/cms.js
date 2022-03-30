import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import PageComingSoon from "../../components/pageComingSoon";

function Cms() {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  return (
    <Box minHeight={"100vh"} px={1}>
      <PageComingSoon />
      <Typography
        variant={
          (matchesMd && `h1`) || (matchesSm && "h2") || (matchesXs && "h3")
        }
        component="h1"
        color={"info.dark"}
        textAlign={"center"}
        gutterBottom
      >
        Professional, Personalized Websites
      </Typography>
      <Box
        display={"flex"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box flex={1}>
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
            Need a website? The MorrisonDevOps team is here to help!
          </Typography>
          <Typography variant={"h4"} color={"info.dark"} component={"div"}>
            Features section:
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            {`Want a professional website but don't want to pay thousands of dollars for it? We make it easy with our affordable and hassle-free websites. With no contracts, you're free to cancel anytime.`}
          </Typography>
        </Box>
        <Box flex={1}></Box>
      </Box>
    </Box>
  );
}

export default Cms;
