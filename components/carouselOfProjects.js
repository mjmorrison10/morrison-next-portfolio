import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { ProjectsWorkedOn } from "../public/Settings/baseSettings";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const paperStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "fit-content",
  alignSelf: "center",
  p: 1,
};

function CarouselOfProjects() {
  return (
    <Carousel>
      {ProjectsWorkedOn.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </Carousel>
  );
}

export default CarouselOfProjects;

function Project(props) {
  const image = props.project.name;

  console.log(image);
  return (
    <Box
      minHeight={"100vh"}
      position={"relative"}
      sx={{
        backgroundImage: `url(${props.project.image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      border={"2px solid black"}
    >
      <Box
        zIndex={100}
        minHeight={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        p={1}
      >
        <Paper sx={paperStyle}>
          <Typography
            variant="h3"
            component={"h2"}
            color={"info.dark"}
            textAlign={"center"}
          >
            {props.project.name}
          </Typography>
          <Typography variant="caption" textAlign={"center"}>
            {props.project.lastPublishedDate}
          </Typography>
        </Paper>

        {/* <Paper sx={{ width: "fit-content" }}>
          <Typography variant="body2" maxWidth={"25ch"}>
            {props.project.description}
          </Typography>
        </Paper> */}

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"flex-end"}
        >
          <Button
            color={"info"}
            href={props.project.website}
            variant={"contained"}
          >
            Visit Website
          </Button>
          <Paper sx={{ width: "fit-content", p: 1 }}>
            <Typography variant="body2" maxWidth={"25ch"}>
              {props.project.description}
            </Typography>
          </Paper>

          {props.project.frontEndMentorWebsite && (
            <Button
              color={"secondary"}
              href={props.project.frontEndMentorWebsite}
              variant={"contained"}
            >
              Visit Frontend Mentor
            </Button>
          )}
        </Box>
      </Box>

      {/* <Box position={"absolute"} zIndex={-1} top={0} left={"25%"} >
        <LazyLoadImage
          src={props.project.image}
          alt={props.project.name}
          height="100%"
          width="100%"
        />
      </Box> */}
    </Box>
  );
}
