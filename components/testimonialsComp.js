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
  randomColor,
  randomItemFromAnArray,
  testimonialsList,
  testimonialsAverageRating,
  getStartedBtn,
} from "../public/Settings/baseSettings";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Grow,
  Pagination,
  Paper,
  Rating,
  useMediaQuery,
} from "@mui/material";
import Skelebar from "./SkeleBar";
import { ExpandMore } from "@mui/icons-material";

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

  const [expanded, setExpanded] = React.useState(false);
  const [expandedPanel, setExpandedPanel] = React.useState("");

  const handleExpandedChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setExpandedPanel(panel);

    // console.log(expandedPanel);
  };

  React.useEffect(() => !expanded && setExpandedPanel(""));

  const [displayText, setDisplayText] = React.useState(false);
  const [specificCardToDisplay, setSpecificCardToDisplay] =
    React.useState(true);

  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  const [page, setPage] = React.useState(1);
  const handlePaginationChange = (event, value) => {
    setPage(value);

    setChecked(false);
    setTimeout(() => {
      setChecked(true);
    }, 600);
  };

  const slidesPerPage = 3;
  const [displayPage, setDisplayPage] = React.useState([]);

  // const handleChange = (card) => (panel) => {
  const handleChange = (card) => () => {
    // setDisplayText(displayText ? true : false)
    setDisplayText(!displayText);
    setSpecificCardToDisplay(card);

    // console.log(
    //   "card -->",
    //   card,
    //   "Specific Card -->",
    //   specificCardToDisplay === card,
    //   "displayText -->",
    //   displayText,
    //   "matchesMd ->",
    //   matchesMd
    // );

    // setDisplayText(displayText ? panel : false);
  };

  // function testimonial() {
  //   return (
  //     <Paper
  //       // onClick={() => {
  //       //   console.log(i);
  //       //   setDisplayText(!displayText);
  //       // }}
  //       onClick={handleChange(i)}
  //       key={i}
  //       sx={{
  //         display: "flex",
  //         flexDirection: "column",
  //         padding: 1,
  //         gap: 1,
  //         width: `${!matchesSm ? "82.5vw" : null}`,
  //       }}
  //     >
  //       <Box
  //         display={"flex"}
  //         justifyContent={"center"}
  //         gap={1}
  //         alignItems={"center"}
  //       >
  //         <Avatar {...stringAvatar(`${list.name}`)} />
  //         <Typography>{list.name}</Typography>
  //       </Box>
  //       <Skelebar h={2} w={"100%"} my={0} clr={randomColorWithAccent} />

  //       <Box
  //         display={"flex"}
  //         flexDirection={"column"}
  //         justifyContent={"space-between"}
  //         flexGrow={1}
  //       >
  //         <Typography
  //           variant={"body"}
  //           noWrap={
  //             matchesMd || (!displayText && specificCardToDisplay === i)
  //               ? false
  //               : true
  //           }
  //           maxWidth={"65ch"}
  //         >
  //           {list.testimonial}
  //         </Typography>
  //         <Box
  //           alignSelf={"flex-end"}
  //           display={"flex"}
  //           alignItems={"center"}
  //           justifyContent={"center"}
  //         >
  //           <Typography variant={"caption"}>Rating:</Typography>
  //           <Rating
  //             defaultValue={list.starRating}
  //             precision={0.5}
  //             readOnly
  //             sx={{
  //               color: randomColorWithAccent,
  //               transition: "all 300ms ease-in-out",
  //             }}
  //           />
  //         </Box>
  //       </Box>
  //     </Paper>
  //   );
  // }

  function filterTestimonials(list, i) {
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
    <Box
      display={"flex"}
      // flexWrap={"wrap"}
      // flexWrap={{xs: 'no-wrap', md: "wrap"}}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={1}
      mx={1}
    >
      <Typography
        variant={"body"}
        gutterBottom
        sx={{
          display: "flex",
        }}
      >
        Average Approval Rating:
        <Rating
          defaultValue={testimonialsAverageRating}
          precision={0.5}
          readOnly
          sx={{
            mr: 1,
            color: randomColorWithAccent,
            transition: "all 300ms ease-in-out",
          }}
        />
      </Typography>
      <Typography variant={"caption"} gutterBottom>
        {`There's been a total of ${testimonialsList.length} testimonials`}
      </Typography>

      <Pagination
        count={Math.ceil(testimonialsList.length / slidesPerPage)}
        page={page}
        onChange={handlePaginationChange}
      />

      <Box
        display={"flex"}
        gap={1}
        flexDirection={!matchesMd ? "column" : "row"}
      >
        {test.map((list, i) =>
          !matchesMd ? (
            <Accordion
              key={i}
              onChange={handleExpandedChange(`panel${i}`)}
              expanded={expanded === `panel${i}`}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel${i}bh-content`}
                id={`panel${i}bh-header`}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "90vw",
                  }}
                >
                  <Typography
                    variant={"h3"}
                    color={"info.main"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: 1,
                    }}
                  >
                    <Avatar {...stringAvatar(`${list.name}`)} />
                    {list.name}
                  </Typography>

                  {!matchesMd && expandedPanel != `panel${i}` && (
                    <Typography
                      variant={"body2"}
                      // textAlign={"center"}
                      // gutterBottom
                      maxWidth={"62ch"}
                      // width={'100%'}
                      noWrap={matchesMd ? false : true}
                      sx={{ color: "text.secondary" }}
                    >
                      {list.testimonial}
                    </Typography>
                  )}
                </Box>
              </AccordionSummary>

              <Skelebar h={2} w={"100%"} my={0} clr={randomColorWithAccent} />

              <AccordionDetails>
                <Typography
                  variant={"body2"}
                  textAlign={"center"}
                  gutterBottom
                  maxWidth={"65ch"}
                >
                  {list.testimonial}
                </Typography>

                <Box
                  alignSelf={"flex-end"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Typography variant={"caption"}>Rating:</Typography>
                  <Rating
                    defaultValue={list.starRating}
                    precision={0.5}
                    readOnly
                    sx={{
                      color: randomColorWithAccent,
                      transition: "all 300ms ease-in-out",
                    }}
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          ) : (
            <Grow
              key={i}
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 1000 * i } : {})}
            >
              <Paper
                // onClick={() => {
                //   console.log(i);
                //   setDisplayText(!displayText);
                // }}
                // onClick={handleChange(i)}
                sx={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  padding: 1,
                  gap: 1,
                  maxWidth: `${!matchesSm ? "82.5vw" : null}`,
                }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  gap={1}
                  alignItems={"center"}
                >
                  <Avatar {...stringAvatar(`${list.name}`)} />
                  <Typography
                    // variant={'h3'}
                    fontFamily={"Share Tech Mono"}
                    component={"h3"}
                  >
                    {list.name}
                  </Typography>
                </Box>
                <Skelebar h={2} w={"100%"} my={0} clr={randomColorWithAccent} />

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                  flexGrow={1}
                >
                  <Typography
                    variant={"body2"}
                    textAlign={"center"}
                    gutterBottom
                    noWrap={
                      matchesMd || (!displayText && specificCardToDisplay === i)
                        ? false
                        : true
                    }
                    maxWidth={"65ch"}
                  >
                    {list.testimonial}
                  </Typography>
                  <Box
                    alignSelf={"flex-end"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Typography variant={"caption"}>Rating:</Typography>
                    <Rating
                      defaultValue={list.starRating}
                      precision={0.5}
                      readOnly
                      sx={{
                        color: randomColorWithAccent,
                        transition: "all 300ms ease-in-out",
                      }}
                    />
                  </Box>
                </Box>
              </Paper>
            </Grow>
          )
        )}
      </Box>

      <Pagination
        count={Math.ceil(testimonialsList.length / slidesPerPage)}
        page={page}
        onChange={handlePaginationChange}
      />

      <Box mt={10} mb={5}>
        {getStartedBtn("Contact us now!")}
      </Box>
    </Box>
  );
}
