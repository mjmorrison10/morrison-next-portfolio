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
  companyPhoneNumber,
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

const objButton = [
  { title: "Get Started", menuTitle: [] },
  {
    title: "Experience",
    menuTitle: ["Front End", "Back End", "Tools"],
  },
  {
    title: "Projects",
    menuTitle: [
      "HTML, CSS, and JavaScript",
      "JavaScript Libraries - React",
      "React Framework - Next.Js",
    ],
  },
  {
    title: "Education",
    menuTitle: ["Web Development Journey"],
  },
  {
    title: "About Us",
    menuTitle: [
      "Contact Me",
      "Who Am I?",
      "Why you should hire me",
      "Frequently Asked Questions",
    ],
  },
];

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
  const [btnColor, setBtnColor] = useState("info");

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
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link href="/" passHref>
              <Typography
                variant="h6"
                component="div"
                sx={{ minWidth: "fit-content", cursor: "pointer" }}
              >
                {companyName}
              </Typography>
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
                  {objButton.map((btn, i) => (
                    <SplitButton
                      // onClick={() => {
                      //   activateModal();
                      // }}
                      isModalOpen={open}
                      modal={activateModal}
                      variant={`contained`}
                      btnColor={btnColor}
                      setBtnColor={setBtnColor}
                      key={i}
                      title={`${btn.title}`}
                      menuOptions={btn.menuTitle}
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
                    href="/apply"
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
              {objButton.map((btn, i) => (
                <SplitButton
                  variant={`contained`}
                  btnColor={btnColor}
                  setBtnColor={setBtnColor}
                  key={i}
                  title={`${btn.title}`}
                  menuOptions={btn.menuTitle}
                ></SplitButton>
              ))}

              {/* <Link > */}
              <Button
                endIcon={<PhoneCallback />}
                variant="contained"
                color="primary"
                href="/apply"
              >
                <Box
                  sx={{
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="caption" component="div">
                    Free Consultation
                  </Typography>
                  <Typography variant="caption" component="div">
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
