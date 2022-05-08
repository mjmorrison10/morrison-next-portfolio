import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import camWords from "./camWords";
import Link from "next/link";

export default function SplitButton(props) {
  const activeColor = props.activeColor;
  const inactiveColor = props.inactiveColor;

  const [open, setOpen] = React.useState(false);
  const [btnColor, setBtnColor] = React.useState(inactiveColor);

  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  let text;
  const color = btnColor;

  // const variant = props.variant;
  // const setBtnColor = props.setBtnColor;
  // const key = props.key;
  // const title = props.title;
  // const menuOptions = props.menuOptions;
  // const extMenuOptions = props.extMenuOptions;
  // const extMenuLinks = props.extMenuLinks;

  // console.log(props.extMenuOptions);

  // console.log(
  //   props.setBtnColor
  // );

  const handleClick = (e) => {
    text = e.target.innerText;
    // console.log(camWords(text));

    // console.info(`You clicked ${e.target.innerText}`);
  };
  // const handleClick = () => {
  //   console.info(`You clicked ${props.menuOptions[selectedIndex]}`);
  // };

  const handleColorChange = () => {
    !open ? setBtnColor(activeColor) : setBtnColor(inactiveColor);
  };

  const handleMenuItemClick = (event, index) => {
    props.isModalOpen ? props.modal() : null;
    text = event.target.innerText;
    console.log(camWords(text));
    // console.log(event.target.innerText);
    setSelectedIndex(index);
    setOpen(false);
    handleColorChange();
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    console.log(open);
    handleColorChange();
    // !open ? props.setBtnColor("secondary") : props.setBtnColor("info");
    props.menuOptions.length === 0 && props.isModalOpen ? props.modal() : null;
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    handleColorChange();
    // !open ? props.setBtnColor("secondary") : props.setBtnColor("info");
    setOpen(false);
  };

  const styles = {
    paper: {
      bgcolor: 'customAccent.main',
      color: 'customAccent.contrastText',
      boxShadow: `0rem 0rem 0.5rem 0.125rem hsl(209, 85%, 95%)`
    }
  }

  return (
    <React.Fragment>
      {/* <Link
        href={props.menuOptions.length === 0 ? `/${camWords(props.title)}` : ""}
        passHref
        > */}
      <Button
        href={props.menuOptions.length === 0 ? `/${camWords(props.title)}` : ""}
        onClick={(e) => {
          handleToggle();
          handleClick(e);
        }}
        variant={props.variant}
        color={color}
        // children={props.children}
        ref={anchorRef}
        aria-label="split button"
        sx={{ zIndex: "10", height: "fit-content" }}
        endIcon={props.menuOptions.length > 0 ? <ArrowDropDownIcon /> : null}
      >
        {props.title}
      </Button>
      {/* </Link> */}

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 11 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper sx={styles.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {props.menuOptions.map((option, index) => (
                    <Link
                      key={option}
                      href={
                        option !== undefined ? `/menu/${camWords(option)}` : ""
                      }
                      passHref
                    >
                      <MenuItem
                        key={option}
                        divider={true}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    </Link>
                  ))}
                  {/* {extMenuOptions && extMenuOptions.map((option, index) => (
                    <Link key={option} href={option.extMenuLink} passHref>
                      <MenuItem
                        key={option}
                        divider={true}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    </Link>
                  ))} */}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
