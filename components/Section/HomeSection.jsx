import { Grid, Typography, Button, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  container: {
    paddingTop: "8rem",
    paddingRight: 20,
    paddingLeft: 20,
  },
  imageStyle: {
    width: "30vw",
  },
  imageStyleres: {
    width: "90vw",
  },
});

const HomeSection = () => {
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
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
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
              Organic Cloud Kitchen
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h4"
              color="secondary"
              align="center"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Why eat unhealthy, When you have organic food
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={6} container justify="center" alignItems="center">
          <Grid item>
            <img
              src="/homesection-min.png"
              alt="home"
              className={classes.imageStyle}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        component={Grid}
        item
        display={{ xs: "flex", md: "none" }}
        sm={10}
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid
          item
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <Typography
              variant="h4"
              color="primary"
              style={{ fontWeight: 600 }}
              align="center"
            >
              Organic Cloud Kitchen
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              color="secondary"
              align="center"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Why eat unhealthy, When you have organic food
            </Typography>
          </Grid>
        </Grid>
        <Grid item sm={6} container justify="center" alignItems="center">
          <Grid item>
            <img
              src="/homesection-min.png"
              alt="home"
              className={classes.imageStyleres}
            />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default HomeSection;
