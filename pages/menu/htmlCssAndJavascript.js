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
import PageComingSoon from "../../components/pageComingSoon";
import Skelebar from "../../components/SkeleBar";
import {
  ProjectAllCategories,
  projectsFilter,
  projectsFilterByCategories,
  projectsFilterByLanguages,
  ProjectsWorkedOn,
  projectsWorkedOnHtmlCssJavaScript,
  projectsWorkedOnReact,
} from "../../public/Settings/baseSettings";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import Carousel from "react-material-ui-carousel";
import CarouselOfProjects from "../../components/carouselOfProjects";
import ImageListOfProjects from "../../components/imageListOfProjects";

function HtmlCssAndJavascript() {
  const projectsWorkedOnNew = ProjectsWorkedOn.filter((project) =>
    project.name.includes("Fylo dark theme")
  );

  const [value, setValue] = React.useState(ProjectAllCategories[0]);
  const [inputValue, setInputValue] = React.useState("");

  const [searchByLanguages, setSearchByLanguages] = React.useState("html");
  const [searchByCategory, setSearchByCategory] = React.useState("");

  console.log(searchByCategory);
  // const handleModal = (e) => (
  //   setOpen(!open ? true : false),
  //   // open ? setOpen(false) : setOpen(true),
  //   console.log(open, e)
  // );

  // console.log(ProjectsWorkedOn.filter(el => el.name = 'Old School RuneScape'))
  // console.log(ProjectsWorkedOn[0].image)

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
      >
        Check out all my projects below!
      </Typography>

      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          setSearchByCategory(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={ProjectAllCategories}
        sx={{ width: 300, margin: "0 auto", my: 1 }}
        renderInput={(params) => <TextField {...params} label="Category" />}
      />

      {/* <Autocomplete 
         disablePortal
         id="combo-box-demo"
         options={ProjectAllCategories}
         sx={{ width: 300 }}
         renderInput={(params) => <TextField {...params} label="Category" />}
      /> */}

      <ImageListOfProjects
        projects={projectsFilterByCategories(searchByCategory)}
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

      <PageComingSoon label="Work in progress" />
    </Box>
  );
}

export default HtmlCssAndJavascript;

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
