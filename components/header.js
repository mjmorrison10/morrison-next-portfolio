import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import capWords from "../components/capWords";
import { Button, ButtonGroup, Modal } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Close, Menu, PhoneCallback } from "@mui/icons-material";
import SplitButton from "./splitButton";
import Link from "next/link";
import {
  companyName,
  companyOwner,
  companyPhoneNumber,
  getStartedBtn,
  menuLabels,
  listOfServicesData,
} from "../public/Settings/baseSettings";

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

const style = {
  position: "absolute",
  top: "5vh",
  left: "5vw",
  width: "90vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 1,
  overflow: "scroll",

  // transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "primary.light",
            borderRadius: "0 0 5% 25%",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Link href="/" passHref>
              <Box
                minWidth={"fit-content"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    minWidth: "fit-content",
                    cursor: "pointer",
                  }}
                >
                  {companyName}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    minWidth: "fit-content",
                    cursor: "pointer",
                  }}
                >
                  {companyOwner}
                </Typography>
              </Box>
            </Link>

            <Box
              onClick={() => {
                activateModal();
              }}
            >
              {!open ? (
                <Menu sx={{ display: { xs: "block", md: "none" } }} />
              ) : (
                <Close sx={{ display: { xs: "block", md: "none" } }} />
              )}
            </Box>

            <Modal
              open={open}
              onClose={activateModal}
              aria-labelledby="Navbar"
              aria-describedby="Navigation bar"
              sx={{
                overflow: "scroll",
              }}
            >
              <Box sx={style}>
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
                      inactiveColor={"info"}
                      activeColor={"secondary"}
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
                    color="primary"
                  >
                    Free Consultation
                  </Button>
                  {/* </Link> */}
                </ButtonGroup>
              </Box>
            </Modal>

            <ButtonGroup
              spacing={2}
              sx={{
                py: 1,
                gap: 2,
                display: { xs: "none", md: "inherit" },
                flexWrap: "wrap",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {getStartedBtn()}
              {objButton.map((btn, i) => (
                <SplitButton
                  variant={`contained`}
                  inactiveColor={"info"}
                  activeColor={"secondary"}
                  // btnColor={btnColor}
                  // setBtnColor={setBtnColor}
                  key={i}
                  title={`${btn.title}`}
                  menuOptions={btn.menuTitle.sort()}
                ></SplitButton>
              ))}

              {/* <Link > */}
              <Button
                endIcon={<PhoneCallback />}
                variant="contained"
                color="primary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdQaPXLg0daDpEd3QO88JRBJcrquMVQm-G4PIqcd1ehhPj6Bg/viewform?usp=sf_link"
                sx={{
                  px: 1,
                  py: 0.5,
                  borderRadius: "0 0 15% 15%",
                }}
              >
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography variant="button" component="div" mb={-0.5}>
                    Free Consultation
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    mt={-0.5}
                    textAlign={"center"}
                  >
                    {companyPhoneNumber}
                  </Typography>
                </Box>
              </Button>
              {/* </Link> */}
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default Header;
