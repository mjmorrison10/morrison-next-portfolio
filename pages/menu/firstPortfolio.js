// import { Box, Typography } from "@mui/material";
// import React from "react";
// import PageComingSoon from "../../components/pageComingSoon";
// import { portfolioWritings } from "../../public/Settings/WriteSettings";
// import {
//   LazyLoadImage,
//   trackWindowScroll,
// } from "react-lazy-load-image-component";

// function FirstPortfolio() {
//   const [base, setBase] = React.useState(portfolioWritings.firstPortfolio);

//   // console.log(base.firstDate.getDate());
//   const options = { month: "long" };

//   const firstDateMonth = new Intl.DateTimeFormat("en-US", options).format(
//     base.firstDate
//   );
//   const firstDateDay = base.firstDate.getDate();
//   const firstDateYear = base.firstDate.getFullYear();
//   const firstDateTotal = `${firstDateMonth}, ${firstDateDay} ${firstDateYear}`;

//   const lastDateMonth = new Intl.DateTimeFormat("en-US", options).format(
//     base.lastDate
//   );
//   const lastDateDay = base.lastDate.getDate();
//   const lastDateYear = base.lastDate.getFullYear();

//   const lastDateTotal = `${lastDateMonth}, ${lastDateDay} ${lastDateYear}`;

//   return (
//     <Box minHeight={"100vh"} display={"flex"}>
//       <Box flex={1}>
//         <PageComingSoon />
//         <Typography variant={"h1"} color={"info.dark"}>
//           {base.header}
//         </Typography>
//         <Typography variant={"caption"}>
//           {`Upload Date: ${firstDateTotal} - Modified Date: ${lastDateTotal}`}
//         </Typography>
//         <Typography variant={"body1"} maxWidth={"65ch"}>
//           {base.desc1}
//         </Typography>
//       </Box>
//       <Box flex={1}>
//         <LazyLoadImage
//           src={base.img1}
//           alt={""}
//           height={"100%"}
//           width={"100%"}
//           style={{
//             objectFit: "contain",
//           }}
//         />
//       </Box>
//     </Box>
//   );
// }

// export default FirstPortfolio;


import React from 'react'
import PortfolioComp from '../../components/PortfolioComp'

function FirstPortfolio() {
  return (
    <PortfolioComp />
    )
}

export default FirstPortfolio