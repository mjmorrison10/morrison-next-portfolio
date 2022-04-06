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
  const { ref, inView, entry } = useInView({
    /* Optional options */
    // threshold: 0.25,
    // triggerOnce: true,
  });

  // const [hoverStatus, setHoverStatus] = React.useState(listOfServicesData.length + 10);

  // const handleHoverStatusEnter = (e) => {
  //   setHoverStatus(e.target.id)
  //   // setHoverStatus(!hoverStatus);
  // };

  // const handleHoverStatusLeave = (e) => {
  //   setHoverStatus(listOfServicesData.length + 10)
  //   // setHoverStatus(!hoverStatus);
  // };

  // const hoverBorderColor =
  const initialArr = [
    [1, 2, 3, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 3, 4, 5, 6, 7, 8, 9],
  ];

  listOfServicesData.map((e) => {
    e.isHover = false;
  });

  const [arr, setArr] = React.useState(() => listOfServicesData);

  console.log(arr);

  const [hoverState, setHoverState] = React.useState(listOfServicesData.length + 10)

  return (
    <InView threshold={0.25} triggerOnce={true}>
      {({ inView, ref, entry }) =>
        listOfServicesData.map((data, i) => (
          <Grow
            ref={ref}
            in={inView}
            key={i}
            id={i}
            style={{ transformOrigin: "0 0 0" }}
            {...(inView ? { timeout: 1000 * i } : {})}
          >
            <Tooltip
              title={data.heading}
              placement="top"
              arrow={true}
              onOpen={() => {
                setHoverState(i)
                // console.log(data.isHover);
                console.log("open",listOfServicesData)
              }}
              onClose={() => {
                // data.isHover = false
                setHoverState(listOfServicesData.length + 10)
                console.log("close",listOfServicesData)
                // console.log(data.isHover);
              }}
              sx={{
                height: "1px",
                width: "1px",
              }}
            >
              <Accordion
                // onMouseEnter={handleHoverStatusEnter}
                // onMouseLeave={handleHoverStatusLeave}
                id={i}
                sx={{
                  transition: '2500ms all ease',
                  backgroundColor: hoverState != i ? "transparent" : 'info.dark',
                  boxShadow: "none",
                  // border: `1px solid`,
                  border: hoverState != i ? "1px solid" : '2px solid',
                  borderColor: hoverState != i ? blue[900] : blue[50],
                  // borderColor: fontColorWhileHover,
                  boxShadow: 1,
                  maxWidth: 200,
                  minHeight: 200,
                  color: hoverState != i ? "info.main" : 'infoRev.light',
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore color={hoverState != i ? "info" : 'infoRev'} />}
                  aria-controls={`panel${i}a-content`}
                  // id={`panel${i}a-header`}
                >
                  <Box
                    display={"flex"}
                    gap={1}
                    alignItems={"center"}
                    width={"100%"}
                  >
                    <Box color={hoverState != i ? "info.dark" : "infoRev.dark"}>{data.icon}</Box>
                    <Typography
                      variant="accent"
                      component={"h3"}
                      // color={"info.main"}
                      textAlign={"center"}
                      alignSelf={"center"}
                      width={"100%"}
                    >
                      {data.heading}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <Skelebar
                  clr={randomColorWithAccent}
                  h={2}
                  w={"95%"}
                  my={0}
                  animate={"wave"}
                />
                <AccordionDetails>
                  <Typography variant={"body2"} color={hoverState != i ? "text.primary" : "infoRev.light"}>
                    {data.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Tooltip>
          </Grow>
        ))
      }
    </InView>
  );
}

export default ListOfServicesComp;
