import {
  BugReport,
  Cottage,
  DataThresholding,
  FlightLand,
  PrecisionManufacturing,
  Sell,
  YoutubeSearchedFor,
} from "@mui/icons-material";
import { Button, useMediaQuery, useTheme } from "@mui/material";

export const menuLabels = [
  {
    title: "Services",
    menuTitle: [
      "Landing Page",
      "Sales Funnel Page",
      "Custom Website",
      "CMS",
      "API and Backend",
      "SEO Optimization",
      "Debugging and Bug Fix",
    ],
  },
  {
    title: "About Us",
    menuTitle: [
      "Contact Me",
      "Who Am I",
      "Why you should hire me",
      "Frequently Asked Questions",
      "Testimonials",
    ],
  },
  {
    title: "Experience",
    menuTitle: ["Front End", "Back End", "Tools", "Testimonials"],
  },
  {
    title: "Projects",
    menuTitle: [
      "HTML, CSS, and JavaScript",
      "JavaScript Games",
      "React JavaScript",
    ],
  },
  {
    title: "Education",
    menuTitle: ["Web Development Journey"],
  },
  {
    title: "Portfolios",
    menuTitle: [
      "First Portfolio",
      "React Portfolio",
      "MorrisonDevOps WordPress",
    ],
    // extMenuLink: [
    //   "https://mjmorrison10.github.io/Portfolio/",
    //   "https://portfolio-mjm-react.netlify.app/",
    //   "https://mjmorrison10.wordpress.com/",
    // ],
  },
];

export const servicesWeOffer = [
  "High-Converting Sales Funnel page",
  "Lead Generation Landing Page",
  "Complete Homepage Website for your Business",
  "Content Management System",
  "SEO Optimization",
  "Alpha / Beta Testing and Debugging",
];

export const companyName = "Morrison DevOps";
export const companyFullName = "Morrison Developer Operations";
export const companyOwner = "Michael Morrison";
export const companyPhoneNumber = "(415)340-0480";


export const matchesScreenSize = (size) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up(size));
  return matches;
};

// import { useMediaQuery, useTheme } from "@mui/material";
// const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
// const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
// const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
// const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

// export const getStartedBtn = (
export const getStartedBtn = (label = "Get Started Now") => {
  return (
    <Button
      variant="contained"
      color="secondary"
      href="https://docs.google.com/forms/d/e/1FAIpQLSdQaPXLg0daDpEd3QO88JRBJcrquMVQm-G4PIqcd1ehhPj6Bg/viewform?usp=sf_link"
    >
      {label}
    </Button>
  );
};

export const testimonialsList = [
  {
    name: `Kelvin Davidson`,
    testimonial: `I needed a landing page for my cleaning business and MorrisonDevOps was able to help me with that. It has been 6 months since they helped me and my sales have increased! I am very thankful for their help, would recommend them to anyone looking for web development services.`,
    starRating: 5,
  },
  {
    name: `Ignacio Graham`,
    testimonial: `The first time I contacted MorrisonDevOps about a website for my cleaning business, they were really helpful and offered me some great advice. They were upfront about their pricing, so I felt very confident that I was getting the best service for my budget. They provided me with a quick quote and we moved right into developing the project. Now that the website is up, my sales has increased.`,
    starRating: 5,
  },
  {
    name: `Rome Artwork`,
    testimonial: `MorrisonDevOps has been an integral part of our development team. They have helped us create a landing page that generates leads and has increased my email list, impressions, and viewers by 300%. I cannot recommend their work enough.`,
    starRating: 5,
  },
  {
    name: `Constance Gonzalez`,
    testimonial: `I was having a lot of issues with my website not being responsive on mobile devices. I was looking for someone to fix the issue, and luckily came across MorrisonDevOps. Michael at MorrisonDevOps helped me get my site working as it should be across all devices quickly and efficiently.`,
    starRating: 5,
  },
  {
    name: `Tonya Logan`,
    testimonial: `I'm so happy with my website. It's a very clean, professional looking site. The customer service has been great too. I'm still new to the Instagram game and MorrisonDevOps was able to develop an awesome landing page for my bio and I got more followers in just a few days!`,
    starRating: 5,
  },
];

export const randomItemFromAnArray = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

export const paletteColors = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
];

export const MuiAccents = ["light", "main", "dark"];

export const randomColorWithAccent = () =>
  `${randomItemFromAnArray(paletteColors)}.${randomItemFromAnArray(
    MuiAccents
  )}`;

export const randomColor = () => randomItemFromAnArray(paletteColors);

export const randomAccent = () => randomItemFromAnArray(MuiAccents);

const iconFontSize = "large";

export const listOfServicesData = [
  {
    heading: `Landing Page`,
    description: `We'll develop and design a professional and modern landing page to generate leads for your business. We'll collect user information such as email to increase your email list.`,
    icon: <FlightLand fontSize={iconFontSize} />,
  },
  {
    heading: `Sales Funnel Page`,
    description: `Do you need a high converting sales funnel page? Well, we are here to help! We can develop and design a website that will boost the sales of your product or online educational course. We'll develop up to three different sales funnels to test which does the best and go from there!`,
    icon: <Sell fontSize={iconFontSize} />,
  },
  {
    heading: `Custom Web Page`,
    description: `Premium service. Do you want a complete website with multiple pages for your business? This offer is for you! This service is an all in one package, including all of our other services. Includes numerous pages, utilizing an API to display data, and full stack web development with a backend database.`,
    icon: <Cottage fontSize={iconFontSize} />,
  },
  {
    heading: `Web page built on CMS`,
    description: `We can work with Content Management Systems (CMS) software to develop your website. We can use tools such as Elementor to customize your WordPress website. Other CMS software includes, but not limited to, Wix, Shopify, and Google Sites. Perfect for bloggers!`,
    icon: <PrecisionManufacturing fontSize={iconFontSize} />,
  },
  {
    heading: `Web page using API and Backend`,
    description: `We can work with Content Management Systems (CMS) software to develop your website. We'll use tools such as Elementor to customize your WordPress website. Other CMS software includes, but is not limited to, Wix, Shopify, and Google Sites. Perfect for bloggers!`,
    icon: <DataThresholding fontSize={iconFontSize} />,
  },
  {
    heading: `SEO Optimization`,
    description: `We will help your website rank higher on Google, Bing, and other search engines by performing search engine optimization. We'll use state of the art tools to analyze your website and discuss tactics to increase your visibility, so clients are more likely to find your business.`,
    icon: <YoutubeSearchedFor fontSize={iconFontSize} />,
  },
  {
    heading: `Bug Fix`,
    description: `
    We are here to help you fix errors in code when they arise. We'll identify web development programming bugs and reproduce the issue, then isolate it, research it, develop a hypothesis for what's causing it, and come up with solutions for fixing them before testing them out to make sure they work as expected. Debugging can take some time, but we'll do our best to get things fixed as soon as possible, so no more errors show up!
    `,
    icon: <BugReport fontSize={iconFontSize} />,
  },
];
