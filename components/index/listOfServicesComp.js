import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grow,
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

  return (
    <InView threshold={0.25} triggerOnce={true}>
      {({ inView, ref, entry }) =>
        listOfServicesData.map((data, i) => (
          <Grow
            ref={ref}
            in={inView}
            key={i}
            style={{ transformOrigin: "0 0 0" }}
            {...(inView ? { timeout: 1000 * i } : {})}
          >
            <Accordion
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                border: `1px solid ${blue[900]}`,
                boxShadow: 1,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore color={"info"} />}
                aria-controls={`panel${i}a-content`}
                id={`panel${i}a-header`}
              >
                <Box
                  display={"flex"}
                  gap={1}
                  alignItems={"center"}
                  width={"100%"}
                >
                  <Box color={"info.dark"}>{data.icon}</Box>
                  <Typography
                    variant="accent"
                    component={"h3"}
                    color={"info.main"}
                    textAlign={"center"}
                    alignSelf={"center"}
                    width={"100%"}
                    sx={{ fontSize: 30 }}
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
                <Typography>{data.description}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grow>
        ))
      }
    </InView>
  );
}

export default ListOfServicesComp;
