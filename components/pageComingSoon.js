import { Close } from "@mui/icons-material";
import { Backdrop, Button, CircularProgress, IconButton, Paper, Snackbar, Typography } from "@mui/material";
import React from "react";

function PageComingSoon({ label = "Page coming soon!" }) {
  // Backdrop
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  }; 

  // Snackbar
  const [state, setState] = React.useState({
    // sbOpen: false,
    open: true,
    vertical: 'bottom',
    horizontal: 'right',
  });

  const { vertical, horizontal } = state;

  // const handleClick = (newState) => () => {
  //   setState({ sbOpen: true, ...newState });
  // };

  // const handleSbClose = () => {
  //   setState({ ...state, sbOpen: false });
  // };

  // const [sbOpen, setSbOpen] = React.useState(true);

  // const handleClick = () => {
  //   setSbOpen(true);
  // };

  // const handleSbClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setSbOpen(false);
  // };

  // const action = (
  //   <React.Fragment>
  //     <Button color="secondary" size="small" onClick={handleSbClose}>
  //       UNDO
  //     </Button>
  //     <IconButton
  //       size="small"
  //       aria-label="close"
  //       color="inherit"
  //       onClick={handleSbClose}
  //     >
  //       <Close fontSize="small" />
  //     </IconButton>
  //   </React.Fragment>
  // );

  return (
    <Backdrop
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color="info" />

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={label}
        key={vertical + horizontal}
      />

      {/* <Snackbar
        open={sbOpen}
        anchorOrigin={{ vertical, horizontal }}
        // autoHideDuration={6000}
        onClose={handleSbClose}
        message={label}
        action={action}
      /> */}

      {/* <Paper sx={{ px: 1, py: 1, background: "rgba(255, 255, 255, 0.65)" }}>
        <Typography variant="h6" color="info.light" fontWeight={"bold"}>
          {label}
        </Typography>
      </Paper> */}
    </Backdrop>
  );
}

export default PageComingSoon;
