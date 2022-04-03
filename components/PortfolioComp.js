import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PageComingSoon from "./pageComingSoon";
import { portfolioWritings } from "../public/Settings/WriteSettings";
import { LazyLoadImage } from "react-lazy-load-image-component";

function PortfolioComp({ portfolio }) {
  const base = portfolio;

  // console.log(base.firstDate.getDate());
  const options = { month: "long" };

  const firstDateMonth = new Intl.DateTimeFormat("en-US", options).format(
    base.firstDate
  );
  const firstDateDay = base.firstDate.getDate();
  const firstDateYear = base.firstDate.getFullYear();
  const firstDateTotal = `${firstDateMonth}, ${firstDateDay} ${firstDateYear}`;

  const lastDateMonth = new Intl.DateTimeFormat("en-US", options).format(
    base.lastDate
  );
  const lastDateDay = base.lastDate.getDate();
  const lastDateYear = base.lastDate.getFullYear();

  const lastDateTotal = `${lastDateMonth}, ${lastDateDay} ${lastDateYear}`;

  return (
    <Box
      px={2}
      gap={1}
      minHeight={"100vh"}
      display={"flex"}
      sx={{
        mt: { xs: 7, md: 10 },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box flex={1} display={"flex"} flexDirection={"column"} gap={1}>
        <PageComingSoon />
        <Typography variant={"h1"} color={"info.dark"}>
          {base.header}
        </Typography>
        <Typography variant={"caption"}>
          {`Upload Date: ${firstDateTotal} - Modified Date: ${lastDateTotal}`}
        </Typography>
        <Typography variant={"body1"} maxWidth={"65ch"}>
          {base.desc1}
        </Typography>
        <Button variant={"outlined"} color={"info"} href={base.link}>
          Check out my {base.header}
        </Button>
      </Box>
      <Box flex={1}>
        <LazyLoadImage
          src={base.img1}
          alt={""}
          height={"100%"}
          width={"100%"}
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}

export default PortfolioComp;
