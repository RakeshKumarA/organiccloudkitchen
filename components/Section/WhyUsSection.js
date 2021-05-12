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

const WhyUsSection = () => {
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
              Why Us?
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="secondary" align="center">
              Healthy food means healthy body and a healthy mind. Eating food is
              a big part of our life and we should take care of it with utmost
              care.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="secondary" align="center">
              We at Organic Cloud Kitchen want to be part of your healthy
              journey by serving you the most delicious, vegetarian and healthy
              organic dishes in Bangalore.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Image src="/whyussection-min.jpg" width="640" height="423" />
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
              Why Us?
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="secondary" align="center">
              Healthy food means healthy body and a healthy mind. Eating food is
              a big part of our life and we should take care of it with utmost
              care.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="secondary" align="center">
              We at Organic Cloud Kitchen want to be part of your healthy
              journey by serving you the most delicious, vegetarian and healthy
              organic dishes in Bangalore.
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
          <Image src="/whyussection-min.jpg" width="640" height="423" />
        </Grid>
      </Box>
    </Grid>
  );
};
export default WhyUsSection;
