import { Close, InfoOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  ClickAwayListener,
  Grow,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
  Paper,
  Typography,
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

let project,
  projectName,
  projectWebsite,
  projectDescription,
  projectLanguages,
  projectDate,
  projectFrontEndMentorWebsite;

export default function ImageListOfProjects({ projects }) {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  const [open, setOpen] = React.useState(false);
  const [clickedProject, setClickedProject] = React.useState(null);
  const [checked, setChecked] = React.useState(false);

  const [modalDesc, setModalDesc] = React.useState(false);
  const handleModalDesc = () => {
    modalDesc ? setModalDesc(false) : setModalDesc(true);
  };

  //   const [testClickedProject, setTestClickedProject] = React.useState(null);
  React.useEffect(() => {
    setChecked(true);
  }, []);

  const handleOpen = (e) => {
    const clickedProject = e.target
      .closest(".MuiSvgIcon-root")
      .getAttribute("dataid");

    // console.log(projects[clickedProject])

    project = projects[clickedProject].image;
    projectName = projects[clickedProject].name;
    projectDate = projects[clickedProject].lastPublishedDate;
    projectDescription = projects[clickedProject].description;
    projectLanguages = projects[clickedProject].languages;
    projectWebsite = projects[clickedProject].website;
    projectFrontEndMentorWebsite =
      projects[clickedProject].frontEndMentorWebsite;

    setOpen(true);
    setModalDesc(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (projects === null) return <div></div>;

  projects.sort((a, b) => (a.name > b.name ? 1 : -1));

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
              sx={{
                border: "1px solid black",
                p: 1,
                margin: "0 auto",
                width: "100%",
              }}
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

      <Modal open={open}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
          position={"relative"}
        >
          {modalDesc && (
            <Paper
              sx={{
                position: "absolute",
                top: 0,
                mt: 1,
                p: 0.5,
                maxWidth: "65ch",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                zIndex: 10,
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
              >
                <Button
                  color={"info"}
                  href={projectWebsite}
                  variant={"contained"}
                  sx={{
                    textAlign: "center",
                    height: "fit-content",
                    flex: 1,
                  }}
                >
                  Visit Website
                </Button>

                <Typography
                  variant={"h6"}
                  component={"div"}
                  textAlign={"center"}
                  color={"info.dark"}
                  flex={4}
                >
                  {projectName}
                </Typography>

                {projectFrontEndMentorWebsite ? (
                  <Button
                    color={"secondary"}
                    href={projectFrontEndMentorWebsite}
                    variant={"contained"}
                    sx={{
                      textAlign: "center",
                      height: "fit-content",
                      flex: 1,
                    }}
                  >
                    Visit Frontend Mentor
                  </Button>
                ) : (
                  <Box flex={1}></Box>
                )}
              </Box>

              <Typography
                variant={"body2"}
                component={"div"}
                textAlign={"center"}
                color={"text.primary"}
              >
                {projectDescription}
              </Typography>

              <Button
                onClick={handleModalDesc}
                color={"success"}
                startIcon={<Close />}
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              />
              {/* </Box> */}
            </Paper>
          )}
          <Box onClick={handleClose} sx={{ cursor: "pointer" }}>
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
              sx={{
                // height: "100%",
                // width: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
