import { Box, Grow, Slide, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import InView, { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ListOfDevelopmentServices() {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  //   const containerRef = React.useRef(null);

  //   const { ref, inView, entry } = useInView({
  //     /* Optional options */
  //     // threshold: 0.25,
  //     // triggerOnce: true,
  //   });

  const listOfDevelopmentServices = [
    {
      src: "/Images/huddleLandingPage.png",
      alt: "Huddle Landing Page",
      height: "auto",
      width: matchesMd ? 300 : "50%",
      title: "Website App Development",
    },
    {
      src: "/Images/copyLandingPage.png",
      alt: "Huddle Landing Page",
      height: 250,
      width: "auto",
      title: "Responsive App Development",
    },
    {
      src: "/Images/websiteOnMobileAndDesktopWithBackgroundRemoved.png",
      alt: "Huddle Landing Page",
      height: "auto",
      width: matchesMd ? 300 : "50%",
      title: "Web App Development",
    },
  ];

  return (
    <Box
      // ref={ref}
      display={"flex"}
      flexDirection={matchesMd ? "row" : "column"}
      gap={matchesMd ? null : 6}
      justifyContent={"space-around"}
      width={"100%"}
      // color="info.main"
    >
      {listOfDevelopmentServices.map((dev, i) => (
        // <Slide
        //   //   ref={ref}
        //   in={inView}
        //   key={i}
        //   direction={matchesMd ? "up" : "left"}
        //   timeout={1000 * i}
        //   //   container={containerRef.current}
        // >
        <Grow
          // ref={ref}
          in={true}
          // in={inView}
          key={i}
          style={{ transformOrigin: "0 0 0" }}
          // {...(inView ? { timeout: 1000 * i } : {})}
        >
          <Box
            // ref={ref}
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
              component={"h3"}
              textAlign={"center"}
              gutterBottom
              fontFamily={"Share Tech Mono"}
            >
              {dev.title}
            </Typography>
          </Box>
        </Grow>
      ))}
    </Box>
    // <InView threshold={0} rootMargin={"-150px"} triggerOnce={true}>
    //   {
    //     ({ inView, ref, entry }) => (
    //     )

    //   <div ref={ref}>
    //     <h2>{`Header inside viewport ${inView}.`}</h2>
    //   </div>

    // <div ref={ref}>in view: '{inView}'</div>

    // listOfDevelopmentServices.map((dev, i) => (
    //   <Slide
    //     ref={ref}
    //     in={inView}
    //     key={i}
    //     direction="up"
    //     container={containerRef.current}
    //   >
    //     <Box
    //       flex={1}
    //       display={"flex"}
    //       justifyContent={"space-between"}
    //       alignItems={"center"}
    //       flexDirection={"column"}
    //     >
    //       <LazyLoadImage
    //         src={dev.src}
    //         alt={dev.alt}
    //         height={dev.height}
    //         width={dev.width}
    //       />
    //       <Typography
    //         variant="h6"
    //         component={"h3"}
    //         textAlign={"center"}
    //         gutterBottom
    //       >
    //         {dev.title}
    //       </Typography>
    //     </Box>
    //   </Slide>
    // ))
    //   }
    // </InView>
  );
}

export default ListOfDevelopmentServices;
