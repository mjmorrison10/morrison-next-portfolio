import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { testimonialsList } from "../public/Settings/baseSettings";
import { Rating, useMediaQuery } from "@mui/material";
import SkeleBar from "./SkeleBar";

function TabPanel(props) {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            overflowY: "scroll",
            height: "100%",
          }}
          maxWidth={"65ch"}
        >
          {/* <Typography> */}
          {children}
          {/* </Typography> */}
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function TestimonialsComp() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
        maxWidth: "fit-content",
      }}
    >
      <Tabs
        orientation={"vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", maxWidth: "fit-content" }}
      >
        {testimonialsList.map((list, i) => (
          <Tab label={list.name} {...a11yProps(i)} key={i} />
        ))}
      </Tabs>

      {testimonialsList.map((list, i) => (
        <TabPanel variant="scrollable" value={value} index={i} key={i}>
          <Typography>{list.testimonial}</Typography>
          <SkeleBar h={4} my={1} />
          <Rating defaultValue={list.starRating} precision={0.5} readOnly />
        </TabPanel>
      ))}
    </Box>
  );
}
