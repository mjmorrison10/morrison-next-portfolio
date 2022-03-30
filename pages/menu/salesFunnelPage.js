import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import PageComingSoon from "../../components/pageComingSoon";

function SalesFunnelPage() {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  return (
    <Box minHeight={"100vh"} px={1}>
      <Typography
        variant={
          (matchesMd && `h1`) || (matchesSm && "h2") || (matchesXs && "h3")
        }
        component="h1"
        color={"info.dark"}
        textAlign={"center"}
        gutterBottom
      >
        We are the solution
      </Typography>
      <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box flex={1}>
          <Typography variant={"body2"} gutterBottom>
            MorrisonDevOps is an all-in-one web development company that
            provides best-in-class services for today's savvy business owners.
          </Typography>
          <Typography variant={"h4"} color={"info.dark"} component={"div"}>
            Features section:
          </Typography>
          <Typography
            variant={
              (matchesMd && `h2`) || (matchesSm && "h3") || (matchesXs && "h4")
            }
            component="h2"
            textAlign={"center"}
            maxWidth={"30ch"}
            color={"info.main"}
            gutterBottom
          >
            Our services
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            We have a team of web developers and designers who are trained with
            the latest techniques to help you increase your sales and conversion
            rates. We design, develop and deploy professional and high
            converting sales funnels that help you accomplish your business
            goals.
          </Typography>
          <Typography variant={"h4"} color={"info.dark"} component={"div"}>
            Website features:
          </Typography>
          <Typography
            variant={
              (matchesMd && `h2`) || (matchesSm && "h3") || (matchesXs && "h4")
            }
            component="h2"
            textAlign={"center"}
            maxWidth={"30ch"}
            color={"info.main"}
            gutterBottom
          >
            Your one stop shop for all things digital
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            At MorrisonDevOps, we offer our clients a wide array of web
            development and design services—from website design to content
            creation to marketing campaigns. We're your one stop shop for all
            things digital!
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            SEO website design service - Looking for a new website? Contact the
            MorrisonDevOps team about our SEO website design service that will
            help you improve your rankings in search engines!
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            MorrisonDevOps offers a full range of design services for small
            businesses and companies looking to create an online presence. We
            provide innovative, custom designed solutions that will help you get
            the results you need.
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            For more information about our services, please contact us!
          </Typography>
          <PageComingSoon />
        </Box>
        <Box flex={1}></Box>
      </Box>
    </Box>
  );
}

export default SalesFunnelPage;
