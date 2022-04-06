import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardHeader from '@material-ui/core/CardHeader';
// import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';
// import Switch from '@material-ui/core/Switch';

// const useStyles = makeStyles((theme) => ({
//   section: {
//     backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//   },
//   cardHeader: {
//     paddingTop: theme.spacing(3),
//   },
// }));

export default function PricingComp(props) {
  //   const classes = useStyles();

  const content = {
    badge: "Pricing",
    "header-p1": "MorrisonDevOps",
    "header-p2": "upfront Pricing Plans",
    description: "We offer transparent pricing plans for the your service. Pricing is negotiable.",
    option1: "Single Use",
    option2: "Monthly Retainer",
    "01_title": "CMS Web Development",
    "01_price": "$100",
    "01_suffix": "",
    "01_benefit1": "3 Web pages",
    "01_benefit2": "1 Blog post",
    "01_benefit3": "10 Revisions",
    "01_benefit4": "Custom Domain Hosting",
    "01_primary-action": "Select plan",
    "01_secondary-action": "Learn more",
    "02_title": "Landing or Sales Web Development",
    "02_price": "$500",
    "02_suffix": "",
    "02_benefit1": "3 High Converting Webpages",
    "02_benefit2": "Generate Leads",
    "02_benefit3": "10 Revisions",
    "02_benefit4": "Custom Domain Hosting",
    "02_primary-action": "Select plan",
    "02_secondary-action": "Learn more",
    "03_title": "Complete Web Development Package",
    "03_price": "$3000",
    "03_suffix": "",
    "03_benefit1": "One multi-page website",
    "03_benefit2": "API or Database usage",
    "03_benefit3": "10 Revisions",
    "03_benefit4": "Unlimited Domains",
    "03_primary-action": "Select plan",
    "03_secondary-action": "Learn more",
    ...props.content,
  };

  const [state, setState] = React.useState({
    checkbox: true,
  });

  const hyperlink = `https://docs.google.com/forms/d/e/1FAIpQLSdQaPXLg0daDpEd3QO88JRBJcrquMVQm-G4PIqcd1ehhPj6Bg/viewform`;

  const handleChange = (event) => {
    setState({ ...state, checkbox: event.target.checked });
  };

  return (
    <section
    //  className={classes.section}
    >
      <Container maxWidth="lg">
        <Box py={8} textAlign="center">
          <Box mb={3}>
            <Container maxWidth="sm">
              <Typography variant="overline" color="textSecondary">
                {content["badge"]}
              </Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="info.main">
                  {content["header-p1"]}{" "}
                </Typography>
                <Typography variant="h3" component="span">
                  {content["header-p2"]}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                paragraph={true}
              >
                {content["description"]}
              </Typography>

              {/* <div>
                <Typography variant="subtitle1" component="span">
                  {content["option1"]}
                </Typography>
                &nbsp;{" "}
                <Switch
                  name="checkbox"
                  color="primary"
                  checked={state.checkbox}
                  onChange={handleChange}
                />{" "}
                &nbsp;
                <Typography variant="subtitle1" component="span">
                  {content["option2"]}
                </Typography>
              </div> */}
            </Container>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader
                  title={content["01_title"]}
                  // className={classes.cardHeader}
                ></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content["01_price"]}
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        component="span"
                      >
                        {content["01_suffix"]}
                      </Typography>
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["01_benefit1"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["01_benefit2"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["01_benefit3"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                      paragraph={true}
                    >
                      {content["01_benefit4"]}
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    //   className={classes.primaryAction}
                    href={hyperlink}
                  >
                    {content["01_primary-action"]}
                  </Button>
                  <Box mt={2}>
                    <Link href={hyperlink} color="primary">
                      {content["03_secondary-action"]}
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader
                  title={content["02_title"]}
                  // className={classes.cardHeader}
                ></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content["02_price"]}
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        component="span"
                      >
                        {content["02_suffix"]}
                      </Typography>
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["02_benefit1"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["02_benefit2"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["02_benefit3"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                      paragraph={true}
                    >
                      {content["02_benefit4"]}
                    </Typography>
                  </Box>
                  <Button variant="contained" color="primary" href={hyperlink}>
                    {content["02_primary-action"]}
                  </Button>
                  <Box mt={2}>
                    <Link href={hyperlink} color="primary">
                      {content["03_secondary-action"]}
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader
                  title={content["03_title"]}
                  // className={classes.cardHeader}
                ></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content["03_price"]}
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        component="span"
                      >
                        {content["03_suffix"]}
                      </Typography>
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["03_benefit1"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["03_benefit2"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["03_benefit3"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                      paragraph={true}
                    >
                      {content["03_benefit4"]}
                    </Typography>
                  </Box>
                  <Button variant="outlined" color="primary" href={hyperlink}>
                    {content["03_primary-action"]}
                  </Button>
                  <Box mt={2}>
                    <Link href={hyperlink} color="primary">
                      {content["03_secondary-action"]}
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </section>
  );
}
