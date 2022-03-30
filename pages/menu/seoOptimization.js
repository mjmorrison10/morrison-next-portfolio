import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import PageComingSoon from "../../components/pageComingSoon";
import ServicesComp from "../../components/ServicesComp";

function SeoOptimization() {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  return (
    <ServicesComp page='seoOptimization' />
    // <Box minHeight={"100vh"} px={1}>
    //   <Typography
    //     variant={
    //       (matchesMd && `h1`) || (matchesSm && "h2") || (matchesXs && "h3")
    //     }
    //     component="h1"
    //     color={"info.dark"}
    //     textAlign={"center"}
    //     gutterBottom
    //   >
    //     Real SEO experts in your pocket
    //   </Typography>
    //   <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
    //     <Box flex={1}>
    //       <PageComingSoon />
    //       <Typography variant={"body2"} gutterBottom>
    //         Get a free SEO consultation from our real SEO experts who will help
    //         you with everything from keyword research to link building, and
    //         everything in between.
    //       </Typography>
    //       <Typography variant={"h4"} color={"info.dark"} component={"div"}>
    //         Features section:
    //       </Typography>
    //       <Box component={"ul"}>
    //         <Typography variant={"body2"} gutterBottom component={"li"}>
    //           Search engine optimization is the process of improving the quality
    //           and quantity of website traffic to a website or a web page from
    //           search engines.
    //         </Typography>
    //         <Typography variant={"body2"} gutterBottom component={"li"}>
    //           Search engines include Google, Bing, Yahoo!, and others.
    //         </Typography>
    //         <Typography variant={"body2"} gutterBottom component={"li"}>
    //           Anyone with an internet connection can search for information on a
    //           subject.
    //         </Typography>
    //         <Typography variant={"body2"} gutterBottom component={"li"}>
    //           There are over 100 billion searches on Google every month.
    //         </Typography>
    //         <Typography variant={"body2"} gutterBottom component={"li"}>
    //           By 2020, mobile will account for 80% of all internet traffic.
    //         </Typography>
    //       </Box>
    //     </Box>
    //     <Box flex={1}></Box>
    //   </Box>
    // </Box>
  );
}

export default SeoOptimization;
