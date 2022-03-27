import { Box, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <Box
    component={'footer'}
      bgcolor="info.dark"
      mt={2}
      borderRadius={"8px 8px 0 0"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={1}
      sx={{
        padding: { xs: "1rem", sm: "1.5rem 3rem", md: "2.5rem 5rem" },
      }}
    >
      <Typography
        fontWeight={"bold"}
        letterSpacing={1.25}
        color={blue[50]}
        // padding={"2.5rem 0 2.5rem 2.5rem"}
      >
        Copyright &copy; {new Date().getFullYear()}
      </Typography>
      <Button
        sx={{
          // m: "0 2.5rem 0 0",
          height: "fit-content",
        }}
        size={"small"}
        href="https://mjmorrison10.wordpress.com/"
      >
        MorrisonDevOps
      </Button>
    </Box>
  );
}

export default Footer;
