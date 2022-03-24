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
  <Button
    variant="contained"
    color="secondary"
    sx={{
      width: "fit-content",
    }}
  >
    Get Started Now
  </Button>
);

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
    name: `Kelvin Davidson`,
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
