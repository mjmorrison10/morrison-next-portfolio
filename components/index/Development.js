import { Box, Slide, Typography } from "@mui/material";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const { ref, inView, entry } = useInView({
  /* Optional options */
  threshold: 0.25,
  rootMargin: "150px",
  triggerOnce: true,
});

function Development() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={6}
      minHeight={"75vh"}
    >
      <Typography
        variant="h2"
        color="info.dark"
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
        color="info.main"
        overflow={"hidden"}
        ref={containerRef}
      >
        {listOfDevelopmentServices.map((dev, i) => (
          <Slide
            key={i}
            direction="up"
            // ref={ref}
            in={inView}
            container={containerRef.current}
          >
            <Box
              flex={1}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <LazyLoadImage
                src={dev.src}
                alt={dev.alt}
                height={dev.height}
                width={dev.width}
              />
              <Typography
                variant="h6"
                component={"h3"}
                textAlign={"center"}
                gutterBottom
              >
                {dev.title}
              </Typography>
            </Box>
          </Slide>
        ))}
      </Box>
      {getStartedBtn("Ask about our services")}
    </Box>
  );
}

export default Development;
