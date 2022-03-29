import { InfoOutlined } from "@mui/icons-material";
import {
  Box,
  Grow,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import * as React from "react";
import {
  ProjectsWorkedOn,
  projectsWorkedOnNew,
} from "../public/Settings/baseSettings";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

let project, projectName;

export default function ImageListOfProjects({ projects }) {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  const [open, setOpen] = React.useState(false);
  const [clickedProject, setClickedProject] = React.useState(null);
  const [checked, setChecked] = React.useState(false);

  //   const [testClickedProject, setTestClickedProject] = React.useState(null);
  React.useEffect(() => {
    setChecked(true);
  }, []);

  const handleOpen = (e) => {
    const clickedProject = e.target
      .closest(".MuiSvgIcon-root")
      .getAttribute("dataid");
    project = ProjectsWorkedOn[clickedProject].image;
    projectName = ProjectsWorkedOn[clickedProject].name;

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box paddingX={{ xs: 1, md: 0 }}>
      {/* <Image layout="fill" src="/../Images/Projects/OldSchoolRuneScape.png" /> */}

      <ImageList
        variant="masonry"
        cols={matchesLg ? 3 : 2}
        gap={8}
        sx={{
          display: { xs: "flex", sm: "inherit" },
          flexDirection: { xs: "column", sm: "inherit" },
        }}
      >
        {projects.map((item, i) => (
          <Grow
            key={i}
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 250 * i } : {})}
          >
            <ImageListItem
              sx={{ border: "1px solid black", p: 1, margin: "0 auto" }}
            >
              <LazyLoadImage
                // srcSet={`/${item.image}`}
                // src={`/${item.image}?w=248&fit=crop&auto=format`}
                // srcSet={`/${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={item.image}
                alt={item.name}
                width={"100%"}
                height={"100%"}
                // layout="fill"
                // loading="lazy"
              />
              <ImageListItemBar
                position="below"
                title={item.name}
                actionIcon={
                  <InfoOutlined
                    dataid={i}
                    onClick={handleOpen}
                    sx={{ cursor: "pointer" }}
                  />
                }
                subtitle={item.lastPublishedDate}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </ImageListItem>
          </Grow>
        ))}
      </ImageList>

      <Modal open={open} onClick={handleClose}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
          sx={{ cursor: "pointer" }}
        >
          <LazyLoadImage
            src={project}
            //   layout="fill"
            // height={"100%"}
            // width={"100%"}
            //   src={`${project}`}
            //   srcSet={`/${project}`}
            alt={projectName}
            //   loading="lazy"
            //   layout="fill"
            //   sx={{
            //     height: "100%",
            //     width: "100%",
            //     objectFit: "contain",
            //   }}
          />
        </Box>
      </Modal>

      {/* <Modal
        open={open}
        onClick={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          height: "100vh",
          width: "100vw",
        }}
      >
        <LazyLoadImage
          src={project}
          //   layout="fill"
          height={"100%"}
          width={"100%"}
          //   src={`${project}`}
          //   srcSet={`/${project}`}
          alt={projectName}
          //   loading="lazy"
          //   layout="fill"
          //   sx={{
          //     height: "100%",
          //     width: "100%",
          //     objectFit: "contain",
          //   }}
        />
      </Modal> */}
    </Box>
  );
}
