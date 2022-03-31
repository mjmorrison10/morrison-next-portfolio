import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import PageComingSoon from "../../components/pageComingSoon";
import ServicesComp from "../../components/ServicesComp";

function ApiAndBackend() {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  const apiAndBackendWriting = {
    header: `Build a powerful website`,
    subheader: `We have over eight years of experience in delivering quality-driven websites that are fully responsive and SEO friendly. We also pride ourselves on providing a fast turnaround time and competitive prices.`,
    feature: `Features section:`,
    h2: `Customized solutions for our clients`,
    h2body: `We understand that each business is unique, so we offer custom solutions to suit your needs. Our services range from backend web development to full-stack websites with interactive data points. You're guaranteed to find something perfect for you right here!`,
    h3: `The power to manipulate your data`,
    h3body: `Want to display statistical data and allow users to select their preferences? Our intuitive, data-driven websites can do just that. We provide front-end development and backend development services if you need both. Are you interested in using our services? We have several packages and a number of add-ons for your project; we offer full-service development or even just a consultation.`,
    h4: `A team of professional developers`,
    h4body: `We work hard, and we work fast, delivering high-quality work within a project's timeframe, so you always get the best value for your time and money. Contact us today for a free estimate, and let's discuss your project! We're able to get to work on your assignment right away.`,
  };

  return <ServicesComp page={"apiAndBackend"} />;
}

export default ApiAndBackend;
