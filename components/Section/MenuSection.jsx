import React from "react";
import { Card, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const MenuSection = () => {
  const classes = useStyles();
  return (
    <div style={{ padding: 20 }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.root}
        spacing={4}
      >
        <Grid item>
          <Typography
            variant="h3"
            color="primary"
            style={{ fontWeight: 600 }}
            align="center"
          >
            Special
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" color="secondary" align="center">
            Menu of the Week
          </Typography>
        </Grid>
        <Grid container spacing={1} item sm={10} lg={8}>
          <Grid item>
            <Card></Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MenuSection;
