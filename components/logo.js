import { Box } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Logo({ size }) {
  return (
    <Box
      maxHeight={size + 5}
      maxWidth={size + 5}
      minHeight={size - 5}
      minWidth={size - 5}
      borderRadius={"50%"}
      overflow={"hidden"}
    >
      <LazyLoadImage
        src={`/Images/morrisonDevOpsLogo.png`}
        alt={""}
        height={"100%"}
        width={"100%"}
        style={{
          objectFit: "contain",
        }}
      />
    </Box>
  );
}

export default Logo;
