import { Copyright } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import Hyphenated from "react-hyphen";
import { companyName } from "../public/Settings/baseSettings";

function Footer() {
  const content = {
    copyright: {
      text: `Copyright`,
      copyright: <Copyright />,
      date: new Date().getFullYear(),
    },
  };

  const containerStyles = {
    component: "footer",
    bgcolor: "info.dark",
    width: "100%",
    mt: 2,
    borderRadius: "8px 8px 0 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 1,
    padding: { xs: "1rem", sm: "1.5rem 3rem", md: "2.5rem 5rem" },
  };

  const copyrightStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 0.5,
    fontWeight: "bold",
    letterSpacing: 1.25,
    color: blue[50],
  };

  const btnStyles = {
    // m: "0 2.5rem 0 0",
    size: "small",
    href: "https://mjmorrison10.wordpress.com/",
    height: "fit-content",
  };

  return (
    <Box component={containerStyles.component} sx={containerStyles}>
      <Typography sx={copyrightStyles}>
        {content.copyright.text} {content.copyright.copyright}
        {content.copyright.date}
      </Typography>
      <Button sx={btnStyles} size={btnStyles.size} href={btnStyles.href}>
        <Hyphenated>{companyName}</Hyphenated>
      </Button>
    </Box>
  );
}

export default Footer;
