import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { Writings } from "../public/Settings/WriteSettings";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import { blue } from "@mui/material/colors";
import { getStartedBtn } from "../public/Settings/baseSettings";
import Hyphenated from "react-hyphen";

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
      <Hyphenated>
        <Typography
          variant={"h1"}
          component="h1"
          color={"info.dark"}
          textAlign={"center"}
          gutterBottom
          sx={{
            mt: { xs: 5, md: 10 },
          }}
        >
          {pageData.header}
        </Typography>

        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          maxWidth={"85ch"}
          margin={"0 auto"}
        >
          {pageData.sub}
        </Box>
      </Hyphenated>

      <Box
        display={"flex"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box flex={1} height={"100%"}>
          <Typography variant={"body2"} gutterBottom>
            {pageData.subheader}
          </Typography>
          <Typography variant={"h4"} color={"info.dark"} component={"div"}>
            {pageData.feature}
          </Typography>

          <Typography
            variant={"h2"}
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

          {pageData.h2bodya && (
            <Typography variant={"body1"} gutterBottom>
              {pageData.h2bodya}
            </Typography>
          )}

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
              <Box
                display={"flex"}
                alignItems={"center"}
                mt={10}
                mb={5}
                justifyContent={"center"}
              >
                {getStartedBtn("Request a Free Quote Today")}
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
            variant={"h2"}
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
            variant={"h2"}
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
            sx={{
              top: { xs: "1%" },
              right: { xs: "1%" },
              border: `5px outset ${blue[900]}`,
            }}
            zIndex={3}
            height={matchesMd ? 350 : 250}
            maxWidth={matchesMd ? 450 : 350}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"45% 15%"}
            boxShadow={3}
          >
            <LazyLoadImage
              src={pageData.img1}
              alt={""}
              height={"100%"}
              width={"100%"}
              style={{
                objectFit: "cover",
                borderRadius: "45% 15%",
              }}
            />
          </Box>

          <Box
            position={"absolute"}
            sx={{
              left: { xs: "1%" },
              top: { xs: "50%" },
              transform: "translateY(-50%)",
              border: `5px outset ${blue[800]}`,
            }}
            height={matchesMd ? 350 : 250}
            maxWidth={matchesMd ? 450 : 350}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"15% 45%"}
            boxShadow={3}
          >
            <LazyLoadImage
              src={pageData.img2}
              alt={""}
              height={"100%"}
              width={"100%"}
              style={{
                objectFit: "cover",
                borderRadius: "15% 45%",
              }}
            />
          </Box>

          <Box
            position={"absolute"}
            sx={{
              bottom: { xs: "1%" },
              right: { xs: "1%" },
              border: `5px outset ${blue[900]}`,
            }}
            height={matchesMd ? 350 : 250}
            maxWidth={matchesMd ? 450 : 350}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"45% 15%"}
            boxShadow={3}
          >
            <LazyLoadImage
              src={pageData.img3}
              alt={""}
              height={"100%"}
              width={"100%"}
              style={{
                objectFit: "cover",
                borderRadius: "45% 15%",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ServicesComp;
