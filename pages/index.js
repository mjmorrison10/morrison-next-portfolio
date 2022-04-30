import { Box, useMediaQuery } from "@mui/material";
import Head from "next/head";
import Skelebar from "../components/SkeleBar";
import styles from "../styles/Home.module.css";
import React, { useCallback, useRef, useState } from "react";
import InView, { useInView } from "react-intersection-observer";
import Services from "../components/landingPage/services";
import OurWork from "../components/landingPage/ourWork";
import Heading from "../components/landingPage/heading";

export default function Home() {
  // const listOfDevelopmentServices = [
  //   {
  //     src: "/Images/huddleLandingPage.png",
  //     alt: "Huddle Landing Page",
  //     height: "auto",
  //     width: matchesMd ? 300 : "50%",
  //     title: "Website App Development",
  //   },
  //   {
  //     src: "/Images/copyLandingPage.png",
  //     alt: "Huddle Landing Page",
  //     height: 250,
  //     width: "auto",
  //     title: "Responsive App Development",
  //   },
  //   {
  //     src: "/Images/websiteOnMobileAndDesktopWithBackgroundRemoved.png",
  //     alt: "Huddle Landing Page",
  //     height: "auto",
  //     width: matchesMd ? 300 : "50%",
  //     title: "Web App Development",
  //   },
  // ];

  const content = {
    head: {
      title: `Michael Morrison's Portfolio`,
      meta: {
        name: `Michael is a web developer, educator, and sales funnel expert. He enjoys improving the world around him by developing websites for small businesses and helping individuals become developers. Michael's passion lies in mentoring beginner developers on how to build their first landing page. He is proficient in HTML, CSS, and JavaScript. He is currently learning React, MongoDB, Express, and Node. Michael is also interested in copywriting to improve his website's conversion rate.`,
        content: `Welcome to my portfolio website! I'm a self-taught front-end web developer from Southern California, USA. My website will showcase my skills, what I do for fun, and who I am, and why you should utilize my services!`,
      },
      gsc: {
        name: `google-site-verification`,
        content: `31rvHCdQdbozwIYBR33907PYcg0NeZXwek44wcOxDow`,
      }
    }
  }

  const containerStyles = {
    component: "main",
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // placeItems: 'center',
    alignItems: 'center',
    // justifyContent: 'center',
  };

  return (
    <Box sx={containerStyles} component={containerStyles.component}>
      <Head>
        <title>{content.head.title}</title>

        <meta
          name={content.head.meta.name}
          content={content.head.meta.name}
        />

        <meta
          name={content.head.gsc.name}
          content={content.head.gsc.content}
        />

        <link rel="icon" href="/Images/morrisonDevOpsLogo.png" />
      </Head>

      <Heading />

      <Skelebar />

      <Services />

      <OurWork />

      {/* <PricingComp /> */}

      {/* <Testimonials /> */}
    </Box>
  );
}
