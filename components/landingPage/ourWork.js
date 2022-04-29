import { Box, Typography, useMediaQuery } from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";
import React from "react";
import { getStartedBtn } from "../../public/Settings/baseSettings";
import ListOfDevelopmentServices from "../index/listOfDevelopmentServices";

function OurWork() {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={6}
      width={"80%"}
      paddingY={8}
      minHeight={"100vh"}
      bgcolor={blueGrey[900]}
      sx={{
        clipPath: {
          xs: `polygon(0 5%, 100% 0%, 100% 95%, 0% 100%)`,
          md: `polygon(
        0 10%, 
        10% 15%,
         5% 10%,

         95% 0%,
         85% 10%,
         95% 5%,

         100% 90%,
         85% 80%,
         95% 90%,

         5% 100%,
         15% 85%,
         5% 95%)`,
        },
        // clipPath: `polygon(0 10%, 100% 0%, 100% 90%, 0 100%)`,
      }}
    >
      <Typography
        variant="h2"
        color={blue[50]}
        textAlign={"center"}
        gutterBottom
      >
        Our Work Speaks for Itself
      </Typography>
      <Box
        display={"flex"}
        flexDirection={matchesMd ? "row" : "column"}
        gap={matchesMd ? null : 6}
        justifyContent={"space-around"}
        width={"100%"}
        color={blue[50]}
        // overflow={"hidden"}
        // ref={containerRef}
      >
        <ListOfDevelopmentServices />
      </Box>
      {getStartedBtn("Ask about our services")}
    </Box>
  );
}

export default OurWork;
