import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import InView, { useInView } from "react-intersection-observer";
import { Fade, Slide } from "react-reveal";
import { listOfServicesData } from "../../public/Settings/baseSettings";
import Skelebar from "../SkeleBar";

function ListOfServicesComp() {
  listOfServicesData.map((e) => {
    e.isHover = false;
  });

  const [arr, setArr] = React.useState(() => listOfServicesData);

  // console.log(arr);

  const [hoverState, setHoverState] = React.useState(
    listOfServicesData.length + 10
  );

  const styles = {
    mainContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    grow: { transformOrigin: "0 0 0", direction: "left" },
    tooltip: {
      // height: "1px",
      // width: "1px",
    },
    accordion(sec, i) {
      if (sec === "icon")
        return {
          color:
            hoverState !== i
              ? "customPrimary.main"
              : "customPrimary.contrastText",
          // color: "customPrimary.main",
          borderRadius: "50%",
          // ml: 1,
          transition: "all 250ms ease",
          // "&:hover": {
          // bgcolor: "customPrimary.dark",
          // border: `2px solid`,
          // bgcolor: "customPrimary.dark",
          // },
        };

      return {
        // backgroundColor: hoverState != i ? "transparent" : "info.dark",
        bgcolor: hoverState !== i ? "transparent" : "customPrimary.dark",
        boxShadow: "none",
        border: `2px solid`,
        // border: hoverState != i ? "2px solid" : "2px solid",
        // borderColor: hoverState != i ? blue[900] : blue[50],
        // borderColor: fontColorWhileHover,
        boxShadow: 1,
        maxWidth: { xs: "100%", md: 250 },
        mx: {xs: 0, sm: 8, md: 0},
        minHeight: 150,
        // color: hoverState != i ? "info.main" : "infoRev.light",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        overflow: "hidden",

        color:
          hoverState === i
            ? "customPrimary.contrastText"
            : "customPrimary.main",

        // color: "customPrimary.main",
        // "&:hover": {
        //   bgcolor: "customPrimary.dark",
        //   border: `2px solid`,
        // },
      };
    },
    AccordionSummary: {
      minHeight: 100,
    },
    header: {
      display: "flex",
      gap: 1,
      alignItems: "center",
      width: "100%",
    },
    h3: {
      variant: "accent",
      component: "h3",
      // color: "info.main",
      textAlign: "center",
      alignSelf: "center",
      width: "100%",
      mr: 1,
    },
    skelebar: {
      clr(i) {
        return hoverState == i
          ? "customPrimary.contrastText"
          : "customPrimary.main";
      },
      h: 2,
      w: "95%",
      my: 0,
      animate: "wave",
    },
    description(i) {
      return {
        variant: "body2",
        color:
          hoverState === i
            ? "customPrimary.contrastText"
            : "customPrimary.main",
      };
    },
  };

  return listOfServicesData.map((data, i) => (
    <Slide right key={i}>
      <Tooltip
        title={data.heading}
        placement="top"
        arrow={true}
        onOpen={() => {
          setHoverState(i);
        }}
        onClose={() => {
          setHoverState(listOfServicesData.length + 10);
        }}
        sx={styles.tooltip}
      >
        <Accordion id={i} sx={styles.accordion("", i)}>
          <AccordionSummary
            expandIcon={<ExpandMore sx={styles.accordion("icon", i)} />}
            aria-controls={`panel${i}a-content`}
            // id={`panel${i}a-header`}
            sx={styles.accordionSummary}
          >
            <Box sx={styles.header}>
              <Box sx={styles.icon}>{data.icon}</Box>
              <Typography
                variant={styles.h3.variant}
                component={styles.h3.component}
                sx={styles.h3}
              >
                {data.heading}
              </Typography>
            </Box>
          </AccordionSummary>

          <Skelebar
            clr={styles.skelebar.clr(i)}
            h={styles.skelebar.h}
            w={styles.skelebar.w}
            my={styles.skelebar.my}
            animate={styles.skelebar.animate}
          />

          <AccordionDetails>
            <Typography
              variant={styles.description.variant}
              sx={styles.description(i)}
            >
              {data.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Tooltip>
    </Slide>
  ));
}

// // <InView threshold={0.25} triggerOnce={true}>
//   {/* {({ inView, ref, entry }) => */}
//   // }
// {/* </InView> */}
export default ListOfServicesComp;
