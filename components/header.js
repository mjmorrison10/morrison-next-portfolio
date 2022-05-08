import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { Button, ButtonGroup, Fade, Modal } from "@mui/material";
import { Close, Menu, PhoneCallback } from "@mui/icons-material";
import SplitButton from "./splitButton";
import Link from "next/link";
import {
  companyName,
  companyOwner,
  companyPhoneNumber,
  getStartedBtn,
  menuLabels,
} from "../public/Settings/baseSettings";
import MorrisonDevOpsIcon from "./icons/MorrisonDevOpsIcon";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const objButton = menuLabels;

// const style = {
//   position: "absolute",
//   top: "5vh",
//   left: "5vw",
//   width: "90vw",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "flex-end",
//   gap: 1,
//   overflow: "scroll",

//   // transform: "translate(-50%, -50%)",
//   // width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// objButton.map((btn) => {
//   console.log(btn.menuTitle);
// });

// console.log(
//     buttonsTitleObj
// );

// buttonsTitleObj.name.map(btn => {
//   console.log(
//       buttonsTitleObj.menuItems.
//   );
// })

function Header(props) {
  const [open, setOpen] = useState(false);
  // const [btnColor, setBtnColor] = useState("info");

  const activateModal = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  const content = {
    iconColor: "hsl(239, 85%, 95%)",
  };

  const styles = {
    appBar: {
      backgroundColor: "customAccent.main",
      borderRadius: "0 0 5% 25%",
      pb: 2,
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      gap: 2,
    },
    businessContainer: {
      display: "flex",
      gap: 1,
      alignItems: "center",
      cursor: "pointer",
    },
    businessNameContainer: {
      minWidth: "fit-content",
      display: "flex",
      flexDirection: "column",
    },
    companyNameTypo: {
      variant: "primary",
      component: "div",
      minWidth: "fit-content",
      color: "customAccent.contrastText",
      letterSpacing: 2,
      lineHeight: 0.5,
    },
    companyOwnerTypo: {
      variant: "body2",
      minWidth: "fit-content",
      color: "customAccent.contrastText",
      fontWeight: "bold",
      letterSpacing: 1,
    },
    modalIcon: {
      display: { xs: "block", md: "none" },
      color: "customAccent.contrastText",
    },
    modal: {
      overflow: "scroll",
    },
    modalBox: {
      backgroundColor: "customAccent.main",
      position: "absolute",
      top: "5vh",
      left: "5vw",
      width: "90vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 1,
      overflow: "scroll",
      border: `2px solid hsl(209, 85%, 95%)`,
      px: 4,
      py: 2,
    },
    buttonGroup: {
      py: 1,
      gap: 2,
      display: { xs: "none", md: "inherit" },
      flexWrap: "wrap",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    btn: {},
    companyBtn: {
      px: 1,
      py: 0.5,
      borderRadius: "0 0 15% 15%",
    },

  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={styles.appBar}>
          <Toolbar sx={styles.toolbar}>
            <Link href="/" passHref>
              <Box sx={styles.businessContainer}>
                {/* <Logo size={75} /> */}
                <MorrisonDevOpsIcon
                  color={content.iconColor}
                  height={60}
                  width={60}
                  marginTop={"3px"}
                />

                <Box sx={styles.businessNameContainer}>
                  <Typography
                    variant={styles.companyNameTypo.variant}
                    component={styles.companyNameTypo.component}
                    sx={styles.companyNameTypo}
                  >
                    {companyName}
                  </Typography>
                  <Typography
                    variant={styles.companyOwnerTypo.variant}
                    sx={styles.companyOwnerTypo}
                  >
                    {companyOwner}
                  </Typography>
                </Box>
              </Box>
            </Link>

            <Box
              onClick={() => {
                activateModal();
              }}
            >
              {!open ? (
                <Menu sx={styles.modalIcon} />
              ) : (
                <Close sx={styles.modalIcon} />
              )}
            </Box>

            <Modal
              open={open}
              onClose={activateModal}
              aria-labelledby="Navbar"
              aria-describedby="Navigation bar"
              sx={styles.modal}
            >
              <Fade in={open}>
                <Box sx={styles.modalBox}>
                  <Close
                    onClick={() => {
                      activateModal();
                    }}
                  />
                  <ButtonGroup
                    sx={{
                      gap: 2,
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {getStartedBtn()}

                    {objButton.map((btn, i) => (
                      <SplitButton
                        // onClick={() => {
                        //   activateModal();
                        // }}
                        isModalOpen={open}
                        modal={activateModal}
                        variant={`contained`}
                        inactiveColor={"customPrimary"}
                        activeColor={"customSecondary"}
                        // btnColor={btnColor}
                        // setBtnColor={setBtnColor}
                        key={i}
                        title={`${btn.title}`}
                        menuOptions={btn.menuTitle.sort()}
                        sx={{
                          width: "100%",
                        }}
                      ></SplitButton>
                    ))}

                    {/* <Link href="/apply" passHref> */}
                    <Button
                      onClick={() => {
                        activateModal();
                      }}
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdQaPXLg0daDpEd3QO88JRBJcrquMVQm-G4PIqcd1ehhPj6Bg/viewform?usp=sf_link"
                      endIcon={<PhoneCallback />}
                      variant="contained"
                      color="customPrimary"
                    >
                      Free Consultation
                    </Button>
                    {/* </Link> */}
                  </ButtonGroup>
                </Box>
              </Fade>
            </Modal>

            <ButtonGroup
              spacing={2}
              sx={styles.buttonGroup}
            >
              {getStartedBtn()}
              {objButton.map((btn, i) => (
                <SplitButton
                  variant={`contained`}
                  inactiveColor={"customPrimary"}
                  activeColor={"customSecondary"}
                  key={i}
                  title={`${btn.title}`}
                  menuOptions={btn.menuTitle.sort()}
                  sx={styles.btn}
                ></SplitButton>
              ))}

              <Button
                endIcon={<PhoneCallback />}
                variant="contained"
                color="customPrimary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdQaPXLg0daDpEd3QO88JRBJcrquMVQm-G4PIqcd1ehhPj6Bg/viewform?usp=sf_link"
                sx={styles.companyBtn}
              >
                <Box display={"flex"} flexDirection={"column"}>
                  <Box fontWeight={"bold"} mb={-0.5}>
                    Free Consultation
                  </Box>
                  <Box mt={-0.5}>{companyPhoneNumber}</Box>
                </Box>
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default Header;
