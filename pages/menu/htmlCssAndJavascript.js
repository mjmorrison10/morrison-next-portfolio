import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PageComingSoon from "../../components/pageComingSoon";
import Skelebar from "../../components/SkeleBar";
import { ProjectsWorkedOn } from "../../public/Settings/baseSettings";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";


function HtmlCssAndJavascript() {
  return (
    <Box minHeight={"100vh"}>
      <Typography
        variant="h2"
        component={"h1"}
        color={"info.main"}
        textAlign={"center"}
      >
        HTML, CSS, and JavaScript projects
      </Typography>
      {ProjectsWorkedOn.map((project, i) => (
        <Box key={i} display={"flex"}>
          <Box flex={1.5}>
            <Typography variant="h3" component={"h2"} color={"info.dark"}>
              {project.name}
            </Typography>
            <Typography variant="caption">
              {project.lastPublishedDate}
            </Typography>
            <Typography variant="body2">{project.description}</Typography>
            <Button color={"info"} href={project.website}>
              Visit Website
            </Button>
            {project.frontEndMentorWebsite && (
              <Button color={"secondary"} href={project.frontEndMentorWebsite}>
                Visit Frontend Mentor
              </Button>
            )}
          </Box>
          <Box flex={1}>
          <LazyLoadImage
                src={project.image}
                alt={project.name}
                height="100%"
                width="100%"
              />

          </Box>
        </Box>
      ))}

      <PageComingSoon label="Work in progress" />
    </Box>
  );
}

export default HtmlCssAndJavascript;
