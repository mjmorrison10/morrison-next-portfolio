import {
  Copyright,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  MobileFriendly,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Typography,
} from "@mui/material";
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
    connectWithUs: `Connect With Us on Social Media`,
  };

  const styles = {
    mainContainer: {
      width: "100%",
    },
    upperContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    iconButton: { display: "flex" },
    bottomContainer: {
      component: "footer",
      bgcolor: "customAccent.dark",
      width: "100%",
      mt: 2,
      borderRadius: "8px 8px 0 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 1,
      padding: { xs: "1rem", sm: "1.5rem 3rem", md: "2.5rem 5rem" },
    },
    copyright: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 0.5,
      fontWeight: "bold",
      letterSpacing: 1.25,
      color: blue[50],
    },
    btn: {
      size: "small",
      href: "https://mjmorrison10.wordpress.com/",
      height: "fit-content",
    },
  };

  return (
    <Box component={styles.bottomContainer.component} sx={styles.mainContainer}>
      <Box sx={styles.upperContainer}>
        <Typography>{content.connectWithUs}</Typography>
        <ButtonGroup sx={styles.iconButton}>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <LinkedIn />
          </IconButton>
          <IconButton>
            <GitHub />
          </IconButton>
          <IconButton>
            <MobileFriendly />
          </IconButton>
        </ButtonGroup>
      </Box>
      <Box sx={styles.bottomContainer}>
        <Typography sx={styles.copyright}>
          {content.copyright.text} {content.copyright.copyright}
          {content.copyright.date}
        </Typography>
        <Button sx={styles.btn} size={styles.btn.size} href={styles.btn.href}>
          <Hyphenated>{companyName}</Hyphenated>
        </Button>
      </Box>
    </Box>
  );
}

export default Footer;
