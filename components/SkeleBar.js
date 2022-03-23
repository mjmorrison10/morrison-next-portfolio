import { Skeleton } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

function SkeleBar() {
  return (
    <Skeleton
      animation="pulse"
      height={8}
      width={'95%'}
      sx={{
        backgroundColor: 'secondary.light',
        margin: "0 auto",
        my: 2,
      }}
    />
  );
}

export default SkeleBar;
