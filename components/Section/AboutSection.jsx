import { Grid, Typography, Button, Box } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  paddingres: {
    paddingTop: "2rem",
  },
});

const AboutSection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Box
        component={Grid}
        item
        display={{ xs: "none", md: "flex" }}
        md={8}
        container
        spacing={4}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={6}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Image src="/aboutsection.jpg" width="640" height="423" />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          container
          direction="column"
          spacing={4}
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography
              variant="h3"
              color="primary"
              style={{ fontWeight: 600 }}
              align="center"
            >
              About us
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="secondary" align="center">
              Organic Cloud Kitchen is a "Pure Vegetarian", "Delivery Only",
              "Multi Cuisine" Kitchen which involves usage of "100% Organic
              Ingredients".
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        component={Grid}
        item
        display={{ sm: "flex", md: "none" }}
        container
        style={{ padding: 20 }}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          spacing={4}
          direction="column"
        >
          <Grid item>
            <Typography
              variant="h4"
              color="primary"
              style={{ fontWeight: 600 }}
              align="center"
            >
              About us
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="secondary" align="center">
              Organic Cloud Kitchen is a "Pure Vegetarian", "Delivery Only",
              "Multi Cuisine" Kitchen which involves usage of "100% Organic
              Ingredients".
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classes.paddingres}
        >
          <Image src="/aboutsection.jpg" width="640" height="423" />
        </Grid>
      </Box>
    </Grid>
  );
};
export default AboutSection;
