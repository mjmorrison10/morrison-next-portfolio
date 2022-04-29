import { Box, Typography } from "@mui/material";
import React from "react";
import TestimonialsComp from "../testimonialsComp";

function Testimonials() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"50vh"}
      flexDirection={"column"}
      gap={1}
    >
      <Typography
        variant="h4"
        component={"h2"}
        color="info.dark"
        textAlign={"center"}
        mt={5}
        gutterBottom
      >
        Testimonials
      </Typography>
      <TestimonialsComp />
    </Box>
  );
}

export default Testimonials;
