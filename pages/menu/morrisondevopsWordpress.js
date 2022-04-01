// import { Box } from "@mui/material";
// import React from "react";
// import PageComingSoon from "../../components/pageComingSoon";

// function MorrisondevopsWordpress() {
//   return (
//     <Box minHeight={"100vh"}>
//       <PageComingSoon />
//     </Box>
//   );
// }

// export default MorrisondevopsWordpress;

import React from 'react'
import PortfolioComp from '../../components/PortfolioComp'
import { portfolioWritings } from '../../public/Settings/WriteSettings'

function MorrisondevopsWordpress() {
  return (
    <PortfolioComp portfolio={portfolioWritings.wordPressPortfolio} />
    )
}

export default MorrisondevopsWordpress