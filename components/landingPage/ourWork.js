import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import { getStartedBtn } from "../../public/Settings/baseSettings";
import ListOfDevelopmentServices from "../index/listOfDevelopmentServices";

function OurWork({ mode, theme }) {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: 6,
      width: {md: "95%", lg: "80%"},
      paddingY: 8,
      minHeight: "100vh",
      bgcolor:
        mode !== "light"
          ? theme.palette.customPrimaryReversed.light
          : theme.palette.customPrimaryReversed.dark,
      color:
        mode == "light"
          ? theme.palette.customPrimary.contrastText
          : theme.palette.customPrimary.main,
          backgroundImage: `url(Images/DevLab.jpg)`,
          backgroundPosition: 'center',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
      clipPath: {
        xs: `polygon(0 5%, 100% 0%, 100% 95%, 0% 100%)`,
        md: `polygon(
       0 10%, 
       10% 15%,
       5% 10%,

       95% 0%,
       85% 10%,
       95% 5%,

       100% 90%,
       85% 80%,
       95% 90%,

       5% 100%,
       15% 85%,
       5% 95%)`,
      },
    },
    header: {
      variant: "secondary",
      component: "h2",
      textAlign: "center",
    },
    devContainer: {
      display: "flex",
      flexDirection: { md: "row", xs: "column" },
      gap: { xs: 0, md: 6 },
      justifyContent: "space-around",
      width: "100%",
    },
  };

  const content = {
    header: `Our Work Speaks for Itself`,
    cta: `Ask about our services`,
  };
  return (
    <Box sx={styles.container}>
      <Typography
        variant={styles.header.variant}
        component={styles.header.component}
        color={styles.header.color}
        gutterBottom
        sx={styles.header}
      >
        {content.header}
      </Typography>
      <Box color={styles.devContainer.color} sx={styles.devContainer}>
        <ListOfDevelopmentServices mode={mode} theme={theme} />
      </Box>
      {getStartedBtn(content.cta)}
    </Box>
  );
}

export default OurWork;
