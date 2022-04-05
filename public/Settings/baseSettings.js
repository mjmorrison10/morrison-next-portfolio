import {
  BugReport,
  Cottage,
  DataThresholding,
  FlightLand,
  PrecisionManufacturing,
  PriorityHighOutlined,
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
      "Who Am I",
      "Why you should hire me",
      // "Frequently Asked Questions",
      "Testimonials",
    ],
  },
  // {
  //   title: "Experience",
  //   menuTitle: ["Front End", "Back End", "Tools", "Testimonials"],
  // },
  {
    title: "Projects",
    menuTitle: [],
  },
  // {
  //   title: "Education",
  //   menuTitle: ["Web Development Journey"],
  // },
  {
    title: "Portfolios",
    menuTitle: [
      "First Portfolio",
      "React Portfolio",
      "MorrisonDevOps WordPress",
    ],
  },
];
// extMenuLink: [
//   "https://mjmorrison10.github.io/Portfolio/",
//   "https://portfolio-mjm-react.netlify.app/",
//   "https://mjmorrison10.wordpress.com/",
// ],

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

// import { useMediaQuery, useTheme } from "@mui/material";
// const matchesXs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
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
      startIcon={<PriorityHighOutlined />}
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
  {
    name: `Bee Anna`,
    testimonial: `Highly recommend! 5 stars`,
    starRating: 5,
  },
];

export const testimonialsAverageRating =
  Object.entries(testimonialsList)
    .map((testimonial) => testimonial[1].starRating)
    .reduce((a, c) => a + c) / testimonialsList.length;

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
    heading: `Complete Custom Web Page`,
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
    heading: `Debugging Software Code`,
    description: `
    We are here to help you fix errors in code when they arise. We'll identify web development programming bugs and reproduce the issue, then isolate it, research it, develop a hypothesis for what's causing it, and come up with solutions for fixing them before testing them out to make sure they work as expected. Debugging can take some time, but we'll do our best to get things fixed as soon as possible, so no more errors show up!
    `,
    icon: <BugReport fontSize={iconFontSize} />,
  },
];

