import {
  Box,
  Button,
  Typography,
  Modal,
  Dialog,
  Autocomplete,
  TextField,
} from "@mui/material";
import React from "react";
import PageComingSoon from "../components/pageComingSoon";
import Skelebar from "../components/SkeleBar";
import {
  ProjectAllCategories,
  ProjectAllLanguages,
  ProjectAllName,
  projectsFilter,
  projectsFilterByCategories,
  projectsFilterByLanguages,
  projectsFilterByName,
  ProjectsWorkedOn,
  projectsWorkedOnHtmlCssJavaScript,
  projectsWorkedOnReact,
} from "../public/Settings/baseSettings";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import Carousel from "react-material-ui-carousel";
import CarouselOfProjects from "../components/carouselOfProjects";
import ImageListOfProjects from "../components/imageListOfProjects";

function Projects() {
  const [categoryValue, setCategoryValue] = React.useState(null);
  const [categoryInputValue, setCategoryInputValue] = React.useState(null);

  const [nameValue, setNameValue] = React.useState(null);
  const [nameInputValue, setNameInputValue] = React.useState(null);

  const [languagesValue, setLanguagesValue] = React.useState(null);
  const [languagesInputValue, setLanguagesInputValue] = React.useState(null);

  const [searchByName, setSearchByName] = React.useState(null);
  const [searchByLanguages, setSearchByLanguages] = React.useState(null);
  const [searchByCategory, setSearchByCategory] = React.useState(null);

  // console.log(searchByLanguages);
  // console.log(searchByCategory);
  // console.log(searchByName);
  // const handleModal = (e) => (
  //   setOpen(!open ? true : false),
  //   // open ? setOpen(false) : setOpen(true),
  //   console.log(open, e)
  // );

  // console.log(ProjectsWorkedOn.filter(el => el.name = 'Old School RuneScape'))
  // console.log(ProjectsWorkedOn[0].image)

  const resetCategoryValues = () => {
    setCategoryValue(null);
    setCategoryInputValue(null);
    setSearchByCategory(null);
  };
  const resetNameValues = () => {
    setNameValue(null);
    setNameInputValue(null);
    setSearchByName(null);
  };

  const resetLanguageValues = () => {
    setLanguagesValue(null);
    setLanguagesInputValue(null);
    setSearchByLanguages(null);
  };

  const resetValues = () => {
    resetLanguageValues;
    resetNameValues;
    resetCategoryValues;
  };

  return (
    <Box minHeight={"100vh"}>
      <Typography
        variant="h2"
        component={"h1"}
        color={"info.main"}
        textAlign={"center"}
        sx={{
          textTransform: "capitalize",
        }}
      >
        A showcase of all my projects
      </Typography>

      {/* <Carousel>
          {ProjectsWorkedOn.map((project, i)) => <Project key={i} project={project} />}
        </Carousel> */}

      <CarouselOfProjects />

      <Typography
        color={"info.dark"}
        textAlign={"center"}
        variant="h3"
        component={"h2"}
        gutterBottom
        mt={4}
        sx={{
          textTransform: "capitalize",
        }}
      >
        Check out all my projects below!
      </Typography>

      <Box display={"flex"} justifyContent={"space-around"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Autocomplete
            value={categoryValue}
            onChange={(event, newValue) => {
              setCategoryValue(newValue);
              setSearchByCategory(newValue);
            }}
            inputValue={categoryInputValue}
            onInputChange={(event, newInputValue) => {
              setCategoryInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={ProjectAllCategories}
            sx={{ width: 300, margin: "0 auto", my: 1 }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Typography variant={"caption"} gutterBottom textAlign={"center"}>
            Categories
          </Typography>
        </Box>

        <Box display={"flex"} flexDirection={"column"}>
          <Autocomplete
            value={languagesValue}
            onChange={(event, newValue) => {
              setLanguagesValue(newValue);
              setSearchByLanguages(newValue);
            }}
            inputValue={languagesInputValue}
            onInputChange={(event, newInputValue) => {
              setLanguagesInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={ProjectAllLanguages}
            sx={{ width: 300, margin: "0 auto", my: 1 }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Typography variant={"caption"} gutterBottom textAlign={"center"}>
            Languages
          </Typography>
        </Box>

        <Box display={"flex"} flexDirection={"column"}>
          <Autocomplete
            value={nameValue}
            onChange={(event, newValue) => {
              setNameValue(newValue);
              setSearchByName(newValue);
            }}
            inputValue={nameInputValue}
            onInputChange={(event, newInputValue) => {
              setNameInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={ProjectAllName}
            sx={{ width: 300, margin: "0 auto", my: 1 }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Typography variant={"caption"} gutterBottom textAlign={"center"}>
            Name
          </Typography>
        </Box>
      </Box>

      {/* <Autocomplete 
           disablePortal
           id="combo-box-demo"
           options={ProjectAllCategories}
           sx={{ width: 300 }}
           renderInput={(params) => <TextField {...params} label="Category" />}
        /> */}

      {searchByCategory && (
        <Typography
          variant="h4"
          textAlign={"center"}
          color={"info.dark"}
          component={"h3"}
          mt={4}
        >
          Searching by Category: {categoryValue}
        </Typography>
      )}

      <ImageListOfProjects
        projects={projectsFilterByCategories(searchByCategory)}
      />

      {searchByName && (
        <Typography
          variant="h4"
          textAlign={"center"}
          color={"info.dark"}
          component={"h3"}
          mt={4}

        >
          Searching by Name: {nameValue}
        </Typography>
      )}

      <ImageListOfProjects projects={projectsFilterByName(searchByName)} />

      {searchByLanguages && (
        <Typography
          variant="h4"
          textAlign={"center"}
          color={"info.dark"}
          component={"h3"}
          mt={4}
        
        >
          Searching by Languages: {languagesValue}
        </Typography>
      )}

      <ImageListOfProjects
        projects={projectsFilterByLanguages(searchByLanguages)}
      />

      {/* {ProjectsWorkedOn.map((project, i) => (
          <Box key={i} display={"flex"} mt={2}>
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
        ))} */}
    </Box>
  );
}

export default Projects;

// function Project(props) {
//   const image = props.project.name;

//   console.log(image);
//   return (
//     <Box
//       minHeight={"100vh"}
//       position={"relative"}
//       // sx={{
//       //   backgroundImage: `url(${props.project.image})`,
//       // }}
//       border={"2px solid black"}
//     >
//       <Box zIndex={100} display={'flex'} flexDirection={'column'} >
//         <Typography variant="h3" component={"h2"} color={"info.dark"}>
//           {props.project.name}
//         </Typography>
//         <Typography variant="caption">
//           {props.project.lastPublishedDate}
//         </Typography>
//         <Typography variant="body2">{props.project.description}</Typography>
//         <Button color={"info"} href={props.project.website}>
//           Visit Website
//         </Button>
//         {props.project.frontEndMentorWebsite && (
//           <Button
//             color={"secondary"}
//             href={props.project.frontEndMentorWebsite}
//           >
//             Visit Frontend Mentor
//           </Button>
//         )}
//       </Box>

//       <Box position={"absolute"} zIndex={-1} top={0} left={"25%"} right={"25%"}>
//         <LazyLoadImage
//           src={props.project.image}
//           alt={props.project.name}
//           height="100%"
//           width="100%"
//         />
//       </Box>
//     </Box>
//   );
// }
