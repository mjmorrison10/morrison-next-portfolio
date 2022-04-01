// import { Box } from "@mui/material";
// import React from "react";
// import PageComingSoon from "../../components/pageComingSoon";

// function ReactPortfolio() {
//   return (
//     <Box minHeight={"100vh"}>
//       <PageComingSoon />
//     </Box>
//   );
// }

// export default ReactPortfolio;

import React from 'react'
import PortfolioComp from '../../components/PortfolioComp'
import { portfolioWritings } from '../../public/Settings/WriteSettings'

function ReactPortfolio() {
  return (
    <PortfolioComp portfolio={portfolioWritings.secondPortfolio} />
    )
}

export default ReactPortfolio