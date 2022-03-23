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
  "Customized Homepage Website for your Business",
  "Content-Management System",
];

export const companyName = "Morrison DevOps";
export const companyFullName = "Morrison Developer Operations";
export const companyOwner = "Michael Morrison";
export const companyPhoneNumber = "(415)340-0480";

// import { useMediaQuery, useTheme } from "@mui/material";
// const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
// const matchesSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
// const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
// const matchesLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
// const matchesXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

export const getStartedBtn = (
  <Button variant="contained" color="secondary">
    Get Started Now
  </Button>
);
