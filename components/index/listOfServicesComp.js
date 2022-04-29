import { ExpandMore, Scale } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grow,
  Tooltip,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import InView, { useInView } from "react-intersection-observer";
import {
  listOfServicesData,
  randomColorWithAccent,
} from "../../public/Settings/baseSettings";
import Skelebar from "../SkeleBar";

function ListOfServicesComp() {
  listOfServicesData.map((e) => {
    e.isHover = false;
  });

  const [arr, setArr] = React.useState(() => listOfServicesData);

  console.log(arr);

  const [hoverState, setHoverState] = React.useState(
    listOfServicesData.length + 10
  );

  const styles = {
    grow: { transformOrigin: "0 0 0" },
    tooltip: {
      // height: "1px",
      // width: "1px",
    },
    accordion(i) {
      if (i === "icon")
        return {
          color: "customPrimary.main",
          bgcolor: "customPrimaryReversed.light",
          borderRadius: "50%",
          ml: 1,
          transition: "all 250ms ease",
          "&:hover": {
            // bgcolor: "customPrimary.dark",
            // border: `2px solid`,
            bgcolor: "customPrimary.dark",
            color: "customPrimaryReversed.light",
          },
        };

      return {
        // backgroundColor: hoverState != i ? "transparent" : "info.dark",
        bgcolor: "transparent",
        boxShadow: "none",
        border: `2px solid`,
        // border: hoverState != i ? "2px solid" : "2px solid",
        // borderColor: hoverState != i ? blue[900] : blue[50],
        // borderColor: fontColorWhileHover,
        boxShadow: 1,
        maxWidth: { xs: "90%", md: 200, lg: 300 },
        minHeight: 150,
        // color: hoverState != i ? "info.main" : "infoRev.light",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        overflow: "hidden",

        color: "customPrimary.main",
        "&:hover": {
          bgcolor: "customPrimary.dark",
          border: `2px solid`,
          color: "customPrimaryReversed.light",
        },
      };
    },
    icon: {
      // color: "customPrimary.dark",
      // "&:hover": {
      //   color: "customPrimaryReversed.light",
      // },
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
    },
    skelebar: {
      clr: "customPrimaryReversed.main",
      h: 2,
      w: "95%",
      my: 0,
      animate: "wave",
    },
    description: {
      variant: "body2",
      // color: "text.primary",
      // "&:hover": {
      //   color: "customPrimaryReversed.light",
      // },
    },
  };

  return listOfServicesData.map((data, i) => (
    <Grow
      // ref={ref}
      // in={inView}
      in={true}
      key={i}
      id={i}
      style={styles.grow}
      // {...(inView ? { timeout: 1000 * i } : {})}
    >
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
        <Accordion id={i} sx={styles.accordion(i)}>
          <AccordionSummary
            expandIcon={<ExpandMore sx={styles.accordion("icon")} />}
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
            clr={styles.skelebar.clr}
            h={styles.skelebar.h}
            w={styles.skelebar.w}
            my={styles.skelebar.my}
            animate={styles.skelebar.animate}
          />

          <AccordionDetails>
            <Typography
              variant={styles.description.variant}
              sx={styles.description}
            >
              {data.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Tooltip>
    </Grow>
  ));
}

// // <InView threshold={0.25} triggerOnce={true}>
//   {/* {({ inView, ref, entry }) => */}
//   // }
// {/* </InView> */}
export default ListOfServicesComp;
