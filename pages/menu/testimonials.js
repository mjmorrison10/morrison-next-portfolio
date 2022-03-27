import { Box, Typography } from "@mui/material";
import React from "react";
import PageComingSoon from "../../components/pageComingSoon";
import TestimonialsComp from "../../components/testimonialsComp";

function Testimonials() {
  return (
    <Box minHeight={"100vh"}

    >
      <Typography
        variant={"h2"}
        component={"h1"}
        color={"info.dark"}
        textAlign={"center"}
        mt={2}
        gutterBottom
      >
      
        Testimonials
      </Typography>
      
      <TestimonialsComp />
    </Box>
  );
}

export default Testimonials;
