import { Skeleton } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

function SkeleBar() {
  return (
    <Skeleton
      animation="pulse"
      height={8}
      width={'90%'}
      sx={{
        backgroundColor: 'info.light',
        margin: "0 auto",
        my: 2,
      }}
    />
  );
}

export default SkeleBar;
