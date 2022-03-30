import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Writings } from "../public/Settings/WriteSettings";
import PageComingSoon from "./pageComingSoon";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

function ServicesComp({ page }) {
  const [pageData, setPageData] = React.useState(Writings[page]);

  console.log(pageData);

  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  return (
    <Box minHeight={"100vh"} display={"flex"} flexDirection={"column"} px={1}>
      <Typography
        variant={
          (matchesMd && `h1`) || (matchesSm && "h2") || (matchesXs && "h3")
        }
        component="h1"
        color={"info.dark"}
        textAlign={"center"}
        gutterBottom
      >
        {pageData.header}
      </Typography>

      <Box
        display={"flex"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box flex={1} height={"100%"}>
          <PageComingSoon />
          <Typography variant={"body2"} gutterBottom>
            {pageData.subheader}
          </Typography>
          <Typography variant={"h4"} color={"info.dark"} component={"div"}>
            {pageData.feature}
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
            {pageData.h2}
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            {pageData.h2body}
          </Typography>

          {pageData.listHeader1 && (
            <Box>
              <Typography variant={"h4"} color={"info.dark"} component={"div"}>
                {pageData.listHeader1}
              </Typography>
              <Box component={"ul"}>
                <Typography variant={"body1"} gutterBottom component={"li"}>
                  {pageData.list1a}
                </Typography>
                <Typography variant={"body1"} gutterBottom component={"li"}>
                  {pageData.list1b}
                </Typography>
                <Typography variant={"body1"} gutterBottom component={"li"}>
                  {pageData.list1c}
                </Typography>
                {pageData.list1d && (
                  <Typography variant={"body1"} gutterBottom component={"li"}>
                    {pageData.list1d}
                  </Typography>
                )}

                {pageData.list1e && (
                  <Typography variant={"body1"} gutterBottom component={"li"}>
                    {pageData.list1e}
                  </Typography>
                )}
              </Box>
            </Box>
          )}

          {pageData.listHeader2 && (
            <Box>
              <Typography variant={"h4"} color={"info.dark"} component={"div"}>
                {pageData.listHeader2}
              </Typography>
              <Box component={"ul"}>
                <Typography variant={"body1"} gutterBottom component={"li"}>
                  {pageData.list2a}
                </Typography>
                <Typography variant={"body1"} gutterBottom component={"li"}>
                  {pageData.list2b}
                </Typography>
                <Typography variant={"body1"} gutterBottom component={"li"}>
                  {pageData.list2c}
                </Typography>
              </Box>
            </Box>
          )}

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
            {pageData.h3}
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            {pageData.h3body}
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
            {pageData.h4}
          </Typography>

          <Typography variant={"body1"} gutterBottom>
            {pageData.h4body}
          </Typography>

          <Typography variant={"body1"} gutterBottom>
            {pageData.h5body}
          </Typography>

          <Typography variant={"body1"} gutterBottom>
            {pageData.h6body}
          </Typography>
        </Box>
        <Box flex={1} position={"relative"} minHeight={"100vh"}>
          <Box
            position={"absolute"}
            top={"5%"}
            right={"5%"}
            zIndex={3}
            height={350}
            maxWidth={450}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"50%"}
            backgroundColor={"blue"}
            boxShadow={3}
          >
            <LazyLoadImage
              src={pageData.img1}
              alt={""}
              height={"100%"}
              width={"100%"}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </Box>

          <Box
            position={"absolute"}
            left={"5%"}
            bottom={"35%"}
            height={350}
            maxWidth={450}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"50%"}
            backgroundColor={"blue"}
            boxShadow={3}
          >
            <LazyLoadImage
              src={pageData.img2}
              alt={""}
              height={"100%"}
              width={"100%"}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </Box>

          <Box
            position={"absolute"}
            bottom={"10%"}
            right={"5%"}
            height={350}
            maxWidth={450}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"50%"}
            backgroundColor={"blue"}
            boxShadow={3}
          >
            <LazyLoadImage
              src={pageData.img3}
              alt={""}
              height={"100%"}
              width={"100%"}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ServicesComp;
