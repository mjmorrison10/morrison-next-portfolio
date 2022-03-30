import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import PageComingSoon from "../../components/pageComingSoon";
import ServicesComp from "../../components/ServicesComp";

function LandingPage() {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  return (
    
    <ServicesComp page="landingPage" />
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
    //     Generate leads and grow your business
    //   </Typography>
    //   <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
    //     <Box flex={1}>
    //       <PageComingSoon />
    //       <Typography variant={"body2"} gutterBottom>
    //         {`With our landing page service, you can generate leads for your business with a single click, grow your social media presence, and help build your email list. With time-saving features, a simple design, and a focus on conversion, you'll be launching successful campaigns in no time.`}
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
    //         Lead generating landing page
    //       </Typography>
    //       <Typography variant={"body1"} gutterBottom>
    //         {`We specialize in lead generation landing pages that will increase the number of leads and sales for any business. With our intuitive design and powerful features, it's never been easier to create a landing page for any occasion.`}
    //       </Typography>


    //       <Typography variant={"h4"} color={"info.dark"} component={"div"}>
    //         Features
    //       </Typography>
    //       <Box component={"ul"}>
    //         <Typography variant={"body1"} gutterBottom component={"li"}>
    //           Customizable design
    //         </Typography>
    //         <Typography variant={"body1"} gutterBottom component={"li"}>
    //           Powerful lead generating features
    //         </Typography>
    //         <Typography variant={"body1"} gutterBottom component={"li"}>
    //           Comprehensive sales and marketing tools
    //         </Typography>
    //       </Box>
    //       <Typography variant={"h4"} color={"info.dark"} component={"div"}>
    //         Benefits
    //       </Typography>
    //       <Box component={"ul"}>
    //         <Typography variant={"body1"} gutterBottom component={"li"}>
    //           Increase the number of leads
    //         </Typography>
    //         <Typography variant={"body1"} gutterBottom component={"li"}>
    //           Increase the conversion rate of leads
    //         </Typography>
    //         <Typography variant={"body1"} gutterBottom component={"li"}>
    //           Increase sales
    //         </Typography>
    //       </Box>


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
    //         All-inclusive marketing tools
    //       </Typography>
    //       <Typography variant={"body1"} gutterBottom>
    //         {`Our landing pages come with everything you need for success: responsive design, copywriting formulas (FAB), A/B testing capabilities, and more - at an affordable price that can't be beat! We'll even do the heavy lifting of creating high-converting templates for you.`}
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
    //         Everything you need to launch a campaign in minutes
    //       </Typography>
    //       <Typography variant={"body1"} gutterBottom>
    //         {`No matter what type of campaign you're running - from affiliate to lead generation - we have the perfect template waiting for you. From responsive design to copywriting formulas (FAB) to A/B testing capabilities - we've got it all!`}
    //       </Typography>
    //     </Box>
    //     <Box flex={1}></Box>
    //   </Box>
    // </Box>
  );
}

export default LandingPage;
