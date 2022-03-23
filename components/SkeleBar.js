import { Skeleton } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

function SkeleBar({
  animate = "pulse",
  clr = "secondary.light",
  h = 8,
  w = "95%",
  my = 2,
}) {
  console.log("props ->", clr, h);
  return (
    <Skeleton
      animation={animate}
      height={h}
      width={w}
      sx={{
        backgroundColor: clr,
        margin: "0 auto",
        my: my,
      }}
    />
  );
}

export default SkeleBar;