export const ProjectsWorkedOn = [
  {
    name: `Personal Trainer Landing Page`,
    lastPublishedDate: `April, 4, 2022`,
    description: `I developed this landing page website specifically with personal fitness trainers in mind. We want to help YOU attract clients and convert sales with a website similar to this!`,
    languages: [`HTML`, `CSS`, `JavaScript`],
    website: `https://mdo-fitness.netlify.app/`,
    image: `../Images/Projects/fitnessad.png`,
    category: ["All Websites", "Landing Page", "Best Work"],
  },
  {
    name: `Old School RuneScape`,
    lastPublishedDate: `July 8, 2021`,
    description: `RuneScape holds a special place in my heart, especially in my web development journey. Huge compliments to JaGeX for developing this incredible game years ago. This game got me started with programming by creating an IRC bot using mIRC Scripting Language. This website was one of my first projects developed using HTML and CSS.`,
    languages: ["HTML", "CSS"],
    website: `https://osrsclone.netlify.app/`,
    image: `../Images/Projects/OldSchoolRuneScape.png`,
    category: ["All Websites", "Landing Page"],
  },
  {
    name: `Tic Tac Toe`,
    lastPublishedDate: `July 9, 2021`,
    description: `Tic Tac Toe is a paper and pencil game for two players who take turns marking the spaces in a three by three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. It is a solved game, with a forced draw assuming best play from both players.`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://morrison-tictactoe.netlify.app/`,
    image: `../Images/Projects/TicTacToe.png`,
    category: ["All Websites", "Video Games"],
  },
  {
    name: `Michael Jobs`,
    lastPublishedDate: `July 9, 2021`,
    description: `A Software Development Job Board. Michael Jobs allows a user to search through a small database of software opportunities.`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://livedeveloperjobs.netlify.app/`,
    image: `../Images/Projects/MichaelJobs.png`,
    category: ["All Websites", "Dashboard", "JavaScript", "Landing Page"],
  },
  {
    name: `JavaScript Challenges`,
    lastPublishedDate: `July 15, 2021`,
    description: `A set of JavaScript challenges designed to teach the absolute basics of JavaScript. 1) Age Calculator. 2) Generate HTML elements. 3) Rock, Paper, Scissors game. 4) Change the color of all buttons. 5) Finale! Blackjack game!`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: ``,
    image: `../Images/Projects/javaScriptChallenges.png`,
    category: ["All Websites", "JavaScript"],
  },
  // Frontend Mentor
  // FEM x
  {
    name: `Stats preview card component`,
    lastPublishedDate: `Sep 26, 2021`,
    description: `This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.`,
    languages: ["HTML", "CSS"],
    website: `https://fem-stats-preview-card-mjm.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/flexbox-LAC2l36oJ`,
    image: `../Images/Projects/StatsPreviewCardComponentDesktop.jpg`,
    category: ["All Websites", "Component", "Front End Mentor"],
  },
  // FEM 3
  {
    name: `3-column preview card component`,
    lastPublishedDate: `Sep 26, 2021`,
    description: `This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.`,
    languages: ["HTML", "CSS"],
    website: `https://fem-3-column-preview-card-component-mjm.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/using-tailwind-cdn-MpV5-lgtg`,
    image: `../Images/Projects/3ColumnPreviewCardComponentDesktop.jpg`,
    category: ["All Websites", "Component", "Front End Mentor"],
  },
  // FEM x
  {
    name: `Order summary component`,
    description: `A perfect project for newbies who are starting to build confidence with layouts!`,
    lastPublishedDate: `Sep 22, 2021`,
    languages: ["HTML", "CSS"],
    website: `https://mjm-order-summary-fem.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/hsl-variables-used-wqlWJwE9A`,
    image: `../Images/Projects/OrderSummaryComponentDesktop.jpg`,
    category: ["All Websites", "Component", "Front End Mentor"],
  },
  // FEM 5
  {
    name: `FAQ accordion card`,
    description: `In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!`,
    lastPublishedDate: `Oct 2, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-5-faq-accordion-card-main-mjm.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/regular-html-css-and-javascript-WpDMeGENP`,
    image: `../Images/Projects/FAQAccordionCardDesktop.jpg`,
    category: ["All Websites", "Component", "Front End Mentor", "JavaScript"],
  },
  // FEM 4
  {
    name: `Profile card component`,
    description: `This is a perfect challenge to test your layout skills. The card layout doesn't shift, so it's also great for those that haven't dived into responsive websites yet!`,
    lastPublishedDate: `Sep 26, 2021`,
    languages: ["HTML", "CSS"],
    website: `https://fem-4-profile-card-component-main-mjm.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/using-tailwind-J8Ivj8EUH`,
    image: `../Images/Projects/ProfileCardComponentDesktop.jpg`,
    category: ["All Websites", "Component", "Front End Mentor"],
  },
  // FEM 6
  {
    name: `Social proof section`,
    description: `This project will test your layout skills. If you're starting to get confident with Flexbox or Grid, this will provide a nice challenge!`,
    lastPublishedDate: `Oct 3, 2021`,
    languages: ["HTML", "CSS"],
    website: `https://fem-6-social-proof-section-master-mjm.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/flexbox-8rbqTAHpj`,
    image: `../Images/Projects/SocialProofSectionDesktop.jpg`,
    category: ["All Websites", "Section", "Front End Mentor"],
  },
  // FEM 8
  {
    name: `Four card feature section`,
    description: `A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.`,
    lastPublishedDate: `Oct 28, 2021`,
    languages: ["HTML", "CSS"],
    website: `https://fem-8-four-card-feature-section-master.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-design-using-regular-html-and-css-CfREhUjbj`,
    image: `../Images/Projects/FourCardFeatureSectionDesktop.jpg`,
    category: ["All Websites", "Section", "Front End Mentor"],
  },
  // FEM 9
  {
    name: `Base Apparel coming soon page`,
    description: `This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation.`,
    lastPublishedDate: `Oct 29, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-9-base-apparel-coming-soon.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-design-using-flexbox-QCQqEF41u`,
    image: `../Images/Projects/BaseApparelComingSoonPageDesktop.jpg`,
    category: ["All Websites", "Landing Page", "Front End Mentor"],
  },
  // FEM 10
  {
    name: `Intro component with sign-up form`,
    description: `Practice building out a sign-up form complete with client-side validation using JavaScript.`,
    lastPublishedDate: `Oct 29, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-10-intro-component-with-signup-form-master.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-design-using-flexbox-and-javascript-gmDcEEBy3`,
    image: `../Images/Projects/IntroComponentWithSignupFormDesktop.jpg`,
    category: ["All Websites", "Component", "Front End Mentor"],
  },
  // FEM 11
  {
    name: `Single price grid component`,
    description: `In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.`,
    lastPublishedDate: `Oct 30, 2021`,
    languages: ["HTML", "CSS"],
    website: `https://fem-11-single-price-grid-component-master.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-design-using-flexbox-BaugkVbN-`,
    image: `../Images/Projects/SinglePriceGridComponentDesktop.jpg`,
    category: ["All Websites", "Component", "Front End Mentor"],
  },
  // FEM 12
  {
    name: `Ping single column coming soon page`,
    description: `This challenge is great for beginners and offers a chance to practice basic client-side form validation.`,
    lastPublishedDate: `Oct 30, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-12-ping-coming-soon-page-master.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-design-using-flexbox-Q7-jH_Cmb`,
    image: `../Images/Projects/PingSingleColumnComingSoonPageDesktop.jpg`,
    category: ["All Websites", "Component", "Front End Mentor"],
  },
  // FEM 13
  {
    name: `Huddle landing page with a single introductory section`,
    description: `A perfect challenge for beginners, this project will get you working with a two column layout.`,
    lastPublishedDate: `Oct 30, 2021`,
    languages: ["HTML", "CSS"],
    website: `https://fem-13-huddle-landing-page-with-single-introductory.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-design-using-flexbox-kvwmDBs5A`,
    image: `../Images/Projects/HuddleLandingPageWithASingleIntroductorySectionDesktop.jpg`,
    category: ["All Websites", "Landing Page", "Front End Mentor"],
  },
  // FEM 14
  {
    name: `Time tracking dashboard`,
    description: `A perfect opportunity to practice your CSS Grid skills. For anyone wanting to take it up a notch, we provide a JSON data file to practice working with data.`,
    lastPublishedDate: `Nov 2, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-14-time-tracking-dashboard-main.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-design-using-grid-8hCaPcVE3`,
    image: `../Images/Projects/TimeTrackingDashboardDesktop.jpg`,
    category: ["All Websites", "Dashboard", "Front End Mentor"],
  },
  // FEM 15
  {
    name: `Tip calculator app`,
    description: `This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!`,
    lastPublishedDate: `Nov 14, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-15-tip-calculator-app-main.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-tip-calculator-using-css-flexbox-_L3pNhTrI`,
    image: `../Images/Projects/TipCalculatorAppDesktop.jpg`,
    category: ["All Websites", "JavaScript", "Front End Mentor"],
  },
  // FEM 16
  {
    name: `Sunnyside agency landing page`,
    description: `This challenge will be a perfect test of your layout and responsive skills. There's a tiny bit of JS for the mobile menu, but the focus is HTML & CSS`,
    lastPublishedDate: `Nov 12, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-16-sunnyside-agency-landing-page-main.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-landing-page-using-css-grid-and-flexbox-CtMWPfmzL`,
    image: `../Images/Projects/SunnysideAgencyLandingPageDesktop.jpg`,
    category: ["All Websites", "Landing Page", "Front End Mentor"],
  },
  // FEM 17
  {
    name: `Blogr landing page`,
    description: `Flex your layout muscles with this landing page challenge. You'll mostly be working with HTML & CSS for this project with a tiny bit of JS for the mobile menu.`,
    lastPublishedDate: `Nov 5, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-17-blogr-landing-page-main.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-landing-page-using-flexbox-jpysNzKmW`,
    image: `../Images/Projects/BlogrLandingPageDesktop.jpg`,
    category: ["All Websites", "Landing Page", "Front End Mentor"],
  },
  // FEM 18
  {
    name: `Crowdfunding product page`,
    description: `This challenge will test both your layout and state management skills. As visitors make pledges, your goal is to keep track of the changes.`,
    lastPublishedDate: `Nov 12, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-18-crowdfunding-product-page-main.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-landing-page-using-flexbox-G2jB4fQ1g`,
    image: `../Images/Projects/CrowdfundingProductPageDesktop.jpg`,
    category: ["All Websites", "Landing Page", "Front End Mentor"],
  },
  // FEM 20
  {
    name: `Loopstudios landing page`,
    description: `This challenge is perfect if you're looking to test your CSS Grid chops. Even without Grid, this project will be a fun one to help you practice your layout skills!`,
    lastPublishedDate: `Nov 6, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-20-loopstudios-landing-page-main.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-landing-page-using-grid-and-flexbox-wK49t7bh0`,
    image: `../Images/Projects/LoopstudiosLandingPageDesktop.jpg`,
    category: ["All Websites", "Landing Page", "Front End Mentor"],
  },
  // FEM 21
  {
    name: `Testimonials grid section`,
    description: `This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!`,
    lastPublishedDate: `Nov 13, 2021`,
    languages: ["HTML", "CSS"],
    website: `https://fem-21-testimonials-grid-section-main.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-design-using-css-grid-qR4_b1_WD`,
    image: `../Images/Projects/TestimonialsGridSectionDesktop.jpg`,
    category: ["All Websites", "Section", "Front End Mentor"],
  },
  // FEM 22
  {
    name: `Fylo data storage component`,
    description: `This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!`,
    lastPublishedDate: `Nov 15, 2021`,
    languages: ["HTML", "CSS"],
    website: `https://fem-22-fylo-data-storage-component-master.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-design-using-flexbox-IciKr779i`,
    image: `../Images/Projects/FyloDataStorageComponentDesktop.jpg`,
    category: ["All Websites", "Component", "Front End Mentor"],
  },
  // FEM 23
  {
    name: `Coding bootcamp testimonials slider`,
    description: `This challenge will be a nice test if you're new to JavaScript. It's also a great opportunity to play around with content animations and transitions.`,
    lastPublishedDate: `Nov 15, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-23-coding-bootcamp-testimonials.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-design-using-flexbox-48xiDBnvj`,
    image: `../Images/Projects/CodingBootcampTestimonialsSliderDesktop.jpg`,
    category: ["All Websites", "Landing Page", "Front End Mentor"],
  },
  // FEM 24
  {
    name: `Social media dashboard with theme switcher`,
    description: `This challenge will be a perfect chance to practice your Grid skills. The color theme switcher also adds a nice additional test.`,
    lastPublishedDate: `Nov 15, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-24-social-media-dashboard-with-theme-switcher-master.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-design-using-css-grid-DsyZ77F0R`,
    image: `../Images/Projects/SocialMediaDashboardWithThemeSwitcherDesktop.jpg`,
    category: ["All Websites", "Dashboard", "Front End Mentor"],
  },
  // FEM 25
  {
    name: `Insure landing page`,
    description: `Test your layout skills with this HTML & CSS only landing page. This challenge is perfect if you're starting to get confident in laying out web pages.`,
    lastPublishedDate: `Nov 16, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-25-insure-landing-page-master.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-landing-page-using-flexbox-T-bL1p9Wt`,
    image: `../Images/Projects/InsureLandingPageDesktop.jpg`,
    category: ["All Websites", "Landing Page", "Front End Mentor"],
  },
  // FEM 26
  {
    name: `Pricing component with toggle`,
    description: `This challenge will get you thinking about building an accessible custom toggle control and also test your layout skills.`,
    lastPublishedDate: `Nov 16, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-26-pricing-component-with-toggle-master.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-design-using-flexbox-Wo2YfpRYz`,
    image: `../Images/Projects/PricingComponentWithToggleDesktop.jpg`,
    category: ["All Websites", "Component", "Front End Mentor"],
  },
  // FEM 27
  {
    name: `Project tracking intro component`,
    description: `Some interesting layout and code challenges are baked into this design. Perfect if you're a beginner who is starting to get a bit more confident with your layouts.`,
    lastPublishedDate: ``,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-27-project-tracking-intro-component-master.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-landing-page-using-flexbox-qoqRJYQR5`,
    image: `../Images/Projects/ProjectTrackingIntroComponentDesktop.jpg`,
    category: ["All Websites", "Component", "Front End Mentor"],
  },
  // FEM 28
  {
    name: `Clipboard landing page`,
    description: `Put your layout skills to the test with this HTML & CSS landing page challenge. This challenge includes a design for hover states.`,
    lastPublishedDate: `Nov 17, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-28-clipboard-landing-page-master.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-landing-page-using-flexbox-and-css-grid-WTUeyp3NT`,
    image: `../Images/Projects/ClipboardLandingPageDesktop.jpg`,
    category: ["All Websites", "Landing Page", "Front End Mentor"],
  },
  // FEM 29
  {
    name: `Huddle landing page with alternating feature blocks`,
    description: `This challenge is perfect if you're wanting to practice your layout skills. If you're starting to get a bit more confident laying out a web page, give this project a go.`,
    lastPublishedDate: `Nov 18, 2021`,
    languages: ["HTML", "CSS"],
    website: `https://fem-29-huddle-landing-page.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-landing-page-using-flexbox-nw7bXz278`,
    image: `../Images/Projects/HuddleLandingPageWithAlternatingFeatureBlocksDesktop.jpg`,
    category: ["All Websites", "Landing Page", "Front End Mentor"],
  },
  // FEM 30
  {
    name: `Fylo dark theme landing page`,
    description: `This design has some nice layout challenges in it. A perfect training ground to practice your Flexbox and/or Grid skills.`,
    lastPublishedDate: `Nov 19, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-30-fylo-dark-theme-landing-page-master.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-landing-page-using-css-flexbox-ovFEmk8EF`,
    image: `../Images/Projects/FyloDarkThemeLandingPageDesktop.jpg`,
    category: ["All Websites", "Landing Page", "Front End Mentor"],
  },
  // FEM 31
  {
    name: `Fylo landing page with two column layout`,
    description: `This project is great if you're starting to get confident with slightly more complex layouts. The second section with the testimonial area will provide a nice challenge.`,
    lastPublishedDate: `Nov 20, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://fem-31-fylo-landing-page-with-two-column-layout-master.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-landing-page-using-flexbox-wzIwHxYAL`,
    image: `../Images/Projects/FyloLandingPageWithTwoColumnLayoutDesktop.jpg`,
    category: ["All Websites", "Landing Page", "Front End Mentor"],
  },
  // FEM 32
  {
    name: `Huddle landing page with curved sections`,
    description: `Practice using pseudo-elements for styling extras and the CSS position property for the sections with curved edges.`,
    lastPublishedDate: `Nov 20, 2021`,
    languages: ["HTML", "CSS"],
    website: `https://fem-32-huddle-landing-page-with-curved-sections-master.netlify.app/`,
    frontEndMentorWebsite: `https://www.frontendmentor.io/solutions/responsive-landing-page-using-flexbox-EyCLNfT94`,
    image: `../Images/Projects/HuddleLandingPageWithCurvedSectionsDesktop.jpg`,
    category: ["All Websites", "Landing Page", "Front End Mentor"],
  },

  {
    name: `Guess My Number!`,
    description: `The website is thinking about a number between 1 - 20. Guess the number! If you guess wrong, it'll tell you "too low" or "too high" and decrease by a point. Once you find the correct number, it'll flash green and you win!`,
    lastPublishedDate: `Nov 28, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://guess-my-number-mjm.netlify.app`,
    image: `../Images/Projects/guessMyNumber.png`,
    category: ["All Websites", "Video Games", "JavaScript"],
  },

  {
    name: `Pig Game`,
    description: `Pig (dice game) is a simple dice game first described in 1945. Players take turns to roll a single dice as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a one.`,
    lastPublishedDate: `Dec 6, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://pig-game-mjm.netlify.app/`,
    image: `../Images/Projects/pigGame.png`,
    category: ["All Websites", "Video Games", "JavaScript"],
  },

  {
    name: `Whichbank - Banking Application`,
    description: `Finally, we're getting somewhere in web development. After learning HTML and CSS and the basics of JavaScript, I took this opportunity to expand my web development skills further. Basic banking application utilizing many JavaScript methods.`,
    lastPublishedDate: `Dec 13, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://whichbank.netlify.app/`,
    image: `../Images/Projects/whichbank.png`,
    category: ["All Websites", "Dashboard", "JavaScript"],
  },

  {
    name: `Landing page for Whichbank`,
    description: `In this project, we learned many DOM manipulation tactics, such as Intersectional Observer API and many others.`,
    lastPublishedDate: `Dec 16, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://whichbank-landing.netlify.app/`,
    image: `../Images/Projects/whichbankLanding.png`,
    category: ["All Websites", "JavaScript", "Landing Page", "Best Work"],
  },

  {
    name: `Mapty - Log Your Workout`,
    description: `Mapty is a web application where you can log various workouts and their start locations. Log running or cycling as a work activity, and store the information in local storage.`,
    lastPublishedDate: `Dec 20, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://mapty-ss.netlify.app/`,
    image: `../Images/Projects/mapty.png`,
    category: ["All Websites", "JavaScript", "Best Work"],
  },

  {
    name: `Forkify - Recipe Search`,
    description: `Search over 1 million different recipes by ingredient or name and store your favorite recipes in local storage! In addition, you can push your personal recipe to the API we've developed for this web application!`,
    lastPublishedDate: `Dec 28, 2021`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://forkify-ss.netlify.app/`,
    image: `../Images/Projects/forkify.png`,
    category: ["All Websites", "JavaScript", "Best Work"],
  },

  {
    name: `Concentration Game`,
    description: `Concentration or Memory Game is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.`,
    lastPublishedDate: `Jan 18 2022`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://memory-game-mdo.netlify.app/`,
    image: `../Images/Projects/memoryGame.png`,
    category: ["All Websites", "JavaScript", "Video Games"],
  },

  {
    name: `Whack a Mole`,
    description: ` A typical Whac-A-Mole machine consists of a waist-level cabinet with a play area and display screen, and a large, soft, black mallet. Five holes in the play area top are filled with small, plastic, cartoonish moles, which pop up at random. Points are scored by whacking each mole as it appears. The faster the reaction, the higher the score.`,
    lastPublishedDate: `Jan 21, 2022`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://whack-a-mole-mdo.netlify.app/`,
    image: `../Images/Projects/whackAMole.png`,
    category: ["All Websites", "JavaScript", "Video Games"],
  },

  {
    name: `Connect Four`,
    description: `Connect Four is a two-player connection board game, in which the players choose a color and then take turns dropping colored tokens into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own tokens. Connect Four is a solved game. The first player can always win by playing the right moves.`,
    lastPublishedDate: `Jan 22, 2022`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://connect-four-mdo.netlify.app/`,
    image: `../Images/Projects/connectFour.png`,
    category: ["All Websites", "JavaScript", "Video Games"],
  },

  {
    name: `Snake Game`,
    description: `Snake is a video game genre where the player maneuvers a growing line that becomes a primary obstacle to itself. The concept originated in the 1976 two-player arcade game Blockade from Gremlin Industries, and the ease of implementation has led to hundreds of versions (some of which have the word snake or worm in the title) for many platforms. 1982's Tron arcade game, based on the film, includes snake gameplay for the single-player Light Cycles segment. After a variant was preloaded on Nokia mobile phones in 1998, there was a resurgence of interest in snake games as it found a larger audience. There are several hundred snake games for iOS alone.`,
    lastPublishedDate: `Jan 28, 2022`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://snake-mdo.netlify.app/`,
    image: `../Images/Projects/snakeGame.png`,
    category: ["All Websites", "JavaScript", "Video Games"],
  },

  {
    name: `Rome Artwork Portfolio`,
    description: `My first client! He wanted me to develop this landing page website for his digital artist business. He was very appreciative of the work, and rated me 5 out of 5 stars.`,
    lastPublishedDate: `Feb 24, 2022`,
    languages: ["HTML", "CSS", "JavaScript"],
    website: `https://rome-fly-artwork.netlify.app/`,
    image: `../Images/Projects/rome.png`,
    category: ["All Websites", "Landing Page", "Client Work", "Portfolio"],
  },

  {
    name: `Tax Company`,
    description: `My second client! He hired me to develop this complete website package for his tax company. It's still a work in progress, as we are working together to get his business up the ground. I learned a lot developing this project on React.`,
    lastPublishedDate: ``,
    languages: ["HTML", "CSS", "JavaScript", "React", "next"],
    website: `https://tax-mdo.netlify.app/`,
    image: `../Images/Projects/taxCompany.png`,
    category: [
      "All Websites",
      "Landing Page",
      "Client Work",
      "React",
      "Best Work",
    ],
  },

  {
    name: `My first React Portfolio`,
    description: `My first attempt at React on my own. I had learned how to use React from Clever Programmer, then wanted to update my portfolio to React. Well, here it is. It's better than my previous portfolio, but could be improved upon big time!`,
    lastPublishedDate: `Nov 6, 2021`,
    languages: ["HTML", "CSS", "JavaScript", "React"],
    website: `https://portfolio-mjm-react.netlify.app/`,
    image: `../Images/Projects/firstReactPortfolio.png`,
    category: ["All Websites", "Landing Page", "React", "Portfolio"],
  },
];

