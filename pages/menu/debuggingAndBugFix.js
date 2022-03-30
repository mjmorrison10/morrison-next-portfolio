import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import PageComingSoon from "../../components/pageComingSoon";
import ServicesComp from "../../components/ServicesComp";

function DebuggingAndBugFix() {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));


  return (
    <Box>
      <ServicesComp page='debuggingAndBugFix' />
    </Box>
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
    //     Your website, our mission
    //   </Typography>
    //   <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
    //     <Box flex={1}>
    //       <PageComingSoon />
    //       <Typography variant={"body2"} gutterBottom>
    //         {`We understand how frustrating it can be when your website isn't performing as it should. That's why we offer a wide range of services to make debugging and fixing bugs on your website an easy process.`}
    //       </Typography>
    //       <Typography variant={"h4"} color={"info.dark"} component={"div"}>
    //         Features section:
    //       </Typography>
    //       <Typography
    //         variant={
    //           (matchesMd && `h2`) || (matchesSm && "h3") || (matchesXs && "h4")
    //         }
    //         component="h2"
    //         textAlign={"center"}
    //         maxWidth={"30ch"}
    //         color={"info.main"}
    //         gutterBottom
    //       >
    //         Bugs in sight
    //       </Typography>
    //       <Typography variant={"body1"} gutterBottom>
    //         {`Whether you're looking for a quick fix or something more in depth, MorrisonDevOps has the solution needed. We diagnose your website and fix any errors that are found with our fast, affordable and easy to use service — all while keeping you in the loop with regular updates.`}
    //       </Typography>
    //       <Typography
    //         variant={
    //           (matchesMd && `h2`) || (matchesSm && "h3") || (matchesXs && "h4")
    //         }
    //         component="h2"
    //         textAlign={"center"}
    //         maxWidth={"30ch"}
    //         color={"info.main"}
    //         gutterBottom
    //       >
    //         Thoughtful service
    //       </Typography>
    //       <Typography variant={"body1"} gutterBottom>
    //         {`We give you all the information you need upfront so that there are no surprises or hidden fees. We'll provide an honest quote after a thorough analysis of your site, and then just as important - we'll stick to it!`}
    //       </Typography>
    //     </Box>
    //     <Box flex={1}></Box>
    //   </Box>
    // </Box>
  );
}

export default DebuggingAndBugFix;
