import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  MuiAccents,
  paletteColors,
  randomColorWithAccent,
  randomItemFromAnArray,
  testimonialsList,
} from "../public/Settings/baseSettings";
import {
  Avatar,
  Pagination,
  Paper,
  Rating,
  useMediaQuery,
} from "@mui/material";
import SkeleBar from "./SkeleBar";

// function TabPanel(props) {
//   const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
//   const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
//   const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
//   const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
//   const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

//   const { children, value, index, ...other } = props;

//   return (
//     <Box
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box
//           sx={{
//             p: 3,
//             overflowY: "scroll",
//             height: "100%",
//           }}
//           maxWidth={"65ch"}
//         >
//           {/* <Typography> */}
//           {children}
//           {/* </Typography> */}
//         </Box>
//       )}
//     </Box>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function TestimonialsComp(props) {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  const [displayText, setDisplayText] = React.useState(false);
  const [specificCardToDisplay, setSpecificCardToDisplay] =
    React.useState(true);

  const [page, setPage] = React.useState(1);
  const handlePaginationChange = (event, value) => {
    setPage(value);
  };
  const slidesPerPage = 3;
  const [displayPage, setDisplayPage] = React.useState([]);

  // const handleChange = (card) => (panel) => {
  const handleChange = (card) => () => {
    // setDisplayText(displayText ? true : false)
    setDisplayText(!displayText);
    setSpecificCardToDisplay(card);
    console.log(
      "card -->",
      card,
      "Specific Card -->",
      specificCardToDisplay === card,
      "displayText -->",
      displayText,
      "matchesMd ->",
      matchesMd
    );

    // setDisplayText(displayText ? panel : false);
  };

  function filterTestimonials(list, i) {
    console.log(page);
    if (page === 1)
      return (
        i === page * page - 1 || i === page * page || i === page * page + 1
      );
    if (page > 1)
      return i === page * 3 - 3 || i === page * 3 - 2 || i === page * 3 - 1;

    // if (page === 1)
    // return i === 0 || i === 1 || i === 2;
    // return i === page - 1 || i === page || i === page + 1;
    // if (page > 1)
    // return i === page * 2 - 1 || i === page * 2 || i === page * 2 + 1;
    // if (page === 3)
    // return i === page * 2  || i === page * 2 + 1 || i === page * 2 + 2;
    // if (page > 3)
    // return i === page * 2 + 1  || i === page * 2 + 2 || i === page * 2 + 3;
  }

  const test = testimonialsList.filter(filterTestimonials);
  // const test = testimonialsList.filter((list, i) => i === 0 || i === 1 );

  // console.log(test);

  return (
    <Box {...props}>
      <Pagination
        count={Math.ceil(testimonialsList.length / slidesPerPage)}
        page={page}
        onChange={handlePaginationChange}
      />
      {test.map((list, i) => (
        <Paper
          // onClick={() => {
          //   console.log(i);
          //   setDisplayText(!displayText);
          // }}
          onClick={handleChange(i)}
          key={i}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 1,
            gap: 1,
            width: `${!matchesSm ? "82.5vw" : null}`,
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            gap={1}
            alignItems={"center"}
          >
            <Avatar {...stringAvatar(`${list.name}`)} />
            <Typography>{list.name}</Typography>
          </Box>
          <SkeleBar h={2} w={"100%"} my={0} clr={randomColorWithAccent} />
          <Typography
            variant={"body"}
            noWrap={
              matchesMd || (!displayText && specificCardToDisplay === i)
                ? false
                : true
            }
            maxWidth={"65ch"}
          >
            {list.testimonial}
          </Typography>
          <Rating
            defaultValue={list.starRating}
            precision={0.5}
            readOnly
            sx={{
              alignSelf: "flex-end",
            }}
          />
        </Paper>
      ))}
    </Box>
    // <Box
    //   sx={{
    //     flexGrow: 1,
    //     bgcolor: "background.paper",
    //     display: "flex",
    //     height: 224,
    //     maxWidth: "fit-content",
    //   }}
    // >
    //   <Tabs
    //     orientation={"vertical"}
    //     variant="scrollable"
    //     value={value}
    //     onChange={handleChange}
    //     aria-label="Vertical tabs example"
    //     sx={{ borderRight: 1, borderColor: "divider", maxWidth: "fit-content" }}
    //   >
    //     {testimonialsList.map((list, i) => (
    //       <Tab label={list.name} {...a11yProps(i)} key={i} />
    //     ))}
    //   </Tabs>

    //   {testimonialsList.map((list, i) => (
    //     <TabPanel variant="scrollable" value={value} index={i} key={i}>
    //       <Typography>{list.testimonial}</Typography>
    //       <SkeleBar h={4} my={1} />
    //       <Rating defaultValue={list.starRating} precision={0.5} readOnly />
    //     </TabPanel>
    //   ))}
    // </Box>
  );
}