export const ProjectAllName = [
  ...new Set(ProjectsWorkedOn.flatMap(({ name }) => name).sort()),
];

export const ProjectAllCategories = [
  ...new Set(ProjectsWorkedOn.flatMap(({ category }) => category).sort()),
];

export const ProjectAllLanguages = [
  ...new Set(ProjectsWorkedOn.flatMap(({ languages }) => languages).sort()),
];

// console.log(ProjectAllName);

// it's a string
// it's something else

// export const projectsWorkedOnHtmlCssJavaScript = ProjectsWorkedOn.filter(
//   (project) => (project.languages = ["HTML", "CSS", "JavaScript"])
// );

export const projectsFilter = (search) => {
  console.log("base settings --> ", search[0], search[1]);
  return ProjectsWorkedOn.filter(
    (project) => search && project.search[0].includes(search[1])
  );
};

export const projectsFilterByLanguages = (search) => {
  if (search == "") return null;
  return ProjectsWorkedOn.filter((project) =>
    project.languages.includes(search)
  );
};

export const projectsFilterByName = (search) => {
  if (search == "") return null;
  return ProjectsWorkedOn.filter((project) => project.name.includes(search));
};

export const projectsFilterByCategories = (search) => {
  if (search == "") return null;
  return ProjectsWorkedOn.filter((project) =>
    project.category.includes(search)
  );
};

// export const projectsFilterByLanguages = ProjectsWorkedOn.filter(
//   (project, search) => project.languages.includes(search)
// );

// export const projectsFilter = ProjectsWorkedOn.filter(
//   (project, objProp, filterType, search) => project.objProp.filterType(search)
//   );
