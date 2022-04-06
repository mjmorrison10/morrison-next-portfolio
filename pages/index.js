import {
  ExpandMore,
  MiscellaneousServices,
  SignalCellularNullSharp,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grow,
  Paper,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Head from "next/head";
import TypewriterComponent from "typewriter-effect";
import Skelebar from "../components/SkeleBar";
import {
  servicesWeOffer,
  getStartedBtn,
  randomColorWithAccent,
  listOfServicesData,
} from "../public/Settings/baseSettings";
import styles from "../styles/Home.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TestimonialsComp from "../components/testimonialsComp";
import Hyphenated from "react-hyphen";
import React, { useCallback, useRef, useState } from "react";
import { blue, blueGrey } from "@mui/material/colors";
import InView, { useInView } from "react-intersection-observer";
import ListOfServicesComp from "../components/index/listOfServicesComp";
import ListOfDevelopmentServices from "../components/index/listOfDevelopmentServices";

export default function Home() {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  // const containerRef = React.useRef(null);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    // threshold: 0.25,
    // triggerOnce: true,
  });

  const [triggerRequestFreeQuoteBtn, setTriggerRequestFreeQuoteBtn] =
    React.useState(false);

  const handleRequestFreeQuoteBtn = () => {
    setTimeout(() => {
      console.log("test");
      setTriggerRequestFreeQuoteBtn(true);
    }, 2000);
  };

  React.useEffect(() => {
    handleRequestFreeQuoteBtn();
  }, []);

  // const [inView, setInView] = React.useState(false);

  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0.25,
  //   rootMargin: "150px",
  //   // triggerOnce: true,
  // });

  // const ref = useRef();
  // const [inViewRef, inView] = useInView();

  // // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop
  // const setRefs = useCallback(
  //   (node) => {
  //     // Ref's from useRef needs to have the node assigned to `current`
  //     ref.current = node;
  //     // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
  //     inViewRef(node);
  //   },
  //   [inViewRef]
  // );

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

  // const listOfServicesComp = () => (
  //   <InView threshold={0.25} triggerOnce={true}>
  //     {({ inView, ref, entry }) =>
  //       listOfServicesData.map((data, i) => (
  //         <Grow
  //           ref={ref}
  //           in={inView}
  //           key={i}
  //           style={{ transformOrigin: "0 0 0" }}
  //           {...(inView ? { timeout: 1000 * i } : {})}
  //         >
  //           <Accordion
  //             sx={{
  //               backgroundColor: "transparent",
  //               boxShadow: "none",
  //               border: `1px solid ${blue[900]}`,
  //               boxShadow: 1,
  //             }}
  //           >
  //             <AccordionSummary
  //               expandIcon={<ExpandMore color={"info"} />}
  //               aria-controls={`panel${i}a-content`}
  //               id={`panel${i}a-header`}
  //             >
  //               <Box
  //                 display={"flex"}
  //                 gap={1}
  //                 alignItems={"center"}
  //                 width={"100%"}
  //               >
  //                 <Box color={"info.dark"}>{data.icon}</Box>
  //                 <Typography
  //                   variant="accent"
  //                   component={"h3"}
  //                   color={"info.main"}
  //                   textAlign={"center"}
  //                   alignSelf={"center"}
  //                   width={"100%"}
  //                   sx={{ fontSize: 30 }}
  //                 >
  //                   {data.heading}
  //                 </Typography>
  //               </Box>
  //             </AccordionSummary>
  //             <Skelebar
  //               clr={randomColorWithAccent}
  //               h={2}
  //               w={"95%"}
  //               my={0}
  //               animate={"wave"}
  //             />
  //             <AccordionDetails>
  //               <Typography>{data.description}</Typography>
  //             </AccordionDetails>
  //           </Accordion>
  //         </Grow>
  //       ))
  //     }
  //   </InView>
  // );

  return (
    <Box
      className={styles.container}
      sx={{
        overflowX: "hidden",
      }}
    >
      <Head>
        <title>Michael Morrison</title>

        <meta name="description" content="Generated by create next app" />
        <meta
          name="google-site-verification"
          content="31rvHCdQdbozwIYBR33907PYcg0NeZXwek44wcOxDow"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Heading Section */}
      <Hyphenated>
        <Box
          ref={ref}
          component={"main"}
          minHeight={"100vh"}
          flex={1}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={2}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            backgroundImage: `url("/Images/three-computers-coding-lg.jpg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: { xs: "center" },
            pt: { xs: 10 },
            pb: { xs: 2, md: 0 },
          }}
        >
          <Paper
            elevation={10}
            sx={{
              minHeight: '50vh',
              flex: 1,
              p: 1,
              m: 2,
              backgroundColor: "rgba(245, 245, 255, 0.75)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant={"h1"}
              color={"info.dark"}
              textAlign={"center"}
              gutterBottom
            >
              Professional Web Development
            </Typography>

            <Typography
              variant={"h2"}
              component={"div"}
              textAlign={"center"}
              maxWidth={"30ch"}
              color={"info.main"}
              gutterBottom
              fontSize={"1.5rem !important"}
            >
              We specialize in developing:
              <TypewriterComponent
                options={{
                  strings: servicesWeOffer,
                  autoStart: true,
                  loop: true,
                  delay: 30,
                  deleteSpeed: 30,
                  pauseFor: "2000ms",
                  skipAddStyles: true,
                }}
              />
            </Typography>
          </Paper>
          <Box
            flex={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Slide
              direction="left"
              in={triggerRequestFreeQuoteBtn}
              mountOnEnter
            >
              {getStartedBtn("Request a Free Quote")}
            </Slide>
          </Box>
        </Box>
      </Hyphenated>

      <Skelebar />

      {/* List of Services Section */}
      <Box position={"relative"}>
        <Typography
          variant={"h2"}
          color={"info.main"}
          textAlign={"center"}
          sx={{
            fontSize: "1rem !important",
            textDecoration: "underline",
            position: { xs: null, md: "absolute" },
            left: "10%",
            top: "0%",
            zIndex: 10,
            // transform: { xs: null, md: "rotateY(0deg) rotate(-45deg)" },
          }}
        >
          List of Services <MiscellaneousServices />
        </Typography>

        <Box
          display={"flex"}
          gap={1}
          // minHeight={"100vh"}
          px={1}
          flexDirection={(matchesMd && `row`) || (matchesXs && "column")}
        >
          <Box
            flex={1}
            minHeight={300}
            sx={{
              // background: `url('/Images/websiteOnMobileAndDesktopWithBackgroundRemoved.png') no-repeat contain`,
              backgroundSize: `contain`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url('/Images/websiteOnMobileAndDesktopWithBackgroundRemoved.png')`,
            }}
          ></Box>
          {!matchesMd && <Skelebar />}
          <Box
            flex={1}
            display={"flex"}
            // flexDirection={"column"}
            flexWrap={"wrap"}
            alignItems={(matchesMd && `flex-end`) || (matchesXs && "center")}
            justifyContent={"center"}
            width={"100%"}
            gap={1}
          >
            <ListOfServicesComp />

            {/* {listOfServicesComp()} */}
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"} mt={4} mb={8}>
          {getStartedBtn()}
        </Box>
      </Box>

      {/* <Skelebar /> */}

      {/* Our Work Speaks for Itself Section */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={6}
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

          {/* <InView threshold={0.25} triggerOnce={true}>
            {({ inView, ref, entry }) =>
              listOfDevelopmentServices.map((dev, i) => (
                <Slide
                  ref={ref}
                  in={inView}
                  key={i}
                  direction="up"
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
              ))
            }
          </InView> */}
        </Box>
        {getStartedBtn("Ask about our services")}
      </Box>

      {/* <Skelebar /> */}

      {/* Testimonials */}
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
    </Box>
  );
}
