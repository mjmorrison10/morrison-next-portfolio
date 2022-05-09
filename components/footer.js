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
  Tooltip,
  Typography,
} from "@mui/material";
import { blue, red } from "@mui/material/colors";
import React from "react";
import Hyphenated from "react-hyphen";
import { companyName, transitionDelay } from "../public/Settings/baseSettings";

function Footer() {
  const content = {
    copyright: {
      text: `Copyright`,
      copyright: <Copyright />,
      date: new Date().getFullYear(),
    },
    connectWithUs: `Connect With Us on Social Media`,
    links: {
      facebook: {
        title: `Facebook`,
        link: `https://www.facebook.com/MorrisonDevOps/`,
        color: `primary`,
      },
      instagram: {
        title: `Instagram`,
        link: `https://www.instagram.com/morrisondevops/`,
        color: `error`,
      },
      twitter: {
        title: `Twitter`,
        link: `https://twitter.com/MorrisonDevOps`,
        color: `info`,
      },
      linkedin: {
        title: `LinkedIn`,
        link: `https://www.linkedin.com/in/mjmorrison10/`,
        color: `primary`,
      },
      github: {
        title: `GitHub`,
        link: `https://github.com/mjmorrison10`,
        color: `secondary`,
      },
      phone: {
        title: `Call me`,
        link: `tel:(415) 340-0480`,
        color: `success`,
      },
    },
  };

  const styles = {
    mainContainer: {
      width: "100%",
      bgcolor: "customSecondary.main",
      borderRadius: `1rem 1rem 0 0 `,
      transition: transitionDelay,
    },
    upperContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    iconButton: { display: "flex", transition: transitionDelay },
    bottomContainer: {
      component: "footer",
      transition: transitionDelay,

      bgcolor: "customAccent.dark",
      width: "100%",
      mt: 2,
      borderRadius: "1rem 1rem 0 0",
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
      // color: "customPrimaryDark.main",
      color: "customAccent.contrastText",
      transition: transitionDelay,
    },
    btn: {
      size: "large",
      href: "https://mjmorrison10.wordpress.com/",
      height: "fit-content",
      color: "customAccent",
      transition: transitionDelay,
    },
    typography: {
      variant: `primary`,
      component: `div`,
      color: `customSecondary.contrastText`,
      fontSize: "7vw",
      transition: transitionDelay,
    },
  };

  return (
    <Box component={styles.bottomContainer.component} sx={styles.mainContainer}>
      <Box sx={styles.upperContainer}>
        <Typography
          variant={styles.typography.variant}
          component={styles.typography.component}
          color={styles.typography.color}
          sx={styles.typography}
        >
          {content.connectWithUs}
        </Typography>
        <ButtonGroup sx={styles.iconButton}>
          <Tooltip placement="top" title={content.links.facebook.title}>
            <IconButton
              href={content.links.facebook.link}
              color={content.links.facebook.color}
            >
              <Facebook />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" title={content.links.instagram.title}>
            <IconButton
              href={content.links.instagram.link}
              color={content.links.instagram.color}
            >
              <Instagram />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" title={content.links.twitter.title}>
            <IconButton
              href={content.links.twitter.link}
              color={content.links.twitter.color}
            >
              <Twitter />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" title={content.links.linkedin.title}>
            <IconButton
              href={content.links.linkedin.link}
              color={content.links.linkedin.color}
            >
              <LinkedIn />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" title={content.links.github.title}>
            <IconButton
              href={content.links.github.link}
              color={content.links.github.color}
            >
              <GitHub />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" title={content.links.phone.title}>
            <IconButton
              href={content.links.phone.link}
              color={content.links.phone.color}
            >
              <MobileFriendly />
            </IconButton>
          </Tooltip>
        </ButtonGroup>
      </Box>
      <Box sx={styles.bottomContainer}>
        <Typography sx={styles.copyright}>
          {content.copyright.text} {content.copyright.copyright}
          {content.copyright.date}
        </Typography>
        <Button
          sx={styles.btn}
          size={styles.btn.size}
          href={styles.btn.href}
          color={styles.btn.color}
        >
          <Hyphenated>{companyName}</Hyphenated>
        </Button>
      </Box>
    </Box>
  );
}

export default Footer;
