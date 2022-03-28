import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { projectsWorkedOnNew } from "../public/Settings/baseSettings";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

function CarouselOfProjects() {
  return (
    <Carousel>
      {projectsWorkedOnNew.map((project, i) => (
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
      // sx={{
      //   backgroundImage: `url(${props.project.image})`,
      // }}
      border={"2px solid black"}
    >
      <Box zIndex={100} display={"flex"} flexDirection={"column"}>
        <Typography variant="h3" component={"h2"} color={"info.dark"}>
          {props.project.name}
        </Typography>
        <Typography variant="caption">
          {props.project.lastPublishedDate}
        </Typography>
        <Typography variant="body2">{props.project.description}</Typography>
        <Button color={"info"} href={props.project.website}>
          Visit Website
        </Button>
        {props.project.frontEndMentorWebsite && (
          <Button
            color={"secondary"}
            href={props.project.frontEndMentorWebsite}
          >
            Visit Frontend Mentor
          </Button>
        )}
      </Box>

      <Box position={"absolute"} zIndex={-1} top={0} left={"25%"} right={"25%"}>
        <LazyLoadImage
          src={props.project.image}
          alt={props.project.name}
          height="100%"
          width="100%"
        />
      </Box>
    </Box>
  );
}
