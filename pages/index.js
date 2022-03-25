import {
  Circle,
  Cottage,
  DataThresholding,
  FlightLand,
  LogoutTwoTone,
  PrecisionManufacturing,
  PropaneSharp,
  Sell,
  YoutubeSearchedFor,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { height } from "@mui/system";
import Head from "next/head";
// import Image from "next/image";
// import Image from 'material-ui-image'
import { useState } from "react";
import TypewriterComponent from "typewriter-effect";
import SkeleBar from "../components/SkeleBar";
import {
  servicesWeOffer,
  getStartedBtn,
  randomItemFromAnArray,
  paletteColors,
  MuiAccents,
  randomColorWithAccent,
} from "../public/Settings/baseSettings";
import styles from "../styles/Home.module.css";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import TestimonialsComp from "../components/testimonialsComp";

export default function Home() {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  const [iconFontSize, setIconFontSize] = useState("large");

  // const servicesWeOffer = [
  //   "High-Converting Sales Funnel page",
  //   "Lead Generation Landing Page",
  //   "Customized Homepage Website for your Business",
  //   "Content-Management System",
  // ];

  const listOfServicesData = [
    {
      heading: `Landing Page`,
      description: `Our landing page is designed with the purpose of generating leads for
      your business.`,
      icon: <FlightLand fontSize={iconFontSize} />,
    },
    {
      heading: `Sales Funnel Page`,
      description: `High-converting sales funnel page designed to boost sales of a product
      or eLearning course.`,
      icon: <Sell fontSize={iconFontSize} />,
    },
    {
      heading: `Custom Web Page`,
      description: `Premium service - fullly customized and complete web page.`,
      icon: <Cottage fontSize={iconFontSize} />,
    },
    {
      heading: `Web page built on CMS`,
      description: `We can work with CMS software, like WordPress Elementor to develop professionally designed web pages`,
      icon: <PrecisionManufacturing fontSize={iconFontSize} />,
    },
    {
      heading: `Web page using API and Backend`,
      description: `Do you have a specific website you want that handles data? Well, this service is for you. APIs are wonderful for displaying data, and there's an API for everything!`,
      icon: <DataThresholding fontSize={iconFontSize} />,
    },
    {
      heading: `SEO Optimization`,
      description: `We can perform search engine optimization for your website to rank higher in Google.`,
      icon: <YoutubeSearchedFor fontSize={iconFontSize} />,
    },
  ];

  const listOfDevelopmentServices = [
    {
      src: "/Images/huddleLandingPage.png",
      alt: "Huddle Landing Page",
      height: "auto",
      width: 300,
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
      width: 300,
      title: "Web App Development",
    },
  ];

  // const listOfServicesComp = () =>
  //   listOfServicesData.map(
  //     (service, i)(
  //       <Box key={i} maxWidth={"65ch"}>
  //         <Typography variant="h6" component={"h3"}>
  //           {service.heading}
  //         </Typography>
  //         <Typography variant="body">{service.description}</Typography>
  //       </Box>
  //     )
  //   );

  const displayServiceDetails = (desc) => (
    <Typography variant="body">{desc}</Typography>
  );

  const listOfServicesComp = () =>
    listOfServicesData.map((data, i) => (
      <Paper
        key={i}
        sx={{
          display: "flex",
          gap: 1,
          p: 1,
          alignItems: "center",
          maxWidth: "65ch",
          width: "100%",
        }}
      >
        <Box color={"info.dark"}>{data.icon}</Box>
        <Box width={"100%"}>
          <Typography
            variant="h6"
            component={"h3"}
            color={"info.main"}
            textAlign={"center"}
          >
            {data.heading}
          </Typography>
          <SkeleBar
            clr={randomColorWithAccent}
            h={2}
            w={"100%"}
            my={0}
            animate={"wave"}
          />
          {displayServiceDetails(data.description)}
        </Box>
      </Paper>
    ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Morrison</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        component={"main"}
        minHeight={"100vh"}
        flex={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        sx={{
          backgroundImage: `url("/Images/three-computers-coding-lg.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: { xs: "center", md: "0 60%" },
        }}
      >
        <Paper
          elevation={10}
          sx={{
            p: 1,
            mx: 2,
            backgroundColor: "rgba(245, 245, 255, 0.75)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant={
              (matchesMd && `h1`) || (matchesSm && "h2") || (matchesXs && "h3")
            }
            component="h1"
            color={"info.dark"}
            textAlign={"center"}
          >
            {(matchesSm && "Professional Web Development") ||
              (matchesXs && "Web Design")}
          </Typography>

          <Typography
            variant={
              (matchesMd && `h2`) || (matchesSm && "h3") || (matchesXs && "h4")
            }
            component="h2"
            textAlign={"center"}
            maxWidth={"30ch"}
            color={"info.main"}
          >
            We specialize in developing:
            <TypewriterComponent
              options={{
                strings: servicesWeOffer,
                autoStart: true,
                loop: true,
                pauseFor: "2000ms",
                skipAddStyles: true,
              }}
            />
          </Typography>
        </Paper>
        {getStartedBtn()}
      </Box>

      <SkeleBar />

      <Box
        display={"flex"}
        gap={1}
        minHeight={"100vh"}
        flexDirection={(matchesMd && `row`) || (matchesXs && "column-reverse")}
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
        {!matchesMd && <SkeleBar />}
        <Box
          flex={1}
          display={"flex"}
          flexDirection={"column"}
          alignItems={(matchesMd && `flex-end`) || (matchesXs && "center")}
          justifyContent={"center"}
          width={"100%"}
          gap={1}
        >
          {listOfServicesComp()}
        </Box>
      </Box>

      <SkeleBar />

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={6}
        minHeight={"75vh"}
      >
        <Typography
          variant="h4"
          component={"h2"}
          color="info.dark"
          textAlign={"center"}
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
        >
          {listOfDevelopmentServices.map((dev, i) => (
            <Box
              flex={1}
              key={i}
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
              <Typography variant="h6" component={"h3"} textAlign={"center"}>
                {dev.title}
              </Typography>
            </Box>
          ))}
        </Box>
        {getStartedBtn("Ask about our services")}
      </Box>

      <SkeleBar />

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
        >
          Testimonials
        </Typography>
        <TestimonialsComp
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={1}
        />
        <Box display={"flex"} justifyContent={"center"}>
          {getStartedBtn("Contact Us Now!")}
        </Box>
      </Box>
    </div>
  );
}
